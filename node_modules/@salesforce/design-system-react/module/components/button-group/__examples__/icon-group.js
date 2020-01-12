function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import ButtonGroup from "../../../../components/button-group";
import ButtonStateful from "../../../../components/button-stateful";
import Dropdown from "../../../../components/menu-dropdown";
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
      }, React.createElement(ButtonGroup, {
        id: "button-group-icon-group-1"
      }, React.createElement(ButtonStateful, {
        assistiveText: {
          icon: 'Show Chart'
        },
        buttonVariant: "icon",
        iconName: "chart",
        iconVariant: "border",
        variant: "icon"
      }), React.createElement(ButtonStateful, {
        assistiveText: {
          icon: 'Filter List'
        },
        iconName: "filterList",
        iconVariant: "border",
        variant: "icon"
      }), React.createElement(Dropdown, {
        assistiveText: {
          icon: 'Settings'
        },
        checkmark: true,
        iconCategory: "utility",
        iconName: "settings",
        iconVariant: "more",
        id: "icon-dropdown-example-1",
        onSelect: function onSelect(item) {
          console.log(item.label, 'selected');
        },
        openOn: "click",
        options: [{
          label: 'Bring left panel to front',
          value: 'A0'
        }, {
          label: 'Bring right panel to front',
          value: 'B0'
        }],
        value: "A0",
        variant: "icon"
      })), React.createElement("br", null), React.createElement("br", null), React.createElement(ButtonGroup, {
        id: "button-group-icon-group-2",
        labels: {
          label: 'Actions'
        }
      }, React.createElement(ButtonStateful, {
        assistiveText: {
          icon: 'Show Chart'
        },
        buttonVariant: "icon",
        iconName: "chart",
        iconVariant: "border",
        variant: "icon"
      }), React.createElement(ButtonStateful, {
        assistiveText: {
          icon: 'Filter List'
        },
        iconName: "filterList",
        iconVariant: "border",
        variant: "icon"
      }), React.createElement(Dropdown, {
        assistiveText: {
          icon: 'Settings'
        },
        checkmark: true,
        iconCategory: "utility",
        iconName: "settings",
        iconVariant: "more",
        id: "icon-dropdown-example-2",
        onSelect: function onSelect(item) {
          console.log(item.label, 'selected');
        },
        openOn: "click",
        options: [{
          label: 'Bring left panel to front',
          value: 'A0'
        }, {
          label: 'Bring right panel to front',
          value: 'B0'
        }],
        value: "A0",
        variant: "icon"
      })));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'ButtonGroupExample');

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=icon-group.js.map