function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/display-name, jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconSettings from '../../icon-settings';
import { POPOVER_TOOLTIP } from '../../../utilities/constants';
import Tooltip from '../../tooltip';
import AnchoredNubbin from '../__examples__/anchored-nubbin';
import Base from '../__examples__/base';
import ButtonGroupExample from '../__examples__/button-group';
import ButtonExample from '../__examples__/button';
import LearnMoreExample from '../__examples__/learn-more';
import WithDelay from '../__examples__/with-delay';
import Icon from '../../icon';
import Button from '../../button';

var getPopoverTooltip = function getPopoverTooltip(props) {
  return React.createElement(Tooltip, props, React.createElement(Button, {
    label: "Trigger Tooltip"
  }));
};

var getPopoverTooltipAlign = function getPopoverTooltipAlign(props) {
  /* eslint-disable react/prop-types */
  var children = [];
  var align = ['top', 'top left', 'top right', 'right', 'right top', 'right bottom', 'bottom', 'bottom left', 'bottom right', 'left', 'left top', 'left bottom'];
  align.forEach(function (value) {
    children.push(React.createElement("div", {
      key: value,
      "data-ignore-axe-duplicate-id-aria": true,
      style: {
        margin: '100px auto'
      }
    }, React.createElement(Tooltip, _extends({}, props, {
      align: value
    }), props.trigger)));
  });
  return React.createElement("div", {
    key: "container"
  }, children);
};

var content = 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.';
storiesOf(POPOVER_TOOLTIP, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium slds-m-horizontal_x-large",
    style: {
      margin: '150px auto',
      width: '500px'
    }
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return React.createElement(Base, null);
}).add('Learn More', function () {
  return React.createElement(LearnMoreExample, null);
}).add('Button Group', function () {
  return React.createElement(ButtonGroupExample, null);
}).add('Button', function () {
  return React.createElement(ButtonExample, null);
}).add('Open', function () {
  return getPopoverTooltip({
    align: 'bottom',
    isOpen: true,
    id: 'myPopoverId',
    dialogClassName: 'dialog-classname',
    content: content
  });
}).add('Alignment (Button)', function () {
  return getPopoverTooltipAlign({
    id: 'myPopoverId',
    isOpen: true,
    content: content,
    trigger: React.createElement(Button, {
      label: "Trigger Tooltip"
    })
  });
}).add('Alignment (span)', function () {
  return getPopoverTooltipAlign({
    id: 'myPopoverId',
    isOpen: true,
    content: content,
    trigger: React.createElement("span", {
      tabIndex: "0",
      key: "trigger"
    }, "Trigger Tooltip")
  });
}).add('Alignment (icon)', function () {
  return getPopoverTooltipAlign({
    id: 'myPopoverId',
    isOpen: true,
    content: React.createElement("span", null, content),
    // react/no-unescaped-entities
    trigger: React.createElement(Icon, {
      assistiveText: {
        label: 'Case Icon'
      },
      category: "standard",
      name: "case",
      size: "small",
      tabIndex: "0"
    })
  });
}).add('With Delay', function () {
  return React.createElement(WithDelay, null);
}).add('With Anchored Nubbin', function () {
  return React.createElement(AnchoredNubbin, null);
});
//# sourceMappingURL=storybook-stories.js.map