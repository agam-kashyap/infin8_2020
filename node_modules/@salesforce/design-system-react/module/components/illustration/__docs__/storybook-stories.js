import React from 'react';
import { storiesOf } from '@storybook/react';
import { ILLUSTRATION } from '../../../utilities/constants';
import SmallImageWithText from '../__examples__/small-image-text.jsx';
import LargeImageWithText from '../__examples__/large-image-text.jsx';
import HeadingOnly from '../__examples__/heading-only.jsx';
import MessageOnly from '../__examples__/message-only.jsx';
import HeadingWithMessage from '../__examples__/heading-message.jsx';
storiesOf(ILLUSTRATION, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Small Image and Text', function () {
  return React.createElement(SmallImageWithText, null);
}).add('Large Image and Text', function () {
  return React.createElement(LargeImageWithText, null);
}).add('Heading Only', function () {
  return React.createElement(HeadingOnly, null);
}).add('Message Only', function () {
  return React.createElement(MessageOnly, null);
}).add('Heading and Message', function () {
  return React.createElement(HeadingWithMessage, null);
});
//# sourceMappingURL=storybook-stories.js.map