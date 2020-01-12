function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### isFunction

import isFunction from 'lodash.isfunction'; // ## Children

import Dropdown from '../menu-dropdown'; // ### Event Helpers

import EventUtil from '../../utilities/event'; // ## Constants

import { DATA_TABLE_ROW_ACTIONS } from '../../utilities/constants';
/**
 * RowActions provide a mechanism for defining a menu to display alongside each row in the DataTable.
 */

var DataTableRowActions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DataTableRowActions, _React$Component);

  function DataTableRowActions() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DataTableRowActions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DataTableRowActions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      EventUtil.trap(e);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (selection) {
      if (isFunction(_this.props.onAction)) {
        _this.props.onAction(_this.props.item, selection);
      }

      if (_this.props.dropdown && isFunction(_this.props.dropdown.props.onSelect)) {
        _this.props.dropdown.props.onSelect(selection);
      }
    });

    return _this;
  }

  _createClass(DataTableRowActions, [{
    key: "render",
    // ### Render
    value: function render() {
      // i18n
      var defaultDropdownProps = {
        align: 'right',
        buttonClassName: 'slds-button_icon-x-small',
        buttonVariant: 'icon',
        iconCategory: 'utility',
        iconName: 'down',
        iconSize: 'small',
        iconVariant: 'border-filled',
        assistiveText: this.props.assistiveText,
        className: this.props.className,
        options: this.props.options,
        hint: !this.props.noHint,
        id: this.props.id
      };
      var props = this.props.dropdown ? this.props.dropdown.props : {};

      var dropdownProps = _objectSpread({}, defaultDropdownProps, props, {
        onSelect: this.handleSelect
      });

      return (
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        React.createElement("td", {
          className: "",
          "data-label": "Actions",
          onClick: this.handleClick,
          style: {
            width: '3.25rem'
          }
        }, React.createElement(Dropdown, dropdownProps))
      );
    }
  }]);

  return DataTableRowActions;
}(React.Component);

_defineProperty(DataTableRowActions, "displayName", DATA_TABLE_ROW_ACTIONS);

_defineProperty(DataTableRowActions, "propTypes", {
  /**
   * Description of the menu for screenreaders.
   */
  assistiveText: PropTypes.object,

  /**
   * Class names to be added to the actions menu.
   */
  className: PropTypes.string,

  /**
   * HTML ID to be added to the actions menu.
   */
  id: PropTypes.string,

  /**
   * `DataTable` row item
   */
  item: PropTypes.object,

  /**
   * Disable hint styling which changes the color of the dropdown svg on hover over.
   */
  noHint: PropTypes.bool,

  /**
   * Triggered when an item is selected.
   */
  onAction: PropTypes.func,

  /**
   * `Dropdown` options. See `Dropdown`.
   */
  options: PropTypes.array,

  /**
   * A [Dropdown](http://react.lightningdesignsystem.com/components/dropdown-menus/) component. The props from this drop will be merged and override any default props.
   * **Note:** onAction will not be overridden, both `DropDown`'s onSelect(dropDownActionOption) and onAction(rowItem, dropdownActionOption) will be called with appropriate parameters
   */
  dropdown: PropTypes.node
});

_defineProperty(DataTableRowActions, "defaultProps", {
  assistiveText: {
    icon: 'Actions'
  },
  noHint: false,
  options: []
});

export default DataTableRowActions;
//# sourceMappingURL=row-actions.js.map