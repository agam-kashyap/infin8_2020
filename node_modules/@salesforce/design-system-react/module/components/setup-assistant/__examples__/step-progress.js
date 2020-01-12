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
import Checkbox from "../../../../components/checkbox";
import IconSettings from "../../../../components/icon-settings";
import SetupAssistant from "../../../../components/setup-assistant";
import SetupAssistantStep from "../../../../components/setup-assistant/step";

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
      }, React.createElement(SetupAssistant, {
        id: "step-progress-setup-assistant"
      }, React.createElement(SetupAssistantStep, {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        estimatedTime: "4 mins",
        heading: "Add Users to Your Org",
        id: "step-progress-step-1",
        onRenderAction: function onRenderAction() {
          return React.createElement(Button, {
            id: "step-progress-step-1-action",
            label: "Add Users",
            variant: "outline-brand"
          });
        },
        progress: 100
      }), React.createElement(SetupAssistantStep, {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        heading: "Create Profiles for Your Users",
        id: "step-progress-step-2",
        onRenderAction: function onRenderAction() {
          return React.createElement(Button, {
            id: "step-progress-step-2-action",
            label: "Add Profiles",
            variant: "outline-brand"
          });
        },
        progress: 0
      }), React.createElement(SetupAssistantStep, {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        estimatedTime: "15 mins",
        heading: "Learn How to Use Profiles to control Visibility",
        id: "step-progress-step-3",
        onRenderAction: function onRenderAction() {
          return React.createElement(Button, {
            id: "step-progress-step-3-action",
            label: "View on Trailhead",
            variant: "link"
          });
        },
        progress: 100
      }), React.createElement(SetupAssistantStep, {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        heading: "Turn on tracking for profiles",
        id: "step-progress-step-4",
        onRenderAction: function onRenderAction() {
          return React.createElement(Checkbox, {
            id: "step-progress-step-4-action",
            oldEventParameterOrder: false,
            variant: "toggle"
          });
        },
        progress: 0
      }), React.createElement(SetupAssistantStep, {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        heading: "Setup Einstein Visibility for Admins",
        id: "step-progress-step-5",
        onRenderAction: function onRenderAction() {
          return React.createElement(Button, {
            id: "step-progress-step-5-action",
            label: "Watch Video",
            variant: "link"
          });
        },
        progress: 0
      })));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'SetupAssistantStepProgressExample');

export default Example;
//# sourceMappingURL=step-progress.js.map