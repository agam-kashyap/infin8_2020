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

/* eslint-disable max-lines */

/* eslint-disable react/sort-comp */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import shortid from 'shortid';
import assign from 'lodash.assign';
import checkProps from './check-props';
import CustomColor from './private/custom-color';
import Swatch from './private/swatch';
import SwatchPicker from './private/swatch-picker';
import Button from '../button';
import Input from '../input';
import Tabs from '../tabs';
import TabsPanel from '../tabs/panel';
import Popover from '../popover';
import ColorUtils from '../../utilities/color';
import { COLOR_PICKER } from '../../utilities/constants';
import componentDoc from './component.json';
var propTypes = {
  /**
   * **Assistive text for accessibility**
   * * `label`: Visually hidden label but read out loud by screen readers.
   * * `hueSlider`: Instructions for hue selection input
   * * `saturationValueGrid`: Instructions for using the grid for saturation
   * and value selection
   */
  assistiveText: PropTypes.shape({
    label: PropTypes.string,
    hueSlider: PropTypes.string,
    saturationValueGrid: PropTypes.string
  }),

  /**
   * CSS classes to be added to tag with `.slds-color-picker`. Uses `classNames` [API](https://github.com/JedWatson/classnames). _Tested with snapshot testing._
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * CSS classes to be added to tag with `.slds-popover`. Uses `classNames` [API](https://github.com/JedWatson/classnames). _Tested with snapshot testing._
   */
  classNameMenu: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Unique ID for component.
   */
  id: PropTypes.string,

  /**
   * Disables the input and button.
   */
  disabled: PropTypes.bool,

  /**
   * Message to display when the outer input is in an error state. When this is present, also visually highlights the component as in error.
   */
  errorText: PropTypes.string,

  /**
   * Message to display when the custom tab input is in an error state. When this is present, also visually highlights the component as in error.
   */
  errorTextWorkingColor: PropTypes.string,

  /**
   * Event Callbacks
   * * `onChange`: This function is triggered when done is clicked. This function returns `{event, { color: [string] }}`, which is a hex representation of the color.
   * * `onClose`: This function is triggered when the menu is closed. This function returns `{event, { trigger, componentWillUnmount }}`. Trigger can have the values `cancel`, `clickOutside`, or `newPopover`.
   * * `onOpen`: This function is triggered when the color-picker menu is mounted and added to the DOM. The parameters are `event, { portal: }`. `portal` can be used as a React tree root node.
   * * `onRequestClose`:  This function is triggered when the user clicks outside the menu or clicks the close button. You will want to define this if color-picker is to be a controlled component. Most of the time you will want to set `isOpen` to `false` when this is triggered unless you need to validate something.
   * 						This function returns `{event, {trigger: [string]}}` where `trigger` is either `cancel` or `clickOutside`.
   * * `onRequestOpen`: Function called when the color-picker menu would like show.
   * * `onValidateColor`: Function that overwrites default color validator and called when validating HEX color on outer input change. If callback returns false, errorText is shown if set.
   * * `onValidateWorkingColor`: Function that overwrites default color validator and called when validating HEX color on custom tab inner input change. If callback returns false, errorTextWorkingColor is shown if set.
   * * `onWorkingColorChange`: This function is triggered when working color changes (color inside the custom tab). This function returns `{event, { color: [string] }}`, which is a hex representation of the color.
   * _Tested with Mocha framework._
   */
  events: PropTypes.shape({
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    onRequestClose: PropTypes.func,
    onRequestOpen: PropTypes.func,
    onValidateColor: PropTypes.func,
    onValidateWorkingColor: PropTypes.func,
    onWorkingColorChange: PropTypes.func
  }),

  /**
   * By default, dialogs will flip their alignment (such as bottom to top) if they extend beyond a boundary element such as a scrolling parent or a window/viewpoint. `hasStaticAlignment` disables this behavior and allows this component to extend beyond boundary elements. _Not tested._
   */
  hasStaticAlignment: PropTypes.bool,

  /**
   * Hides the text input
   */
  hideInput: PropTypes.bool,

  /**
   * Popover open state
   */
  isOpen: PropTypes.bool,

  /**
   * **Text labels for internationalization**
   * * `blueAbbreviated`: One letter abbreviation of blue color component
   * * `cancelButton`: Text for cancel button on popover
   * * `customTab`: Text for custom tab of popover
   * * `customTabActiveWorkingColorSwatch`: Label for custom tab active working color swatch
   * * `customTabTransparentSwatch`: Label for custom tab active transparent swatch
   * * `greenAbbreviated`: One letter abbreviation of green color component
   * * `hexLabel`: Label for input of hexadecimal color
   * * `invalidColor`: Error message when hex color input is invalid
   * * `invalidComponent`: Error message when a component input is invalid
   * * `label`: An `input` label as for a `form`
   * * `redAbbreviated`: One letter abbreviation of red color component
   * * `swatchTab`: Label for swatch tab of popover
   * * `submitButton`: Text for submit/done button of popover
   */
  labels: PropTypes.shape({
    blueAbbreviated: PropTypes.string,
    cancelButton: PropTypes.string,
    customTab: PropTypes.string,
    customTabActiveWorkingColorSwatch: PropTypes.string,
    customTabTransparentSwatch: PropTypes.string,
    greenAbbreviated: PropTypes.string,
    hexLabel: PropTypes.string,
    invalidColor: PropTypes.string,
    invalidComponent: PropTypes.string,
    label: PropTypes.string,
    redAbbreviated: PropTypes.string,
    swatchTab: PropTypes.string,
    swatchTabTransparentSwatch: PropTypes.string,
    submitButton: PropTypes.string
  }),

  /**
   * Please select one of the following:
   * * `absolute` - (default) The dialog will use `position: absolute` and style attributes to position itself. This allows inverted placement or flipping of the dialog.
   * * `overflowBoundaryElement` - The dialog will overflow scrolling parents. Use on elements that are aligned to the left or right of their target and don't care about the target being within a scrolling parent. Typically this is a popover or tooltip. Dropdown menus can usually open up and down if no room exists. In order to achieve this a portal element will be created and attached to `body`. This element will render into that detached render tree.
   * * `relative` - No styling or portals will be used. Menus will be positioned relative to their triggers. This is a great choice for HTML snapshot testing.
   */
  menuPosition: PropTypes.oneOf(['absolute', 'overflowBoundaryElement', 'relative']),

  /**
   * An array of hex color values which is used to set the options of the
   * swatch tab of the colorpicker popover.
   * To specify transparent, use empty string as a value.
   */
  swatchColors: PropTypes.arrayOf(PropTypes.string),

  /**
   * Determines which tab is visible when dialog opens. Use this prop with `base` variant only.
   * Defaults to `swatch` tab.
   */
  defaultSelectedTab: PropTypes.oneOf(['swatches', 'custom']),

  /**
   * Selects which tabs are present for the colorpicker.
   * * `base`: both swatches and custom tabs are present
   * * `swatches`: only swatch tab is present
   * * `custom`: only custom tab is present
   * _Tested with snapshot testing._
   */
  variant: PropTypes.oneOf(['base', 'swatches', 'custom']),

  /**
   * Current color in hexadecimal string, including # sign (eg: "#000000")
   */
  value: PropTypes.string,

  /**
   * Current working color in hexadecimal string, including # sign (eg: "#000000")
   */
  valueWorking: PropTypes.string
};
var defaultProps = {
  assistiveText: {
    saturationValueGrid: 'Use arrow keys to select a saturation and brightness, on an x and y axis.',
    hueSlider: 'Select Hue'
  },
  events: {},
  labels: {
    blueAbbreviated: 'B',
    cancelButton: 'Cancel',
    customTab: 'Custom',
    customTabActiveWorkingColorSwatch: 'Working Color',
    customTabTransparentSwatch: 'Transparent Swatch',
    greenAbbreviated: 'G',
    hexLabel: 'Hex',
    invalidColor: 'The color entered is invalid',
    invalidComponent: 'The value needs to be an integer from 0-255',
    redAbbreviated: 'R',
    submitButton: 'Done',
    swatchTab: 'Default',
    swatchTabTransparentSwatch: 'Transparent Swatch'
  },
  menuPosition: 'absolute',
  swatchColors: ['#e3abec', '#c2dbf7', '#9fd6ff', '#9de7da', '#9df0c0', '#fff099', '#fed49a', '#d073e0', '#86baf3', '#5ebbff', '#44d8be', '#3be282', '#ffe654', '#ffb758', '#bd35bd', '#5779c1', '#5679c0', '#00aea9', '#3cba4c', '#f5bc25', '#f99221', '#580d8c', '#001970', '#0a2399', '#0b7477', '#0b6b50', '#b67e11', '#b85d0d', ''],
  defaultSelectedTab: 'swatches',
  variant: 'base'
};
/**
 * The Unified Color Picker component allows for a fully accessible and configurable color picker, allowing the user to pick from a set of predefined colors (swatches), or to pick a custom color using a HSB selection interface. It can be configured to show one or both of those color selection interfaces. View [component blueprint guidelines](https://lightningdesignsystem.com/components/color-picker/).
 */

var ColorPicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ColorPicker, _React$Component);

  function ColorPicker(props) {
    var _this;

    _classCallCheck(this, ColorPicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColorPicker).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleSwatchChange", function (event) {
      _this.setWorkingColor(event, {
        hex: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnRequestClose", function (event, _ref) {
      var trigger = _ref.trigger;

      if (trigger === 'clickOutside' || trigger === 'cancel') {
        _this.handleCancelState();
      }

      if (_this.props.onRequestClose) {
        _this.props.onRequestClose(event, {
          trigger: trigger
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (event) {
      _this.handleCancelButtonClick(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function (event) {
      _this.handleCancelState();

      if (_this.props.onRequestClose) {
        _this.props.onRequestClose(event, {
          trigger: 'cancel'
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancelState", function () {
      var workingColor = ColorUtils.getNewColor({
        // eslint-disable-next-line react/no-access-state-in-setstate
        hex: _this.state.currentColor
      }, _this.props.events.onValidateWorkingColor);

      _this.setState({
        isOpen: false,
        workingColor: workingColor,
        previousWorkingColor: workingColor
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleHexInputChange", function (event, _ref2) {
      var labels = _ref2.labels;
      var currentColor = event.target.value;
      var namedColorHex = ColorUtils.getHexFromNamedColor(currentColor);
      var isValid = false;

      if (_this.props.events.onValidateColor) {
        isValid = _this.props.events.onValidateColor(currentColor);
      } else {
        isValid = namedColorHex ? true : ColorUtils.isValidHex(currentColor);
      }

      _this.setState({
        currentColor: currentColor,
        workingColor: ColorUtils.getNewColor({
          hex: namedColorHex || currentColor,
          name: namedColorHex ? currentColor.toLowerCase() : null
        }, _this.props.events.onValidateWorkingColor),
        colorErrorMessage: isValid ? '' : labels.invalidColor
      });

      if (_this.props.events.onChange) {
        _this.props.events.onChange(event, {
          color: currentColor,
          isValid: isValid
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSaturationValueChange", function (event, _ref3) {
      var saturation = _ref3.saturation,
          value = _ref3.value;

      _this.setWorkingColor(event, {
        saturation: saturation,
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmitButtonClick", function (event) {
      _this.setState({
        isOpen: false,
        // eslint-disable-next-line react/no-access-state-in-setstate
        currentColor: _this.state.workingColor.hex,
        colorErrorMessage: ''
      });

      if (_this.props.events.onChange) {
        _this.props.events.onChange(event, {
          color: _this.state.workingColor.hex,
          isValid: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSwatchButtonClick", function () {
      var workingColor = ColorUtils.getNewColor({
        // eslint-disable-next-line react/no-access-state-in-setstate
        hex: _this.state.workingColor.hex
      }, _this.props.events.onValidateWorkingColor);

      _this.setState({
        // eslint-disable-next-line react/no-access-state-in-setstate
        isOpen: !_this.state.isOpen,
        workingColor: workingColor,
        // eslint-disable-next-line react/no-access-state-in-setstate
        previousWorkingColor: _this.state.previousWorkingColor
      });

      if (_this.props.onRequestOpen) {
        _this.props.onRequestOpen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSwatchSelect", function (event, _ref4) {
      var hex = _ref4.hex;

      _this.setWorkingColor(event, {
        hex: hex
      });
    });

    _this.generatedId = props.id || shortid.generate();

    var _workingColor = ColorUtils.getNewColor({
      hex: props.valueWorking || props.value
    }, props.events.onValidateWorkingColor);

    _this.state = {
      currentColor: props.value != null ? props.value : '',
      disabled: props.disabled,
      isOpen: props.isOpen,
      workingColor: _workingColor,
      previousWorkingColor: _workingColor,
      colorErrorMessage: props.errorText
    };
    checkProps(COLOR_PICKER, props, componentDoc);
    return _this;
  }

  _createClass(ColorPicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // The following are only present to allow props to update the state if they get out of sync (for instance, the external store is updated).
      var nextState = {};

      if (this.props.value !== prevProps.value) {
        nextState.currentColor = this.props.value;
      }

      if (this.props.valueWorking !== prevProps.valueWorking) {
        nextState.workingColor = ColorUtils.getNewColor({
          hex: this.props.valueWorking
        }, this.props.events.onValidateWorkingColor);
      }

      if (this.props.disabled !== prevProps.disabled) {
        nextState.disabled = this.props.disabled;
      }

      if (Object.entries(nextState).length !== 0) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState(nextState);
      }
    }
  }, {
    key: "getInput",
    value: function getInput(_ref5) {
      var _this2 = this;

      var labels = _ref5.labels;
      return this.props.hideInput ? null : React.createElement(Input, {
        "aria-describedby": !this.state.isOpen && this.state.colorErrorMessage ? "color-picker-summary-error-".concat(this.generatedId) : undefined,
        className: classNames('slds-color-picker__summary-input', 'slds-align-top', {
          'slds-has-error': !!this.state.colorErrorMessage
        }),
        disabled: this.props.disabled,
        id: "color-picker-summary-input-".concat(this.generatedId),
        onChange: function onChange(event) {
          _this2.handleHexInputChange(event, {
            labels: labels
          });
        },
        value: this.state.currentColor
      });
    }
  }, {
    key: "getDefaultTab",
    value: function getDefaultTab(_ref6) {
      var labels = _ref6.labels;
      return (this.props.variant === 'base' || this.props.variant === 'swatches') && React.createElement(TabsPanel, {
        label: labels.swatchTab
      }, React.createElement(SwatchPicker, {
        color: this.state.workingColor,
        labels: labels,
        onSelect: this.handleSwatchSelect,
        swatchColors: this.props.swatchColors
      }));
    }
  }, {
    key: "getCustomTab",
    value: function getCustomTab(_ref7) {
      var labels = _ref7.labels;
      return (this.props.variant === 'base' || this.props.variant === 'custom') && React.createElement(TabsPanel, {
        label: labels.customTab
      }, React.createElement(CustomColor, {
        assistiveText: this.props.assistiveText,
        id: this.generatedId,
        color: this.state.workingColor,
        errorTextWorkingColor: this.props.errorTextWorkingColor,
        previousColor: this.state.previousWorkingColor,
        labels: labels,
        onBlueChange: this.handleColorChange('blue'),
        onGreenChange: this.handleColorChange('green'),
        onHexChange: this.handleColorChange('hex'),
        onHueChange: this.handleColorChange('hue'),
        onRedChange: this.handleColorChange('red'),
        onSwatchChange: this.handleSwatchChange,
        onSaturationValueChange: this.handleSaturationValueChange,
        onSaturationNavigate: this.handleNavigate('saturation'),
        onValueNavigate: this.handleNavigate('value')
      }));
    }
  }, {
    key: "getPopover",
    value: function getPopover(_ref8) {
      var labels = _ref8.labels;
      var popoverBody = React.createElement(Tabs, {
        id: "color-picker-tabs-".concat(this.generatedId),
        defaultSelectedIndex: this.props.defaultSelectedTab === 'custom' ? 1 : 0
      }, this.getDefaultTab({
        labels: labels
      }), this.getCustomTab({
        labels: labels
      }));
      var popoverFooter = React.createElement("div", {
        className: "slds-color-picker__selector-footer"
      }, React.createElement(Button, {
        className: "slds-color-picker__selector-cancel",
        id: "color-picker-footer-cancel-".concat(this.generatedId),
        label: labels.cancelButton,
        onClick: this.handleCancel,
        variant: "neutral"
      }), React.createElement(Button, {
        className: "slds-color-picker__selector-submit",
        disabled: Object.keys(this.state.workingColor.errors || {}).length > 0,
        id: "color-picker-footer-submit-".concat(this.generatedId),
        label: labels.submitButton,
        onClick: this.handleSubmitButtonClick,
        variant: "brand"
      }));
      return React.createElement(Popover, {
        ariaLabelledby: "color-picker-label-".concat(this.generatedId),
        align: "bottom left",
        body: popoverBody,
        className: classNames('slds-color-picker__selector', this.props.classNameMenu),
        footer: popoverFooter,
        hasNoCloseButton: true,
        hasNoNubbin: true,
        hasStaticAlignment: this.props.hasStaticAlignment,
        id: "slds-color-picker__selector-".concat(this.generatedId),
        isOpen: this.state.isOpen,
        onClose: this.props.onClose,
        onOpen: this.props.onOpen,
        onRequestClose: this.handleOnRequestClose,
        position: this.props.menuPosition
      }, React.createElement(Button, {
        className: "slds-color-picker__summary-button",
        disabled: this.props.disabled,
        iconClassName: "slds-m-left_xx-small",
        iconPosition: "right",
        iconVariant: "more",
        id: "slds-color-picker__summary-button-".concat(this.generatedId),
        label: React.createElement(Swatch, {
          color: this.state.currentColor,
          labels: labels
        }),
        onClick: this.handleSwatchButtonClick,
        variant: "icon"
      }));
    }
  }, {
    key: "setWorkingColor",
    value: function setWorkingColor(event, color) {
      var newColor = ColorUtils.getNewColor(color, this.props.events.onValidateWorkingColor, // eslint-disable-next-line react/no-access-state-in-setstate
      this.state.workingColor);
      this.setState({
        workingColor: newColor,
        // eslint-disable-next-line react/no-access-state-in-setstate
        previousWorkingColor: this.state.workingColor
      });

      if (this.props.events.onWorkingColorChange) {
        this.props.events.onWorkingColorChange(event, {
          color: newColor
        });
      }
    }
  }, {
    key: "handleColorChange",
    value: function handleColorChange(property) {
      var _this3 = this;

      return function (event) {
        var colorProperties = {};
        colorProperties[property] = event.target.value;

        _this3.setWorkingColor(event, colorProperties);
      };
    }
  }, {
    key: "handleNavigate",
    value: function handleNavigate(property) {
      var _this4 = this;

      return function (event, _ref9) {
        var delta = _ref9.delta;
        var colorProperties = {};
        colorProperties[property] = delta;
        var newColor = ColorUtils.getDeltaColor(colorProperties, _this4.props.events.onValidateWorkingColor, // eslint-disable-next-line react/no-access-state-in-setstate
        _this4.state.workingColor);

        _this4.setState({
          workingColor: newColor,
          // eslint-disable-next-line react/no-access-state-in-setstate
          previousWorkingColor: _this4.state.workingColor
        });

        if (_this4.props.events.onWorkingColorChange) {
          _this4.props.events.onWorkingColorChange(event, {
            color: newColor
          });
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var labels = assign({}, defaultProps.labels, this.props.labels);
      return React.createElement("div", {
        className: classNames('slds-color-picker', this.props.className),
        ref: function ref(node) {
          _this5.wrapper = node;
        }
      }, React.createElement("div", {
        className: "slds-color-picker__summary"
      }, React.createElement("label", {
        className: classNames('slds-color-picker__summary-label', this.props.assistiveText.label ? 'slds-assistive-text' : ''),
        htmlFor: !this.props.hideInput ? "color-picker-summary-input-".concat(this.generatedId) : undefined,
        id: "color-picker-label-".concat(this.generatedId)
      }, this.props.assistiveText.label ? this.props.assistiveText.label : labels.label), this.getPopover({
        labels: labels
      }), this.getInput({
        labels: labels
      }), !this.state.isOpen && this.state.colorErrorMessage ? React.createElement("p", {
        className: "slds-form-error",
        id: "color-picker-summary-error-".concat(this.generatedId)
      }, this.state.colorErrorMessage) : ''));
    }
  }]);

  return ColorPicker;
}(React.Component);

_defineProperty(ColorPicker, "displayName", COLOR_PICKER);

_defineProperty(ColorPicker, "propTypes", propTypes);

_defineProperty(ColorPicker, "defaultProps", defaultProps);

export default ColorPicker;
//# sourceMappingURL=index.js.map