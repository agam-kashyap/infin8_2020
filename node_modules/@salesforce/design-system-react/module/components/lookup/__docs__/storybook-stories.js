function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import { LOOKUP } from '../../../utilities/constants';
import Lookup from '../../lookup';
import Header from '../../lookup/header';
import Footer from '../../lookup/footer';
import SLDSButton from '../../button';
import Default from '../__examples__/default';
import Files from '../__examples__/files';
import WithSelection from '../__examples__/with-selection';
import DeprecatedWarning from '../../utilities/deprecated-warning';

var DemoLookup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DemoLookup, _React$Component);

  function DemoLookup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DemoLookup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DemoLookup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      options: [{
        label: 'File 1'
      }, {
        label: 'File 2'
      }, {
        label: 'File 3'
      }, {
        label: 'File 4'
      }]
    });

    _defineProperty(_assertThisInitialized(_this), "clearSelected", function () {
      _this.setState({
        currentSelected: -1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (selectedItem) {
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      action('select').apply(void 0, [selectedItem].concat(rest));

      _this.setState({
        currentSelected: _this.state.options.indexOf(selectedItem)
      });
    });

    return _this;
  }

  _createClass(DemoLookup, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("div", null, React.createElement(SLDSButton, {
        onClick: this.clearSelected
      }, "Clear Selected")), React.createElement(Lookup, _extends({}, this.props, {
        onChange: action('change'),
        onSelect: this.handleSelect,
        options: this.state.options,
        selectedItem: this.state.currentSelected,
        silenceDeprecationWarning: true
      })));
    }
  }]);

  return DemoLookup;
}(React.Component);

_defineProperty(DemoLookup, "displayName", 'DemoLookup');

var DemoLookupAccounts =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(DemoLookupAccounts, _React$Component2);

  function DemoLookupAccounts() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, DemoLookupAccounts);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(DemoLookupAccounts)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "state", {
      options: [{
        label: "Paddy's Pub",
        subTitle: 'Boston, MA'
      }, {
        label: 'Tyrell Corp',
        subTitle: 'San Francisco, CA'
      }, {
        label: 'Paper St. Soap Company',
        subTitle: 'Beloit, WI'
      }, {
        label: 'Nakatomi Investments',
        subTitle: 'Chicago, IL'
      }, {
        label: 'Acme Landscaping'
      }, {
        label: 'Acme Construction',
        subTitle: 'Grand Marais, MN'
      }]
    });

    _defineProperty(_assertThisInitialized(_this2), "handleSelect", function (selectedItem) {
      for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        rest[_key4 - 1] = arguments[_key4];
      }

      action('select').apply(void 0, [selectedItem].concat(rest));

      _this2.setState({
        selectedItem: selectedItem
      });
    });

    return _this2;
  }

  _createClass(DemoLookupAccounts, [{
    key: "render",
    value: function render() {
      return React.createElement(Lookup, _extends({}, this.props, {
        footerRenderer: Footer,
        headerRenderer: Header,
        onChange: action('change'),
        onSelect: this.handleSelect,
        options: this.state.options,
        silenceDeprecationWarning: true
      }));
    }
  }]);

  return DemoLookupAccounts;
}(React.Component);

_defineProperty(DemoLookupAccounts, "displayName", 'DemoLookupAccounts');

storiesOf(LOOKUP, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, React.createElement(DeprecatedWarning, null), getStory()));
}).add('Standard', function () {
  return React.createElement(DemoLookup, {
    emptyMessage: "No Files found",
    hasError: false,
    iconCategory: "utility",
    iconName: "open_folder",
    isInline: true,
    label: "Files"
  });
}).add('Disabled', function () {
  return React.createElement(DemoLookup, {
    disabled: true
  });
}).add('Standard with Accounts', function () {
  return React.createElement(DemoLookupAccounts, {
    emptyMessage: "No Accounts found",
    hasError: false,
    iconCategory: "standard",
    iconName: "account",
    isInline: true,
    label: "Account"
  });
}).add('Custom Empty Message Content', function () {
  return React.createElement(DemoLookup, {
    emptyMessage: React.createElement("span", null, "No matches."),
    isInline: true
  });
}).add('Docs site Default', function () {
  return React.createElement(Default, null);
}).add('Docs site Files', function () {
  return React.createElement(Files, null);
}).add('Docs site WithSelection', function () {
  return React.createElement(WithSelection, null);
});
//# sourceMappingURL=storybook-stories.js.map