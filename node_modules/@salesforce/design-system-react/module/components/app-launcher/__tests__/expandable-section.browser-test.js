import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';
import assign from 'lodash.assign';
import IconSettings from '../../icon-settings';
import AppLauncherLink from '../../app-launcher/link';
import AppLauncherTile from '../../app-launcher/tile';
import AppLauncherExpandableSection from '../../app-launcher/expandable-section';
var expect = chai.expect;
var should = chai.should();
describe('SLDS APP LAUNCHER EXPANDABLE SECTION *******************************************', function () {
  var handles = {
    section: null
  };
  var defaultSectionProps = {
    title: 'All Items'
  };
  var defaultChildren = [React.createElement(AppLauncherTile, {
    key: "asdf",
    title: "Marketing Cloud"
  }), React.createElement(AppLauncherTile, {
    key: "qwer",
    title: "Support Cloud"
  })];
  var linkChildren = [React.createElement(AppLauncherLink, {
    key: "asdf"
  }, "Accounts"), React.createElement(AppLauncherLink, {
    key: "qwer"
  }, "Ammnouncements")];

  var createSection = function createSection(props, children) {
    return React.createElement(AppLauncherExpandableSection, assign({}, defaultSectionProps, props), children);
  };

  function mountSection(props) {
    var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultChildren;
    handles.section = mount(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, createSection(props, children)));
  }

  describe('App Launcher Expandable Section', function () {
    var onToggleOpen;
    beforeEach(function () {
      onToggleOpen = sinon.spy();
      mountSection({
        assistiveText: {
          toggleSection: 'Collapse Section'
        },
        onToggleOpen: onToggleOpen,
        title: 'ALL THE ITEMS!'
      });
    });
    it('section exists', function () {
      should.exist(handles.section);
    });
    it('section has "slds-is-open" class when open', function () {
      expect(handles.section.find('.slds-section')).to.have.className('slds-is-open');
    });
    it('section has a title', function () {
      should.exist(handles.section.find('.slds-section__title'));
    });
    it('ul has proper classes', function () {
      should.exist(handles.section.find('ul.slds-grid.slds-grid_pull-padded.slds-wrap'));
    });
    it('li exists', function () {
      expect(handles.section.find('li').length).to.equal(2);
    });
    it('renders li with proper classes', function () {
      var li = handles.section.find('li').at(0);
      expect(li).to.have.className('slds-p-horizontal_small');
      expect(li).to.have.className('slds-size_1-of-1');
      expect(li).to.have.className('slds-medium-size_1-of-3');
    });
    it('renders custom section title', function () {
      expect(handles.section.find('h3 .slds-truncate').text()).to.equal('ALL THE ITEMS!');
    });
    it('renders custom toggle assistve text', function () {
      expect(handles.section.find('h3 span.slds-assistive-text').text()).to.equal('Collapse Section');
    });
    it('toggling section fires callback', function () {
      handles.section.find('h3 button.slds-button').simulate('click');
      expect(onToggleOpen.calledOnce).to.be.true; // eslint-disable-line no-unused-expressions
    });
  });
  describe('App Launcher Expandable Section (non-collapsible) with links', function () {
    beforeEach(function () {
      mountSection({
        nonCollapsible: true
      }, linkChildren);
    });
    it('does not render toggle if non-collapsible is true', function () {
      should.not.exist(handles.section.find('.slds-button .slds-button_icon .slds-m-right_small'));
    });
    it('renders li with proper classes', function () {
      var li = handles.section.find('li').at(0);
      expect(li).to.have.className('slds-col_padded');
      expect(li).to.have.className('slds-p-vertical_xx-small');
      expect(li).to.have.className('slds-size_1-of-5');
    });
  });
  describe('App Launcher Expandable Section (closed)', function () {
    beforeEach(function () {
      mountSection({
        isOpen: false
      });
    });
    it('section does not have "slds-is-open" class when closed', function () {
      expect(handles.section.find('.slds-section.slds-is-open').length).to.eql(0);
    });
  });
});
//# sourceMappingURL=expandable-section.browser-test.js.map