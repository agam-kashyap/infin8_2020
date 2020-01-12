function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
// # Global Header Task Component
// Implements the [Global Header Task design pattern](https://www.lightningdesignsystem.com/components/global-header/#Task) in React.
import React from 'react';
import PropTypes from 'prop-types';
import assign from 'lodash.assign';
import Button from '../button';
import Dropdown from '../menu-dropdown';
import DropdownTrigger from '../menu-dropdown/button-trigger';
import { GLOBAL_HEADER_TASK } from '../../utilities/constants';
var propTypes = {
  /**
   * **Assistive text for accessibility**
   * * `triggerButton`: Assistive text for the GlobalHeaderTask trigger button. The default is `Global Actions`.
   */
  assistiveText: PropTypes.shape({
    triggerButton: PropTypes.string
  }),

  /**
   * A `Dropdown` component. The props from this dropdown will be merged and override any default props. This also allows custom content to be passed as children and rendered in the dropdown.
   */
  dropdown: PropTypes.node
};
/**
 * A GlobalHeaderTask component.
 */

var GlobalHeaderTask =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GlobalHeaderTask, _React$Component);

  function GlobalHeaderTask() {
    _classCallCheck(this, GlobalHeaderTask);

    return _possibleConstructorReturn(this, _getPrototypeOf(GlobalHeaderTask).apply(this, arguments));
  }

  _createClass(GlobalHeaderTask, [{
    key: "render",
    value: function render() {
      var buttonAriaProps = {
        'aria-haspopup': true
      };
      var dropdownProps = assign({
        align: 'right',
        nubbinPosition: 'top right'
      }, this.props.dropdown ? this.props.dropdown.props : {});
      var dropdownChildren = dropdownProps.children || null; // eslint-disable-next-line fp/no-delete

      delete dropdownProps.children;
      return React.createElement(Dropdown, dropdownProps, React.createElement(DropdownTrigger, null, React.createElement(Button, _extends({
        assistiveText: {
          icon: this.props.assistiveText.triggerButton
        },
        className: "slds-button_icon slds-global-actions__task slds-global-actions__item-action",
        iconCategory: "utility",
        iconName: "add",
        iconSize: "small",
        iconVariant: "container",
        title: this.props.assistiveText.triggerButton,
        variant: "icon"
      }, buttonAriaProps))), dropdownChildren);
    }
  }]);

  return GlobalHeaderTask;
}(React.Component);

GlobalHeaderTask.displayName = GLOBAL_HEADER_TASK;
GlobalHeaderTask.defaultProps = {
  assistiveText: {
    triggerButton: 'Global Actions'
  }
};
GlobalHeaderTask.propTypes = propTypes;
export default GlobalHeaderTask;
//# sourceMappingURL=task.js.map