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
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import IconSettings from '../../icon-settings';
import ProgressIndicator from '../../../components/progress-indicator';
import { PROGRESS_INDICATOR } from '../../../utilities/constants';
import Default from '../__examples__/default';
import Modal from '../__examples__/modal';
import StepError from '../__examples__/step-error';
import VerticalProgressIndicator from '../__examples__/vertical';
import SetupAssistant from '../__examples__/setup-assistant';
import log from '../../../utilities/log';
var exampleSteps = [{
  id: 0,
  label: React.createElement("i", null, "tooltip label #1"),
  assistiveText: 'This is custom text in the assistive text key - Completed'
}, {
  id: 1,
  label: 'tooltip label #2'
}, {
  id: 2,
  label: React.createElement("strong", null, "tooltip label #3")
}, {
  id: 3,
  label: 'tooltip label #4'
}, {
  id: 4,
  label: 'tooltip label #5'
}];
var manySteps = [{
  id: 0,
  label: 'tooltip label #1'
}, {
  id: 1,
  label: 'tooltip label #2'
}, {
  id: 2,
  label: 'tooltip label #3'
}, {
  id: 3,
  label: 'tooltip label #4'
}, {
  id: 4,
  label: 'tooltip label #5'
}, {
  id: 5,
  label: 'tooltip label #6'
}, {
  id: 6,
  label: 'tooltip label #7'
}, {
  id: 7,
  label: 'tooltip label #8'
}, {
  id: 8,
  label: 'tooltip label #9'
}];
var manyStepsVertical = [{
  id: 0,
  label: 'label #1'
}, {
  id: 1,
  label: 'label #2'
}, {
  id: 2,
  label: 'label #3'
}, {
  id: 3,
  label: 'label #4'
}, {
  id: 4,
  label: 'label #5'
}, {
  id: 5,
  label: 'label #6'
}, {
  id: 6,
  label: 'label #7'
}, {
  id: 7,
  label: 'label #8'
}, {
  id: 8,
  label: 'label #9'
}];

var ExampleProgressIndicator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExampleProgressIndicator, _React$Component);

  function ExampleProgressIndicator(props) {
    var _this;

    _classCallCheck(this, ExampleProgressIndicator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExampleProgressIndicator).call(this, props));
    var steps = props.steps || exampleSteps;
    _this.state = {
      completedSteps: props.completedSteps,
      selectedStep: props.selectedStep,
      steps: steps
    };
    return _this;
  }

  _createClass(ExampleProgressIndicator, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", {
        style: {
          padding: '4rem 1rem 0px'
        }
      }, React.createElement(ProgressIndicator, {
        id: "example-progress-indicator",
        steps: this.state.steps,
        selectedStep: this.state.selectedStep,
        disabledSteps: this.props.disabledSteps,
        completedSteps: this.state.completedSteps,
        orientation: this.props.orientation,
        assistiveText: this.props.assistiveText,
        onStepClick: function onStepClick(event, data) {
          var steps = _this2.state.steps;
          var completedSteps = steps.slice(0, data.step.id);

          if (steps[0].assistiveText) {
            if (completedSteps.length > 0) {
              steps[0].assistiveText = "".concat(steps[0].assistiveText, " - Completed");
            } else {
              steps[0].assistiveText = steps[0].assistiveText.replace(' - Completed', '');
            }
          }

          _this2.setState({
            completedSteps: completedSteps,
            selectedStep: data.step,
            steps: steps
          });

          log({
            action: action,
            event: event,
            eventName: 'On Step Click',
            data: data
          });
        }
      }));
    }
  }]);

  return ExampleProgressIndicator;
}(React.Component);

_defineProperty(ExampleProgressIndicator, "displayName", 'ProgressIndicatorDefault');

storiesOf(PROGRESS_INDICATOR, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return React.createElement(Default, null);
}).add('Base With Many Steps', function () {
  return React.createElement(ExampleProgressIndicator, {
    steps: manySteps,
    selectedStep: manySteps[4],
    completedSteps: manySteps.slice(0, 4) // tooltipIsOpenSteps={stepsBasic.slice(0, 2)}

  });
}).add('Base With Disabled Steps', function () {
  return React.createElement(ExampleProgressIndicator, {
    steps: exampleSteps,
    disabledSteps: [exampleSteps[3], exampleSteps[4]],
    selectedStep: exampleSteps[2],
    completedSteps: exampleSteps.slice(0, 2)
  });
}).add('Step Error', function () {
  return React.createElement(StepError, {
    id: "example-progress-indicator",
    steps: exampleSteps,
    selectedStep: exampleSteps[1],
    completedSteps: exampleSteps.slice(0, 1),
    disabledSteps: exampleSteps.slice(2, 5),
    errorSteps: exampleSteps.slice(1, 2)
  });
}).add('In A Modal (With Step Error) - Needs DOM', function () {
  return typeof document !== 'undefined' ? React.createElement(Modal, null) : null;
}).add('Completed Progress', function () {
  return React.createElement(ExampleProgressIndicator, {
    steps: exampleSteps,
    selectedStep: exampleSteps[exampleSteps.length - 2],
    completedSteps: exampleSteps.slice(0, exampleSteps.length - 2),
    assistiveText: {
      completedStep: 'Finished this step.',
      disabledStep: 'Unable to proceed on this step.'
    }
  });
}).add('Vertical', function () {
  return React.createElement(VerticalProgressIndicator, null);
}).add('VerticalStepError', function () {
  return React.createElement(StepError, {
    id: "example-progress-indicator",
    steps: manyStepsVertical,
    completedSteps: manyStepsVertical.slice(0, 4),
    errorSteps: manyStepsVertical.slice(4, 5),
    orientation: "vertical"
  });
}).add('SetupAssistant', function () {
  return React.createElement(SetupAssistant, null);
});
//# sourceMappingURL=storybook-stories.js.map