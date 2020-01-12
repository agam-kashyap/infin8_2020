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

import classNames from 'classnames'; // Child component

import Tooltip from '../../tooltip';
import { PROGRESS_INDICATOR_STEP } from '../../../utilities/constants';
import ButtonIcon from '../../icon/button-icon'; // ### Display Name

var displayName = PROGRESS_INDICATOR_STEP; // ### Prop Types

var propTypes = {
  /**
   * **Assistive text for accessibility**
   * This object is merged with the default props object on every render.
   * * `completedStep`: Label for a completed step. The default is `Completed Step`
   * * `disabledStep`: Label for disabled step. The default is `Disabled Step`
   * * `errorStep`: Label for a step with an error. The default is `Error Step`
   * * `percentage`: Label for Progress Bar. The default is `Progress: [this.props.value]%`. You will need to calculate the percentage yourself if changing this string.
   * * `step`: Label for a step. It will be typically followed by the number of the step such as "Step 1".
   */
  assistiveText: PropTypes.shape({
    completedStep: PropTypes.string,
    disabledStep: PropTypes.string,
    percentage: PropTypes.string,
    step: PropTypes.string
  }),

  /**
   * Id for Steps, ranging in [0, steps.length).
   */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Index of step. Used for id's if no step ID exists
   */
  index: PropTypes.number,

  /**
   * Determines if the step has been completed
   */
  isCompleted: PropTypes.bool,

  /**
   * Determines if the step has been disabled
   */
  isDisabled: PropTypes.bool,

  /**
   * Determines if the step contains an error
   */
  isError: PropTypes.bool,

  /**
   * Determines if the step is currently selected (active)
   */
  isSelected: PropTypes.bool,

  /**
   * Label of tooltip attached to the step if applicable.
   */
  label: PropTypes.node,

  /**
   * Triggered when click on individual steps. By default, it receives an event and returns all info passed to that step.
   * users are able to re-define it by passing a function as a prop
   */
  onClick: PropTypes.func,

  /**
   * Triggered when focus on individual steps. By default, it receives an event and returns all info passed to that step.
   * users are able to re-define it by passing a function as a prop
   */
  onFocus: PropTypes.func,

  /**
   * Step object. This is passed into event callbacks.
   */
  step: PropTypes.object,

  /**
   * Determines if the tooltip attached to step is always open.
   * This is mainly for dev test purpose.
   * Usually the tooltip should only show when hover.
   */
  tooltipIsOpen: PropTypes.bool,

  /**
   * Please select one of the following:
   * * `absolute` - (default if `variant` is `modal`) The dialog will use `position: absolute` and style attributes to position itself. This allows inverted placement or flipping of the dialog.
   * * `overflowBoundaryElement` - (default if `variant` is `base`) The dialog will overflow scrolling parents. Use on elements that are aligned to the left or right of their target and don't care about the target being within a scrolling parent. Typically this is a popover or tooltip. Dropdown menus can usually open up and down if no room exists. In order to achieve this a portal element will be created and attached to `body`. This element will render into that detached render tree.
   * * `relative` - No styling or portals will be used. Menus will be positioned relative to their triggers. This is a great choice for HTML snapshot testing.
   */
  tooltipPosition: PropTypes.oneOf(['absolute', 'overflowBoundaryElement', 'relative'])
};
/**
 * Step renders a button icon and its tooltip if applied.
 * The button is applied with different css classes under different conditions.
 * Button icons have 4 types of status: completed (success), active (in progress), error (warning) and uncompleted (not approached)
 */

var Step =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Step, _React$Component);

  function Step() {
    _classCallCheck(this, Step);

    return _possibleConstructorReturn(this, _getPrototypeOf(Step).apply(this, arguments));
  }

  _createClass(Step, [{
    key: "buttonIcon",

    /**
     * buttonIcon represents the button icon used for each step.
     * the button is applied with different css classes under different conditions.
     */
    value: function buttonIcon(renderIcon, status, props) {
      var data = {
        isSelected: props.isSelected,
        isError: props.isError,
        isCompleted: props.isCompleted,
        isDisabled: props.isDisabled,
        step: props.step
      };
      var icon = renderIcon ? React.createElement(ButtonIcon, {
        category: "utility",
        name: this.props.isError ? 'error' : 'success'
      }) : null;

      var handleClick = function handleClick(event) {
        return props.onClick(event, data);
      };

      var handleFocus = function handleFocus(event) {
        return props.onFocus(event, data);
      };

      var stepButton = props.isDisabled ? React.createElement("a", {
        className: classNames('slds-button', {
          'slds-button_icon': renderIcon
        }, 'slds-progress__marker', {
          'slds-progress__marker_icon': renderIcon
        }, 'slds-is-disabled'),
        "aria-disabled": true,
        "aria-describedby": "progress-indicator-tooltip-".concat(this.props.step.id || this.props.index),
        style: {
          cursor: 'not-allowed'
        },
        tabIndex: 0,
        role: "button"
      }, icon, React.createElement("span", {
        className: "slds-assistive-text"
      }, this.props.step.assistiveText || React.createElement(React.Fragment, null, "".concat(props.assistiveText.step, " ").concat(props.index + 1, ": "), props.step.label, "- ".concat(status)))) : React.createElement("button", {
        className: classNames('slds-button', {
          'slds-button_icon': renderIcon
        }, 'slds-progress__marker', {
          'slds-progress__marker_icon': renderIcon
        }),
        onClick: handleClick,
        onFocus: handleFocus,
        "aria-describedby": "progress-indicator-tooltip-".concat(this.props.step.id || this.props.index),
        "aria-current": this.props.isSelected ? 'step' : null,
        type: "button"
      }, icon, React.createElement("span", {
        className: "slds-assistive-text"
      }, this.props.step.assistiveText || React.createElement(React.Fragment, null, "".concat(props.assistiveText.step, " ").concat(props.index + 1, ": "), props.step.label, status ? " - ".concat(status) : '')));
      return stepButton;
    }
  }, {
    key: "render",
    value: function render() {
      var renderIcon = this.props.isCompleted || this.props.isError;
      var status = '';

      if (this.props.isError) {
        status = this.props.assistiveText.errorStep;
      } else if (this.props.isCompleted) {
        status = this.props.assistiveText.completedStep;
      } else if (this.props.isDisabled) {
        status = this.props.assistiveText.disabledStep;
      }

      var tooltipProps = {
        align: 'top',
        id: "progress-indicator-tooltip-".concat(this.props.step.id || this.props.index),
        content: this.props.step.label,
        theme: 'info',
        position: this.props.tooltipPosition,
        triggerStyle: {
          display: !renderIcon ? 'flex' : ''
        }
      }; // This is mainly for dev test purpose.
      // `isOpen` is only set to true if tooltip is specified to be open
      // Do not set isOpen to false or undefined otherwise, because that will
      // disable any interaction with tooltips

      if (this.props.tooltipIsOpen) {
        tooltipProps.isOpen = true;
      }

      return React.createElement("li", {
        className: classNames('slds-progress__item', {
          'slds-is-completed': this.props.isCompleted,
          'slds-is-active': this.props.isSelected && !this.props.isError,
          'slds-has-error': this.props.isError
        })
      }, React.createElement(Tooltip, tooltipProps, this.buttonIcon(renderIcon, status, this.props)));
    }
  }]);

  return Step;
}(React.Component);

Step.propTypes = propTypes;
Step.displayName = displayName;
export default Step; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=step.js.map