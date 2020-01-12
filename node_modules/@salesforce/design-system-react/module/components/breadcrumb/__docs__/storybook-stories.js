import React from 'react';
import { storiesOf } from '@storybook/react';
import { BREADCRUMB } from '../../../utilities/constants';
import Base from '../__examples__/base';
import OneItem from '../__examples__/one-item';
import OverflowMenu from '../__examples__/base-with-overflow-menu';
storiesOf(BREADCRUMB, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('2 Items', function () {
  return React.createElement(Base, null);
}).add('1 Item', function () {
  return React.createElement(OneItem, null);
}).add('Base with overflow menu', function () {
  return React.createElement(OverflowMenu, null);
});
//# sourceMappingURL=storybook-stories.js.map