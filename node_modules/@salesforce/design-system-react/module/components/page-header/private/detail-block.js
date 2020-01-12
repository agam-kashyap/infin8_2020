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

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tooltip from '../../tooltip';
var displayName = 'PageHeaderDetailRow';
var propTypes = {
  /**
   * Optional class name
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * The content property can be a string or a React element
   */
  content: PropTypes.node,

  /**
   * Sets the 'flavor' of a block, which adds the following sizing class: `slds-size_${flavor}`
   */
  flavor: PropTypes.string,

  /**
   * Sets the label of a detail block
   */
  label: PropTypes.node,

  /**
   * Sets whether the fields truncate
   */
  truncate: PropTypes.bool
};
var defaultProps = {
  content: '',
  label: '',
  truncate: true
};

var DetailBlock =
/*#__PURE__*/
function (_Component) {
  _inherits(DetailBlock, _Component);

  function DetailBlock(props) {
    var _this;

    _classCallCheck(this, DetailBlock);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DetailBlock).call(this, props));
    _this.state = {
      showTooltip: false
    };
    return _this;
  }

  _createClass(DetailBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderFieldTruncation();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.content !== prevProps.content) {
        this.renderFieldTruncation();
      }
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this2 = this;

      var _this$props = this.props,
          content = _this$props.content,
          truncate = _this$props.truncate;

      if (typeof content === 'string') {
        var labelClasses = classnames({
          'slds-truncate': truncate
        });
        return React.createElement("div", {
          className: labelClasses,
          ref: function ref(field) {
            _this2.fieldContentRef = field;
          },
          title: content
        }, content);
      }

      return content;
    }
  }, {
    key: "renderContentWithTooltip",
    value: function renderContentWithTooltip() {
      var _this$props2 = this.props,
          content = _this$props2.content,
          truncate = _this$props2.truncate;
      var labelClasses = classnames({
        'slds-truncate': truncate
      });
      return React.createElement(Tooltip, {
        align: "top",
        title: content,
        triggerStyle: {
          display: 'inline'
        }
      }, React.createElement("div", {
        className: labelClasses,
        tabIndex: "0",
        title: content
      }, content));
    }
  }, {
    key: "renderFieldTruncation",
    value: function renderFieldTruncation() {
      var fieldContent = this.fieldContentRef;
      var isTruncated = fieldContent && fieldContent.scrollWidth > fieldContent.offsetWidth;

      if (isTruncated) {
        this.setState({
          showTooltip: true
        });
      } else {
        this.setState({
          showTooltip: false
        });
      }
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var _this$props3 = this.props,
          label = _this$props3.label,
          truncate = _this$props3.truncate;

      if (typeof label === 'string') {
        var labelClasses = classnames('slds-text-title', {
          'slds-truncate': truncate
        });
        return React.createElement("div", {
          className: labelClasses,
          title: label
        }, label);
      }

      return label;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          className = _this$props4.className,
          flavor = _this$props4.flavor;
      var classes = classnames('slds-page-header__detail-block', className, _defineProperty({}, "slds-size_".concat(flavor), flavor));
      return React.createElement("li", {
        className: classes
      }, this.renderLabel(), this.state.showTooltip ? this.renderContentWithTooltip() : this.renderContent());
    }
  }]);

  return DetailBlock;
}(Component);

DetailBlock.displayName = displayName;
DetailBlock.propTypes = propTypes;
DetailBlock.defaultProps = defaultProps;
export default DetailBlock;
//# sourceMappingURL=detail-block.js.map