function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// This project uses `classnames`, "a simple javascript utility for conditionally
// joining classNames together."

import classNames from 'classnames';
import Calendar from './calendar';
import CalendarNavigation from './navigation';
import EventUtil from '../../../utilities/event';
import KEYS from '../../../utilities/key-code';

var DatepickerCalendarWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DatepickerCalendarWrapper, _React$Component);

  function DatepickerCalendarWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DatepickerCalendarWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DatepickerCalendarWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      initialDateForCalendarRender: _this.props.selectedDate
    });

    _defineProperty(_assertThisInitialized(_this), "handleCalendarBlur", function (event, _ref) {
      var direction = _ref.direction;

      if (direction === 'next' && _this.previousMonthRef) {
        if (_this.props.onCalendarFocus) {
          _this.props.onCalendarFocus(event, {
            direction: direction,
            ref: _this.previousMonthRef
          });
        }

        _this.previousMonthRef.focus();
      } else if (direction === 'previous' && _this.todayRef) {
        if (_this.props.onCalendarFocus) {
          _this.props.onCalendarFocus(event, {
            direction: direction,
            ref: _this.todayRef
          });
        }

        _this.todayRef.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFirstFocusableNodeKeyDown", function (event) {
      if (event.shiftKey && event.keyCode === KEYS.TAB) {
        EventUtil.trapEvent(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInitialDateForCalendarRenderChange", function (event, initialDateForCalendarRender) {
      _this.setState({
        initialDateForCalendarRender: initialDateForCalendarRender
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (event.keyCode === KEYS.ESCAPE) {
        EventUtil.trapEvent(event);

        _this.props.onRequestClose(event, {});
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleLastFocusableNodeKeyDown", function (event) {
      if (!event.shiftKey && event.keyCode === KEYS.TAB) {
        EventUtil.trapEvent(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRequestClose", function (event) {
      if (_this.props.onRequestClose) {
        _this.props.onRequestClose(event, {});
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRequestFocusDate", function (event, data) {
      // will be called three times, due to re-render
      if (data.ref && _this.props.canFocusCalendar) {
        data.ref.focus();
      } // only call on actual DOM event and not on re-render


      if (_this.props.onCalendarFocus && data.triggerCallback) {
        var triggerCallback = data.triggerCallback,
            modifiedData = _objectWithoutProperties(data, ["triggerCallback"]); // eslint-disable-line no-unused-vars


        _this.props.onCalendarFocus(event, modifiedData);
      }
    });

    return _this;
  }

  _createClass(DatepickerCalendarWrapper, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", {
        // eslint-disable-line jsx-a11y/no-static-element-interactions
        className: classNames({
          'slds-datepicker': this.props.isolated
        }, this.props.className),
        "aria-hidden": "false",
        "data-selection": "single",
        onKeyDown: this.handleKeyDown
      }, React.createElement(CalendarNavigation, {
        assistiveTextNextMonth: this.props.assistiveTextNextMonth,
        assistiveTextPreviousMonth: this.props.assistiveTextPreviousMonth,
        assistiveTextYear: this.props.assistiveTextYear,
        id: this.props.id,
        initialDateForCalendarRender: this.state.initialDateForCalendarRender,
        monthLabels: this.props.monthLabels,
        onChangeMonth: this.handleInitialDateForCalendarRenderChange,
        previousMonthRef: function previousMonthRef(component) {
          _this2.previousMonthRef = component;
        },
        onPreviousMonthKeyDown: this.handleFirstFocusableNodeKeyDown,
        relativeYearFrom: this.props.relativeYearFrom,
        relativeYearTo: this.props.relativeYearTo
      }), React.createElement(Calendar, {
        abbreviatedWeekDayLabels: this.props.abbreviatedWeekDayLabels,
        dateDisabled: this.props.dateDisabled,
        id: this.props.id,
        initialDateForCalendarRender: this.state.initialDateForCalendarRender,
        isIsoWeekday: this.props.isIsoWeekday,
        onCalendarBlur: this.handleCalendarBlur,
        onChangeMonth: this.handleInitialDateForCalendarRenderChange,
        onRequestClose: this.handleRequestClose,
        onRequestInternalFocusDate: this.handleRequestFocusDate,
        onSelectDate: this.props.onSelectDate,
        selectedDate: this.props.selectedDate,
        selectedDateRef: this.props.selectedDateRef,
        todayLabel: this.props.todayLabel,
        todayRef: function todayRef(component) {
          _this2.todayRef = component;
        },
        onLastFocusableNodeKeyDown: this.handleLastFocusableNodeKeyDown,
        weekDayLabels: this.props.weekDayLabels
      }));
    }
  }]);

  return DatepickerCalendarWrapper;
}(React.Component);

_defineProperty(DatepickerCalendarWrapper, "defaultProps", {
  selectedDate: new Date(),
  value: new Date()
});

_defineProperty(DatepickerCalendarWrapper, "displayName", 'DatepickerCalendarWrapper');

_defineProperty(DatepickerCalendarWrapper, "propTypes", {
  /**
   * Label for button to go to the next month
   */
  assistiveTextNextMonth: PropTypes.string.isRequired,

  /**
   * Label for button to go to the previous month
   */
  assistiveTextPreviousMonth: PropTypes.string.isRequired,

  /**
   * Label for year picklist/combobox
   */
  assistiveTextYear: PropTypes.string.isRequired
  /**
  * One letter abbreviations of the days of the week, starting on Sunday.
  */
  ,
  abbreviatedWeekDayLabels: PropTypes.array.isRequired,

  /**
   * Whether or not the `CalendarWrapper` can steal focus from the main `Input`
   */
  canFocusCalendar: PropTypes.bool.isRequired,

  /**
   * CSS classes to be added to tag with `slds-datepicker`.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * dateDisabled() takes a date as input argument, returns true if given date should be disabled, otherwise returns false.
   */
  dateDisabled: PropTypes.func,

  /**
   * HTML id for component
   */
  id: PropTypes.string,

  /**
   * Makes Monday the first day of the week
   */
  isIsoWeekday: PropTypes.bool,

  /**
   * For use of datepicker outside of dropdown.
   */
  isolated: PropTypes.bool,

  /**
   * Names of the months
   */
  monthLabels: PropTypes.array.isRequired,

  /**
   * Triggered when the keyboard moves focus on the calendar. {date: [Date object], formattedDate: [string]}  _Tested with Mocha framework._
   */
  onCalendarFocus: PropTypes.func,

  /**
   * Triggered when the calendar is supposed to close.
   */
  onRequestClose: PropTypes.func.isRequired,

  /**
   * Triggered when a date on the calendar is clicked.
   */
  onSelectDate: PropTypes.func.isRequired,

  /**
   * The earliest year that can be selected in the year selection dropdown.
   */
  relativeYearFrom: PropTypes.number.isRequired,

  /**
   * The maximum year that can be selected in the year selection dropdown.
   */
  relativeYearTo: PropTypes.number.isRequired,

  /**
   * Currently selected date
   */
  selectedDate: PropTypes.instanceOf(Date),

  /**
   * Component reference / DOM node for selected day.
   */
  selectedDateRef: PropTypes.func,

  /**
   * Label of shortcut to jump to today within the calendar. Also used for assistive text for the current day.
   */
  todayLabel: PropTypes.string.isRequired,

  /**
   * Names of the seven days of the week, starting on Sunday.
   */
  weekDayLabels: PropTypes.array.isRequired
});

export default DatepickerCalendarWrapper;
//# sourceMappingURL=calendar-wrapper.js.map