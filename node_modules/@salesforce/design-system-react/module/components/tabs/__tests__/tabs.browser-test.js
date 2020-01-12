function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Import your external dependencies
import React from 'react';
import PropTypes from 'prop-types';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import classNames from 'classnames'; // Import your internal dependencies (for example):

import Tabs from '../../tabs';
import Panel from '../../tabs/panel';
/* Enzyme Helpers can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js).
 */

import { mountComponent, unmountComponent } from '../../../tests/enzyme-helpers';
/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */

chai.use(chaiEnzyme());
var COMPONENT_CSS_CLASSES = {
  wrapper: 'slds-tabs_default_wrapper',
  base: 'slds-tabs_default',
  nav: 'slds-tabs_default__nav',
  item: 'slds-tabs_default__item',
  link: 'slds-tabs_default__link',
  content: 'slds-tabs_default__content',
  testClass: 'this-is-a-css-class-name'
};
/* A re-usable demo component fixture outside of `describe` sections
 * can accept props within each test and be unmounted after each tests.
 * This wrapping component will be similar to your wrapping component
 * you will create in the React Storybook for manual testing.
 */

var TabsDemoComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabsDemoComponent, _React$Component);

  function TabsDemoComponent() {
    _classCallCheck(this, TabsDemoComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabsDemoComponent).apply(this, arguments));
  }

  _createClass(TabsDemoComponent, [{
    key: "render",
    // ### Prop Types
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          id = _this$props.id,
          attributes = _objectWithoutProperties(_this$props, ["className", "id"]); // Delete all known props, so they don't get added to DOM


      delete attributes.selectedIndex;
      delete attributes.onSelect;
      delete attributes.children;
      delete attributes.id;
      return React.createElement("div", {
        className: classNames('slds-m-top_large', "".concat(COMPONENT_CSS_CLASSES.wrapper))
      }, React.createElement(Tabs, _extends({
        className: classNames(className),
        id: id
      }, attributes), React.createElement(Panel, {
        label: "Tab A"
      }, React.createElement("p", null, "This is tab A")), React.createElement(Panel, {
        label: "Tab B",
        disabled: true
      }, React.createElement("p", null, "This is tab B."), React.createElement("p", null, "It is disabled.")), React.createElement(Panel, {
        label: "Tab C"
      }, React.createElement("p", null, "This is tab C")), React.createElement(Panel, {
        label: "Always No"
      }, React.createElement("p", null, "This one can not be selected from the tabs list because this example provides a custom ", React.createElement("code", null, "onSelct"), " function that retuns false when it is run, preventing the component\u2019s built-in handler from running, and thus the tab is never selected."), React.createElement("p", null, "Note that you ", React.createElement("em", null, "can"), " still see the panel if you hide the other tabs, because the tab/panel are not ", React.createElement("em", null, "disabled"), "."), React.createElement("p", null, "In other words, this should not be taken as an example of how to be sneaky about disabling tab selection, but rather that you can", ' ', React.createElement("strong", null, "do stuff"), " when a tab is selected by sending it a custom ", React.createElement("code", null, "onSelect"), " function."))));
    }
  }]);

  return TabsDemoComponent;
}(React.Component);

_defineProperty(TabsDemoComponent, "displayName", 'TabsDemoComponent');

_defineProperty(TabsDemoComponent, "propTypes", {
  /**
   * Class names to be added to the container element and is passed along to its children.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * HTML `id` attribute of primary element that has `.slds-tabs_default` on it. Optional: If one is not supplied, a `shortid` will be created.
   */
  id: PropTypes.string,

  /**
   * Function that triggers when a tab is selected.
   */
  onSelect: PropTypes.func
});

describe('Tabs', function () {
  // BASIC STRUCTURE
  describe('Default structure and CSS', function () {
    var id = 'this-is-an-id-for-testing';
    before(mountComponent(React.createElement(TabsDemoComponent, {
      className: "".concat(COMPONENT_CSS_CLASSES.testClass),
      id: id,
      bar: "baz"
    })));
    after(unmountComponent);
    it('Has a main wrapper with the proper class name.', function () {
      var myTabsWrapper = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.wrapper));
      expect(myTabsWrapper.hasClass(COMPONENT_CSS_CLASSES.wrapper)).to.be.true;
    });
    it('Has exactly one (1) tabs component, and has with the proper class name.', function () {
      var myTabs = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      expect(myTabs.hasClass(COMPONENT_CSS_CLASSES.base)).to.be.true;
      expect(myTabs).to.have.length(1);
    });
    it('Has the custom id (this-is-an-id-for-testing) we supplied.', function () {
      var myTabs = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      expect(myTabs).attr('id').to.equal(id);
    });
    it('Has exactly one (1) nav component, and has with the proper class name.', function () {
      var myTabsNav = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.nav));
      expect(myTabsNav.hasClass(COMPONENT_CSS_CLASSES.nav)).to.be.true;
      expect(myTabsNav).to.have.length(1);
    });
    it("Nav component builds proper ID (".concat(id, "-tabs__nav) because it inherits Tabs id property and appends \"-slds-tabs__nav\" to it."), function () {
      var myTabsNav = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.nav));
      expect(myTabsNav).attr('id').to.equal("".concat(id, "-slds-tabs__nav"));
    });
    it("Has exactly four (4) <Tab /> components, each with the proper class name (".concat(COMPONENT_CSS_CLASSES.item, ")."), function () {
      var myTabsListItems = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item));
      this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item)).forEach(function (node) {
        expect(node.hasClass(COMPONENT_CSS_CLASSES.item)).to.equal(true);
      });
      expect(myTabsListItems).to.have.length(4);
    });
    it('Has only one (1) tab with ".slds-disabled" class on it.', function () {
      var myTabsListItem = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item, ".slds-disabled"));
      expect(myTabsListItem).to.have.length(1);
    });
    it('Tab components have proper ID attributes because they inherit the Tabs "id" property and append "-slds-tabs_tab-<index>" to it.', function () {
      this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item)).forEach(function (node, index) {
        expect(node).to.have.attr('id', "".concat(id, "-slds-tabs_tab-").concat(index));
      });
    });
    it('TabPanel components have proper ID attributes because they inherit the Tabs "id" property and append "-slds-tabs_panel-<index>" to it.', function () {
      this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.panel)).forEach(function (node, index) {
        expect(node).to.have.attr('id', "".concat(id, "-slds-tabs_panel-").concat(index));
      });
    });
    it('Has the proper disabled class on the second tab.', function () {
      var myTabsListItem = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item, ".slds-disabled"));
      expect(myTabsListItem.hasClass('slds-disabled')).to.equal(true);
    });
    it('Has the same number of tabs as panels.', function () {
      var myTabsListItems = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item));
      var myTabsPanels = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.content));
      expect(myTabsListItems).to.have.length(4);
      expect(myTabsPanels).to.have.length(4);
    });
  });
  describe('Assistive technology', function () {
    /* Detect if presence of accessibility features such as ARIA
     * roles and screen reader text is present in the DOM.
     */
    var id = 'this-is-an-id-for-testing';
    before(mountComponent(React.createElement(TabsDemoComponent, {
      className: "".concat(COMPONENT_CSS_CLASSES.testClass),
      id: id
    })));
    after(unmountComponent);
    it('Tab components have proper "aria-controls" attribute because they inherit Tabs ID property and append "-slds-tabs_panel-<index>" to it.', function () {
      this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.link)).forEach(function (node, index) {
        expect(node).to.have.attr('aria-controls', "".concat(id, "-slds-tabs_panel-").concat(index));
      });
    });
    it('TabPanel components have proper "aria-labelledby" attribute because they inherit Tabs ID property and append "-slds-tabs_tab-<index>" to it.', function () {
      this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.panel)).forEach(function (node, index) {
        expect(node).to.have.attr('aria-labelledby', "".concat(id, "-slds-tabs_tab-").concat(index));
      });
    });
    it('Has the aria-disabled attribute on the second tab.', function () {
      var myTabsListItem = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.link, ".slds-disabled"));
      expect(myTabsListItem).to.have.attr('aria-disabled').equal('true');
    });
    it('Has a tabindex of -1 on the second tab.', function () {
      var myTabsListItem = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item, ".slds-disabled"));
      expect(myTabsListItem).to.have.attr('tabindex').equal('-1');
    });
  });
  describe('Interactions click', function () {
    var id = 'this-is-an-id-for-testing--click';
    before(mountComponent(React.createElement(TabsDemoComponent, {
      id: id
    })));
    after(unmountComponent);
    it('New panel renders when a tab is clicked ', function () {
      var myTabsListItems = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item));
      var myFirstPanel = this.wrapper.find("div#".concat(id, "-slds-tabs_panel-0"));
      var myThirdPanel = this.wrapper.find("div#".concat(id, "-slds-tabs_panel-2"));
      expect(myFirstPanel.hasClass('slds-show')).to.equal(true);
      expect(myFirstPanel.hasClass('slds-hide')).to.equal(false);
      expect(myThirdPanel.hasClass('slds-show')).to.equal(false);
      expect(myThirdPanel.hasClass('slds-hide')).to.equal(true);
      myTabsListItems.at(2).simulate('click');
      myFirstPanel = this.wrapper.find("div#".concat(id, "-slds-tabs_panel-0"));
      myThirdPanel = this.wrapper.find("div#".concat(id, "-slds-tabs_panel-2"));
      expect(myFirstPanel.hasClass('slds-show')).to.equal(false);
      expect(myFirstPanel.hasClass('slds-hide')).to.equal(true);
      expect(myThirdPanel.hasClass('slds-show')).to.equal(true);
      expect(myThirdPanel.hasClass('slds-hide')).to.equal(false);
    });
  });
  describe('Interactions disabled', function () {
    var id = 'this-is-an-id-for-testing--disabled';
    before(mountComponent(React.createElement(TabsDemoComponent, {
      id: id
    })));
    after(unmountComponent);
    it('Disabled tab does not reveal new content ', function () {
      var myTabsListItems = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item));
      var myFirstPanel = this.wrapper.find("div#".concat(id, "-slds-tabs_panel-0"));
      var mySecondPanel = this.wrapper.find("div#".concat(id, "-slds-tabs_panel-1"));
      expect(myFirstPanel.hasClass('slds-show')).to.equal(true);
      expect(myFirstPanel.hasClass('slds-hide')).to.equal(false);
      expect(mySecondPanel.hasClass('slds-show')).to.equal(false);
      expect(mySecondPanel.hasClass('slds-hide')).to.equal(true);
      myTabsListItems.at(1).simulate('click');
      expect(myFirstPanel.hasClass('slds-show')).to.equal(true);
      expect(myFirstPanel.hasClass('slds-hide')).to.equal(false);
      expect(mySecondPanel.hasClass('slds-show')).to.equal(false);
      expect(mySecondPanel.hasClass('slds-hide')).to.equal(true);
    });
  });
  describe('Interactions tabby', function () {
    var id = 'this-is-an-id-for-testing--tabby';
    before(mountComponent(React.createElement(TabsDemoComponent, {
      id: id
    })));
    after(unmountComponent);
    it('Can be tabbed into', function () {
      var myTabsListItems = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item));
      var myFirstPanel = this.wrapper.find("div#".concat(id, "-slds-tabs_panel-0"));
      var myThirdPanel = this.wrapper.find("div#".concat(id, "-slds-tabs_panel-2"));
      expect(myFirstPanel.hasClass('slds-show')).to.equal(true);
      expect(myFirstPanel.hasClass('slds-hide')).to.equal(false);
      expect(myThirdPanel.hasClass('slds-show')).to.equal(false);
      expect(myThirdPanel.hasClass('slds-hide')).to.equal(true);
      myTabsListItems.at(0).simulate('keyDown', {
        key: 'Tab',
        keyCode: 9,
        which: 9
      });
      myTabsListItems.at(0).simulate('keyDown', {
        key: 'Right',
        keyCode: 39,
        which: 39
      });
      myFirstPanel = this.wrapper.find("div#".concat(id, "-slds-tabs_panel-0"));
      myThirdPanel = this.wrapper.find("div#".concat(id, "-slds-tabs_panel-2"));
      expect(myFirstPanel.hasClass('slds-show')).to.equal(false);
      expect(myFirstPanel.hasClass('slds-hide')).to.equal(true);
      expect(myThirdPanel.hasClass('slds-show')).to.equal(true);
      expect(myThirdPanel.hasClass('slds-hide')).to.equal(false);
    });
  });
  describe('Interactions tabby disabled', function () {
    var id = 'this-is-an-id-for-testing--tabby-disabled';
    before(mountComponent(React.createElement(TabsDemoComponent, {
      id: id
    })));
    after(unmountComponent);
    it('Disabled tab can NOT be tabbed into', function () {
      var myTabsListItems = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item));
      var myFirstPanel = this.wrapper.find("div#".concat(id, "-slds-tabs_panel-0"));
      var mySecondPanel = this.wrapper.find("div#".concat(id, "-slds-tabs_panel-1"));
      expect(myFirstPanel.hasClass('slds-show')).to.equal(true);
      expect(myFirstPanel.hasClass('slds-hide')).to.equal(false);
      expect(mySecondPanel.hasClass('slds-show')).to.equal(false);
      expect(mySecondPanel.hasClass('slds-hide')).to.equal(true);
      myTabsListItems.at(0).simulate('keyDown', {
        key: 'Tab',
        keyCode: 9,
        which: 9
      });
      myTabsListItems.at(0).simulate('keyDown', {
        key: 'Right',
        keyCode: 39,
        which: 39
      });
      myFirstPanel = this.wrapper.find("div#".concat(id, "-slds-tabs_panel-0"));
      mySecondPanel = this.wrapper.find("div#".concat(id, "-slds-tabs_panel-1"));
      expect(myFirstPanel.hasClass('slds-show')).to.equal(false);
      expect(myFirstPanel.hasClass('slds-hide')).to.equal(true);
      expect(mySecondPanel.hasClass('slds-show')).to.equal(false);
      expect(mySecondPanel.hasClass('slds-hide')).to.equal(true);
    });
  });
  describe('Interactions intercept tab selection', function () {
    var id = 'this-is-an-id-for-testing--tab-intercept';

    function interceptTabSelect() {
      return false;
    }

    before(mountComponent(React.createElement(TabsDemoComponent, {
      id: id,
      onSelect: interceptTabSelect
    })));
    after(unmountComponent);
    it('Maintains the same tab selection when onSelect function returns false', function () {
      var myTabsListItems = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.item));
      var myFirstPanel = this.wrapper.find("div#".concat(id, "-slds-tabs_panel-0"));
      var mySecondPanel = this.wrapper.find("div#".concat(id, "-slds-tabs_panel-1"));
      expect(myFirstPanel.hasClass('slds-show')).to.equal(true);
      expect(myFirstPanel.hasClass('slds-hide')).to.equal(false);
      expect(mySecondPanel.hasClass('slds-show')).to.equal(false);
      expect(mySecondPanel.hasClass('slds-hide')).to.equal(true);
      myTabsListItems.at(1).simulate('click');
      expect(myFirstPanel.hasClass('slds-show')).to.equal(true);
      expect(myFirstPanel.hasClass('slds-hide')).to.equal(false);
      expect(mySecondPanel.hasClass('slds-show')).to.equal(false);
      expect(mySecondPanel.hasClass('slds-hide')).to.equal(true);
    });
  });
});
//# sourceMappingURL=tabs.browser-test.js.map