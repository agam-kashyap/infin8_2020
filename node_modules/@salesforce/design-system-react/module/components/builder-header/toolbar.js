function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { BUILDER_HEADER_TOOLBAR, BUTTON_GROUP } from '../../utilities/constants';
var propTypes = {
  /**
   * **Assistive text for accessibility**
   * This object is merged with the default props object on every render.
   * * `actions`: Used for the aria-label for the actions section of the toolbar.
   * * _Tested with snapshot testing._
   */
  assistiveText: PropTypes.shape({
    actions: PropTypes.string
  }),

  /**
   * Provide children of the type `<ButtonGroup />` to define the structure of the toolbar section.
   * ```
   * <BuilderHeader>
   *   <BuilderHeaderToolbar>
   *     <ButtonGroup />
   *     <ButtonGroup />
   *   </BuilderHeaderToolbar>
   * </BuilderHeader>
   * ```
   */
  children: PropTypes.node,

  /**
   * Renders the actions section of the header.
   */
  onRenderActions: PropTypes.func
};
var defaultProps = {
  assistiveText: {
    actions: 'Actions'
  }
};
/**
 * The toolbar section of the header.
 */

var BuilderHeaderToolbar = function BuilderHeaderToolbar(props) {
  var assistiveText = _objectSpread({}, defaultProps.assistiveText, props.assistiveText);

  return React.createElement("div", {
    className: "slds-builder-toolbar",
    role: "toolbar"
  }, React.Children.map(props.children, function (child) {
    if (child.type.displayName === BUTTON_GROUP) {
      return React.createElement("div", {
        className: "slds-builder-toolbar__item-group",
        "aria-label": child.props.label
      }, child);
    }

    return null;
  }), React.createElement("div", {
    className: "slds-builder-toolbar__actions",
    "aria-label": assistiveText.actions
  }, props.onRenderActions && props.onRenderActions()));
};

BuilderHeaderToolbar.displayName = BUILDER_HEADER_TOOLBAR;
BuilderHeaderToolbar.propTypes = propTypes;
BuilderHeaderToolbar.defaultProps = defaultProps;
export default BuilderHeaderToolbar;
//# sourceMappingURL=toolbar.js.map