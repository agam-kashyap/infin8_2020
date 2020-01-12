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
import Combobox from "../../../../components/combobox";
import Dropdown from "../../../../components/menu-dropdown";
import GlobalHeader from "../../../../components/global-header"; // `~` is replaced with design-system-react at runtime

import GlobalHeaderFavorites from "../../../../components/global-header/favorites";
import GlobalHeaderHelp from "../../../../components/global-header/help";
import GlobalHeaderNotifications from "../../../../components/global-header/notifications";
import GlobalHeaderProfile from "../../../../components/global-header/profile";
import GlobalHeaderSearch from "../../../../components/global-header/search";
import GlobalHeaderSetup from "../../../../components/global-header/setup";
import GlobalHeaderTask from "../../../../components/global-header/task";
import IconSettings from "../../../../components/icon-settings";
import Popover from "../../../../components/popover";
/* eslint-disable max-len */

/* eslint-disable no-script-url */

/* eslint-disable react/prop-types */

var ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum fermentum eros, vel porta metus dignissim vitae. Fusce finibus sed magna vitae tempus. Suspendisse condimentum, arcu eu viverra vulputate, mauris odio dictum velit, in dictum lorem augue id augue. Proin nec leo convallis, aliquet mi ut, interdum nunc.'; // Notifications content is currently the contents of a generic `Popover` with markup copied from https://www.lightningdesignsystem.com/components/global-header/#Notifications. This allows content to have tab stops and focus trapping. If you need a more specific/explicit `GlobalHeaderNotification` content, please create an issue.

var HeaderNotificationsCustomContent = function HeaderNotificationsCustomContent(props) {
  return React.createElement("ul", {
    id: "header-notifications-custom-popover-content"
  }, props.items.map(function (item) {
    return React.createElement("li", {
      className: "slds-global-header__notification ".concat(item.unread ? 'slds-global-header__notification_unread' : ''),
      key: "notification-item-".concat(item.id)
    }, React.createElement("div", {
      className: "slds-media slds-has-flexi-truncate slds-p-around_x-small"
    }, React.createElement("div", {
      className: "slds-media__figure"
    }, React.createElement("span", {
      className: "slds-avatar slds-avatar_small"
    }, React.createElement("img", {
      alt: item.name,
      src: "/assets/images/".concat(item.avatar, ".jpg"),
      title: "".concat(item.name, " avatar\"")
    }))), React.createElement("div", {
      className: "slds-media__body"
    }, React.createElement("div", {
      className: "slds-grid slds-grid_align-spread"
    }, React.createElement("a", {
      href: "javascript:void(0);",
      className: "slds-text-link_reset slds-has-flexi-truncate"
    }, React.createElement("h3", {
      className: "slds-truncate",
      title: "".concat(item.name, " ").concat(item.action)
    }, React.createElement("strong", null, "".concat(item.name, " ").concat(item.action))), React.createElement("p", {
      className: "slds-truncate",
      title: item.comment
    }, item.comment), React.createElement("p", {
      className: "slds-m-top_x-small slds-text-color_weak"
    }, item.timePosted, ' ', item.unread ? React.createElement("abbr", {
      className: "slds-text-link slds-m-horizontal_xxx-small",
      title: "unread"
    }, "\u25CF") : null))))));
  }));
};

HeaderNotificationsCustomContent.displayName = 'HeaderNotificationsCustomContent'; // Profile content is currently the contents of a generic `Popover` with markup copied from https://www.lightningdesignsystem.com/components/global-header/. This allows content to have tab stops and focus trapping. If you need a more specific/explicit `GlobalHeaderProfile` content, please create an issue.

var HeaderProfileCustomContent = function HeaderProfileCustomContent(props) {
  return React.createElement("div", {
    id: "header-profile-custom-popover-content"
  }, React.createElement("div", {
    className: "slds-m-around_medium"
  }, React.createElement("div", {
    className: "slds-tile slds-tile_board slds-m-horizontal_small"
  }, React.createElement("p", {
    className: "tile__title slds-text-heading_small"
  }, "Art Vandelay"), React.createElement("div", {
    className: "slds-tile__detail"
  }, React.createElement("p", {
    className: "slds-truncate"
  }, React.createElement("a", {
    className: "slds-m-right_medium",
    href: "javascript:void(0)",
    onClick: props.onClick
  }, "Settings"), React.createElement("a", {
    href: "javascript:void(0)",
    onClick: props.onClick
  }, "Log Out"))))));
};

HeaderProfileCustomContent.displayName = 'HeaderProfileCustomContent';

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));
    _this.state = {
      favoritesActionSelected: false
    };
    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(GlobalHeader, {
        logoSrc: "/assets/images/logo.svg",
        onSkipToContent: function onSkipToContent() {
          console.log('>>> Skip to Content Clicked');
        },
        onSkipToNav: function onSkipToNav() {
          console.log('>>> Skip to Nav Clicked');
        }
      }, React.createElement(GlobalHeaderSearch, {
        combobox: React.createElement(Combobox, {
          assistiveText: {
            label: 'Search'
          },
          events: {
            onSelect: function onSelect() {
              console.log('>>> onSelect');
            }
          },
          id: "header-search-custom-id",
          labels: {
            placeholder: 'Search Salesforce'
          },
          options: [{
            id: 'email',
            label: 'Email'
          }, {
            id: 'mobile',
            label: 'Mobile'
          }]
        })
      }), React.createElement(GlobalHeaderFavorites, {
        actionSelected: this.state.favoritesActionSelected,
        onToggleActionSelected: function onToggleActionSelected(event, data) {
          _this2.setState({
            favoritesActionSelected: !data.actionSelected
          });
        },
        popover: React.createElement(Popover, {
          ariaLabelledby: "favorites-heading",
          body: React.createElement("div", null, React.createElement("h2", {
            className: "slds-text-heading_small",
            id: "favorites-heading"
          }, "Favorites"), ipsum),
          id: "header-favorites-popover-id"
        })
      }), React.createElement(GlobalHeaderTask, {
        dropdown: React.createElement(Dropdown, {
          id: "header-task-dropdown-id",
          options: [{
            id: 'taskOptionOne',
            label: 'Task Option One'
          }, {
            id: 'taskOptionTwo',
            label: 'Task Option Two'
          }]
        })
      }), React.createElement(GlobalHeaderHelp, {
        popover: React.createElement(Popover, {
          ariaLabelledby: "help-heading",
          body: React.createElement("div", null, React.createElement("h2", {
            className: "slds-text-heading_small",
            id: "help-heading"
          }, "Help and Training"), ipsum),
          id: "header-help-popover-id"
        })
      }), React.createElement(GlobalHeaderSetup, {
        dropdown: React.createElement(Dropdown, {
          id: "header-setup-dropdown-id",
          options: [{
            id: 'setupOptionOne',
            label: 'Setup Option One'
          }, {
            id: 'setupOptionTwo',
            label: 'Setup Option Two'
          }]
        })
      }), React.createElement(GlobalHeaderNotifications, {
        notificationCount: 5,
        popover: React.createElement(Popover, {
          ariaLabelledby: "header-notifications-custom-popover-content",
          body: React.createElement(HeaderNotificationsCustomContent, {
            items: [{
              action: 'mentioned you',
              avatar: 'avatar2',
              comment: '@jrogers Could I please have a review on my presentation deck',
              id: 1,
              name: 'Val Handerly',
              timePosted: '10 hours ago',
              unread: true
            }, {
              action: 'commented on your post',
              avatar: 'avatar3',
              comment: 'I totally agree with your sentiment',
              id: 2,
              name: 'Jon Rogers',
              timePosted: '13 hours ago',
              unread: true
            }, {
              action: 'mentioned you',
              avatar: 'avatar2',
              comment: "@jrogers Here's the conversation I mentioned to you",
              id: 3,
              name: 'Rebecca Stone',
              timePosted: '1 day ago'
            }]
          }),
          id: "header-notifications-popover-id"
        })
      }), React.createElement(GlobalHeaderProfile, {
        popover: React.createElement(Popover, {
          body: React.createElement(HeaderProfileCustomContent, null),
          id: "header-profile-popover-id"
        }),
        userName: "Art Vandelay"
      })));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'GlobalHeaderExample');

Example.displayName = 'GlobalHeaderExample';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=default.js.map