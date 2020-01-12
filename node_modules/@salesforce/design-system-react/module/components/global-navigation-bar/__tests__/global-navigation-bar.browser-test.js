function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'; // `this.wrapper` and `this.dom` is set in the helpers file

import { mountComponent, unmountComponent } from '../../../tests/enzyme-helpers'; // sample props and children

import { dropdownCollection, propSets } from '../../../utilities/sample-data/global-navigation-bar';
import IconSettings from '../../icon-settings';
import GlobalNavigationBar from '../../global-navigation-bar';
import GlobalNavigationBarRegion from '../../global-navigation-bar/region';
import GlobalNavigationBarDropdown from '../../global-navigation-bar/dropdown';
import GlobalNavigationBarDropdownTrigger from '../../global-navigation-bar/dropdown-trigger';
import GlobalNavigationBarLink from '../../global-navigation-bar/link';
import GlobalNavigationBarLabel from '../../global-navigation-bar/label';
import GlobalNavigationBarButton from '../../global-navigation-bar/button';
chai.use(chaiEnzyme());
var COMPONENT_CSS_CLASSES = {
  base: 'slds-context-bar',
  themePrefix: 'slds-context-bar_theme-'
};
var REGION_CSS_CLASSES = {
  primary: 'slds-context-bar__primary',
  secondary: 'slds-context-bar__secondary',
  tertiary: 'slds-context-bar__tertiary',
  appName: 'slds-context-bar__app-name'
};
describe('Global Navigation Bar: ', function () {
  // Base defaults
  // no required props

  /*
  	Tests
   */
  describe('Default Structure', function () {
    beforeEach(mountComponent(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(GlobalNavigationBar, null, React.createElement(GlobalNavigationBarRegion, {
      region: "primary"
    })))));
    afterEach(unmountComponent);
    it('has wrapping div and one primary region', function () {
      expect(this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base))).to.be.present();
      expect(this.wrapper.find(".".concat(REGION_CSS_CLASSES.primary))).to.be.present();
    });
    it('Primary region DOES NOT have divider on right', function () {
      var primary = this.wrapper.find(".".concat(REGION_CSS_CLASSES.primary));
      expect(primary).to.not.have.className('slds-context-bar__item_divider-right');
    });
  });
  describe('Optional Properties', function () {
    var customCloudProps = propSets.customCloud.props;
    var customThemeProps = propSets.lightTheme.props;
    beforeEach(mountComponent(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(GlobalNavigationBar, _extends({}, customCloudProps, customThemeProps)))));
    afterEach(unmountComponent);
    it('has custom cloud and theme CSS', function () {
      var component = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      expect(component).to.have.className("".concat(COMPONENT_CSS_CLASSES.themePrefix).concat(customCloudProps.cloud));
      expect(component).to.have.className("".concat(COMPONENT_CSS_CLASSES.themePrefix).concat(customThemeProps.theme));
    });
  });
  describe('Optional Region Structure', function () {
    var props = propSets.base.props;

    var buttonClicked = function buttonClicked() {};

    var linkClicked = function linkClicked() {};

    var dropdownItemClicked = function dropdownItemClicked() {};

    beforeEach(mountComponent(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(GlobalNavigationBar, props, React.createElement(GlobalNavigationBarRegion, {
      region: "primary"
    }), React.createElement(GlobalNavigationBarRegion, {
      region: "secondary",
      navigation: true,
      dividerPosition: "right"
    }, React.createElement(GlobalNavigationBarLink, {
      label: "Home",
      id: "home-link",
      onClick: linkClicked('Home link clicked')
    }), React.createElement(GlobalNavigationBarDropdown, {
      assistiveText: {
        icon: 'Open Menu'
      },
      id: "primaryDropdown",
      label: "Global Navigation Menu Item 1",
      onSelect: dropdownItemClicked('Dropdown Menu Item clicked'),
      options: dropdownCollection
    }), React.createElement(GlobalNavigationBarLink, {
      active: true,
      id: "menu-item-2",
      label: "Global Navigation Menu Item 2",
      onClick: linkClicked('Link clicked')
    }), React.createElement(GlobalNavigationBarDropdown, {
      active: true,
      assistiveText: {
        icon: 'Open Menu'
      },
      id: "primaryDropdownActive",
      label: "Global Navigation Menu Item 3",
      onSelect: dropdownItemClicked('Dropdown Menu Item clicked'),
      options: dropdownCollection
    })), React.createElement(GlobalNavigationBarRegion, {
      region: "tertiary"
    }, React.createElement(GlobalNavigationBarLink, {
      label: "Actions",
      onClick: linkClicked('Link clicked')
    }), React.createElement(GlobalNavigationBarButton, {
      active: true,
      label: "Button",
      id: "global-nav__button",
      onClick: buttonClicked('Button clicked')
    }), React.createElement(GlobalNavigationBarLabel, {
      dividerPosition: "left",
      label: "Vandelay Enterprises"
    }))))));
    afterEach(unmountComponent);
    it('has 1 primary, 1 secondary, and 1 tertiary region', function () {
      expect(this.wrapper.find(".".concat(REGION_CSS_CLASSES.primary))).to.be.present();
      expect(this.wrapper.find(".".concat(REGION_CSS_CLASSES.secondary))).to.be.present();
      expect(this.wrapper.find(".".concat(REGION_CSS_CLASSES.tertiary))).to.be.present();
    });
    it('Secondary region application is a nav HTML element and has divider on right side', function () {
      var nav = this.wrapper.find(".".concat(REGION_CSS_CLASSES.secondary));
      expect(nav.type()).to.equal('nav');
      expect(nav).to.have.className('slds-context-bar__item_divider-right');
    });
    it('displays active items as active', function () {
      var activeItems = this.wrapper.find('.slds-is-active');
      expect(activeItems).to.have.length(3);
    });
  });
  describe('Secondary Region', function () {
    beforeEach(mountComponent(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(GlobalNavigationBarRegion, {
      region: "secondary"
    }))));
    afterEach(unmountComponent);
    it('Secondary region application is div and not a nav', function () {
      var nav = this.wrapper.find(".".concat(REGION_CSS_CLASSES.secondary));
      expect(nav.type()).to.equal('div');
    });
  });
  describe('GlobalNavigationDropdown child component', function () {
    var dropdown;
    var eventTest;

    var eventHandler = function eventHandler(option, moreData) {
      eventTest = {
        option: option,
        moreData: moreData
      };
    };

    beforeEach(function () {
      mountComponent(React.createElement(GlobalNavigationBarDropdown, {
        dividerPosition: "left",
        label: "Test",
        onSelect: eventHandler,
        options: dropdownCollection
      })).call(this);
      dropdown = this.wrapper.find('.slds-context-bar__dropdown-trigger');
      eventTest = null;
    });
    afterEach(unmountComponent);
    it('calls onSelect handler properly', function () {
      dropdown.find('button.slds-context-bar__button').simulate('click');
      this.wrapper.find('.slds-dropdown ul.dropdown__list').childAt(0).find('a').simulate('click');
      expect(_typeof(eventTest.option)).to.eql('object');
      expect(_typeof(eventTest.moreData)).to.eql('object');
    });
    it('renders divider as expected', function () {
      expect(dropdown.hasClass('slds-context-bar__item_divider-left')).to.eql(true);
    });
  });
  describe('GlobalNavigationDropdownTrigger child component', function () {
    var dropdownTrigger;
    var eventTest;

    var eventHandler = function eventHandler(event, data) {
      eventTest = {
        event: event,
        data: data
      };
    };

    beforeEach(function () {
      mountComponent(React.createElement(GlobalNavigationBarDropdownTrigger, {
        dividerPosition: "left",
        label: "Test",
        onBlur: eventHandler,
        onClick: eventHandler,
        onFocus: eventHandler,
        onKeyDown: eventHandler,
        onMouseDown: eventHandler,
        onMouseEnter: eventHandler,
        onMouseLeave: eventHandler
      })).call(this);
      dropdownTrigger = this.wrapper.find('.slds-context-bar__dropdown-trigger');
      eventTest = null;
    });
    afterEach(unmountComponent);
    it('has appropriate attributes', function () {
      expect(dropdownTrigger.text()).to.equal('TestOpen menu item submenu');
    });
    it('calls onClick handler properly', function () {
      dropdownTrigger.simulate('click');
      expect(_typeof(eventTest.event)).to.eql('object');
    });
    it('calls onBlur handler properly', function () {
      dropdownTrigger.simulate('blur');
      expect(_typeof(eventTest.event)).to.eql('object');
    });
    it('calls onFocus handler properly', function () {
      dropdownTrigger.simulate('focus');
      expect(_typeof(eventTest.event)).to.eql('object');
    });
    it('calls onKeyDown handler properly', function () {
      dropdownTrigger.simulate('keydown', {
        keyCode: 13
      });
      expect(_typeof(eventTest.event)).to.eql('object');
    });
    it('calls onMouseDown handler properly', function () {
      dropdownTrigger.simulate('mousedown');
      expect(_typeof(eventTest.event)).to.eql('object');
    });
    it('calls onMouseEnter handler properly', function () {
      dropdownTrigger.simulate('mouseenter');
      expect(_typeof(eventTest.event)).to.eql('object');
    });
    it('calls onMouseLeave handler properly', function () {
      dropdownTrigger.simulate('mouseleave');
      expect(_typeof(eventTest.event)).to.eql('object');
    });
    it('renders divider as expected', function () {
      expect(dropdownTrigger.hasClass('slds-context-bar__item_divider-left')).to.eql(true);
    });
  });
  describe('GlobalNavigationLink child component', function () {
    var aTag;
    var eventTest;
    var link;

    var eventHandler = function eventHandler(event, data) {
      eventTest = {
        event: event,
        data: data
      };
    };

    beforeEach(function () {
      mountComponent(React.createElement(GlobalNavigationBarLink, {
        dividerPosition: "left",
        href: "http://google.com",
        label: "Home",
        id: "home-link",
        onBlur: eventHandler,
        onClick: eventHandler,
        onFocus: eventHandler,
        onKeyDown: eventHandler,
        onKeyPress: eventHandler,
        onKeyUp: eventHandler,
        onMouseEnter: eventHandler,
        onMouseLeave: eventHandler
      })).call(this);
      link = this.wrapper.find('li#home-link');
      aTag = link.find('a');
      eventTest = null;
    });
    afterEach(unmountComponent);
    it('has appropriate attributes', function () {
      expect(link.text()).to.equal('Home');
    });
    it('calls onClick handler properly', function () {
      aTag.simulate('click');
      expect(_typeof(eventTest.event)).to.eql('object');
      expect(_typeof(eventTest.data.href)).to.eql('string');
    });
    it('calls onBlur handler properly', function () {
      aTag.simulate('blur');
      expect(_typeof(eventTest.event)).to.eql('object');
    });
    it('calls onFocus handler properly', function () {
      aTag.simulate('focus');
      expect(_typeof(eventTest.event)).to.eql('object');
    });
    it('calls onKeyDown handler properly', function () {
      aTag.simulate('keydown', {
        keyCode: 13
      });
      expect(_typeof(eventTest.event)).to.eql('object');
    });
    it('calls onKeyPress handler properly', function () {
      aTag.simulate('keypress', {
        keyCode: 13
      });
      expect(_typeof(eventTest.event)).to.eql('object');
    });
    it('calls onKeyUp handler properly', function () {
      aTag.simulate('keyup', {
        keyCode: 13
      });
      expect(_typeof(eventTest.event)).to.eql('object');
    });
    it('calls onMouseEnter handler properly', function () {
      aTag.simulate('mouseenter');
      expect(_typeof(eventTest.event)).to.eql('object');
    });
    it('calls onMouseLeave handler properly', function () {
      aTag.simulate('mouseleave');
      expect(_typeof(eventTest.event)).to.eql('object');
    });
    it('renders href if passed', function () {
      expect(link.find('a')).to.have.attr('href', 'http://google.com');
    });
    it('renders divider as expected', function () {
      expect(link.hasClass('slds-context-bar__item_divider-left')).to.eql(true);
    });
  });
  describe('GlobalNavigationButton child component', function () {
    it('GlobalNavigationBarButton has attributes and onClick runs callback', function () {
      var buttonClicked = sinon.spy();
      var instance = React.createElement(GlobalNavigationBarButton, {
        label: "Button",
        id: "global-nav__button",
        onClick: buttonClicked('Button clicked')
      });
      this.wrapper = mount(instance, {
        attachTo: document.body.appendChild(document.createElement('div'))
      });
      var link = this.wrapper.find('button#global-nav__button');
      expect(link.text()).to.equal('Button');
      link.simulate('click');
      expect(buttonClicked.calledOnce).to.be.true;
      this.wrapper.unmount();
    });
  });
  describe('GlobalNavigationLabel child component', function () {
    it('GlobalNavigationBarLabel has attributes and renders dividerPosition correctly', function () {
      var instance = React.createElement(GlobalNavigationBarLabel, {
        dividerPosition: "right",
        label: "Text",
        id: "test-text"
      });
      this.wrapper = mount(instance, {
        attachTo: document.body.appendChild(document.createElement('div'))
      });
      var item = this.wrapper.find('span#test-text');
      expect(this.wrapper.find('span.slds-context-bar__label-action').hasClass('slds-context-bar__item_divider-right')).to.eql(true);
      expect(item.text()).to.equal('Text');
      this.wrapper.unmount();
    });
  });
});
//# sourceMappingURL=global-navigation-bar.browser-test.js.map