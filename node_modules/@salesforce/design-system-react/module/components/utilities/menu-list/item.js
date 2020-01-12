function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// # List Item Component
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames

import classNames from 'classnames'; // ### Icon

import Icon from '../../icon'; // ## Children

import ListItemLabelRenderer from './item-label'; // ### Event Helpers

import EventUtil from '../../../utilities/event'; // ## Constants

import { LIST_ITEM } from '../../../utilities/constants';
/**
 * Component description.
 */

var ListItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ListItem, _React$Component);

  function ListItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ListItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getLabel", function () {
      var Label = _this.props.labelRenderer;
      return React.createElement(Label, {
        checkmark: _this.props.checkmark,
        data: _this.props.data,
        icon: _this.getIcon('left'),
        index: _this.props.index,
        inverted: _this.props.inverted,
        isSelected: _this.props.isSelected,
        label: _this.props.label,
        value: _this.props.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getIcon", function (position) {
      var classnames = ['slds-icon-text-default'];

      var iconProps = _this.props["".concat(position, "Icon")];

      if (position === 'left') {
        if (_this.props.checkmark) {
          // eslint-disable-next-line fp/no-mutating-methods
          classnames.push('slds-icon_selected');
          iconProps = {
            category: 'utility',
            name: 'check'
          };
        } // eslint-disable-next-line fp/no-mutating-methods


        classnames.push('slds-m-right_x-small');
      } else {
        // eslint-disable-next-line fp/no-mutating-methods
        classnames.push('slds-m-left_small');
      }

      if (iconProps) {
        return React.createElement(Icon, _extends({
          className: classNames(classnames),
          position: position,
          size: "x-small"
        }, iconProps));
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      if (_this.props.type !== 'link' || _this.props.href === 'javascript:void(0);' // eslint-disable-line no-script-url
      ) {
          // eslint-disable-line no-script-url
          EventUtil.trapImmediate(event);
        }

      if (_this.props.onSelect) {
        _this.props.onSelect(_this.props.index);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (event) {
      EventUtil.trapImmediate(event);
    });

    return _this;
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      switch (this.props.type) {
        case 'header':
          {
            return React.createElement("li", {
              className: classNames('slds-dropdown__header', {
                'slds-has-divider_top-space': this.props.divider === 'top',
                'slds-has-divider_bottom-space': this.props.divider === 'bottom'
              }, this.props.className),
              onMouseDown: this.handleMouseDown,
              role: "separator"
            }, React.createElement("span", null, this.props.label));
          }

        case 'divider':
          {
            return React.createElement("li", {
              className: classNames('slds-has-divider', this.props.className),
              onMouseDown: this.handleMouseDown,
              role: "separator"
            });
          }

        case 'link':
        case 'item':
        default:
          {
            /* eslint-disable jsx-a11y/role-supports-aria-props */
            var itemContents = React.createElement("a", {
              "aria-checked": this.props.checkmark && this.props.isSelected,
              "aria-disabled": this.props['aria-disabled'],
              href: this.props.href,
              "data-index": this.props.index,
              onClick: this.handleClick,
              role: this.props.checkmark ? 'menuitemcheckbox' : 'menuitem',
              tabIndex: "-1"
            }, this.getLabel(), this.getIcon('right'));

            if (this.props.tooltipContent && this.props.tooltipTemplate) {
              var tooltipTemplateProps = _extends({}, this.props.tooltipTemplate.props);

              var tooltipProps = _objectSpread({}, tooltipTemplateProps, {
                content: this.props.tooltipContent,
                id: "".concat(this.props.id, "-tooltip"),
                triggerStyle: _objectSpread({
                  width: '100%'
                }, tooltipTemplateProps.triggerStyle || {})
              });

              itemContents = React.cloneElement(this.props.tooltipTemplate, tooltipProps, itemContents);
            }

            return (
              /* eslint-disable jsx-a11y/role-supports-aria-props */
              // disabled eslint, but using aria-selected on presentation role seems suspicious...
              React.createElement("li", {
                "aria-selected": this.props.checkmark === null ? this.props.isSelected : null,
                className: classNames('slds-dropdown__item', {
                  'slds-is-selected': this.props.isSelected
                }, this.props.className),
                id: this.props.id,
                onMouseDown: this.handleMouseDown,
                role: "presentation"
              }, itemContents)
            );
          }
      }
    }
  }]);

  return ListItem;
}(React.Component);

_defineProperty(ListItem, "displayName", LIST_ITEM);

_defineProperty(ListItem, "propTypes", {
  'aria-disabled': PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  checkmark: PropTypes.bool,
  data: PropTypes.object,
  divider: PropTypes.oneOf(['top', 'bottom']),
  href: PropTypes.string,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  inverted: PropTypes.bool,
  isSelected: PropTypes.bool,
  label: PropTypes.string,
  labelRenderer: PropTypes.func,
  leftIcon: PropTypes.shape({
    category: PropTypes.string,
    name: PropTypes.string
  }),
  onSelect: PropTypes.func.isRequired,
  rightIcon: PropTypes.shape({
    category: PropTypes.string,
    name: PropTypes.string
  }),
  tooltipContent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  tooltipTemplate: PropTypes.node,
  type: PropTypes.string,
  value: PropTypes.any
});

_defineProperty(ListItem, "defaultProps", {
  data: {},
  href: 'javascript:void(0);',
  // eslint-disable-line no-script-url
  inverted: false,
  isSelected: false,
  label: '',
  labelRenderer: ListItemLabelRenderer,
  value: null
});

export default ListItem;
//# sourceMappingURL=item.js.map