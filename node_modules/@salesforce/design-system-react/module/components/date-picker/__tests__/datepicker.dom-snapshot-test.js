/* eslint-env jest */
import React from 'react';
import moment from 'moment';
import renderer from 'react-test-renderer';
import { renderMarkup } from '../../../tests/snapshot-helpers';
import SnapshotDefault from '../__examples__/snapshot-default'; // eslint-disable-next-line camelcase

import UNSAFE_DirectionSettings from '../../utilities/UNSAFE_direction';

var makeRtl = function makeRtl(component) {
  return (// eslint-disable-next-line
    React.createElement(UNSAFE_DirectionSettings.Provider, {
      value: "rtl"
    }, React.createElement("div", {
      dir: "rtl"
    }, component))
  );
};

test('Datepicker Default DOM Snapshot', function () {
  var domTree = renderer.create(React.createElement(SnapshotDefault, null)).toJSON();
  expect(domTree).toMatchSnapshot();
});
test('Datepicker Default HTML Snapshot', function () {
  expect(renderMarkup(SnapshotDefault)).toMatchSnapshot();
});
var customProps = {
  align: 'right',
  assistiveText: {
    openCalendar: 'CUSTOM open Calendar',
    nextMonth: 'CUSTOM next month',
    previousMonth: 'CUSTOM previous month'
  },
  className: 'CUSTOM-CLASSNAME',
  formatter: function formatter() {
    return "Llama and Lamb's epiphany of love";
  },
  id: 'CUSTOM-ID',
  labels: {
    abbreviatedWeekDays: ['ONE', 'TWO', 'THR', 'FOU', 'FIV', 'SIX', 'SEV'],
    label: 'Date',
    months: ['MONTH 1', 'MONTH 2', 'MONTH 3', 'MONTH 4', 'MONTH 5', 'MONTH 6', 'MONTH 7', 'MONTH 8', 'MONTH 9', 'MONTH 10', 'MONTH 11', 'MONTH 12'],
    placeholder: 'SWIPE RIGHT :-)',
    today: 'TODAY YOU ARE YOU!',
    weekDays: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']
  },
  parser: function parser() {
    return moment('1/6/2007', 'MM-DD-YYYY').toDate();
  },
  relativeYearFrom: -20,
  relativeYearTo: 20,
  triggerClassName: 'CUSTOM-TRIGGER-CLASSNAME'
};
test("Datepicker\n\t\tabbreviatedWeekDayLabels,\n\t\tassistiveTextNextMonth,\n\t\tassistiveTextOpenCalendar,\n\t\tassistiveTextPreviousMonth,\n\t\talign,\n\t\tclassName,\n\t\tformatter,\n\t\tmonthLabels,\n\t\tplaceholder,\n\t\trelativeYearFrom,\n\t\trelativeYearTo,\n\t\ttodayLabel,\n\t\ttriggerClassName,\n\t\tweekDayLabels\n\tDOM Snapshot", function () {
  var domTree = renderer.create(React.createElement(SnapshotDefault, customProps)).toJSON();
  expect(domTree).toMatchSnapshot();
});
test("Datepicker\n\tRight-to-Left (RTL)", function () {
  var domTree = renderer.create(makeRtl(React.createElement(SnapshotDefault, customProps))).toJSON();
  expect(domTree).toMatchSnapshot();
});
test("Datepicker\n\tisIsoWeekday\n\tDOM Snapshot", function () {
  var domTree = renderer.create(React.createElement(SnapshotDefault, {
    isIsoWeekday: true
  })).toJSON();
  expect(domTree).toMatchSnapshot();
});
//# sourceMappingURL=datepicker.dom-snapshot-test.js.map