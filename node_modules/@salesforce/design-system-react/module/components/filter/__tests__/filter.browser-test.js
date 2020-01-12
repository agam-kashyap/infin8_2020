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
import Filter from '../../filter';
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
    value: function render() {
      return React.createElement(Popover, this.props, React.createElement(Button, {
        label: "Trigger Popover"
      }));
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

describe('SLDSFilter', function describeFunction() {
  var mountNode;
  var wrapper; // BASIC STRUCTURE

  describe('Add custom props to Filter Popover', function () {
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
    it('Filter could take popover as a prop and use the props of popover to render, verifies the custom popover className', function () {
      var demoPopover = React.createElement(DemoComponent, {
        className: "custom-filter-popover",
        isOpen: true,
        position: "absolute"
      });
      wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(Filter, {
        property: "Show Me",
        predicate: "All Opportunities",
        popover: demoPopover
      })), {
        attachTo: mountNode
      });
      expect(wrapper.find('.custom-filter-popover')).to.exist;
    });
  });
  describe('On click handler when clicking on filter', function () {
    var _this3 = this;

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
    it('Filter could take onClick prop and trigger this callback during filter click', function (done) {
      var demoPopover = React.createElement(DemoComponent, {
        className: "custom-filter-popover"
      });
      var onFilterClicked = false;

      var onClick = function onClick() {
        onFilterClicked = true;
      };

      wrapper = mount(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(Filter, {
        property: "Show Me",
        predicate: "All Opportunities",
        popover: demoPopover,
        onClick: onClick
      })), {
        attachTo: mountNode
      });
      setTimeout(function () {
        var filterButton = wrapper.find('.slds-filters__item .slds-button_reset');
        filterButton.simulate('click', {});
        expect(onFilterClicked).to.be.true;
        done();
      }, 0);
    });
  });
});
//# sourceMappingURL=filter.browser-test.js.map