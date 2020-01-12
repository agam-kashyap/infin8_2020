function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// Implements the [Radio Button Group design pattern](https://lightningdesignsystem.com/components/radio-button-group/) in React.
// Based on SLDS v2.5.0
import React from 'react';
import PropTypes from 'prop-types';
import RadioGroup from '../radio-group';
import { RADIO_BUTTON_GROUP } from '../../utilities/constants';
var propTypes = {
  /**
   * **Assistive text for accessibility**
   * * `label`: This label appears in the legend.
   */
  assistiveText: PropTypes.shape({
    label: PropTypes.string
  }),

  /**
   * Children are expected to be Radio components.
   */
  children: PropTypes.node.isRequired,

  /**
   * Custom CSS classes added to `slds-radio_button-group` node.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * **Text labels for internationalization**
   * This object is merged with the default props object on every render.
   * * `error`: Message to display when any of Checkboxes are in an error state.
   * * `label`: This label appears above the button group.
   */
  labels: PropTypes.shape({
    error: PropTypes.string,
    label: PropTypes.string
  }),

  /**
   * This event fires when the radio selection changes.
   */
  onChange: PropTypes.func,

  /**
   * Disable all radio inputs.
   */
  disabled: PropTypes.bool,

  /**
   * Adds an indicator that this field is required.
   */
  required: PropTypes.bool,

  /**
   * The name of this radio group.
   */
  name: PropTypes.string,

  /**
   * The ID of the error message, for linking to radio inputs with aria-describedby.
   */
  errorId: PropTypes.string
};
var defaultProps = {
  labels: {},
  assistiveText: {}
};
/**
 * A styled select list that can have a single entry checked at any one time.
 * The RadioButtonGroup component wraps [Radio](/components/radios) components, which should be used as children.
 */

var RadioButtonGroup = function RadioButtonGroup(props) {
  // Separate props we care about in order to pass others along passively to the dropdown component
  var variant = props.variant,
      rest = _objectWithoutProperties(props, ["variant"]);

  return React.createElement(RadioGroup, _extends({
    variant: "button-group"
  }, rest));
};

RadioButtonGroup.displayName = RADIO_BUTTON_GROUP;
RadioButtonGroup.propTypes = propTypes;
RadioButtonGroup.defaultProps = defaultProps;
export default RadioButtonGroup;
//# sourceMappingURL=index.js.map