function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/display-name */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconSettings from '../../icon-settings';
import { BUTTON_STATEFUL } from '../../../utilities/constants';
import ButtonStateful from '../../button-stateful';
import IconTextButton from '../__examples__/icon-text';
import IconButton from '../__examples__/icon';

var getButtonStateful = function getButtonStateful(props) {
  return React.createElement(ButtonStateful, _extends({}, props, {
    onClick: action('click')
  }));
};

storiesOf(BUTTON_STATEFUL, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return getButtonStateful();
}).add('Disabled', function () {
  return getButtonStateful({
    disabled: true
  });
}).add('Icon Text Button', function () {
  return React.createElement(IconTextButton, null);
}).add('Icon Button', function () {
  return React.createElement(IconButton, null);
});
//# sourceMappingURL=storybook-stories.js.map