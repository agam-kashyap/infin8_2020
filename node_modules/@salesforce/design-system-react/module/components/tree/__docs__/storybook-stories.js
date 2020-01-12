/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TREE } from '../../../utilities/constants';
import sampleNodesDynamicHashMap from './dynamic-hashmap';
import DefaultExample from '../__examples__/default'; // View the generated hash map
// console.log(JSON.stringify(sampleNodesDynamicHashMap.base));
// console.log(JSON.stringify(sampleNodesDynamicHashMap.initialExpandedSelected));
// console.log(JSON.stringify(sampleNodesDynamicHashMap.large));

storiesOf(TREE, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Base', function () {
  return React.createElement(DefaultExample, {
    nodes: sampleNodesDynamicHashMap.base,
    action: action
  });
}).add('Base with stencil', function () {
  return React.createElement(DefaultExample, {
    action: action,
    loadingStencil: true
  });
}).add('Initial Expanded/Selected', function () {
  return React.createElement(DefaultExample, {
    action: action,
    nodes: sampleNodesDynamicHashMap.initialExpandedSelected
  });
}).add('No Branch Select', function () {
  return React.createElement(DefaultExample, {
    action: action,
    noBranchSelection: true
  });
}).add('Multiple Selection', function () {
  return React.createElement(DefaultExample, {
    action: action,
    multipleSelection: true
  });
}).add('Assistive Heading', function () {
  return React.createElement(DefaultExample, {
    action: action,
    noHeading: true,
    assistiveText: {
      label: 'Miscellaneous Foods'
    }
  });
}).add('Overflow Hidden NoTest', function () {
  return React.createElement(DefaultExample, {
    action: action,
    listStyle: {
      height: '300px',
      overflowY: 'auto'
    },
    nodes: sampleNodesDynamicHashMap.large
  });
}).add('Large dataset (300+) NoTest', function () {
  return React.createElement(DefaultExample, {
    action: action,
    nodes: sampleNodesDynamicHashMap.large
  });
}).add('Highlighted Search', function () {
  return React.createElement(DefaultExample, {
    action: action,
    searchable: true
  });
});
//# sourceMappingURL=storybook-stories.js.map