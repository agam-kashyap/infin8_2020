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

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
// # App Launcher Tile Component
// ## Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)

import checkProps from './check-props';
import componentDoc from './component.json'; // ## Children

import Button from '../button';
import Highlighter from '../utilities/highlighter';
import Tooltip from '../tooltip';
import Truncate from '../utilities/truncate';
import { APP_LAUNCHER_TILE } from '../../utilities/constants';
var propTypes = {
  /**
   * **Assistive text for accessibility.**
   * * `dragIconText`: Text that describes the purpose of the drag handle icon.
   */
  assistiveText: PropTypes.shape({
    dragIconText: PropTypes.string
  }),

  /**
   * Class names to be added to the tile.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * The description of the app. Not visible on small tiles.
   */
  description: PropTypes.string,

  /**
   * Heading for app description. NOTE: this prop is DEPRECATED and use should be avoided
   */
  descriptionHeading: PropTypes.string,

  /**
   * The `href` attribute of the tile. Please pass in bookmarkable URLs from your routing library. If the `onClick` callback is specified this URL will be prevented from changing the browser's location.
   */
  href: PropTypes.string,

  /**
   * Background color to be used on the icon. Only applied if iconNode is undefined
   */
  iconBackgroundColor: PropTypes.string,

  /**
   * Icon node for app tile. Takes priority over `iconText`
   */
  iconNode: PropTypes.node,

  /**
   * Text to be used as an icon. Only renders if iconNode is undefined
   */
  iconText: PropTypes.string,

  /**
   * Open the More Tooltip
   */
  isOpenTooltip: PropTypes.bool,

  /**
   * The localized text for the "More information" tooltip.
   */
  moreLabel: PropTypes.string,

  /**
   * Function that will be executed when clicking on a tile
   */
  onClick: PropTypes.func,

  /**
   * Text used to highlight content in app tiles
   */
  search: PropTypes.string,

  /**
   * App name for the tile's title.
   */
  title: PropTypes.string.isRequired // Future feature: add Highlighter to Truncate text (https://github.com/ShinyChang/React-Text-Truncate/issues/32)

};
var defaultProps = {
  assistiveText: {
    dragIconText: 'Reorder'
  },
  href: 'javascript:void(0);',
  // eslint-disable-line no-script-url
  moreLabel: ' More'
};
/**
 * App Launcher Tiles provide information and links to a user's apps
 */

var AppLauncherTile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppLauncherTile, _React$Component);

  function AppLauncherTile(props) {
    var _this;

    _classCallCheck(this, AppLauncherTile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppLauncherTile).call(this, props)); // `checkProps` issues warnings to developers about properties (similar to React's built in development tools)

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      if (_this.props.onClick) {
        event.preventDefault();

        _this.props.onClick(event, {
          href: _this.props.href
        });
      }
    });

    checkProps(APP_LAUNCHER_TILE, props, componentDoc);
    return _this;
  }

  _createClass(AppLauncherTile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var dragButtonAriaProps = {
        'aria-pressed': false
      };
      var iconStyles = {};

      if (this.props.iconBackgroundColor) {
        iconStyles.backgroundColor = this.props.iconBackgroundColor;
      }

      return React.createElement("div", {
        className: classNames('slds-app-launcher__tile slds-text-link_reset slds-is-draggable', // NOTE: while the draggable class is here for stylistic purposes, the draggable attribute is not present as draggability has not been implemented yet
        this.props.className),
        onClick: this.handleClick,
        role: "button",
        tabIndex: "0"
      }, React.createElement("div", {
        className: "slds-app-launcher__tile-figure"
      }, this.props.iconNode || React.createElement("span", {
        className: "slds-avatar slds-avatar_large"
      }, React.createElement("abbr", {
        className: "slds-avatar__initials slds-icon-custom-27",
        style: iconStyles,
        title: this.props.title
      }, this.props.iconText)), React.createElement("div", {
        className: "slds-m-top_xxx-small"
      }, React.createElement(Button, _extends({
        assistiveText: {
          icon: this.props.assistiveText.dragIconText
        },
        iconCategory: "utility",
        iconName: "rows",
        title: this.props.assistiveText.dragIconText,
        variant: "icon"
      }, dragButtonAriaProps)))), React.createElement("div", {
        className: "slds-app-launcher__tile-body"
      }, React.createElement("a", {
        href: this.props.href // eslint-disable-line no-script-url

      }, React.createElement(Highlighter, {
        search: this.props.search
      }, this.props.title)), React.createElement(Truncate, {
        line: 2,
        prefix: this.props.descriptionHeading && this.props.descriptionHeading.toUpperCase(),
        suffix: this.props.moreLabel,
        text: this.props.description,
        textTruncateChild: React.createElement(Tooltip, {
          align: "bottom",
          content: React.createElement(Highlighter, {
            search: this.props.search
          }, this.props.description),
          isOpen: this.props.isOpenTooltip
        }, React.createElement(Button, {
          className: "slds-button_reset slds-text-link",
          variant: "base"
        }, this.props.moreLabel)),
        wrapper: function wrapper(text, textTruncateChild) {
          return React.createElement(React.Fragment, null, _this2.props.descriptionHeading && // inline style override
          React.createElement("div", {
            className: "slds-text-heading_label",
            style: {
              letterSpacing: '0.025rem'
            }
          }, _this2.props.descriptionHeading, ' '), React.createElement(Highlighter, {
            search: _this2.props.search
          }, text), textTruncateChild && ' ', textTruncateChild);
        }
      })));
    }
  }]);

  return AppLauncherTile;
}(React.Component);

AppLauncherTile.displayName = APP_LAUNCHER_TILE;
AppLauncherTile.defaultProps = defaultProps;
AppLauncherTile.propTypes = propTypes;
export default AppLauncherTile;
//# sourceMappingURL=tile.js.map