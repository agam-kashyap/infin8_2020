import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { COMBOBOX } from '../../../utilities/constants';
import Base from '../__examples__/base';
import BaseCustomMenuItem from '../__examples__/base-custom-menu-item';
import BaseCustomMenuItemDisabled from '../__examples__/base-custom-menu-item-disabled';
import BaseInheritMenuWidth from '../__examples__/base-inherit-menu-width.jsx';
import BaseInheritMenuWidthRTL from '../__examples__/base-inherit-menu-width-RTL';
import BaseInlineHelpTooltip from '../__examples__/base-inline-help-tooltip';
import BaseMenuSubHeader from '../__examples__/base-menu-subheader';
import BaseMenuSeparator from '../__examples__/base-menu-separator';
import BaseMenuItemDisabled from '../__examples__/base-menu-item-disabled';
import BaseMenuItemDisabledTooltipOpen from '../__examples__/base-menu-item-disabled-tooltip-open';
import BaseMenuItemDisabledTooltip from '../__examples__/base-menu-item-disabled-tooltip';
import BaseWithScroll from '../__examples__/base-with-scroll';
import Dialog from '../__examples__/dialog.jsx';
import InlineSingle from '../__examples__/inline-single';
import InlineSingleEntityCombobox from '../__examples__/inline-single-entity-combobox';
import InlineSingleSearchAddEntities from '../__examples__/inline-single-search-add-entities';
import InlineMultiple from '../__examples__/inline-multiple';
import InlineMultipleLoading from '../__examples__/inline-multiple-loading';
import InputProp from '../__examples__/input-prop';
import PredefinedOptionsOnly from '../__examples__/base-predefined-options-only';
import ReadOnly from '../__examples__/readonly-single';
import ReadOnlyRTL from '../__examples__/readonly-single-RTL';
import ReadOnlyDisabled from '../__examples__/readonly-single-disabled';
import ReadOnlyMenuItemDisabled from '../__examples__/readonly-menu-item-disabled';
import ReadOnlySingleSelectionCustomMenuItem from '../__examples__/readonly-single-selection-custom-menu-item';
import ReadOnlyMultiple from '../__examples__/readonly-multiple';
import RequiredInputErrorState from '../__examples__/required-input-error-state';
import SnapshotBaseOpen from '../__examples__/snapshot/base-open';
import SnapshotBaseOpenMenuSubHeaderSeparator from '../__examples__/snapshot/base-open-menu-sub-header';
import SnapshotBaseOpenMenuInheritWidthOf from '../__examples__/snapshot/base-open-menu-inheritWidthOf';
import SnapshotBaseCustomMenuItemOpen from '../__examples__/snapshot/base-custom-menu-item-open';
import SnapshotBaseLabelRequired from '../__examples__/snapshot/base-label-required';
import SnapshotBaseSelected from '../__examples__/snapshot/base-selected';
import SnapshotDialogOpen from '../__examples__/snapshot/dialog-open';
import SnapshotInlineMultipleOpenLoading from '../__examples__/snapshot/inline-multiple-open-loading';
import SnapshotInlineMultipleSelection from '../__examples__/snapshot/inline-multiple-selection';
import SnapshotInlineMultipleSelectionSelected from '../__examples__/snapshot/inline-multiple-selection-selected';
import SnapshotInlineSingleEntityCombobox from '../__examples__/snapshot/inline-single-entity-combobox';
import SnapshotInlineSingleSelection from '../__examples__/snapshot/inline-single-selection';
import SnapshotInlineSingleSelectionSelected from '../__examples__/snapshot/inline-single-selection-selected';
import SnapshotInlineSingleSearchAddEntitiesOpen from '../__examples__/snapshot/inline-single-search-add-entities-open';
import SnapshotReadonlyMultipleSelection from '../__examples__/snapshot/readonly-multiple-selection';
import SnapshotReadonlyMultipleSelectionMultipleItemsSelected from '../__examples__/snapshot/readonly-multiple-selection-multiple-items-selected';
import SnapshotReadonlyMultipleSelectionSingleItemSelected from '../__examples__/snapshot/readonly-multiple-selection-single-item-selected';
import SnapshotReadonlySingleSelection from '../__examples__/snapshot/readonly-single-selection';
import SnapshotReadonlySingleSelectionDisabled from '../__examples__/snapshot/readonly-single-selection-disabled';
import SnapshotReadonlySingleSelectionCustomMenuItemOpen from '../__examples__/snapshot/readonly-single-selection-custom-menu-item';
import SnapshotReadonlySingleSelectionSelected from '../__examples__/snapshot/readonly-single-selection-selected';
import SnapshotReadonlySingleSelectionSelectedOpen from '../__examples__/snapshot/readonly-single-selection-selected-open';
storiesOf(COMBOBOX, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Base', function () {
  return React.createElement(Base, {
    action: action
  });
}).add('Base Pre-defined Options Only', function () {
  return React.createElement(PredefinedOptionsOnly, {
    action: action
  });
}).add('Base Inline Help', function () {
  return React.createElement("section", null, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "Field Level Help Tooltip"), React.createElement(BaseInlineHelpTooltip, {
    action: action
  }));
}).add('Base Menu Item Disabled', function () {
  return React.createElement(BaseMenuItemDisabled, {
    action: action
  });
}).add('Base Menu Item Disabled With Tooltip', function () {
  return React.createElement(BaseMenuItemDisabledTooltip, {
    action: action
  });
}).add('Base Menu Item Disabled With Tooltip Open', function () {
  return React.createElement(BaseMenuItemDisabledTooltipOpen, {
    action: action
  });
}).add('Inline Single Selection', function () {
  return React.createElement(InlineSingle, {
    action: action
  });
}).add('Inline Single Entity Selection', function () {
  return React.createElement(InlineSingleEntityCombobox, {
    action: action
  });
}).add('Inline Single Search/Add Entities', function () {
  return React.createElement(InlineSingleSearchAddEntities, {
    action: action
  });
}).add('Inline Single Search/Add Entities - Open', function () {
  return React.createElement(InlineSingleSearchAddEntities, {
    isOpen: true,
    action: action
  });
}).add('Inline Multiple Selection', function () {
  return React.createElement(InlineMultiple, {
    action: action
  });
}).add('Inline Multiple Selection Loading', function () {
  return React.createElement(InlineMultipleLoading, {
    action: action
  });
}).add('Base Custom Menu Item', function () {
  return React.createElement(BaseCustomMenuItem, {
    action: action
  });
}).add('Base Custom Menu Item Disabled', function () {
  return React.createElement(BaseCustomMenuItemDisabled, {
    action: action
  });
}).add('Base Menu Sub Headers', function () {
  return React.createElement(BaseMenuSubHeader, {
    action: action
  });
}).add('Base Menu Separator', function () {
  return React.createElement(BaseMenuSeparator, {
    action: action
  });
}).add('Base Inherit Menu Width', function () {
  return React.createElement(BaseInheritMenuWidth, {
    action: action
  });
}).add('Base Inherit Menu Width - Right to Left (RTL)', function () {
  return React.createElement(BaseInheritMenuWidthRTL, {
    action: action
  });
}).add('Base With Scroll', function () {
  return React.createElement(BaseWithScroll, {
    action: action
  });
}).add('Dialog', function () {
  return React.createElement(Dialog, {
    action: action
  });
}).add('Readonly Single Selection', function () {
  return React.createElement(ReadOnly, {
    action: action
  });
}).add('Readonly Single Selection - Right to Left (RTL)', function () {
  return React.createElement(ReadOnlyRTL, {
    action: action
  });
}).add('Readonly Single Selection Disabled', function () {
  return React.createElement(ReadOnlyDisabled, {
    action: action
  });
}).add('Readonly Single Menu Item Disabled', function () {
  return React.createElement(ReadOnlyMenuItemDisabled, {
    action: action
  });
}).add('Readonly Multiple Selection', function () {
  return React.createElement(ReadOnlyMultiple, {
    action: action
  });
}).add('Readonly Single Selection Custom Menu Item', function () {
  return React.createElement(ReadOnlySingleSelectionCustomMenuItem, {
    action: action
  });
}).add('Required Input in Error State', function () {
  return React.createElement(RequiredInputErrorState, {
    action: action
  });
}).add('Input Component as a Prop', function () {
  return React.createElement(InputProp, {
    action: action
  });
}).add('Snapshot Base Open', function () {
  return React.createElement(SnapshotBaseOpen, {
    action: action
  });
}).add('Snapshot Base Custom Menu Item Open', function () {
  return React.createElement(SnapshotBaseCustomMenuItemOpen, {
    action: action
  });
}).add('Snapshot Base Selected', function () {
  return React.createElement(SnapshotBaseSelected, {
    action: action
  });
}).add('Snapshot Base Label Required', function () {
  return React.createElement(SnapshotBaseLabelRequired, {
    action: action
  });
}).add('Snapshot Base Open Menu Sub Header Separator', function () {
  return React.createElement(SnapshotBaseOpenMenuSubHeaderSeparator, {
    action: action
  });
}).add('Snapshot Base Open Menu inheritWidthOf prop', function () {
  return React.createElement(SnapshotBaseOpenMenuInheritWidthOf, {
    action: action
  });
}).add('Snapshot Dialog Open', function () {
  return React.createElement(SnapshotDialogOpen, {
    action: action
  });
}).add('Snapshot Inline Single Selection', function () {
  return React.createElement(SnapshotInlineSingleSelection, {
    action: action
  });
}).add('Snapshot Inline Single Selection Selected', function () {
  return React.createElement(SnapshotInlineSingleSelectionSelected, {
    action: action
  });
}).add('Snapshot Inline Multiple Selection', function () {
  return React.createElement(SnapshotInlineMultipleSelection, {
    action: action
  });
}).add('Snapshot Inline Multiple Selection Selected', function () {
  return React.createElement(SnapshotInlineMultipleSelectionSelected, {
    action: action
  });
}).add('Snapshot Readonly Single Selection', function () {
  return React.createElement(SnapshotReadonlySingleSelection, {
    action: action
  });
}).add('Snapshot Readonly Single Selection Disabled', function () {
  return React.createElement(SnapshotReadonlySingleSelectionDisabled, {
    action: action
  });
}).add('Snapshot Readonly Single Selection Selected', function () {
  return React.createElement(SnapshotReadonlySingleSelectionSelected, {
    action: action
  });
}).add('Snapshot Readonly Single Selection Selected Open', function () {
  return React.createElement(SnapshotReadonlySingleSelectionSelectedOpen, {
    action: action
  });
}).add('Snapshot Readonly Multiple Selection', function () {
  return React.createElement(SnapshotReadonlyMultipleSelection, {
    action: action
  });
}).add('Snapshot Readonly Multiple Selection Single Item Selected', function () {
  return React.createElement(SnapshotReadonlyMultipleSelectionSingleItemSelected, {
    action: action
  });
}).add('Snapshot Readonly Multiple Selection Multiple Items Selected', function () {
  return React.createElement(SnapshotReadonlyMultipleSelectionMultipleItemsSelected, {
    action: action
  });
}).add('Snapshot Readonly Single Selection Custom Menu Item', function () {
  return React.createElement(SnapshotReadonlySingleSelectionCustomMenuItemOpen, {
    action: action
  });
}).add('Snapshot Inline Single Search/Add Entities Open', function () {
  return React.createElement(SnapshotInlineSingleSearchAddEntitiesOpen, {
    action: action
  });
}).add('Snapshot Inline Single Entity Selection', function () {
  return React.createElement(SnapshotInlineSingleEntityCombobox, {
    action: action
  });
}).add('Snapshot Inline Multiple Open Loading', function () {
  return React.createElement(SnapshotInlineMultipleOpenLoading, {
    action: action
  });
});
//# sourceMappingURL=storybook-stories.js.map