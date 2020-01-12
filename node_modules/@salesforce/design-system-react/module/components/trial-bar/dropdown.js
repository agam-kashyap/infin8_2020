function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import Dropdown from '../menu-dropdown';
import DropdownTrigger from '../menu-dropdown/button-trigger';
import MenuDropdown from '../menu-dropdown/menu-dropdown';
import Button from '../button';
import { TRIAL_BAR_DROPDOWN } from '../../utilities/constants'; // This component accepts the same props as MenuDropdown.
// eslint-disable-next-line react/forbid-foreign-prop-types

var propTypes = MenuDropdown.propTypes;
/**
 *  A [Dropdown](/components/menu-dropdowns/) within the Trial Bar.
 */

var TrialBarDropdown = function TrialBarDropdown(props) {
  var label = props.label,
      rest = _objectWithoutProperties(props, ["label"]);

  return React.createElement(Dropdown, _extends({}, rest, {
    inverse: true
  }), React.createElement(DropdownTrigger, {
    triggerClassName: "slds-grid"
  }, React.createElement(Button, {
    inverse: true,
    style: {
      border: 0,
      height: '100%',
      padding: 0
    },
    iconCategory: "utility",
    iconName: "right",
    iconPosition: "left",
    label: label
  })));
};

TrialBarDropdown.propTypes = propTypes;
TrialBarDropdown.displayName = TRIAL_BAR_DROPDOWN;
export default TrialBarDropdown;
//# sourceMappingURL=dropdown.js.map