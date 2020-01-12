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

/* eslint-disable no-console, react/prop-types */
import React from 'react';
import Checkbox from "../../../../components/checkbox";
import Combobox from "../../../../components/combobox";
import IconSettings from "../../../../components/icon-settings";
import Popover from "../../../../components/popover";
var languages = ['English', 'German', 'Tobagonian Creole English', 'Spanish'];

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getInputString", function (options) {
      var inputValue = '';
      if (options.length === 0) inputValue = 'Select an option';else if (options.length === 1) inputValue = "".concat(options[0].label);else inputValue = "".concat(options.length, " options selected");
      return inputValue;
    });

    _this.state = {
      inputValue: 'Select an option',
      selection: [],
      checked: []
    };
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Example, [{
    key: "getIsChecked",
    value: function getIsChecked(label) {
      var isChecked = false;
      var checkedIndex = this.state.checked.findIndex(function (el) {
        return el.label === label;
      });
      if (checkedIndex > -1) isChecked = true;
      return isChecked;
    }
  }, {
    key: "handleCheckboxChange",
    value: function handleCheckboxChange(targetChecked, target, value) {
      var checked = this.state.checked;

      if (targetChecked) {
        checked.push({
          id: target.id,
          label: value
        });
      } else {
        var valueIndex = checked.findIndex(function (el) {
          return el.label === value;
        });
        checked.splice(valueIndex, 1);
      }

      var inputValue = this.getInputString(checked);
      this.setState({
        inputValue: inputValue,
        checked: checked
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose(e, _ref) {
      var trigger = _ref.trigger;

      if (trigger === 'cancel') {
        var inputValue = this.getInputString(this.state.selection);
        var selection = this.state.selection.length > 0 ? this.state.selection.slice(0) : [];
        this.setState({
          checked: selection,
          inputValue: inputValue
        });
      } else {
        var checked = this.state.checked.length > 0 ? this.state.checked.slice(0) : [];
        this.setState({
          selection: checked
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(Combobox, {
        assistiveText: {
          popoverLabel: 'Language Options'
        },
        id: "combobox-dialog",
        errorText: this.state.selection.length > 2 || this.state.checked.length > 2 ? 'Only select 2 options.' : null,
        labels: {
          label: 'Languages',
          placeholder: this.state.inputValue
        },
        popover: React.createElement(Popover, {
          body: React.createElement("div", null, React.createElement("fieldset", {
            className: "slds-form-element"
          }, React.createElement("legend", {
            className: "slds-form-element__legend slds-form-element__label"
          }, "Select up to 2"), React.createElement("div", {
            className: "slds-form-element__control"
          }, languages.map(function (language, i) {
            return React.createElement(Checkbox, {
              checked: _this2.getIsChecked(language),
              id: "checkbox-".concat(i),
              key: "checkbox-".concat(i + 1),
              labels: {
                label: language
              },
              onChange: function onChange(e, _ref2) {
                var checked = _ref2.checked;

                _this2.handleCheckboxChange(checked, e.target, language);
              }
            });
          })))),
          onClose: this.handleClose
        }),
        selection: this.state.selection,
        value: this.state.inputValue,
        variant: "popover"
      }));
    }
  }]);

  return Example;
}(React.Component);

Example.displayName = 'ComboboxExample';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=dialog.js.map