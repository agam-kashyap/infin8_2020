import React from 'react';
import IconSettings from '../../icon-settings';
import Button from '../../button';
import ButtonGroup from '../../button-group';
import Icon from '../../icon';
import BuilderHeader from '..';
import BuilderHeaderNav from '../nav';
import BuilderHeaderNavLink from '../nav-link';
import BuilderHeaderNavDropdown from '../nav-dropdown';
import BuilderHeaderToolbar from '../toolbar';

var Example = function Example(props) {
  return React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, React.createElement(BuilderHeader, {
    assistiveText: {
      backIcon: 'Back',
      helpIcon: 'Help',
      icon: 'Builder'
    },
    labels: {
      back: 'Back',
      help: 'Help',
      pageType: 'Page Type',
      title: 'App Name'
    },
    style: {
      position: 'relative'
    }
  }, React.createElement(BuilderHeaderNav, null, React.createElement(BuilderHeaderNavLink, {
    assistiveText: {
      label: 'Link'
    },
    iconCategory: "utility",
    iconName: "settings",
    label: "Link"
  }), React.createElement(BuilderHeaderNavDropdown, {
    assistiveText: {
      icon: 'Dropdown'
    },
    iconCategory: "utility",
    iconName: "page",
    id: "dropdown",
    label: "Dropdown",
    options: [{
      label: 'Menu Item One',
      value: 'A0'
    }, {
      label: 'Menu Item Two',
      value: 'B0'
    }]
  })), React.createElement(BuilderHeaderToolbar, {
    assistiveText: {
      actions: 'Document Actions'
    },
    onRenderActions: function onRenderActions() {
      return React.createElement("div", null, React.createElement(Icon, {
        category: "utility",
        className: "slds-m-right_x-small",
        name: "check",
        size: "x-small",
        style: {
          fill: '#4BCA81'
        }
      }), React.createElement("span", {
        className: "slds-color__text_gray-10 slds-align-middle slds-m-right_small"
      }, "Saved"), React.createElement(Button, {
        iconCategory: "utility",
        iconName: "right",
        iconPosition: "left",
        label: "Run"
      }), React.createElement(Button, {
        label: "Save As"
      }), React.createElement(Button, {
        label: "Save",
        variant: "brand"
      }));
    }
  }, React.createElement(ButtonGroup, {
    label: "Canvas Actions",
    id: "button-group-canvas-actions"
  }, React.createElement(Button, {
    assistiveText: {
      icon: 'Undo'
    },
    iconCategory: "utility",
    iconName: "undo",
    iconVariant: "border",
    variant: "icon"
  }), React.createElement(Button, {
    assistiveText: {
      icon: 'Redo'
    },
    iconCategory: "utility",
    iconName: "redo",
    iconVariant: "border",
    variant: "icon"
  })), React.createElement(ButtonGroup, {
    label: "Edit Actions",
    id: "button-group-edit-actions"
  }, React.createElement(Button, {
    assistiveText: {
      icon: 'Cut'
    },
    iconCategory: "utility",
    iconName: "cut",
    iconVariant: "border",
    variant: "icon"
  }), React.createElement(Button, {
    assistiveText: {
      icon: 'Copy'
    },
    iconCategory: "utility",
    iconName: "copy",
    iconVariant: "border",
    variant: "icon"
  }), React.createElement(Button, {
    assistiveText: {
      icon: 'Paste'
    },
    iconCategory: "utility",
    iconName: "paste",
    iconVariant: "border",
    variant: "icon"
  })))));
};

Example.displayName = 'BuilderHeaderSuccessfulSave';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=successful-save.js.map