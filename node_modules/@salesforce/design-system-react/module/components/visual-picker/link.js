function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// Implements the [Visual Picker Link design pattern](https://lightningdesignsystem.com/components/visual-picker/) in React.
// Based on SLDS v2.4.5
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { VISUAL_PICKER_LINK } from '../../utilities/constants';
var propTypes = {
  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   * CSS classes to be added to tag with `.slds-form-element`. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * URL for the Link
   */
  href: PropTypes.string,

  /**
   * Icon node for the Link
   */
  icon: PropTypes.node,

  /**
   * Title for the Link
   */
  title: PropTypes.string,

  /**
   * Description for the Link
   */
  description: PropTypes.string
};
/**
 * Visual Picker Link Component
 */

var VisualPickerLink =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VisualPickerLink, _React$Component);

  function VisualPickerLink() {
    _classCallCheck(this, VisualPickerLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(VisualPickerLink).apply(this, arguments));
  }

  _createClass(VisualPickerLink, [{
    key: "render",
    value: function render() {
      return React.createElement("a", {
        href: this.props.href,
        id: this.props.id,
        className: classNames('slds-box', 'slds-box_link', 'slds-theme_default', 'slds-box_x-small', 'slds-media', 'slds-visual-picker_vertical', this.props.className)
      }, React.createElement("div", {
        className: "slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center slds-m-left_xx-small"
      }, this.props.icon), React.createElement("div", {
        className: "slds-media__body slds-border_left slds-p-around_small"
      }, React.createElement("h2", {
        className: "slds-truncate slds-text-heading_small",
        title: this.props.title
      }, this.props.title), React.createElement("p", {
        className: "slds-m-top_small"
      }, this.props.description)));
    }
  }]);

  return VisualPickerLink;
}(React.Component);

VisualPickerLink.displayName = VISUAL_PICKER_LINK;
VisualPickerLink.propTypes = propTypes;
export default VisualPickerLink;
//# sourceMappingURL=link.js.map