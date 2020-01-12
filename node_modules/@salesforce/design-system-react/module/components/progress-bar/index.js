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
// Implements the [Progress Bar design pattern](https://lightningdesignsystem.com/components/progress-ring/) in React.
// Based on SLDS v2.4.5
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import assign from 'lodash.assign'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import { PROGRESS_BAR } from '../../utilities/constants';
var propTypes = {
  /**
   * **Assistive text for accessibility**
   * This object is merged with the default props object on every render.
   * * `progress`: This is a visually hidden label for the percent of progress.
   * _Tested with snapshot testing._
   */
  assistiveText: PropTypes.shape({
    progress: PropTypes.string
  }),

  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   * CSS classes to be added to tag with `.slds-progress-bar`. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Label for the progress bar
   */
  labels: PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    complete: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  }),

  /**
   *  Set radius of progress bar
   */
  radius: PropTypes.oneOf(['circular']),

  /**
   *  Set fill of progress bar
   */
  color: PropTypes.oneOf(['success']),

  /**
   *  Set progress bar thickness
   */
  thickness: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),

  /**
   * Percentage of progress completion, ranging [0, 100].
   */
  value: PropTypes.number.isRequired,

  /**
   * Orientation of the progress bar to be used
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * Custom styles to be passed to the component
   */
  style: PropTypes.object
};
var defaultProps = {
  assistiveText: {
    progress: 'Progress'
  },
  labels: {
    complete: 'Complete'
  },
  orientation: 'horizontal',
  style: {
    height: '100%'
  }
};
/**
 * A progress bar component communicates to the user the progress of a particular process
 */

var ProgressBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar(props) {
    var _this;

    _classCallCheck(this, ProgressBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProgressBar).call(this, props));
    _this.generatedId = shortid.generate();
    return _this;
  }
  /**
   * ID as a string
   * @returns {string} id
   */


  _createClass(ProgressBar, [{
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
    /**
     * Enables Descriptive Progress Bar if label is provided
     * @returns {string} description
     */

  }, {
    key: "getDescription",
    value: function getDescription(_ref) {
      var labels = _ref.labels;

      if (labels.label) {
        return React.createElement("div", {
          className: "slds-grid slds-grid_align-spread slds-p-bottom_x-small",
          id: "progress-bar-label-".concat(this.getId())
        }, React.createElement("span", null, labels.label), React.createElement("span", null, React.createElement("strong", null, this.props.value, '% ', labels.complete)));
      }

      return '';
    }
  }, {
    key: "render",
    value: function render() {
      var labels = assign({}, defaultProps.labels, this.props.labels);
      var assistiveText = assign({}, defaultProps.assistiveText, this.props.assistiveText);
      var style = assign({}, defaultProps.style, this.props.style);
      return React.createElement("div", {
        id: this.getId(),
        style: style
      }, this.props.orientation === 'horizontal' && this.getDescription({
        labels: labels
      }), React.createElement("div", {
        "aria-labelledby": this.props.orientation === 'horizontal' && labels.label ? "progress-bar-label-".concat(this.getId()) : undefined,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": this.props.value,
        "aria-valuetext": "".concat(assistiveText.progress, ": ").concat(this.props.value, "%"),
        role: "progressbar",
        className: classNames('slds-progress-bar', this.props.radius ? "slds-progress-bar_".concat(this.props.radius) : null, this.props.thickness ? "slds-progress-bar_".concat(this.props.thickness) : null, this.props.className, {
          'slds-progress-bar_vertical': this.props.orientation === 'vertical'
        })
      }, React.createElement("span", {
        className: classNames("slds-progress-bar__value", this.props.color ? "slds-progress-bar__value_".concat(this.props.color) : null),
        style: this.props.orientation === 'vertical' ? {
          height: "".concat(this.props.value, "%")
        } : {
          width: "".concat(this.props.value, "%")
        }
      }, React.createElement("span", {
        className: "slds-assistive-text"
      }, "".concat(assistiveText.progress, ": "), "".concat(this.props.value, "%")))));
    }
  }]);

  return ProgressBar;
}(React.Component);

ProgressBar.displayName = PROGRESS_BAR;
ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;
export default ProgressBar;
//# sourceMappingURL=index.js.map