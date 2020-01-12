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
// Implements the [Visual Picker design pattern](https://lightningdesignsystem.com/components/visual-picker/) in React.
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import { VISUAL_PICKER } from '../../utilities/constants';
var propTypes = {
  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   * Visual Picker accepts `Checkbox`, `Radio` and `VisualPickerLink` components as children. Please see `Checkbox`, `Radio` and `VisualPickerLink` for props.
   */
  children: PropTypes.node,

  /**
   * CSS classes to be added to tag with `.slds-form-element`. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   *  Label for the visual picker
   */
  label: PropTypes.string,

  /**
   *  Whether the visual picker is coverable on selection
   */
  coverable: PropTypes.bool,

  /**
   *  Whether the visual picker has a vertical layout
   */
  vertical: PropTypes.bool,

  /**
   * Whether the visual picker has links as children
   */
  links: PropTypes.bool,

  /**
   *  Size for visual picker
   */
  size: PropTypes.oneOf(['medium', 'large'])
};
var defaultProps = {
  size: 'medium',
  vertical: false,
  links: false
};
/**
 * Visual Picker Component
 */

var VisualPicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VisualPicker, _React$Component);

  function VisualPicker() {
    _classCallCheck(this, VisualPicker);

    return _possibleConstructorReturn(this, _getPrototypeOf(VisualPicker).apply(this, arguments));
  }

  _createClass(VisualPicker, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.generatedId = shortid.generate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var options = React.Children.map(this.props.children, function (option, index) {
        return React.cloneElement(option, {
          index: "".concat(_this.props.id || _this.generatedId, "-").concat(index),
          coverable: _this.props.coverable,
          variant: 'visual-picker',
          name: "".concat(_this.props.id || _this.generatedId, "_options"),
          size: _this.props.size,
          vertical: !!_this.props.vertical
        });
      });
      return this.props.links ? React.createElement("div", {
        className: "slds-form-element__control"
      }, this.props.children) : React.createElement("fieldset", {
        id: this.props.id,
        className: classNames("slds-form-element", this.props.className)
      }, React.createElement("legend", {
        className: "slds-form-element__legend slds-form-element__label"
      }, this.props.label), React.createElement("div", {
        className: "slds-form-element__control"
      }, options));
    }
  }]);

  return VisualPicker;
}(React.Component);

VisualPicker.displayName = VISUAL_PICKER;
VisualPicker.propTypes = propTypes;
VisualPicker.defaultProps = defaultProps;
export default VisualPicker;
//# sourceMappingURL=index.js.map