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

import React from 'react';
import IconSettings from "../../../../components/icon-settings";
import Modal from "../../../../components/modal"; // `~` is replaced with design-system-react at runtime

import Button from "../../../../components/button";
import Lookup from "../../../../components/lookup";
import Combobox from "../../../../components/combobox";
var leadSourceOptions = [{
  id: 1,
  label: 'Third Party Program',
  value: 'A0'
}, {
  id: 2,
  label: 'Cold Call',
  value: 'B0'
}, {
  id: 3,
  label: 'LinkedIn',
  value: 'C0'
}, {
  id: 4,
  label: 'Direct Mail',
  value: 'D0'
}, {
  id: 5,
  label: 'Other',
  value: 'E0'
}];
var opportunityTypeOptions = [{
  id: 1,
  label: 'Add on Business',
  value: 'A0'
}, {
  id: 2,
  label: 'Courtesy',
  value: 'B0'
}, {
  id: 3,
  label: 'New Business',
  value: 'C0'
}, {
  id: 4,
  label: 'Renewal',
  value: 'D0'
}, {
  id: 5,
  label: 'Upgrade',
  value: 'E0'
}];

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false,
      leadSourceSelection: [leadSourceOptions[0]],
      opportunityTypeSelection: [opportunityTypeOptions[0]]
    });

    _defineProperty(_assertThisInitialized(_this), "toggleOpen", function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    });

    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement("div", null, React.createElement(Button, {
        label: "Open modal with menu contents",
        onClick: this.toggleOpen
      }), React.createElement(Modal, {
        isOpen: this.state.isOpen,
        footer: [React.createElement(Button, {
          label: "Cancel",
          onClick: this.toggleOpen
        }), React.createElement(Button, {
          label: "Save",
          variant: "brand",
          onClick: this.toggleOpen
        })],
        onRequestClose: this.toggleOpen,
        heading: "New Opportunity"
      }, React.createElement("section", {
        className: "slds-p-around_large"
      }, React.createElement("div", {
        className: "slds-form-element slds-m-bottom_large"
      }, React.createElement("label", {
        className: "slds-form-element__label",
        htmlFor: "opptyName"
      }, "Opportunity Name"), React.createElement("div", {
        className: "slds-form-element__control"
      }, React.createElement("input", {
        id: "opptyName",
        className: "slds-input",
        type: "text",
        placeholder: "Enter name"
      }))), React.createElement("div", {
        className: "slds-form-element slds-m-bottom_large"
      }, React.createElement("label", {
        className: "slds-form-element__label",
        htmlFor: "description"
      }, "Opportunity Description"), React.createElement("div", {
        className: "slds-form-element__control"
      }, React.createElement("textarea", {
        id: "description",
        className: "slds-textarea",
        placeholder: "Enter description"
      }))), React.createElement("div", {
        className: "slds-form-element slds-m-bottom_large"
      }, React.createElement(Lookup, {
        emptyMessage: "No items found",
        hasError: false,
        label: "Account",
        onChange: function onChange(newValue) {
          console.log('New search term: ', newValue);
        },
        onSelect: function onSelect(item) {
          console.log(item, ' Selected');
        },
        options: [{
          type: 'section',
          label: 'SECTION 1'
        }, {
          label: "Paddy's Pub"
        }, {
          label: 'Tyrell Corp'
        }, {
          type: 'section',
          label: 'SECTION 2'
        }, {
          label: 'Paper St. Soap Company'
        }, {
          label: 'Nakatomi Investments'
        }, {
          label: 'Acme Landscaping'
        }, {
          type: 'section',
          label: 'SECTION 3'
        }, {
          label: 'Acme Construction'
        }],
        sectionDividerRenderer: Lookup.DefaultSectionDivider
      })), React.createElement("div", {
        className: "slds-m-bottom_large"
      }, React.createElement(Combobox, {
        events: {
          onSelect: function onSelect(event, data) {
            var selection = data.selection.length === 0 ? _this2.state.leadSourceSelection : data.selection;
            console.log('selected: ', selection[0].label);

            _this2.setState({
              leadSourceSelection: selection
            });
          }
        },
        labels: {
          label: 'Lead Source',
          placeholder: 'Select Lead Source'
        },
        menuPosition: "relative",
        options: leadSourceOptions,
        selection: this.state.leadSourceSelection,
        variant: "readonly"
      })), React.createElement("div", {
        className: "slds-m-bottom_large"
      }, React.createElement(Combobox, {
        events: {
          onSelect: function onSelect(event, data) {
            var selection = data.selection.length === 0 ? _this2.state.opportunityTypeSelection : data.selection;
            console.log('selected: ', selection[0].label);

            _this2.setState({
              opportunityTypeSelection: selection
            });
          }
        },
        labels: {
          label: 'Type',
          placeholder: 'Select Opportunity Type'
        },
        menuPosition: "relative",
        options: opportunityTypeOptions,
        selection: this.state.opportunityTypeSelection,
        variant: "readonly"
      })), React.createElement("div", {
        className: "slds-form-element slds-m-bottom_large"
      }, React.createElement("label", {
        className: "slds-form-element__label",
        htmlFor: "amount"
      }, "Amount"), React.createElement("div", {
        className: "slds-form-element__control"
      }, React.createElement("input", {
        id: "amount",
        className: "slds-input",
        type: "text",
        placeholder: "Enter Amount"
      })))))));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'ModalExample');

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=menu-contents.js.map