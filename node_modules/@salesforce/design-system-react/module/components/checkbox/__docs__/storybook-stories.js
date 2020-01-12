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
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconSettings from '../../icon-settings';
import { CHECKBOX } from '../../../utilities/constants';
import Checkbox from '../';
import Button from '../../button';
import DefaultCheckbox from '../__examples__/default';
import Error from '../__examples__/error';
import GroupedWithTristate from '../__examples__/grouped-with-tristate';
import SnapshotBase from '../__examples__/snapshot-base';
import SnapshotToggle from '../__examples__/snapshot-toggle';
import Toggle from '../__examples__/toggle';

var CheckboxIndeterminate =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckboxIndeterminate, _React$Component);

  function CheckboxIndeterminate() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CheckboxIndeterminate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CheckboxIndeterminate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      indeterminate: true,
      checked: true,
      currentStateHelper: 'Indeterminate'
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (checked, event, data) {
      var checkedLabel = data.checked ? 'Checked' : 'Unchecked';

      _this.setState({
        checked: data.checked,
        currentStateHelper: data.indeterminate ? 'Indeterminate' : checkedLabel,
        indeterminate: data.indeterminate
      });

      action('handleChange')(checked, event, "checked: ".concat(data.checked, ",\n\t\t\tindeterminate: ").concat(data.indeterminate));
    });

    _defineProperty(_assertThisInitialized(_this), "changeToIndeterminate", function (event) {
      _this.setState({
        currentStateHelper: 'Indeterminate',
        checked: true,
        indeterminate: true
      });

      action('changeToIndeterminate')(event, 'checked: true, indeterminate: true');
    });

    _defineProperty(_assertThisInitialized(_this), "changeToCheck", function (event) {
      _this.setState({
        currentStateHelper: 'Checked',
        checked: true,
        indeterminate: false
      });

      action('changeToCheck')(event, 'checked: true, indeterminate: false');
    });

    _defineProperty(_assertThisInitialized(_this), "changeToUnChecked", function (event) {
      _this.setState({
        currentStateHelper: 'Unchecked',
        checked: false,
        indeterminate: false
      });

      action('changeToUnChecked')(event, 'checked: false, indeterminate: false');
    });

    return _this;
  }

  _createClass(CheckboxIndeterminate, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(Button, {
        onClick: this.changeToIndeterminate,
        label: "Indeterminate"
      }), React.createElement(Button, {
        onClick: this.changeToCheck,
        label: "Check"
      }), React.createElement(Button, {
        onClick: this.changeToUnChecked,
        label: "Uncheck"
      }), React.createElement("p", null, React.createElement("strong", null, "Current State:"), " ", this.state.currentStateHelper), React.createElement(Checkbox, {
        assistiveText: {
          label: 'Checkbox (indeterminate)'
        },
        id: "checkbox-example-standard-indeterminate",
        labels: {
          label: 'Checkbox label'
        },
        name: "checkbox-example-standard-indeterminate",
        checked: this.state.checked,
        indeterminate: this.state.indeterminate,
        onChange: this.handleChange
      }), React.createElement("div", {
        className: "slds-box slds-text-longform slds-m-top_large"
      }, React.createElement("p", null, "This example has an ", React.createElement("em", null, "indeterminate"), " checkbox."), React.createElement("p", null, "It is set by providing the ", React.createElement("code", null, "indeterminate"), " prop as", ' ', React.createElement("code", null, React.createElement("strong", null, "true")), "."), React.createElement("p", null, "Once it is clicked, there is no way to make it go ", React.createElement("em", null, "back"), " to the indeterminate state,", ' ', React.createElement("a", {
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate#Checkbox_radio_button"
      }, "it must be done programatically, through JavaScript"), ".")));
    }
  }]);

  return CheckboxIndeterminate;
}(React.Component);

_defineProperty(CheckboxIndeterminate, "displayName", "".concat(CHECKBOX, "_INDETERMINATE"));

storiesOf(CHECKBOX, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Checkbox (default, indeterminate, required, disabled', function () {
  return React.createElement(DefaultCheckbox, null);
}).add('Checkbox (assistive text)', function () {
  return React.createElement("div", null, React.createElement(Checkbox, {
    assistiveText: {
      label: "This is my checkbox.\n\t\t\t\t\t\t\tThere are many like it, but this one is mine.\n\t\t\t\t\t\t\tMy checkbox is my best friend.\n\t\t\t\t\t\t\tIt is my life.\n\t\t\t\t\t\t\tI must master it as I must master my life.\n\t\t\t\t\t\t\tWithout me, my checkbox is useless. Without my checkbox, I am useless.\n\t\t\t\t\t\t\tI must make my checkbox true.\n\t\t\t\t\t\t\tI must make it truer than my radio button who is trying to... "
    },
    id: "checkbox-example-base-assistiveText",
    labels: {
      label: 'Checkbox label'
    },
    name: "checkbox-example-base-assistiveText",
    onChange: action('change')
  }), React.createElement("div", {
    className: "slds-box slds-text-longform slds-m-top_large"
  }, React.createElement("p", null, "This example has assistive text. In Safari on Mac you can turn assistive text on by using the keyboard combination:", React.createElement("strong", null, "Command + F5"), "."), React.createElement("p", null, "Once you have enabled it, use your tab key to focus on the checkbox input, and the system should read you what is supplied to the checkbox as the ", React.createElement("code", null, "assistiveText"), "property.")));
}).add('Checkbox (checked)', function () {
  return React.createElement(Checkbox, {
    checked: true,
    id: "checkbox-example-base-checked",
    labels: {
      label: 'Checkbox label'
    },
    name: "checkbox-example-base-checked",
    onChange: action('change')
  });
}).add('Checkbox (indeterminate)', function () {
  return React.createElement(CheckboxIndeterminate, null);
}).add('Checkbox Toggle', function () {
  return React.createElement(Checkbox, {
    id: "checkbox-example-toggle",
    labels: {
      label: 'Checkbox Toggle label'
    },
    name: "checkbox-example-toggle",
    onChange: action('change'),
    onBlur: function onBlur(e) {
      console.log('bluring ', e.target);
    },
    variant: "toggle"
  });
}).add('Checkbox Toggle (with error)', function () {
  return React.createElement(Checkbox, {
    id: "checkbox-example-toggle-error",
    labels: {
      label: 'Checkbox Toggle label'
    },
    name: "checkbox-example-toggle-error",
    errorText: "This field has an error.",
    onChange: action('change'),
    onBlur: function onBlur(e) {
      console.log('bluring ', e.target);
    },
    variant: "toggle"
  });
}).add('Checkbox Toggle (required)', function () {
  return React.createElement(Checkbox, {
    id: "checkbox-example-toggle-required",
    labels: {
      label: 'Checkbox Toggle label'
    },
    name: "checkbox-example-toggle-required",
    onChange: action('change'),
    onBlur: function onBlur(e) {
      console.log('bluring ', e.target);
    },
    variant: "toggle",
    required: true
  });
}).add('Checkbox Toggle (disabled)', function () {
  return React.createElement(Checkbox, {
    id: "checkbox-example-toggle-disabled",
    labels: {
      label: 'Checkbox Toggle label'
    },
    name: "checkbox-example-toggle-disabled",
    onChange: action('change'),
    onBlur: function onBlur(e) {
      console.log('bluring ', e.target);
    },
    variant: "toggle",
    disabled: true
  });
}).add('Checkbox Toggle (assistive text)', function () {
  return React.createElement("div", null, React.createElement(Checkbox, {
    assistiveText: {
      label: "This is my checkbox.\n\t\t\t\t\t\t\tThere are many like it, but this one is mine.\n\t\t\t\t\t\t\tMy checkbox is my best friend.\n\t\t\t\t\t\t\tIt is my life.\n\t\t\t\t\t\t\tI must master it as I must master my life.\n\t\t\t\t\t\t\tWithout me, my checkbox is useless. Without my checkbox, I am useless.\n\t\t\t\t\t\t\tI must make my checkbox true.\n\t\t\t\t\t\t\tI must make it truer than my radio button who is trying to... "
    },
    id: "checkbox-example-base-assistiveText",
    labels: {
      label: 'Checkbox label'
    },
    name: "checkbox-example-base-assistiveText",
    onChange: action('change'),
    variant: "toggle"
  }), React.createElement("div", {
    className: "slds-box slds-text-longform slds-m-top_large"
  }, React.createElement("p", null, "This example has assistive text. In Safari on Mac you can turn assistive text on by using the keyboard combination:", React.createElement("strong", null, "Command + F5"), "."), React.createElement("p", null, "Once you have enabled it, use your tab key to focus on the checkbox input, and the system should read you what is supplied to the checkbox as the ", React.createElement("code", null, "assistiveText"), "property.")));
}).add('Checkbox Toggle (checked)', function () {
  return React.createElement(Checkbox, {
    checked: true,
    id: "checkbox-example-toggle-checked",
    labels: {
      label: 'Checkbox label'
    },
    name: "checkbox-example-toggle-checked",
    onChange: action('change'),
    variant: "toggle"
  });
}).add('Doc site Error', function () {
  return React.createElement(Error, null);
}).add('Doc site Snapshot Base', function () {
  return React.createElement(SnapshotBase, null);
}).add('Doc site Snapshot Toggle', function () {
  return React.createElement(SnapshotToggle, null);
}).add('Doc site Toggle', function () {
  return React.createElement(Toggle, null);
}).add('Grouped with Tristate', function () {
  return React.createElement(GroupedWithTristate, null);
});
//# sourceMappingURL=storybook-stories.js.map