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
import PropTypes from 'prop-types';
import Pill from "../../../../components/pill";
import Icon from "../../../../components/icon";
import Avatar from "../../../../components/avatar";
import IconSettings from "../../../../components/icon-settings";

var noop = function noop() {
  return undefined;
};

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      pill1: true,
      pill2: true,
      pill3: true
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      _this.props.action('onClick')(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onRemove", function (event, pill) {
      _this.props.action('onRemove')(event);

      _this.setState(_defineProperty({}, pill, false));
    });

    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement("div", {
        className: "slds-grid slds-grid_pull-padded-medium"
      }, React.createElement("div", {
        className: "slds-p-horizontal_medium"
      }, this.state.pill1 ? React.createElement(Pill, {
        labels: {
          label: 'Pill Label',
          title: 'Full pill label verbiage mirrored here',
          removeTitle: 'Remove'
        },
        icon: React.createElement(Icon, {
          title: "Account",
          category: "standard",
          name: "account"
        }),
        onClick: this.onClick,
        onRemove: function onRemove(event) {
          return _this2.onRemove(event, 'pill1');
        }
      }) : null), React.createElement("div", {
        className: "slds-p-horizontal_medium"
      }, this.state.pill2 ? React.createElement(Pill, {
        labels: {
          label: 'Pill Label',
          title: 'Full pill label verbiage mirrored here',
          removeTitle: 'Remove'
        },
        avatar: React.createElement(Avatar, {
          variant: "user",
          title: "User avatar",
          imgSrc: "https://lightningdesignsystem.com/assets/images/avatar2.jpg"
        }),
        onClick: this.onClick,
        onRemove: function onRemove(event) {
          return _this2.onRemove(event, 'pill2');
        }
      }) : null), React.createElement("div", {
        className: "slds-p-horizontal_medium"
      }, this.state.pill3 ? React.createElement(Pill, {
        labels: {
          label: 'Pill Label',
          title: 'Full pill label verbiage mirrored here',
          removeTitle: 'Remove'
        },
        hasError: true,
        icon: React.createElement(Icon, {
          title: "Error",
          category: "utility",
          name: "warning",
          className: "slds-icon-text-error"
        }),
        onClick: this.onClick,
        onRemove: function onRemove(event) {
          return _this2.onRemove(event, 'pill3');
        }
      }) : null)));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'PillWithIconExample');

_defineProperty(Example, "propTypes", {
  action: PropTypes.func
});

_defineProperty(Example, "defaultProps", {
  action: function action() {
    return noop;
  }
});

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=icon.js.map