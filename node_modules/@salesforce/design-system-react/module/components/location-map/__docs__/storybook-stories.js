import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { LOCATION_MAP } from '../../../utilities/constants';
import MultiLocations from '../../location-map/__examples__/multiple-locations';
import SingleLocation from '../../location-map/__examples__/single-location';
storiesOf(LOCATION_MAP, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Multi Locations', function () {
  return React.createElement(MultiLocations, {
    action: action
  });
}).add('Multi Locations pre-selected', function () {
  return React.createElement(MultiLocations, {
    selection: {
      id: '3',
      name: 'salesforce.com inc Bellevue',
      address: '929 108th Ave NE, Bellevue, WA'
    },
    action: action
  });
}).add('Multi locations inside Modal', function () {
  return React.createElement(MultiLocations, {
    isModal: true,
    action: action
  });
}).add('Single location inside Modal', function () {
  return React.createElement(SingleLocation, null);
});
//# sourceMappingURL=storybook-stories.js.map