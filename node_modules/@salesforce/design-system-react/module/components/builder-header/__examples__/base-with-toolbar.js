import React from 'react';
import IconSettings from '../../icon-settings';
import Button from '../../button';
import ButtonGroup from '../../button-group';
import BuilderHeader from '../../builder-header';
import BuilderHeaderNav from '../../builder-header/nav';
import BuilderHeaderNavLink from '../../builder-header/nav-link';
import BuilderHeaderNavDropdown from '../../builder-header/nav-dropdown';
import BuilderHeaderToolbar from '../../builder-header/toolbar';

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
      return React.createElement("div", null, React.createElement(Button, {
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

Example.displayName = 'BuilderHeaderBaseWithToolbar';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=base-with-toolbar.js.map