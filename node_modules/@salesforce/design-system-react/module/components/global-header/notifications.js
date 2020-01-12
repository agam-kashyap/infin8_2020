function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
// # Global Header Notifications Component
// Implements the [Global Header Notifications design pattern](https://www.lightningdesignsystem.com/components/global-header/#Notifications) in React.
import React from 'react';
import PropTypes from 'prop-types';
import assign from 'lodash.assign';
import Button from '../button';
import Popover from '../popover';
import { GLOBAL_HEADER_NOTIFICATIONS } from '../../utilities/constants';
var propTypes = {
  /**
   * **Assistive text for accessibility**
   * * `newNotificationsAfter`: Assistive text for when there are new notifications, after the notificationCount. The default is ' new notifications'.
   * * `newNotificationsBefore`: Assistive text for when there are new notifications, before the notificationCount. The default is ''.
   * * `noNotifications`: Assistive text for when there are no new notifications.
   */
  assistiveText: PropTypes.shape({
    newNotificationsAfter: PropTypes.string,
    newNotificationsBefore: PropTypes.string,
    noNotifications: PropTypes.string
  }),

  /**
   * Dictates the number of notifications shown in the new notifications badge.
   */
  notificationCount: PropTypes.number,

  /**
   * A `Popover` component. The props from this popover will be merged and override any default props. The `children` prop will be ignored.
   */
  popover: PropTypes.node
};
/**
 * A GlobalHeaderNotifications component. Notifications are a way to notify a user about a global change within the application.
 */

var GlobalHeaderNotifications =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GlobalHeaderNotifications, _React$Component);

  function GlobalHeaderNotifications() {
    _classCallCheck(this, GlobalHeaderNotifications);

    return _possibleConstructorReturn(this, _getPrototypeOf(GlobalHeaderNotifications).apply(this, arguments));
  }

  _createClass(GlobalHeaderNotifications, [{
    key: "render",
    value: function render() {
      var buttonAriaProps = {
        'aria-live': 'assertive'
      };
      var notificationCount = this.props.notificationCount;
      var popoverProps = assign({
        align: 'bottom right',
        body: React.createElement("span", null),
        triggerClassName: 'slds-dropdown-trigger slds-dropdown-trigger_click'
      }, this.props.popover ? this.props.popover.props : {});
      var notificationsAssistiveText = this.props.assistiveText.noNotifications; // eslint-disable-next-line fp/no-delete

      delete popoverProps.children;

      if (notificationCount > 0) {
        notificationsAssistiveText = "".concat(this.props.assistiveText.newNotificationsBefore).concat(notificationCount).concat(this.props.assistiveText.newNotificationsAfter);
      } else {
        buttonAriaProps['aria-atomic'] = true;
      }

      return React.createElement(Popover, popoverProps, React.createElement(Button, _extends({
        assistiveText: {
          icon: notificationsAssistiveText
        },
        className: "slds-button_icon slds-global-actions__notifications slds-global-actions__item-action",
        iconCategory: "utility",
        iconClassName: "slds-global-header__icon",
        iconName: "notification",
        iconSize: "small",
        iconVariant: "container",
        title: notificationsAssistiveText,
        variant: "icon"
      }, buttonAriaProps)), notificationCount > 0 ? React.createElement("span", {
        "aria-hidden": "true",
        className: "slds-notification-badge slds-incoming-notification slds-show-notification"
      }, notificationCount) : React.createElement("span", {
        "aria-hidden": "true",
        className: "slds-notification-badge"
      }));
    }
  }]);

  return GlobalHeaderNotifications;
}(React.Component);

GlobalHeaderNotifications.displayName = GLOBAL_HEADER_NOTIFICATIONS;
GlobalHeaderNotifications.defaultProps = {
  assistiveText: {
    newNotificationsAfter: ' new notifications',
    newNotificationsBefore: '',
    noNotifications: 'No new notifications'
  },
  notificationCount: 0
};
GlobalHeaderNotifications.propTypes = propTypes;
export default GlobalHeaderNotifications;
//# sourceMappingURL=notifications.js.map