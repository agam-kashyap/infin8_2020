function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import assign from 'lodash.assign'; // This component's `checkProps` which issues warnings to developers about properties
// when in development mode (similar to React's built in development tools)

import checkProps from './check-props';
import componentDoc from './component.json';
import Button from '../button';
import ProgressRing from '../progress-ring';
import { ICON, SETUP_ASSISTANT_STEP } from '../../utilities/constants';
var propTypes = {
  /**
   * **Assistive text for accessibility**
   * This object is merged with the default props object on every render.
   * * `expandStep`: Button that examples a step
   * _Tested with snapshot testing._
   */
  assistiveText: PropTypes.shape({
    expandStep: PropTypes.string
  }),

  /**
   * CSS class names to be added to the container element. `array`, `object`, or `string` are accepted.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Detailed description of the step
   */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Estimated time for completing the step
   */
  estimatedTime: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Heading for the step
   */
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   * Index of the step within the step array
   */
  index: PropTypes.number,

  /**
   * Dictates whether the step can be expanded / collapsed
   */
  isExpandable: PropTypes.bool,

  /**
   * If `isExpandable` is true, this prop can be used to control the expanded state. If not provided state will be used instead
   */
  isOpen: PropTypes.bool,

  /**
   * Function that is called to render a step's available action(s). Typically returns a Button, Button of variant "link," or Checkbox of variant "toggle"
   */
  onRenderAction: PropTypes.func,

  /**
   * Function that is called to render step content. Typically returns a ProgressIndicator and/or ScopedNotification component
   */
  onRenderContent: PropTypes.func,

  /**
   * Function that is called to render content within the media figure. Expects to be returned an Icon or ProgressRing component
   */
  onRenderFigure: PropTypes.func,

  /**
   * Function to handle requests to expand / collapse the step
   */
  onToggleIsOpen: PropTypes.func,

  /**
   * Percentage of step completed. No progress indicator will be shown for the step unless this is provided
   */
  progress: PropTypes.number,

  /**
   * Display number for the step. Only appears if progress indicator is enabled. Determined automatically by parent if not provided.
   */
  stepNumber: PropTypes.number
};
var defaultProps = {
  assistiveText: {
    expandStep: 'Expand Step'
  }
};
/**
 * Setup Assistant Step component is used to specify individual items within the Setup Assistant
 * filled with learning and task links along with a recommended sequence that may have progress tracking
 */

var Step =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Step, _React$Component);

  function Step(props) {
    var _this;

    _classCallCheck(this, Step);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Step).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleIsOpen", function (event) {
      if (_this.props.onToggleIsOpen) {
        _this.props.onToggleIsOpen(event, {
          index: _this.props.index,
          isOpen: _this.getIsOpen(),
          step: _this.props
        });
      } else {
        _this.setState({
          isOpen: !_this.getIsOpen()
        });
      }
    });

    _this.generatedId = shortid.generate();
    _this.state = {
      isOpen: props.isOpen || false
    };
    checkProps(SETUP_ASSISTANT_STEP, _this.props, componentDoc);
    return _this;
  }

  _createClass(Step, [{
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "getIsOpen",
    value: function getIsOpen() {
      return this.props.isOpen !== undefined ? this.props.isOpen : this.state.isOpen;
    }
  }, {
    key: "renderMediaContent",
    value: function renderMediaContent() {
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: "slds-setup-assistant__step-summary-content slds-media__body"
      }, React.createElement("h3", {
        className: "slds-setup-assistant__step-summary-title slds-text-heading_small"
      }, this.props.isExpandable ? React.createElement(Button, {
        "aria-controls": "".concat(this.getId(), "-detail-content"),
        className: "slds-button_reset",
        label: this.props.heading,
        onClick: this.toggleIsOpen,
        variant: "base"
      }) : this.props.heading), React.createElement("p", null, this.props.description)), React.createElement("div", {
        className: "slds-media__figure slds-media__figure_reverse"
      }, this.props.onRenderAction ? this.props.onRenderAction() : null, this.props.estimatedTime ? React.createElement("p", {
        className: classNames('slds-text-align_right', 'slds-text-color_weak', {
          'slds-p-top_medium': this.props.onRenderAction !== undefined
        })
      }, this.props.estimatedTime) : null));
    }
  }, {
    key: "renderSummary",
    value: function renderSummary() {
      var figure;
      var progressRingTheme;

      if (this.props.progress > 0 && this.props.progress < 100) {
        progressRingTheme = 'active';
      } else if (this.props.progress === 100) {
        progressRingTheme = 'complete';
      }

      if (this.props.onRenderFigure) {
        figure = this.props.onRenderFigure();

        if (figure && figure.type && figure.type.displayName === ICON) {
          var containerStyle = {
            position: 'relative',
            top: this.props.isExpandable ? '5px' : '-3px'
          };

          if (figure.props.containerStyle) {
            containerStyle = _objectSpread({}, containerStyle, figure.props.containerStyle);
          }

          figure = React.cloneElement(figure, _objectSpread({}, figure.props, {
            containerStyle: containerStyle,
            size: 'small'
          }));
          figure = React.createElement("div", {
            className: "slds-media__figure"
          }, figure);
        }
      } else if (this.props.progress !== undefined) {
        figure = React.createElement("div", {
          className: "slds-media__figure"
        }, React.createElement(ProgressRing, {
          hasIcon: true,
          icon: this.props.progress === 100 ? null : this.props.stepNumber,
          flowDirection: "fill",
          size: "large",
          theme: progressRingTheme,
          value: this.props.progress
        }));
      }

      return React.createElement("div", {
        className: "slds-setup-assistant__step-summary"
      }, React.createElement("div", {
        className: "slds-media"
      }, figure, this.props.isExpandable || this.props.progress !== undefined ? React.createElement("div", {
        className: "slds-media__body slds-m-top_x-small"
      }, React.createElement("div", {
        className: "slds-media"
      }, this.renderMediaContent())) : this.renderMediaContent()));
    }
  }, {
    key: "render",
    value: function render() {
      var assistiveText = assign({}, defaultProps.assistiveText, this.props.assistiveText);
      return React.createElement("li", {
        className: classNames('slds-setup-assistant__item', this.props.className),
        id: this.getId()
      }, React.createElement("article", {
        className: "slds-setup-assistant__step"
      }, this.props.isExpandable ? React.createElement("div", {
        className: classNames('slds-summary-detail', {
          'slds-is-open': this.getIsOpen()
        })
      }, React.createElement(Button, {
        assistiveText: {
          icon: assistiveText.expandStep
        },
        "aria-controls": "".concat(this.getId(), "-detail-content"),
        className: "slds-m-right_x-small slds-m-top_x-small",
        iconCategory: "utility",
        iconClassName: "slds-summary-detail__action-icon",
        iconName: "switch",
        onClick: this.toggleIsOpen,
        variant: "icon"
      }), React.createElement("div", {
        className: "slds-container_fluid"
      }, React.createElement("div", {
        className: "slds-summary-detail__title"
      }, this.renderSummary()), React.createElement("div", {
        className: "slds-summary-detail__content",
        id: "".concat(this.getId(), "-detail-content")
      }, React.createElement("div", {
        className: "slds-setup-assistant__step-detail"
      }, this.props.onRenderContent ? this.props.onRenderContent() : null)))) : this.renderSummary()));
    }
  }]);

  return Step;
}(React.Component);

Step.displayName = SETUP_ASSISTANT_STEP;
Step.propTypes = propTypes;
Step.defaultProps = defaultProps;
export default Step;
//# sourceMappingURL=step.js.map