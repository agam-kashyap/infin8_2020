import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconSettings from '../../icon-settings';
import Datepicker from '../../date-picker';
import { DATE_PICKER } from '../../../utilities/constants';
import Default from '../__examples__/default';
import IsoWeekdays from '../__examples__/iso-weekday';
import CustomInput from '../__examples__/custom-input';
import SnaphotDefault from '../__examples__/snapshot-default';
import WeekdayPicker from '../__examples__/weekday-picker'; // eslint-disable-next-line camelcase

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

storiesOf(DATE_PICKER, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Default', function () {
  return React.createElement(Default, {
    action: action
  });
}).add('Default - Right to Left (RTL)', function () {
  return makeRtl(React.createElement(Default, {
    action: action
  }));
}).add('ISO weekdays', function () {
  return React.createElement(IsoWeekdays, {
    action: action
  });
}).add('Custom Input', function () {
  return React.createElement(CustomInput, {
    action: action
  });
}).add('Inline menu', function () {
  return React.createElement(Datepicker, {
    labels: {
      label: 'Date'
    },
    menuPosition: "relative",
    formatter: function formatter(date) {
      return date ? moment(date).format('M/D/YYYY') : '';
    },
    parser: function parser(dateString) {
      return moment(dateString, 'MM-DD-YYYY').toDate();
    }
  });
}).add('DOM Snapshot', function () {
  return React.createElement(SnaphotDefault, null);
}).add('Weekday picker', function () {
  return React.createElement(WeekdayPicker, null);
});
//# sourceMappingURL=storybook-stories.js.map