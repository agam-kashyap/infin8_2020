import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PILL_CONTAINER } from '../../../utilities/constants';
import IconSettings from '../../icon-settings';
import BaseExample from '../__examples__/base';
import IconsExample from '../__examples__/icons';
import AvatarsExample from '../__examples__/avatars';
import BareExample from '../__examples__/bare';
storiesOf(PILL_CONTAINER, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base Pill Container', function () {
  return React.createElement(BaseExample, {
    action: action
  });
}).add('Pill Container With Icons', function () {
  return React.createElement(IconsExample, {
    action: action
  });
}).add('Pill Container With Avatars', function () {
  return React.createElement(AvatarsExample, {
    action: action
  });
}).add('Bare Pill Container', function () {
  return React.createElement(BareExample, {
    action: action
  });
});
//# sourceMappingURL=storybook-stories.js.map