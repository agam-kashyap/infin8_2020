import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ACCORDION } from '../../../utilities/constants';
import Base from '../__examples__/base';
import BaseOpen from '../__examples__/base-open';
storiesOf(ACCORDION, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Base', function () {
  return React.createElement(Base, {
    action: action
  });
}).add('Base Open', function () {
  return React.createElement(BaseOpen, {
    action: action
  });
});
//# sourceMappingURL=storybook-stories.js.map