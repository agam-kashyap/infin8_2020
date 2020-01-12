function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
// # Slider Component
// Implements the [Slider design pattern](https://www.lightningdesignsystem.com/components/slider/) in React.
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### isFunction

import isFunction from 'lodash.isfunction'; // ### classNames

import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import { SLIDER } from '../../utilities/constants';
import getAriaProps from '../../utilities/get-aria-props';
var propTypes = {
  /**
   * The `aria-describedby` attribute is used to indicate the IDs of the elements that describe the object. It is used to establish a relationship between widgets or groups and text that described them. This is very similar to aria-labelledby: a label describes the essence of an object, while a description provides more information that the user might need.
   */
  'aria-describedby': PropTypes.string,

  /**
   * Assistive text for accessibility**
   * `disabled`: Read by screen readers to indicate a disabled slider
   * `label`: Visually hidden label but read out loud by screen readers.
   */
  assistiveText: PropTypes.shape({
    disabled: PropTypes.string,
    label: PropTypes.string
  }),

  /**
   * Class names to be added to the outer container of the Slider.
   */
  classNameContainer: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * This is the initial value of an uncontrolled form element and is present
   * only to provide compatibility with hybrid framework applications that
   * are not entirely React. It should only be used in an application without
   * centralized state (Redux, Flux). "Controlled components" with centralized
   * state is highly recommended. See [Code Overview](https://github.com/salesforce/design-system-react/blob/master/docs/codebase-overview.md#controlled-and-uncontrolled-components) for more information.
   */
  defaultValue: PropTypes.number,

  /**
   * Disables the Slider and prevents clicking it. Only available on the horizontal view.
   */
  disabled: PropTypes.bool,

  /**
   * Message to display when the Slider is in an error state. When this is present, also visually highlights the component as in error.
   */
  errorText: PropTypes.string,

  /**
   * Set the HTML `id` of the slider.
   */
  id: PropTypes.string,

  /**
   * This label appears above the Slider.
   */
  label: PropTypes.string,

  /**
   * Maximum value of a specified range. Defaults to 100.
   */
  max: PropTypes.number,

  /**
   * Minimum value of a specified range. Defaults to 0.
   */
  min: PropTypes.number,

  /**
   * Name of the submitted form parameter.
   */
  name: PropTypes.string,

  /**
   * This event fires whenever the user has modified the data of the control. This callback recieves the following parameters `event, { value: [string] }`.
   */
  onChange: PropTypes.func,

  /**
   * This event fires when the value is committed. This callback recieves the following parameters `event, { value: [string] }`.
   */
  onInput: PropTypes.func,

  /**
   * Size of the slider.
   */
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),

  /**
   * By default, the granularity is 1 and the value is always an integer. For example, If you need a value between 5 and 10, accurate to two decimal places, you should set the value of step to 0.01
   */
  step: PropTypes.number,

  /**
   * The Slider should be a controlled component, and will always display this value. This should always be used if you are using a Flux/Redux framework.
   */
  value: PropTypes.number,

  /**
   * Modifier that makes the slider vertical
   */
  vertical: PropTypes.bool
};
var defaultProps = {
  assistiveText: {
    disabled: 'Disabled'
  },
  min: 0,
  max: 100,
  step: 1
};
/**
 * The ability to style sliders with CSS varies across browsers. Using this component ensures sliders look the same everywhere.
 */

var Slider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      if (isFunction(_this.props.onChange)) {
        _this.props.onChange(event, {
          value: Number(event.target.value)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInput", function (event) {
      if (isFunction(_this.props.onInput)) {
        _this.props.onInput(event, {
          value: Number(event.target.value)
        });
      }
    });

    _this.generatedId = shortid.generate();

    if (_this.props.errorText) {
      _this.generatedErrorId = shortid.generate();
    }

    return _this;
  }

  _createClass(Slider, [{
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "getErrorId",
    value: function getErrorId() {
      return this.props['aria-describedby'] || this.generatedErrorId;
    }
  }, {
    key: "render",
    value: function render() {
      var ariaProps = getAriaProps(this.props);
      ariaProps['aria-describedby'] = this.getErrorId();

      var assistiveText = _objectSpread({}, defaultProps.assistiveText, this.props.assistiveText);

      var labelText = this.props.label || this.props.assistiveText && this.props.assistiveText.label;
      return React.createElement("div", {
        className: classNames('slds-form-element', {
          'slds-has-error': this.props.errorText
        }, this.props.classNameContainer)
      }, React.createElement("label", {
        className: classNames('slds-form-element__label', {
          'slds-assistive-text': this.props.assistiveText && !this.props.label
        }),
        htmlFor: this.getId()
      }, React.createElement("span", {
        className: "slds-slider-label"
      }, labelText ? React.createElement("span", {
        className: "slds-slider-label__label"
      }, labelText) : null, React.createElement("span", {
        className: "slds-slider-label__range"
      }, this.props.min, ' - ', this.props.max), this.props.disabled ? React.createElement("span", {
        className: "slds-assistive-text"
      }, ' ', assistiveText.disabled) : null)), React.createElement("div", {
        className: "slds-form-element__control"
      }, React.createElement("div", {
        className: classNames('slds-slider', {
          'slds-slider_vertical': this.props.vertical,
          'slds-size_x-small': this.props.size === 'x-small',
          'slds-size_small': this.props.size === 'small',
          'slds-size_medium': this.props.size === 'medium',
          'slds-size_large': this.props.size === 'large'
        })
      }, React.createElement("input", _extends({
        type: "range",
        id: this.getId(),
        name: this.props.name,
        className: "slds-slider__range",
        min: this.props.min,
        max: this.props.max,
        step: this.props.step,
        disabled: this.props.disabled,
        onChange: this.handleChange,
        onInput: this.handleInput
      }, ariaProps, this.props.value !== undefined ? {
        value: this.props.value
      } : {
        defaultValue: this.props.defaultValue
      })), React.createElement("span", {
        className: "slds-slider__value",
        "aria-hidden": "true"
      }, this.props.value || this.props.defaultValue || '0')), this.props.errorText ? React.createElement("div", {
        id: this.getErrorId(),
        className: "slds-form-element__help"
      }, this.props.errorText) : null));
    }
  }]);

  return Slider;
}(React.Component);

_defineProperty(Slider, "displayName", SLIDER);

_defineProperty(Slider, "propTypes", propTypes);

_defineProperty(Slider, "defaultProps", defaultProps);

export default Slider;
//# sourceMappingURL=index.js.map