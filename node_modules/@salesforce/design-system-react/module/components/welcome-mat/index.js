function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// Implements the [Welcome Mat design pattern](https://lightningdesignsystem.com/components/welcome-mat/) in React.
// Based on SLDS v2.4.0
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import assign from 'lodash.assign';
import Modal from '../modal';
import ProgressBar from '../progress-bar';
import { WELCOME_MAT } from '../../utilities/constants';
var displayName = WELCOME_MAT;
var propTypes = {
  /**
   * CSS class names to be added to the container element. `array`, `object`, or `string` are accepted.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   * Whether the modal is open
   */
  isOpen: PropTypes.bool,

  /**
   * **Weclome Mat labels for internationalization**
   * This object is merged with the default props object on every render.
   * * `title`: Title for the Welcome Mat
   * * `description`: Label for the radio input
   * * `unitsCompletedAfter`: Label for the radio input
   */
  labels: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    unitsCompletedAfter: PropTypes.string
  }),

  /**
   *	Variant of the WelcomeMat
   */
  variant: PropTypes.oneOf(['steps', 'info-only', 'splash', 'trailhead-connected']),

  /**
   * Link to learn more button
   */
  onRenderInfoActions: PropTypes.func,

  /**
   * Callback to fire when modal is dismissed
   */
  onRequestClose: PropTypes.func,

  /**
   *  Accepts a single WelcomeMatInfoBadge component, to be used with the trailhead variant
   */
  infoBadge: PropTypes.node,

  /**
   *  Do not show again checkbox for info-only variant
   */
  doNotShowAgainCheckbox: PropTypes.node
};
var defaultProps = {
  labels: {
    unitsCompletedAfter: 'units completed'
  },
  variant: 'steps',
  isOpen: true
};
/**
 * A Welcome Mat provides a series of unordered items a user can click to learn about a thematic topic.
 */

var WelcomeMat =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WelcomeMat, _React$Component);

  function WelcomeMat(props) {
    var _this;

    _classCallCheck(this, WelcomeMat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WelcomeMat).call(this, props));
    _this.state = {
      completedSteps: 0,
      totalSteps: 0,
      progress: 0
    };
    return _this;
  }

  _createClass(WelcomeMat, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.generatedId = shortid.generate();
      this.getCount();
    }
    /**
     * Get the WelcomeMat's HTML id. Generate a new one if no ID present.
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "getCount",
    value: function getCount() {
      var totalSteps = React.Children.count(this.props.children);
      var completedSteps = React.Children.toArray(this.props.children).filter(function (c) {
        return c.props.isComplete;
      }).length;
      var progress = completedSteps / totalSteps * 100;
      this.setState({
        totalSteps: totalSteps,
        completedSteps: completedSteps,
        progress: progress
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var labels = assign({}, defaultProps.labels, this.props.labels);
      var splash = React.createElement("div", {
        className: classNames('slds-welcome-mat__info-content', this.props.className),
        id: "".concat(this.getId(), "-content")
      }, React.createElement("h2", {
        className: "slds-welcome-mat__info-title",
        id: "".concat(this.getId(), "-label")
      }, labels.title), React.createElement("div", {
        className: "slds-welcome-mat__info-description slds-text-longform"
      }, React.createElement("p", null, labels.description)), this.props.variant === 'info-only' || this.props.variant === 'splash' ? React.createElement("div", {
        className: "slds-welcome-mat__info-actions"
      }, this.props.onRenderInfoActions() ? this.props.onRenderInfoActions() : null, React.createElement("div", {
        className: "slds-m-top_large"
      }, this.props.doNotShowAgainCheckbox ? this.props.doNotShowAgainCheckbox : null)) : null, (this.props.variant === 'steps' || this.props.variant === 'trailhead-connected') && this.props.children ? React.createElement(React.Fragment, null, React.createElement("div", {
        className: classNames('slds-welcome-mat__info-progress', this.state.completedSteps === this.state.totalSteps ? 'slds-welcome-mat__info-progress_complete' : null)
      }, this.props.variant === 'trailhead-connected' ? React.Children.map(this.props.infoBadge, function (child) {
        return React.cloneElement(child, {
          isComplete: _this2.state.completedSteps === _this2.state.totalSteps ? true : null
        });
      }) : null, this.state.completedSteps !== this.state.totalSteps || this.props.variant !== 'trailhead-connected' ? React.createElement(React.Fragment, null, this.props.variant === 'trailhead-connected' ? React.createElement("p", null, this.state.completedSteps, "/", this.state.totalSteps, " ".concat(labels.unitsCompletedAfter)) : React.createElement("p", null, React.createElement("strong", null, this.state.completedSteps, "/", this.state.totalSteps, " ".concat(labels.unitsCompletedAfter))), React.createElement(ProgressBar, {
        value: this.state.progress,
        radius: "circular"
      })) : null)) : null);
      return React.createElement(Modal, {
        assistiveText: {
          dialogLabelledBy: "".concat(this.getId(), "-label")
        },
        isOpen: this.props.isOpen,
        onRequestClose: this.props.onRequestClose,
        size: "small",
        id: "".concat(this.getId(), "-modal")
      }, React.createElement("div", {
        className: classNames('slds-welcome-mat', {
          'slds-welcome-mat_info-only': this.props.variant === 'info-only'
        }, this.props.children ? null : 'slds-welcome-mat_splash'),
        id: this.getId()
      }, React.createElement("div", {
        className: "slds-welcome-mat__content slds-grid"
      }, this.props.children ? React.createElement(React.Fragment, null, React.createElement("div", {
        className: "slds-welcome-mat__info slds-size_1-of-2"
      }, splash), React.createElement("div", {
        className: classNames('slds-welcome-mat__tiles', 'slds-size_1-of-2', this.props.variant === 'info-only' ? 'slds-welcome-mat__tiles_info-only' : null)
      }, React.Children.map(this.props.children, function (child) {
        return React.cloneElement(child, {
          variant: _this2.props.variant
        });
      }))) : React.createElement("div", {
        className: "slds-welcome-mat__info slds-size_1-of-1"
      }, splash))));
    }
  }]);

  return WelcomeMat;
}(React.Component);

WelcomeMat.displayName = displayName;
WelcomeMat.propTypes = propTypes;
WelcomeMat.defaultProps = defaultProps;
export default WelcomeMat;
//# sourceMappingURL=index.js.map