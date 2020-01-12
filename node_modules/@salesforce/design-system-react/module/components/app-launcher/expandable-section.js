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
// # App Launcher Expandable Section Component
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// A simple javascript utility for conditionally joining classNames together.

import classNames from 'classnames'; // This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)

import checkProps from './check-props';
import componentDoc from './component.json'; // ## Children

import ExpandableSection from '../expandable-section'; // ## Constants

import { APP_LAUNCHER_EXPANDABLE_SECTION, APP_LAUNCHER_TILE } from '../../utilities/constants';
/**
 * App Launcher Sections allow users to categorize App Tiles & Links as well as toggle their display. It is a superset of components/expandable-section with content formatting.
 * All Expandable Section props are compatible with props passed to this component.
 */

var AppLauncherExpandableSection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppLauncherExpandableSection, _React$Component);

  // ### Display Name
  // Always use the canonical component name as the React display name.
  // ### Prop Types
  function AppLauncherExpandableSection(props) {
    var _this;

    _classCallCheck(this, AppLauncherExpandableSection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppLauncherExpandableSection).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: true
    });

    _defineProperty(_assertThisInitialized(_this), "toggleOpen", function (event, data) {
      if (_this.props.onToggleOpen) {
        _this.props.onToggleOpen(event, data);
      } else {
        _this.setState(function (prevState) {
          return {
            isOpen: !prevState.isOpen
          };
        });
      }
    });

    checkProps(APP_LAUNCHER_EXPANDABLE_SECTION, props, componentDoc);
    return _this;
  }

  _createClass(AppLauncherExpandableSection, [{
    key: "render",
    value: function render() {
      var expandableSectionProps = _objectSpread({}, this.props, {
        isOpen: this.props.isOpen !== undefined ? this.props.isOpen : this.state.isOpen,
        onToggleOpen: this.toggleOpen
      });

      var ulChildrenType = 'tiles';
      var ulContent = React.Children.map(this.props.children, function (child) {
        var liClasses = 'slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3';

        if (child && child.type && child.type.displayName !== APP_LAUNCHER_TILE || child && !child.type) {
          ulChildrenType = 'links';
        }

        if (ulChildrenType === 'links') {
          liClasses = 'slds-col_padded slds-p-vertical_xx-small slds-size_1-of-5';
        }

        return React.createElement("li", {
          className: liClasses
        }, child);
      });
      return React.createElement(ExpandableSection, expandableSectionProps, React.createElement("ul", {
        className: classNames('slds-grid slds-wrap', {
          'slds-grid_pull-padded': ulChildrenType === 'tiles'
        })
      }, ulContent));
    }
  }]);

  return AppLauncherExpandableSection;
}(React.Component);

_defineProperty(AppLauncherExpandableSection, "displayName", APP_LAUNCHER_EXPANDABLE_SECTION);

_defineProperty(AppLauncherExpandableSection, "propTypes", {
  /**
   * **Assistive text for accessibility.**
   * * `toggleSection`: Label for the icon that expands / collapses the section
   */
  assistiveText: PropTypes.shape({
    toggleSection: PropTypes.string
  }),

  /**
   * Contents of the section
   */
  children: PropTypes.node,

  /**
   * Class names to be added to the `slds-section` classed node
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Unique identifier for the expandable section. The id is automatically generated if not provided
   */
  id: PropTypes.string,

  /**
   * Specifies whether the section is expanded or collapsed. If not provided, component will use its own state to manage this itself
   */
  isOpen: PropTypes.bool,

  /**
   * Specifies whether the section can be expanded or collapsed. Defaults to `false`
   */
  nonCollapsible: PropTypes.bool,

  /**
   * Callback for when the section is expanded or collapsed. Passes event object and data object with `isOpen` bool.
   */
  onToggleOpen: PropTypes.func,

  /**
   * The title for the section
   */
  title: PropTypes.string.isRequired
});

export default AppLauncherExpandableSection;
//# sourceMappingURL=expandable-section.js.map