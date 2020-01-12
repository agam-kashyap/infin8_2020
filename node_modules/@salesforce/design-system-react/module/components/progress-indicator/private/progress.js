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
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// This project uses `classnames`, 'a simple javascript utility for conditionally
// joining classNames together.'

import classNames from 'classnames';
import ProgressBar from './progress-bar';
import { PROGRESS_INDICATOR_PROGRESS } from '../../../utilities/constants'; // ### Prop Types

var propTypes = {
  /**
   * Assistive text for percentage
   */
  assistiveText: PropTypes.shape({
    percentage: PropTypes.string
  }),

  /**
   * Steps in the component
   */
  children: PropTypes.node,

  /**
   * CSS class names to be added to the container element.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * HTML id for component.
   */
  id: PropTypes.string.isRequired,

  /**
   * Determines the orientation of the progress indicator
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * Percentage of progress completion, ranging [0, 100]
   */
  value: PropTypes.string.isRequired,

  /**
   * Determines component style
   */
  variant: PropTypes.oneOf(['base', 'modal', 'setup-assistant'])
};
/**
 * Progress renders all step buttons and a container wrapping these buttongs and a progress bar
 */

var Progress =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Progress, _React$Component);

  function Progress() {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(this, _getPrototypeOf(Progress).apply(this, arguments));
  }

  _createClass(Progress, [{
    key: "getId",

    /**
     * Get the progress's HTML id. Generate a new one if no ID present.
     */
    value: function getId() {
      return this.props.id;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: this.getId(),
        className: classNames('slds-progress', {
          'slds-progress_shade': this.props.variant === 'modal'
        }, {
          'slds-progress_vertical': this.props.orientation === 'vertical'
        }, {
          'slds-progress_success': this.props.variant === 'setup-assistant'
        }, this.props.className)
      }, React.createElement("ol", {
        className: classNames('slds-progress__list', {
          'slds-progress__list-bordered': this.props.variant === 'setup-assistant'
        })
      }, this.props.children), this.props.orientation !== 'vertical' && React.createElement(ProgressBar, {
        value: this.props.value,
        orientation: this.props.orientation,
        assistiveText: this.props.assistiveText
      }));
    }
  }]);

  return Progress;
}(React.Component);

Progress.propTypes = propTypes;
Progress.displayName = PROGRESS_INDICATOR_PROGRESS;
export default Progress;
//# sourceMappingURL=progress.js.map