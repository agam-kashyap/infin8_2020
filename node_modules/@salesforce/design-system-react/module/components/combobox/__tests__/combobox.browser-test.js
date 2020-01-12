function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable max-lines */
import React from 'react';
import PropTypes from 'prop-types';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import assign from 'lodash.assign';
/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */

import { createMountNode, destroyMountNode } from '../../../tests/enzyme-helpers'; // Import your internal dependencies (for example):

import Combobox from '../../../components/combobox';
import Tooltip from '../../../components/tooltip';
import Icon from '../../../components/icon';
import filter from '../../../components/combobox/filter';
import Popover from '../../../components/popover';
import { keyObjects } from '../../../utilities/key-code';
import { keyObjects as letterKeyObjects } from '../../../utilities/letter-key-code';
import IconSettings from '../../../components/icon-settings';
/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */

chai.use(chaiEnzyme());
var accounts = [{
  id: '1',
  label: 'Acme',
  subTitle: 'Account • San Francisco',
  type: 'account'
}, {
  id: '2',
  label: 'Salesforce.com, Inc.',
  subTitle: 'Account • San Francisco',
  type: 'account'
}, {
  id: '3',
  label: "Paddy's Pub",
  subTitle: 'Account • Boston, MA',
  type: 'account'
}, {
  id: '4',
  label: 'Tyrell Corp',
  subTitle: 'Account • San Francisco, CA',
  type: 'account',
  disabled: true
}, {
  id: '5',
  label: 'Paper St. Soap Company',
  subTitle: 'Account • Beloit, WI',
  type: 'account'
}, {
  id: '6',
  label: 'Nakatomi Investments',
  subTitle: 'Account • Chicago, IL',
  type: 'account'
}, {
  id: '7',
  label: 'Acme Landscaping',
  type: 'account'
}, {
  id: '8',
  label: 'Acme Construction',
  subTitle: 'Account • Grand Marais, MN',
  type: 'account'
}];
var accountsWithIcon = accounts.map(function (elem) {
  return assign(elem, {
    icon: React.createElement(Icon, {
      assistiveText: {
        label: 'Account'
      },
      category: "standard",
      name: elem.type
    })
  });
});
var defaultProps = {
  id: 'combobox-unique-id',
  labels: {
    label: 'Search',
    placeholder: 'Search Salesforce'
  },
  menuPosition: 'relative',
  onOpen: function onOpen() {}
};
var propTypes = {
  componentWillUpdate: PropTypes.func,
  initialSelection: PropTypes.array
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

  function DemoComponent(props) {
    var _this;

    _classCallCheck(this, DemoComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DemoComponent).call(this, props));
    _this.state = {
      inputValue: '',
      selection: _this.props.initialSelection || []
    };
    return _this;
  }

  _createClass(DemoComponent, [{
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      if (this.props.componentWillUpdate) {
        this.props.componentWillUpdate(nextState);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(Combobox, _extends({
        events: {
          onChange: function onChange(event, _ref) {
            var value = _ref.value;

            _this2.setState({
              inputValue: value
            });
          },
          onRequestRemoveSelectedOption: function onRequestRemoveSelectedOption(event, data) {
            _this2.setState({
              inputValue: '',
              selection: data.selection
            });
          },
          onSubmit: function onSubmit(event, _ref2) {
            var value = _ref2.value;

            _this2.setState({
              inputValue: '',
              selection: [].concat(_toConsumableArray(_this2.state.selection), [{
                label: value,
                id: 'another-account',
                icon: React.createElement(Icon, {
                  assistiveText: {
                    label: 'Account'
                  },
                  category: "standard",
                  name: "account"
                })
              }])
            });
          },
          onSelect: function onSelect(event, data) {
            _this2.setState({
              inputValue: '',
              selection: data.selection
            });
          },
          onOpen: function onOpen() {
            _this2.props.onOpen();
          }
        },
        options: filter({
          inputValue: this.state.inputValue,
          options: accountsWithIcon,
          selection: this.state.selection
        }),
        selection: this.state.selection,
        value: this.state.inputValue
      }, this.props)));
    }
  }]);

  return DemoComponent;
}(React.Component);

DemoComponent.displayName = 'ComboboxDemoComponent';
DemoComponent.propTypes = propTypes;
DemoComponent.defaultProps = defaultProps;

var getNodes = function getNodes(_ref3) {
  var wrapper = _ref3.wrapper;
  return {
    combobox: wrapper.find('.slds-combobox'),
    input: wrapper.find('.slds-combobox input'),
    menuListbox: wrapper.find('.slds-combobox .slds-listbox.slds-dropdown'),
    removeSingleItem: wrapper.find('.slds-combobox button.slds-input__icon'),
    selectedListbox: wrapper.find("#".concat(defaultProps.id, "-selected-listbox .slds-listbox")),
    popover: wrapper.find('.slds-popover')
  };
};
/* All tests for component being tested should be wrapped in a root `describe`,
 * which should be named after the component being tested.
 * When read aloud, the cumulative `describe` and `it` names should form a coherent
 * sentence, eg "Date Picker default structure and css is present with expected
 * attributes set". If you are having trouble constructing a cumulative short
 * sentence, this may be an indicator that your test is poorly structured.
 * String provided as first parameter names the `describe` section. Limit to nouns
 * as much as possible/appropriate.`
 */


describe('SLDSCombobox', function describeFunction() {
  var _this3 = this;

  var mountNode;
  var wrapper;
  describe('Assistive technology and keyboard interactions', function () {
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
    it('has aria-haspopup, aria-expanded is false when closed, aria-expanded is true when open', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        multiple: true
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      expect(nodes.combobox).attr('aria-haspopup', 'listbox'); // closed

      expect(nodes.combobox).attr('aria-expanded', 'false'); // open

      nodes.input.simulate('click', {});
      expect(nodes.combobox).attr('aria-expanded', 'true');
    });
    it('menu filters to second item, menu listbox menu item 2 aria-selected is true, input activedescendent has item 2 id, after pressing down arrow, enter selects item 2', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        multiple: true,
        isOpen: true,
        optionsSearchEntity: [{
          id: 'options-search-id-1',
          icon: React.createElement(Icon, {
            assistiveText: {
              label: 'add'
            },
            size: "x-small",
            category: "utility",
            name: "search"
          }),
          label: 'Search in Salesforce'
        }, {
          id: 'search-in-account-id',
          icon: React.createElement(Icon, {
            assistiveText: {
              label: 'add in Accounts'
            },
            size: "x-small",
            category: "utility",
            name: "search"
          }),
          label: function label(searchTerm) {
            return React.createElement(React.Fragment, null, searchTerm && searchTerm.length > 0 ? React.createElement("span", {
              className: "slds-text-title_bold"
            }, "\"".concat(searchTerm, "\" ")) : 'Search ', "in Accounts");
          }
        }],
        optionsAddItem: [{
          id: 'options-add-id-1',
          icon: React.createElement(Icon, {
            assistiveText: {
              label: 'add'
            },
            category: "utility",
            size: "x-small",
            name: "add"
          }),
          label: 'New Entity'
        }]
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      nodes.input.simulate('focus');
      nodes.input.simulate('change', {
        target: {
          value: accounts[1].label
        }
      }); // pass over header item 1

      nodes.input.simulate('keyDown', keyObjects.DOWN); // pass  over header item 2

      nodes.input.simulate('keyDown', keyObjects.DOWN);
      nodes.input.simulate('keyDown', keyObjects.DOWN);
      expect(nodes.menuListbox.find('#combobox-unique-id-listbox-option-2')).to.have.attr('aria-selected', 'true');
      expect(nodes.input).attr('aria-activedescendant', "".concat(defaultProps.id, "-listbox-option-2")); // select

      nodes.input.simulate('keyDown', keyObjects.ENTER);
      nodes = getNodes({
        wrapper: wrapper
      });
      expect(nodes.input).attr('value', '');
      expect(nodes.selectedListbox.find('.slds-pill__label').text()).to.equal(accounts[1].label);
    });
    it('Selected Listbox: remove initial first pill, remove third initial item, cycles focus (first to last), removes last and initial fifth pill, cycles focus (last to first), remove inital second and fourth pill', function (done) {
      var getSelectedListboxPills = function getSelectedListboxPills(_ref4) {
        var nodes = _ref4.nodes,
            index = _ref4.index;
        return nodes.selectedListbox.children().at(index).childAt(0);
      };

      var getFocusedPillLabel = function getFocusedPillLabel() {
        return document.activeElement.querySelector('.slds-pill__label').innerText;
      };

      var selectionKeyedStates = {
        removeInitialFirstPill: [accountsWithIcon[1], accountsWithIcon[2], accountsWithIcon[3], accountsWithIcon[4]],
        removeThirdInitialItem: [accountsWithIcon[1], accountsWithIcon[3], accountsWithIcon[4]],
        removesLastAndInitialFifthPill: [accountsWithIcon[1], accountsWithIcon[3]],
        removeInitalSecondAndFourthPill: [accountsWithIcon[3]],
        allPillsRemoved: []
      };
      var selectionIndexedStates = Object.keys(selectionKeyedStates).map(function (key) {
        return selectionKeyedStates[key];
      });
      var counter = 0;
      wrapper = mount(React.createElement(DemoComponent, {
        componentWillUpdate: function componentWillUpdate(prevState) {
          expect(prevState.selection).to.have.members(selectionIndexedStates[counter]);

          if (counter === 4) {
            done();
          }

          counter += 1;
        },
        initialSelection: [accounts[0], accounts[1], accounts[2], accounts[3], accounts[4]],
        multiple: true
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      nodes.input.simulate('focus');
      nodes.input.simulate('keyDown', keyObjects.TAB);
      getSelectedListboxPills({
        nodes: nodes,
        index: 0
      }).simulate('keyDown', keyObjects.DELETE);
      expect(getFocusedPillLabel()).to.equal(accountsWithIcon[1].label);
      getSelectedListboxPills({
        nodes: getNodes({
          wrapper: wrapper
        }),
        index: 0
      }).simulate('keyDown', keyObjects.RIGHT);
      expect(getFocusedPillLabel()).to.equal(accountsWithIcon[2].label);
      getSelectedListboxPills({
        nodes: getNodes({
          wrapper: wrapper
        }),
        index: 1
      }).simulate('keyDown', keyObjects.DELETE);
      expect(getFocusedPillLabel()).to.equal(accountsWithIcon[3].label);
      getSelectedListboxPills({
        nodes: getNodes({
          wrapper: wrapper
        }),
        index: 1
      }).simulate('keyDown', keyObjects.LEFT);
      getSelectedListboxPills({
        nodes: getNodes({
          wrapper: wrapper
        }),
        index: 0
      }).simulate('keyDown', keyObjects.LEFT);
      expect(getFocusedPillLabel()).to.equal(accountsWithIcon[4].label);
      getSelectedListboxPills({
        nodes: getNodes({
          wrapper: wrapper
        }),
        index: 2
      }).simulate('keyDown', keyObjects.DELETE);
      expect(getFocusedPillLabel()).to.equal(accountsWithIcon[3].label);
      getSelectedListboxPills({
        nodes: getNodes({
          wrapper: wrapper
        }),
        index: 1
      }).simulate('keyDown', keyObjects.RIGHT);
      expect(getFocusedPillLabel()).to.equal(accountsWithIcon[1].label);
      getSelectedListboxPills({
        nodes: getNodes({
          wrapper: wrapper
        }),
        index: 0
      }).simulate('keyDown', keyObjects.DELETE);
      getSelectedListboxPills({
        nodes: getNodes({
          wrapper: wrapper
        }),
        index: 0
      }).simulate('keydown', keyObjects.DELETE);
    });
    it('selects a menu item and scrolls when a letter key is pressed in read-only mode', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        variant: "readonly"
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      nodes.input.simulate('keyDown', keyObjects.DOWN);
      nodes = getNodes({
        wrapper: wrapper
      });

      for (var i = 0; i < 3; i += 1) {
        nodes.input.simulate('keyDown', letterKeyObjects.A);
      }

      var menuListItem = nodes.menuListbox.find('#combobox-unique-id-listbox-option-8');
      expect(menuListItem.instance().className.search('slds-has-focus') > -1).to.eql(true);

      var _nodes$menuListbox$in = nodes.menuListbox.instance(),
          scrollTop = _nodes$menuListbox$in.scrollTop;

      expect(scrollTop === 98 || scrollTop === 0).to.eql(true); // done because menu and menu item size in phantomjs is weird
    });
    it('selects menu items and scrolls when the down/up keys are pressed', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        variant: "readonly"
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      var i;
      var menuListItem;
      nodes.input.simulate('keyDown', keyObjects.DOWN);
      nodes = getNodes({
        wrapper: wrapper
      });

      for (i = 0; i < 8; i += 1) {
        nodes.input.simulate('keyDown', keyObjects.DOWN);
      }

      menuListItem = nodes.menuListbox.find('#combobox-unique-id-listbox-option-8');
      expect(menuListItem.instance().className.search('slds-has-focus') > -1).to.eql(true);

      var _nodes$menuListbox$in2 = nodes.menuListbox.instance(),
          scrollTop1 = _nodes$menuListbox$in2.scrollTop;

      expect(scrollTop1 === 98 || scrollTop1 === 0).to.eql(true); // done because menu and menu item size in phantomjs is weird

      for (i = 0; i < 8; i += 1) {
        nodes.input.simulate('keyDown', keyObjects.UP);
      }

      menuListItem = nodes.menuListbox.find('#combobox-unique-id-listbox-option-1');
      expect(menuListItem.instance().className.search('slds-has-focus') > -1).to.eql(true);

      var _nodes$menuListbox$in3 = nodes.menuListbox.instance(),
          scrollTop2 = _nodes$menuListbox$in3.scrollTop;

      expect(scrollTop2 === 4 || scrollTop2 === 0).to.eql(true); // done because menu and menu item size in phantomjs is weird
    });
  });
  describe('Variant-specific', function () {
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
    it('Limit to pre-defined choices', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        multiple: true,
        predefinedOptionsOnly: true
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      nodes.input.simulate('focus');
      nodes.input.simulate('keyDown', letterKeyObjects.A);
      nodes.input.simulate('keyDown', keyObjects.ENTER);
      nodes = getNodes({
        wrapper: wrapper
      });
      expect(nodes.selectedListbox).not.to.be.present;
    });
    it('Inline Single Selection Remove selection', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        variant: "inline-listbox"
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      }); // add selection

      nodes.input.simulate('focus');
      nodes.input.simulate('change', {
        target: {
          value: accounts[1].label
        }
      });
      nodes.input.simulate('keyDown', keyObjects.ENTER);
      expect(nodes.input).to.have.value('Salesforce.com, Inc.');
      nodes = getNodes({
        wrapper: wrapper
      }); // remove selection

      nodes.removeSingleItem.simulate('click');
      nodes = getNodes({
        wrapper: wrapper
      });
      expect(nodes.input).to.have.value('');
    });
  });
  describe('Dialog variant', function () {
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
    it('popover opens when down arrow is pressed', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        variant: "popover",
        popover: React.createElement(Popover, null),
        isOpen: true
      }));
      var nodes = getNodes({
        wrapper: wrapper
      });
      nodes.input.simulate('keyDown', keyObjects.DOWN);
      nodes = getNodes({
        wrapper: wrapper
      });
      expect(nodes.popover).to.be.present;
    });
    it('onOpen callback is called when dialog variant', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        variant: "popover",
        popover: React.createElement(Popover, null),
        isOpen: true
      }));
      var nodes = getNodes({
        wrapper: wrapper
      });
      nodes.input.simulate('click', {});
      nodes = getNodes({
        wrapper: wrapper
      });
      expect(nodes.popover).to.be.present;
    });
  });
  describe('Optional Props', function () {
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
    it('Displays No match found', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        isOpen: true
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      nodes.input.simulate('focus');
      nodes.input.simulate('change', {
        target: {
          value: 'Random text'
        }
      }); // nodes.input.simulate('keyDown', keyObjects.ENTER);

      nodes = getNodes({
        wrapper: wrapper
      });
      expect(nodes.menuListbox.find('.slds-listbox__item.slds-listbox__status').text()).to.equal('No matches found.');
    });
  });
  describe('Input Onclick', function () {
    var onOpenCallback = sinon.spy();
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
    it('onOpen callback is called', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        onOpen: onOpenCallback
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      nodes.input.simulate('click', {});
      expect(onOpenCallback.callCount).to.equal(1);
    });
  });
  describe('Combobox with items disabled', function () {
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
    it('Tooltip component shows when focused on menu item.', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        multiple: true,
        isOpen: true,
        tooltipMenuItemDisabled: React.createElement(Tooltip, null)
      }), {
        attachTo: mountNode
      });
      var nodes = getNodes({
        wrapper: wrapper
      });
      nodes.input.simulate('focus');
      nodes.input.simulate('change', {
        target: {
          value: accounts[3].label
        }
      });
      nodes.input.simulate('keyDown', keyObjects.DOWN);
      var nodeInFocus = nodes.menuListbox.find('.slds-tooltip-trigger');
      var span = nodeInFocus.find('#combobox-unique-id-listbox-option-4'); // verify span is aria-selected and aria-disabled

      expect(span).to.have.attr('aria-selected', 'true');
      expect(span).to.have.attr('aria-disabled', 'true'); // verify tooltip is rendered

      expect(nodes.menuListbox.find('#combobox-unique-id-listbox-option-help-4').length).to.equal(1);
    });
  });
});
//# sourceMappingURL=combobox.browser-test.js.map