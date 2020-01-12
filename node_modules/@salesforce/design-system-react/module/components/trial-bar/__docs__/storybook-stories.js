import React from 'react';
import { storiesOf } from '@storybook/react';
import { TRIAL_BAR } from '../../../utilities/constants';
import Default from '../__examples__/default';
storiesOf(TRIAL_BAR, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Default', function () {
  return React.createElement(Default, null);
});
//# sourceMappingURL=storybook-stories.js.map