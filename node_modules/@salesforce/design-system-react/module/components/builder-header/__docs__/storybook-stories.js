import React from 'react';
import { storiesOf } from '@storybook/react';
import BuilderHeaderBase from '../__examples__/base';
import BuilderHeaderBaseWithToolbar from '../__examples__/base-with-toolbar';
import BuilderHeaderSuccessfulSave from '../__examples__/successful-save';
import BuilderHeaderAfterSuccessfulSave from '../__examples__/after-successful-save';
import BuilderHeaderFailedSave from '../__examples__/failed-save';
import BuilderHeaderWithPageTypeEditable from '../__examples__/base-with-page-type-editable';
import { BUILDER_HEADER } from '../../../utilities/constants';
storiesOf(BUILDER_HEADER, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Base', function () {
  return React.createElement(BuilderHeaderBase, null);
}).add('Base with Toolbar', function () {
  return React.createElement(BuilderHeaderBaseWithToolbar, null);
}).add('Successful Save', function () {
  return React.createElement(BuilderHeaderSuccessfulSave, null);
}).add('After Successful Save', function () {
  return React.createElement(BuilderHeaderAfterSuccessfulSave, null);
}).add('Failed Save', function () {
  return React.createElement(BuilderHeaderFailedSave, null);
}).add('Base with Page Type Editable', function () {
  return React.createElement(BuilderHeaderWithPageTypeEditable, null);
});
//# sourceMappingURL=storybook-stories.js.map