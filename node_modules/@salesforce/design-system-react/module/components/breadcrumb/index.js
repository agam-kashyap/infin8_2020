function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable jsx-a11y/no-redundant-roles */
// # Breadcrumbs
// Implements the [Breadcrumbs design pattern](https://www.lightningdesignsystem.com/components/breadcrumbs) in React.
// Based on SLDS v2.1.0-rc.2
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)

import checkProps from './check-props';
import componentDoc from './component.json'; // ## Constants

import { BREADCRUMB } from '../../utilities/constants';
import Dropdown from './../menu-dropdown';
var propTypes = {
  /**
   * **Assistive text for accessibility.**
   * This object is merged with the default props object on every render.
   * * `label`: The assistive text for the breadcrumb trail.
   */
  assistiveText: PropTypes.shape({
    label: PropTypes.string
  }),

  /**
   * A unique ID is needed in order to support keyboard navigation, ARIA support, and connect the dropdown to the triggering button.
   */
  id: PropTypes.string,

  /**
   * Overflow menu of the type [Dropdown](/components/menu-dropdowns)
   */
  overflowDropdownMenu: PropTypes.node,

  /**
   * Custom styles to be passed to the containing `nav` tag
   */
  styleContainer: PropTypes.object,

  /**
   * An array of anchor elements that define the path to the current record.
   */
  trail: PropTypes.array.isRequired
};
var defaultProps = {
  assistiveText: {
    label: 'Breadcrumbs'
  }
};

var getBreadcrumbDropdown = function getBreadcrumbDropdown(overflowDropdownMenu, props) {
  var overflowDropdownMenuProps = _objectSpread({}, overflowDropdownMenu.props, {
    id: "".concat(props.id, "-dropdown"),
    iconCategory: 'utility',
    iconName: 'threedots',
    iconVariant: 'bare',
    threedots: true
  });

  return React.createElement("li", {
    className: "slds-breadcrumb__item"
  }, React.createElement(Dropdown, overflowDropdownMenuProps));
};
/**
 * Use breadcrumbs to note the path of a record and help the user to navigate back to the parent.Breadcrumb based on SLDS 2.1.0-dev
 */


var Breadcrumb = function Breadcrumb(props) {
  checkProps(BREADCRUMB, props, componentDoc);
  var overflowDropdownMenu = props.overflowDropdownMenu,
      trail = props.trail;
  var assistiveText = typeof props.assistiveText === 'string' ? props.assistiveText : _objectSpread({}, defaultProps.assistiveText, props.assistiveText).label;
  return React.createElement("nav", {
    role: "navigation",
    "aria-label": assistiveText,
    style: props.styleContainer
  }, React.createElement("ol", {
    className: "slds-breadcrumb slds-list_horizontal"
  }, overflowDropdownMenu && getBreadcrumbDropdown(overflowDropdownMenu, props), trail.map(function (crumb, index) {
    return (
      /* eslint-disable react/no-array-index-key */
      React.createElement("li", {
        key: index // There isn't any better reasonable way to identity these
        ,
        className: "slds-breadcrumb__item"
      }, crumb)
    );
  })));
};

Breadcrumb.displayName = BREADCRUMB;
Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;
export default Breadcrumb;
//# sourceMappingURL=index.js.map