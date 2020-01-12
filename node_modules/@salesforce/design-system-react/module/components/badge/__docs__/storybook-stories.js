import React from 'react';
import { storiesOf } from '@storybook/react';
import { BADGE } from '../../../utilities/constants';
import Default from '../__examples__/default';
import WithIcon from '../__examples__/with-icon';
import ColorVariants from '../__examples__/color-variants';
storiesOf(BADGE, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    style: {
      padding: '1rem'
    }
  }, getStory());
}).add('Default', function () {
  return React.createElement(Default, null);
}).add('w/ Icons', function () {
  return React.createElement(WithIcon, null);
}).add('Color Variants', function () {
  return React.createElement(ColorVariants, null);
});
//# sourceMappingURL=storybook-stories.js.map