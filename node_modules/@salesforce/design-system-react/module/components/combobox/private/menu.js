function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import classNames from 'classnames';
import Icon from '../../icon';
var propTypes = {
  /*
   * Active descendant in menu
   */
  activeOption: PropTypes.object,

  /*
   * Index of active descendant in menu
   */
  activeOptionIndex: PropTypes.number,

  /**
   * CSS classes to be added to container `div` tag. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * CSS classes to be added to tag with `.slds-dropdown`. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  classNameMenu: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * CSS classes to be added to menu sub header `span` tag. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  classNameMenuSubHeader: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Sets the dialog width to the width of one of the following:
   * `target`: (Menus attached to `input` typically follow this UX pattern),
   *  `menu`: Consider setting a menuMaxWidth if using this value. If not, width will be set to width of largest menu item.
   *  'none'
   */
  inheritWidthOf: PropTypes.oneOf(['target', 'menu', 'none']),

  /*
   * Id used for assistive technology
   */
  inputId: PropTypes.string,

  /**
   * Determines the height of the menu based on SLDS CSS classes.
   */
  itemVisibleLength: PropTypes.oneOf([5, 7, 10]),

  /**
   * **Text labels for internationalization**
   * This object is merged with the default props object on every render.
   * * `noOptionsFound`: Custom message that renders when no matches found. The default empty state is just text that says, 'No matches found.'.
   */
  labels: PropTypes.shape({
    noOptionsFound: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
  }),

  /**
   * Accepts a custom menu item rendering function that becomes a custom component and is passed in the following props:
   * * `assistiveText`: Object, `assistiveText` prop that is passed into Combobox
   * * `option`: Object, option data for item being rendered that is passed into Combobox
   * * `selected`: Boolean, allows rendering of `assistiveText.optionSelectedInMenu` in Readonly Combobox
   *
   * _Tested with snapshot testing._
   */
  onRenderMenuItem: PropTypes.func,

  /**
   * Accepts a ref function or object (React.createRef() or otherwise) to store the menu DOM reference once available
   */
  menuRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /*
   * Sets a maximum width that the menu will be if `inheritWidthOf` is menu.
   */
  maxWidth: PropTypes.string,

  /*
   * Callback when option is selected with keyboard or mouse
   */
  onSelect: PropTypes.func,

  /*
   * Menu options
   */
  options: PropTypes.array,

  /*
   * Callback to remove active descendent
   */
  resetActiveOption: PropTypes.func,

  /*
   * Selected options
   */
  selection: PropTypes.array,

  /*
   * Adds loading spinner below the options
   */
  hasMenuSpinner: PropTypes.bool,

  /*
   * Object for creating Add item below the options
   */
  optionsAddItem: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.node,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  })),

  /*
   * Object for creating Search item on top of the options
   */
  optionsSearchEntity: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.node,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  })),

  /**
   * Accepts a tooltip that is displayed when hovering on disabled menu items.
   */
  tooltipMenuItemDisabled: PropTypes.element,

  /**
   * Changes styles of the menu option
   */
  variant: PropTypes.oneOf(['icon-title-subtitle', 'checkbox']),
  isSelected: PropTypes.func,
  assistiveText: PropTypes.object
};
var defaultProps = {
  inputValue: '',
  menuRef: function menuRef() {},
  optionsAddItem: [],
  optionsSearchEntity: []
};

var getOptions = function getOptions(props) {
  // use of array.push() is OK, because the array is created on each render
  var options = [];

  if (props.optionsSearchEntity.length > 0) {
    var localOptionsSearchEntity = props.optionsSearchEntity.map(function (entity) {
      return _objectSpread({}, entity, {
        type: 'header'
      });
    }); // eslint-disable-next-line fp/no-mutating-methods

    options.push.apply(options, _toConsumableArray(localOptionsSearchEntity));
  } // eslint-disable-next-line fp/no-mutating-methods


  options.push.apply(options, _toConsumableArray(props.options));

  if (props.optionsAddItem.length > 0) {
    var localOptionsAddItem = props.optionsAddItem.map(function (entity) {
      return _objectSpread({}, entity, {
        type: 'footer'
      });
    }); // eslint-disable-next-line fp/no-mutating-methods

    options.push.apply(options, _toConsumableArray(localOptionsAddItem));
  }

  return options;
};

var setBold = function setBold(label, searchTerm) {
  if (!label || label.length === 0 || !searchTerm || searchTerm.length === 0) {
    return label;
  }

  var position = label.toLowerCase().indexOf(searchTerm.toLowerCase());

  if (position > -1) {
    return React.createElement(React.Fragment, null, label.substr(0, position), React.createElement("span", {
      key: "bold",
      className: "slds-text-title_bold"
    }, "".concat(label.substr(position, searchTerm.length))), label.substr(position + searchTerm.length));
  }

  return label;
};

var renderLabel = function renderLabel(labelProp, searchTerm) {
  if (labelProp == null || typeof labelProp === 'string') {
    return labelProp;
  }

  return labelProp(searchTerm);
};

var Menu = function Menu(props) {
  var maxWidth = props.inheritWidthOf === 'menu' ? 'inherit' : undefined;
  maxWidth = props.inheritWidthOf === 'menu' && props.maxWidth ? props.maxWidth : maxWidth; // .slds-dropdown sets the menu to absolute positioning, since it has a relative parent. Absolute positioning removes clientHeight and clientWidth which Popper.js needs to absolute position the menu's wrapping div. Absolute positioning an already absolute positioned element doesn't work. Setting the menu's position to relative allows PopperJS to work it's magic.

  var menuOptions = getOptions(props).map(function (optionData, index) {
    var active = index === props.activeOptionIndex && props.activeOption && isEqual(optionData.id, props.activeOption.id);
    var selected = props.isSelected({
      selection: props.selection,
      option: optionData
    }) && (optionData.type !== 'header' || optionData.type === 'footer');
    var MenuItem = props.onRenderMenuItem;

    if (optionData.type === 'separator') {
      return optionData.label ? React.createElement("li", {
        className: "slds-dropdown__header slds-truncate",
        title: optionData.label,
        role: "separator",
        key: "menu-separator-".concat(optionData.id)
      }, React.createElement("span", {
        className: classNames('slds-listbox__option-header', props.classNameMenuSubHeader)
      }, optionData.label)) : React.createElement("li", {
        className: "slds-has-divider_top-space",
        role: "separator",
        key: "menu-separator-".concat(optionData.id)
      });
    }

    if (optionData.type === 'header') {
      return React.createElement("li", {
        key: "menu-header-".concat(optionData.id, "}"),
        role: "presentation",
        className: "slds-listbox__item"
      }, React.createElement("div", {
        onClick: optionData.disabled ? null : function (event) {
          props.onSelect(event, {
            option: optionData
          });
        },
        "aria-selected": active,
        id: "".concat(props.inputId, "-listbox-option-").concat(optionData.id),
        className: classNames('slds-media slds-listbox__option', 'slds-listbox__option_entity slds-listbox__option_term', {
          'slds-has-focus': active
        }),
        role: "option"
      }, React.createElement("span", {
        className: "slds-media__figure slds-listbox__option-icon"
      }, optionData.icon), React.createElement("span", {
        className: "slds-media__body"
      }, renderLabel(optionData.label, props.inputValue))));
    }

    if (optionData.type === 'footer') {
      return React.createElement("li", {
        key: "menu-footer-".concat(optionData.id, "}"),
        role: "presentation",
        className: "slds-listbox__item"
      }, React.createElement("div", {
        "aria-selected": active,
        onClick: optionData.disabled ? null : function (event) {
          props.onSelect(event, {
            option: optionData
          });
        },
        id: "".concat(props.inputId, "-listbox-option-").concat(optionData.id),
        className: classNames('slds-media slds-listbox__option', 'slds-listbox__option_entity slds-listbox__option_term', {
          'slds-has-focus': active
        }),
        role: "option"
      }, React.createElement("span", {
        className: "slds-media__figure slds-listbox__option-icon"
      }, optionData.icon), React.createElement("span", {
        className: "slds-media__body"
      }, renderLabel(optionData.label, props.inputValue))));
    }

    var disabledProps = {};
    var tooltipId = "".concat(props.inputId, "-listbox-option-help-").concat(optionData.id);

    if (optionData.disabled && props.tooltipMenuItemDisabled && active) {
      disabledProps['aria-describedby'] = tooltipId;
    }

    if (optionData.disabled) {
      disabledProps['aria-disabled'] = !!optionData.disabled;
      disabledProps.style = {
        cursor: 'default'
      }; // Replace this with a css class name once SLDS has it.
    }

    var menuItem = {
      'icon-title-subtitle': React.createElement("span", _extends({
        "aria-selected": active
      }, disabledProps, {
        id: "".concat(props.inputId, "-listbox-option-").concat(optionData.id),
        key: "menu-subtitle-".concat(optionData.id),
        className: classNames('slds-media slds-listbox__option', 'slds-listbox__option_entity slds-listbox__option_has-meta', {
          'slds-has-focus': active
        }),
        onClick: optionData.disabled ? null : function (event) {
          props.onSelect(event, {
            option: optionData
          });
        },
        role: "option"
      }), optionData.icon && !props.onRenderMenuItem ? React.createElement("span", {
        className: "slds-media__figure"
      }, optionData.icon) : null, props.onRenderMenuItem ? React.createElement(MenuItem, {
        assistiveText: props.assistiveText,
        selected: selected,
        option: optionData
      }) : React.createElement("span", {
        className: "slds-media__body"
      }, React.createElement("span", {
        className: classNames('slds-listbox__option-text', 'slds-listbox__option-text_entity', {
          'slds-disabled-text': optionData.disabled
        })
      }, setBold(optionData.label, props.inputValue)), React.createElement("span", {
        className: classNames('slds-listbox__option-meta slds-listbox__option-meta_entity', {
          'slds-disabled-text': optionData.disabled
        })
      }, optionData.subTitle))),
      checkbox: React.createElement("span", _extends({
        // eslint-disable-line jsx-a11y/no-static-element-interactions
        "aria-selected": active
      }, disabledProps, {
        id: "".concat(props.inputId, "-listbox-option-").concat(optionData.id),
        key: "menu-checkbox-".concat(optionData.id),
        className: classNames('slds-media slds-listbox__option', ' slds-listbox__option_plain slds-media_small slds-media_center', {
          'slds-has-focus': active,
          'slds-is-selected': selected
        }),
        onClick: optionData.disabled ? null : function (event) {
          props.onSelect(event, {
            selection: props.selection,
            option: optionData
          });
        },
        role: "option"
      }), React.createElement("span", {
        className: "slds-media__figure"
      }, React.createElement(Icon, {
        className: "slds-listbox__icon-selected",
        category: "utility",
        name: "check",
        size: "x-small"
      })), React.createElement("span", {
        className: "slds-media__body"
      }, props.onRenderMenuItem ? React.createElement(MenuItem, {
        assistiveText: props.assistiveText,
        selected: selected,
        option: optionData
      }) : React.createElement("span", {
        className: classNames('slds-truncate', {
          'slds-disabled-text': optionData.disabled
        }),
        title: optionData.label
      }, selected ? React.createElement("span", {
        className: "slds-assistive-text"
      }, props.assistiveText.optionSelectedInMenu) : null, ' ', optionData.label)))
    };
    var item;

    if (optionData.disabled && props.tooltipMenuItemDisabled) {
      var _props$tooltipMenuIte = props.tooltipMenuItemDisabled.props,
          content = _props$tooltipMenuIte.content,
          userDefinedTooltipProps = _objectWithoutProperties(_props$tooltipMenuIte, ["content"]);

      var tooltipProps = _objectSpread({
        align: 'top',
        content: optionData.tooltipContent || content,
        // either use specific content defined on option or content defined on tooltip component.
        id: tooltipId,
        position: 'absolute',
        silenceTriggerTabbableWarning: true,
        triggerStyle: {
          width: '100%'
        }
      }, userDefinedTooltipProps);

      if (active) {
        // allows showing the tooltip on keyboard navigation to disabled menu item
        tooltipProps.isOpen = true;
      }

      item = React.cloneElement(props.tooltipMenuItemDisabled, tooltipProps, menuItem[props.variant]);
    } else {
      item = menuItem[props.variant];
    }

    return React.createElement("li", {
      className: "slds-listbox__item",
      key: "menu-option-".concat(optionData.id),
      role: "presentation"
    }, item);
  });
  return React.createElement("ul", {
    className: classNames('slds-listbox slds-listbox_vertical slds-dropdown slds-dropdown_fluid', {
      'slds-dropdown_length-with-icon-5': props.itemVisibleLength === 5,
      'slds-dropdown_length-with-icon-7': props.itemVisibleLength === 7,
      'slds-dropdown_length-with-icon-10': props.itemVisibleLength === 10
    }, props.classNameMenu),
    ref: props.menuRef,
    role: "presentation",
    style: {
      width: props.inheritWidthOf === 'menu' ? 'auto' : undefined,
      maxWidth: maxWidth,
      position: props.menuPosition !== 'relative' ? 'relative' : undefined
    }
  }, menuOptions.length ? menuOptions : React.createElement("li", {
    className: "slds-listbox__item slds-listbox__status",
    role: "status",
    "aria-live": "polite"
  }, React.createElement("span", {
    className: "slds-m-left_x-large slds-p-vertical_medium"
  }, props.labels.noOptionsFound)), props.hasMenuSpinner && React.createElement("li", {
    role: "presentation",
    className: "slds-listbox__item"
  }, React.createElement("div", {
    className: "slds-align_absolute-center slds-p-top_medium"
  }, React.createElement("div", {
    role: "status",
    className: "slds-spinner slds-spinner_x-small slds-spinner_inline"
  }, React.createElement("span", {
    className: "slds-assistive-text"
  }, props.assistiveText.loadingMenuItems), React.createElement("div", {
    className: "slds-spinner__dot-a"
  }), React.createElement("div", {
    className: "slds-spinner__dot-b"
  })))));
};

Menu.displayName = 'Menu';
Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
export default Menu;
//# sourceMappingURL=menu.js.map