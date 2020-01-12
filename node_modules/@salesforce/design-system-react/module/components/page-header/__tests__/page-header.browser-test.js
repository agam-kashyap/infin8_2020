import React from 'react';
import { mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Icon from '../../icon';
import IconSettings from '../../icon-settings';
import PageHeader from '../../page-header';
import PageHeaderControl from '../../page-header/control';
import SLDSButtonStateful from '../../button-stateful';
import SLDSButtonGroup from '../../button-group';
import SLDSButton from '../../button';
import SLDSMenuDropdown from '../../menu-dropdown';
chai.use(chaiEnzyme());

var recordHomeActions = function recordHomeActions() {
  return React.createElement(React.Fragment, null, React.createElement(PageHeaderControl, null, React.createElement(SLDSButtonStateful, {
    key: "PageHeaderFollowButton",
    disabled: false,
    iconSize: "medium",
    responsive: false,
    stateOne: {
      iconCategory: 'utility',
      iconName: 'add',
      label: 'Follow'
    },
    stateTwo: {
      iconCategory: 'utility',
      iconName: 'check',
      label: 'Following'
    },
    stateThree: {
      iconCategory: 'utility',
      iconName: 'close',
      label: 'Unfollow'
    }
  })), React.createElement(PageHeaderControl, null, React.createElement(SLDSButtonGroup, {
    variant: "list",
    id: "button-group-page-header-actions"
  }, React.createElement(SLDSButton, {
    label: "Edit"
  }), React.createElement(SLDSButton, {
    label: "Delete"
  }), React.createElement(SLDSButton, {
    label: "Clone"
  }), React.createElement(SLDSMenuDropdown, {
    assistiveText: {
      icon: 'More Options'
    },
    buttonVariant: "icon",
    iconCategory: "utility",
    iconName: "down",
    iconVariant: "border-filled",
    onSelect: function onSelect() {
      console.log('selected');
    },
    openOn: "click",
    align: "right",
    options: [{
      label: 'Disable',
      value: 'A0'
    }, {
      label: 'Promote',
      value: 'C0'
    }]
  }))));
};

var recordHomeDetails = [{
  label: 'Description',
  content: 'Description that demonstrates truncation with content. Description that demonstrates truncation with content.',
  flavor: '1-of-4',
  truncate: true
}, {
  label: 'Last Modified',
  content: 'August 31, 2016 2:01PM PST'
}, {
  label: 'Status',
  content: 'Status of thing you wanna know'
}];
describe('PageHeader: ', function () {
  var defaultPropsRecordHome = {
    icon: React.createElement(Icon, {
      assistiveText: {
        label: 'User'
      },
      category: "standard",
      name: "user"
    }),
    label: 'Record Type',
    title: 'Record Title',
    variant: 'record-home',
    onRenderActions: recordHomeActions,
    details: recordHomeDetails
  };
  describe('Renders basic props', function () {
    it('renders correct Icon prop', function () {
      var wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(PageHeader, defaultPropsRecordHome)));
      var svg = wrapper.find('.slds-media__figure .slds-icon-standard-user');
      expect(svg).to.exist;
    });
    it('renders correct Label prop', function () {
      var wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(PageHeader, defaultPropsRecordHome)));
      expect(wrapper.find('SLDSPageHeader')).to.have.prop('label', 'Record Type');
    });
    it('renders correct Title prop', function () {
      var wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(PageHeader, defaultPropsRecordHome)));
      expect(wrapper.find('SLDSPageHeader')).to.have.prop('title', 'Record Title');
    });
    it('renders onRenderActions prop', function () {
      var wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(PageHeader, defaultPropsRecordHome)));
      var statefulBtn = wrapper.find('.slds-not-selected');
      var buttonGroup = wrapper.find('.slds-button-group-list');
      expect(statefulBtn).to.have.length(1);
      expect(buttonGroup).to.have.length(1);
    });
    it('renders Fields prop', function () {
      var wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(PageHeader, defaultPropsRecordHome)));
      var field1 = wrapper.find('.slds-page-header__detail-block').first();
      expect(field1.find('.slds-text-title').text()).to.equal('Description');
      expect(field1.find('.slds-truncate').last().text()).to.equal('Description that demonstrates truncation with content. Description that demonstrates truncation with content.');
    });
  });
  describe('Truncation works in all the ways Donielle can think of', function () {
    it('field content truncates if this.props.truncate is true', function () {
      var wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(PageHeader, defaultPropsRecordHome)));
      var field1 = wrapper.find('.slds-page-header__detail-block').first();
      var field1Content = field1.find('.slds-truncate').last();
      expect(field1Content.hasClass('slds-truncate')).to.equal(true);
    });
  });
});
//# sourceMappingURL=page-header.browser-test.js.map