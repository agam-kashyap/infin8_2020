function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable jsx-a11y/no-redundant-roles */
// # Page Header Component
// Implements the [Page Header design pattern](https://www.lightningdesignsystem.com/components/page-headers) in React.
// Based on SLDS v2.2.1
// ## Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'; // This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)

import checkProps from './check-props';
import componentDoc from './component.json';
import Info from './private/info';
import Title from './private/title';
import DetailRow from './private/detail-row';
import DetailBlock from './private/detail-block';
import Base from './private/base';
import RecordHome from './private/record-home';
import ObjectHome from './private/object-home';
import RelatedList from './private/related-list'; // ## Constants

import { PAGE_HEADER } from '../../utilities/constants';
var displayName = PAGE_HEADER;
var propTypes = {
  /**
   * Optional class name
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * An array of detail blocks (used in "recordHome" variant)
   */
  details: PropTypes.array,

  /**
   * The label property can be a string or a React element
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * The page header icon. Expects an Icon component
   */
  icon: PropTypes.element,

  /**
   * The info property can be a string or a React element
   */
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * Makes PageHeader joinable with DataTable by adding appropriate classes/styling
   */
  joined: PropTypes.bool,

  /**
   * Used with the `object-home` variant. Accepts a node, typically a Dropdown component
   */
  nameSwitcherDropdown: PropTypes.node,

  /**
   * Actions content to appear on the upper right side of the page header.
   * Returned content must be either a SLDSPageHeaderControl component or an element/fragment with children that are all SLDSPageHeaderControl components.
   * Prop 'contentRight' will be deprecated soon, use 'onRenderActions' instead.
   */
  onRenderActions: PropTypes.func,

  /**
   * Controls content to appear on the lower right side of the page header.
   * Returned content must be either a SLDSPageHeaderControl component or an element/fragment with children that are all SLDSPageHeaderControl components.
   * Prop 'navRight' will be deprecated soon, use 'onRenderControls' instead.
   */
  onRenderControls: PropTypes.func,

  /**
   * The title property can be a string or a React element
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * An array of react elements presumably anchor <a> elements.
   */
  trail: PropTypes.array,

  /**
   * The type of component
   * Note: Extra options are added to make the version backward compatible
   */
  variant: PropTypes.oneOf(['base', 'object-home', 'record-home', 'related-list'])
};
var defaultProps = {
  variant: 'base'
};
/**
 * The PageHeader component adds PageHeader, PageHeader.Info, PageHeader.Title, PageHeader.DetailRow, and PageHeader.DetailBlock.
 */

var PageHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(PageHeader, _Component);

  function PageHeader() {
    _classCallCheck(this, PageHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageHeader).apply(this, arguments));
  }

  _createClass(PageHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      checkProps(PAGE_HEADER, this.props, componentDoc);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          variant = _this$props.variant;
      var classes = classnames('slds-page-header', {
        'slds-page-header_record-home': variant === 'record-home' || variant === 'recordHome',
        'slds-page-header_related-list': variant === 'related-list' || variant === 'relatedList',
        'slds-page-header_joined': this.props.joined
      }, className);
      var Variant;

      switch (variant) {
        case 'object-home':
        case 'objectHome':
          // For backward compatibility
          Variant = ObjectHome;
          break;

        case 'record-home':
        case 'recordHome':
          // For backward compatibility
          Variant = RecordHome;
          break;

        case 'related-list':
        case 'relatedList':
          // For backward compatibility
          Variant = RelatedList;
          break;

        default:
          Variant = Base;
      }

      return React.createElement("div", {
        className: classes
      }, React.createElement(Variant, this.props));
    }
  }]);

  return PageHeader;
}(Component);

PageHeader.displayName = displayName;
PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;
export default PageHeader; // NOTE: these are private components and are prone to breaking changes.
// Do not use these in your app! These exports are for legacy use only.

export { Info, Title, DetailRow, DetailBlock };
//# sourceMappingURL=index.js.map