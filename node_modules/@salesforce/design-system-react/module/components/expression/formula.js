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

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// Implements the [Expression Formula design pattern](https://lightningdesignsystem.com/components/expression/) in React.
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import assign from 'lodash.assign';
import ContentEditable from 'react-contenteditable'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import { EXPRESSION_FORMULA } from '../../utilities/constants';
import Button from '../button';
var propTypes = {
  /**
   *  **Assistive text for accessibility.**
   * * `help`: Assistive text for help icon
   */
  assistiveText: PropTypes.shape({
    help: PropTypes.string
  }),

  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   * CSS classes to be added to the element with class `.slds-form-element`. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Callbacks for various expression formula events such as text editor change, check syntax etc
   */
  events: PropTypes.shape({
    onChangeTextEditor: PropTypes.func,
    onClickHelp: PropTypes.func,
    onClickCheckSyntax: PropTypes.func
  }),

  /**
   * **Text labels for internationalization**
   * This object is merged with the default props object on every render.
   * * `label`: Label for the Expression Formula group.Defaults to "Formula"
   * * `checkSyntax`: Label for the Check Syntax Button. Defaults to "Check Syntax"
   * * `textArea`: Label for the `triggerType` selector. Defaults to "Take Action When"
   */
  labels: PropTypes.shape({
    label: PropTypes.string,
    checkSyntax: PropTypes.string,
    textArea: PropTypes.string
  }),

  /**
   *  Accepts a single combobox component, to select resource in the expression formula editor
   */
  resourceCombobox: PropTypes.node,

  /**
   *  Accepts a single combobox component, to select function in the expression formula editor
   */
  functionCombobox: PropTypes.node,

  /**
   *  Accepts a single input component, to enter operator in the expression formula editor
   */
  operatorInput: PropTypes.node,

  /**
   *  Value for the text editor in expression formula editor
   */
  textEditorValue: PropTypes.node
};
var defaultProps = {
  assistiveText: {
    help: 'Help'
  },
  labels: {
    label: 'Formula',
    checkSyntax: 'Check Syntax',
    textArea: 'Text Area'
  }
};
/**
 * Expression Formula Component
 */

var ExpressionFormula =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExpressionFormula, _React$Component);

  function ExpressionFormula() {
    var _this;

    _classCallCheck(this, ExpressionFormula);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpressionFormula).call(this));

    _defineProperty(_assertThisInitialized(_this), "handleTextEditorChange", function (event) {
      var textEditorValue = event.target.value;

      if (_this.props.textEditorValue === undefined) {
        _this.setState({
          textEditorValue: textEditorValue
        });
      }

      if (_this.props.events && _this.props.events.onChangeTextEditor) {
        _this.props.events.onChangeTextEditor(event, {
          textEditorValue: textEditorValue
        });
      }
    });

    _this.textEditorRef = React.createRef();
    _this.state = {
      textEditorValue: 'Compose formula...' // default is set here to preserve functionality if not controlled by props.textEditorValue

    };
    _this.generatedId = shortid.generate();
    return _this;
  }
  /**
   * Get the Expression Condition's HTML id. Generate a new one if no ID present.
   */


  _createClass(ExpressionFormula, [{
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "render",
    value: function render() {
      var assistiveText = assign({}, defaultProps.assistiveText, this.props.assistiveText);
      var labels = assign({}, defaultProps.labels, this.props.labels);
      return React.createElement(React.Fragment, null, React.createElement("div", {
        id: this.getId(),
        className: classNames("slds-expression_formula__rte", this.props.className)
      }, React.createElement("div", {
        className: "slds-form-element"
      }, React.createElement("span", {
        className: "slds-form-element__label"
      }, labels.label), React.createElement("div", {
        className: "slds-form-element__control"
      }, React.createElement("div", {
        className: "slds-rich-text-editor slds-grid slds-grid_vertical slds-nowrap"
      }, React.createElement("div", {
        role: "toolbar",
        className: "slds-rich-text-editor__toolbar slds-shrink-none"
      }, React.createElement("div", {
        className: "slds-rich-text-editor__col slds-rich-text-editor__col_grow"
      }, this.props.resourceCombobox), React.createElement("div", {
        className: "slds-rich-text-editor__col slds-rich-text-editor__col_grow"
      }, this.props.functionCombobox), React.createElement("div", {
        className: "slds-rich-text-editor__col slds-rich-text-editor__col_grow"
      }, this.props.operatorInput), React.createElement("div", {
        className: "slds-rich-text-editor__col"
      }, React.createElement(Button, {
        assistiveText: {
          icon: assistiveText.help
        },
        className: "slds-button_icon-container",
        id: "".concat(this.getId(), "-help-button"),
        variant: "icon",
        iconCategory: "utility",
        iconName: "help",
        onClick: this.props.events.onClickHelp,
        title: assistiveText.help
      }))), React.createElement("div", {
        className: "slds-rich-text-editor__textarea slds-grid"
      }, React.createElement(ContentEditable, {
        id: "".concat(this.getId(), "-content-editor"),
        "aria-label": this.props.labels.textArea,
        className: "slds-rich-text-area__content slds-text-color_weak slds-grow",
        innerRef: this.textEditorRef,
        html: this.props.textEditorValue !== undefined ? this.props.textEditorValue : this.state.textEditorValue,
        onChange: this.handleTextEditorChange,
        disabled: false
      })))))), React.createElement("div", {
        className: "slds-m-top_small"
      }, React.createElement(Button, {
        id: "".concat(this.getId(), "-check-syntax-button"),
        variant: "neutral",
        label: labels.checkSyntax,
        onClick: this.props.events.onClickCheckSyntax
      })));
    }
  }]);

  return ExpressionFormula;
}(React.Component);

ExpressionFormula.displayName = EXPRESSION_FORMULA;
ExpressionFormula.propTypes = propTypes;
ExpressionFormula.defaultProps = defaultProps;
export default ExpressionFormula;
//# sourceMappingURL=formula.js.map