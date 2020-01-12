function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { BUILDER_HEADER_NAV_LINK } from '../../utilities/constants';
var propTypes = {
  /**
   * **Assistive text for accessibility**
   * This object is merged with the default props object on every render.
   * * `icon`: Used for the icon next to the link text.
   * * _Tested with snapshot testing._
   */
  assistiveText: PropTypes.shape({
    icon: PropTypes.string
  }),

  /**
   * Name of the icon category. Visit <a href="http://www.lightningdesignsystem.com/resources/icons">Lightning Design System Icons</a> to reference icon categories.
   */
  iconCategory: PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']),

  /**
   * Name of the icon. Visit <a href="http://www.lightningdesignsystem.com/resources/icons">Lightning Design System Icons</a> to reference icon names.
   */
  iconName: PropTypes.string,

  /**
   * Path to the icon. This will override any global icon settings.
   */
  iconPath: PropTypes.string,

  /**
   * Text for the link.
   */
  label: PropTypes.string,

  /**
   * Triggered when the link is clicked.
   */
  onClick: PropTypes.func
};
var defaultProps = {
  assistiveText: {},
  iconCategory: '',
  iconName: '',
  label: ''
};
/**
 * A link within the navigation section of the header.
 */

var BuilderHeaderNavLink = function BuilderHeaderNavLink(props) {
  var assistiveText = _objectSpread({}, defaultProps.assistiveText, props.assistiveText);

  return React.createElement("li", {
    className: "slds-builder-header__nav-item"
  }, React.createElement("a", {
    className: "slds-builder-header__item-action slds-media slds-media_center",
    href: "javascript:void(0)",
    onClick: props.onClick
  }, React.createElement("span", {
    className: "slds-media__figure"
  }, React.createElement(Icon, {
    assistiveText: {
      label: assistiveText.icon
    },
    category: props.iconCategory,
    containerClassName: "slds-icon_container slds-icon-utility-settings slds-current-color",
    name: props.iconName,
    path: props.iconPath,
    size: "x-small"
  })), React.createElement("span", {
    className: "slds-media__body"
  }, React.createElement("span", {
    className: "slds-truncate",
    title: props.label
  }, props.label))));
};

BuilderHeaderNavLink.displayName = BUILDER_HEADER_NAV_LINK;
BuilderHeaderNavLink.propTypes = propTypes;
export default BuilderHeaderNavLink;
//# sourceMappingURL=nav-link.js.map