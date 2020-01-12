import React from 'react';
import { storiesOf } from '@storybook/react';
import IconSettings from '../../icon-settings';
import MediaObject from '../../media-object';
import Icon from '../../icon';
import { MEDIA_OBJECT } from '../../../utilities/constants';
import Default from '../__examples__/default';
import VerticallyCentered from '../__examples__/vertically-centered';

var DemoMediaObject = function DemoMediaObject(props) {
  return React.createElement(MediaObject, props);
};

DemoMediaObject.displayName = 'DemoMediaObject';
storiesOf(MEDIA_OBJECT, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return React.createElement(DemoMediaObject, {
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.",
    figure: React.createElement(Icon, {
      category: "standard",
      name: "user",
      size: "medium"
    })
  });
}).add('Figure Vertical Center', function () {
  return React.createElement(DemoMediaObject, {
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.",
    figure: React.createElement(Icon, {
      category: "standard",
      name: "user",
      size: "medium"
    }),
    verticalCenter: true
  });
}).add('Docs site Default', function () {
  return React.createElement(Default, null);
}).add('Docs site VerticallyCentered', function () {
  return React.createElement(VerticallyCentered, null);
});
//# sourceMappingURL=storybook-stories.js.map