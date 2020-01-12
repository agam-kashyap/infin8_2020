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

/* eslint-disable max-lines */
import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import classNames from 'classnames';
import IconSettings from '../../icon-settings';
import { TABS } from '../../../utilities/constants';
import Tabs from '../../tabs';
import Panel from '../../tabs/panel'; // Used in the Nested story

import Input from '../../input'; // Used in the Conditinal story

import Checkbox from '../../checkbox'; // Used in the outside control story

import Button from '../../button'; // Used in the custom content story

import Icon from '../../icon';
/* eslint-disable react/display-name */

var getTabs = function getTabs() {
  return React.createElement("div", null, React.createElement("h2", {
    className: "slds-text-heading_large"
  }, "Base Tabs Demo"), React.createElement(Tabs, {
    id: "main-tabs-demo",
    className: "custom-class-is-custom",
    foo: "baz"
  }, React.createElement(Panel, {
    label: "Tab 1"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my tab 1 contents!"), React.createElement("p", null, "And they\u2019re amazing."), React.createElement("p", null, "It\"s awesome."), React.createElement("p", null, "You can use your ", React.createElement("var", null, "TAB"), " and ", React.createElement("var", null, "ARROW"), " keys to navigate around. Try it!"), React.createElement("p", {
    className: "slds-box slds-theme_info slds-m-top_large"
  }, "(You might have to hit shift+tab to put the focus onto the tab bar ;)")), React.createElement(Panel, {
    label: "Tab 2"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my tab 2 contents!"), React.createElement("p", null, "And they\u2019re also amazing.")), React.createElement(Panel, {
    label: "Tab 3"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my tab 3 contents!"), React.createElement("p", null, "And they\u2019re quite spectacular."))));
};
/* eslint-enable react/display-name */

/* eslint-disable react/display-name */


var getTabsMoreThanOneAllowGeneratedID = function getTabsMoreThanOneAllowGeneratedID() {
  return React.createElement("div", null, React.createElement("h2", {
    className: "slds-text-heading_large"
  }, "Generated Unique IDs Demo"), React.createElement(Tabs, {
    id: "tabs-demo-id-1"
  }, React.createElement(Panel, {
    label: "Only 1 Tab"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "About this story"), React.createElement("p", null, "There should be two instances of Tabs in this story, and each should have a unique (generated) ID."))), React.createElement(Tabs, {
    id: "tabs-demo-id-2"
  }, React.createElement(Panel, {
    label: "Only 1 Tab"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "About this story"), React.createElement("p", null, "There should be two instances of Tabs in this story, and each should have a unique (generated) ID."))));
};
/* eslint-enable react/display-name */

/* eslint-disable react/display-name */


var getTabsNested = function getTabsNested() {
  return React.createElement("div", null, React.createElement("h2", {
    className: "slds-text-heading_large"
  }, "Nested Tabs Demo"), React.createElement(Tabs, {
    id: "nested-tabs-demo"
  }, React.createElement(Panel, {
    label: "Tab 1"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my tab 1 contents!"), React.createElement("p", null, "And they\u2019re amazing.")), React.createElement(Panel, {
    label: "Tab 2"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my tab 2 contents!"), React.createElement("p", null, "And they\u2019re also amazing."), React.createElement(Input, {
    id: "unique-id-123",
    name: "tab-input-example",
    label: "Input Label",
    placeholder: "You can tab onto this to focus it."
  })), React.createElement(Panel, {
    label: "Tab 3 (has children)"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my tab 3 contents!"), React.createElement("p", null, "And they\u2019re tabceptionish."), React.createElement("div", {
    className: "slds-box slds-m-vertical_large"
  }, React.createElement(Tabs, {
    id: "nested-second-layer",
    defaultSelectedIndex: 0
  }, React.createElement(Panel, {
    label: "Tab 1"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my tab 1 contents!"), React.createElement("p", null, "And they\u2019re amazing.")), React.createElement(Panel, {
    label: "Tab 2"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my tab 2 contents!"), React.createElement("p", null, "And they\u2019re also amazing.")), React.createElement(Panel, {
    label: "Tab 3 (Also has children!)"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my tab 3 contents!"), React.createElement("p", null, "And they\u2019re even ", React.createElement("em", null, "more"), " tabceptionish."), React.createElement("div", {
    className: "slds-box slds-m-vertical_large"
  }, React.createElement(Tabs, {
    id: "nested-third-layer",
    defaultSelectedIndex: 0
  }, React.createElement(Panel, {
    label: "Tab 1 (no children!)"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my tab 1 contents!"), React.createElement("p", null, "And they\u2019re amazing."))))))))));
};
/* eslint-enable react/display-name */

/* eslint-disable react/display-name */


var getTabsScoped = function getTabsScoped() {
  return React.createElement("div", null, React.createElement("h2", {
    className: "slds-text-heading_large"
  }, "Scoped Tabs Demo"), React.createElement(Tabs, {
    id: "scoped-tabs-demo",
    variant: "scoped"
  }, React.createElement(Panel, {
    label: "Tab 1"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my tab 1 contents!"), React.createElement("p", null, "And they\u2019re amazing."), React.createElement("p", null, "It\"s awesome."), React.createElement("p", null, "You can use your ", React.createElement("var", null, "TAB"), " and ", React.createElement("var", null, "ARROW"), " keys to navigate around. Try it!"), React.createElement("p", {
    className: "slds-box slds-theme_info slds-m-top_large"
  }, "(You might have to hit shift+tab to put the focus onto the tab bar ;)")), React.createElement(Panel, {
    label: "Tab 2"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my tab 2 contents!"), React.createElement("p", null, "And they\u2019re also amazing.")), React.createElement(Panel, {
    label: "Tab 3"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my tab 3 contents!"), React.createElement("p", null, "And they\u2019re quite spectacular."))));
};
/* eslint-enable react/display-name */


var DemoTabsConditional =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DemoTabsConditional, _React$Component);

  function DemoTabsConditional() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DemoTabsConditional);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DemoTabsConditional)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showA: true,
      showB: true,
      showC: true,
      disableA: false,
      disableB: true,
      disableC: true
    });

    _defineProperty(_assertThisInitialized(_this), "handleCheckClicked", function (checked, event) {
      var state = {};
      state[event.target.name] = checked;

      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "handleCheckClickedDisable", function (checked, event) {
      var state = {};
      state[event.target.name] = checked;

      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "renderPaneA", function (disabled) {
      return React.createElement(Panel, {
        label: "Tab A",
        disabled: disabled
      }, React.createElement("p", null, "This is tab A."), React.createElement("div", null, React.createElement(Checkbox, {
        assistiveText: {
          label: 'Disable tab B'
        },
        checked: _this.state.disableB,
        id: "tabs-checkbox-pane-a-1",
        onChange: _this.handleCheckClickedDisable,
        labels: {
          label: 'Disable tab B'
        },
        name: "disableB"
      }), React.createElement(Checkbox, {
        assistiveText: {
          label: 'Disable tab C'
        },
        checked: _this.state.disableC,
        id: "tabs-checkbox-pane-a-2",
        onChange: _this.handleCheckClickedDisable,
        labels: {
          label: 'Disable tab C'
        },
        name: "disableC"
      })));
    });

    return _this;
  }

  _createClass(DemoTabsConditional, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h2", {
        className: "slds-text-heading_large"
      }, "Conditional Tabs Demo"), React.createElement(Checkbox, {
        assistiveText: {
          label: 'Show tab A'
        },
        checked: this.state.showA,
        id: "tabs-checkbox-tab-a-1",
        onChange: this.handleCheckClicked,
        labels: {
          label: 'Show tab A'
        },
        name: "showA"
      }), React.createElement(Checkbox, {
        assistiveText: {
          label: 'Show tab B'
        },
        checked: this.state.showB,
        id: "tabs-checkbox-tab-b-1",
        onChange: this.handleCheckClicked,
        labels: {
          label: 'Show tab B'
        },
        name: "showB"
      }), React.createElement(Checkbox, {
        checked: this.state.showC,
        id: "tabs-checkbox-tab-c-1",
        onChange: this.handleCheckClicked,
        assistiveText: {
          label: 'Show tab C'
        },
        labels: {
          label: 'Show tab C'
        },
        name: "showC"
      }), React.createElement(Tabs, {
        className: classNames('slds-m-top_large', this.props.className),
        id: "tabs-checkbox-tabs-1",
        onSelect: this.handleSelectNopesOnThree
      }, this.state.showA && this.renderPaneA(this.state.disableA), this.state.showB && this.state.disableB ? React.createElement(Panel, {
        label: "Tab B",
        disabled: true
      }, React.createElement("p", null, "This is tab B.")) : this.state.showB && React.createElement(Panel, {
        label: "Tab B"
      }, React.createElement("p", null, "This is tab B.")), this.state.showC && this.state.disableC ? React.createElement(Panel, {
        label: "Tab C",
        disabled: true
      }, React.createElement("p", null, "This is tab C.")) : this.state.showC && React.createElement(Panel, {
        label: "Tab C"
      }, React.createElement("p", null, "This is tab C."))));
    }
  }]);

  return DemoTabsConditional;
}(React.Component);

_defineProperty(DemoTabsConditional, "displayName", 'DemoTabsConditional');

_defineProperty(DemoTabsConditional, "propTypes", {
  /**
   * Class names to be added to the container element and is passed along to its children.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string])
});

var DemoTabsOutsideControl =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(DemoTabsOutsideControl, _React$Component2);

  function DemoTabsOutsideControl() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, DemoTabsOutsideControl);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(DemoTabsOutsideControl)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "state", {
      whichOneSelectedYo: _this2.props.whichOneSelectedYo || 0,
      prevOneSelectedYo: _this2.props.prevOneSelectedYo || 0
    });

    _defineProperty(_assertThisInitialized(_this2), "handleSelect", function (index, last) {
      var toReturn = true;

      if (index === _this2.state.whichOneSelectedYo && last === _this2.state.prevOneSelectedYo) {
        toReturn = false;
      } else {
        action('handleSelect')(index, last);

        _this2.setState({
          whichOneSelectedYo: index,
          prevOneSelectedYo: last
        });
      }

      return toReturn;
    });

    _defineProperty(_assertThisInitialized(_this2), "showState", function () {
      action('showState (current)')(_this2.state.whichOneSelectedYo);
      action('showState (previous)')(_this2.state.prevOneSelectedYo);
    });

    _defineProperty(_assertThisInitialized(_this2), "handleButtonClicked", function (event) {
      var prevOneSelected = _this2.state.prevOneSelectedYo;
      var thisOneSelected = _this2.state.whichOneSelectedYo;
      action('handleButtonClicked')(event.currentTarget.id);

      switch (event.currentTarget.id) {
        case 'monday':
          _this2.handleSelect(0, thisOneSelected);

          break;

        case 'tuesday':
          _this2.handleSelect(1, thisOneSelected);

          break;

        case 'tuesday-alt':
          _this2.handleSelect(1, thisOneSelected);

          break;

        case 'wednesday':
          _this2.handleSelect(2, thisOneSelected);

          break;

        case 'thursday':
          _this2.handleSelect(3, thisOneSelected);

          break;

        case 'friday':
          _this2.handleSelect(4, thisOneSelected);

          break;

        case 'none':
          _this2.handleSelect(undefined, thisOneSelected);

          break;

        case 'previous':
          _this2.handleSelect(prevOneSelected, thisOneSelected);

          break;

        case 'show-state':
          _this2.showState();

          break;

        default:
          // Statements executed when none of the values match the value of the expression
          _this2.handleSelect(thisOneSelected, prevOneSelected);

      }
    });

    return _this2;
  }

  _createClass(DemoTabsOutsideControl, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h2", {
        className: "slds-text-heading_large"
      }, "Outside Tabs Demo"), React.createElement("p", null, "Here we have several buttons, which are used to pass a new", ' ', React.createElement("code", null, "selectedIndex"), " into the Tabs component."), React.createElement("p", {
        className: "slds-m-bottom_large"
      }, "This shows that you can pass a new selected index property into the component from the outside and have it re-render."), React.createElement(Button, {
        id: "show-state",
        label: "Show State",
        onClick: this.showState
      }), React.createElement(Button, {
        id: "monday",
        label: "Monday",
        onClick: this.handleButtonClicked
      }), React.createElement(Button, {
        id: "tuesday",
        label: "Tuesday",
        onClick: this.handleButtonClicked
      }), React.createElement(Button, {
        id: "wednesday",
        label: "Wednesday",
        onClick: this.handleButtonClicked
      }), React.createElement(Button, {
        id: "thursday",
        label: "Thursday",
        onClick: this.handleButtonClicked
      }), React.createElement(Button, {
        id: "friday",
        label: "Friday",
        onClick: this.handleButtonClicked
      }), React.createElement(Button, {
        id: "none",
        label: "None",
        onClick: this.handleButtonClicked
      }), React.createElement(Button, {
        id: "previous",
        label: "Previous",
        onClick: this.handleButtonClicked
      }), React.createElement(Tabs, {
        className: classNames('slds-m-top_large', this.props.className),
        id: "DemoTabsOutsideControlTabs",
        selectedIndex: this.state.whichOneSelectedYo,
        onSelect: this.handleSelect
      }, React.createElement(Panel, {
        label: "Monday"
      }, React.createElement("p", null, "This is Monday\"s Pane."), React.createElement(Button, {
        id: "tuesday-alt",
        label: "Submit and go to next tab",
        onClick: this.handleButtonClicked
      })), React.createElement(Panel, {
        label: "Tuesday"
      }, React.createElement("p", null, "This is Tuesday\"s Pane.")), React.createElement(Panel, {
        label: "Wednesday"
      }, React.createElement("p", null, "This is Wednesday\"s Pane.")), React.createElement(Panel, {
        label: "Thursday"
      }, React.createElement("p", null, "Thursday\"s Pane has far to go.")), React.createElement(Panel, {
        label: "Friday"
      }, React.createElement("p", null, "This is Friday\"s Pane."))));
    }
  }]);

  return DemoTabsOutsideControl;
}(React.Component);
/* eslint-disable react/display-name */


_defineProperty(DemoTabsOutsideControl, "displayName", 'DemoTabsOutsideControl');

_defineProperty(DemoTabsOutsideControl, "propTypes", {
  /**
   * Class names to be added to the container element and is passed along to its children.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * The Tab (and corresponding TabPanel) that is selected when the component renders. Defaults to `0`.
   */
  whichOneSelectedYo: PropTypes.number,
  prevOneSelectedYo: PropTypes.number
});

var getTabsDisabled = function getTabsDisabled() {
  return React.createElement("div", null, React.createElement("h2", {
    className: "slds-text-heading_large"
  }, "Disabled Tabs Demo"), React.createElement(Tabs, {
    id: "disabled-tabs-demo"
  }, React.createElement(Panel, {
    label: "Tab 1"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my tab 1 contents!"), React.createElement("p", null, "And they\u2019re amazing."), React.createElement("p", null, "It\u2019s awesome."), React.createElement("p", null, "You can use your ", React.createElement("var", null, "TAB"), " and ", React.createElement("var", null, "ARROW"), " keys to navigate around. Try it!"), React.createElement("p", {
    className: "slds-box slds-theme_info slds-m-top_large"
  }, "(You might have to hit shift+tab to put the focus onto the tab bar ;)")), React.createElement(Panel, {
    label: "Tab 2",
    disabled: true
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my tab 2 contents!"), React.createElement("p", null, "And they\u2019re also amazing.")), React.createElement(Panel, {
    label: "Tab 3"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my tab 3 contents!"), React.createElement("p", null, "And they\u2019re quite spectacular.")), React.createElement(Panel, {
    label: "Tab 4"
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my tab 3 contents!"), React.createElement("p", null, "Note that using your arrow keys you can loop ", React.createElement("em", null, "around the tabs"), "! \uD83C\uDF89"))));
};
/* eslint-enable react/display-name */

/* eslint-disable react/display-name */


var getCustomContentTabs = function getCustomContentTabs() {
  var tab1Label = React.createElement("div", {
    "aria-label": "test accessibility!"
  }, React.createElement(Icon, {
    category: "utility",
    name: "list",
    style: {
      marginRight: '.5rem'
    },
    size: "x-small"
  }), React.createElement("span", null, "my tab"));
  var tab2Label = React.createElement("span", {
    style: {
      color: 'red'
    }
  }, "my other tab");
  return React.createElement("div", null, React.createElement("h2", {
    className: "slds-text-heading_large"
  }, "Custom Tab Contents Demo"), React.createElement(Tabs, {
    id: "getCustomContentTabs"
  }, React.createElement(Panel, {
    label: tab1Label
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my first custom content tab!")), React.createElement(Panel, {
    label: tab2Label
  }, React.createElement("h2", {
    className: "slds-text-heading_medium"
  }, "This is my second custom content tab!"))));
};
/* eslint-enable react/display-name */


var DemoTabsInterceptSelect =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(DemoTabsInterceptSelect, _React$Component3);

  function DemoTabsInterceptSelect() {
    var _getPrototypeOf4;

    var _this3;

    _classCallCheck(this, DemoTabsInterceptSelect);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(DemoTabsInterceptSelect)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this3), "state", {
      intercepts: 0
    });

    _defineProperty(_assertThisInitialized(_this3), "handleTabSelect", function (next, last) {
      action('handleTabSelect')(next, last);
      var intercepts = _this3.state.intercepts + 1;

      _this3.setState({
        intercepts: intercepts
      });

      return false;
    });

    return _this3;
  }

  _createClass(DemoTabsInterceptSelect, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(Tabs, {
        id: "DemoTabsInterceptSelect",
        onSelect: this.handleTabSelect
      }, React.createElement(Panel, {
        label: "Panel with intercept"
      }, React.createElement("p", null, "Default Panel"), this.state.intercepts > 0 && React.createElement("p", null, "We've intercepted navigation ".concat(this.state.intercepts, " time(s)"))), React.createElement(Panel, {
        label: "Unreachable panel"
      }, React.createElement("p", null, "You should never see this message"))), React.createElement("div", {
        style: {
          height: '20px'
        }
      }), React.createElement(Tabs, {
        id: "DemoTabsInterceptSelect2"
      }, React.createElement(Panel, {
        label: "Panel still working as intended"
      }, React.createElement("p", null, "Default Panel")), React.createElement(Panel, {
        label: "Destination panel"
      }, React.createElement("p", null, "You should be able to reach this panel"))));
    }
  }]);

  return DemoTabsInterceptSelect;
}(React.Component);

_defineProperty(DemoTabsInterceptSelect, "displayName", 'DemoTabsInterceptSelect');

storiesOf(TABS, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return getTabs();
}).add('With disabled tab', function () {
  return getTabsDisabled();
}).add('Nested', function () {
  return getTabsNested();
}).add('Outside Control', function () {
  return React.createElement(DemoTabsOutsideControl, {
    className: "controlled-yo"
  });
}).add('Conditional', function () {
  return React.createElement(DemoTabsConditional, {
    className: "conditional-yo"
  });
}).add('Unique Generated IDs', function () {
  return getTabsMoreThanOneAllowGeneratedID();
}).add('Scoped', function () {
  return getTabsScoped();
}).add('Custom Tab Contents', function () {
  return getCustomContentTabs();
}).add('Tab Intercept Panel Select', function () {
  return React.createElement(DemoTabsInterceptSelect, null);
});
//# sourceMappingURL=storybook-stories.js.map