function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import { BUILDER_HEADER, BUILDER_HEADER_NAV, BUILDER_HEADER_TOOLBAR, BUILDER_HEADER_MISC } from '../../utilities/constants';
var propTypes = {
  /**
   * **Assistive text for accessibility**
   * This object is merged with the default props object on every render.
   * * `backIcon`: Used for the back icon.
   * * `helpIcon`: Used for the help icon.
   * * `icon`: Used for the main icon next to the header title.
   * * _Tested with snapshot testing._
   */
  assistiveText: PropTypes.shape({
    backIcon: PropTypes.string,
    helpIcon: PropTypes.string,
    icon: PropTypes.string
  }),

  /**
   * Provide children of the types `<BuilderHeaderNav />` or `<BuilderHeaderToolbar />` to define the structure of the header.
   * ```
   * <BuilderHeader>
   *   <BuilderHeaderNav />
   *   <BuilderHeaderToolbar />
   * </BuilderHeader>
   * ```
   */
  children: PropTypes.node,

  /**
   * CSS classes to be added to tag with `.slds-builder-header_container`. Uses `classNames` [API](https://github.com/JedWatson/classnames). _Tested with snapshot testing._
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Event Callbacks
   * * `onClickBack`: Called when the Back link is clicked.
   * * `onClickHelp`: Called when the Help link is clicked.
   * _Tested with Mocha testing._
   */
  events: PropTypes.shape({
    onClickBack: PropTypes.func,
    onClickHelp: PropTypes.func
  }),

  /**
   * **Text labels for internationalization**
   * This object is merged with the default props object on every render.
   * * `back`: The label for the Back link.
   * * `help`: The label for the Help link.
   * * `pageType`: The label that describes the page type.
   * * `title`: The label for the page title.
   * _Tested with snapshot testing._
   */
  labels: PropTypes.shape({
    back: PropTypes.string,
    help: PropTypes.string,
    pageType: PropTypes.string,
    title: PropTypes.string
  }),

  /**
   * Custom styles applied to the `.slds-builder-header_container` element.
   */
  style: PropTypes.object
};
var defaultProps = {
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
  }
};
/**
 * Every builder needs a builder header, which contains basic navigation elements. It also shows the builder type and content name.
 */

var BuilderHeader = function BuilderHeader(props) {
  var assistiveText = _objectSpread({}, defaultProps.assistiveText, props.assistiveText);

  var events = _objectSpread({}, {}, props.events);

  var labels = _objectSpread({}, defaultProps.labels, props.labels);

  var nav;
  var toolbar;
  var misc = [];
  React.Children.forEach(props.children, function (child) {
    if (child) {
      switch (child.type.displayName) {
        case BUILDER_HEADER_NAV:
          nav = child;
          break;

        case BUILDER_HEADER_TOOLBAR:
          toolbar = child;
          break;

        case BUILDER_HEADER_MISC:
          // eslint-disable-next-line fp/no-mutating-methods
          misc.push(child);
          break;

        default:
      }
    }
  });
  return React.createElement("div", {
    style: {
      position: 'relative',
      height: '100px'
    }
  }, React.createElement("div", {
    className: classNames('slds-builder-header_container', props.className),
    style: props.style
  }, React.createElement("header", {
    className: "slds-builder-header"
  }, React.createElement("div", {
    className: "slds-builder-header__item"
  }, React.createElement("div", {
    className: "slds-builder-header__item-label slds-media slds-media_center"
  }, React.createElement("div", {
    className: "slds-media__figure"
  }, React.createElement(Icon, {
    assistiveText: {
      label: assistiveText.icon
    },
    category: "utility",
    containerClassName: "slds-icon_container slds-icon-utility-builder slds-current-color",
    name: "builder",
    size: "x-small"
  })), React.createElement("div", {
    className: "slds-media__body"
  }, labels.title))), nav, misc.length > 0 ? misc : React.createElement("div", {
    className: "slds-builder-header__item slds-has-flexi-truncate"
  }, React.createElement("h1", {
    className: "slds-builder-header__item-label"
  }, React.createElement("span", {
    className: "slds-truncate",
    title: labels.pageType
  }, labels.pageType))), React.createElement("div", {
    className: "slds-builder-header__item slds-builder-header__utilities"
  }, React.createElement("div", {
    className: "slds-builder-header__utilities-item"
  }, React.createElement("a", {
    href: "javascript:void(0);",
    className: "slds-builder-header__item-action slds-media slds-media_center",
    onClick: events.onClickBack
  }, React.createElement("div", {
    className: "slds-media__figure"
  }, React.createElement(Icon, {
    assistiveText: {
      label: assistiveText.backIcon
    },
    category: "utility",
    containerClassName: "slds-icon_container slds-icon-utility-settings slds-current-color",
    name: "back",
    size: "x-small"
  })), React.createElement("div", {
    className: "slds-media__body"
  }, labels.back))), React.createElement("div", {
    className: "slds-builder-header__utilities-item"
  }, React.createElement("a", {
    href: "javascript:void(0);",
    className: "slds-builder-header__item-action slds-media slds-media_center",
    onClick: events.onClickHelp
  }, React.createElement("div", {
    className: "slds-media__figure"
  }, React.createElement(Icon, {
    assistiveText: {
      label: assistiveText.helpIcon
    },
    category: "utility",
    containerClassName: "slds-icon_container slds-icon-utility-settings slds-current-color",
    name: "help",
    size: "x-small"
  })), React.createElement("div", {
    className: "slds-media__body"
  }, labels.help))))), toolbar));
};

BuilderHeader.displayName = BUILDER_HEADER;
BuilderHeader.propTypes = propTypes;
BuilderHeader.defaultProps = defaultProps;
export default BuilderHeader;
//# sourceMappingURL=index.js.map