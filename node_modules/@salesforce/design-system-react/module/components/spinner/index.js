function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Spinner Component --- SLDS for React
// Implements the [Spinner design pattern - 2.1.0-beta.3 (204)](https://latest-204.lightningdesignsystem.com/components/spinners) in React.
// ### React
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import checkProps from './check-props'; // ## Constants

import { SPINNER } from '../../utilities/constants';
import componentDoc from './component.json'; // ### Prop Types

var propTypes = {
  /**
   * **Assistive text for accessibility.**
   * This object is merged with the default props object on every render.
   * * `label`: Assistive text that is read out loud to screen readers.
   */
  assistiveText: PropTypes.shape({
    label: PropTypes.string
  }),

  /**
   * Custom css classes applied to Spinner container
   */
  containerClassName: PropTypes.string,

  /**
   * Custom css properties applied to Spinner container
   */
  containerStyle: PropTypes.object,

  /**
   * Unique html id placed on div with role="status".
   */
  id: PropTypes.string,

  /**
   * Adds delay of 300ms to the spinner
   */
  isDelayed: PropTypes.bool,

  /**
   * Add styling to support a spinner inside an input field.
   */
  isInput: PropTypes.bool,

  /**
   * Determines the size of the spinner
   */
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),

  /**
   * Determines the color of the spinner: `base` is gray, `brand` is blue, and `inverse` is white.
   */
  variant: PropTypes.oneOf(['base', 'brand', 'inverse'])
};
var defaultProps = {
  assistiveText: {
    label: 'Loading...'
  },
  isDelayed: false,
  size: 'medium',
  variant: 'base'
};
/**
 * Spinners are CSS loading indicators that should be shown when retrieving data or performing slow computations. In some cases, the first time a parent component loads, a stencil is preferred to indicate network activity.
 */

var Spinner = function Spinner(props) {
  checkProps(SPINNER, props, componentDoc);
  var containerClassName = props.containerClassName,
      containerStyle = props.containerStyle,
      id = props.id,
      isDelayed = props.isDelayed,
      isInput = props.isInput,
      size = props.size,
      variant = props.variant;
  var assistiveText = typeof props.assistiveText === 'string' ? props.assistiveText : _objectSpread({}, defaultProps.assistiveText, props.assistiveText).label;
  var spinnerClassName = classNames('slds-spinner', _defineProperty({
    'slds-input__spinner': isInput,
    'slds-spinner_brand': variant === 'brand',
    'slds-spinner_inverse': variant === 'inverse',
    'slds-spinner_delayed': isDelayed
  }, "slds-spinner_".concat(size), size));
  return React.createElement("div", {
    className: classNames(containerClassName, 'slds-spinner_container'),
    style: containerStyle
  }, React.createElement("div", {
    "aria-hidden": "false",
    className: spinnerClassName,
    id: id,
    role: "status"
  }, assistiveText && React.createElement("span", {
    className: "slds-assistive-text"
  }, assistiveText), React.createElement("div", {
    className: "slds-spinner__dot-a"
  }), React.createElement("div", {
    className: "slds-spinner__dot-b"
  })));
};

Spinner.displayName = SPINNER;
Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;
export default Spinner;
//# sourceMappingURL=index.js.map