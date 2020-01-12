function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// # Global Navigation Dropdown Component
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames

import classNames from 'classnames';
import colors from '../../utilities/design-tokens/dist/salesforce-skin.common.js';
import checkProps from './check-props';
import componentDoc from './component.json';
import Button from '../button'; // ## Constants

import { MENU_DROPDOWN_TRIGGER } from '../../utilities/constants';
/**
 *  The Dropdown Button Trigger renders the default trigger button for the dropdown menu. If this component has children, it does not render itself to the DOM. Instead, it renders its child element, `Button`, and all that child's properties. This component may be used as a template to create custom triggers that do not use `Button`.
 */

var GlobalNavigationDropdownTrigger =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GlobalNavigationDropdownTrigger, _React$Component);

  // ### Display Name
  // Always use the canonical component name (set in the core) as the React
  // display name.
  // ### Prop Types
  function GlobalNavigationDropdownTrigger(props) {
    var _this;

    _classCallCheck(this, GlobalNavigationDropdownTrigger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GlobalNavigationDropdownTrigger).call(this, props));
    checkProps(MENU_DROPDOWN_TRIGGER, _this.props, componentDoc);
    return _this;
  } // ### Render


  _createClass(GlobalNavigationDropdownTrigger, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          activeBackgroundColor = _this$props.activeBackgroundColor,
          className = _this$props.className,
          dividerPosition = _this$props.dividerPosition,
          id = _this$props.id,
          isOpen = _this$props.isOpen,
          label = _this$props.label,
          menu = _this$props.menu,
          onBlur = _this$props.onBlur,
          onClick = _this$props.onClick,
          onFocus = _this$props.onFocus,
          onKeyDown = _this$props.onKeyDown,
          onMouseDown = _this$props.onMouseDown,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseLeave = _this$props.onMouseLeave,
          triggerRef = _this$props.triggerRef,
          rest = _objectWithoutProperties(_this$props, ["active", "activeBackgroundColor", "className", "dividerPosition", "id", "isOpen", "label", "menu", "onBlur", "onClick", "onFocus", "onKeyDown", "onMouseDown", "onMouseEnter", "onMouseLeave", "triggerRef"]);

      var listItemstyle = {}; // Uses design token to get correct color

      var hoverBackgroundColor = colors.brandPrimaryTransparent10;

      if (active) {
        listItemstyle.backgroundColor = activeBackgroundColor;
        listItemstyle.borderBottomColor = activeBackgroundColor;
      } // Per SLDS pattern, set trigger style like hover style, so that hover visuals and menu being open and closed are in same state


      if (isOpen) {
        listItemstyle.backgroundColor = hoverBackgroundColor;
      }

      return React.createElement("li", {
        "aria-haspopup": "true",
        className: classNames('slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click', _defineProperty({
          'slds-is-open': isOpen,
          'slds-is-active': active
        }, "slds-context-bar__item_divider-".concat(dividerPosition), dividerPosition), className),
        id: id,
        onBlur: onBlur,
        onClick: onClick,
        onFocus: onFocus,
        onKeyDown: onKeyDown,
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        ref: triggerRef,
        style: listItemstyle
      }, React.createElement("a", {
        className: "slds-context-bar__label-action",
        title: label
      }, React.createElement("span", {
        className: "slds-truncate",
        title: label
      }, label)), React.createElement("div", {
        className: "slds-context-bar__icon-action slds-p-left_none"
      }, React.createElement(Button, _extends({
        assistiveText: this.props.assistiveText
      }, rest, {
        className: "slds-context-bar__button",
        "aria-haspopup": "true",
        iconCategory: "utility",
        iconName: "chevrondown",
        iconVariant: "bare",
        variant: "icon"
      }))), menu);
    }
  }]);

  return GlobalNavigationDropdownTrigger;
}(React.Component);

_defineProperty(GlobalNavigationDropdownTrigger, "displayName", MENU_DROPDOWN_TRIGGER);

_defineProperty(GlobalNavigationDropdownTrigger, "propTypes", {
  /**
   * Whether the item is active or not.
   */
  active: PropTypes.bool,

  /**
   * Allows alignment of active item with active application background color.
   */
  activeBackgroundColor: PropTypes.string,

  /**
   * **Assistive text for accessibility.**
   * This object is merged with the default props object on every render.
   * * `icon`: Text that is visually hidden but read aloud by screenreaders to tell the user what the icon means. If the button has an icon and a visible label, you can omit the <code>assistiveText.icon</code> prop and use the <code>label</code> prop.
   */
  assistiveText: PropTypes.shape({
    icon: PropTypes.string
  }),

  /**
   * CSS classes to be added to the 'li'.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Determines position of separating bar.
   */
  dividerPosition: PropTypes.oneOf(['left', 'right']),

  /**
   * A unique ID is needed in order to support keyboard navigation, ARIA support, and connect the dropdown to the triggering button.
   */
  id: PropTypes.string,

  /**
   * Allows the dropdown menu to style itself accordingly when open since CSS hover rules cannot take effect if the menu is not inline.
   */
  isOpen: PropTypes.bool,

  /**
   * Visible label on the dropdown menu trigger button.
   */
  label: PropTypes.string,

  /**
   * The dropdown menu.
   */
  menu: PropTypes.node,

  /**
   * Is only called when `openOn` is set to `hover` and when the triggering li loses focus.
   */
  onBlur: PropTypes.func,

  /**
   * This prop is passed onto the triggering `li`. Triggered when the trigger li is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Is only called when `openOn` is set to `hover` and when the triggering li gains focus.
   */
  onFocus: PropTypes.func,

  /**
   * Called when a key pressed.
   */
  onKeyDown: PropTypes.func,

  /**
   * Called when mouse clicks down on the trigger `li`.
   */
  onMouseDown: PropTypes.func,

  /**
   * Called when mouse hovers over the trigger `li`.
   */
  onMouseEnter: PropTypes.func,

  /**
   * Called when mouse leaves trigger `li` or the menu.
   */
  onMouseLeave: PropTypes.func,

  /**
   * The ref of the actual triggering button.
   */
  triggerRef: PropTypes.func
});

_defineProperty(GlobalNavigationDropdownTrigger, "defaultProps", {
  assistiveText: {
    icon: 'Open menu item submenu'
  }
});

export default GlobalNavigationDropdownTrigger;
//# sourceMappingURL=dropdown-trigger.js.map