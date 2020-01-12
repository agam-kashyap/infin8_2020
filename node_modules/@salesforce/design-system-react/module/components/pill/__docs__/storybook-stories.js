import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PILL } from '../../../utilities/constants';
import IconSettings from '../../icon-settings';
import BaseExample from '../__examples__/base';
import IconExample from '../__examples__/icon';
import Snapshot from '../__examples__/snapshot';
storiesOf(PILL, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Linked, Unlinked, Truncated', function () {
  return React.createElement(BaseExample, {
    action: action
  });
}).add('Icon, Avatar, Error', function () {
  return React.createElement(IconExample, {
    action: action
  });
}).add('Docs site Snapshot', function () {
  return React.createElement(Snapshot, null);
});
//# sourceMappingURL=storybook-stories.js.map