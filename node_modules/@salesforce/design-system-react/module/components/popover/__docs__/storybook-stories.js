function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/display-name */

/* eslint-disable no-script-url */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconSettings from '../../icon-settings';
import { POPOVER } from '../../../utilities/constants';
import CustomTarget from '../__examples__/custom-target';
import Header from '../__examples__/header';
import Error from '../__examples__/error';
import Feature from '../__examples__/feature';
import Walkthrough from '../__examples__/walkthrough';
import EditDialog from '../__examples__/edit-dialog';
import WalkthroughAction from '../__examples__/walkthrough-action';
import Warning from '../__examples__/warning';
import AlternativeHeader from '../__examples__/alternative-header';
import ControlledWithFooter from '../__examples__/controlled-with-footer';
import Popover from '../../popover';
import Button from '../../button';

var getPopover = function getPopover(props) {
  return React.createElement("div", null, React.createElement(Popover, props, React.createElement(Button, {
    label: "Trigger Popover"
  })));
};

var getPopoverNubbins = function getPopoverNubbins(props) {
  /* eslint-disable react/prop-types */
  var children = [];
  var align = ['top', 'top right', 'top left', 'right', 'right top', 'right bottom', 'bottom', 'bottom left', 'bottom right', 'left', 'left top', 'left bottom'];
  align.forEach(function (value) {
    children.push(React.createElement("div", {
      key: value,
      style: {
        margin: '150px auto'
      }
    }, React.createElement(Popover, _extends({
      align: value,
      assistiveText: {
        closeButton: 'This is a popover.'
      },
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      hasStaticAlignment: true,
      heading: "My Popover",
      id: value,
      isOpen: true,
      position: "overflowBoundaryElement"
    }, props), props.trigger)));
  });
  return React.createElement("div", {
    key: "container",
    "data-ignore-axe-duplicate-id-active": true
  }, children);
};

var bodyContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
var popoverBackgroundColor = 'rgb(255, 80, 121)';
var containerBackgroundColor = 'rgb(255, 127, 80)';
storiesOf(POPOVER, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium slds-m-horizontal_x-large",
    style: {
      margin: '300px auto',
      width: '500px'
    }
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Header', function () {
  return React.createElement(Header, null);
}).add('Controlled w/ Footer', function () {
  return React.createElement(ControlledWithFooter, {
    log: action
  });
}).add('AlternativeHeader', function () {
  return React.createElement(AlternativeHeader, null);
}).add('Alignment (Button)', function () {
  return getPopoverNubbins({
    trigger: React.createElement(Button, {
      label: "Trigger Popover",
      tabIndex: "0"
    })
  });
}).add('Alignment (ButtonIcon)', function () {
  return getPopoverNubbins({
    body: bodyContent,
    hasStaticAlignment: true,
    heading: 'My Popover',
    id: 'myPopoverId',
    isOpen: true,
    trigger: React.createElement(Button, {
      assistiveText: {
        icon: 'Case Icon'
      },
      iconCategory: "utility",
      iconName: "filter",
      iconSize: "small",
      iconVariant: "border",
      variant: "icon"
    })
  });
}).add('Custom Target', function () {
  return React.createElement(CustomTarget, null);
}).add('Custom Target - Open', function () {
  return React.createElement(CustomTarget, {
    isOpen: true
  });
}).add('Styling (dev-only)', function () {
  return getPopover({
    body: bodyContent,
    heading: 'My Popover',
    id: 'myPopoverId',
    isOpen: true,
    className: 'sample-classname',
    assistiveText: {
      closeButton: 'Shut it now!'
    },
    containerClassName: 'sample-container-classname',
    containerStyle: {
      background: containerBackgroundColor
    },
    style: {
      background: popoverBackgroundColor
    }
  });
}).add('Error', function () {
  return React.createElement(Error, null);
}).add('Error - Open', function () {
  return React.createElement(Error, {
    isOpen: true
  });
}).add('Feature', function () {
  return React.createElement(Feature, {
    action: action
  });
}).add('Feature - Open', function () {
  return React.createElement(Feature, {
    action: action,
    isOpen: true
  });
}).add('Warning', function () {
  return React.createElement(Warning, null);
}).add('Warning  - Open', function () {
  return React.createElement(Warning, {
    isOpen: true
  });
}).add('Walkthrough', function () {
  return React.createElement(Walkthrough, {
    action: action
  });
}).add('Walkthrough - Open', function () {
  return React.createElement(Walkthrough, {
    action: action,
    isOpen: true
  });
}).add('Walkthrough Action', function () {
  return React.createElement(WalkthroughAction, null);
}).add('Walkthrough Action - Open', function () {
  return React.createElement(WalkthroughAction, {
    isOpen: true
  });
}).add('Edit Dialog', function () {
  return React.createElement(EditDialog, null);
}).add('Edit Dialog  - Open', function () {
  return React.createElement(EditDialog, {
    isOpen: true
  });
});
//# sourceMappingURL=storybook-stories.js.map