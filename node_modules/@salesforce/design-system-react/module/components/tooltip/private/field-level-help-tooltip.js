function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Field Level Help Tooltip for input labels
 */
import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../index';
import objectHelpers from '../../../utilities/object';
var propTypes = {
  /*
   * Assistive Text object from parent component such as Input, Combobox, etc.
   */
  assistiveText: PropTypes.shape({
    triggerLearnMoreIcon: PropTypes.string
  }),

  /*
   * Tooltip from external prop
   */
  fieldLevelHelpTooltip: PropTypes.node.isRequired
};
var defaultProps = {
  triggerClassName: 'slds-form-element__icon',
  // This allows `position: absolute` Tooltips to align properly.
  // If not present, tooltip will always be below the info icon // instead of above it.
  triggerStyle: {
    position: 'static'
  },
  variant: 'learnMore'
};

var FieldLevelHelpTooltip = function FieldLevelHelpTooltip(_ref) {
  var fieldLevelHelpTooltip = _ref.fieldLevelHelpTooltip,
      _ref$assistiveText = _ref.assistiveText,
      assistiveText = _ref$assistiveText === void 0 ? {} : _ref$assistiveText;
  return fieldLevelHelpTooltip ? React.createElement(Tooltip, _objectSpread({}, defaultProps, fieldLevelHelpTooltip.props, {
    // allow backwards compatibility with Input's
    // assistiveText.fieldLevelHelpButton
    // `Input` used to have an `assistiveText.fieldLevelHelpButton`
    // prop and that prop needs to override the default Tooltip
    // "Help" string.
    assistiveText: _objectSpread({}, fieldLevelHelpTooltip.props.assistiveText, objectHelpers.removeUndefined(assistiveText))
  })) : null;
};

FieldLevelHelpTooltip.propTypes = propTypes;
FieldLevelHelpTooltip.displayName = 'FieldLevelHelpTooltip';
export default FieldLevelHelpTooltip;
//# sourceMappingURL=field-level-help-tooltip.js.map