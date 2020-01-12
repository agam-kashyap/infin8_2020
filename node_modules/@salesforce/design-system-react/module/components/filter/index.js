function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/* eslint-disable no-script-url */
// # Filter
// Implements part of the [Panel design pattern](https://www.lightningdesignsystem.com/components/panels) in React.
// Based on SLDS v2.2.0-rc.1
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### assign

import assign from 'lodash.assign'; // ### classNames

import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import Button from '../button';
import Popover from '../popover'; // ## Constants

import { FILTER } from '../../utilities/constants';
/**
 * A Filter is a popover with custom trigger. It can be used by [Panel Filtering](/components/panels/). Menus within a Filter Popover will need to not have "portal mounts" and be inline.
 */

var Filter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Filter, _React$Component);

  function Filter(props) {
    var _this;

    _classCallCheck(this, Filter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Filter).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      popoverIsOpen: _this.props.popover ? _this.props.popover.props.isOpen : false
    });

    _defineProperty(_assertThisInitialized(_this), "getId", function () {
      return _this.props.id || _this.generatedId;
    });

    _defineProperty(_assertThisInitialized(_this), "getCustomPopoverProps", function (_ref) {
      var assistiveText = _ref.assistiveText;

      /*
       * Generate the popover props based on passed in popover props. Using the default behavior if not provided by passed in popover
       */
      var popoverBody = React.createElement("div", null, React.createElement("h4", {
        className: "slds-assistive-text",
        id: "".concat(_this.getId(), "-popover-heading")
      }, assistiveText.editFilterHeading), _this.props.children, React.createElement("div", {
        className: "slds-m-top_small slds-text-align_right"
      }, React.createElement(Button, {
        className: "slds-col_bump-left",
        label: "Done",
        onClick: _this.handleChange
      })));
      var defaultPopoverProps = {
        ariaLabelledby: "".concat(_this.getId(), "-popover-heading"),
        align: _this.props.align,
        body: popoverBody,
        heading: '',
        id: _this.getId(),
        isOpen: _this.state.popoverIsOpen,
        // MAGIC NUMBERS - REMOVE/REDESIGN WHEN DESIGN FOR RIGHT-ALIGNED FILTERS ARE ADDED TO SLDS
        offset: _this.props.align === 'right' ? '0px -35px' : undefined,
        onClose: _this.handleClose,
        onRequestClose: _this.handleClose,
        position: 'overflowBoundaryElement',
        triggerClassName: 'slds-grow'
      };
      /* Mixin passed popover's props if there is any to override the default popover props */

      var popoverProps = assign(defaultPopoverProps, _this.props.popover ? _this.props.popover.props : {}); // eslint-disable-next-line fp/no-delete

      delete popoverProps.children;
      return popoverProps;
    });

    _defineProperty(_assertThisInitialized(_this), "handleFilterClick", function () {
      _this.setState({
        popoverIsOpen: true
      });

      if (_this.props.onClick) {
        _this.props.onClick();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        popoverIsOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState({
        popoverIsOpen: false
      });

      if (_this.props.onChange) {
        _this.props.onChange(event, {
          id: _this.getId()
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRemove", function (event) {
      if (_this.props.onRemove) {
        _this.props.onRemove(event, {
          id: _this.getId()
        });
      }
    });

    _this.generatedId = shortid.generate();
    return _this;
  }

  _createClass(Filter, [{
    key: "render",
    value: function render() {
      /* Remove at next breaking change */
      var assistiveText = {
        editFilter: this.props.assistiveTextEditFilter || // eslint-disable-line react/prop-types
        this.props.assistiveText.editFilter,
        editFilterHeading: this.props.assistiveTextEditFilterHeading || // eslint-disable-line react/prop-types
        this.props.assistiveText.editFilterHeading,
        removeFilter: this.props.assistiveTextRemoveFilter || // eslint-disable-line react/prop-types
        this.props.assistiveText.removeFilter || "Remove Filter: ".concat(this.props.property, " ").concat(this.props.predicate)
      };
      /* TODO: Button wrapper for property and predictate should be transitioned to `Button` component. `Button` needs to take custom children first though. */

      var popoverProps = this.getCustomPopoverProps({
        assistiveText: assistiveText
      });
      return React.createElement("div", {
        className: classNames('slds-filters__item', 'slds-grid', 'slds-grid_vertical-align-center', {
          'slds-is-locked': this.props.isLocked,
          'slds-is-new': this.props.isNew,
          'slds-has-error': this.props.isError
        }, this.props.className)
      }, !this.props.isLocked && (this.props.children || this.props.popover) ? React.createElement(Popover, _extends({}, popoverProps, {
        silenceDeprecatedPropertyWarning: true
      }), React.createElement("button", {
        className: "slds-button_reset slds-grow slds-has-blur-focus",
        onClick: this.handleFilterClick,
        "aria-describedby": this.props.isError ? "".concat(this.getId(), "-error") : undefined,
        type: "button"
      }, React.createElement("span", {
        className: "slds-assistive-text"
      }, assistiveText.editFilter), this.props.property ? React.createElement("p", {
        className: "slds-text-body_small"
      }, this.props.property) : null, React.createElement("p", null, this.props.predicate))) : React.createElement("button", {
        "aria-describedby": this.props.isError ? "".concat(this.getId(), "-error") : undefined,
        className: "slds-button_reset slds-grow slds-has-blur-focus",
        disabled: true,
        type: "button"
      }, React.createElement("p", {
        className: "slds-text-body_small"
      }, this.props.property), React.createElement("p", null, this.props.predicate)), // Remove button
      !this.props.isPermanent && !this.props.isLocked ? React.createElement(Button, {
        assistiveText: {
          icon: assistiveText.removeFilter
        },
        hint: true,
        iconCategory: "utility",
        iconName: "close",
        iconSize: "small",
        iconVariant: "bare",
        onClick: this.handleRemove,
        title: assistiveText.removeFilter,
        variant: "icon"
      }) : null);
    }
  }]);

  return Filter;
}(React.Component);

_defineProperty(Filter, "displayName", FILTER);

_defineProperty(Filter, "propTypes", {
  /**
   * Aligns the popover with the respective side of the trigger. That is `left` will place the `Popover` to the left of the Filter.
   */
  align: PropTypes.oneOf(['left', 'right']),

  /**
   * **Assistive text for accessibility**
   * * `removeFilter`: Assistive text for removing a filter. The default is `Remove Filter: this.props.property this.props.predicate`.
   * * `editFilter`: Assistive text for changing a filter.
   * * `editFilterHeading`: Assistive text for Popover heading.
   */
  assistiveText: PropTypes.shape({
    editFilter: PropTypes.string,
    editFilterHeading: PropTypes.string,
    removeFilter: PropTypes.string
  }),

  /**
   * Contents of popover. That is the dropdowns and inputs that set the filter criteria.
   */
  children: PropTypes.node,

  /**
   * Custom CSS classes for `slds-filters__item` node. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Applies error state styling. Per filter error messages are outside this components.
   */
  isError: PropTypes.bool,

  /**
   * A unique ID is needed in order to support keyboard navigation, ARIA support, and connect the dropdown to the triggering button. An `id` will be generated if none is supplied.
   */
  id: PropTypes.string,

  /**
   * If true, the filter will not display an editing popover when clicked.
   */
  isLocked: PropTypes.bool,

  /**
   * Applies new filter styling.
   */
  isNew: PropTypes.bool,

  /**
   * If true, the filter will not include a remove button.
   */
  isPermanent: PropTypes.bool,

  /**
   * Will be triggered when Done within the Popover is clicked. This is the place to update the filter props displayed. Callback will recieve parameters: `clickEvent, { id }`. An index into your store may be a good setting for `id`, so that it will be passed back here.
   */
  onChange: PropTypes.func,

  /**
   * Will be triggered when "Remove Filter" button is clicked. Callback will recieve parameters: `clickEvent, { id }`. An index into your store may be a good setting for `id`, so that it will be passed back here.
   */
  onRemove: PropTypes.func,

  /**
   * Will be triggered when Filter is clicked. This is the place to close/open popover if a custom popover is passed in
   */
  onClick: PropTypes.func,

  /**
   * A `Popover` component. The props from this popover will be merged and override any default props. This also allows a Filter's Popover dialog to be a controlled component. _Tested with Mocha framework._
   */
  popover: PropTypes.node,

  /**
   * The criteria you are filtering for. For instance, if "Hair Color is PURPLE" is your filter, "is PURPLE" is your filter predicate.
   */
  predicate: PropTypes.node,

  /**
   * The property you are filtering. For instance, if "Hair Color is PURPLE" is your filter, "Hair Color" is your filter property.
   */
  property: PropTypes.node
});

_defineProperty(Filter, "defaultProps", {
  align: 'left',
  assistiveText: {
    editFilter: 'Edit filter:',
    editFilterHeading: 'Choose filter criteria'
  },
  predicate: 'New Filter'
});

export default Filter;
//# sourceMappingURL=index.js.map