function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable indent */

/* eslint-disable react/display-name */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconSettings from '../../icon-settings';
import { MENU_DROPDOWN } from '../../../utilities/constants';
import Dropdown from '../../menu-dropdown';
import { DropdownNubbinPositions } from '../../menu-dropdown/menu-dropdown';
import DropdownWithTooltips from '../__examples__/with-tooltips';
import List from '../../utilities/menu-list';
import Button from '../../button';
import Trigger from '../../menu-dropdown/button-trigger'; // eslint-disable-next-line camelcase

import UNSAFE_DirectionSettings from '../../utilities/UNSAFE_direction';
var options = [{
  className: 'custom-li-class',
  divider: 'bottom',
  label: 'A Header',
  type: 'header'
}, {
  disabled: true,
  label: 'An option that is Super Super Long',
  value: 'A0'
}, {
  label: 'Custom Class',
  className: 'custom-item-class',
  value: 'classssss'
}, {
  href: 'http://sfdc.co/',
  id: 'custom-li-id',
  label: 'Has a value',
  leftIcon: {
    name: 'settings',
    category: 'utility'
  },
  rightIcon: {
    name: 'settings',
    category: 'utility'
  },
  type: 'item',
  value: 'B0'
}, {
  type: 'divider'
}, {
  label: 'C Option',
  value: 'C0'
}, {
  label: 'D Option',
  value: 'D0'
}, {
  label: 'E Option',
  value: 'E0'
}, {
  label: 'A1 Option',
  value: 'A1'
}, {
  label: 'B2 Option',
  value: 'B1'
}, {
  label: 'C2 Option',
  value: 'C1'
}, {
  label: 'D2 Option',
  value: 'D1'
}, {
  label: 'E2 Option Super Super Long',
  value: 'E1'
}];

var getDropdown = function getDropdown(props) {
  return React.createElement(Dropdown, _extends({}, props, {
    onClose: action('Closed'),
    onOpen: action('Opened')
  }));
};

var makeRtl = function makeRtl(component) {
  return (// eslint-disable-next-line
    React.createElement(UNSAFE_DirectionSettings.Provider, {
      value: "rtl"
    }, React.createElement("div", {
      dir: "rtl"
    }, component))
  );
};

var DropdownControlled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownControlled, _React$Component);

  function DropdownControlled() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownControlled);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownControlled)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      forcedState: undefined,
      menuOptions: options
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonClickReset", function () {
      _this.setState({
        forcedState: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpen", function () {
      action('Force Open').apply(void 0, arguments);

      _this.setState({
        forcedState: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      action('Force Closed').apply(void 0, arguments);

      _this.setState({
        forcedState: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleDisabledOption", function () {
      _this.setState(function (prevState, props) {
        prevState.menuOptions.splice(1, 1, {
          disabled: false,
          label: 'An option that is Super Super Long',
          value: 'A0'
        });
        return {
          options: prevState.menuOptions
        };
      });
    });

    return _this;
  }

  _createClass(DropdownControlled, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "slds-grid"
      }, React.createElement("div", {
        className: "slds-col"
      }, React.createElement(Dropdown, _extends({}, this.props, {
        modal: false,
        isOpen: this.state.forcedState,
        onClose: action('Attempt Close'),
        onOpen: action('Attempt Open'),
        options: this.state.menuOptions
      }))), React.createElement("div", {
        className: "slds-col"
      }, React.createElement(Button, {
        label: "Force Open Dropdown",
        onClick: this.handleOpen
      }), React.createElement(Button, {
        label: "Force Close Dropdown",
        onClick: this.handleClose
      }), React.createElement(Button, {
        label: "Reset Dropdown",
        onClick: this.handleButtonClickReset
      }), React.createElement(Button, {
        label: "Toggle Option A disabled",
        onClick: this.toggleDisabledOption
      })));
    }
  }]);

  return DropdownControlled;
}(React.Component);

_defineProperty(DropdownControlled, "displayName", 'DropdownControlled');

var getDropdownPositioned = function getDropdownPositioned(props) {
  var positionedDropdowns = [];
  DropdownNubbinPositions.forEach(function (position) {
    positionedDropdowns.push(React.createElement("div", {
      className: "slds-col slds-size_1-of-3",
      key: "positioned-dropdown-".concat(position.replace(' ', '')),
      style: {
        minHeight: '500px'
      },
      "data-ignore-axe-duplicate-id": true
    }, React.createElement(Dropdown, _extends({}, props, {
      isOpen: true,
      nubbinPosition: position,
      onClose: action('Closed'),
      onOpen: action('Opened')
    }), React.createElement(Trigger, null, React.createElement(Button, {
      iconVariant: "container",
      iconCategory: "utility",
      iconName: "settings",
      label: position
    })))));
  });
  return React.createElement("div", null, React.createElement("div", {
    className: "slds-grid slds-wrap"
  }, positionedDropdowns), React.createElement("div", {
    className: "slds-col",
    style: {
      minHeight: '500px'
    }
  }, React.createElement(Dropdown, _extends({}, props, {
    nubbinPosition: "top right",
    onClose: action('Closed'),
    onOpen: action('Opened')
  }), React.createElement(Trigger, null, React.createElement(Button, {
    iconVariant: "container",
    iconCategory: "utility",
    iconName: "settings",
    assistiveText: {
      icon: 'top right'
    }
  })))));
};

var getDropdownCustomTrigger = function getDropdownCustomTrigger(props) {
  return React.createElement(Dropdown, _extends({}, props, {
    onClose: action('Closed'),
    onOpen: action('Opened')
  }), React.createElement(Trigger, null, React.createElement(Button, {
    assistiveText: {
      icon: props.assistiveText.icon
    },
    iconCategory: "utility",
    iconName: "settings"
  })));
};
/* eslint-disable react/prop-types */

/* eslint-disable no-script-url */


var DropdownCustomContent = function DropdownCustomContent(props) {
  return React.createElement("div", {
    id: "custom-dropdown-menu-content"
  }, React.createElement("div", {
    className: "slds-m-around_medium"
  }, React.createElement("div", {
    className: "slds-tile slds-tile_board slds-m-horizontal_small"
  }, React.createElement("p", {
    className: "tile__title slds-text-heading_small"
  }, "Art Vandelay"), React.createElement("div", {
    className: "slds-tile__detail"
  }, React.createElement("p", {
    className: "slds-truncate"
  }, React.createElement("a", {
    className: "slds-m-right_medium",
    href: "javascript:void(0)",
    onClick: props.onClick
  }, "Settings"), React.createElement("a", {
    href: "javascript:void(0)",
    onClick: props.onClick
  }, "Log Out"))))));
};

var getDropdownCustomContent = function getDropdownCustomContent(props) {
  return React.createElement(Dropdown, _extends({}, props, {
    onClose: action('Closed'),
    onOpen: action('Opened')
  }), React.createElement(DropdownCustomContent, null), React.createElement(List, {
    options: [{
      label: 'Custom Content Option'
    }].concat(options)
  }));
};

storiesOf(MENU_DROPDOWN, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium slds-text-align_center"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return getDropdown({
    align: 'right',
    id: 'base',
    label: 'Dropdown Click',
    onClick: function onClick() {
      action('Clicked').apply(void 0, arguments);
    },
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  });
}).add('Base center-aligned', function () {
  return getDropdown({
    align: 'center',
    id: 'base-center',
    label: 'Dropdown Click',
    onClick: function onClick() {
      action('Clicked').apply(void 0, arguments);
    },
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  });
}).add('Base with icon, dropdown right-aligned', function () {
  return getDropdown({
    align: 'right',
    id: 'right-align-with-icon',
    label: 'Dropdown Click',
    iconCategory: 'utility',
    iconName: 'down',
    iconPosition: 'right',
    onClick: function onClick() {
      action('Clicked').apply(void 0, arguments);
    },
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  });
}).add('Base with icon, dropdown right-aligned, right-to-left', function () {
  return makeRtl(getDropdown({
    align: 'right',
    label: 'Dropdown Click',
    iconCategory: 'utility',
    iconName: 'down',
    iconPosition: 'right',
    id: 'right-align-with-icon-rtl',
    onClick: function onClick() {
      action('Clicked').apply(void 0, arguments);
    },
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  }));
}).add('Base with icon, dropdown left-aligned', function () {
  return getDropdown({
    align: 'left',
    label: 'Dropdown Click',
    iconCategory: 'utility',
    iconName: 'down',
    iconPosition: 'right',
    id: 'left-align-with-icon',
    onClick: function onClick() {
      action('Clicked').apply(void 0, arguments);
    },
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  });
}).add('Base with icon, dropdown left-aligned, right-to-left', function () {
  return makeRtl(getDropdown({
    align: 'left',
    label: 'Dropdown Click',
    iconCategory: 'utility',
    iconName: 'down',
    iconPosition: 'right',
    id: 'left-align-with-icon-rtl',
    onClick: function onClick() {
      action('Clicked').apply(void 0, arguments);
    },
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  }));
}).add('Render inline', function () {
  return getDropdown({
    align: 'right',
    id: 'render-inline',
    label: 'Dropdown Click',
    menuPosition: 'relative',
    onClick: function onClick() {
      action('Clicked').apply(void 0, arguments);
    },
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  });
}).add('Render inline w/ Nubbins', function () {
  return getDropdownPositioned({
    id: 'render-inline-nubbins',
    menuPosition: 'relative',
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  });
}).add('Render inline w/ Nubbins, right-to-left', function () {
  return makeRtl(getDropdownPositioned({
    id: 'render-inline-nubbins-rtl',
    menuPosition: 'relative',
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  }));
}).add('Custom Trigger', function () {
  return getDropdownCustomTrigger({
    id: 'custom-trigger',
    tabIndex: '-1',
    assistiveText: {
      icon: 'Custom Dropdown Trigger'
    },
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  });
}).add('Custom Content', function () {
  return getDropdownCustomContent({
    id: 'custom-content',
    label: 'Custom Content Dropdown Click',
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options
  });
}).add('Hover', function () {
  return getDropdown({
    assistiveText: {
      icon: 'Icon More large'
    },
    buttonVariant: 'icon',
    iconCategory: 'utility',
    iconName: 'settings',
    iconVariant: 'more',
    id: 'hover',
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    openOn: 'hover',
    options: options
  });
}).add('Two Hovers', function () {
  return React.createElement("div", null, getDropdown({
    assistiveText: {
      icon: 'Icon More large'
    },
    buttonVariant: 'icon',
    iconCategory: 'utility',
    iconName: 'settings',
    iconVariant: 'more',
    id: 'hover-1',
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    openOn: 'hover',
    options: options
  }), ' ', getDropdown({
    assistiveText: {
      icon: 'Icon More large'
    },
    buttonVariant: 'icon',
    iconCategory: 'utility',
    iconName: 'settings',
    iconVariant: 'more',
    id: 'hover-2',
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    openOn: 'hover',
    options: options
  }));
}).add('Checkmark', function () {
  return getDropdown({
    assistiveText: {
      icon: 'More Options'
    },
    buttonVariant: 'icon',
    checkmark: true,
    iconCategory: 'utility',
    iconName: 'down',
    iconVariant: 'border-filled',
    id: 'checkmark',
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options,
    value: 'C0'
  });
}).add('Checkmark, right-to-left', function () {
  return makeRtl(getDropdown({
    assistiveText: {
      icon: 'More Options'
    },
    buttonVariant: 'icon',
    checkmark: true,
    iconCategory: 'utility',
    iconName: 'down',
    iconVariant: 'border-filled',
    id: 'checkmark-rtl',
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    options: options,
    value: 'C0'
  }));
}).add('Hover with Checkmark', function () {
  return getDropdown({
    assistiveText: {
      icon: 'More Options'
    },
    buttonVariant: 'icon',
    checkmark: true,
    iconCategory: 'utility',
    iconName: 'down',
    iconVariant: 'border-filled',
    id: 'hover-with-checkmark',
    onMouseEnter: action('Mouse enter'),
    onMouseLeave: action('Mouse leave'),
    onSelect: function onSelect() {
      action('Selected').apply(void 0, arguments);
    },
    openOn: 'hover',
    options: options,
    value: 'C0'
  });
}).add('Controlled w/ isOpen', function () {
  return React.createElement(DropdownControlled, {
    align: "right",
    id: "controlled-is-open",
    label: "Dropdown Click",
    options: options
  });
}).add('With tooltips', function () {
  return React.createElement(DropdownWithTooltips, null);
}).add('With tooltips (open)', function () {
  return React.createElement(DropdownWithTooltips, {
    isOpenAllTooltips: true
  });
});
//# sourceMappingURL=storybook-stories.js.map