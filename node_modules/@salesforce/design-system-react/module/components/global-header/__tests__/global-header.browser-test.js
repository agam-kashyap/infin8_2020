function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable react/no-find-dom-node */
import React from 'react';
import { expect } from 'chai';
import SLDSCombobox from '../../combobox';
import SLDSIconSettings from '../../icon-settings';
import SLDSGlobalHeader from '../../global-header';
import SLDSGlobalHeaderFavorites from '../../global-header/favorites';
import SLDSGlobalHeaderHelp from '../../global-header/help';
import SLDSGlobalHeaderNotifications from '../../global-header/notifications';
import SLDSGlobalHeaderProfile from '../../global-header/profile';
import SLDSGlobalHeaderSearch from '../../global-header/search';
import SLDSGlobalHeaderSetup from '../../global-header/setup';
import SLDSGlobalHeaderTask from '../../global-header/task';
import { mountComponent, unmountComponent } from '../../../tests/enzyme-helpers';
describe('SLDSGlobalHeader', function () {
  describe('SLDSGlobalHeader index', function () {
    beforeEach(mountComponent(React.createElement(SLDSIconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(SLDSGlobalHeader, null, React.createElement(SLDSGlobalHeaderProfile, null), React.createElement(SLDSGlobalHeaderSetup, null), React.createElement(SLDSGlobalHeaderFavorites, null), React.createElement(SLDSGlobalHeaderTask, null), React.createElement(SLDSGlobalHeaderNotifications, null), React.createElement(SLDSGlobalHeaderSearch, {
      combobox: React.createElement(SLDSCombobox, {
        assistiveText: {
          label: 'Search'
        },
        id: "global-header-search-combobox-test",
        labels: {
          placeholder: 'Search Salesforce'
        },
        options: []
      })
    }), React.createElement(SLDSGlobalHeaderHelp, null)))));
    afterEach(unmountComponent);
    it('arranges components correctly even if the developer put them out of order', function () {
      var order = ['div.slds-global-actions__favorites', 'button.slds-global-actions__task', 'button.slds-global-actions__help', 'button.slds-global-actions__setup', 'button.slds-global-actions__notifications', 'button.slds-global-actions__avatar'];
      this.wrapper.find('ul.slds-global-actions li.slds-global-actions__item').forEach(function (node, index) {
        expect(node.find(order[index]).length).to.eql(1);
      });
    });
  });
  describe('SLDSGlobalHeaderFavorites', function () {
    it('handles actionDisabled correctly', function () {
      mountComponent(React.createElement(SLDSIconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(SLDSGlobalHeader, null, React.createElement(SLDSGlobalHeaderFavorites, {
        actionDisabled: true
      })))).call(this);
      var actionButtonSelector = 'button.slds-global-actions__favorites-action';
      expect(this.wrapper.find(actionButtonSelector).hasClass('slds-is-disabled')).to.eql(true);
      expect(this.wrapper.find("".concat(actionButtonSelector, "[disabled=true]")).length).to.eql(1);
      unmountComponent.call(this);
    });
    it('handles actionSelected correctly', function () {
      mountComponent(React.createElement(SLDSIconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(SLDSGlobalHeader, null, React.createElement(SLDSGlobalHeaderFavorites, {
        actionSelected: true
      })))).call(this);
      var actionButtonSelector = 'button.slds-global-actions__favorites-action';
      expect(this.wrapper.find(actionButtonSelector).hasClass('slds-is-selected')).to.eql(true);
      expect(this.wrapper.find("".concat(actionButtonSelector, "[aria-pressed=true]")).length).to.eql(1);
      unmountComponent.call(this);
    });
    it('handles onToggleActionSelected correctly', function () {
      var args = {};
      mountComponent(React.createElement(SLDSIconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(SLDSGlobalHeader, null, React.createElement(SLDSGlobalHeaderFavorites, {
        onToggleActionSelected: function onToggleActionSelected(event, data) {
          args.event = event;
          args.data = data;
        }
      })))).call(this);
      var actionButton = this.wrapper.find('button.slds-global-actions__favorites-action');
      actionButton.simulate('click');
      expect(_typeof(args.event)).to.eql('object');
      expect(_typeof(args.data)).to.eql('object');
      expect(_typeof(args.data.actionSelected)).to.eql('boolean');
      args = {};
      actionButton.simulate('keydown', {
        keyCode: 13
      });
      expect(_typeof(args.event)).to.eql('object');
      expect(_typeof(args.data)).to.eql('object');
      expect(_typeof(args.data.actionSelected)).to.eql('boolean');
      unmountComponent.call(this);
    });
  });
  describe('SLDSGlobalHeaderNotifications', function () {
    it('handles notificationCount correctly when no value provided', function () {
      mountComponent(React.createElement(SLDSIconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(SLDSGlobalHeader, null, React.createElement(SLDSGlobalHeaderNotifications, null)))).call(this);
      expect(this.wrapper.find('.slds-notification-badge').text()).to.eql('');
      unmountComponent.call(this);
    });
    it('handles notificationCount correctly when a value is provided', function () {
      mountComponent(React.createElement(SLDSIconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(SLDSGlobalHeader, null, React.createElement(SLDSGlobalHeaderNotifications, {
        notificationCount: 5
      })))).call(this);
      expect(this.wrapper.find('.slds-notification-badge').text()).to.eql('5');
      unmountComponent.call(this);
    });
  });
});
//# sourceMappingURL=global-header.browser-test.js.map