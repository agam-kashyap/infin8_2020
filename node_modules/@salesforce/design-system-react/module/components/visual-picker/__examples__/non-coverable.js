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
import VisualPicker from "../../../../components/visual-picker";
import { Radio, Checkbox } from "../../../../components";
import IconSettings from "../../../../components/icon-settings";

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example() {
    _classCallCheck(this, Example);

    return _possibleConstructorReturn(this, _getPrototypeOf(Example).apply(this, arguments));
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement("div", {
        style: {
          padding: '4rem 1rem 0px',
          background: 'rgb(244, 246, 249)'
        }
      }, React.createElement("h1", null, "Radio"), React.createElement(VisualPicker, {
        label: "Please Select Any One",
        id: "visual-picker-non-coverable-radio"
      }, React.createElement(Radio, {
        labels: {
          heading: 'Lightning Professional',
          label: 'Complete service CRM for teams of any size'
        },
        id: "visual-picker-non-coverable-radio-1",
        value: "30",
        onRenderVisualPicker: function onRenderVisualPicker() {
          return React.createElement("span", null, React.createElement("span", {
            className: "slds-text-heading_large"
          }, "$30"), React.createElement("span", {
            className: "slds-text-title"
          }, "USD/user/month *"));
        }
      }), React.createElement(Radio, {
        labels: {
          heading: 'Lightning Enterprise',
          label: 'Everything you need to take support to the next level'
        },
        id: "visual-picker-non-coverable-radio-2",
        value: "150",
        onRenderVisualPicker: function onRenderVisualPicker() {
          return React.createElement("span", null, React.createElement("span", {
            className: "slds-text-heading_large"
          }, "$150"), React.createElement("span", {
            className: "slds-text-title"
          }, "USD/user/month *"));
        }
      }), React.createElement(Radio, {
        labels: {
          heading: 'Lightning Ultimate',
          label: 'Complete support with enterprise-grade customization'
        },
        id: "visual-picker-non-coverable-radio-3",
        disabled: true,
        value: "300",
        onRenderVisualPicker: function onRenderVisualPicker() {
          return React.createElement("span", null, React.createElement("span", {
            className: "slds-text-heading_large"
          }, "$300"), React.createElement("span", {
            className: "slds-text-title"
          }, "USD/user/month *"));
        }
      })), React.createElement("hr", null), React.createElement("h1", null, "Checkbox"), React.createElement(VisualPicker, {
        label: "Add the following object(s)",
        id: "visual-picker-non-coverable-checkbox"
      }, React.createElement(Checkbox, {
        labels: {
          heading: 'Lightning Professional',
          label: 'Complete service CRM for teams of any size'
        },
        id: "visual-picker-non-coverable-checkbox-1",
        value: "30",
        onRenderVisualPicker: function onRenderVisualPicker() {
          return React.createElement("span", null, React.createElement("span", {
            className: "slds-text-heading_large"
          }, "$30"), React.createElement("span", {
            className: "slds-text-title"
          }, "USD/user/month *"));
        }
      }), React.createElement(Checkbox, {
        labels: {
          heading: 'Lightning Enterprise',
          label: 'Everything you need to take support to the next level'
        },
        id: "visual-picker-non-coverable-checkbox-2",
        value: "150",
        onRenderVisualPicker: function onRenderVisualPicker() {
          return React.createElement("span", null, React.createElement("span", {
            className: "slds-text-heading_large"
          }, "$150"), React.createElement("span", {
            className: "slds-text-title"
          }, "USD/user/month *"));
        }
      }), React.createElement(Checkbox, {
        labels: {
          heading: 'Lightning Ultimate',
          label: 'Complete support with enterprise-grade customization'
        },
        id: "visual-picker-non-coverable-checkbox-3",
        disabled: true,
        value: "300",
        onRenderVisualPicker: function onRenderVisualPicker() {
          return React.createElement("span", null, React.createElement("span", {
            className: "slds-text-heading_large"
          }, "$300"), React.createElement("span", {
            className: "slds-text-title"
          }, "USD/user/month *"));
        }
      }))));
    }
  }]);

  return Example;
}(React.Component);

Example.displayName = 'VisualPickerNonCoverable';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=non-coverable.js.map