function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
// # Global Header Component
// Implements the [Global Header design pattern](https://www.lightningdesignsystem.com/components/global-header) in React.
// Based on SLDS v2.1.0-rc.2
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)

import checkProps from './check-props';
import componentDoc from './component.json'; // ### Event Helpers

import EventUtil from '../../utilities/event'; // ## Constants

import { GLOBAL_HEADER, GLOBAL_HEADER_FAVORITES, GLOBAL_HEADER_HELP, GLOBAL_HEADER_NOTIFICATIONS, GLOBAL_HEADER_PROFILE, GLOBAL_HEADER_SEARCH, GLOBAL_HEADER_SETUP, GLOBAL_HEADER_TASK, GLOBAL_HEADER_TOOL } from '../../utilities/constants';
var defaultProps = {
  assistiveText: {
    skipToNav: 'Skip to Navigation',
    skipToContent: 'Skip to Main Content'
  },
  logoSrc: '/assets/images/logo-noname.svg'
};
/**
 * The global header is the anchor for the Salesforce platform and spans all other parts of the UI. It accepts children to define the items displayed within.
 *
 * Example:
 * ```
 * <SLDSGlobalHeader>
 *   <SLDSGlobalHeaderSearch />
 *   <SLDSGlobalHeaderButton />
 *   <SLDSGlobalHeaderDropdown />
 *   <SLDSGlobalHeaderDropdown />
 *   <SLDSGlobalHeaderProfile />
 * </SLDSGlobalHeader>
 * ```
 */

var GlobalHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GlobalHeader, _React$Component);

  function GlobalHeader(props) {
    var _this;

    _classCallCheck(this, GlobalHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GlobalHeader).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleSkipToContent", function (e) {
      EventUtil.trap(e);

      _this.props.onSkipToContent(e);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSkipToNav", function (e) {
      EventUtil.trap(e);

      _this.props.onSkipToNav(e);
    });

    checkProps(GLOBAL_HEADER, props, componentDoc);
    return _this;
  }

  _createClass(GlobalHeader, [{
    key: "render",
    value: function render() {
      var _actions;

      var assistiveText = _objectSpread({}, defaultProps.assistiveText, this.props.assistiveText);

      var actions = (_actions = {}, _defineProperty(_actions, GLOBAL_HEADER_FAVORITES, []), _defineProperty(_actions, GLOBAL_HEADER_HELP, []), _defineProperty(_actions, GLOBAL_HEADER_NOTIFICATIONS, []), _defineProperty(_actions, GLOBAL_HEADER_PROFILE, []), _defineProperty(_actions, GLOBAL_HEADER_SETUP, []), _defineProperty(_actions, GLOBAL_HEADER_TASK, []), _defineProperty(_actions, GLOBAL_HEADER_TOOL, []), _actions);
      var search;
      React.Children.forEach(this.props.children, function (child) {
        if (child) {
          if (child.type.displayName === GLOBAL_HEADER_SEARCH) {
            search = child;
          } else if (actions[child.type.displayName]) {
            // eslint-disable-next-line fp/no-mutating-methods
            actions[child.type.displayName].push(child);
          }
        }
      });
      actions = [].concat(actions[GLOBAL_HEADER_FAVORITES], actions[GLOBAL_HEADER_TASK], actions[GLOBAL_HEADER_HELP], actions[GLOBAL_HEADER_SETUP], actions[GLOBAL_HEADER_NOTIFICATIONS], actions[GLOBAL_HEADER_TOOL], // support for deprecated GlobalHeaderButton and GlobalHeaderDropdown
      actions[GLOBAL_HEADER_PROFILE]);
      /* eslint-disable max-len, no-script-url */

      return React.createElement("header", {
        className: "slds-global-header_container"
      }, this.props.onSkipToNav ? React.createElement("a", {
        href: "javascript:void(0);",
        className: "slds-assistive-text slds-assistive-text_focus",
        onClick: this.handleSkipToNav
      }, this.props.skipToNavAssistiveText || assistiveText.skipToNav) : null, this.props.onSkipToContent ? React.createElement("a", {
        href: "javascript:void(0);",
        className: "slds-assistive-text slds-assistive-text_focus",
        onClick: this.handleSkipToContent
      }, this.props.skipToContentAssistiveText || assistiveText.skipToContent) : null, React.createElement("div", {
        className: "slds-global-header slds-grid slds-grid_align-spread"
      }, React.createElement("div", {
        className: "slds-global-header__item"
      }, React.createElement("div", {
        className: "slds-global-header__logo",
        style: {
          backgroundImage: "url(".concat(this.props.logoSrc, ")")
        }
      })), search, React.createElement("div", {
        className: "slds-global-header__item"
      }, React.createElement("ul", {
        className: "slds-global-actions"
      }, actions.map(function (actionItem, index) {
        return React.createElement("li", {
          className: "slds-global-actions__item",
          key: "actions-item-".concat(index)
          /* eslint-disable-line react/no-array-index-key */

        }, actionItem);
      })))), this.props.navigation);
      /* eslint-enable max-len, no-script-url */
    }
  }]);

  return GlobalHeader;
}(React.Component);

_defineProperty(GlobalHeader, "displayName", GLOBAL_HEADER);

_defineProperty(GlobalHeader, "propTypes", {
  /**
   * **Assistive text for accessibility.**
   * This object is merged with the default props object on every render.
   * * `skipToNav`: The localized text that will be read back for the "Skip to Navigation" accessibility link.
   * * `skipToContent`: The localized text that will be read back for the "Skip to Main Content" accessibility link.
   */
  assistiveText: PropTypes.shape({
    skipToNav: PropTypes.string,
    skipToContent: PropTypes.string
  }),

  /**
   * See the component description, this accepts some combination of `SLDSGlobalHeaderSearch`, `SLDSGlobalHeaderButton`, `SLDSGlobalHeaderDropdown`, and `SLDSGlobalHeaderProfile` components.
   */
  children: PropTypes.node,

  /**
   * The Salesforce logo to display in the header.
   */
  logoSrc: PropTypes.string,

  /**
   * Pass in the Global Navigation Bar component
   */
  navigation: PropTypes.node,

  /**
   * Required for accessibility. Should jump the user to the primary content area.
   */
  onSkipToContent: PropTypes.func,

  /**
   * Required for accessibility. Should jump the user to the primary navigation.
   */
  onSkipToNav: PropTypes.func
});

_defineProperty(GlobalHeader, "defaultProps", defaultProps);

export default GlobalHeader;
//# sourceMappingURL=index.js.map