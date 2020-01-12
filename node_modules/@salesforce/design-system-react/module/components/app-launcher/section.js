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

/* eslint-disable react/destructuring-assignment */

/* eslint-disable react/no-access-state-in-setstate */

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # App Launcher Section Component
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### isFunction

import isFunction from 'lodash.isfunction'; // ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// A simple javascript utility for conditionally joining classNames together.

import classNames from 'classnames'; // This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)

import checkProps from './check-props';
import componentDoc from './component.json'; // ## Children

import Button from '../button'; // ## Constants

import { APP_LAUNCHER_SECTION } from '../../utilities/constants';
var defaultProps = {
  assistiveText: {
    collapseSection: 'Toggle visibility of section'
  }
};
/**
 * App Launcher Sections allow users to categorize App Tiles as well as toggle their display
 */

var AppLauncherSection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppLauncherSection, _React$Component);

  // ### Display Name
  // Always use the canonical component name as the React display name.
  // ### Prop Types
  function AppLauncherSection(props) {
    var _this;

    _classCallCheck(this, AppLauncherSection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppLauncherSection).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: true
    });

    _defineProperty(_assertThisInitialized(_this), "toggleOpen", function (event) {
      _this.setState({
        isOpen: !_this.state.isOpen
      });

      if (isFunction(_this.props.onToggleClick)) {
        _this.props.onToggleClick(event, {});
      }
    });

    checkProps(APP_LAUNCHER_SECTION, props, componentDoc);
    return _this;
  }

  _createClass(AppLauncherSection, [{
    key: "render",
    value: function render() {
      var isOpen = this.props.isOpen !== undefined ? this.props.isOpen : this.state.isOpen;
      var iconIsOpenClass = isOpen ? 'slds-is-open' : 'slds-is-close';
      var sectionIsOpenClass = isOpen ? 'slds-is-expanded' : 'slds-is-collapsed';

      var assistiveText = _objectSpread({}, defaultProps.assistiveText, this.props.assistiveText);

      return React.createElement("div", {
        className: classNames('slds-section', iconIsOpenClass)
      }, React.createElement("div", {
        className: "slds-section__title"
      }, this.props.toggleable || this.props.onToggleClick ? React.createElement(Button, {
        assistiveText: {
          icon: this.props.collapseSectionAssistiveText || assistiveText.collapseSection
        },
        iconCategory: "utility",
        iconName: "switch",
        onClick: this.toggleOpen,
        className: classNames({
          'slds-button__icon  slds-m-right_medium': true,
          'slds-button__icon_left': isOpen,
          'slds-accordion__summary-action-icon': !isOpen
        }),
        variant: "icon"
      }) : null, React.createElement("h3", null, this.props.title)), React.createElement("div", {
        className: "slds-section__content"
      }, React.createElement("ul", {
        className: classNames('slds-grid slds-grid_pull-padded slds-wrap', sectionIsOpenClass)
      }, React.Children.map(this.props.children, function (child) {
        return React.createElement("li", {
          className: classNames('slds-col_padded slds-grow-none', child.props.size === 'small' ? 'slds-size_xx-small' : 'slds-size_1-of-1 slds-medium-size_1-of-3')
        }, child);
      }))));
    }
  }]);

  return AppLauncherSection;
}(React.Component);

_defineProperty(AppLauncherSection, "displayName", APP_LAUNCHER_SECTION);

_defineProperty(AppLauncherSection, "propTypes", {
  /**
   * **Assistive text for accessibility.**
   * This object is merged with the default props object on every render.
   * * `collapseSection`: The assistive text for the section collapse icons.
   */
  assistiveText: PropTypes.shape({
    collapseSection: PropTypes.string
  }),

  /**
   * The title for this section of apps
   */
  title: PropTypes.string.isRequired,

  /**
   * Allows the user to show/hide the section
   */
  toggleable: PropTypes.bool,

  /**
   * An array of applications to display
   */
  children: PropTypes.node.isRequired,

  /**
   * Controls the open/closed state of the section
   */
  isOpen: PropTypes.bool,

  /**
   * Callback for when section is toggled. Passes "isOpen" bool. Forces `toggleable` to true
   */
  onToggleClick: PropTypes.func
});

_defineProperty(AppLauncherSection, "defaultProps", defaultProps);

export default AppLauncherSection;
//# sourceMappingURL=section.js.map