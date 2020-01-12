function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// Implements the [Expression Group design pattern](https://lightningdesignsystem.com/components/expression/) in React.
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import assign from 'lodash.assign'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import { EXPRESSION_GROUP } from '../../utilities/constants';
import Combobox from '../combobox';
import Button from '../button';
import Input from '../input';
var propTypes = {
  /**
   *  **Assistive text for accessibility.**
   * * `label`: For users of assistive technology, assistive text for the expression group's label.
   * * `addCondition`: For users of assistive technology, assistive text for the Add Condition button's icon.
   * * `addGroup`: For users of assistive technology, assistive text for the Add Group button's icon.
   */
  assistiveText: PropTypes.shape({
    label: PropTypes.string,
    addCondition: PropTypes.string,
    addGroup: PropTypes.string
  }),

  /**
   * HTML id for ExpressionGroup component.
   */
  id: PropTypes.string,

  /**
   * `ExpressionGroup` children, accepts `ExpressionCondition`. (Also accepts sub-`ExpressionGroup` if `isRoot`)
   */
  children: PropTypes.node,

  /**
   * CSS classes to be added to the element with class `.slds-expression__group`. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Callbacks for various expression group events such as trigger change, add condition etc
   */
  events: PropTypes.shape({
    onChangeTrigger: PropTypes.func,
    onChangeCustomLogicValue: PropTypes.func,
    onAddCondition: PropTypes.func,
    onAddGroup: PropTypes.func
  }),

  /**
   * If set to true, the component will focus on the first focusable input upon mounting. This is useful for accessibility when adding new groups.
   */
  focusOnMount: PropTypes.bool,

  /**
   * **Text labels for internationalization**
   * This object is merged with the default props object on every render.
   * * `addCondition`: Label for the Add Condition Button. Defaults to "Add Condition"
   * * `addGroup`: Label for the Add Group Button. Defaults to "Add Group"
   * * `customLogic`: Label for the text box for inputting `customLogicValue`, if the `triggerType` is `custom`. Defaults to "Custom Logic"
   * * `label`: Label for the expression group, to indicate condition connectors based on the parent's trigger-type chosen. Defaults to ""
   * * `takeAction`: Label for the `triggerType` selector. Defaults to "Take Action When"
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
    label: PropTypes.string,
    takeAction: PropTypes.string,
    triggerAll: PropTypes.string,
    triggerAlways: PropTypes.string,
    triggerAny: PropTypes.string,
    triggerCustom: PropTypes.string,
    triggerFormula: PropTypes.string
  }),

  /**
   * Whether the group is at root level
   */
  isRoot: PropTypes.bool,

  /**
   * Trigger type for the Group
   */
  triggerType: PropTypes.oneOf(['all', 'any', 'custom', 'always', 'formula']),

  /**
   * Sets the input for the custom logic value input box, shown if the `triggerType` is set to `custom`.
   */
  customLogicValue: PropTypes.string
};
var defaultProps = {
  triggerType: 'all',
  customLogicValue: '',
  labels: {
    label: '',
    takeAction: 'Take Action When',
    customLogic: 'Custom Logic',
    addCondition: 'Add Condition',
    addGroup: 'Add Group',
    triggerAll: 'All Conditions Are Met',
    triggerAny: 'Any Condition Is Met',
    triggerCustom: 'Custom Logic Is Met',
    triggerAlways: 'Always (No Criteria)',
    triggerFormula: 'Formula Evaluates To True'
  }
};
/**
 * Expression Group Component
 */

var ExpressionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExpressionGroup, _React$Component);

  _createClass(ExpressionGroup, null, [{
    key: "triggerChange",

    /**
     *  Return triggerType selected, processing the triggerType objects generated
     */
    value: function triggerChange(event, data) {
      var selection = data.selection[0].id;
      var trigger = '';

      if (selection === '1') {
        trigger = 'all';
      } else if (selection === '2') {
        trigger = 'any';
      } else if (selection === '3') {
        trigger = 'custom';
      } else if (selection === '4') {
        trigger = 'always';
      } else if (selection === '5') {
        trigger = 'formula';
      }

      return trigger;
    }
  }]);

  function ExpressionGroup(props) {
    var _this;

    _classCallCheck(this, ExpressionGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpressionGroup).call(this, props));
    _this.generatedId = shortid.generate();
    return _this;
  }

  _createClass(ExpressionGroup, [{
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
     * Get the Expression Group's HTML id. Generate a new one if no ID present.
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
    /**
     * Generate and return trigger type objects, with labels either sent as props or using default props.
     */

  }, {
    key: "getTriggers",
    value: function getTriggers() {
      var labels = assign({}, defaultProps.labels, this.props.labels);
      return [{
        id: '1',
        label: labels.triggerAll
      }, {
        id: '2',
        label: labels.triggerAny
      }, {
        id: '3',
        label: labels.triggerCustom
      }, {
        id: '4',
        label: labels.triggerAlways
      }, {
        id: '5',
        label: labels.triggerFormula
      }];
    }
    /**
     *  Returns object of trigger from trigger passed as prop
     */

  }, {
    key: "getTriggerSelection",
    value: function getTriggerSelection() {
      var selection = this.props.triggerType;
      var Triggers = this.getTriggers();
      var t = [];

      if (selection === 'all') {
        // eslint-disable-next-line fp/no-mutating-methods
        t.push(Triggers[0]);
      } else if (selection === 'any') {
        // eslint-disable-next-line fp/no-mutating-methods
        t.push(Triggers[1]);
      } else if (selection === 'custom') {
        // eslint-disable-next-line fp/no-mutating-methods
        t.push(Triggers[2]);
      } else if (selection === 'always') {
        // eslint-disable-next-line fp/no-mutating-methods
        t.push(Triggers[3]);
      } else if (selection === 'formula') {
        // eslint-disable-next-line fp/no-mutating-methods
        t.push(Triggers[4]);
      }

      return t;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var assistiveText = assign({}, defaultProps.assistiveText, this.props.assistiveText);
      var labels = assign({}, defaultProps.labels, this.props.labels);
      var triggerCombobox = React.createElement(Combobox, {
        events: {
          onSelect: function onSelect(event, data) {
            return _this2.props.events.onChangeTrigger(event, {
              triggerType: ExpressionGroup.triggerChange(event, data)
            });
          }
        },
        id: "".concat(this.getId(), "-take-action-trigger"),
        multiple: false,
        options: this.getTriggers(),
        variant: "readonly",
        labels: {
          label: labels.takeAction
        },
        selection: this.getTriggerSelection()
      });
      var buttons = this.props.triggerType !== 'always' && this.props.triggerType !== 'formula' ? React.createElement("div", {
        className: "slds-expression__buttons"
      }, React.createElement(Button, {
        iconCategory: "utility",
        iconName: "add",
        iconPosition: "left",
        id: "".concat(this.getId(), "-add-condition-button"),
        label: labels.addCondition,
        assistiveText: {
          icon: assistiveText.addCondition
        },
        onClick: this.props.events.onAddCondition
      }), this.props.isRoot ? React.createElement(Button, {
        iconCategory: "utility",
        iconName: "add",
        iconPosition: "left",
        id: "".concat(this.getId(), "-add-group-button"),
        label: labels.addGroup,
        assistiveText: {
          icon: assistiveText.addGroup
        },
        onClick: this.props.events.onAddGroup
      }) : null) : null;
      var body = null;

      if (this.props.triggerType !== 'always') {
        if (this.props.isRoot && this.props.triggerType === 'formula') {
          body = this.props.children;
        } else {
          body = React.createElement(React.Fragment, null, this.props.triggerType === 'custom' ? React.createElement(Input, {
            label: labels.customLogic,
            className: "slds-expression__custom-logic",
            id: "".concat(this.getId(), "-custom-logic-input"),
            value: this.props.customLogicValue,
            variant: "base",
            onChange: this.props.events.onChangeCustomLogicValue
          }) : null, React.createElement("ul", null, this.props.children));
        }
      }

      if (this.props.isRoot) {
        if (this.props.triggerType === 'formula') {
          return React.createElement(React.Fragment, null, React.createElement("div", {
            className: "slds-expression__options"
          }, triggerCombobox), body);
        }

        return React.createElement("div", {
          className: classNames(this.props.className),
          id: this.getId()
        }, React.createElement("div", {
          className: "slds-expression__options"
        }, triggerCombobox), body, buttons);
      }

      return React.createElement("li", {
        className: classNames('slds-expression__group', this.props.className),
        id: this.getId(),
        ref: function ref(rootNode) {
          _this2.rootNode = rootNode;
        }
      }, React.createElement("fieldset", null, React.createElement("legend", {
        className: "slds-expression__legend slds-expression__legend_group"
      }, React.createElement("span", null, labels.label), React.createElement("span", {
        className: "slds-assistive-text"
      }, assistiveText.label)), React.createElement("div", {
        className: "slds-expression__options"
      }, triggerCombobox), body, buttons));
    }
  }]);

  return ExpressionGroup;
}(React.Component);

ExpressionGroup.displayName = EXPRESSION_GROUP;
ExpressionGroup.propTypes = propTypes;
ExpressionGroup.defaultProps = defaultProps;
export default ExpressionGroup;
//# sourceMappingURL=group.js.map