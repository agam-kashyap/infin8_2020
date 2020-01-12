/* eslint-disable react/jsx-no-literals */

/* eslint-disable react/prop-types */

/* eslint-disable react/display-name */
import React from 'react';
import Icon from '../../../components/icon';
var dropdownCollection = [{
  label: 'Main action',
  value: '0',
  leftIcon: {
    category: 'utility',
    name: 'add'
  },
  href: 'http://www.google.com'
}, {
  label: 'Menu Header',
  type: 'header',
  divider: 'top'
}, {
  label: 'Menu Item One',
  value: '1',
  href: 'http://www.google.com'
}, {
  label: 'Menu Item Two',
  value: '2',
  href: 'http://www.google.com'
}, {
  label: 'Menu Item Three',
  value: '3',
  href: 'http://www.google.com'
}];
var propSets = {
  base: {
    props: {},
    primaryRegionProps: {
      appLauncher: {
        assistiveText: {
          trigger: 'Open App Launcher'
        },
        id: 'app-launcher-trigger',
        triggerName: 'App Name'
      }
    }
  },
  hybrid: {
    props: {
      homeActive: false,
      openOn: 'hybrid'
    },
    primaryRegionProps: {
      appLauncher: {
        assistiveText: {
          trigger: 'Open App Launcher'
        },
        id: 'app-launcher-trigger',
        triggerName: 'App Name'
      }
    }
  },
  customCloud: {
    props: {
      cloud: 'marketing'
    },
    primaryRegionProps: {
      dividerPosition: 'right',
      truncate: false,
      appLauncher: {
        assistiveText: {
          trigger: 'Open App Launcher'
        },
        id: 'app-launcher-trigger',
        noTruncate: true,
        triggerName: React.createElement("div", {
          className: "slds-grid slds-grid_align-spread"
        }, React.createElement("div", null, "Marketing Cloud"), React.createElement("div", null, React.createElement(Icon, {
          category: "utility",
          className: "slds-m-left_small slds-m-right_small",
          name: "email",
          size: "x-small"
        }), React.createElement("span", {
          className: "context-bar__label-action slds-text-body_regular",
          style: {
            fontWeight: 'normal'
          }
        }, "Email Studio")))
      }
    }
  },
  lightTheme: {
    props: {
      theme: 'light'
    }
  },
  noNav: {
    props: {},
    primaryRegionProps: {
      appLauncher: {
        assistiveText: {
          trigger: 'Open App Launcher'
        },
        id: 'app-launcher-trigger',
        triggerName: 'App Name'
      }
    }
  }
};
export { dropdownCollection, propSets };
//# sourceMappingURL=index.js.map