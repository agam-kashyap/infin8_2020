import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { FILES } from '../../../utilities/constants';
import Default from '../__examples__/default';
import NoImage from '../__examples__/no-image';
import NoTitle from '../__examples__/no-title';
import Actions from '../__examples__/actions';
import ExternalIcon from '../__examples__/with-external-icon';
import Loading from '../__examples__/loading';
import Cropped from '../__examples__/crops';
storiesOf(FILES, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Default', function () {
  return React.createElement(Default, null);
}).add('w/o Image', function () {
  return React.createElement(NoImage, null);
}).add('w/o Title', function () {
  return React.createElement(NoTitle, {
    action: action
  });
}).add('w/ External Icon', function () {
  return React.createElement(ExternalIcon, null);
}).add('w/ Actions', function () {
  return React.createElement(Actions, null);
}).add('Loading', function () {
  return React.createElement(Loading, null);
}).add('Cropped', function () {
  return React.createElement(Cropped, null);
});
//# sourceMappingURL=storybook-stories.js.map