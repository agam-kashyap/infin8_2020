function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Label from './label';
var displayName = 'PageHeaderTitle';
var propTypes = {
  /**
   * Sets the vertical alignment on the title
   */
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),

  /**
   * Optional class name
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * The title content
   */
  content: PropTypes.node,

  /**
   * Label node, for variants that require a label within the title
   */
  label: PropTypes.node,

  /**
   * Sets whether the title will truncate its content responsively.
   */
  truncate: PropTypes.bool
};
var defaultProps = {
  // align: 'middle',
  title: 'Page Header Title',
  truncate: true
};

var Title =
/*#__PURE__*/
function (_Component) {
  _inherits(Title, _Component);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, _getPrototypeOf(Title).apply(this, arguments));
  }

  _createClass(Title, [{
    key: "render",
    value: function render() {
      if (!this.props.content) return null;
      var classes = classnames('slds-page-header__title', this.props.className, _defineProperty({
        'slds-truncate': this.props.truncate
      }, "slds-align-".concat(this.props.align), this.props.align));
      return React.createElement("div", {
        className: "slds-page-header__name-title"
      }, React.createElement("h1", null, React.createElement(Label, {
        content: this.props.label
      }), React.createElement("span", {
        className: classes,
        title: typeof this.props.content === 'string' ? this.props.content : undefined
      }, this.props.content)));
    }
  }]);

  return Title;
}(Component);

Title.displayName = displayName;
Title.propTypes = propTypes;
Title.defaultProps = defaultProps;
export default Title;
//# sourceMappingURL=title.js.map