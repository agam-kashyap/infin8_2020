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
import ScopedNotification from "../../../../components/scoped-notification";
import SetupAssistant from "../../../../components/setup-assistant";
import SetupAssistantStep from "../../../../components/setup-assistant/step";
import ProgressBar from "../../../../components/progress-bar";
import ProgressIndicator from "../../../../components/progress-indicator";

var subSteps = function subSteps(step) {
  return [{
    id: "step-".concat(step, "-substep0"),
    label: 'Turn on Lightning for all users.',
    onRenderSetupAssistantAction: React.createElement(Checkbox, {
      id: "step-".concat(step, "-substep0-action"),
      checked: true,
      oldEventParameterOrder: false,
      variant: "toggle"
    })
  }, {
    id: "step-".concat(step, "-substep1"),
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    onRenderSetupAssistantAction: React.createElement(Button, {
      id: "step-".concat(step, "-substep1-action"),
      label: "View in Trailhead",
      variant: "link"
    })
  }, {
    id: "step-".concat(step, "-substep2"),
    label: 'Lorem ipsum dolor sit amet, lorem ipsum dolor.',
    onRenderSetupAssistantAction: React.createElement(Button, {
      id: "step-".concat(step, "-substep2-action"),
      label: "Add Users",
      variant: "outline-brand"
    })
  }];
};

var subStepsComplete = function subStepsComplete(step) {
  return [{
    id: "step-".concat(step, "-substep0"),
    label: 'Turn on Lightning for all users.',
    onRenderSetupAssistantAction: React.createElement(Checkbox, {
      id: "step-".concat(step, "-substep0-action"),
      checked: true,
      oldEventParameterOrder: false,
      variant: "toggle"
    })
  }, {
    id: "step-".concat(step, "-substep1"),
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    onRenderSetupAssistantAction: React.createElement(Button, {
      id: "step-".concat(step, "-substep1-action"),
      label: "View in Trailhead",
      variant: "link"
    })
  }];
};

var subStepsIncomplete = function subStepsIncomplete(step) {
  return [{
    id: "step-".concat(step, "-substep0"),
    label: 'Turn on Lightning for all users.',
    onRenderSetupAssistantAction: React.createElement(Checkbox, {
      id: "step-".concat(step, "-substep0-action"),
      oldEventParameterOrder: false,
      variant: "toggle"
    })
  }, {
    id: "step-".concat(step, "-substep1"),
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    onRenderSetupAssistantAction: React.createElement(Button, {
      id: "step-".concat(step, "-substep1-action"),
      label: "View in Trailhead",
      variant: "link"
    })
  }];
};

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
        id: "card-setup-assistant",
        isCard: true,
        progressBar: React.createElement(ProgressBar, {
          color: "success",
          id: "card-setup-assistant-progress-bar",
          labels: {
            label: 'Complete all the steps below to finish setting up Einstein Visibility'
          },
          radius: "circular",
          value: 50,
          variant: "light"
        })
      }, React.createElement(SetupAssistantStep, {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        estimatedTime: "4 mins",
        heading: "Add Users to Your Org",
        id: "card-step-1",
        isExpandable: true,
        onRenderContent: function onRenderContent() {
          return React.createElement(ProgressIndicator, {
            completedSteps: subStepsComplete('complete'),
            id: "card-step-1-progress-indicator",
            orientation: "vertical",
            steps: subStepsComplete('complete'),
            variant: "setup-assistant"
          });
        },
        progress: 100
      }), React.createElement(SetupAssistantStep, {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        estimatedTime: "10 mins",
        heading: "Create Profiles for Your Users",
        id: "card-step-2",
        isExpandable: true,
        onRenderContent: function onRenderContent() {
          return React.createElement(React.Fragment, null, React.createElement(ProgressIndicator, {
            completedSteps: [subSteps('2')[0]],
            id: "card-step-2-progress-indicator",
            orientation: "vertical",
            steps: subSteps('2'),
            selectedStep: subSteps('2')[1],
            variant: "setup-assistant"
          }), React.createElement(ScopedNotification, {
            id: "card-step-2-scoped-notification",
            theme: "light"
          }, React.createElement("p", null, "It looks as if duplicates exist for this lead.", ' ', React.createElement("a", {
            href: "javascript:void(0);"
          }, "View Duplicates."))));
        },
        progress: 33
      }), React.createElement(SetupAssistantStep, {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        estimatedTime: "15 mins",
        heading: "Learn How to Use Profiles to control Visibility",
        id: "card-step-3",
        isExpandable: true,
        onRenderContent: function onRenderContent() {
          return React.createElement(ProgressIndicator, {
            completedSteps: subStepsComplete('complete2'),
            id: "card-step-3-progress-indicator",
            orientation: "vertical",
            steps: subStepsComplete('complete2'),
            variant: "setup-assistant"
          });
        },
        progress: 100
      }), React.createElement(SetupAssistantStep, {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        estimatedTime: "10 mins",
        heading: "Turn on tracking for profiles",
        id: "card-step-4",
        isExpandable: true,
        onRenderContent: function onRenderContent() {
          return React.createElement(ProgressIndicator, {
            id: "card-step-4-progress-indicator",
            orientation: "vertical",
            steps: subStepsIncomplete('incomplete1'),
            selectedStep: subStepsIncomplete('incomplete1')[0],
            variant: "setup-assistant"
          });
        },
        progress: 0
      }), React.createElement(SetupAssistantStep, {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        estimatedTime: "10 mins",
        heading: "Setup Einstein Visibility for Admins",
        id: "card-step-5",
        isExpandable: true,
        onRenderContent: function onRenderContent() {
          return React.createElement(ProgressIndicator, {
            id: "card-step-5-progress-indicator",
            orientation: "vertical",
            steps: subStepsIncomplete('incomplete2'),
            selectedStep: subStepsIncomplete('incomplete2')[0],
            variant: "setup-assistant"
          });
        },
        progress: 0
      })));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'SetupAssistantInACardExample');

export default Example;
//# sourceMappingURL=card.js.map