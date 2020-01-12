/* eslint-disable indent */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconSettings from '../../icon-settings';
import { TIME_PICKER } from '../../../utilities/constants';
import Timepicker from '../../time-picker';
import Default from '../__examples__/default';

var getTimepicker = function getTimepicker(props) {
  return React.createElement(Timepicker, props);
};

storiesOf(TIME_PICKER, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return getTimepicker({
    label: 'Time',
    required: true,
    stepInMinutes: 30,
    onDateChange: action('onDateChange')
  });
}).add('Docs site Default', function () {
  return React.createElement(Default, null);
});
//# sourceMappingURL=storybook-stories.js.map