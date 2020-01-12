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
// Implements the [Button Group design pattern](https://lightningdesignsystem.com/components/button-groups/) in React.
// Based on SLDS v2.1.1
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import assign from 'lodash.assign'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import { BUTTON_GROUP } from '../../utilities/constants';
var propTypes = {
  /**
   * Children are expected to be components. If last button triggers a dropdown menu, use Dropdown instead of Button. _Tested with snapshot testing._
   */
  children: PropTypes.node.isRequired,

  /**
   * CSS classes added to `slds-button-group` or `slds-checkbox_button-group` tag
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * If the `labels.label` prop is set, a `.slds-form-element` classed fieldset element is added as a container. This prop applies classes to that element
   */
  classNameContainer: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   * **Text labels for internationalization**
   * This object is merged with the default props object on every render.
   * * `error`: Message to display when any of Checkboxes are in an error state. _Tested with snapshot testing._
   * * `label`: This label appears above the button group. _Tested with snapshot testing._
   */
  labels: PropTypes.shape({
    error: PropTypes.string,
    label: PropTypes.string
  }),

  /**
   * Use checkbox variant for "Checkbox Button Group" styling and add Checkbox components as children _Tested with snapshot testing._
   */
  variant: PropTypes.oneOf(['checkbox', 'list'])
};
var defaultProps = {
  labels: {}
};
/**
 * The ButtonGroup component wraps other components (ie. Button, MenuDropdown, PopoverTooltip, Checkboxes, etc).
 */

var ButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonGroup, _React$Component);

  function ButtonGroup(props) {
    var _this;

    _classCallCheck(this, ButtonGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonGroup).call(this, props));
    _this.generatedId = shortid.generate();
    return _this;
  }

  _createClass(ButtonGroup, [{
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // Merge objects of strings with their default object
      var labels = assign({}, defaultProps.labels, this.props.labels);
      var zeroIndexLength = React.Children.count(this.props.children) - 1;
      var children = this.props.children;

      if (zeroIndexLength > 0) {
        children = React.Children.map(this.props.children, function (child, index) {
          var newChild;

          if (index === zeroIndexLength) {
            newChild = React.cloneElement(child, {
              triggerClassName: 'slds-button_last'
            });
          }

          return newChild || child;
        });
      }

      var component;

      if (this.props.variant === 'checkbox') {
        children = React.Children.map(this.props.children, function (child) {
          var cloneProps = {
            variant: 'button-group'
          };

          if (labels.error) {
            cloneProps['aria-describedby'] = "button-group-error-".concat(_this2.getId());
          }

          return React.cloneElement(child, cloneProps);
        });
        component = React.createElement("div", {
          className: classNames('slds-checkbox_button-group', this.props.className),
          id: this.getId()
        }, children);
      } else if (this.props.variant === 'list') {
        component = React.createElement("ul", {
          className: classNames('slds-button-group-list', this.props.className),
          id: this.getId()
        }, React.Children.map(this.props.children, function (child) {
          return React.createElement("li", null, child);
        }));
      } else {
        component = React.createElement("div", {
          className: classNames('slds-button-group', this.props.className),
          id: this.getId(),
          role: "group"
        }, children);
      }

      if (this.props.variant === 'checkbox' || this.props.labels.label) {
        component = React.createElement("fieldset", {
          className: classNames('slds-form-element', {
            'slds-has-error': labels.error
          }, this.props.classNameContainer)
        }, React.createElement("legend", {
          className: "slds-form-element__legend slds-form-element__label"
        }, this.props.labels.label), React.createElement("div", {
          className: "slds-form-element__control"
        }, component, labels.error ? React.createElement("div", {
          className: "slds-form-element__help",
          id: "button-group-error-".concat(this.getId())
        }, labels.error) : null));
      }

      return component;
    }
  }]);

  return ButtonGroup;
}(React.Component);

ButtonGroup.displayName = BUTTON_GROUP;
ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;
export default ButtonGroup;
//# sourceMappingURL=index.js.map