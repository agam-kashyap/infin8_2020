/* eslint-disable indent */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { SPINNER } from '../../../utilities/constants';
import Spinner from '../../spinner';
import Default from '../__examples__/default';

var getSpinner = function getSpinner(props) {
  return React.createElement(Spinner, props);
};

var inverseContainerStyle = {
  backgroundColor: '#16325c',
  position: 'absolute',
  width: '100%',
  height: '100%'
};

var inverseContainer = function inverseContainer(getStory) {
  return React.createElement("div", {
    style: inverseContainerStyle
  }, getStory());
};

storiesOf(SPINNER, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Small', function () {
  return getSpinner({
    size: 'small',
    variant: 'base',
    assistiveText: {
      label: 'Main Frame Loading...'
    }
  });
}).add('Medium', function () {
  return getSpinner({
    size: 'medium',
    variant: 'base'
  });
}).add('Large', function () {
  return getSpinner({
    size: 'large',
    variant: 'base'
  });
}).add('Brand Small', function () {
  return getSpinner({
    size: 'small',
    variant: 'brand'
  });
}).add('Brand Medium', function () {
  return getSpinner({
    size: 'medium',
    variant: 'brand'
  });
}).add('Brand Large', function () {
  return getSpinner({
    size: 'large',
    variant: 'brand',
    containerClassName: 'my-custom-classname'
  });
}).add('Large with 300ms delay', function () {
  return getSpinner({
    size: 'large',
    variant: 'base',
    isDelayed: true
  });
}).add('Inverse Small', function () {
  return getSpinner({
    size: 'small',
    variant: 'inverse'
  });
}, {
  decorators: [inverseContainer]
}).add('Inverse Medium', function () {
  return getSpinner({
    size: 'medium',
    variant: 'inverse'
  });
}, {
  decorators: [inverseContainer]
}).add('Inverse Large', function () {
  return getSpinner({
    size: 'large',
    variant: 'inverse'
  });
}, {
  decorators: [inverseContainer]
}).add('Docs site Default', function () {
  return React.createElement(Default, null);
});
//# sourceMappingURL=storybook-stories.js.map