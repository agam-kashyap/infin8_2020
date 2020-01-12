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

/* eslint-disable indent, jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PAGE_HEADER } from '../../../utilities/constants';
import Icon from '../../icon';
import IconSettings from '../../icon-settings';
import SLDSPageHeader from '../../page-header';
import SLDSPageHeaderControl from '../../page-header/control';
import SLDSButtonStateful from '../../button-stateful';
import SLDSButtonGroup from '../../button-group';
import SLDSButton from '../../button';
import SLDSMenuDropdown from '../../menu-dropdown';
import Tooltip from '../../tooltip';
import ObjectHome from '../__examples__/object-home';
import RecordHome from '../__examples__/record-home';
import RelatedList from '../__examples__/related-list';
import Setup from '../__examples__/setup';
var recordHomeDetails1 = [{
  label: 'Field 1',
  content: 'Description that demonstrates truncation with content. Description that demonstrates truncation with content.'
}, {
  label: 'Field 2',
  content: 'Multiple Values'
}, {
  label: 'Field 3',
  content: 'Description (2-line truncation)'
}];
var recordHomeDetails2 = [{
  label: 'Field 1',
  content: 'hi'
}, {
  label: 'Field 2',
  content: 'Multiple Values'
}, {
  label: 'Field 3',
  content: 'Description (2-line truncation)'
}];

var DemoPageHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DemoPageHeader, _React$Component);

  function DemoPageHeader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DemoPageHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DemoPageHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      recordHomeDetails: recordHomeDetails2
    });

    _defineProperty(_assertThisInitialized(_this), "changeDescription", function () {
      if (_this.state.recordHomeDetails[0].content === 'hi') {
        _this.setState({
          recordHomeDetails: recordHomeDetails1
        });
      } else {
        _this.setState({
          recordHomeDetails: recordHomeDetails2
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (selectedItem) {
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      action('select').apply(void 0, [selectedItem].concat(rest));

      _this.setState({
        currentSelected: _this.state.options.indexOf(selectedItem)
      });
    });

    return _this;
  }

  _createClass(DemoPageHeader, [{
    key: "render",
    value: function render() {
      var defaultProps = {
        icon: React.createElement(Icon, {
          assistiveText: {
            label: 'User'
          },
          category: "standard",
          name: "user"
        }),
        label: 'Record Type',
        title: 'Record Title',
        variant: 'record-home',
        details: this.state.recordHomeDetails
      };
      return React.createElement("div", null, React.createElement(SLDSButton, {
        onClick: this.changeDescription
      }, "Change Description"), React.createElement(SLDSPageHeader, defaultProps));
    }
  }]);

  return DemoPageHeader;
}(React.Component);

_defineProperty(DemoPageHeader, "displayName", 'DemoPageHeader');

var getPageHeader = function getPageHeader(props) {
  return React.createElement(SLDSPageHeader, props);
};

var recordHomeActions = function recordHomeActions() {
  return React.createElement(React.Fragment, null, React.createElement(SLDSPageHeaderControl, null, React.createElement(SLDSButtonStateful, {
    key: "PageHeaderFollowButton",
    disabled: false,
    iconSize: "medium",
    responsive: false,
    stateOne: {
      iconName: 'add',
      label: 'Follow'
    },
    stateTwo: {
      iconCategory: 'utility',
      iconName: 'check',
      label: 'Following'
    },
    stateThree: {
      iconCategory: 'utility',
      iconName: 'close',
      label: 'Unfollow'
    }
  })), React.createElement(SLDSPageHeaderControl, null, React.createElement(SLDSButtonGroup, {
    variant: "list",
    id: "button-group-1"
  }, React.createElement(SLDSButton, {
    label: "Edit"
  }), React.createElement(SLDSButton, {
    label: "Delete"
  }), React.createElement(SLDSButton, {
    label: "Clone"
  }), React.createElement(SLDSMenuDropdown, {
    assistiveText: {
      icon: 'More Options'
    },
    buttonVariant: "icon",
    iconCategory: "utility",
    iconName: "down",
    iconVariant: "border-filled",
    id: "page-header-dropdown-record-home-content-right",
    onSelect: action('select'),
    openOn: "click",
    align: "right",
    options: [{
      label: 'Disable',
      value: 'A0'
    }, {
      label: 'Promote',
      value: 'C0'
    }]
  }))));
};

var customTooltip = function customTooltip() {
  var content = 'here is a super long description that will truncate and the rest of it will show in the tooltip.';
  return React.createElement(Tooltip, {
    align: "top",
    content: content,
    id: "page-header-truncate-tooltip",
    triggerStyle: {
      display: 'inline'
    }
  }, React.createElement("p", {
    tabIndex: "0",
    className: "slds-truncate"
  }, content));
};

var recordHomeDetails = [{
  label: 'Field 1',
  content: 'Description that demonstrates truncation with content. Description that demonstrates truncation with content.'
}, {
  label: 'Field 2',
  content: 'Multiple Values'
}, {
  label: 'Field 3',
  content: customTooltip()
}, {
  label: 'Field 4',
  content: 'Description (2-line truncation)'
}];

var baseControls = function baseControls() {
  return React.createElement(React.Fragment, null, React.createElement(SLDSPageHeaderControl, null, React.createElement(SLDSButton, {
    iconCategory: "utility",
    iconName: "settings",
    variant: "icon",
    iconVariant: "more",
    assistiveText: {
      icon: 'Settings'
    }
  })), React.createElement(SLDSPageHeaderControl, null, React.createElement(SLDSButton, {
    iconCategory: "utility",
    iconName: "table",
    variant: "icon",
    iconVariant: "more",
    assistiveText: {
      icon: 'Table'
    }
  })), React.createElement(SLDSPageHeaderControl, null, React.createElement(SLDSButtonGroup, {
    variant: "list",
    id: "button-group-2"
  }, React.createElement(SLDSButton, {
    iconCategory: "utility",
    iconName: "chart",
    variant: "icon",
    iconVariant: "border-filled",
    assistiveText: {
      icon: 'Chart'
    }
  }), React.createElement(SLDSButton, {
    iconCategory: "utility",
    iconName: "filterList",
    variant: "icon",
    iconVariant: "border-filled",
    assistiveText: {
      icon: 'Filter List'
    }
  }), React.createElement(SLDSMenuDropdown, {
    assistiveText: {
      icon: 'Sort'
    },
    buttonVariant: "icon",
    iconCategory: "utility",
    iconName: "sort",
    iconVariant: "more",
    id: "page-header-dropdown-object-home-content-right",
    onSelect: action('select'),
    openOn: "click",
    align: "right",
    options: [{
      label: 'Last Name (ascending)',
      value: 'LNA'
    }, {
      label: 'Last Name (descending)',
      value: 'LND'
    }, {
      label: 'Last Contacted (descending)',
      value: 'LCD'
    }, {
      label: 'Last Contacted (ascending)',
      value: 'LCA'
    }]
  }))));
};

var relatedListActions = function relatedListActions() {
  return React.createElement(SLDSPageHeaderControl, null, React.createElement(SLDSButtonGroup, {
    variant: "list",
    id: "button-group-3"
  }, React.createElement(SLDSButton, {
    label: "Add Contact",
    variant: "neutral"
  }), React.createElement(SLDSMenuDropdown, {
    assistiveText: {
      icon: 'More Options'
    },
    buttonVariant: "icon",
    iconCategory: "utility",
    iconName: "down",
    iconVariant: "border-filled",
    id: "page-header-dropdown-related-list-nav-right",
    onSelect: action('select'),
    openOn: "click",
    align: "right",
    options: [{
      label: 'Refresh List',
      value: 'A0'
    }, {
      label: 'Duplicate Selected Leads',
      value: 'B0'
    }, {
      label: 'Disabled Selected Leads',
      value: 'C0'
    }]
  })));
};

var relatedListControls = function relatedListControls() {
  return React.createElement(React.Fragment, null, React.createElement(SLDSPageHeaderControl, null, React.createElement(SLDSButton, {
    iconCategory: "utility",
    iconName: "table",
    variant: "icon",
    iconVariant: "more",
    assistiveText: {
      icon: 'Table'
    }
  })), React.createElement(SLDSPageHeaderControl, null, React.createElement(SLDSButtonGroup, {
    variant: "list",
    id: "button-group-4"
  }, React.createElement(SLDSButton, {
    iconCategory: "utility",
    iconName: "chart",
    variant: "icon",
    iconVariant: "border-filled",
    assistiveText: {
      icon: 'Chart'
    }
  }), React.createElement(SLDSButton, {
    iconCategory: "utility",
    iconName: "filterList",
    variant: "icon",
    iconVariant: "border-filled",
    assistiveText: {
      icon: 'Filter List'
    }
  }), React.createElement(SLDSMenuDropdown, {
    assistiveText: {
      icon: 'Sort'
    },
    buttonVariant: "icon",
    iconCategory: "utility",
    iconName: "sort",
    iconVariant: "more",
    id: "page-header-dropdown-related-list-content-right",
    onSelect: action('select'),
    openOn: "click",
    align: "right",
    options: [{
      label: 'Last Name (ascending)',
      value: 'LNA'
    }, {
      label: 'Last Name (descending)',
      value: 'LND'
    }, {
      label: 'Last Contacted (descending)',
      value: 'LCD'
    }, {
      label: 'Last Contacted (ascending)',
      value: 'LCA'
    }]
  }))));
};

var relatedListTrail = [React.createElement("a", {
  href: "javascript:void(0);"
}, "Accounts"), React.createElement("a", {
  href: "javascript:void(0);"
}, "Company One")];
storiesOf(PAGE_HEADER, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Base', function () {
  return getPageHeader({
    icon: React.createElement(Icon, {
      assistiveText: {
        label: 'Opportunity'
      },
      category: "standard",
      name: "opportunity"
    }),
    info: 'Mark Jaeckal • Unlimited Customer • 11/13/15',
    title: 'Rohde Corp - 80,000 Widgets'
  });
}).add('Base with controls', function () {
  return getPageHeader({
    icon: React.createElement(Icon, {
      assistiveText: {
        label: 'Opportunity'
      },
      category: "standard",
      name: "opportunity"
    }),
    info: 'Mark Jaeckal • Unlimited Customer • 11/13/15',
    onRenderControls: baseControls,
    title: 'Rohde Corp - 80,000 Widgets'
  });
}).add('Record Home (truncates)', function () {
  return getPageHeader({
    details: recordHomeDetails,
    icon: React.createElement(Icon, {
      assistiveText: {
        label: 'Opportunity'
      },
      category: "standard",
      name: "opportunity"
    }),
    label: 'Opportunity',
    onRenderActions: recordHomeActions,
    title: 'Acme - 1,200 Widgets',
    variant: 'record-home'
  });
}).add('Record Home (field updates)', function () {
  return React.createElement(DemoPageHeader, null);
}).add('Object Home', function () {
  return React.createElement(ObjectHome, null);
}).add('Related List', function () {
  return getPageHeader({
    info: '10 items • sorted by name',
    onRenderActions: relatedListActions,
    onRenderControls: relatedListControls,
    title: 'Contacts (will truncate)',
    trail: relatedListTrail,
    variant: 'related-list'
  });
}).add('Docs site RecordHome', function () {
  return React.createElement(RecordHome, null);
}).add('Docs site RelatedList', function () {
  return React.createElement(RelatedList, null);
}).add('Setup', function () {
  return React.createElement(Setup, null);
});
//# sourceMappingURL=storybook-stories.js.map