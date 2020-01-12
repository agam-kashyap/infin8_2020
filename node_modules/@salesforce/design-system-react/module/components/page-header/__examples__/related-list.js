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
import Button from "../../../../components/button";
import ButtonGroup from "../../../../components/button-group";
import Dropdown from "../../../../components/menu-dropdown";
import DropdownTrigger from "../../../../components/menu-dropdown/button-trigger";
import IconSettings from "../../../../components/icon-settings";
import PageHeader from "../../../../components/page-header";
import PageHeaderControl from "../../../../components/page-header/control";

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
      var actions = function actions() {
        return React.createElement(PageHeaderControl, null, React.createElement(ButtonGroup, {
          variant: "list",
          id: "button-group-page-header-actions"
        }, React.createElement(Button, {
          label: "Add Contact",
          variant: "neutral"
        }), React.createElement(Dropdown, {
          assistiveText: {
            icon: 'More Options'
          },
          buttonVariant: "icon",
          iconCategory: "utility",
          iconName: "down",
          iconVariant: "border-filled",
          id: "page-header-related-list-add-contact-dropdown",
          openOn: "click",
          align: "right",
          options: [{
            label: 'Refresh List',
            value: 'A0'
          }, {
            label: 'Duplicate Selected Leads',
            value: 'B0'
          }, {
            label: 'Disabled Selected Leads',
            value: 'C0'
          }]
        })));
      };

      var controls = function controls() {
        return React.createElement(React.Fragment, null, React.createElement(PageHeaderControl, null, React.createElement(Dropdown, {
          align: "right",
          assistiveText: {
            icon: 'Change view'
          },
          iconCategory: "utility",
          iconName: "settings",
          iconVariant: "more",
          id: "content-right-dropdown",
          options: [{
            label: 'Menu Item One',
            value: 'A0'
          }, {
            label: 'Menu Item Two',
            value: 'B0'
          }, {
            label: 'Menu Item Three',
            value: 'C0'
          }, {
            type: 'divider'
          }, {
            label: 'Menu Item Four',
            value: 'D0'
          }]
        }, React.createElement(DropdownTrigger, null, React.createElement(Button, {
          assistiveText: {
            icon: 'Change view'
          },
          iconCategory: "utility",
          iconName: "table",
          iconVariant: "more",
          variant: "icon"
        })))), React.createElement(PageHeaderControl, null, React.createElement(ButtonGroup, {
          variant: "list",
          id: "button-group-page-header-controls"
        }, React.createElement(Button, {
          iconCategory: "utility",
          iconName: "chart",
          variant: "icon",
          iconVariant: "border-filled",
          assistiveText: {
            icon: 'Chart'
          }
        }), React.createElement(Button, {
          iconCategory: "utility",
          iconName: "filterList",
          variant: "icon",
          iconVariant: "border-filled",
          assistiveText: {
            icon: 'Filter List'
          }
        }), React.createElement(Dropdown, {
          triggerClassname: true,
          align: "right",
          assistiveText: {
            icon: 'List View Controls'
          },
          iconCategory: "utility",
          iconName: "sort",
          iconVariant: "more",
          id: "content-right-dropdown-2",
          options: [{
            label: 'Menu Item One',
            value: 'A0'
          }, {
            label: 'Menu Item Two',
            value: 'B0'
          }, {
            label: 'Menu Item Three',
            value: 'C0'
          }, {
            type: 'divider'
          }, {
            label: 'Menu Item Four',
            value: 'D0'
          }]
        }))));
      };

      var trail = [React.createElement("a", {
        href: "javascript:void(0);"
      }, "Accounts"), React.createElement("a", {
        href: "javascript:void(0);"
      }, "Company One")];
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(PageHeader, {
        info: "10 items \u2022 sorted by name",
        onRenderActions: actions,
        onRenderControls: controls,
        title: "Contacts (will truncate)",
        trail: trail,
        truncate: true,
        variant: "related-list"
      }));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'RelatedListPageHeaderExample');

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=related-list.js.map