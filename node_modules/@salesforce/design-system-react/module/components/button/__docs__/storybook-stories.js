function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/display-name */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconSettings from '../../icon-settings';
import { BUTTON } from '../../../utilities/constants';
import Button from '../../button';
import BaseNeutral from '../__examples__/base-neutral';
import BrandDisabled from '../__examples__/brand-disabled-destructive-inverse';
import ButtonIcons from '../__examples__/button-icons';

var getButton = function getButton(props) {
  return React.createElement(Button, _extends({}, props, {
    onClick: action('click')
  }));
};

var getIconButton = function getIconButton(props) {
  return getButton(_objectSpread({
    variant: 'icon'
  }, props));
};

var blueBackground = function blueBackground(getStory) {
  return React.createElement("div", {
    className: "slds-hint-parent",
    style: {
      backgroundColor: '#16325c'
    }
  }, getStory());
};

storiesOf(BUTTON, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return getButton({
    label: 'Base',
    variant: 'base'
  });
}).add('Neutral', function () {
  return getButton({
    label: 'Neutral'
  });
}).add('Neutral with id', function () {
  return getButton({
    label: 'Neutral',
    id: 'custom-id'
  });
}).add('Neutral Icon', function () {
  return getButton({
    label: 'Neutral Icon',
    iconCategory: 'utility',
    iconName: 'download',
    iconPosition: 'left',
    onFocus: action('focus'),
    onKeyDown: action('keyDown')
  });
}).add('Disabled', function () {
  return getButton({
    label: 'Disabled',
    disabled: true
  });
}).add('Icon large', function () {
  return getIconButton({
    assistiveText: {
      icon: 'Icon'
    },
    iconSize: 'large',
    iconCategory: 'utility',
    iconName: 'answer',
    title: 'chat'
  });
}).add('Icon with external path', function () {
  return getIconButton({
    assistiveText: {
      icon: 'Icon'
    },
    iconSize: 'large',
    iconPath: '/assets/icons/utility-sprite/svg/symbols.svg#announcement',
    title: 'announcement'
  });
}).add('Small Icon Hint inverse', function () {
  return getIconButton({
    assistiveText: {
      icon: 'Hint'
    },
    iconCategory: 'utility',
    iconName: 'down',
    iconVariant: 'border',
    iconSize: 'small',
    hint: true,
    inverse: true
  });
}, {
  decorators: [blueBackground]
}).add('Icon Container Small', function () {
  return getIconButton({
    assistiveText: {
      icon: 'Icon border container small'
    },
    iconCategory: 'utility',
    iconName: 'settings',
    iconSize: 'large',
    iconVariant: 'border',
    inverse: true
  });
}, {
  decorators: [blueBackground]
}).add('Dropdown Icon inverse', function () {
  return getIconButton({
    'aria-haspopup': true,
    assistiveText: {
      icon: 'Dropdown Icon inverse'
    },
    iconCategory: 'utility',
    iconName: 'settings',
    iconVariant: 'more',
    inverse: true
  });
}, {
  decorators: [blueBackground]
}).add('Outline brand button', function () {
  return getButton({
    label: 'Outline brand button',
    variant: 'outline-brand'
  });
}, {
  decorators: [blueBackground]
}).add('Doc site Base Neutral', function () {
  return React.createElement(BaseNeutral, null);
}).add('Doc site Brand Disabled', function () {
  return React.createElement(BrandDisabled, null);
}).add('Doc site Button Icons', function () {
  return React.createElement(ButtonIcons, null);
});
//# sourceMappingURL=storybook-stories.js.map