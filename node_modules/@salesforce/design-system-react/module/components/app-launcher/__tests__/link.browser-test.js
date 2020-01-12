import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';
import IconSettings from '../../icon-settings';
import AppLauncherLink from '../../app-launcher/link';
var expect = chai.expect;
var should = chai.should();
describe('SLDS APP LAUNCHER LINK *******************************************', function () {
  var div;
  var handles = {
    link: null
  };

  var createLink = function createLink(props) {
    return React.createElement(AppLauncherLink, props);
  };

  function mountLink(props) {
    div = document.createElement('div');
    document.body.appendChild(div);
    handles.link = mount(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, createLink(props)));
  }

  function cleanDom() {
    document.body.removeChild(div);
  }

  describe('Default App Launcher Link', function () {
    var onClick;
    beforeEach(function () {
      onClick = sinon.spy();
      mountLink({
        children: 'Accounts',
        className: 'this-is-a-custom-class',
        href: 'https://www.salesforce.com/',
        onClick: onClick,
        search: 'ccounts',
        title: 'Accounts Title'
      });
    });
    afterEach(function () {
      cleanDom();
    });
    it('renders link', function () {
      should.exist(handles.link);
    });
    it('renders link with proper classes', function () {
      should.exist(handles.link.find('a.slds-truncate'));
    });
    it('renders link with custom classes', function () {
      should.exist(handles.link.find('a.this-is-a-custom-class'));
    });
    it('renders link children', function () {
      expect(handles.link.find('span').at(0).text()).to.eql('Accounts');
    });
    it('renders link title', function () {
      expect(handles.link).to.have.attr('title', 'Accounts Title');
    });
    it('has an href attribute', function () {
      expect(handles.link).to.have.attr('href', 'https://www.salesforce.com/');
    });
    it('clicking link fires callback and ignores href', function () {
      handles.link.simulate('click');
      expect(onClick.calledOnce).to.be.true; // eslint-disable-line no-unused-expressions
    });
    it('search string highlights link children', function () {
      expect(handles.link.containsAllMatchingElements( // eslint-disable-line no-unused-expressions
      [React.createElement("span", null, "A"), React.createElement("mark", null, "ccounts")])).to.be.true;
    });
  });
  describe('App Launcher Link (title prop not provided)', function () {
    beforeEach(function () {
      mountLink({
        children: 'Accounts'
      });
    });
    afterEach(function () {
      cleanDom();
    });
    it('uses children to render title when not provided title prop', function () {
      expect(handles.link).to.have.attr('title', 'Accounts');
    });
  });
});
//# sourceMappingURL=link.browser-test.js.map