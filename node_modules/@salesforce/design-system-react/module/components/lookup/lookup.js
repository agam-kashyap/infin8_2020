var _class, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

/* eslint-disable react/no-access-state-in-setstate */

/* eslint-disable prefer-destructuring */

/* eslint-disable max-lines */

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable jsx-a11y/role-has-required-aria-props */
// # Lookup Component
// Implements the [Lookup design pattern](https://latest-204.lightningdesignsystem.com/components/lookups) in React.
// Based on SLDS v2.1.0-dev
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'lodash.escaperegexp';
import isEqual from 'lodash.isequal';
import classNames from 'classnames'; // This component's `checkProps` which issues warnings to developers about properties
// when in development mode (similar to React's built in development tools)

import checkProps from './check-props'; // Children

import Dialog from '../utilities/dialog';
import Button from '../button';
import Icon from '../icon';
import InputIcon from '../icon/input-icon';
import Input from '../input'; // ### Event Helpers

import EventUtil from '../../utilities/event';
import KEYS from '../../utilities/key-code';
import Menu from './menu';
import { LOOKUP } from '../../utilities/constants';
/**
 * A function that takes a term string and an item and returns a truthy value if the item should be kept.
 */

var defaultFilter = function defaultFilter(term, item) {
  if (!term) return true;
  return item.data && item.data.type === 'section' || item.label.match(new RegExp(escapeRegExp(term), 'ig'));
};

var normalizeSearchTerm = function normalizeSearchTerm(string) {
  return (string || '').toString().replace(/^\s+/, '');
};
/**
 * ** Lookup is deprecated. Please use an auto-complete Combobox instead.**
 *
 * Lookup is an advanced inline search form. The lookup can parse through single or multi scoped datasets. The parsed dataset can be filtered by single or multi option selects.
 *
 * This component is wrapped in a [higher order component to listen for clicks outside itself](https://github.com/kentor/react-click-outside) and thus requires use of `ReactDOM`.
 */


var Lookup = (_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Lookup, _React$Component);

  function Lookup(props) {
    var _this;

    _classCallCheck(this, Lookup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Lookup).call(this, props)); // `checkProps` issues warnings to developers about properties (similar to React's built in development tools)

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentFocus: null,
      focusIndex: null,
      items: [],
      listLength: _this.props.options.length,
      searchTerm: normalizeSearchTerm(_this.props.searchTerm),
      selectedIndex: _this.props.selectedItem
    });

    _defineProperty(_assertThisInitialized(_this), "getClassName", function () {
      return classNames(_this.props.className, 'slds-form-element slds-lookup', {
        'slds-has-selection': _this.isSelected(),
        'slds-is-open': _this.getIsOpen()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setFirstIndex", function () {
      var nextFocusIndex = 0;
      var filteredItem = _this.state.items[0];

      if (_this.menuComponent && _this.menuComponent.getFilteredItemForIndex) {
        filteredItem = _this.menuComponent.getFilteredItemForIndex(nextFocusIndex);
      }

      if (filteredItem && filteredItem.data.type === 'section') {
        nextFocusIndex += 1;
      }

      _this.setState({
        focusIndex: nextFocusIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getHeader", function () {
      var Header = _this.props.headerRenderer;
      var headerActive = _this.state.focusIndex === 0;
      return React.createElement(Header, _extends({
        ref: function ref(header) {
          _this.headerComponent = header;
        }
      }, _this.props, {
        focusIndex: _this.state.focusIndex,
        isActive: headerActive,
        onClose: _this.handleClose,
        searchTerm: _this.state.searchTerm,
        setFocus: _this.setFocus
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "getFooter", function () {
      var Footer = _this.props.footerRenderer;

      var numFocusable = _this.getNumFocusableItems();

      var footerActive = _this.state.focusIndex === numFocusable;
      return React.createElement(Footer, _extends({
        ref: function ref(footer) {
          _this.footerComponent = footer;
        }
      }, _this.props, {
        focusIndex: _this.state.focusIndex,
        isActive: footerActive,
        onClose: _this.handleClose,
        setFocus: _this.setFocus
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "setFocus", function (id) {
      _this.setState({
        currentFocus: id
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getIsOpen", function () {
      return !!(typeof _this.props.isOpen === 'boolean' ? _this.props.isOpen : _this.state.isOpen);
    });

    _defineProperty(_assertThisInitialized(_this), "getListLength", function (qty) {
      if (qty !== _this.state.listLength) {
        _this.setState({
          listLength: qty
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getNumFocusableItems", function () {
      var offset = 0;

      if (_this.footerComponent) {
        offset += 1;
      }

      if (_this.headerComponent) {
        offset += 1;
      }

      return _this.state.listLength - 1 + offset;
    });

    _defineProperty(_assertThisInitialized(_this), "increaseIndex", function () {
      var numFocusable = _this.getNumFocusableItems();

      var nextFocusIndex = _this.state.focusIndex < numFocusable ? _this.state.focusIndex + 1 : 0;

      var filteredItem = _this.menuComponent.getFilteredItemForIndex(nextFocusIndex);

      if (filteredItem && filteredItem.data.type === 'section') {
        nextFocusIndex += 1;
      }

      _this.setState({
        focusIndex: nextFocusIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "decreaseIndex", function () {
      var numFocusable = _this.getNumFocusableItems();

      var prevFocusIndex = _this.state.focusIndex > 0 ? _this.state.focusIndex - 1 : numFocusable;

      var filteredItem = _this.menuComponent.getFilteredItemForIndex(prevFocusIndex);

      if (filteredItem && filteredItem.data.type === 'section') {
        prevFocusIndex = prevFocusIndex === 0 ? numFocusable : prevFocusIndex - 1;
      }

      _this.setState({
        focusIndex: prevFocusIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectItem", function (itemId) {
      if (itemId) {
        var index = itemId.replace('item-', '');

        _this.selectItemByIndex(index);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectItemByIndex", function (index) {
      if (index >= 0 && index < _this.state.items.length) {
        if (_this.props.onRequestClose) {
          _this.props.onRequestClose();
        }

        _this.setState({
          isOpen: false,
          selectedIndex: index,
          searchTerm: ''
        });

        var data = _this.state.items[index].data;

        if (_this.props.onSelect) {
          _this.props.onSelect(data);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteSelected", function () {
      if (_this.props.onRequestOpen) {
        _this.props.onRequestOpen();
      }

      _this.setState({
        selectedIndex: null,
        isOpen: true
      });

      _this.focusInput();

      if (_this.props.onUnselect) {
        _this.props.onUnselect();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      if (_this.props.onRequestClose) {
        _this.props.onRequestClose();
      }

      _this.setState({
        isOpen: false,
        focusIndex: null,
        currentFocus: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function () {
      _this.handleClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleEscape", function (event) {
      if (_this.getIsOpen() && event) {
        EventUtil.trap(event);
      }

      _this.handleClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.handleClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      if (_this.props.onRequestOpen) {
        _this.props.onRequestOpen();
      }

      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      if (_this.props.onBlur) {
        var target = event.target || event.currentTarget;

        _this.props.onBlur(target.value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      if (_this.props.onFocus) {
        var target = event.target || event.currentTarget;

        _this.props.onFocus(target.value);
      }

      if (_this.props.onRequestOpen) {
        _this.props.onRequestOpen();
      }

      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var target = event.target || event.currentTarget;

      _this.setState({
        searchTerm: normalizeSearchTerm(target.value)
      });

      if (_this.props.onChange) {
        _this.props.onChange(target.value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (event.keyCode) {
        // If user hits esc key or tab key, close menu
        if (event.keyCode === KEYS.ESCAPE) {
          _this.handleEscape(event);
        } else if (event.keyCode === KEYS.TAB) {
          // remove the focus on input, tab focus shoud move to next tabbale elemnt
          setTimeout(function () {
            _this.handleClose();
          }, 200);

          _this.handleBlur(event);
        } else {
          _this.handleClick();
        } // If user hits down key, advance aria activedescendant to next item


        if (event.keyCode === KEYS.DOWN) {
          EventUtil.trapImmediate(event);

          if (_this.state.focusIndex === null) {
            _this.setFirstIndex();
          } else {
            _this.increaseIndex();
          }
        } else if (event.keyCode === KEYS.UP) {
          // If user hits up key, advance aria activedescendant to previous item
          EventUtil.trapImmediate(event);

          var numFocusable = _this.getNumFocusableItems();

          if (_this.state.focusIndex === null) {
            _this.setState({
              focusIndex: numFocusable
            });
          } else {
            _this.decreaseIndex();
          }
        } else if (event.keyCode === KEYS.ENTER && _this.state.focusIndex !== null) {
          // If user hits enter, select current activedescendant item
          EventUtil.trapImmediate(event); // If the focus is on the first fixed Action Item in Menu, click it

          if (_this.headerComponent && _this.state.focusIndex === 0) {
            _this.headerComponent.handleClick();
          } else if (_this.footerComponent && _this.state.focusIndex === _this.state.listLength + 1) {
            // If the focus is on the last fixed Action Item in Menu, click it
            _this.footerComponent.handleClick();
          } else {
            // If not, then select menu item
            _this.selectItem(_this.state.currentFocus);
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlePillKeyDown", function (event) {
      if (event.keyCode) {
        if (event.keyCode === KEYS.DELETE || event.keyCode === KEYS.BACKSPACE) {
          EventUtil.trapImmediate(event);

          _this.handleDeleteSelected();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "inputRefId", function () {
      return "".concat(_this.props.label, "Lookup");
    });

    _defineProperty(_assertThisInitialized(_this), "focusInput", function () {
      _this.focusOnRender = true;
    });

    _defineProperty(_assertThisInitialized(_this), "isSelected", function () {
      var hasSelection = !isNaN(parseInt(_this.state.selectedIndex, 10)) && _this.state.selectedIndex >= 0;
      return hasSelection;
    });

    _defineProperty(_assertThisInitialized(_this), "modifyItems", function (itemsToModify) {
      var items = itemsToModify.map(function (item, index) {
        return {
          id: "item-".concat(index),
          label: item.label,
          data: item
        };
      });

      _this.setState({
        items: items
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderMenuContent", function () {
      return React.createElement(Menu, {
        ref: function ref(menu) {
          _this.menuComponent = menu;
        },
        emptyMessage: _this.props.emptyMessage,
        filterWith: _this.props.filterWith,
        focusIndex: _this.state.focusIndex,
        footer: _this.props.footerRenderer ? _this.getFooter() : null,
        getListLength: _this.getListLength,
        header: _this.props.headerRenderer ? _this.getHeader() : null,
        iconCategory: _this.props.iconCategory,
        iconInverse: _this.props.iconInverse,
        iconName: _this.props.iconName,
        items: _this.state.items,
        label: _this.props.label,
        listItemLabelRenderer: _this.props.listItemLabelRenderer,
        listLength: _this.state.listLength,
        onSelect: _this.selectItem,
        searchTerm: _this.state.searchTerm,
        sectionDividerRenderer: _this.props.sectionDividerRenderer,
        setFocus: _this.setFocus
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderInlineMenu", function () {
      return _this.getIsOpen() ? React.createElement("div", {
        className: "ignore-react-onclickoutside slds-lookup__menu",
        role: "listbox"
      }, _this.renderMenuContent()) : null;
    });

    _defineProperty(_assertThisInitialized(_this), "renderSeparateMenu", function () {
      // FOR BACKWARDS COMPATIBILITY
      var menuPosition = _this.props.isInline ? 'relative' : _this.props.menuPosition; // eslint-disable-line react/prop-types

      return _this.getIsOpen() ? React.createElement(Dialog, {
        align: "bottom",
        className: "slds-lookup__menu slds-show",
        closeOnTabKey: true,
        contentsClassName: "slds-lookup__menu slds-show",
        context: _this.context,
        inheritWidthOf: "target",
        onClose: _this.handleCancel,
        hasStaticAlignement: !_this.props.flippable,
        constrainToScrollParent: _this.props.constrainToScrollParent,
        onRequestTargetElement: function onRequestTargetElement() {
          return _this.input;
        },
        position: menuPosition
      }, _this.renderMenuContent()) : null;
    });

    _defineProperty(_assertThisInitialized(_this), "renderInput", function () {
      return React.createElement(Input, {
        "aria-activedescendant": _this.state.currentFocus ? _this.state.currentFocus : '',
        "aria-autocomplete": "list",
        "aria-describedby": _this.props.describedById,
        "aria-expanded": !!_this.getIsOpen(),
        assistiveText: _this.props.assistiveText,
        className: "slds-lookup__search-input",
        disabled: _this.props.disabled,
        iconRight: React.createElement(InputIcon, {
          assistiveText: {
            icon: 'Search'
          },
          category: "utility",
          name: "search"
        }),
        id: _this.inputRefId(),
        onBlur: _this.handleBlur,
        onChange: _this.handleChange,
        onClick: _this.handleClick,
        onFocus: _this.handleFocus,
        onKeyDown: _this.handleKeyDown,
        inputRef: function inputRef(component) {
          _this.input = component;

          if (_this.focusOnRender) {
            _this.input.focus();

            _this.focusOnRender = false;
          }
        },
        placeholder: _this.props.placeholder,
        role: "combobox",
        type: "text",
        value: _this.state.searchTerm
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderSelectedItem", function () {
      var selectedItem = _this.props.options[_this.state.selectedIndex].label;
      var renderIcon = _this.props.iconName ? React.createElement(Icon, {
        category: _this.props.iconCategory,
        className: "slds-icon slds-pill__icon",
        inverse: _this.props.iconInverse,
        name: _this.props.iconName
      }) : null;
      var labelClassName = _this.props.iconName ? 'slds-pill__label' : 'slds-pill__label slds-m-left_x-small'; // i18n

      return React.createElement("div", {
        className: "slds-pill__container"
      }, React.createElement("a", {
        href: "javascript:void(0)",
        className: "slds-pill",
        ref: function ref(pill) {
          _this.pills[_this.state.selectedIndex] = pill;
        },
        onKeyDown: _this.handlePillKeyDown
      }, renderIcon, React.createElement("span", {
        className: labelClassName
      }, selectedItem), React.createElement(Button, {
        assistiveText: {
          icon: 'Press delete to remove'
        },
        className: "slds-pill__remove slds-button_icon-bare",
        iconCategory: "utility",
        iconName: "close",
        onClick: _this.handleDeleteSelected,
        tabIndex: "-1",
        variant: "icon"
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderLabel", function () {
      var inputLabel;
      var required = _this.props.required ? // eslint-disable-next-line react/jsx-curly-brace-presence
      React.createElement("span", {
        className: "slds-required"
      }, '*') : null;

      if (_this.isSelected()) {
        // inline style override
        inputLabel = React.createElement("span", {
          className: "slds-form-element__label",
          style: {
            width: '100%'
          }
        }, required, _this.props.label);
      } else {
        inputLabel = React.createElement("label", {
          className: "slds-form-element__label",
          htmlFor: _this.inputRefId(),
          style: {
            width: '100%'
          }
        }, required, _this.props.label);
      }

      return inputLabel;
    });

    checkProps(LOOKUP, props); // Keeps track of references of children for keyboard navigation

    _this.pills = [];
    return _this;
  }

  _createClass(Lookup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.modifyItems(this.props.options);
    } // eslint-disable-next-line camelcase, react/sort-comp

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      if (newProps.options) {
        this.modifyItems(newProps.options);
      }

      if (newProps.selectedItem !== this.props.selectedItem || !isEqual(newProps.options, this.props.options)) {
        this.setState({
          selectedIndex: newProps.selectedItem
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!isNaN(parseInt(prevState.selectedIndex, 10)) && isNaN(parseInt(this.state.selectedIndex, 10))) {
        if (this.input) {
          this.input.focus();
        }
      } else if (isNaN(parseInt(prevState.selectedIndex, 10)) && !isNaN(parseInt(this.state.selectedIndex, 10))) {
        if (this.pills[this.state.selectedIndex]) {
          this.pills[this.state.selectedIndex].focus();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var isInline;
      /* eslint-disable react/prop-types */

      if (this.props.isInline) {
        isInline = true;
      } else if (this.props.modal !== undefined) {
        isInline = !this.props.modal;
      }
      /* eslint-enable react/prop-types */


      var formElementControlClasses = _defineProperty({
        'slds-form-element__control': true
      }, "slds-input-has-icon slds-input-has-icon_".concat(this.props.iconPosition), !this.isSelected());

      return React.createElement("div", {
        className: this.getClassName(),
        "data-select": "single",
        "data-scope": "single",
        onScroll: this.props.onScroll
      }, this.props.label ? this.renderLabel() : null, React.createElement("div", {
        className: classNames(formElementControlClasses)
      }, this.isSelected() ? this.renderSelectedItem() : null, !this.isSelected() ? this.renderInput() : null), isInline ? this.renderInlineMenu() : this.renderSeparateMenu());
    }
  }]);

  return Lookup;
}(React.Component), _defineProperty(_class, "displayName", LOOKUP), _defineProperty(_class, "propTypes", {
  /**
   * If present, the label associated with this `input` is overwritten
   * by this text and is visually not shown.
   */
  assistiveText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Class names to be added to the tag classed with `slds-lookup`.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * If true, constrains the menu to the scroll parent. Has no effect if `isInline` is `true`.
   */
  constrainToScrollParent: PropTypes.bool,

  /**
   * ID for aria-describedby (e.g. for an error message or a description)
   */
  describedById: PropTypes.string,

  /**
   * Please select one of the following:
   * * `absolute` - (default) The dialog will use `position: absolute` and style attributes to position itself. This allows inverted placement or flipping of the dialog.
   * * `overflowBoundaryElement` - The dialog will overflow scrolling parents. Use on elements that are aligned to the left or right of their target and don't care about the target being within a scrolling parent. Typically this is a popover or tooltip. Dropdown menus can usually open up and down if no room exists. In order to achieve this a portal element will be created and attached to `body`. This element will render into that detached render tree.
   * * `relative` - No styling or portals will be used. Menus will be positioned relative to their triggers. This is a great choice for HTML snapshot testing.
   */
  menuPosition: PropTypes.string,

  /**
   * This prop is passed onto the `input`. Prevents dropdown menu from opening. Also applies disabled styling to input.
   */
  disabled: PropTypes.bool,

  /**
   * Custom message that renders when no matches found. The default empty state is just text that says, 'No matches found.'.
   */
  emptyMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * Custom function to filter the Lookup items when typing into input field. The default function is case-insensitive and uses the searchTerm to filter Lookup items on their labels.
   */
  filterWith: PropTypes.func,

  /**
   * If true, the menu is constrained to the window and may be flipped up. Has no effect if `isInline` is `true`. In other components, its opposite is used `hasStaticAlignment`.
   */
  flippable: PropTypes.bool,

  /**
   * Custom component for Lookup footer. The default footer allows user to add new item - see <a href='http://www.lightningdesignsystem.com/components/lookups/#base'>Lightning Design System Lookup > Base</a>. To use the default footer, pass in <code>Lookup.DefaultFooter</code>.
   */
  footerRenderer: PropTypes.func,

  /**
   * Custom component for Lookup header. The default header has a search icon and shows the search term - see <a href='http://www.lightningdesignsystem.com/components/lookups/#base'>Lightning Design System Lookup > Base</a>. To use the default header, pass in <code>Lookup.DefaultHeader</code>.
   */
  headerRenderer: PropTypes.func,

  /**
   * Please refer to <a href='http://www.lightningdesignsystem.com/resources/icons'>Lightning Design System Icons</a> to view categories.
   */
  iconCategory: PropTypes.string,

  /**
   * If true, icon color is white. If false, icon color is the default text color.
   */
  iconInverse: PropTypes.bool,

  /**
   * Name of icon. Please refer to <a href='http://www.lightningdesignsystem.com/resources/icons'>Lightning Design System Icons</a> to view icon names.
   */
  iconName: PropTypes.string,

  /**
   * Determines whether the input's icon will display that icon on the left or the right.
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),

  /**
   * Renders menu within the wrapping trigger as a sibling of the button. By default, you will have an absolutely positioned container at an elevated z-index.
   */
  isInline: PropTypes.bool,

  /**
   * Whether or not the dropdown menu is open. This overrides the default behavior.
   */
  isOpen: PropTypes.bool,

  /**
   * Form label for input.
   */
  label: PropTypes.string,

  /**
   * Custom component that overrides the default Lookup Item component.
   */
  listItemLabelRenderer: PropTypes.func,

  /**
   * Triggered when input focus is removed.
   */
  onBlur: PropTypes.func,

  /**
   * Triggered when the contents of the input changes.
   */
  onChange: PropTypes.func,

  /**
   * Triggered when input is focused.
   */
  onFocus: PropTypes.func,

  /**
   * Function called when the lookup dropdown would like hide. This will turn the Lookup into into a controlled component. Please use with `isOpen`.
   */
  onRequestClose: PropTypes.func,

  /**
   * Function called when the lookup dropdown would like show. This will turn the Lookup into into a controlled component. Please use with `isOpen`.
   */
  onRequestOpen: PropTypes.func,

  /**
   * Triggered when the user scrolls in the dropdown menu.
   */
  onScroll: PropTypes.func,

  /**
   * Triggered when an item is selected from the dropdown menu.
   */
  onSelect: PropTypes.func,

  /**
   * Triggered when an item is an item is removed from the input.
   */
  onUnselect: PropTypes.func,

  /**
   * Item added to the dropdown menu.
   */
  options: PropTypes.array.isRequired,

  /**
   * Text that will appear in an empty input.
   */
  placeholder: PropTypes.string,

  /**
   * If true, adds asterisk next to input label to indicate it is a required field.
   */
  required: PropTypes.bool,

  /**
   * Text passed on to header search input of dropdown menu.
   */
  searchTerm: PropTypes.string,

  /**
   * Custom component that overrides the default section divider
   */
  sectionDividerRenderer: PropTypes.func,

  /**
   * Index of current selected item. To clear the selection, pass in -1.
   */
  selectedItem: PropTypes.number
}), _defineProperty(_class, "defaultProps", {
  constrainToScrollParent: true,
  filterWith: defaultFilter,
  iconPosition: 'right',
  searchTerm: '',
  menuPosition: 'absolute'
}), _temp);
Lookup.contextTypes = {
  iconPath: PropTypes.string
};
export default Lookup;
//# sourceMappingURL=lookup.js.map