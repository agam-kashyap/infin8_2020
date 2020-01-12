function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
// # Timepicker Dropdown Trigger
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### Children

import Input from '../../input'; // ### Event Helpers

import KEYS from '../../../utilities/key-code'; // ## Constants

import { MENU_DROPDOWN_TRIGGER } from '../../../utilities/constants';
/**
 *  Component description.
 */

var TimepickerDropdownTrigger =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TimepickerDropdownTrigger, _React$Component);

  function TimepickerDropdownTrigger() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TimepickerDropdownTrigger);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimepickerDropdownTrigger)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (_this.props.onKeyDown && event.keyCode) {
        if (event.keyCode === KEYS.ENTER || event.keyCode === KEYS.DOWN || event.keyCode === KEYS.UP || event.keyCode === KEYS.ESCAPE) {
          _this.props.onKeyDown(event);
        }
      }
    });

    return _this;
  }

  _createClass(TimepickerDropdownTrigger, [{
    key: "render",
    // ### Render
    value: function render() {
      var _this$props = this.props,
          iconRight = _this$props.iconRight,
          menu = _this$props.menu,
          onBlur = _this$props.onBlur,
          onFocus = _this$props.onFocus,
          onKeyDown = _this$props.onKeyDown,
          onMouseDown = _this$props.onMouseDown,
          triggerRef = _this$props.triggerRef,
          props = _objectWithoutProperties(_this$props, ["iconRight", "menu", "onBlur", "onFocus", "onKeyDown", "onMouseDown", "triggerRef"]);

      return (
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        React.createElement("div", {
          onBlur: onBlur,
          onFocus: onFocus,
          onKeyDown: this.handleKeyDown,
          onMouseDown: onMouseDown
        }, React.createElement(Input, _extends({
          iconRight: iconRight
        }, props, {
          inputRef: triggerRef
        }), menu))
      );
    }
  }]);

  return TimepickerDropdownTrigger;
}(React.Component);

_defineProperty(TimepickerDropdownTrigger, "displayName", MENU_DROPDOWN_TRIGGER);

_defineProperty(TimepickerDropdownTrigger, "propTypes", {
  /**
   * Icon for right side of trigger
   */
  iconRight: PropTypes.node,

  /**
   * A unique ID is needed in order to support keyboard navigation, ARIA support, and connect the dropdown to the triggering input.
   */
  id: PropTypes.string,

  /**
   * This label appears above the input.
   */
  label: PropTypes.string,

  /**
   * The dropdown menu.
   */
  menu: PropTypes.node,

  /**
   * Is only called when `openOn` is set to `hover` and when the triggering input loses focus.
   */
  onBlur: PropTypes.func,

  /**
   * This prop is passed onto the triggering `Input`. Triggered when the trigger input is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Is only called when `openOn` is set to `hover` and when the triggering input gains focus.
   */
  onFocus: PropTypes.func,

  /**
   * Called when a key pressed.
   */
  onKeyDown: PropTypes.func,

  /**
   * Called when mouse clicks down on the trigger input.
   */
  onMouseDown: PropTypes.func,

  /**
   * The ref of the actual triggering input.
   */
  triggerRef: PropTypes.func,

  /**
   * Date
   */
  value: PropTypes.string
});

export default TimepickerDropdownTrigger;
//# sourceMappingURL=dropdown-trigger.js.map