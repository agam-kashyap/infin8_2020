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
// Implements the [Button design pattern](https://lightningdesignsystem.com/components/buttons/) in React.
// Based on SLDS v2.2.1
import React from 'react';
import requiredIf from 'react-required-if';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonIcon from '../icon/button-icon';
import checkProps from './check-props';
import componentDoc from './component.json'; // eslint-disable-next-line import/no-cycle

import Tooltip from '../tooltip';
import getAriaProps from '../../utilities/get-aria-props';
import getFormProps from '../../utilities/get-form-props';
import { BUTTON } from '../../utilities/constants';
var defaultProps = {
  assistiveText: {
    icon: ''
  },
  disabled: false,
  hint: false,
  iconSize: 'medium',
  responsive: false,
  type: 'button',
  variant: 'neutral'
};
/**
 * The Button component is the Lightning Design System Button component. The Button should be used for label buttons, icon buttons, or buttons that have both labels and icons.
 * Either a <code>label</code> or <code>assistiveText.icon</code> is required; see the Prop Details table below. For buttons that maintain selected/unselected states, use the <a href="#/button-stateful">ButtonStateful</a> component.
 * Although not listed in the prop table, all `aria-*` and `form*` props will be added to the `button` element if passed in.
 */

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props)); // `checkProps` issues warnings to developers about properties (similar to React's built in development tools)

    _defineProperty(_assertThisInitialized(_this), "getClassName", function () {
      var _classNames;

      var isIcon = _this.props.variant === 'icon';
      var iconVariant = _this.props.iconVariant;
      var iconMore = iconVariant === 'more';
      var iconBorder = iconVariant === 'border';
      var iconGlobalHeader = iconVariant === 'global-header';
      var showButtonVariant = _this.props.variant !== 'base' && !iconVariant && !_this.props.inverse && _this.props.variant !== 'link' || iconVariant === 'bare';
      var plainInverseBtn = _this.props.inverse && !isIcon;
      var plainInverseIcon = _this.props.inverse && isIcon && !iconMore && !iconBorder;
      var moreInverseIcon = _this.props.inverse && iconMore;
      var borderInverseIcon = _this.props.inverse && iconBorder; // After hijacking `iconVariant` to let `Button` know it's in the header, we reset to container style for the actual button CSS.

      if (iconVariant === 'global-header') {
        iconVariant = 'container';
      }

      return classNames((_classNames = {
        'slds-button': _this.props.variant !== 'link'
      }, _defineProperty(_classNames, "slds-button_".concat(_this.props.variant), showButtonVariant), _defineProperty(_classNames, 'slds-button_inverse', plainInverseBtn), _defineProperty(_classNames, 'slds-button_icon-inverse', plainInverseIcon || moreInverseIcon), _defineProperty(_classNames, 'slds-button_icon-border-inverse', borderInverseIcon), _defineProperty(_classNames, "slds-button_icon-".concat(iconVariant), iconVariant && !borderInverseIcon), _defineProperty(_classNames, 'slds-global-header__button_icon', iconGlobalHeader), _defineProperty(_classNames, "slds-button_icon-".concat(_this.props.iconSize), iconVariant && _this.props.iconSize !== 'medium'), _defineProperty(_classNames, 'slds-button_reset', _this.props.variant === 'link'), _defineProperty(_classNames, 'slds-text-link', _this.props.variant === 'link'), _classNames), _this.props.className);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event, {});
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderIcon", function (name) {
      var iconSize = !_this.props.iconSize || _this.props.iconVariant ? null : _this.props.iconSize;
      return React.createElement(ButtonIcon, {
        category: _this.props.iconCategory || 'utility' // BREAKING CHANGE we will introduce in 1.0. For the moment, set default prop here if none specified.
        ,
        className: classNames({
          'slds-global-header__icon': _this.props.iconVariant === 'global-header'
        }, _this.props.iconClassName),
        hint: _this.props.hint,
        inverse: _this.props.inverse,
        name: name,
        path: _this.props.iconPath,
        position: _this.props.iconPosition,
        size: iconSize
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderLabel", function () {
      var iconOnly = _this.props.iconName || _this.props.iconPath;
      var assistiveTextIcon = typeof _this.props.assistiveText === 'string' ? _this.props.assistiveText : _objectSpread({}, defaultProps.assistiveText, _this.props.assistiveText).icon;
      return iconOnly && assistiveTextIcon ? React.createElement("span", {
        className: "slds-assistive-text"
      }, assistiveTextIcon) : _this.props.label;
    });

    _defineProperty(_assertThisInitialized(_this), "renderButton", function () {
      var ariaProps = getAriaProps(_this.props);
      var formProps = getFormProps(_this.props);
      return (// eslint-disable-next-line react/button-has-type
        React.createElement("button", _extends({
          className: _this.getClassName(),
          disabled: _this.props.disabled,
          id: _this.props.id,
          onBlur: _this.props.onBlur,
          onClick: _this.handleClick,
          onFocus: _this.props.onFocus,
          onKeyDown: _this.props.onKeyDown,
          onKeyPress: _this.props.onKeyPress,
          onKeyUp: _this.props.onKeyUp,
          onMouseDown: _this.props.onMouseDown,
          onMouseEnter: _this.props.onMouseEnter,
          onMouseLeave: _this.props.onMouseLeave,
          onMouseUp: _this.props.onMouseUp,
          ref: function ref(component) {
            if (_this.props.buttonRef) {
              _this.props.buttonRef(component);
            }
          },
          tabIndex: _this.props.tabIndex,
          title: _this.props.title,
          type: _this.props.type || 'button',
          style: _this.props.style
        }, ariaProps, formProps), _this.props.iconPosition === 'right' ? _this.renderLabel() : null, _this.props.iconName || _this.props.iconPath ? _this.renderIcon(_this.props.iconName) : null, _this.props.iconVariant === 'more' ? React.createElement(ButtonIcon, {
          category: "utility",
          name: "down",
          size: "x-small",
          className: _this.props.iconClassName
        }) : null, _this.props.iconPosition === 'left' || !_this.props.iconPosition ? _this.renderLabel() : null, _this.props.children // eslint-disable-line react/prop-types
        )
      );
    });

    _defineProperty(_assertThisInitialized(_this), "renderTooltip", function () {
      return React.createElement(Tooltip, {
        content: _this.props.tooltip
      }, _this.renderButton);
    });

    checkProps(BUTTON, props, componentDoc);
    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return this.props.tooltip ? this.renderTooltip() : this.renderButton();
    }
  }]);

  return Button;
}(React.Component);

_defineProperty(Button, "displayName", BUTTON);

_defineProperty(Button, "propTypes", {
  /**
   * **Assistive text for accessibility.**
   * This object is merged with the default props object on every render.
   * * `icon`: Text that is visually hidden but read aloud by screenreaders to tell the user what the icon means. If the button has an icon and a visible label, you can omit the <code>assistiveText.icon</code> prop and use the <code>label</code> prop.
   */
  assistiveText: PropTypes.shape({
    icon: PropTypes.string
  }),

  /**
   * Callback that passes in the DOM reference of the `<button>` DOM node within this component. Primary use is to allow `focus` to be called. You should still test if the node exists, since rendering is asynchronous. `buttonRef={(component) => { if(component) console.log(component); }}`
   */
  buttonRef: PropTypes.func,

  /**
   * CSS classes to be added to button.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Disables the button and adds disabled styling.
   */
  disabled: PropTypes.bool,

  /**
   * Associates an icon button with another element on the page by changes the color of the SVG. Please reference <a href="http://www.lightningdesignsystem.com/components/buttons/#hint">Lightning Design System Buttons > Hint</a>.
   */
  hint: PropTypes.bool,

  /**
   * Name of the icon category. Visit <a href="http://www.lightningdesignsystem.com/resources/icons">Lightning Design System Icons</a> to reference icon categories.
   */
  iconCategory: requiredIf(PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']), function (props) {
    return !!props.iconName;
  }),

  /**
   * CSS classes to be added to icon.
   */
  iconClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Name of the icon. Visit <a href="http://www.lightningdesignsystem.com/resources/icons">Lightning Design System Icons</a> to reference icon names.
   */
  iconName: PropTypes.string,

  /**
   * Path to the icon. This will override any global icon settings.
   */
  iconPath: PropTypes.string,

  /**
   * If omitted, icon position is centered.
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),

  /**
   * Determines the size of the icon.
   */
  iconSize: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),

  /**
   * For icon variants, please reference <a href="http://www.lightningdesignsystem.com/components/buttons/#icon">Lightning Design System Icons</a>.
   */
  iconVariant: PropTypes.oneOf(['bare', 'container', 'border', 'border-filled', 'brand', 'more', 'global-header']),

  /**
   * Id string applied to button node.
   */
  id: PropTypes.string,

  /**
   * If true, button/icon is white. Meant for buttons or utility icons on dark backgrounds.
   */
  inverse: PropTypes.bool,

  /**
   * Visible label on the button. If the button is an icon button with no label, you must use the <code>assistiveText.icon</code> prop.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Triggered when focus is removed.
   */
  onBlur: PropTypes.func,

  /**
   * Triggered when the button is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Triggered when component is focused.
   */
  onFocus: PropTypes.func,

  /**
   * Triggered when a key is pressed down
   */
  onKeyDown: PropTypes.func,

  /**
   * Triggered when a key is pressed and released
   */
  onKeyPress: PropTypes.func,

  /**
   * Triggered when a key is released
   */
  onKeyUp: PropTypes.func,

  /**
   * Triggered when a mouse button is pressed down
   */
  onMouseDown: PropTypes.func,

  /**
   * Triggered when a mouse arrow hovers
   */
  onMouseEnter: PropTypes.func,

  /**
   * Triggered when a mouse arrow no longer hovers
   */
  onMouseLeave: PropTypes.func,

  /**
   * Triggered when a mouse button is released
   */
  onMouseUp: PropTypes.func,

  /**
   * If true, button scales to 100% width on small form factors.
   */
  responsive: PropTypes.bool,

  /**
   * Write <code>"-1"</code> if you don't want the user to tab to the button.
   */
  tabIndex: PropTypes.string,

  /**
   * Button type
   */
  type: PropTypes.oneOf(['reset', 'submit', 'button']),

  /**
   * HTML title attribute
   */
  title: PropTypes.string,

  /**
   * [Deprecated] Tooltip on button. Button should be a child of `Tooltip` instead.
   */
  tooltip: PropTypes.node,

  /**
   * Different types of buttons
   */
  variant: PropTypes.oneOf(['base', 'link', 'neutral', 'brand', 'outline-brand', 'destructive', 'success', 'text-destructive', 'icon']),

  /**
   * Custom styles to be passed to the component
   */
  style: PropTypes.object
});

_defineProperty(Button, "defaultProps", defaultProps);

export default Button;
//# sourceMappingURL=index.js.map