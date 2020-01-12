import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconSettings from '../../icon-settings';
import { DATA_TABLE } from '../../../utilities/constants';
import Advanced from '../__examples__/advanced';
import AdvancedSingleSelect from '../__examples__/advanced-single-select';
import AdvancedSingleSelectFixedHeader from '../__examples__/advanced-single-select-fixed-header';
import BasicFixedLayout from '../__examples__/basic-fixed-layout';
import BasicFluid from '../__examples__/basic-fluid';
import BasicFluidColumnBordered from '../__examples__/basic-fluid-column-bordered';
import BasicFluidNoRowHover from '../__examples__/basic-fluid-no-row-hover';
import BasicFluidStriped from '../__examples__/basic-fluid-striped';
import FixedHeader from '../__examples__/fixed-header';
import FixedHeaderHorizontalScroller from '../__examples__/fixed-header-horizontal-scrolling';
import JoinedWithPageHeader from '../__examples__/joined-with-page-header';
storiesOf(DATA_TABLE, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Basic Fluid Layout (Default)', function () {
  return React.createElement(BasicFluid, null);
}).add('Basic Fluid Layout - Striped', function () {
  return React.createElement(BasicFluidStriped, null);
}).add('Basic Fluid Layout - No Row Hover', function () {
  return React.createElement(BasicFluidNoRowHover, null);
}).add('Basic Fluid Layout - Column Bordered', function () {
  return React.createElement(BasicFluidColumnBordered, null);
}).add('Basic Fixed Layout', function () {
  return React.createElement(BasicFixedLayout, null);
}).add('Advanced (Fixed Layout)', function () {
  return React.createElement(Advanced, {
    log: action
  });
}).add('Advanced Single Select (Fixed Layout)', function () {
  return React.createElement(AdvancedSingleSelect, {
    log: action
  });
}).add('Advanced Single Select (Fixed Header)', function () {
  return React.createElement(AdvancedSingleSelectFixedHeader, {
    log: action
  });
}).add('Fixed Header', function () {
  return React.createElement(FixedHeader, null);
}).add('Fixed Header Horizontal Scrolling', function () {
  return React.createElement(FixedHeaderHorizontalScroller, null);
}).add('Joined with Page Header', function () {
  return React.createElement(JoinedWithPageHeader, null);
});
//# sourceMappingURL=storybook-stories.js.map