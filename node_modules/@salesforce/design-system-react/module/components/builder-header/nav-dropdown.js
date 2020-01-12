function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import Button from '../button';
import Icon from '../icon';
import Dropdown from '../menu-dropdown';
import DropdownTrigger from '../menu-dropdown/button-trigger';
import MenuDropdown from '../menu-dropdown/menu-dropdown';
import { BUILDER_HEADER_NAV_DROPDOWN } from '../../utilities/constants'; // This component accepts the same props as MenuDropdown.
// eslint-disable-next-line react/forbid-foreign-prop-types

var propTypes = MenuDropdown.propTypes;
/**
 * A dropdown within the navigation section of the header.
 */

var BuilderHeaderNavDropdown = function BuilderHeaderNavDropdown(props) {
  // Separate props we care about in order to pass others along passively to the dropdown component
  var iconCategory = props.iconCategory,
      iconName = props.iconName,
      label = props.label,
      assistiveText = props.assistiveText,
      rest = _objectWithoutProperties(props, ["iconCategory", "iconName", "label", "assistiveText"]);

  return React.createElement("li", {
    className: "slds-builder-header__nav-item"
  }, React.createElement(Dropdown, rest, React.createElement(DropdownTrigger, null, React.createElement(Button, {
    className: "slds-builder-header__item-action slds-media slds-media_center",
    variant: "base"
  }, React.createElement("span", {
    className: "slds-media__figure"
  }, React.createElement(Icon, {
    assistiveText: {
      label: assistiveText && assistiveText.icon
    },
    category: iconCategory,
    containerClassName: "slds-icon_container slds-icon-utility-page slds-current-color",
    name: iconName,
    size: "x-small"
  })), React.createElement("span", {
    className: "slds-media__body"
  }, React.createElement("span", {
    className: "slds-truncate",
    title: label
  }, label), React.createElement(Icon, {
    category: "utility",
    containerClassName: "slds-icon_container slds-icon-utility-chevrondown slds-current-color slds-m-left_small",
    name: "chevrondown",
    size: "x-small"
  }))))));
};

BuilderHeaderNavDropdown.displayName = BUILDER_HEADER_NAV_DROPDOWN;
BuilderHeaderNavDropdown.propTypes = propTypes;
export default BuilderHeaderNavDropdown;
//# sourceMappingURL=nav-dropdown.js.map