function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
// # Inline Edit Component
// Implements an inline edit component based on the [Input design pattern](https://www.lightningdesignsystem.com/components/forms/#input) in React.
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### isFunction

import isFunction from 'lodash.isfunction'; // ## Children

import Button from '../../button';
import Input from '../../input/index';
import InputIcon from '../../icon/input-icon'; // ### Event Helpers

import KEYS from '../../../utilities/key-code'; // This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)

import checkProps from './inline-check-props'; // ## Constants

import { FORMS_INLINE_EDIT } from '../../../utilities/constants'; // ### Prop Types

var propTypes = {
  /**
   * Class names to be added to the outer container of the input.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Name of the submitted form parameter.
   */
  name: PropTypes.string,

  /**
   * Disables the Inline Edit component and prevents editing the contents.
   */
  disabled: PropTypes.bool,

  /**
   * Every Inline Edit component must have a unique ID in order to support keyboard navigation and ARIA support.
   */
  id: PropTypes.string.isRequired,

  /**
   * This event fires when the input changes.
   */
  onChange: PropTypes.func,

  /**
   * Function will run when keyup during text edit
   */
  onKeyUp: PropTypes.func,

  /**
   * Function will run when we enter edit mode
   */
  onEnterEditMode: PropTypes.func,

  /**
   * Function will run when we leave edit mode
   */
  onLeaveEditMode: PropTypes.func,

  /**
   * Typically an Inline Edit component will be of the type text, but like the Input element it includes support for all HTML5 types.
   */
  type: PropTypes.oneOf(['text', 'password', 'datetime', 'datetime-local', 'date', 'month', 'time', 'week', 'number', 'email', 'url', 'search', 'tel', 'color']),

  /**
   * Inline Edit is a controlled component, and will always display this value.
   */
  value: PropTypes.string.isRequired
};
var defaultProps = {
  assistiveText: 'Edit text',
  type: 'text'
};
/**
 * An inline input is rendered as a label by default. When clicked (or tabbed in), it's rendered as an input. When the focus is lost, the current input value is saved and the input is rendered as a label again.
 */

var InlineEdit =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InlineEdit, _React$Component);

  function InlineEdit(props) {
    var _this;

    _classCallCheck(this, InlineEdit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InlineEdit).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "endEditMode", function (option) {
      if (_this.willSave) {
        clearTimeout(_this.willSave); // eslint-disable-next-line fp/no-delete

        delete _this.willSave;
      }

      _this.setState({
        isEditing: false,
        value: null
      });

      if (_this.props.onLeaveEditMode && isFunction(_this.props.onLeaveEditMode)) {
        _this.props.onLeaveEditMode(undefined, option);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      if (!_this.willSave) {
        _this.willSave = setTimeout(_this.saveEdits, 200);
      }

      if (_this.props.onLeaveEditMode && isFunction(_this.props.onLeaveEditMode)) {
        _this.props.onLeaveEditMode();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState({
        value: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (event.keyCode) {
        if (event.keyCode === KEYS.ESCAPE) {
          _this.saveEdits({
            cancel: true
          });
        } else if (event.keyCode === KEYS.ENTER) {
          _this.saveEdits();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyUp", function (event) {
      if (event.keyCode) {
        if (_this.props.onKeyUp && isFunction(_this.props.onKeyUp)) {
          _this.props.onKeyUp(event, {
            value: _this.state.value
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "saveEdits", function (option) {
      if (!(option && option.cancel === true)) {
        if (isFunction(_this.props.onChange)) {
          _this.props.onChange({
            value: _this.state.value
          });
        }
      }

      _this.endEditMode(option);
    });

    _defineProperty(_assertThisInitialized(_this), "triggerEditMode", function () {
      if (!_this.props.disabled) {
        _this.autoFocus = true;

        _this.setState({
          isEditing: true,
          value: _this.props.value
        });

        if (isFunction(_this.props.onEnterEditMode)) {
          _this.props.onEnterEditMode();
        }
      }
    });

    _this.state = {
      isEditing: false,
      value: null
    };
    checkProps(FORMS_INLINE_EDIT, props);
    return _this;
  }

  _createClass(InlineEdit, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.autoFocus) {
        if (this.inputNode) {
          this.inputNode.focus();
          this.inputNode.select();
        }

        this.autoFocus = false;
      }
    }
  }, {
    key: "render",
    // ### Render
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          assistiveText = _this$props.assistiveText,
          disabled = _this$props.disabled,
          value = _this$props.value,
          name = _this$props.name,
          rest = _objectWithoutProperties(_this$props, ["assistiveText", "disabled", "value", "name"]);

      return React.createElement(Input, _extends({}, rest, {
        iconRight: this.state.isEditing ? React.createElement(InputIcon, {
          category: "utility",
          name: "close",
          position: "right",
          onClick: this.endEditMode,
          tabIndex: "-1"
        }) : null,
        disabled: disabled,
        inlineEditTrigger: React.createElement(Button, {
          assistiveText: {
            icon: assistiveText
          },
          className: "slds-m-left_x-small",
          disabled: disabled,
          iconCategory: "utility",
          iconName: "edit",
          iconPosition: "right",
          iconSize: "small",
          variant: "icon"
        }),
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        onClick: !this.state.isEditing ? this.triggerEditMode : null,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        isStatic: !this.state.isEditing,
        name: name,
        value: this.state.isEditing ? this.state.value : value,
        inputRef: function inputRef(input) {
          _this2.inputNode = input;
        }
      }));
    }
  }]);

  return InlineEdit;
}(React.Component);

InlineEdit.displayName = FORMS_INLINE_EDIT;
InlineEdit.propTypes = propTypes;
InlineEdit.defaultProps = defaultProps;
export default InlineEdit;
//# sourceMappingURL=inline.js.map