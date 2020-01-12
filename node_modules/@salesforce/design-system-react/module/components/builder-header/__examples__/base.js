import React from 'react';
import IconSettings from '../../icon-settings';
import BuilderHeader from '../../builder-header';
import BuilderHeaderNav from '../../builder-header/nav';
import BuilderHeaderNavDropdown from '../../builder-header/nav-dropdown';
import BuilderHeaderNavLink from '../../builder-header/nav-link';

var Example = function Example(props) {
  return React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, React.createElement(BuilderHeader, {
    assistiveText: {
      icon: 'Builder',
      backIcon: 'Back',
      helpIcon: 'Help'
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
  }))));
};

Example.displayName = 'BuilderHeaderBase';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=base.js.map