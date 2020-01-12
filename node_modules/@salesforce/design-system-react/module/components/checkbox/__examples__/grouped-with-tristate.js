function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react'; // `~` is replaced with design-system-react at runtime

import IconSettings from "../../../../components/icon-settings";
import Checkbox from "../../../../components/checkbox";

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));
    _this.state = {
      mayonnaiseChecked: true,
      mustardChecked: false,
      oilChecked: true,
      vinegarChecked: false
    };
    _this.previousMixedState = _objectSpread({}, _this.state);
    return _this;
  }

  _createClass(Example, [{
    key: "getAllCondimentsStatus",
    value: function getAllCondimentsStatus() {
      var status = 'mixed';

      if (this.state.mayonnaiseChecked && this.state.mustardChecked && this.state.oilChecked && this.state.vinegarChecked) {
        status = true;
      } else if (!this.state.mayonnaiseChecked && !this.state.mustardChecked && !this.state.oilChecked && !this.state.vinegarChecked) {
        status = false;
      }

      return status;
    }
  }, {
    key: "handleSubCheckboxChange",
    value: function handleSubCheckboxChange(attribute) {
      var newState = _objectSpread({}, this.state);

      newState[attribute] = !this.state[attribute];
      this.previousMixedState = _objectSpread({}, newState);
      this.setState(newState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var allCondimentsStatus = this.getAllCondimentsStatus();
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement("fieldset", null, React.createElement("legend", {
        className: "slds-p-bottom_xx-small"
      }, "Grouped with Tristate"), React.createElement(Checkbox, {
        "aria-checked": allCondimentsStatus,
        "aria-controls": "checkbox-mayonnaise checkbox-mustard checkbox-oil checkbox-vinegar",
        assistiveText: {
          label: 'All Condiments'
        },
        checked: allCondimentsStatus === true || undefined,
        id: "checkbox-example-all-condiments",
        indeterminate: allCondimentsStatus === 'mixed',
        labels: {
          label: 'All Condiments'
        },
        onChange: function onChange() {
          var condimentsStatus = _this2.getAllCondimentsStatus();

          if (condimentsStatus === false) {
            if (!_this2.previousMixedState.mayonnaiseChecked && !_this2.previousMixedState.mustardChecked && !_this2.previousMixedState.oilChecked && !_this2.previousMixedState.vinegarChecked) {
              _this2.setState({
                mayonnaiseChecked: true,
                mustardChecked: true,
                oilChecked: true,
                vinegarChecked: true
              });
            } else {
              _this2.setState(_objectSpread({}, _this2.previousMixedState));
            }
          } else if (condimentsStatus === 'mixed') {
            _this2.previousMixedState = _objectSpread({}, _this2.state);

            _this2.setState({
              mayonnaiseChecked: true,
              mustardChecked: true,
              oilChecked: true,
              vinegarChecked: true
            });
          } else {
            _this2.setState({
              mayonnaiseChecked: false,
              mustardChecked: false,
              oilChecked: false,
              vinegarChecked: false
            });
          }
        }
      }), React.createElement("ul", {
        className: "slds-p-left_large slds-p-top_xx-small"
      }, React.createElement("li", null, React.createElement(Checkbox, {
        assistiveText: {
          label: 'Mayonnaise'
        },
        checked: this.state.mayonnaiseChecked,
        id: "checkbox-mayonnaise",
        labels: {
          label: 'Mayonnaise'
        },
        onChange: function onChange() {
          _this2.handleSubCheckboxChange('mayonnaiseChecked');
        }
      })), React.createElement("li", null, React.createElement(Checkbox, {
        assistiveText: {
          label: 'Mustard'
        },
        checked: this.state.mustardChecked,
        id: "checkbox-mustard",
        labels: {
          label: 'Mustard'
        },
        onChange: function onChange() {
          _this2.handleSubCheckboxChange('mustardChecked');
        }
      })), React.createElement("li", null, React.createElement(Checkbox, {
        assistiveText: {
          label: 'Oil'
        },
        checked: this.state.oilChecked,
        id: "checkbox-oil",
        labels: {
          label: 'Oil'
        },
        onChange: function onChange() {
          _this2.handleSubCheckboxChange('oilChecked');
        }
      })), React.createElement("li", null, React.createElement(Checkbox, {
        assistiveText: {
          label: 'Vinegar'
        },
        checked: this.state.vinegarChecked,
        id: "checkbox-vinegar",
        labels: {
          label: 'Vinegar'
        },
        onChange: function onChange() {
          _this2.handleSubCheckboxChange('vinegarChecked');
        }
      })))));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'CheckboxExample');

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=grouped-with-tristate.js.map