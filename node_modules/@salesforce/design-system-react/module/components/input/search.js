function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Search Component
// Wraps the input to default to a search style.
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ## Children

import Input from './index';
import InputIcon from '../icon/input-icon';
import checkProps from './check-props';
import componentDoc from './component.json'; // ### Event Helpers

import KEYS from '../../utilities/key-code';
import EventUtil from '../../utilities/event'; // ## Constants

import { SEARCH } from '../../utilities/constants';

var handleKeyDown = function handleKeyDown(event, onSearch) {
  if (event.keyCode === KEYS.ENTER) {
    EventUtil.trapImmediate(event);
    onSearch(event);
  }
};

var defaultProps = {
  assistiveText: {}
};
/**
 * A `Search` is an `Input` which renders the search icon by default. It can be cleared, too. All `Input` props not specified as props already may be used with this component and will override defaults.
 */

var Search = function Search(_ref) {
  var clearable = _ref.clearable,
      onClear = _ref.onClear,
      onSearch = _ref.onSearch,
      placeholder = _ref.placeholder,
      props = _objectWithoutProperties(_ref, ["clearable", "onClear", "onSearch", "placeholder"]);

  checkProps(SEARCH, props, componentDoc);
  var assistiveText = typeof props.assistiveText === 'string' ? props.assistiveText : _objectSpread({}, defaultProps.assistiveText, props.assistiveText).label;
  return React.createElement(Input, _extends({
    assistiveText: {
      label: assistiveText
    },
    iconLeft: React.createElement(InputIcon, {
      assistiveText: {
        icon: 'Search'
      },
      category: "utility",
      name: "search",
      onClick: onSearch
    }),
    iconRight: clearable ? React.createElement(InputIcon, {
      assistiveText: {
        icon: 'Clear'
      },
      category: "utility",
      name: "clear",
      onClick: onClear
    }) : null,
    onKeyDown: onSearch ? function (event) {
      return handleKeyDown(event, onSearch);
    } : null,
    placeholder: placeholder
  }, props));
};

Search.displayName = SEARCH;
Search.propTypes = {
  /**
   * **Assistive text for accessibility.**
   * This object is merged with the default props object on every render.
   * * `label`: Assistive text to search input
   */
  assistiveText: PropTypes.shape({
    label: PropTypes.string
  }),

  /**
   * Adds a clear button to right side of the input
   */
  clearable: PropTypes.bool,

  /**
   * Triggers when the clear button is clicked
   */
  onClear: PropTypes.func,

  /**
   * This event fires when enter is pressed in the `input` or the search button is clicked.
   */
  onSearch: PropTypes.func,

  /**
   * Placeholder for the input
   */
  placeholder: PropTypes.string
};
Search.defaultProps = defaultProps;
export default Search;
//# sourceMappingURL=search.js.map