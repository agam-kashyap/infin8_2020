import React from 'react';
import { storiesOf } from '@storybook/react'; // import IconSettings from '../../icon-settings';

import { BRAND_BAND } from '../../../utilities/constants';
import Default from '../__examples__/default';
import Large from '../__examples__/large';
import LightningBlueTheme from '../__examples__/lightning-blue-theme';
import NoImage from '../__examples__/no-image';
import Small from '../__examples__/small';
import BackgroundCover from '../__examples__/background-cover';
storiesOf(BRAND_BAND, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    style: {
      bottom: '1rem',
      left: '1rem',
      overflow: 'auto',
      position: 'absolute',
      right: '1rem',
      top: '1rem'
    }
  }, getStory());
}).add('Default (medium)', function () {
  return React.createElement(Default, null);
}).add('Small', function () {
  return React.createElement(Small, null);
}).add('Large', function () {
  return React.createElement(Large, null);
}).add('No Image', function () {
  return React.createElement(NoImage, null);
}).add('Lightning Blue Theme', function () {
  return React.createElement(LightningBlueTheme, null);
}).add('Image with background size cover', function () {
  return React.createElement(BackgroundCover, null);
});
//# sourceMappingURL=storybook-stories.js.map