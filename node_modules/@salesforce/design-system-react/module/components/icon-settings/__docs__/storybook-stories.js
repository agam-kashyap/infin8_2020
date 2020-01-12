import React from 'react';
import { storiesOf } from '@storybook/react';
import { ICON_SETTINGS } from '../../../utilities/constants';
import Sprite from '../__examples__/sprite';
import IconPath from '../__examples__/icon-path';
import OnRequestIconPath from '../__examples__/on-request-icon-path';
storiesOf(ICON_SETTINGS, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Base: Icon path', function () {
  return React.createElement(IconPath, null);
}).add('Base: Sprite imports NoTest', function () {
  return React.createElement(Sprite, null);
}).add('Base: OnRequestIconPath NoTest', function () {
  return React.createElement(OnRequestIconPath, null);
});
//# sourceMappingURL=storybook-stories.js.map