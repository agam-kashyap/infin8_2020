import React from 'react';
import IconSettings from "../../../../components/icon-settings";
import Button from "../../../../components/button";
import ButtonGroup from "../../../../components/button-group";
import Popover from "../../../../components/popover"; // `~` is replaced with design-system-react at runtime

import Tooltip from "../../../../components/tooltip";
import BuilderHeader from "../../../../components/builder-header";
import BuilderHeaderNav from "../../../../components/builder-header/nav";
import BuilderHeaderNavLink from "../../../../components/builder-header/nav-link";
import BuilderHeaderNavDropdown from "../../../../components/builder-header/nav-dropdown";
import BuilderHeaderToolbar from "../../../../components/builder-header/toolbar";

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
      return React.createElement("div", null, React.createElement(Tooltip, {
        id: "status-tooltip",
        align: "bottom",
        content: "Last modified on June 1, 2018 by SysAdmin"
      }, React.createElement("button", {
        type: "button",
        className: "slds-button slds-color__text_gray-10 slds-align-middle slds-m-right_x-small"
      }, "Saved 45 mins ago")), React.createElement(Popover, {
        align: "top left",
        body: React.createElement("div", null, React.createElement("p", {
          className: "slds-p-bottom_x-small"
        }, "Pellentesque magna tellus, dapibus vitae placerat nec, viverra vel mi.", ' ', React.createElement("a", {
          href: "javascript:void(0);",
          title: "Learn More"
        }, "Learn More"))),
        heading: "Review warning",
        id: "popover-error",
        variant: "error"
      }, React.createElement(Button, {
        assistiveText: {
          icon: 'Error'
        },
        iconCategory: "utility",
        iconClassName: "slds-icon-text-error",
        iconName: "error",
        iconSize: "medium",
        iconVariant: "container",
        colorVariant: "error",
        variant: "icon"
      })), React.createElement(Button, {
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

Example.displayName = 'BuilderHeaderFailedSave';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=failed-save.js.map