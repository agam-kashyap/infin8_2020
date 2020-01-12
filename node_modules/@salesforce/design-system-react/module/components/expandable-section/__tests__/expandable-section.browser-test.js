import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';
import assign from 'lodash.assign';
import IconSettings from '../../icon-settings';
import ExpandableSection from '../../expandable-section';
var expect = chai.expect;
var should = chai.should();
describe('SLDSExpandableSection', function () {
  var handles = {
    section: null
  };
  var defaultSectionProps = {
    title: 'All Items'
  };
  var defaultChildren = 'Expandable section children';

  var createSection = function createSection(props, children) {
    return React.createElement(ExpandableSection, assign({}, defaultSectionProps, props), children);
  };

  function mountSection(props) {
    var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultChildren;
    handles.section = mount(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, createSection(props, children)));
  }

  describe('App Launcher Section', function () {
    var onToggleOpen;
    beforeEach(function () {
      onToggleOpen = sinon.spy();
      mountSection({
        assistiveText: {
          toggleSection: 'Collapse Section'
        },
        className: 'this-is-a-custom-class',
        id: 'test-id',
        onToggleOpen: onToggleOpen,
        title: 'Section Title'
      }, 'Children test!');
    });
    it('section exists', function () {
      should.exist(handles.section);
    });
    it('section has custom class', function () {
      expect(handles.section.find('div').at(0).hasClass('this-is-a-custom-class')).to.eql(true);
    });
    it('section has "slds-is-open" class when open', function () {
      expect(handles.section.find('.slds-section')).to.have.className('slds-is-open');
    });
    it('section renders children properly', function () {
      expect(handles.section.find('.slds-section__content').text()).to.eql('Children test!');
    });
    it('section uses passed in id properly', function () {
      expect(handles.section.find('#test-id-expanded-section-content').length).to.eql(1);
    });
    it('section has a title', function () {
      should.exist(handles.section.find('.slds-section__title'));
    });
    it('renders custom section title', function () {
      expect(handles.section.find('h3 .slds-truncate').text()).to.equal('Section Title');
    });
    it('renders custom toggle assistve text', function () {
      expect(handles.section.find('h3 span.slds-assistive-text').text()).to.equal('Collapse Section');
    });
    it('toggling section fires callback', function () {
      handles.section.find('h3 button.slds-button').simulate('click');
      expect(onToggleOpen.calledOnce).to.be.true; // eslint-disable-line no-unused-expressions
    });
  });
  describe('Expandable Section (non-collapsible)', function () {
    beforeEach(function () {
      mountSection({
        nonCollapsible: true
      });
    });
    it('does not render toggle if non-collapsible is true', function () {
      should.not.exist(handles.section.find('.slds-button .slds-button_icon .slds-m-right_small'));
    });
  });
  describe('Expandable Section (closed)', function () {
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