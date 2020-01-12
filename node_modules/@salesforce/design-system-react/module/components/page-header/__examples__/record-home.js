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
import ButtonStateful from "../../../../components/button-stateful";
import Dropdown from "../../../../components/menu-dropdown";
import Icon from "../../../../components/icon";
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
        return React.createElement(React.Fragment, null, React.createElement(PageHeaderControl, null, React.createElement(ButtonStateful, {
          key: "PageHeaderFollowButton",
          iconSize: "medium",
          stateOne: {
            iconName: 'add',
            label: 'Follow'
          },
          stateTwo: {
            iconName: 'check',
            label: 'Following'
          },
          stateThree: {
            iconName: 'close',
            label: 'Unfollow'
          }
        })), React.createElement(PageHeaderControl, null, React.createElement(ButtonGroup, {
          variant: "list",
          id: "button-group-page-header-actions"
        }, React.createElement(Button, {
          label: "Edit"
        }), React.createElement(Button, {
          label: "Delete"
        }), React.createElement(Button, {
          label: "Clone"
        }), React.createElement(Dropdown, {
          align: "right",
          assistiveText: {
            icon: 'More Options'
          },
          iconCategory: "utility",
          iconName: "down",
          iconVariant: "border-filled",
          id: "dropdown-record-home-example",
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

      var details = [{
        label: 'Field 1',
        content: 'Description that demonstrates truncation with content. Description that demonstrates truncation with content.',
        truncate: true
      }, {
        label: 'Field 2',
        content: 'Multiple Values'
      }, {
        label: 'Field 3',
        content: React.createElement("a", {
          href: "javascript:void(0);"
        }, "Hyperlink")
      }, {
        label: 'Field 4',
        content: 'Description (2-line truncation)',
        truncate: true
      }];
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(PageHeader, {
        details: details,
        icon: React.createElement(Icon, {
          assistiveText: {
            label: 'User'
          },
          category: "standard",
          name: "opportunity"
        }),
        label: "Record Type",
        onRenderActions: actions,
        title: "Record Title",
        variant: "record-home"
      }));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'RecordHomePageHeaderExample');

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=record-home.js.map