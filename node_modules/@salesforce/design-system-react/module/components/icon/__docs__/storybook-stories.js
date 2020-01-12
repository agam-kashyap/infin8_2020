import React from 'react';
import { storiesOf } from '@storybook/react';
import { ICON } from '../../../utilities/constants';
import Icon from '../../icon';
import IconSettings from '../../icon-settings';
import download from '../../../icons/utility/download';
import Standard from '../__examples__/standard';
import Utility from '../__examples__/utility';
import Action from '../__examples__/action';
import Doctype from '../__examples__/doctype';
import Custom from '../__examples__/custom';
import ExternalPath from '../__examples__/external-path';
import ColorBase from '../__examples__/color-base';
import ColorDefault from '../__examples__/color-default';
import ColorError from '../__examples__/color-error';
import ColorWarning from '../__examples__/color-warning';
import ColorLight from '../__examples__/color-light';
import SizesExtraSmall from '../__examples__/sizes-extra-small';
import SizesSmall from '../__examples__/sizes-small';
import SizesMedium from '../__examples__/sizes-medium';
import SizesLarge from '../__examples__/sizes-large';
import Categories from '../__examples__/categories';
import Colors from '../__examples__/colors';
import Sizes from '../__examples__/sizes'; // eslint-disable-next-line camelcase

import UNSAFE_DirectionSettings from '../../utilities/UNSAFE_direction';
import ProductThemes from '../__examples__/product-themes.jsx';

var makeRtl = function makeRtl(component) {
  return (// eslint-disable-next-line
    React.createElement(UNSAFE_DirectionSettings.Provider, {
      value: "rtl"
    }, React.createElement("div", {
      dir: "rtl"
    }, component))
  );
};

storiesOf(ICON, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Category: Standard', function () {
  return React.createElement(Standard, null);
}).add('Category: Standard - Right to Left (RTL)', function () {
  return makeRtl(React.createElement(Standard, null));
}).add('Category: Utility', function () {
  return React.createElement(Utility, null);
}).add('Category: Action', function () {
  return React.createElement(Action, null);
}).add('Category: Doctype', function () {
  return React.createElement(Doctype, null);
}).add('Category: Custom', function () {
  return React.createElement(Custom, null);
}).add('Category: External Path', function () {
  return React.createElement(ExternalPath, null);
}).add('Size: X-Small', function () {
  return React.createElement(SizesExtraSmall, null);
}).add('Size: Small', function () {
  return React.createElement(SizesSmall, null);
}).add('Size: Medium (default)', function () {
  return React.createElement(SizesMedium, null);
}).add('Size: Large', function () {
  return React.createElement(SizesLarge, null);
}).add('Color: Base', function () {
  return React.createElement("div", {
    style: {
      backgroundColor: 'goldenrod',
      padding: '10px'
    }
  }, React.createElement(ColorBase, null));
}).add('Color: Default', function () {
  return React.createElement(ColorDefault, null);
}).add('Color: Error', function () {
  return React.createElement(ColorError, null);
}).add('Color: Warning', function () {
  return React.createElement(ColorWarning, null);
}).add('Color: Light', function () {
  return React.createElement(ColorLight, null);
}).add('Base: Standard (custom styles)', function () {
  return React.createElement(Icon, {
    assistiveText: {
      label: 'Account'
    },
    category: "standard",
    name: "account",
    style: {
      backgroundColor: '#aceace',
      fill: 'orangered'
    },
    title: "This is a title"
  });
}).add('Base: Imported', function () {
  return React.createElement(Icon, {
    assistiveText: {
      label: 'Download'
    },
    category: "utility",
    icon: download
  });
}).add('Product Themes', function () {
  return React.createElement(ProductThemes, null);
}).add('Docs site Categories', function () {
  return React.createElement(Categories, null);
}).add('Docs site Colors', function () {
  return React.createElement(Colors, null);
}).add('Docs site Sizes', function () {
  return React.createElement(Sizes, null);
});
//# sourceMappingURL=storybook-stories.js.map