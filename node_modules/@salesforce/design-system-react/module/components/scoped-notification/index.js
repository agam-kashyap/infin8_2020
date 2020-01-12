function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// Implements the [Scoped Notification design pattern](https://lightningdesignsystem.com/components/scoped-notifications/) in React.
// Based on SLDS v2.4.5
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import componentDoc from './component.json';
import checkProps from './check-props';
import { SCOPED_NOTIFICATION } from '../../utilities/constants';
var propTypes = {
  /**
   * **Assistive text for accessibility.**
   * * `icon`: The assistive text for the icon. Is overridden by `label` assistive text passed directly to an `Icon` component via the `icon` prop
   */
  assistiveText: PropTypes.shape({
    icon: PropTypes.string
  }),

  /**
   * CSS classes to be added to tag with `.slds-scoped-notification`. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   *  The icon to be displayed in the scoped notification. Accepts an `Icon` component
   */
  icon: PropTypes.node,

  /**
   *  Theme for the scoped notification
   */
  theme: PropTypes.oneOf(['dark', 'light'])
};
var defaultProps = {};
/**
 * A Scoped Notification Component serve advisory information for the user that is not important enough to justify an alert.
 */

var ScopedNotification =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScopedNotification, _React$Component);

  function ScopedNotification(props) {
    var _this;

    _classCallCheck(this, ScopedNotification);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScopedNotification).call(this, props));
    checkProps(SCOPED_NOTIFICATION, props, componentDoc);
    return _this;
  }

  _createClass(ScopedNotification, [{
    key: "render",
    value: function render() {
      var icon;

      if (this.props.icon) {
        var iconAssistiveText = {};

        if (this.props.assistiveText && this.props.assistiveText.icon) {
          iconAssistiveText.label = this.props.assistiveText.icon;
        }

        if (this.props.icon.props.assistiveText) {
          iconAssistiveText = _objectSpread({}, iconAssistiveText, this.props.icon.props.assistiveText);
        }

        icon = React.cloneElement(this.props.icon, _objectSpread({}, this.props.icon.props, {
          assistiveText: iconAssistiveText
        }));
      } else {
        icon = React.createElement(Icon, {
          assistiveText: {
            label: this.props.assistiveText && this.props.assistiveText.icon || 'Info'
          },
          category: "utility",
          name: this.props.iconName || 'info',
          colorVariant: this.props.theme === 'dark' ? 'base' : undefined,
          size: "small"
        });
      }

      return React.createElement("div", {
        className: classNames("slds-scoped-notification", "slds-media", "slds-media_center", {
          'slds-scoped-notification_light': this.props.theme === 'light',
          'slds-scoped-notification_dark': this.props.theme === 'dark'
        }, this.props.className),
        role: "status"
      }, React.createElement("div", {
        className: "slds-media__figure"
      }, icon), React.createElement("div", {
        className: "slds-media__body"
      }, this.props.children));
    }
  }]);

  return ScopedNotification;
}(React.Component);

ScopedNotification.displayName = SCOPED_NOTIFICATION;
ScopedNotification.propTypes = propTypes;
ScopedNotification.defaultProps = defaultProps;
export default ScopedNotification;
//# sourceMappingURL=index.js.map