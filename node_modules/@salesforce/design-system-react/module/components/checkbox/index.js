function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
// # Checkbox Component
// Implements the [Checkbox design pattern](https://www.lightningdesignsystem.com/components/forms/#checkbox) in React.
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid'; // ### Event Helpers

import KEYS from '../../utilities/key-code';
import EventUtil from '../../utilities/event'; // This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)

import checkProps from './check-props';
import componentDoc from './component.json';
import { CHECKBOX } from '../../utilities/constants';
import Icon from '../icon';
import getAriaProps from '../../utilities/get-aria-props';
var propTypes = {
  /**
   * An HTML ID that is shared with ARIA-supported devices with the
   * `aria-controls` attribute in order to relate the input with
   * another region of the page. An example would be a select box
   * that shows or hides a panel.
   */
  'aria-controls': PropTypes.string,

  /**
   * The `aria-describedby` attribute is used to indicate the IDs of the elements that describe the object. It is used to establish a relationship between widgets or groups and text that described them. This is very similar to aria-labelledby: a label describes the essence of an object, while a description provides more information that the user might need.
   */
  'aria-describedby': PropTypes.string,

  /**
   * The aria-labelledby attribute establishes relationships between objects and their label(s), and its value should be one or more element IDs, which refer to elements that have the text needed for labeling. List multiple element IDs in a space delimited fashion.
   */
  'aria-labelledby': PropTypes.string,

  /**
   * `aria-owns` indicate that an element depends on the current one when the relation can't be determined by the hierarchy structure.
   */
  'aria-owns': PropTypes.string,

  /**
   * The `aria-required` attribute is used to indicate that user input is required on an element before a form can be submitted.
   */
  'aria-required': PropTypes.bool,

  /**
   * **Assistive text for accessibility**
   * This object is merged with the default props object on every render.
   * * `heading`: This is used as a visually hidden label if, no `labels.heading` is provided.
   * * `label`: This is used as a visually hidden label if, no `labels.label` is provided.
   */
  assistiveText: PropTypes.shape({
    heading: PropTypes.string,
    label: PropTypes.string
  }),

  /**
   * The Checkbox should be a controlled component, and will always be in the state specified. If checked is not defined, the state of the uncontrolled native `input` component will be used.
   */
  checked: PropTypes.bool,

  /**
   * This is the initial value of an uncontrolled form element and is present only
   * to provide compatibility with hybrid framework applications that are not
   * entirely React. It should only be used in an application without centralized
   * state (Redux, Flux). "Controlled components" with centralized state is highly recommended. See [Code Overview](https://github.com/salesforce/design-system-react/blob/master/docs/codebase-overview.md#controlled-and-uncontrolled-components) for more information.
   */
  defaultChecked: PropTypes.bool,

  /**
   * Class names to be added to the outer container of the Checkbox.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Disables the Checkbox and prevents clicking it.
   */
  disabled: PropTypes.bool,

  /**
   * Message to display when the Checkbox is in an error state. When this is present, also visually highlights the component as in error.
   */
  errorText: PropTypes.string,

  /**
   * A unique ID is needed in order to support keyboard navigation and ARIA support. This ID is added to the `input` element
   */
  id: PropTypes.string,

  /**
   * The Checkbox will be indeterminate if its state can not be figured out or is partially checked. Once a checkbox is indeterminate, a click should cause it to be checked. Since a user cannot put a checkbox into an indeterminate state, it is assumed you are controlling the value of `checked` with the parent, also, and that this is a controlled component. **Note:** `indeterminate` proptype does nothing in the `toggle` variant, as [SLDS does not support it](https://lightningdesignsystem.com/components/forms/#flavor-checkbox-toggle-checkbox-toggle).
   */
  indeterminate: PropTypes.bool,

  /**
   * **Text labels for internationalization**
   * This object is merged with the default props object on every render.
   * * `heading`: Heading for the visual picker variant
   * * `label`: Label for the _enabled_ state of the Toggle variant. Defaults to "Enabled".
   * * `toggleDisabled`: Label for the _disabled_ state of the Toggle variant. Defaults to "Disabled". Note that this uses SLDS language, and meaning, of "Enabled" and "Disabled"; referring to the state of whatever the checkbox is _toggling_, not whether the checkbox itself is enabled or disabled.
   * * `toggleEnabled`: Label for the _enabled_ state of the Toggle variant. Defaults to "Enabled".
   */
  labels: PropTypes.shape({
    heading: PropTypes.string,
    label: PropTypes.string,
    toggleDisabled: PropTypes.string,
    toggleEnabled: PropTypes.string
  }),

  /**
   * Name of the submitted form parameter.
   */
  name: PropTypes.string,

  /**
   * This event fires when the Checkbox looses focus. It passes in `{ event }`.
   */
  onBlur: PropTypes.func,

  /**
   * This event fires when the Checkbox changes. Passes in `event, { checked }`. This used to be `checked, event, { checked }`.
   */
  onChange: PropTypes.func,

  /**
   * This event fires when the Checkbox is focused. It passes in `{ event }`.
   */
  onFocus: PropTypes.func,

  /**
   * This event fires when a key is pressed down. It passes in `{ event }`.
   */
  onKeyDown: PropTypes.func,

  /**
   * This event fires when a character is typed. See [this article](http://www.bloggingdeveloper.com/post/KeyPress-KeyDown-KeyUp-The-Difference-Between-Javascript-Key-Events.aspx) for more information. It passes in `{ event }`.
   */
  onKeyPress: PropTypes.func,

  /**
   * This event fires when a pressed key is released. It passes in `{ event }`.
   */
  onKeyUp: PropTypes.func,

  /**
   * Displays the value of the input, but does not allow changes.
   */
  readOnly: PropTypes.bool,

  /**
   * Highlights the Checkbox as a required field (does not perform any validation).
   */
  required: PropTypes.bool,

  /**
   * The aria-role of the checkbox.
   */
  role: PropTypes.string,

  /**
   * Which UX pattern of checkbox? The default is `base` while other option is `toggle`. (**Note:** `toggle` variant does not support the `indeterminate` feature, because [SLDS does not support it](https://lightningdesignsystem.com/components/forms/#flavor-checkbox-toggle-checkbox-toggle).)
   */
  variant: PropTypes.oneOf(['base', 'toggle', 'button-group', 'visual-picker']),

  /**
   * Determines whether visual picker is coverable when selected (only for visual picker variant)
   */
  coverable: PropTypes.bool,

  /**
   * Determines whether the visual picker should be vertical or horizontal (only for visual picker variant)
   */
  vertical: PropTypes.bool,

  /**
   * Allows icon to shown with checkbox (only for non-coverable visual picker variant)
   */
  onRenderVisualPicker: PropTypes.func,

  /**
   * Allows icon to shown if checkbox is not selected (only for visual picker variant)
   */
  onRenderVisualPickerSelected: PropTypes.func,

  /**
   * Allows icon to shown if checkbox is not selected (only for visual picker variant)
   */
  onRenderVisualPickerNotSelected: PropTypes.func,

  /**
   * Size of checkbox in case of visual composer variant
   */
  size: PropTypes.oneOf(['medium', 'large'])
};
var defaultProps = {
  assistiveText: {},
  labels: {
    toggleDisabled: 'Disabled',
    toggleEnabled: 'Enabled'
  },
  variant: 'base'
};
/**
 * The ability to style checkboxes with CSS varies across browsers. Using this component ensures checkboxes look the same everywhere.
 */

var Checkbox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox(_props) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "getId", function () {
      return _this.props.id || _this.generatedId;
    });

    _defineProperty(_assertThisInitialized(_this), "getErrorId", function () {
      return _this.props.errorText ? "".concat(_this.getId(), "-error-text") : undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "getAriaDescribedBy", function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$idArray = _ref.idArray,
          idArray = _ref$idArray === void 0 ? [] : _ref$idArray;

      return idArray.concat(_this.props['aria-describedby'], _this.getErrorId()).filter(Boolean).join(' ') || undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var _this$props = _this.props,
          checked = _this$props.checked,
          indeterminate = _this$props.indeterminate,
          onChange = _this$props.onChange;

      if (typeof onChange === 'function') {
        // `target.checked` is present twice to maintain backwards compatibility. Please remove first parameter `value` on the next breaking change or when `forms/checkbox` is removed.
        if (_this.props.oldEventParameterOrder) {
          onChange(event.target.checked, event, {
            checked: indeterminate ? true : !checked,
            indeterminate: false
          });
        } else {
          // NEW API
          onChange(event, {
            checked: indeterminate ? true : !checked,
            indeterminate: false
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (event.keyCode) {
        if (event.keyCode === KEYS.ENTER || event.keyCode === KEYS.SPACE) {
          EventUtil.trapImmediate(event);

          _this.handleChange(event);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderButtonGroupVariant", function (props, ariaProps, assistiveText, labels) {
      return React.createElement("span", {
        className: "slds-button slds-checkbox_button"
      }, React.createElement("input", _extends({
        disabled: props.disabled
        /* A form element should not have both checked and defaultChecked props. */

      }, props.checked !== undefined ? {
        checked: props.checked
      } : {
        defaultChecked: props.defaultChecked
      }, {
        id: _this.getId(),
        name: props.name,
        onBlur: props.onBlur,
        onChange: _this.handleChange,
        onFocus: props.onFocus,
        onKeyDown: props.onKeyDown,
        onKeyPress: props.onKeyPress,
        onKeyUp: props.onKeyUp,
        ref: function ref(component) {
          _this.input = component;
        },
        role: props.role,
        required: props.required,
        type: "checkbox"
      }, ariaProps, {
        "aria-describedby": _this.getAriaDescribedBy()
      })), React.createElement("label", {
        className: "slds-checkbox_button__label",
        htmlFor: _this.getId()
      }, React.createElement("span", {
        className: "slds-checkbox_faux"
      }, labels.label), assistiveText.label ? React.createElement("span", {
        className: "slds-assistive-text"
      }, assistiveText.label) : null));
    });

    _defineProperty(_assertThisInitialized(_this), "renderBaseVariant", function (props, ariaProps, assistiveText, labels) {
      return React.createElement("div", {
        className: classNames('slds-form-element', {
          'is-required': props.required,
          'slds-has-error': props.errorText
        }, props.className)
      }, React.createElement("div", {
        className: "slds-form-element__control"
      }, React.createElement("span", {
        className: "slds-checkbox"
      }, props.required ? React.createElement("abbr", {
        className: "slds-required",
        title: "required"
      }, '*') : null, React.createElement("input", _extends({
        disabled: props.disabled
        /* A form element should not have both checked and defaultChecked props. */

      }, props.checked !== undefined ? {
        checked: props.checked
      } : {
        defaultChecked: props.defaultChecked
      }, {
        id: _this.getId(),
        name: props.name,
        onBlur: props.onBlur,
        onChange: _this.handleChange,
        onFocus: props.onFocus,
        onKeyDown: props.onKeyDown,
        onKeyPress: props.onKeyPress,
        onKeyUp: props.onKeyUp,
        ref: function ref(component) {
          if (component) {
            // eslint-disable-next-line no-param-reassign
            component.indeterminate = props.indeterminate;
          }

          _this.input = component;
        },
        role: props.role,
        required: props.required,
        type: "checkbox"
      }, ariaProps, {
        "aria-describedby": _this.getAriaDescribedBy()
      })), React.createElement("label", {
        className: "slds-checkbox__label",
        htmlFor: _this.getId(),
        id: props.labelId
      }, React.createElement("span", {
        className: "slds-checkbox_faux"
      }), labels.label ? React.createElement("span", {
        className: "slds-form-element__label"
      }, labels.label) : null, assistiveText.label ? React.createElement("span", {
        className: "slds-assistive-text"
      }, assistiveText.label) : null))), props.errorText ? React.createElement("div", {
        className: "slds-form-element__help",
        id: _this.getErrorId()
      }, props.errorText) : null);
    });

    _defineProperty(_assertThisInitialized(_this), "renderToggleVariant", function (props, ariaProps, assistiveText, labels) {
      return React.createElement("div", {
        className: classNames('slds-form-element', {
          'is-required': props.required,
          'slds-has-error': props.errorText
        }, props.className)
      }, React.createElement("label", {
        className: "slds-checkbox_toggle slds-grid",
        htmlFor: _this.getId()
      }, props.required ? React.createElement("abbr", {
        className: "slds-required",
        title: "required"
      }, '*') : null, labels.label ? React.createElement("span", {
        className: "slds-form-element__label slds-m-bottom_none"
      }, labels.label) : null, assistiveText.label ? React.createElement("span", {
        className: "slds-assistive-text"
      }, assistiveText.label) : null, React.createElement("input", _extends({
        disabled: props.disabled,
        id: _this.getId()
        /* A form element should not have both checked and defaultChecked props. */

      }, props.checked !== undefined ? {
        checked: props.checked
      } : {
        defaultChecked: props.defaultChecked
      }, {
        name: props.name,
        onBlur: props.onBlur,
        onChange: _this.handleChange,
        onFocus: props.onFocus,
        onKeyDown: props.onKeyDown,
        onKeyPress: props.onKeyPress,
        onKeyUp: props.onKeyUp,
        ref: function ref(component) {
          _this.input = component;
        },
        role: props.role,
        required: props.required,
        type: "checkbox"
      }, ariaProps, {
        "aria-describedby": _this.getAriaDescribedBy({
          idArray: ["".concat(_this.getId(), "-desc")]
        })
      })), React.createElement("span", {
        id: "".concat(_this.getId(), "-desc"),
        className: "slds-checkbox_faux_container",
        "aria-live": "assertive"
      }, React.createElement("span", {
        className: "slds-checkbox_faux"
      }), React.createElement("span", {
        className: "slds-checkbox_on"
      }, labels.toggleEnabled), React.createElement("span", {
        className: "slds-checkbox_off"
      }, labels.toggleDisabled))), props.errorText ? React.createElement("div", {
        className: "slds-form-element__help",
        id: _this.getErrorId()
      }, props.errorText) : null);
    });

    _defineProperty(_assertThisInitialized(_this), "renderVisualPickerVariant", function (props, ariaProps, assistiveText) {
      return React.createElement("span", {
        className: classNames('slds-visual-picker', "slds-visual-picker_".concat(_this.props.size), _this.props.vertical ? 'slds-visual-picker_vertical' : null)
      }, React.createElement("input", _extends({
        disabled: props.disabled
        /* A form element should not have both checked and defaultChecked props. */

      }, props.checked !== undefined ? {
        checked: props.checked
      } : {
        defaultChecked: props.defaultChecked
      }, {
        id: _this.getId(),
        name: props.name,
        onBlur: props.onBlur,
        onChange: _this.handleChange,
        onFocus: props.onFocus,
        onKeyDown: props.onKeyDown,
        onKeyPress: props.onKeyPress,
        onKeyUp: props.onKeyUp,
        ref: function ref(component) {
          _this.input = component;
        },
        role: props.role,
        required: props.required,
        type: "checkbox"
      }, ariaProps, {
        "aria-describedby": _this.getAriaDescribedBy()
      })), React.createElement("label", {
        className: "slds-checkbox_button__label",
        htmlFor: _this.getId()
      }, _this.props.coverable ? React.createElement("div", {
        className: "slds-visual-picker__figure slds-visual-picker__icon slds-align_absolute-center"
      }, React.createElement("span", {
        className: "slds-is-selected"
      }, _this.props.onRenderVisualPickerSelected()), React.createElement("span", {
        className: "slds-is-not-selected"
      }, _this.props.onRenderVisualPickerNotSelected())) : React.createElement("span", {
        className: "slds-visual-picker__figure slds-visual-picker__text slds-align_absolute-center"
      }, _this.props.onRenderVisualPicker()), !_this.props.vertical ? React.createElement("span", {
        className: "slds-visual-picker__body"
      }, _this.props.labels.heading ? React.createElement("span", {
        className: "slds-text-heading_small"
      }, _this.props.labels.heading) : null, React.createElement("span", {
        className: "slds-text-title"
      }, _this.props.labels.label), assistiveText.label || assistiveText.heading ? React.createElement("span", {
        className: "slds-assistive-text"
      }, assistiveText.label || assistiveText.heading) : null) : null, !_this.props.coverable ? React.createElement("span", {
        className: "slds-icon_container slds-visual-picker__text-check"
      }, React.createElement(Icon, {
        assistiveText: _this.props.assistiveText,
        category: "utility",
        name: "check",
        colorVariant: "base",
        size: "x-small"
      })) : null));
    });

    checkProps(CHECKBOX, _this.props, componentDoc);
    _this.generatedId = shortid.generate();
    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var ariaProps = getAriaProps(this.props);

      if (this.props.variant === 'toggle') {
        ariaProps['aria-describedby'] = "".concat(this.getId(), "-desc");
      }

      var assistiveText = _objectSpread({}, defaultProps.assistiveText, typeof this.props.assistiveText === 'string' ? {
        label: this.props.assistiveText
      } : {}, _typeof(this.props.assistiveText) === 'object' ? this.props.assistiveText : {});

      var labels = _objectSpread({}, defaultProps.labels, this.props.label ? {
        label: this.props.label
      } : {}, this.props.labels);

      var subRenders = {
        base: this.renderBaseVariant,
        'button-group': this.renderButtonGroupVariant,
        toggle: this.renderToggleVariant,
        'visual-picker': this.renderVisualPickerVariant
      };
      var variantExists = subRenders[this.props.variant];
      return variantExists ? subRenders[this.props.variant](this.props, ariaProps, assistiveText, labels) : subRenders.base(this.props, ariaProps, assistiveText, labels);
    }
  }]);

  return Checkbox;
}(React.Component);

Checkbox.displayName = CHECKBOX;
Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
export default Checkbox;
//# sourceMappingURL=index.js.map