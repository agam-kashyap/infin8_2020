function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */

import { createMountNode, destroyMountNode } from '../../../tests/enzyme-helpers'; // Import your internal dependencies (for example):

import Popover from '../../popover';
import Button from '../../button';
import Dialog from '../../utilities/dialog';
import IconSettings from '../../icon-settings';
/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */

chai.use(chaiEnzyme());
var defaultProps = {
  id: 'sample-popover',
  body: React.createElement("span", {
    id: "sample-body"
  }, "This is the body"),
  heading: React.createElement("span", {
    id: "sample-heading"
  }, "This is the heading")
};
var defaultIds = {
  trigger: "button#".concat(defaultProps.id),
  popover: "".concat(defaultProps.id, "-popover"),
  body: "".concat(defaultProps.id, "-dialog-body"),
  heading: "".concat(defaultProps.id, "-dialog-heading")
};
/* A re-usable demo component fixture outside of `describe` sections
 * can accept props within each test and be unmounted after each tests.
 * This wrapping component will be similar to your wrapping component
 * you will create in the React Storybook for manual testing.
 */

var DemoComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DemoComponent, _React$Component);

  function DemoComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DemoComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DemoComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  _createClass(DemoComponent, [{
    key: "render",
    // event handlers
    value: function render() {
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement("div", null, React.createElement(Popover, this.props, React.createElement(Button, {
        label: "Trigger Popover"
      })), React.createElement(Button, {
        id: "not-the-trigger",
        label: "Not Trigger Popover"
      })));
    }
  }]);

  return DemoComponent;
}(React.Component);
/* All tests for component being tested should be wrapped in a root `describe`,
 * which should be named after the component being tested.
 * When read aloud, the cumulative `describe` and `it` names should form a coherent
 * sentence, eg "Date Picker default structure and css is present with expected
 * attributes set". If you are having trouble constructing a cumulative short
 * sentence, this may be an indicator that your test is poorly structured.
 * String provided as first parameter names the `describe` section. Limit to nouns
 * as much as possible/appropriate.`
 */


_defineProperty(DemoComponent, "displayName", 'PopoverDemoComponent');

_defineProperty(DemoComponent, "propTypes", {
  isOpen: PropTypes.bool
});

_defineProperty(DemoComponent, "defaultProps", defaultProps);

describe('SLDSPopover', function () {
  var _this3 = this;

  var mountNode;
  var wrapper; // BASIC STRUCTURE

  describe('Default structure and css', function () {
    var _this2 = this;

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
    it('is open, has heading, body, close button', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        isOpen: true
      }), {
        attachTo: mountNode
      });
      expect(wrapper.find("#".concat(defaultIds.heading))).to.exist;
      expect(wrapper.find("#".concat(defaultIds.body))).to.exist;
      expect(wrapper.find('.slds-popover__close')).to.exist;
    });
  });
  describe('Assistive technology', function () {
    /* Detect if presence of accessibility features such as ARIA
     * roles and screen reader text is present in the DOM.
     */
    beforeEach(function () {
      mountNode = createMountNode({
        context: _this3
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('has aria-labelledby/aria-describedby on popover', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        isOpen: true
      }), {
        attachTo: mountNode
      });
      var popover = wrapper.find("#".concat(defaultIds.popover));
      expect(popover).to.have.attr('aria-labelledby', defaultIds.heading);
      expect(popover).to.have.attr('aria-describedby', defaultIds.body);
    });
  }); // PROPS AND CHILDREN

  describe('Optional props', function () {
    var popoverBackgroundColor = 'rgb(255, 80, 121)';
    var containerBackgroundColor = 'rgb(255, 127, 80)'; // What should be present in the DOM when style and className are applied?

    var optionalProps = {
      className: 'sample-classname',
      assistiveText: {
        closeButton: 'Shut it now!'
      },
      containerClassName: 'sample-container-classname',
      containerStyle: {
        background: containerBackgroundColor
      },
      footer: React.createElement("p", {
        id: "footer"
      }, "Footer"),
      style: {
        background: popoverBackgroundColor
      }
    };
    beforeEach(function () {
      mountNode = createMountNode({
        context: _this3
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('has correct className, assistiveText, style, and footer', function () {
      wrapper = mount(React.createElement(DemoComponent, _extends({}, optionalProps, {
        isOpen: true
      })), {
        attachTo: mountNode
      });
      var popover = wrapper.find(Dialog);
      expect(popover).to.have.className(optionalProps.className);
      expect(popover.find('button.slds-popover__close')).to.have.text(optionalProps.assistiveText.closeButton);
      expect(popover.find('#footer')).to.exist;
      expect(popover.prop('style').background).to.equal(popoverBackgroundColor);
    });
  }); // EVENTS

  describe('Mouse and keyboard interactions', function () {
    /* Test event callback functions using Simulate. For more information, view
     * https://github.com/airbnb/enzyme/blob/master/docs/api/ReactWrapper/simulate.md
     */
    describe('onClick', function () {
      var _this4 = this;

      var triggerClicked = sinon.spy();
      beforeEach(function () {
        mountNode = createMountNode({
          context: _this4
        });
      });
      afterEach(function () {
        destroyMountNode({
          wrapper: wrapper,
          mountNode: mountNode
        });
      });
      it('calls onClick handler on trigger, click on popover close closes', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          onClick: triggerClicked,
          onClose: function onClose() {
            setTimeout(function () {
              var popover = wrapper.find("#".concat(defaultIds.popover));
              expect(popover).to.not.exist;
              done();
            }, 0);
          },
          onOpen: function onOpen() {
            wrapper.update();
            var popover = wrapper.find("#".concat(defaultIds.popover));
            expect(popover).to.exist;
            expect(triggerClicked.callCount).to.equal(1);
            popover.find('button.slds-popover__close').simulate('click');
          },
          position: "absolute"
        }), {
          attachTo: mountNode
        });
        var trigger = wrapper.find(defaultIds.trigger);
        trigger.simulate('click');
      });
      it('opens on click, closes on ESC', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          onClose: function onClose() {
            setTimeout(function () {
              var popover = wrapper.find("#".concat(defaultIds.popover));
              expect(popover).to.not.exist;
              done();
            }, 0);
          },
          onOpen: function onOpen() {
            wrapper.update();
            var popover = wrapper.find("#".concat(defaultIds.popover));
            popover.simulate('keyDown', {
              key: 'Esc',
              keyCode: 27,
              which: 27
            });
          }
        }), {
          attachTo: mountNode
        });
        var trigger = wrapper.find(defaultIds.trigger);
        trigger.simulate('click');
      });
    });
  });
  describe('focus has moved to dialog', function () {
    var _this5 = this;

    var triggerClicked = sinon.spy();
    beforeEach(function () {
      mountNode = createMountNode({
        context: _this5
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('focus moves to correct node on open', function (done) {
      wrapper = mount(React.createElement(DemoComponent, {
        onClick: triggerClicked,
        onOpen: function onOpen() {
          expect(document.activeElement.id).to.equal("".concat(defaultIds.popover));
          done();
        }
      }), {
        attachTo: mountNode
      });
      var trigger = wrapper.find(defaultIds.trigger);
      trigger.simulate('click', {});
    });
  });
  describe('Disabled', function () {
    var _this6 = this;

    var triggerClicked = sinon.spy();
    var popoverOpened = sinon.spy();
    beforeEach(function () {
      mountNode = createMountNode({
        context: _this6
      });
    });
    afterEach(function () {
      destroyMountNode({
        wrapper: wrapper,
        mountNode: mountNode
      });
    });
    it('onOpen is not called when disabled', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        disabled: true,
        onClick: triggerClicked,
        onOpen: popoverOpened
      }), {
        attachTo: mountNode
      });
      var trigger = wrapper.find(defaultIds.trigger);
      trigger.simulate('click', {});
      expect(popoverOpened.callCount).to.equal(0);
    });
  });
});
//# sourceMappingURL=popover.browser-test.js.map