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
// Implements the [Expression design pattern](https://lightningdesignsystem.com/components/expression/) in React.
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import assign from 'lodash.assign';
import { EXPRESSION } from '../../utilities/constants';
import ExpressionGroup from './group';
var propTypes = {
  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   * `Expression` children, accepts `ExpressionCondition` & `ExpressionGroup`
   */
  children: PropTypes.node,

  /**
   * Callbacks for various expression events such as trigger change, add group etc
   */
  events: PropTypes.shape({
    onChangeTrigger: PropTypes.func,
    onAddGroup: PropTypes.func,
    onAddCondition: PropTypes.func,
    onChangeCustomLogicValue: PropTypes.func
  }),

  /**
   * **Text labels for internationalization**
   * This object is merged with the default props object on every render.
   * * `addCondition`: Label for the Add Condition Button. Defaults to "Add Condition"
   * * `addGroup`: Label for the Add Group Button. Defaults to "Add Group"
   * * `customLogic`: Label for the text box for inputting `customLogicValue`, if the `triggerType` is `custom`. Defaults to "Custom Logic"
   * * `takeAction`: Label for the `triggerType` selector. Defaults to "Take Action When"
   * * `title` : Title for the Expression. Defaults to "Conditions"
   * * `triggerAll`: Label for the `all` value within the trigger selector
   * * `triggerAlways`: Label for the `always` value within the trigger selector
   * * `triggerAny`: Label for the `any` value within the trigger selector
   * * `triggerCustom`: Label for the `custom` value within the trigger selector
   * * `triggerFormula`: Label for the `formula` value within the trigger selector
   */
  labels: PropTypes.shape({
    addCondition: PropTypes.string,
    addGroup: PropTypes.string,
    customLogic: PropTypes.string,
    takeAction: PropTypes.string,
    title: PropTypes.string,
    triggerAll: PropTypes.string,
    triggerAlways: PropTypes.string,
    triggerAny: PropTypes.string,
    triggerCustom: PropTypes.string,
    triggerFormula: PropTypes.string
  }),

  /**
   * CSS classes to be added to the element with class `.slds-expression`. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Sets the trigger type for the expression.
   */
  triggerType: PropTypes.oneOf(['all', 'any', 'custom', 'always', 'formula']),

  /**
   * Sets the input for the custom logic value input box, shown if the `triggerType` is set to `custom`.
   */
  customLogicValue: PropTypes.string
};
var defaultProps = {
  labels: {
    title: 'Conditions'
  }
};
/**
 * Expression builders help users declaratively construct logical expressions.
 * These expressions can be used when querying for a filtered set of records,
 * creating rules to control when something executes, or any other conditional logic.
 */

var Expression =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Expression, _React$Component);

  function Expression() {
    _classCallCheck(this, Expression);

    return _possibleConstructorReturn(this, _getPrototypeOf(Expression).apply(this, arguments));
  }

  _createClass(Expression, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.generatedId = shortid.generate();
    }
    /**
     * Get the Expression Group's HTML id. Generate a new one if no ID present.
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "render",
    value: function render() {
      var labels = assign({}, defaultProps.labels, this.props.labels);
      return React.createElement("div", {
        className: classNames('slds-expression', this.props.className),
        id: this.getId()
      }, React.createElement("h2", {
        className: "slds-expression__title"
      }, labels.title), React.createElement(ExpressionGroup, {
        isRoot: true,
        id: "".concat(this.getId(), "-group"),
        events: this.props.events,
        labels: labels,
        customLogicValue: this.props.customLogicValue,
        triggerType: this.props.triggerType
      }, this.props.children));
    }
  }]);

  return Expression;
}(React.Component);

Expression.displayName = EXPRESSION;
Expression.propTypes = propTypes;
Expression.defaultProps = defaultProps;
export default Expression;
//# sourceMappingURL=index.js.map