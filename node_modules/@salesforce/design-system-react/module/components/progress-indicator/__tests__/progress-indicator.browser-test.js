function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Adds all of the Mocha (eg `it` and `should`) and sinon testing global
 * variables to the global namespace for eslint purposes.
 */

/* eslint-env mocha */

/* global sinon */
// Additional modifiers to [eslint-config-slds](https://github.com/salesforce-ux/eslint-config-slds) for convenience

/* eslint-disable no-console */

/* eslint-disable no-unused-expressions */

/* eslint-disable max-len */

/* eslint-disable prefer-arrow-callback */

/* eslint-disable react/display-name */
// Import your external dependencies
import React from 'react';
import { expect } from 'chai';
import SLDSProgressIndicator from '../../progress-indicator';
import IconSettings from '../../icon-settings';
/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */

import { mountComponent, unmountComponent } from '../../../tests/enzyme-helpers';
var defaultProps = {
  id: 'sample-progress-indicator'
};
var mockCallback = sinon.spy();

var DemoComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DemoComponent, _React$Component);

  function DemoComponent() {
    _classCallCheck(this, DemoComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(DemoComponent).apply(this, arguments));
  }

  _createClass(DemoComponent, [{
    key: "render",
    value: function render() {
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(SLDSProgressIndicator, this.props));
    }
  }]);

  return DemoComponent;
}(React.Component);

_defineProperty(DemoComponent, "displayName", 'ProgressIndicatorDemoComponent');

_defineProperty(DemoComponent, "propTypes", {
  onStepClick: mockCallback,
  onStepFocus: mockCallback
});

_defineProperty(DemoComponent, "defaultProps", defaultProps);

var steps = [{
  id: 0,
  label: 'tooltip label #1'
}, {
  id: 1,
  label: 'tooltip label #2'
}, {
  id: 2,
  label: 'tooltip label #3'
}, {
  id: 3,
  label: 'tooltip label #4'
}, {
  id: 4,
  label: 'tooltip label #5'
}];
var sixSteps = [{
  id: 0,
  label: 'custom tooltip #1'
}, {
  id: 1,
  label: 'tooltip label #2'
}, {
  id: 2,
  label: 'tooltip label #3'
}, {
  id: 3,
  label: 'tooltip label #4'
}, {
  id: 4,
  label: 'tooltip label #5'
}, {
  id: 5,
  label: 'tooltip label #6'
}];
describe('SLDSProgressIndicator: ', function () {
  describe('Basic Props Render', function () {
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      steps: steps,
      selectedStep: steps[2],
      completedSteps: steps.slice(0, 2)
    })));
    afterEach(unmountComponent); // PROPS

    it('has five steps by default', function () {
      var item = this.wrapper.find('.slds-progress').find('li');
      expect(item).to.have.length(5);
    });
    it('has only one active step', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-is-active');
      expect(item).to.have.length(1);
    });
    it('does not have an error step', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-has-error');
      expect(item).to.have.length(0);
    });
    it('has correct number of completed steps', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-is-completed');
      expect(item).to.have.length(2);
    });
    it('has a white background', function () {
      var item = this.wrapper.find('.slds-progress_shade');
      expect(item).to.have.length(0);
    });
  });
  describe('Within-Modal Props Render (Without Error)', function () {
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      steps: steps,
      selectedStep: steps[2],
      completedSteps: steps.slice(0, 2),
      variant: "modal"
    })));
    afterEach(unmountComponent); // PROPS

    it('has 5 steps by default', function () {
      var item = this.wrapper.find('.slds-progress').find('li');
      expect(item).to.have.length(5);
    });
    it('has no error step', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-has-error');
      expect(item).to.have.length(0);
    });
    it('has 1 active step', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-is-active');
      expect(item).to.have.length(1);
    });
    it('has correct number of completed steps', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-is-completed');
      expect(item).to.have.length(2);
    });
    it('has a gray background', function () {
      var item = this.wrapper.find('.slds-progress_shade');
      expect(item).to.have.length(1);
    });
  });
  describe('Within-Modal Props Render (With Error)', function () {
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      steps: steps,
      selectedStep: steps[2],
      errorSteps: steps.slice(2, 3),
      completedSteps: steps.slice(0, 2),
      variant: "modal"
    })));
    afterEach(unmountComponent); // PROPS

    it('has 1 error step', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-has-error');
      expect(item).to.have.length(1);
    });
    it('has no active step', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-is-active');
      expect(item).to.have.length(0);
    });
    it('has correct number of completed steps', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-is-completed');
      expect(item).to.have.length(2);
    });
  });
  describe('Tooltip Props Render', function () {
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      steps: sixSteps,
      selectedStep: sixSteps[2],
      errorSteps: sixSteps.slice(2, 3),
      completedSteps: sixSteps.slice(0, 2)
    })));
    afterEach(unmountComponent); // PROPS

    it('has an error step', function () {
      var item = this.wrapper.find('.slds-progress').find('li.slds-has-error');
      expect(item).to.have.length(1);
    });
    it('has a tooltip attached to every step', function () {
      var item = this.wrapper.find('.slds-progress').find('.slds-tooltip-trigger');
      expect(item).to.have.length(6);
    });
  });
  describe('Click Event', function () {
    var clickHandler = sinon.spy();
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      steps: steps,
      selectedStep: steps[2],
      completedSteps: steps.slice(0, 2),
      onStepClick: clickHandler
    })));
    afterEach(unmountComponent); // EVENTS

    it('calls onStepClick()', function () {
      var step = this.wrapper.find('.slds-progress').find('li').find('button').first();
      step.simulate('click'); // <-- this is causing some errors on tab tests

      expect(clickHandler.callCount).to.equal(1);
    });
  });
  describe('Assistive Technology', function () {
    /* Detect if presence of accessibility features such as ARIA
     * roles and screen reader text is present in the DOM.
     */
    var focusHandler = sinon.spy();
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      steps: steps,
      selectedStep: steps[2],
      completedSteps: steps.slice(0, 2),
      onStepFocus: focusHandler
    })));
    afterEach(unmountComponent); // A11Y FEATURES

    it('specifies the role for progress bar', function () {
      var progressbarRole = this.wrapper.find('div[role="progressbar"]');
      expect(progressbarRole).to.have.length(1);
    });
    it('renders assistive text for progress bar', function () {
      var item = this.wrapper.find('.slds-progress-bar').find('.slds-assistive-text').first();
      expect(item.text()).to.include('Progress:');
      expect(item.text()).to.include('%');
    });
  });
  /**
   * TODO in the future:
   * we may want to extend test cases when TetherJS is removed for future dev
   * The following cases may be considered:
   *   1. test tooltips behave properly (show/hide/with correct label) *on hover*
   *   2. test tooltips behave properly *on focus/blur*
   */
});
//# sourceMappingURL=progress-indicator.browser-test.js.map