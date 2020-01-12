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

import React from 'react';
import KEYS from '../../../utilities/key-code';
import RadioButtonGroup from '../../../components/radio-button-group';
import Radio from '../../../components/radio-button-group/radio';
import ColorUtils from '../../../utilities/color';

var handleClick = function handleClick(event, rangeIndicator, _ref) {
  var onSaturationValueChange = _ref.onSaturationValueChange;
  var rect = event.currentTarget.getBoundingClientRect();
  rangeIndicator.focus();
  onSaturationValueChange(event, {
    saturation: Math.round((event.clientX - rect.left) / rect.width * 100),
    value: Math.round((rect.bottom - event.clientY) / rect.height * 100)
  });
};

var handleKeyDown = function handleKeyDown(event, _ref2) {
  var _keyDownCallbacks;

  var onSaturationNavigate = _ref2.onSaturationNavigate,
      onValueNavigate = _ref2.onValueNavigate;
  var keyDownCallbacks = (_keyDownCallbacks = {}, _defineProperty(_keyDownCallbacks, KEYS.LEFT, function (multiplier) {
    onSaturationNavigate(event, {
      delta: multiplier * -1
    });
  }), _defineProperty(_keyDownCallbacks, KEYS.RIGHT, function (multiplier) {
    onSaturationNavigate(event, {
      delta: multiplier
    });
  }), _defineProperty(_keyDownCallbacks, KEYS.UP, function (multiplier) {
    onValueNavigate(event, {
      delta: multiplier
    });
  }), _defineProperty(_keyDownCallbacks, KEYS.DOWN, function (multiplier) {
    onValueNavigate(event, {
      delta: multiplier * -1
    });
  }), _keyDownCallbacks);

  if (keyDownCallbacks[event.keyCode]) {
    event.preventDefault();
    keyDownCallbacks[event.keyCode](event.shiftKey ? 10 : 1);
  }
};

var selectedStyle = {
  border: '1px solid #9e9e9e',
  boxShadow: 'rgb(117, 112, 112) 1px 1px 1px',
  marginRight: '2px'
};
var unselectedStyle = {
  border: '1px solid #9e9e9e',
  marginRight: '2px'
};

var HsvColor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HsvColor, _React$Component);

  function HsvColor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HsvColor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HsvColor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleSwatchChange", function (event) {
      _this.setState({
        isTransparentSelected: event.target.value === ''
      });

      _this.props.onSwatchChange(event);
    });

    _defineProperty(_assertThisInitialized(_this), "isTransparent", function () {
      return _this.props.color.hex === '';
    });

    return _this;
  }

  _createClass(HsvColor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = {
        border: 'none',
        borderRadius: 'unset'
      };
      var swatchStyle = this.isTransparent() ? _objectSpread({}, unselectedStyle) : _objectSpread({}, selectedStyle);
      var transparentSwatchStyle = this.isTransparent() ? _objectSpread({}, selectedStyle) : _objectSpread({}, unselectedStyle); // when working color is transparent: either use the previous color or default to black

      var fallbackWorkingColor = this.props.previousColor.hex ? this.props.previousColor : ColorUtils.getNewColor({
        hex: '#000000'
      });
      var workingColor = this.isTransparent() ? fallbackWorkingColor : this.props.color;
      return React.createElement("div", null, React.createElement("p", {
        className: "slds-assistive-text",
        id: "color-picker-instructions-".concat(this.props.id)
      }, this.props.assistiveText.saturationValueGrid), React.createElement("div", {
        className: "slds-color-picker__custom-range",
        style: {
          background: "hsl(".concat(workingColor.hsv.hue, ", 100%, 50%)")
        },
        onClick: function onClick(event) {
          handleClick(event, _this2.rangeIndicator, {
            onSaturationValueChange: _this2.props.onSaturationValueChange
          });
        },
        role: "presentation"
      }, React.createElement("a", {
        "aria-atomic": "true",
        "aria-describedby": "color-picker-instructions-".concat(this.props.id),
        "aria-live": "assertive",
        className: "slds-color-picker__range-indicator",
        onKeyDown: function onKeyDown(event) {
          handleKeyDown(event, _objectSpread({}, _this2.props));
        },
        ref: function ref(rangeIndicator) {
          _this2.rangeIndicator = rangeIndicator;
        },
        role: "button",
        style: {
          bottom: "".concat(workingColor.hsv.value, "%"),
          left: "".concat(workingColor.hsv.saturation, "%")
        },
        tabIndex: 0
      }, React.createElement("span", {
        className: "slds-assistive-text"
      }, "Saturation ".concat(workingColor.hsv.saturation, "% Brightness: ").concat(workingColor.hsv.value, "%")))), React.createElement("div", {
        className: "slds-color-picker__hue-and-preview"
      }, React.createElement("label", {
        className: "slds-assistive-text",
        htmlFor: "color-picker-input-range-".concat(this.props.id)
      }, this.props.assistiveText.hueSlider), React.createElement("input", {
        type: "range",
        min: "0",
        max: "360",
        className: "slds-color-picker__hue-slider",
        id: "color-picker-input-range-".concat(this.props.id),
        value: workingColor.hsv.hue,
        onChange: this.props.onHueChange
      }), React.createElement(RadioButtonGroup, {
        name: "".concat(this.props.id, "-color-picker-swatch-toggle-button-group"),
        assistiveText: {
          label: 'Toggle Transparency'
        },
        style: style,
        onChange: this.handleSwatchChange
      }, React.createElement(Radio, {
        checked: !this.isTransparent(),
        id: "color-picker-active-working-color-swatch-".concat(this.props.id),
        key: "working-color",
        labels: {
          label: this.props.labels.customTabActiveWorkingColorSwatch
        },
        style: swatchStyle,
        value: workingColor.hex,
        variant: "swatch"
      }), React.createElement(Radio, {
        checked: this.isTransparent(),
        id: "color-picker-transparent-swatch-".concat(this.props.id),
        key: "transparent",
        labels: {
          label: this.props.labels.customTabTransparentSwatch
        },
        style: transparentSwatchStyle,
        value: "" // transparent
        ,
        variant: "swatch"
      }))));
    }
  }]);

  return HsvColor;
}(React.Component);

_defineProperty(HsvColor, "displayName", 'SLDSHsvColor');

export default HsvColor;
//# sourceMappingURL=hsv-color.js.map