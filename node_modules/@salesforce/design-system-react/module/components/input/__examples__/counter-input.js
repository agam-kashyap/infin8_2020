function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import IconSettings from "../../../../components/icon-settings"; // `~` is replaced with design-system-react at runtime

import Input from "../../../../components/input"; // `~` is replaced with design-system-react at runtime

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));
    _this.state = {
      counter2value: 10,
      counter3value: 10
    };
    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement("div", null, React.createElement("div", null, React.createElement("h1", {
        className: "slds-text-title_caps slds-p-vertical_medium"
      }, "1. Simple counter input"), React.createElement(Input, {
        id: "counter-input-1",
        label: "My Label",
        variant: "counter"
      })), React.createElement("div", null, React.createElement("h1", {
        className: "slds-text-title_caps slds-p-vertical_medium"
      }, "2. Controlled counter input"), React.createElement(Input, {
        id: "counter-input-2",
        label: "My Label",
        onChange: function onChange(event, data) {
          _this2.setState({
            counter2value: data.value
          });
        },
        value: this.state.counter2value,
        variant: "counter"
      })), React.createElement("div", null, React.createElement("h1", {
        className: "slds-text-title_caps slds-p-vertical_medium"
      }, "3. Controlled counter input with min/max values and custom step size"), React.createElement(Input, {
        id: "counter-input-3",
        label: "My Label",
        minValue: 2,
        maxValue: 30,
        onChange: function onChange(event, data) {
          _this2.setState({
            counter3value: data.value
          });
        },
        step: 2,
        value: this.state.counter3value,
        variant: "counter"
      })), React.createElement("div", null, React.createElement("h1", {
        className: "slds-text-title_caps slds-p-vertical_medium"
      }, "4. Counter input with floating step size"), React.createElement(Input, {
        defaultValue: 10.0,
        id: "counter-input-4",
        label: "My Label",
        step: 0.1,
        variant: "counter"
      })), React.createElement("div", null, React.createElement("h1", {
        className: "slds-text-title_caps slds-p-vertical_medium"
      }, "5. Disabled counter input"), React.createElement(Input, {
        disabled: true,
        id: "counter-input-5",
        label: "My Label",
        variant: "counter",
        value: "10"
      })), React.createElement("div", null, React.createElement("h1", {
        className: "slds-text-title_caps slds-p-vertical_medium"
      }, "6. Readonly counter input"), React.createElement(Input, {
        id: "counter-input-6",
        label: "My Label",
        readOnly: true,
        variant: "counter",
        value: "10"
      }))));
    }
  }]);

  return Example;
}(React.Component);

Example.displayName = 'CounterInputExample';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=counter-input.js.map