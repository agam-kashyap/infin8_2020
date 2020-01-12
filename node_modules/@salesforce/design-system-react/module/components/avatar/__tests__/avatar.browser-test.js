/* eslint-disable react/no-render-return-value */

/* eslint-disable react/no-find-dom-node */
import React from 'react';
import { mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { createMountNode, destroyMountNode } from '../../../tests/enzyme-helpers';
import SLDSAvatar from '../../avatar';
import IconSettings from '../../icon-settings';
chai.use(chaiEnzyme());
describe('SLDSAvatar: ', function describeFunction() {
  var _this2 = this;

  var mountNode;
  var wrapper;
  describe('Default Structure', function describeFunction2() {
    var _this = this;

    beforeEach(function () {
      mountNode = createMountNode({
        context: _this
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('avatar renders with image', function () {
      var expectedSrc = 'assets/images/global-header/logo.svg';
      wrapper = mount(React.createElement(SLDSAvatar, {
        imgSrc: expectedSrc
      }), {
        attachTo: mountNode
      });
      var img = wrapper.find('img');
      var src = img.prop('src');
      expect(src).to.equal(expectedSrc);
    });
    it('renders proper icon size class', function () {
      wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(SLDSAvatar, {
        size: "large"
      })), {
        attachTo: mountNode
      });
      var avatar = wrapper.find('.slds-avatar_large');
      expect(avatar).to.be.present;
    });
    describe('variant is a user', function () {
      beforeEach(function () {
        wrapper = mount(React.createElement(IconSettings, {
          iconPath: "/assets/icons"
        }, React.createElement(SLDSAvatar, {
          variant: "user"
        })), {
          attachTo: mountNode
        });
      });
      it('displays as a circle', function () {
        var circleClass = !!wrapper.find('.slds-avatar_circle');
        expect(circleClass).to.be.true;
      });
    });
    describe('variant is an entity', function () {
      beforeEach(function () {
        wrapper = mount(React.createElement(IconSettings, {
          iconPath: "/assets/icons"
        }, React.createElement(SLDSAvatar, {
          variant: "entity"
        })), {
          attachTo: mountNode
        });
      });
      it('displays as a square (no circle class)', function () {
        var avatar = wrapper.find('.slds-avatar_circle');
        expect(avatar).to.not.be.present;
      });
    });
  });
  describe('Initials avatar fallback check', function () {
    beforeEach(function () {
      mountNode = createMountNode({
        context: _this2
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('renders "initials prop" initials if they are passed in directly', function () {
      wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(SLDSAvatar, {
        initials: "AW"
      })), {
        attachTo: mountNode
      });
      var abbr = wrapper.find('abbr');
      expect(abbr.text()).to.equal('AW');
    });
    it('renders fallback initials abbr node if initials or label prop exists', function () {
      wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(SLDSAvatar, {
        label: "test"
      })), {
        attachTo: mountNode
      });
      var abbr = !!wrapper.find('abbr');
      expect(abbr).to.be.true;
    });
    it('calls buildInitials in abbr node if no initials prop', function () {
      wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(SLDSAvatar, {
        label: "Jane Doe"
      })), {
        attachTo: mountNode
      });
      var abbr = wrapper.find('abbr');
      expect(abbr.text()).to.equal('JD');
    });
    it('renders first two letters of one word if label is one word', function () {
      wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(SLDSAvatar, {
        label: "Acme"
      })), {
        attachTo: mountNode
      });
      var abbr = wrapper.find('abbr');
      expect(abbr.text()).to.equal('Ac');
    });
    it('renders first letters of each word if label is two words', function () {
      wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(SLDSAvatar, {
        label: "Acme Communications"
      })), {
        attachTo: mountNode
      });
      var abbr = wrapper.find('abbr');
      expect(abbr.text()).to.equal('AC');
    });
    it('renders first letters of first and last word if label is more than two words', function () {
      wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(SLDSAvatar, {
        label: "Acme Communications Inc."
      })), {
        attachTo: mountNode
      });
      var abbr = wrapper.find('abbr');
      expect(abbr.text()).to.equal('AI');
    });
  });
  describe('Icon avatar fallback check', function () {
    beforeEach(function () {
      mountNode = createMountNode({
        context: _this2
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('renders expected assistiveText', function () {
      wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(SLDSAvatar, {
        variant: "entity",
        assistiveText: {
          icon: 'entity icon avatar'
        }
      })), {
        attachTo: mountNode
      });
      var span = wrapper.find('.slds-assistive-text');
      expect(span.text()).to.equal('entity icon avatar');
    });
    it('renders account icon', function () {
      wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(SLDSAvatar, {
        variant: "entity"
      })), {
        attachTo: mountNode
      });
      expect(wrapper.find('.slds-icon-standard-account')).to.be.present;
    });
    it('renders user icon', function () {
      wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(SLDSAvatar, {
        variant: "user"
      })), {
        attachTo: mountNode
      });
      expect(wrapper.find('.slds-icon-standard-user')).to.be.present;
    });
  });
});
//# sourceMappingURL=avatar.browser-test.js.map