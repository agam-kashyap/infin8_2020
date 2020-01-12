function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import PropTypes from 'prop-types'; // ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// This project uses `classnames`, 'a simple javascript utility for conditionally
// joining classNames together.'

import classNames from 'classnames'; // Child component

import { PROGRESS_INDICATOR_STEP_VERTICAL } from '../../../utilities/constants';
import Icon from '../../icon'; // ### Display Name

var displayName = PROGRESS_INDICATOR_STEP_VERTICAL; // ### Prop Types

var propTypes = {
  /**
   * Index of step. Used for id's if no step ID exists
   */
  index: PropTypes.number,

  /**
   * Determines if the step has been completed
   */
  isCompleted: PropTypes.bool,

  /**
   * Determines if the step contains an error
   */
  isError: PropTypes.bool,

  /**
   * Determines if the step is currently selected (active)
   */
  isSelected: PropTypes.bool,

  /**
   * Step object. This is passed into event callbacks.
   */
  step: PropTypes.object,

  /**
   * The variant of the parent progress indicator
   */
  variant: PropTypes.string
};
/**
 * StepVertical renders a step icon and its step label if applied
 */

var StepVertical =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StepVertical, _React$Component);

  function StepVertical() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StepVertical);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StepVertical)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "stepIcon", function (renderIcon) {
      var icon = renderIcon ? React.createElement(Icon, {
        category: "utility",
        size: "x-small",
        name: _this.props.isError ? 'error' : 'success'
      }) : null;
      return React.createElement("span", {
        className: classNames('slds-progress__marker', {
          'slds-progress__marker_icon': renderIcon,
          'slds-progress__marker_icon-success': _this.props.variant === 'setup-assistant' && renderIcon && !_this.props.isError
        })
      }, icon);
    });

    _defineProperty(_assertThisInitialized(_this), "renderStepContent", function () {
      if (_this.props.step.onRenderSetupAssistantAction || _this.props.step.setupAssistantEstimatedTime) {
        return React.createElement("div", {
          id: "progress-indicator-vertical-label-".concat(_this.props.step.id || _this.props.index),
          className: "slds-progress__item_content slds-grid slds-grid_align-spread"
        }, React.createElement("div", {
          className: "slds-size_3-of-4"
        }, _this.props.step.label), React.createElement("div", {
          className: "slds-grid slds-grid_align-end slds-size_1-of-4"
        }, React.createElement("div", {
          className: "slds-media__figure slds-media__figure_reverse"
        }, _this.props.step.onRenderSetupAssistantAction, _this.props.step.setupAssistantEstimatedTime && React.createElement("p", {
          className: "slds-text-align_right slds-text-color_weak slds-p-top_medium"
        }, _this.props.step.setupAssistantEstimatedTime))));
      }

      return React.createElement("div", {
        id: "progress-indicator-vertical-label-".concat(_this.props.step.id || _this.props.index),
        className: "slds-progress__item_content slds-grid slds-grid_align-spread"
      }, _this.props.step.label);
    });

    return _this;
  }

  _createClass(StepVertical, [{
    key: "render",
    value: function render() {
      var renderIcon = this.props.isCompleted || this.props.isError;
      return React.createElement("li", {
        className: classNames('slds-progress__item', {
          'slds-is-completed': this.props.isCompleted,
          'slds-is-active': this.props.isSelected && !this.props.isError,
          'slds-has-error': this.props.isError
        })
      }, this.stepIcon(renderIcon), this.renderStepContent());
    }
  }]);

  return StepVertical;
}(React.Component);

StepVertical.propTypes = propTypes;
StepVertical.displayName = displayName;
export default StepVertical; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=step-vertical.js.map