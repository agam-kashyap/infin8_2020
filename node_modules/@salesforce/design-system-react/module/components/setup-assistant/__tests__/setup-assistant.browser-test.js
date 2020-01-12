function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import IconSettings from '../../icon-settings';
import SetupAssistant from '../../setup-assistant';
import SetupAssistantStep from '../../setup-assistant/step';
/* eslint-disable react/no-find-dom-node */

describe('SLDS Setup Assistant', function () {
  var handles = {
    setupAssistant: null
  };
  describe('Setup Assistant & Setup Assistant Step events', function () {
    var onStepToggleIsOpenObject;
    var onToggleIsOpenObject;
    beforeEach(function () {
      handles.setupAssistant = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(SetupAssistant, {
        id: "setup-assistant-event-test-1",
        onStepToggleIsOpen: function onStepToggleIsOpen(event, data) {
          onStepToggleIsOpenObject = {
            event: event,
            data: data
          };
        }
      }, React.createElement(SetupAssistantStep, {
        heading: "Setup Assistant Step Heading",
        id: "setup-assistant-event-test-1-step-1",
        isExpandable: true,
        isOpen: true
      }), React.createElement(SetupAssistantStep, {
        heading: "Setup Assistant Step Heading",
        id: "setup-assistant-event-test-1-step-2",
        isExpandable: true,
        isOpen: true,
        onToggleIsOpen: function onToggleIsOpen(event, data) {
          onToggleIsOpenObject = {
            event: event,
            data: data
          };
        }
      }))));
    });
    it('renders setup assistant', function () {
      expect(handles.setupAssistant.length).to.equal(1);
    });
    it('handles onStepToggleIsOpen correctly', function () {
      var expandButton = handles.setupAssistant.find('#setup-assistant-event-test-1-step-1 .slds-setup-assistant__step-summary-title button');
      expandButton.simulate('click');
      expect(_typeof(onStepToggleIsOpenObject.event)).to.eql('object');
      expect(_typeof(onStepToggleIsOpenObject.data)).to.eql('object');
      expect(onStepToggleIsOpenObject.data.index).to.eql(0);
      expect(onStepToggleIsOpenObject.data.isOpen).to.eql(true);
      expect(_typeof(onStepToggleIsOpenObject.data.step)).to.eql('object');
    });
    it('handles onToggleIsOpen correctly', function () {
      var expandButton = handles.setupAssistant.find('#setup-assistant-event-test-1-step-2 .slds-setup-assistant__step-summary-title button');
      expandButton.simulate('click');
      expect(_typeof(onToggleIsOpenObject.event)).to.eql('object');
      expect(_typeof(onToggleIsOpenObject.data)).to.eql('object');
      expect(onToggleIsOpenObject.data.index).to.eql(1);
      expect(onToggleIsOpenObject.data.isOpen).to.eql(true);
      expect(_typeof(onToggleIsOpenObject.data.step)).to.eql('object');
    });
  });
});
//# sourceMappingURL=setup-assistant.browser-test.js.map