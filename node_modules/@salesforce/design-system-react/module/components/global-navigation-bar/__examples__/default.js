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
import IconSettings from "../../../../components/icon-settings";
import GlobalNavigationBar from "../../../../components/global-navigation-bar"; // `~` is replaced with design-system-react at runtime

import GlobalNavigationBarRegion from "../../../../components/global-navigation-bar/region";
import GlobalNavigationBarDropdown from "../../../../components/global-navigation-bar/dropdown";
import GlobalNavigationBarLink from "../../../../components/global-navigation-bar/link";
import Button from "../../../../components/button";
import Icon from "../../../../components/icon";
import AppLauncher from "../../../../components/app-launcher";
import AppLauncherExpandableSection from "../../../../components/app-launcher/expandable-section";
import AppLauncherTile from "../../../../components/app-launcher/tile";

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
      var dropdownCollection = [{
        label: 'Menu Item One',
        value: '1',
        iconCategory: 'utility',
        iconName: 'table',
        href: 'http://www.google.com'
      }, {
        label: 'Menu Item Two',
        value: '2',
        iconCategory: 'utility',
        iconName: 'kanban',
        href: 'http://www.google.com'
      }, {
        label: 'Menu Item Three',
        value: '3',
        iconCategory: 'utility',
        iconName: 'side_list',
        href: 'http://www.google.com'
      }];
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(GlobalNavigationBar, null, React.createElement(GlobalNavigationBarRegion, {
        region: "primary"
      }, React.createElement(AppLauncher, {
        id: "app-launcher-trigger",
        triggerName: "App Name",
        onSearch: function onSearch() {
          console.log('Search term:', event.target.value);
        },
        modalHeaderButton: React.createElement(Button, {
          label: "App Exchange"
        })
      }, React.createElement(AppLauncherExpandableSection, {
        title: "Tile Section"
      }, React.createElement(AppLauncherTile, {
        title: "Marketing Cloud",
        iconText: "MC",
        description: "Send emails, track emails, read emails! Emails!"
      }), React.createElement(AppLauncherTile, {
        title: "Call Center",
        description: "The key to call center and contact center is not to use too many words!",
        descriptionHeading: "Call Center",
        iconText: "CC"
      })), React.createElement(AppLauncherExpandableSection, {
        title: "Small Tile Section"
      }, React.createElement(AppLauncherTile, {
        title: "Journey Builder",
        iconText: "JB",
        size: "small"
      }), React.createElement(AppLauncherTile, {
        title: "Sales Cloud",
        iconNode: React.createElement(Icon, {
          name: "campaign",
          category: "standard",
          size: "large"
        }),
        size: "small"
      })))), React.createElement(GlobalNavigationBarRegion, {
        region: "secondary",
        navigation: true
      }, React.createElement(GlobalNavigationBarLink, {
        active: true,
        label: "Home",
        id: "home-link"
      }), React.createElement(GlobalNavigationBarDropdown, {
        assistiveText: {
          icon: 'Open menu item submenu'
        },
        id: "primaryDropdown",
        label: "Menu Item",
        options: dropdownCollection
      }), React.createElement(GlobalNavigationBarLink, {
        label: "Menu Item"
      }), React.createElement(GlobalNavigationBarLink, {
        label: "Menu Item"
      }), React.createElement(GlobalNavigationBarLink, {
        label: "Menu Item"
      }))));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'GlobalNavigationBarExample');

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=default.js.map