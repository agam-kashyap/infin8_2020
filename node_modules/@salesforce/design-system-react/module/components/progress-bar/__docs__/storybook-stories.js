import React from 'react';
import { storiesOf } from '@storybook/react';
import { PROGRESS_BAR } from '../../../utilities/constants';
import Default from '../__examples__/default';
import Thickness from '../__examples__/thickness';
import Color from '../__examples__/color';
import Radius from '../__examples__/radius';
import Descriptive from '../__examples__/descriptive';
import Vertical from '../__examples__/vertical';
storiesOf(PROGRESS_BAR, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Default', function () {
  return React.createElement(Default, null);
}).add('Descriptive', function () {
  return React.createElement(Descriptive, null);
}).add('Color', function () {
  return React.createElement(Color, null);
}).add('Radius', function () {
  return React.createElement(Radius, null);
}).add('Thickness', function () {
  return React.createElement(Thickness, null);
}).add('Vertical', function () {
  return React.createElement(Vertical, null);
});
//# sourceMappingURL=storybook-stories.js.map