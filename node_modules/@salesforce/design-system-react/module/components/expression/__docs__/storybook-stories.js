import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { EXPRESSION } from '../../../utilities/constants';
import Initial from '../__examples__/initial';
import ResourceSelected from '../__examples__/resource-selected';
import MultipleConditions from '../__examples__/multi-condition';
import WithGroup from '../__examples__/with-group';
import CustomLogic from '../__examples__/with-custom-Logic';
import FormulaLogic from '../__examples__/with-formula-logic';
storiesOf(EXPRESSION, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Initial State', function () {
  return React.createElement(Initial, {
    action: action
  });
}).add('w/ Resource Selected', function () {
  return React.createElement(ResourceSelected, {
    action: action
  });
}).add('w/ Multiple Conditions', function () {
  return React.createElement(MultipleConditions, {
    action: action
  });
}).add('w/ Group', function () {
  return React.createElement(WithGroup, {
    action: action
  });
}).add('w/ Custom Logic', function () {
  return React.createElement(CustomLogic, {
    action: action
  });
}).add('w/ Formula Logic', function () {
  return React.createElement(FormulaLogic, {
    action: action
  });
});
//# sourceMappingURL=storybook-stories.js.map