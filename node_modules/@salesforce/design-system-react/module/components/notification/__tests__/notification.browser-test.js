/* eslint-disable react/no-render-return-value */

/* eslint-disable react/no-find-dom-node */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { expect } from 'chai';
import SLDSNotification from '../../notification';
import IconSettings from '../../icon-settings';
describe('SLDSNotification: ', function () {
  var generateNotification = function generateNotification(notificationInstance) {
    var reactCmp = TestUtils.renderIntoDocument(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, notificationInstance));
    return ReactDOM.findDOMNode(reactCmp);
  };

  describe('component renders', function () {
    it('notification renders', function () {
      var notification = generateNotification(React.createElement(SLDSNotification, {
        variant: "toast",
        theme: "success",
        isOpen: true,
        content: "hi",
        silenceDeprecationWarning: true
      }));
      expect(notification).to.not.equal(undefined);
    });
  });
  describe('component basic props render', function () {
    it('renders variant', function () {
      var notification = generateNotification(React.createElement(SLDSNotification, {
        variant: "toast",
        theme: "success",
        icon: "notification",
        isOpen: true,
        texture: true,
        animated: true,
        content: "hi",
        silenceDeprecationWarning: true
      }));
      var alert = notification.getElementsByTagName('div')[0];
      expect(alert.className).to.include('slds-notify_toast');
    });
    it('renders theme', function () {
      var notification = generateNotification(React.createElement(SLDSNotification, {
        variant: "toast",
        theme: "error",
        isOpen: true,
        content: "hi",
        silenceDeprecationWarning: true
      }));
      var alert = notification.getElementsByTagName('div')[0];
      expect(alert.className).to.include('slds-theme_error');
    });
    it('renders icon', function () {
      var notification = generateNotification(React.createElement(SLDSNotification, {
        variant: "alert",
        theme: "success",
        iconName: "notification",
        isOpen: true,
        texture: true,
        content: "hi",
        silenceDeprecationWarning: true
      }));
      var close = notification.querySelectorAll('button');
      var svgs = notification.querySelectorAll('[*|href="/assets/icons/utility-sprite/svg/symbols.svg#notification"]');
      expect(close[0].className).to.include('slds-notify__close');
      expect(svgs[0]).to.exist;
    });
  });
  describe('dismiss notification click', function () {
    it('button onClick invokes method from props', function () {
      var onClick = sinon.spy();
      var notification = generateNotification(React.createElement(SLDSNotification, {
        variant: "toast",
        theme: "success",
        iconName: "notification",
        onDismiss: onClick,
        isOpen: true,
        content: "hi",
        silenceDeprecationWarning: true
      }));
      var dismissBtn = notification.getElementsByTagName('button')[0];
      TestUtils.Simulate.click(dismissBtn);
      expect(onClick.calledOnce).to.be.true;
    });
  });
});
//# sourceMappingURL=notification.browser-test.js.map