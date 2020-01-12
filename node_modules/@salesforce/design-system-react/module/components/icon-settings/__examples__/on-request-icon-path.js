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
import action from '@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg';
import custom from '@salesforce-ux/design-system/assets/icons/custom-sprite/svg/symbols.svg';
import utility from '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';
import standard from '@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg';
import doctype from '@salesforce-ux/design-system/assets/icons/doctype-sprite/svg/symbols.svg';
import Icon from "../../../../components/icon"; // `~` is replaced with design-system-react at runtime

import IconSettings from "../../../../components/icon-settings";
var sprites = {
  action: action,
  custom: custom,
  utility: utility,
  standard: standard,
  doctype: doctype
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
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      Promise.all(Object.keys(sprites).map(function (category) {
        return fetch(sprites[category]).then(function (resp) {
          return resp.text();
        });
      })).then(function (texts) {
        _this.spriteInlineContainer.innerHTML = texts.join('');
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(IconSettings, {
        onRequestIconPath: function onRequestIconPath(_ref) {
          var category = _ref.category,
              name = _ref.name;
          return "#".concat(name);
        }
      }, React.createElement("div", {
        ref: function ref(el) {
          _this2.spriteInlineContainer = el;
        }
      }), React.createElement("div", {
        className: "slds-grid slds-grid_pull-padded slds-grid_vertical-align-center"
      }, React.createElement("div", {
        className: "slds-col_padded"
      }, React.createElement(Icon, {
        assistiveText: {
          label: 'Account'
        },
        category: "standard",
        name: "account",
        size: "small"
      })), React.createElement("div", {
        className: "slds-col_padded"
      }, React.createElement(Icon, {
        assistiveText: {
          label: 'Announcement'
        },
        category: "utility",
        name: "announcement",
        size: "small"
      })), React.createElement("div", {
        className: "slds-col_padded"
      }, React.createElement(Icon, {
        assistiveText: {
          label: 'Description'
        },
        category: "action",
        name: "description",
        size: "small"
      })), React.createElement("div", {
        className: "slds-col_padded"
      }, React.createElement(Icon, {
        assistiveText: {
          label: 'XML'
        },
        category: "doctype",
        name: "xml",
        size: "small"
      })), React.createElement("div", {
        className: "slds-col_padded"
      }, React.createElement(Icon, {
        assistiveText: {
          label: 'custom5'
        },
        category: "custom",
        name: "custom5",
        size: "small"
      }))));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'IconSettingsExample');

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=on-request-icon-path.js.map