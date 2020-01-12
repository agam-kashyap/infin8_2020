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
// Implements the [Expression Condition design pattern](https://lightningdesignsystem.com/components/expression/) in React.
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import assign from 'lodash.assign'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import { EXPRESSION_CONDITION } from '../../utilities/constants';
import Combobox from '../combobox';
import Input from '../input';
import Button from '../button';
var propTypes = {
  /**
   *  **Assistive text for accessibility.**
   * * `title`: For users of assistive technology, title for the condition fieldset. Defaults to 'Condition'
   * * `deleteIcon`: For users of assistive technology, assistive text for the Delete Condition button's icon. Defaults to 'Delete Condition'
   */
  assistiveText: PropTypes.shape({
    title: PropTypes.string,
    deleteIcon: PropTypes.string
  }),

  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   * CSS classes to be added to the element with class `.slds-expression__row`. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Callbacks for various expression condition events such as value change, delete etc
   */
  events: PropTypes.shape({
    onChangeResource: PropTypes.func,
    onChangeOperator: PropTypes.func,
    onChangeValue: PropTypes.func,
    onDelete: PropTypes.func
  }).isRequired,

  /**
   * If set to true, the component will focus on the first focusable input upon mounting. This is useful for accessibility when adding new conditions.
   */
  focusOnMount: PropTypes.bool,

  /**
   * **Text labels for internationalization**
   * This object is merged with the default props object on every
   * * `deleteCondition`: Title for the delete condition button. Defaults to "Delete Condition".
   * * `label`: Label for the condition, shown left-most in the row. Left empty on default.
   * * `operator`: Label for the operator selection dropdown. Defaults to "Operator"
   * * `resource`: Label for the resource selection dropdown. Defaults to "Resource"
   * * `value`: Label for the value input box. Defaults to "Value"
   */
  labels: PropTypes.shape({
    deleteCondition: PropTypes.string,
    label: PropTypes.string,
    operator: PropTypes.string,
    resource: PropTypes.string,
    value: PropTypes.string
  }),

  /**
   * Controls whether the condition is a sub-condition inside a ExpressionGroup
   */
  isSubCondition: PropTypes.bool,

  /**
   * **Array of item objects that are options in the resource selection dropdown menu.**
   * Each object can contain:
   * * `id`: A unique identifier string.
   * * `label`: A primary string of text for a menu item.
   * ```
   * {
   * 	id: '1',
   * 	label: 'Resource 1',
   * },
   * ```
   * Note: The dropdown uses the Combobox Component, and `resourcesList` is
   * passed as `options` props to it, and hence shall also support more
   * custom objects. Please refer to the Combobox documentation.
   */
  resourcesList: PropTypes.arrayOf(PropTypes.object),

  /**
   *  Accepts an object from the `resourcesList` which needs to be selected
   *  for the resource dropdown menu,
   */
  resourceSelected: PropTypes.object,

  /**
   * **Array of item objects that are options in the operator selection dropdown menu.**
   * Each object can contain:
   * * `id`: A unique identifier string.
   * * `label`: A primary string of text for a menu item.
   * ```
   * {
   * 	id: '1',
   * 	label: 'Operator 1',
   * },
   * ```
   * Note: The dropdown uses the Combobox Component, and `operatorList` is
   * passed as `options` props to it, and hence shall also support more
   * custom objects. Please refer to the Combobox documentation.
   */
  operatorsList: PropTypes.arrayOf(PropTypes.object),

  /**
   *  Accepts an object from the `operatorSelected` which needs to be selected
   *  for the operator dropdown menu,
   */
  operatorSelected: PropTypes.object,

  /**
   *  Sets the input value for the Value input field.
   */
  value: PropTypes.string
};
var defaultProps = {
  assistiveText: {
    title: 'Condition',
    deleteIcon: 'Delete Condition'
  },
  labels: {
    label: '',
    operator: 'Operator',
    resource: 'Resource',
    value: 'Value',
    deleteCondition: 'Delete Condition'
  },
  value: ''
};
/**
 * Expression Condition Component
 */

var ExpressionCondition =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExpressionCondition, _React$Component);

  function ExpressionCondition(props) {
    var _this;

    _classCallCheck(this, ExpressionCondition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpressionCondition).call(this, props));
    _this.generatedId = shortid.generate();
    return _this;
  }

  _createClass(ExpressionCondition, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.focusOnMount && this.rootNode) {
        var input = this.rootNode.querySelector('input');

        if (input) {
          input.focus();
        }
      }
    }
    /**
     * Get the Expression Condition's HTML id. Generate a new one if no ID present.
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var assistiveText = assign({}, defaultProps.assistiveText, this.props.assistiveText);
      var labels = assign({}, defaultProps.labels, this.props.labels);
      return React.createElement("li", {
        className: classNames("slds-expression__row", {
          'slds-expression__row_group': this.props.isSubCondition
        }, this.props.className),
        id: this.getId(),
        ref: function ref(rootNode) {
          _this2.rootNode = rootNode;
        }
      }, React.createElement("fieldset", null, React.createElement("legend", {
        className: "slds-expression__legend"
      }, React.createElement("span", null, labels.label), React.createElement("span", {
        className: "slds-assistive-text"
      }, assistiveText.title)), React.createElement("div", {
        className: "slds-grid slds-gutters_xx-small"
      }, React.createElement("div", {
        className: "slds-col"
      }, React.createElement(Combobox, {
        events: {
          onSelect: this.props.events.onChangeResource
        },
        id: "".concat(this.getId(), "-resource-selector"),
        multiple: false,
        variant: "readonly",
        labels: {
          label: labels.resource
        },
        options: this.props.resourcesList,
        selection: [this.props.resourceSelected]
      })), React.createElement("div", {
        className: "slds-col slds-grow-none"
      }, React.createElement(Combobox, {
        events: {
          onSelect: this.props.events.onChangeOperator
        },
        id: "".concat(this.getId(), "-operator-selector"),
        multiple: false,
        variant: "readonly",
        labels: {
          label: labels.operator
        },
        options: this.props.operatorsList,
        selection: [this.props.operatorSelected],
        singleInputDisabled: !this.props.resourceSelected
      })), React.createElement("div", {
        className: "slds-col"
      }, React.createElement(Input, {
        id: "".concat(this.getId(), "-input"),
        label: labels.value,
        value: this.props.value,
        onChange: this.props.events.onChangeValue,
        disabled: !this.props.resourceSelected
      })), React.createElement("div", {
        className: "slds-col slds-grow-none"
      }, React.createElement("div", {
        className: "slds-form-element"
      }, React.createElement("span", {
        className: "slds-form-element__label"
      }, "\xA0"), React.createElement("div", {
        className: "slds-form-element__control"
      }, React.createElement(Button, {
        id: "".concat(this.getId(), "-delete-button"),
        variant: "outline-brand",
        iconCategory: "utility",
        iconName: "delete",
        iconVariant: "border-filled",
        onClick: this.props.events.onDelete,
        assistiveText: {
          icon: assistiveText.deleteIcon
        },
        title: labels.deleteCondition
      })))))));
    }
  }]);

  return ExpressionCondition;
}(React.Component);

ExpressionCondition.displayName = EXPRESSION_CONDITION;
ExpressionCondition.propTypes = propTypes;
ExpressionCondition.defaultProps = defaultProps;
export default ExpressionCondition;
//# sourceMappingURL=condition.js.map