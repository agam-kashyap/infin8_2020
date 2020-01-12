import React from 'react';
import { storiesOf } from '@storybook/react';
import { DYNAMIC_ICON } from '../../../utilities/constants';
import Ellie from '../__examples__/ellie';
import Eq from '../__examples__/eq';
import Score from '../__examples__/score';
import Strength from '../__examples__/strength';
import Trend from '../__examples__/trend';
import Typing from '../__examples__/typing';
import Waffle from '../__examples__/waffle';
storiesOf(DYNAMIC_ICON, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Ellie', function () {
  return React.createElement(Ellie, null);
}).add('Eq', function () {
  return React.createElement(Eq, null);
}).add('Score', function () {
  return React.createElement(Score, null);
}).add('Strength', function () {
  return React.createElement(Strength, null);
}).add('Trend', function () {
  return React.createElement(Trend, null);
}).add('Typing', function () {
  return React.createElement(Typing, null);
}).add('Waffle', function () {
  return React.createElement(Waffle, null);
});
//# sourceMappingURL=storybook-stories.js.map