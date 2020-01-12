import React from 'react';
import { storiesOf } from '@storybook/react';
import Active from '../__examples__/active';
import Base from '../__examples__/base';
import Complete from '../__examples__/complete';
import Warning from '../__examples__/warning';
import Expired from '../__examples__/expired';
import CustomIcon from '../__examples__/customIcon';
import Examples from '../__examples__/examples';
import { PROGRESS_RING } from '../../../utilities/constants';
storiesOf(PROGRESS_RING, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Base', function () {
  return React.createElement(Base, null);
}).add('Theme: Active', function () {
  return React.createElement(Active, null);
}).add('Theme: Complete', function () {
  return React.createElement(Complete, null);
}).add('Theme: Warning', function () {
  return React.createElement(Warning, null);
}).add('Theme: Expired', function () {
  return React.createElement(Expired, null);
}).add('Custom Icon', function () {
  return React.createElement(CustomIcon, null);
}).add('Snapshot Test Examples', function () {
  return React.createElement(Examples, null);
});
//# sourceMappingURL=storybook-stories.js.map