function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Global Header Button Component
// NOTE: THIS COMPONENT HAS BEEN DEPRECATED AND WILL BE REMOVED IN FUTURE MAJOR RELEASES
// ## Dependencies
// ### React
import React from 'react'; // ### Button

import Button from '../button'; // This component's `checkProps` which issues warnings to developers about properties
// when in development mode (similar to React's built in development tools)

import checkProps from './check-props'; // ## Constants

import { GLOBAL_HEADER_BUTTON, GLOBAL_HEADER_TOOL } from '../../utilities/constants';
/**
 * A helper component that renders a Button in the tools area of the Global Header. Currently defaults to a bare icon, but this can be overriden if text-based buttons are required.
 */

var GlobalHeaderButton = function GlobalHeaderButton(props) {
  checkProps(GLOBAL_HEADER_BUTTON, props);

  var buttonVariant = props.buttonVariant,
      rest = _objectWithoutProperties(props, ["buttonVariant"]);

  var btn = React.createElement(Button, _extends({
    iconVariant: "global-header",
    variant: "icon"
  }, rest));
  return buttonVariant === 'dropdown' ? btn : React.createElement("li", null, btn);
};

GlobalHeaderButton.displayName = GLOBAL_HEADER_TOOL;
export default GlobalHeaderButton;
//# sourceMappingURL=button.js.map