function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
// # Global Header Favorites Component
// Implements the [Global Header Help design pattern](https://www.lightningdesignsystem.com/components/global-header/#Help) in React.
import React from 'react';
import PropTypes from 'prop-types';
import assign from 'lodash.assign';
import classnames from 'classnames';
import Button from '../button';
import EventUtil from '../../utilities/event';
import KEYS from '../../utilities/key-code';
import Popover from '../popover';
import { GLOBAL_HEADER_FAVORITES } from '../../utilities/constants';
var propTypes = {
  /**
   * **Assistive text for accessibility**
   * * `action`: Description of star button. Default is "Toggle Favorite."
   * * `more`: Description of dropdown menu. Default is "View Favorites."
   */
  assistiveText: PropTypes.shape({
    action: PropTypes.string,
    more: PropTypes.string
  }),

  /**
   * Disables the favorites action (star) button and not the related Popover."
   */
  actionDisabled: PropTypes.bool,

  /**
   * Controls whether the favorites action (star) button is selected or not
   */
  actionSelected: PropTypes.bool,

  /**
   * This event fires when the favorites action (star) button is toggled. Passes in `event, { actionSelected }`.
   */
  onToggleActionSelected: PropTypes.func,

  /**
   * A `Popover` component applied to the favorites more button. The props from this popover will be merged and override any default props. The `children` prop will be ignored.
   */
  popover: PropTypes.node
};
/**
 * A GlobalHeaderFavorites component. The favorites action is used to "favorite" a commonly used page within a user's experience. When a user "favorites" a page by pressing the favorites action, the button icon changes color with a small animation to confirm your selection.
 */

var GlobalHeaderFavorites =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GlobalHeaderFavorites, _React$Component);

  function GlobalHeaderFavorites() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GlobalHeaderFavorites);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GlobalHeaderFavorites)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "toggleActionSelected", function (event) {
      if (_this.props.onToggleActionSelected) {
        _this.props.onToggleActionSelected(event, {
          actionSelected: _this.props.actionSelected || false
        });
      }
    });

    return _this;
  }

  _createClass(GlobalHeaderFavorites, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var actionAriaProps = {};
      var popoverProps = assign({
        align: 'bottom',
        body: React.createElement("span", null),
        triggerClassName: 'slds-dropdown-trigger slds-dropdown-trigger_click'
      }, this.props.popover ? this.props.popover.props : {}); // eslint-disable-next-line fp/no-delete

      delete popoverProps.children;

      if (this.props.actionSelected) {
        actionAriaProps['aria-pressed'] = true;
      }

      return React.createElement("div", {
        className: "slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click"
      }, React.createElement("div", {
        className: "slds-button-group"
      }, React.createElement(Button, _extends({
        assistiveText: {
          icon: this.props.assistiveText.action
        },
        className: classnames('slds-button_icon slds-global-actions__favorites-action', {
          'slds-is-disabled': this.props.actionDisabled,
          'slds-is-selected': this.props.actionSelected
        }),
        disabled: this.props.actionDisabled,
        iconCategory: "utility",
        iconName: "favorite",
        iconSize: "small",
        iconVariant: "border",
        onClick: this.toggleActionSelected,
        onKeyDown: function onKeyDown(event) {
          if (event.keyCode === KEYS.ENTER) {
            EventUtil.trapImmediate(event);

            _this2.toggleActionSelected(event);
          }
        },
        title: this.props.assistiveText.action,
        variant: "icon"
      }, actionAriaProps)), React.createElement(Popover, popoverProps, React.createElement(Button, {
        assistiveText: {
          icon: this.props.assistiveText.more
        },
        className: "slds-button_icon slds-global-actions__favorites-more",
        iconCategory: "utility",
        iconName: "down",
        iconSize: "small",
        iconVariant: "border",
        style: {
          // this is needed because the popover trigger wrapper janks up the default styles
          borderLeft: '0',
          borderRadius: '0 .25rem .25rem 0'
        },
        title: this.props.assistiveText.more,
        variant: "icon"
      }))));
    }
  }]);

  return GlobalHeaderFavorites;
}(React.Component);

GlobalHeaderFavorites.displayName = GLOBAL_HEADER_FAVORITES;
GlobalHeaderFavorites.defaultProps = {
  assistiveText: {
    action: 'Toggle Favorite',
    more: 'View Favorites'
  }
};
GlobalHeaderFavorites.propTypes = propTypes;
export default GlobalHeaderFavorites;
//# sourceMappingURL=favorites.js.map