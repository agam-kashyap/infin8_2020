import React from 'react';
import { storiesOf } from '@storybook/react';
import { WELCOME_MAT } from '../../../utilities/constants';
import Default from '../__examples__/default';
import StepsComplete from '../__examples__/steps-complete';
import Splash from '../__examples__/splash';
import InfoOnly from '../__examples__/info-only';
import TrailHead from '../__examples__/trailhead';
import TrailHeadComplete from '../__examples__/trailhead-complete';
storiesOf(WELCOME_MAT, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Default', function () {
  return React.createElement(Default, {
    isOpen: true
  });
}).add('Steps Complete', function () {
  return React.createElement(StepsComplete, {
    isOpen: true
  });
}).add('Info Only', function () {
  return React.createElement(InfoOnly, {
    isOpen: true
  });
}).add('Splash', function () {
  return React.createElement(Splash, {
    isOpen: true
  });
}).add('Trailhead', function () {
  return React.createElement(TrailHead, {
    isOpen: true
  });
}).add('Trailhead Complete', function () {
  return React.createElement(TrailHeadComplete, {
    isOpen: true
  });
});
//# sourceMappingURL=storybook-stories.js.map