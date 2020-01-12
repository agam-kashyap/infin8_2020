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

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// Implements the [Vertical Navigation design pattern](https://lightningdesignsystem.com/components/vertical-navigation/) in React.
// Based on SLDS v2.2.1
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// This project uses `classnames`, 'a simple javascript utility for conditionally
// joining classNames together.'

import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import componentDoc from './component.json';
import checkProps from './check-props';
import { VERTICAL_NAVIGATION } from '../../utilities/constants'; // Child components

import Item from './private/item';
/**
 * Vertical Navigation represents a list of links that either take the user to another page or parts of the page the user is in.
 */

var VerticalNavigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VerticalNavigation, _React$Component);

  function VerticalNavigation(props) {
    var _this;

    _classCallCheck(this, VerticalNavigation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VerticalNavigation).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getId", function () {
      return _this.props.id || _this.generatedId;
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectedId", function () {
      var categories = _this.props.categories;
      var selectedId;

      if (_this.props.selectedId) {
        // eslint-disable-next-line prefer-destructuring
        selectedId = _this.props.selectedId;
      } else if (categories.length > 0 && categories[0].items && categories[0].items.length > 0) {
        selectedId = categories[0].items[0].id;
      }

      return selectedId;
    });

    _this.generatedId = shortid.generate();
    checkProps(VERTICAL_NAVIGATION, props, componentDoc);
    return _this;
  }

  _createClass(VerticalNavigation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var rootId = this.getId();
      return React.createElement("nav", {
        id: rootId,
        className: classNames('slds-nav-vertical', this.props.className)
      }, this.props.categories.map(function (category) {
        var categoryId = "".concat(rootId, "-").concat(category.id);

        var selectedId = _this2.getSelectedId();

        return React.createElement("div", {
          key: "".concat(categoryId, "-header"),
          className: "slds-nav-vertical__section"
        }, React.createElement("h2", {
          id: categoryId,
          className: "slds-nav-vertical__title"
        }, category.label), React.createElement("ul", {
          key: categoryId
        }, category.items.map(function (item) {
          return React.createElement(Item, {
            key: item.id,
            item: item,
            isSelected: item.id === selectedId,
            categoryId: categoryId,
            onSelect: _this2.props.onSelect
          });
        })));
      }));
    }
  }]);

  return VerticalNavigation;
}(React.Component);

_defineProperty(VerticalNavigation, "displayName", VERTICAL_NAVIGATION);

_defineProperty(VerticalNavigation, "propTypes", {
  /**
   * HTML id for component. _Tested with snapshot testing._
   */
  id: PropTypes.string,

  /**
   * CSS class names to be added to the container element. _Tested with snapshot testing._
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Array of categories. The required shape is: `{id: string, label: string, items: array}`. The required shape of an item is `{id: string, label: string, url: string}`. All item ids are expected to be unique. _Tested with snapshot testing._
   */
  categories: PropTypes.array,

  /**
   * The ID of the item that is currently selected. Defaults to the ID of the first item. _Tested with Mocha framework._
   */
  selectedId: PropTypes.string,

  /**
   * Triggered when the selection changes. It receives an event and an item object in the shape: `event, {item: [object] }`. _Tested with Mocha framework._
   */
  onSelect: PropTypes.func
});

_defineProperty(VerticalNavigation, "defaultProps", {});

export default VerticalNavigation;
//# sourceMappingURL=index.js.map