function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
// # App Launcher Link Component
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// A simple javascript utility for conditionally joining classNames together.

import classNames from 'classnames'; // ### Children

import Highlighter from '../utilities/highlighter'; // ## Constants

import { APP_LAUNCHER_LINK } from '../../utilities/constants';
/**
 * App Launcher Link component creates simple links to be used in "All Items" sections
 */

var AppLauncherLink =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppLauncherLink, _React$Component);

  function AppLauncherLink() {
    _classCallCheck(this, AppLauncherLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(AppLauncherLink).apply(this, arguments));
  }

  _createClass(AppLauncherLink, [{
    key: "render",
    // ### Display Name
    // Always use the canonical component name as the React display name.
    // ### Prop Types
    // ### Default Props
    value: function render() {
      var _this = this;

      var title = this.props.title;

      if (!title && typeof this.props.children === 'string') {
        title = this.props.children;
      }

      return React.createElement("a", {
        href: this.props.href // eslint-disable-line no-script-url
        ,
        className: classNames('slds-truncate', this.props.className),
        onClick: function onClick(event) {
          if (_this.props.onClick) {
            event.preventDefault();

            _this.props.onClick(event, {
              href: _this.props.href
            });
          }
        },
        title: title
      }, React.createElement(Highlighter, {
        search: this.props.search
      }, this.props.children));
    }
  }]);

  return AppLauncherLink;
}(React.Component);

_defineProperty(AppLauncherLink, "displayName", APP_LAUNCHER_LINK);

_defineProperty(AppLauncherLink, "propTypes", {
  /**
   * Contents of the link
   */
  children: PropTypes.node,

  /**
   * Classes to be applied to the link
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * The `href` attribute of the link. If the `onClick` callback is specified this URL will be prevented from changing the browser's location.
   */
  href: PropTypes.string,

  /**
   * Callback for when the link is clicked. Passes back event and data object with href prop. Prevents click from changing browser's location if set.
   */
  onClick: PropTypes.func,

  /**
   * Text used to highlight content in link
   */
  search: PropTypes.string,

  /**
   * The title for the link. If not provided it will attempt to use child content if that content is a string.
   */
  title: PropTypes.string
});

_defineProperty(AppLauncherLink, "defaultProps", {
  href: 'javascript:void(0);' // eslint-disable-line no-script-url

});

export default AppLauncherLink;
//# sourceMappingURL=link.js.map