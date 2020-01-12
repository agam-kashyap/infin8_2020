import React from 'react';
import { storiesOf } from '@storybook/react';
import { VISUAL_PICKER } from '../../../utilities/constants';
import NonCoverable from '../__examples__/non-coverable';
import Coverable from '../__examples__/coverable';
import Links from '../__examples__/links';
import Vertical from '../__examples__/vertical';
import VerticalCoverable from '../__examples__/vertical-coverable';
storiesOf(VISUAL_PICKER, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Coverable', function () {
  return React.createElement(Coverable, null);
}).add('Non-Coverable', function () {
  return React.createElement(NonCoverable, null);
}).add('Links', function () {
  return React.createElement(Links, null);
}).add('Vertical', function () {
  return React.createElement(Vertical, null);
}).add('Vertical Coverable', function () {
  return React.createElement(VerticalCoverable, null);
});
//# sourceMappingURL=storybook-stories.js.map