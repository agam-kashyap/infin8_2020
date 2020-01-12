import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { EXPANDABLE_SECTION } from '../../../utilities/constants';
import ControlledExample from '../__examples__/controlled';
import DefaultExample from '../__examples__/default';
import NonCollapsibleExample from '../__examples__/non-collapsible';
storiesOf(EXPANDABLE_SECTION, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Default', function () {
  return React.createElement(DefaultExample, null);
}).add('Controlled', function () {
  return React.createElement(ControlledExample, {
    action: action
  });
}).add('Non-collapsible', function () {
  return React.createElement(NonCollapsibleExample, null);
});
//# sourceMappingURL=storybook-stories.js.map