function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
// # Dynamic Icons Component
// Implements the [Dynamic Icons design pattern](https://www.lightningdesignsystem.com/components/dynamic-icons/) in React.
import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utilities/class-names';
import { DYNAMIC_ICON } from '../../utilities/constants'; // PropTypes for the component

var propTypes = {
  /**
   * **Assistive text for accessibility**
   * * `label`: Used as a visually hidden label to describe the dynamic icon.
   */
  assistiveText: PropTypes.shape({
    label: PropTypes.string
  }),

  /**
   * CSS class names to be added to the icon.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Pauses the icon animation if the value is true.
   */
  isPaused: PropTypes.bool,

  /**
   * Disables icon animation if set to true
   */
  isStatic: PropTypes.bool,

  /**
   * Polarity values for the 'score' variant. Defaults to 'positive'
   */
  scorePolarity: PropTypes.oneOf(['positive', 'negative']),

  /**
   * Range of strength values for the 'strength' variant. Defaults to '0'.
   */
  strengthLevel: PropTypes.oneOf(['-3', '-2', '-1', '0', '1', '2', '3', -3, -2, -1, 0, 1, 2, 3]),

  /**
   * HTML title attribute.
   */
  title: PropTypes.string.isRequired,

  /**
   * Signals direction for the 'trend' variant. The default value 'neutral' points to the east.
   */
  trendDirection: PropTypes.oneOf(['down', 'up', 'neutral']),

  /**
   * Different types of dynamic icons. Possible variants:
   *
   * `ellie` - Displays a pulsing blue circle, which pulses and stops after one animation cycle.
   * `eq` - Displays an animated graph with three bars that rise and fall randomly.
   * `score` - Displays a green filled circle or a red unfilled circle.
   * `strength` - Displays three animated horizontal circles that are colored green or red.
   * `trend` - Displays animated arrows that point up, down, or straight.
   * `waffle` - Displays a 3x3 grid of dots that animates on hover.
   */
  variant: PropTypes.oneOf(['ellie', 'eq', 'score', 'strength', 'trend', 'typing', 'waffle']).isRequired
};
/**
 * A set of delightful animated icons.
 */

var DynamicIcon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DynamicIcon, _React$Component);

  function DynamicIcon() {
    _classCallCheck(this, DynamicIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(DynamicIcon).apply(this, arguments));
  }

  _createClass(DynamicIcon, [{
    key: "getIconChildren",
    value: function getIconChildren() {
      var children = [];
      var defaultAssistiveText = this.props.title ? this.props.title : "".concat(this.props.variant.charAt(0).toUpperCase()).concat(this.props.variant.slice(1));

      if (this.props.variant === 'ellie') {
        children = [React.createElement("svg", {
          viewBox: "0 0 280 14",
          "aria-hidden": "true"
        }, React.createElement("circle", {
          cx: "7",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "7",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "21",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "21",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "35",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "35",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "49",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "49",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "63",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "63",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "77",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "77",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "91",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "91",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "105",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "105",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "119",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "119",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "133",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "133",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "147",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "147",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "161",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "161",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "175",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "175",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "189",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "189",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "203",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "203",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "217",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "217",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "231",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "231",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "245",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "245",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "259",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "259",
          cy: "7",
          r: "3"
        }), React.createElement("circle", {
          cx: "273",
          cy: "7",
          r: "4"
        }), React.createElement("circle", {
          cx: "273",
          cy: "7",
          r: "3"
        }))];
      } else if (this.props.variant === 'eq') {
        children = [React.createElement("div", {
          className: "slds-icon-eq__bar"
        }), React.createElement("div", {
          className: "slds-icon-eq__bar"
        }), React.createElement("div", {
          className: "slds-icon-eq__bar"
        })];
      } else if (this.props.variant === 'score') {
        children = [React.createElement("svg", {
          viewBox: "0 0 5 5",
          className: "slds-icon-score__positive",
          "aria-hidden": "true"
        }, React.createElement("circle", {
          cx: "50%",
          cy: "50%",
          r: "1.875"
        })), React.createElement("svg", {
          viewBox: "0 0 5 5",
          className: "slds-icon-score__negative",
          "aria-hidden": "true"
        }, React.createElement("circle", {
          cx: "50%",
          cy: "50%",
          r: "1.875"
        }))];
      } else if (this.props.variant === 'strength') {
        children = [React.createElement("svg", {
          viewBox: "0 0 27 7",
          "aria-hidden": "true"
        }, React.createElement("circle", {
          r: "3.025",
          cx: "3.5",
          cy: "3.5"
        }), React.createElement("circle", {
          r: "3.025",
          cx: "13.5",
          cy: "3.5"
        }), React.createElement("circle", {
          r: "3.025",
          cx: "23.5",
          cy: "3.5"
        }))];
      } else if (this.props.variant === 'trend') {
        children = [React.createElement("svg", {
          viewBox: "0 0 16 16",
          "aria-hidden": "true"
        }, React.createElement("path", {
          className: "slds-icon-trend__arrow",
          d: "M.75 8H11M8 4.5L11.5 8 8 11.5"
        }), React.createElement("circle", {
          className: "slds-icon-trend__circle",
          cy: "8",
          cx: "8",
          r: "7.375",
          transform: "rotate(-28 8 8) scale(-1 1) translate(-16 0)"
        }))];
      } else if (this.props.variant === 'typing') {
        children = [React.createElement("span", {
          className: "slds-icon-typing__dot"
        }), React.createElement("span", {
          className: "slds-icon-typing__dot"
        }), React.createElement("span", {
          className: "slds-icon-typing__dot"
        })];

        if (!this.props.title) {
          defaultAssistiveText = 'User is typing';
        }
      } else if (this.props.variant === 'waffle') {
        children = [React.createElement("span", {
          className: "slds-icon-waffle"
        }, React.createElement("span", {
          className: "slds-r1"
        }), React.createElement("span", {
          className: "slds-r2"
        }), React.createElement("span", {
          className: "slds-r3"
        }), React.createElement("span", {
          className: "slds-r4"
        }), React.createElement("span", {
          className: "slds-r5"
        }), React.createElement("span", {
          className: "slds-r6"
        }), React.createElement("span", {
          className: "slds-r7"
        }), React.createElement("span", {
          className: "slds-r8"
        }), React.createElement("span", {
          className: "slds-r9"
        }))];

        if (!this.props.title) {
          defaultAssistiveText = 'Open App Launcher';
        }
      } // eslint-disable-next-line fp/no-mutating-methods


      children.push(React.createElement("span", {
        className: "slds-assistive-text"
      }, this.props.assistiveText && this.props.assistiveText.label ? this.props.assistiveText.label : defaultAssistiveText));
      return children;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.getIconChildren();
      var classes = [{
        'slds-is-animated': !this.props.isStatic,
        'slds-is-paused': this.props.isPaused
      }];
      var iconProps = {
        title: this.props.title
      };
      var element = 'span';

      if (this.props.variant === 'waffle') {
        // eslint-disable-next-line fp/no-mutating-methods
        classes.unshift('slds-button', 'slds-icon-waffle_container');
        element = 'button';
      } else {
        // eslint-disable-next-line fp/no-mutating-methods
        classes.unshift("slds-icon-".concat(this.props.variant));

        if (this.props.variant === 'eq') {
          element = 'div';
        } else if (this.props.variant === 'score') {
          iconProps['data-slds-state'] = this.props.scorePolarity ? this.props.scorePolarity : 'positive';
        } else if (this.props.variant === 'strength') {
          iconProps['data-slds-strength'] = this.props.strengthLevel !== undefined ? "".concat(this.props.strengthLevel) : '0';
        } else if (this.props.variant === 'trend') {
          iconProps['data-slds-trend'] = this.props.trendDirection ? this.props.trendDirection : 'neutral';
        }
      }

      iconProps.className = classNames(classes, this.props.className);
      return React.createElement.apply(React, [element, iconProps].concat(_toConsumableArray(children)));
    }
  }]);

  return DynamicIcon;
}(React.Component);

DynamicIcon.displayName = DYNAMIC_ICON;
DynamicIcon.propTypes = propTypes;
export default DynamicIcon;
//# sourceMappingURL=index.js.map