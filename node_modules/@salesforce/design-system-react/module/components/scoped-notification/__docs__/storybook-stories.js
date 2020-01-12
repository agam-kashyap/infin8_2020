import React from 'react';
import { storiesOf } from '@storybook/react';
import { SCOPED_NOTIFICATION } from '../../../utilities/constants';
import Base from '../__examples__/base';
import CustomIcon from '../__examples__/custom-icon';
import Light from '../__examples__/light';
import Dark from '../__examples__/dark';
storiesOf(SCOPED_NOTIFICATION, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Base', function () {
  return React.createElement(Base, null);
}).add('Light', function () {
  return React.createElement(Light, null);
}).add('Dark', function () {
  return React.createElement(Dark, null);
}).add('Custom Icon', function () {
  return React.createElement(CustomIcon, null);
});
//# sourceMappingURL=storybook-stories.js.map