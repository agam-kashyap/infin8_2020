import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconSettings from '../../icon-settings';
import { VERTICAL_NAVIGATION } from '../../../utilities/constants';
import Default from '../__examples__/default';
import SnaphotDefault from '../__examples__/snapshot-default';
storiesOf(VERTICAL_NAVIGATION, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Default', function () {
  return React.createElement(Default, {
    action: action
  });
}).add('DOM Snapshot', function () {
  return React.createElement(SnaphotDefault, null);
});
//# sourceMappingURL=storybook-stories.js.map