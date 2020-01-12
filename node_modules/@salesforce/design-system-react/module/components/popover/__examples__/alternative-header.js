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
import Popover from "../../../../components/popover"; // `~` is replaced with design-system-react at runtime

import Button from "../../../../components/button";
import Icon from "../../../../components/icon";
var panelContent = React.createElement("div", null, React.createElement("dl", {
  className: "slds-popover__body-list"
}, React.createElement("dt", {
  className: "slds-m-bottom_small"
}, React.createElement("div", {
  className: "slds-media slds-media_center"
}, React.createElement("div", {
  className: "slds-media__figure"
}, React.createElement(Icon, {
  assistiveText: {
    label: 'Opportunity Icon'
  },
  category: "standard",
  name: "opportunity",
  size: "small",
  tabIndex: "0"
})), React.createElement("div", {
  className: "slds-media__body"
}, React.createElement("p", {
  id: "ALTERNATIVE-HEADING",
  className: "slds-text-heading_small slds-hyphenate"
}, "Opportunities (1+)")))), React.createElement("dd", {
  className: "slds-tile"
}, React.createElement("p", {
  className: "slds-truncate",
  title: "Tesla - Mule ESB"
}, React.createElement("a", {
  href: "javascript:void(0);"
}, "Tesla - Mule ESB")), React.createElement("div", {
  className: "slds-tile__detail"
}, React.createElement("dl", {
  className: "slds-dl_horizontal slds-text-body_small"
}, React.createElement("dt", {
  className: "slds-dl_horizontal__label"
}, React.createElement("p", {
  className: "slds-truncate",
  title: "Value"
}, "Value")), React.createElement("dd", {
  className: "slds-dl_horizontal__detail slds-tile__meta"
}, React.createElement("p", {
  className: "slds-truncate",
  title: "$500,000"
}, "$500,000")), React.createElement("dt", {
  className: "slds-dl_horizontal__label"
}, React.createElement("p", {
  className: "slds-truncate",
  title: "Close Date"
}, "Close Date")), React.createElement("dd", {
  className: "slds-dl_horizontal__detail slds-tile__meta"
}, React.createElement("p", {
  className: "slds-truncate",
  title: "Dec 15, 2015"
}, "Dec 15, 2015"))))), React.createElement("dd", {
  className: "slds-m-top_x-small slds-text-align_right"
}, React.createElement("a", {
  href: "javascript:void(0);",
  title: "View all Opportunities"
}, "View All"))));

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
      }, React.createElement("div", null, React.createElement(Popover, {
        ariaLabelledby: "ALTERNATIVE-HEADING",
        body: panelContent,
        id: "popover-alternative-header"
      }, React.createElement(Button, {
        label: "Trigger Popover"
      }))));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'PopoverExample');

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=alternative-header.js.map