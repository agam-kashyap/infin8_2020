function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Avatar from '../../avatar';
import Icon from '../../icon';
import Pill from '../../utilities/pill';
import isReactComponent from '../../../utilities/is-react-component';
var propTypes = {
  /*
   * The option object within the selection prop that should have focus.
   */
  activeOption: PropTypes.object,

  /*
   * The index of the option object within the selection prop that should have focus.
   */
  activeOptionIndex: PropTypes.number,

  /**
   * **Assistive text for accessibility**
   * This object is merged with the default props object on every render.
   * * `label`: This is used as a visually hidden label if, no `labels.label` is provided.
   * * `removePill`: Aids in keyboard interaction with Pills.
   * * `selectedListboxLabel`: Used to identify the listbox
   */
  assistiveText: PropTypes.shape({
    label: PropTypes.string,
    removePill: PropTypes.string,
    selectedListboxLabel: PropTypes.string
  }),

  /**
   * CSS classes to be added to the top-level `div` tag.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /*
   * Callbacks for various pill events such as click, focus, etc
   */
  events: PropTypes.shape({
    onClickPill: PropTypes.func.isRequired,
    onPillFocus: PropTypes.func.isRequired,
    onRequestFocus: PropTypes.func.isRequired,
    onRequestFocusOnNextPill: PropTypes.func.isRequired,
    onRequestFocusOnPreviousPill: PropTypes.func.isRequired,
    onRequestRemove: PropTypes.func.isRequired
  }),

  /**
   * HTML id for component main container
   */
  id: PropTypes.string,

  /**
   * Determines whether component renders as a bare pill container with associated styling for child pills
   */
  isBare: PropTypes.bool,

  /**
   * Adds inline (inside of input) styling
   */
  isInline: PropTypes.bool,

  /**
   * Determines whether component renders as a pill container with associated styling and behavior
   */
  isPillContainer: PropTypes.bool,

  /*
   * Pill Label
   */
  labels: PropTypes.shape({
    label: PropTypes.string,
    remove: PropTypes.string,
    title: PropTypes.string
  }),

  /**
   * Changes styles of the input. Currently `entity` is not supported.
   */
  renderAtSelectionLength: PropTypes.number,

  /**
   * This callback exposes the selected listbox reference / DOM node to parent components.
   */
  selectedListboxRef: PropTypes.func,

  /**
   * Accepts an array of item objects.
   */
  selection: PropTypes.array,

  /**
   * Custom styles to be passed to the top-level `div` tag
   */
  style: PropTypes.object,

  /**
   * Requests that the active option set focus on render
   */
  listboxHasFocus: PropTypes.bool,

  /**
   * Changes styles of the input. Currently `entity` is not supported.
   */
  variant: PropTypes.oneOf(['base', 'inline-listbox', 'readonly'])
};
var defaultProps = {
  renderAtSelectionLength: 1
};

var getAvatar = function getAvatar(option) {
  var avatarObject = option.avatar;
  var avatar = null;

  if (avatarObject) {
    if (isReactComponent(avatarObject) || avatarObject instanceof HTMLElement) {
      avatar = avatarObject;
    } else if (avatarObject.imgSrc) {
      avatar = React.createElement(Avatar, {
        imgSrc: avatarObject.imgSrc,
        title: avatarObject.title || option.label,
        variant: avatarObject.variant || 'user'
      });
    }
  }

  return avatar;
};

var getIcon = function getIcon(option) {
  var iconObject = option.icon;
  var icon = null;

  if (iconObject) {
    if (isReactComponent(iconObject) || iconObject instanceof HTMLElement) {
      icon = iconObject;
    } else if (iconObject.category && iconObject.name) {
      icon = React.createElement(Icon, {
        category: iconObject.category,
        name: iconObject.name,
        title: iconObject.title || option.label
      });
    }
  }

  return icon;
};

var SelectedListBox = function SelectedListBox(props) {
  return props.selection.length >= props.renderAtSelectionLength ? React.createElement("div", {
    // eslint-disable-line jsx-a11y/role-supports-aria-props
    className: classNames({
      'slds-pill_container': props.isPillContainer
    }, props.className) || undefined,
    id: props.id,
    ref: function ref(_ref) {
      if (props.selectedListboxRef) {
        props.selectedListboxRef(_ref);
      }
    },
    role: "listbox",
    style: props.style,
    "aria-orientation": "horizontal"
  }, React.createElement("ul", {
    className: classNames('slds-listbox', {
      'slds-listbox_inline': props.isInline,
      'slds-listbox_horizontal': !props.isInline,
      'slds-p-top_xxx-small': !props.isInline
    }),
    role: "group",
    "aria-label": props.assistiveText.selectedListboxLabel
  }, props.selection.map(function (option, renderIndex) {
    var hasTabIndex = renderIndex === props.activeOptionIndex;
    var icon = getIcon(option);
    var avatar = !icon ? getAvatar(option) : null;
    return React.createElement("li", {
      role: "presentation",
      className: "slds-listbox__item",
      key: "".concat(props.id, "-list-item-").concat(option.id)
    }, React.createElement(Pill, {
      active: hasTabIndex && props.listboxHasFocus,
      assistiveText: {
        remove: props.assistiveText.removePill
      },
      avatar: avatar,
      bare: option.bare || props.isBare,
      error: option.error,
      events: {
        onBlur: props.events.onBlurPill,
        onClick: function onClick(event, data) {
          props.events.onClickPill(event, _objectSpread({}, data, {
            index: renderIndex
          }));
        },
        onFocus: props.events.onPillFocus,
        onRequestFocusOnNextPill: props.events.onRequestFocusOnNextPill,
        onRequestFocusOnPreviousPill: props.events.onRequestFocusOnPreviousPill,
        onRequestRemove: function onRequestRemove(event, data) {
          props.events.onRequestRemove(event, _objectSpread({}, data, {
            index: renderIndex
          }));
        },
        onRequestFocus: props.events.onRequestFocus
      },
      eventData: {
        option: option
      },
      hasError: option.error,
      icon: icon,
      labels: {
        label: option.label,
        removeTitle: props.labels.removePillTitle
      },
      requestFocus: props.listboxHasFocus,
      tabIndex: hasTabIndex ? 0 : -1
    }));
  }))) : null;
};

SelectedListBox.displayName = 'SelectedListBox';
SelectedListBox.propTypes = propTypes;
SelectedListBox.defaultProps = defaultProps;
export default SelectedListBox;
//# sourceMappingURL=selected-listbox.js.map