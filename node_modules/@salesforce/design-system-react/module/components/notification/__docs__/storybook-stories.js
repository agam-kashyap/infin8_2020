import React from 'react';
import { storiesOf } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { NOTIFICATION } from '../../../utilities/constants';
import Notification from '../../notification';
import Alerts from '../__examples__/alerts';
import Toasts from '../__examples__/toasts';
import WithinModal from '../__examples__/within-modal';
storiesOf(NOTIFICATION, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base: Alert', function () {
  return React.createElement(Notification, {
    content: ['Your new contact ', React.createElement("a", {
      href: "javascript:void(0);",
      key: "0123"
    }, "Sara Smith"), ' was successfully created.'],
    iconName: "notification",
    isOpen: true,
    onDismiss: function onDismiss() {
      console.log('dismiss alert');
    },
    texture: true,
    theme: "success",
    variant: "alert",
    silenceDeprecationWarning: true
  });
}).add('Base: Toast', function () {
  return React.createElement(Notification, {
    content: "toast notification",
    inverse: true,
    isOpen: true,
    name: "account",
    onDismiss: function onDismiss() {
      console.log('dismiss toast');
    },
    theme: "error",
    variant: "toast",
    silenceDeprecationWarning: true
  });
}).add('Docs site Alerts', function () {
  return React.createElement(Alerts, null);
}).add('Docs site Toasts', function () {
  return React.createElement(Toasts, null);
}).add('Docs site WithinModal', function () {
  return React.createElement(WithinModal, null);
});
//# sourceMappingURL=storybook-stories.js.map