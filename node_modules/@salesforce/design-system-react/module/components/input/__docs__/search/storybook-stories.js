import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconSettings from '../../../icon-settings';
import { SEARCH } from '../../../../utilities/constants';
import Search from '../../search';
storiesOf(SEARCH, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Standard', function () {
  return React.createElement(Search, {
    assistiveText: {
      label: 'Search'
    },
    id: "search-standard",
    placeholder: "Search",
    name: "search-input",
    onChange: action('change'),
    onSearch: action('search')
  });
});
//# sourceMappingURL=storybook-stories.js.map