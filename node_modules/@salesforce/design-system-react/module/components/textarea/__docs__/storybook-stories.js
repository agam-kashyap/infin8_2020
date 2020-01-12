import React from 'react';
import { storiesOf } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { TEXTAREA } from '../../../utilities/constants';
import Textarea from '../';
import Default from '../__examples__/default';
import Disabled from '../__examples__/disabled';
import Error from '../__examples__/error';
storiesOf(TEXTAREA, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Standard', function () {
  return React.createElement(Textarea, {
    id: "text-area-standard",
    label: "Textarea Label",
    name: "standard-textarea",
    placeholder: "Placeholder Text"
  });
}).add('Disabled', function () {
  return React.createElement(Textarea, {
    id: "text-area-disabled",
    name: "disabled",
    label: "Textarea Label",
    disabled: true,
    placeholder: "Placeholder Text"
  });
}).add('Required', function () {
  return React.createElement(Textarea, {
    id: "text-area-required",
    name: "required-textarea",
    label: "Textarea Label",
    required: true,
    placeholder: "Placeholder Text"
  });
}).add('Error', function () {
  return React.createElement(Textarea, {
    "aria-describedby": "error-1",
    id: "text-area-error",
    name: "required-textarea-error",
    label: "Textarea Label",
    required: true,
    errorText: "This field is required",
    placeholder: "Placeholder Text"
  });
}).add('Docs site Default', function () {
  return React.createElement(Default, null);
}).add('Docs site Disabled', function () {
  return React.createElement(Disabled, null);
}).add('Docs site Error', function () {
  return React.createElement(Error, null);
});
//# sourceMappingURL=storybook-stories.js.map