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
// Implements the [Accordion design
// pattern](https://www.lightningdesignsystem.com/components/accordion/) in
// React. Based on SLDS v2.4.3
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';
import { ACCORDION } from '../../utilities/constants';
var propTypes = {
  /**
   * CSS class names to be added to the accordion component. _Tested with snapshot testing._
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * HTML id for accordion component. _Tested with snapshot testing._
   */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * The panel content for the Accordion component. Accordion panels should be added as <AccordionPanel />. Event handler for the accordion panels should be added to `<AccordionPanel />`. Optional `panelContentActions` component may be passed as prop. _Tested with Mocha framework and snapshot testing._
   *
   * Example:
   * ```
   * <SLDSAccordion>
   *   <SLDSAccordionpanel />
   *   <SLDSAccordionpanel />
   *   <SLDSAccordionpanel />
   * </SLDSAccordion>
   * ```
   */
  children: PropTypes.node.isRequired
};
/**
 * An accordion allows a user to toggle the display of sections of content.
 * The accordion component wraps accordion panels that can be selected and expanded. It accepts children to define the content displayed within.
 */

var Accordion =
/*#__PURE__*/
function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion(props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Accordion).call(this, props));
    _this.state = {
      currButtonIndex: 0
    };
    _this.summaryButtons = [];
    _this.generatedId = shortid.generate();
    return _this;
  }

  _createClass(Accordion, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.currButtonIndex !== null && this.state.currButtonIndex !== prevState.currButtonIndex) {
        this.summaryButtons[this.state.currButtonIndex].focus();
      }
    }
  }, {
    key: "onClickSummary",
    value: function onClickSummary() {
      this.setState({
        currButtonIndex: null
      });
    }
  }, {
    key: "onKeyDownSummary",
    value: function onKeyDownSummary(e) {
      var buttonIndex = this.state.currButtonIndex;

      if (buttonIndex === null) {
        buttonIndex = this.summaryButtons.findIndex(function (el) {
          return el.id === e.target.id;
        });
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();

        if (buttonIndex < this.props.children.length - 1) {
          this.setState({
            currButtonIndex: buttonIndex + 1
          });
        } else {
          this.setState({
            currButtonIndex: 0
          });
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();

        if (buttonIndex > 0) {
          this.setState({
            currButtonIndex: buttonIndex - 1
          });
        } else {
          this.setState({
            currButtonIndex: this.props.children.length - 1
          });
        }
      }
    }
  }, {
    key: "addSummaryButton",
    value: function addSummaryButton(button) {
      var btnInArr = this.summaryButtons.find(function (el) {
        return button === el;
      });

      if (button !== null && btnInArr === undefined) {
        // eslint-disable-next-line fp/no-mutating-methods
        this.summaryButtons.push(button);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("ul", {
        name: this.props.id || this.generatedId,
        className: classNames('slds-accordion', this.props.className)
      }, React.Children.map(this.props.children, function (child) {
        return React.cloneElement(child, {
          refs: {
            summaryButton: _this2.addSummaryButton.bind(_this2)
          },
          onClickSummary: _this2.onClickSummary.bind(_this2),
          onKeyDownSummary: _this2.onKeyDownSummary.bind(_this2)
        });
      }));
    }
  }]);

  return Accordion;
}(Component);

Accordion.displayName = ACCORDION;
Accordion.propTypes = propTypes;
export default Accordion;
//# sourceMappingURL=index.js.map