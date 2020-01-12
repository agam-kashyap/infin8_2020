function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
// Implements the [Setup Assistant design pattern](https://lightningdesignsystem.com/components/progress-ring/) in React.
// Based on SLDS v2.4.5
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid'; // This component's `checkProps` which issues warnings to developers about properties
// when in development mode (similar to React's built in development tools)

import checkProps from './check-props';
import componentDoc from './component.json';
import { SETUP_ASSISTANT, SETUP_ASSISTANT_STEP } from '../../utilities/constants';
var propTypes = {
  /**
   * Accepts SetupAssistantStep components only as children.
   */
  children: PropTypes.node,

  /**
   * CSS classes to be added to tag with `.slds-progress-bar`. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   * Dictates whether this setup assistant has card wrappings and styling
   */
  isCard: PropTypes.bool,

  /**
   * Function to handle opening / closing of steps when the step is expandable. Passes event object and step `index`, `isOpen`, and `step` props as data.
   */
  onStepToggleIsOpen: PropTypes.func,

  /**
   * Accepts a progress bar component, which will only be visible if `isCard` is enabled
   */
  progressBar: PropTypes.node
};
var defaultProps = {
  isCard: false
};
/**
 * Setup Assistant provides Administrators with a centralized list of tasks for
 * onboarding organizations, clouds, or features within the Salesforce Platform.
 */

var SetupAssistant =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SetupAssistant, _React$Component);

  function SetupAssistant(props) {
    var _this;

    _classCallCheck(this, SetupAssistant);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SetupAssistant).call(this, props));
    _this.generatedId = shortid.generate();
    return _this;
  }

  _createClass(SetupAssistant, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      checkProps(SETUP_ASSISTANT, this.props, componentDoc);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      checkProps(SETUP_ASSISTANT, this.props, componentDoc);
    }
    /**
     * ID as a string
     * @returns {string} id
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var steps = React.createElement("ol", {
        id: this.getId(),
        className: classNames('slds-setup-assistant', this.props.className)
      }, React.Children.map(this.props.children, function (child, i) {
        if (child.type.displayName !== SETUP_ASSISTANT_STEP) return null;
        return React.cloneElement(child, _objectSpread({
          index: i,
          onToggleIsOpen: _this2.props.onStepToggleIsOpen,
          stepNumber: i + 1
        }, child.props));
      }));
      return this.props.isCard ? React.createElement("section", {
        className: "slds-card"
      }, React.createElement("header", {
        className: "slds-theme_shade slds-p-around_medium slds-m-bottom_small"
      }, this.props.progressBar), steps) : React.createElement(React.Fragment, null, steps);
    }
  }]);

  return SetupAssistant;
}(React.Component);

SetupAssistant.displayName = SETUP_ASSISTANT;
SetupAssistant.propTypes = propTypes;
SetupAssistant.defaultProps = defaultProps;
export default SetupAssistant;
//# sourceMappingURL=index.js.map