function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable max-lines */

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Popover Component
// Implements the [Popover design pattern](https://www.lightningdesignsystem.com/components/popovers) in React.
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// This project uses `classnames`, "a simple javascript utility for conditionally
// joining classNames together."

import classNames from 'classnames'; // ### isFunction

import isFunction from 'lodash.isfunction'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid'; // This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)

import checkProps from './check-props';
import componentDoc from './component.json';
import Button from '../button';
import MediaObject from '../media-object';
import Icon from '../icon'; // ### Children

import Dialog from '../utilities/dialog'; // #### KeyboardNavigable

import keyboardNavigableDialog from '../../utilities/keyboard-navigable-dialog';
import KEYS from '../../utilities/key-code';
import { POPOVER } from '../../utilities/constants';
var documentDefined = typeof document !== 'undefined'; // The overlay is an optional way to allow the popover to close on outside
// clicks even when those clicks are over areas that wouldn't normally fire
// click or touch events (for example, iframes). A single overlay is shared
// between all popovers in the app.

var overlay = documentDefined ? document.createElement('span') : {
  style: {}
};
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.position = 'absolute';
var currentOpenPopover; // FIXME - what is this exported for? Probably needs to be deprecated.

var PopoverNubbinPositions = ['top left', 'top', 'top right', 'bottom left', 'bottom', 'bottom right'];
var defaultProps = {
  align: 'right',
  assistiveText: {
    closeButton: 'Close dialog'
  },
  hasNoCloseButton: false,
  hasNoNubbin: false,
  hoverCloseDelay: 300,
  openOn: 'click',
  position: 'absolute',
  variant: 'base'
};
/**
 * The Popover component is a non-modal dialog. It should be paired with a clickable trigger such as a `Button`. It traps focus from the page and must be exited if focus needs to be outside the Popover. Use a `Tooltip` if there are no call to actions within the dialog. A `Tooltip` does not need to be clicked. Multiple popovers open at the same time, each with focus trap is not supported.
 */

var Popover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popover, _React$Component);

  // ### Display Name
  // Always use the canonical component name as the React display name.
  // ### Prop Types
  function Popover(_props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "getId", function () {
      return _this.props.id || _this.generatedId;
    });

    _defineProperty(_assertThisInitialized(_this), "getIsOpen", function () {
      return !_this.props.disabled && !!(typeof _this.props.isOpen === 'boolean' ? _this.props.isOpen : _this.state.isOpen);
    });

    _defineProperty(_assertThisInitialized(_this), "getMenu", function () {
      return (// needed by keyboard navigation
        _this.dialog
      );
    });

    _defineProperty(_assertThisInitialized(_this), "getTargetElement", function () {
      return _this.props.onRequestTargetElement && _this.props.onRequestTargetElement() ? _this.props.onRequestTargetElement() : _this.trigger;
    });

    _defineProperty(_assertThisInitialized(_this), "setMenuRef", function (component) {
      _this.dialog = component;
    });

    _defineProperty(_assertThisInitialized(_this), "setContainerRef", function (component) {
      _this.trigger = component; // yes, this is a re-render triggered by a render.
      // Dialog/Popper.js cannot place the popover until
      // the trigger/target DOM node is mounted. This
      // way `findDOMNode` is not called and parent
      // DOM nodes are not queried.

      if (!_this.state.inputRendered) {
        _this.setState({
          inputRendered: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDialogClose", function (event, data) {
      var componentWillUnmount = data && data.componentWillUnmount || false;

      if (currentOpenPopover === _assertThisInitialized(_this)) {
        currentOpenPopover = undefined;
      }

      if (_this.props.onClose) {
        _this.props.onClose(event, {
          // Breaking change: component object reference has been
          // removed (`this`), due to endless loop creation.
          componentWillUnmount: componentWillUnmount
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (event, data) {
      var isOpen = _this.getIsOpen();

      if (isOpen) {
        // call even if closed
        if (_this.props.onRequestClose) {
          _this.props.onRequestClose(event, data);
        }

        if (currentOpenPopover === _assertThisInitialized(_this)) {
          currentOpenPopover = undefined;
        }

        _this.setState({
          isOpen: false
        });

        _this.isHover = false;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpen", function () {
      var isOpen = _this.getIsOpen();

      if (!isOpen) {
        if (currentOpenPopover && isFunction(currentOpenPopover.handleClose)) {
          currentOpenPopover.handleClose(undefined, {
            trigger: 'newPopover',
            id: currentOpenPopover.getId()
          });
        }

        currentOpenPopover = _assertThisInitialized(_this);

        _this.setState({
          isOpen: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function (event) {
      var isOpen = _this.getIsOpen();

      _this.isHover = true;

      if (!isOpen && _this.props.openOn === 'hover') {
        _this.handleOpen();
      } else {
        // we want this clear when openOn is hover or hybrid
        clearTimeout(_this.isClosing);
      }

      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function (event) {
      var isOpen = _this.getIsOpen();

      if (isOpen) {
        _this.isClosing = setTimeout(function () {
          _this.handleClose();
        }, _this.props.hoverCloseDelay);
      }

      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event, _ref) {
      var triggerOnClickCallback = _ref.triggerOnClickCallback;

      var isOpen = _this.getIsOpen();

      if (!isOpen) {
        _this.handleOpen();
      } else {
        _this.handleClose();
      }

      if (_this.props.onClick) {
        _this.props.onClick(event);
      }

      if (triggerOnClickCallback) {
        triggerOnClickCallback(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      var isOpen = _this.getIsOpen();

      if (!isOpen) {
        _this.handleOpen();
      }

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (event.keyCode) {
        if (event.keyCode !== KEYS.TAB) {
          var isOpen = _this.getIsOpen();

          keyboardNavigableDialog({
            event: event,
            isOpen: isOpen,
            handleClick: _this.handleClick,
            key: event.key,
            keyCode: event.keyCode,
            targetTarget: event.target,
            toggleOpen: _this.toggleOpenFromKeyboard,
            trigger: _this.trigger
          });
        }

        if (_this.props.onKeyDown) {
          _this.props.onKeyDown(event);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function (event) {
      _this.handleClose(event, {
        trigger: 'cancel'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (event) {
      _this.handleClose(event, {
        trigger: 'clickOutside'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleOpenFromKeyboard", function (event) {
      var isOpen = _this.getIsOpen();

      if (isOpen) {
        _this.handleCancel(event);
      } else {
        _this.handleOpen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderDialog", function (isOpen, outsideClickIgnoreClass) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props;

      var offset = props.offset;

      var assistiveText = _objectSpread({}, defaultProps.assistiveText, _this.props.assistiveText);

      var closeButtonAssistiveText = props.closeButtonAssistiveText || assistiveText.closeButton; // HEADER SUB-RENDERS

      var hasThemedHeader = _this.props.variant === 'error' || _this.props.variant === 'warning';
      var hasDefinedHeader = _this.props.heading || hasThemedHeader;
      var headerIcon = {
        error: React.createElement(Icon, {
          category: "utility",
          name: "error",
          size: "x-small",
          inverse: true
        }),
        warning: React.createElement(Icon, {
          category: "utility",
          name: "warning",
          size: "x-small",
          inverse: true
        })
      };
      var headerVariants = {
        base: React.createElement("header", {
          className: classNames('slds-popover__header', {
            'slds-p-vertical_medium': props.variant === 'walkthrough'
          })
        }, React.createElement("h2", {
          id: _this.props.ariaLabelledby || "".concat(_this.getId(), "-dialog-heading"),
          className: classNames({
            'slds-text-heading_small': props.variant !== 'walkthrough',
            'slds-text-heading_medium': props.variant === 'walkthrough'
          })
        }, _this.props.heading)),
        themed: React.createElement("header", {
          className: "slds-popover__header"
        }, React.createElement(MediaObject, {
          body: React.createElement("h2", {
            id: _this.props.ariaLabelledby || "".concat(_this.getId(), "-dialog-heading"),
            className: "slds-truncate slds-text-heading_medium",
            title: props.heading
          }, props.heading),
          figure: headerIcon[_this.props.variant],
          verticalCenter: true
        }))
      };
      var header = null;

      if (hasDefinedHeader && props.variant !== 'walkthrough-action' && props.variant !== 'feature') {
        header = headerVariants[hasThemedHeader ? 'themed' : 'base'];
      } // BODY SUB-RENDERS


      var body = null;

      if (props.variant === 'error' || props.variant === 'warning') {
        body = // THIS WRAPPING DIV IS NOT IN SLDS MARKUP
        React.createElement("div", null, React.createElement("div", {
          id: "".concat(_this.getId(), "-dialog-body"),
          className: classNames('slds-popover__body slds-popover__body_scrollable', _this.props.classNameBody) // REMOVE IN THE FUTURE: SLDS OVERRIDE
          // Possible solution in future is to use .slds-popover__body_small
          ,
          style: {
            borderBottom: 'none'
          }
        }, props.body), React.createElement("div", {
          // GRADIENT FOOTER - SLDS OVERRIDE
          // REMOVE IN THE FUTURE (HOPEFULLY)
          style: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            textAlign: 'center',
            margin: 0,
            padding: '5px 0',

            /* "transparent" only works here because == rgba(0,0,0,0) */
            backgroundImage: 'linear-gradient(to bottom, transparent, rgba(255,255,255,100)'
          }
        }));
      } else if (props.variant === 'walkthrough-action' || props.variant === 'feature') {
        body = React.createElement("div", {
          className: classNames('slds-popover__body', _this.props.classNameBody),
          id: "".concat(_this.getId(), "-dialog-body")
        }, React.createElement("div", {
          className: "slds-media"
        }, React.createElement("div", {
          className: "slds-media__figure"
        }, props.variant === 'walkthrough-action' ? React.createElement(Icon, {
          category: "utility",
          name: "touch_action",
          size: "small",
          inverse: true
        }) : _this.props.icon), React.createElement("div", {
          className: "slds-media__body"
        }, props.heading ? React.createElement("h2", {
          id: _this.props.ariaLabelledby || "".concat(_this.getId(), "-dialog-heading"),
          className: "slds-text-heading_small"
        }, props.heading) : null, props.body, props.stepText ? React.createElement("p", {
          className: "slds-m-top_medium slds-text-title"
        }, props.stepText) : null)));
      } else {
        body = // DEFAULT - NOT SCROLLABLE
        React.createElement("div", {
          id: "".concat(_this.getId(), "-dialog-body"),
          className: classNames('slds-popover__body', _this.props.classNameBody)
        }, props.body);
      } // FOOTER SUB-RENDERS


      var footer = null;

      if (props.footer) {
        footer = React.createElement("footer", {
          className: classNames('slds-popover__footer', _this.props.classNameFooter, _this.props.footerClassName),
          style: _this.props.footerStyle
        }, _this.props.footer);
      } else if (props.variant !== 'walkthrough-action' && (props.footerWalkthroughActions || props.stepText)) {
        footer = React.createElement("footer", {
          className: "slds-popover__footer"
        }, React.createElement("div", {
          className: "slds-grid slds-grid_vertical-align-center"
        }, props.stepText ? React.createElement("span", {
          className: "slds-text-title"
        }, props.stepText) : null, props.footerWalkthroughActions ? React.createElement("div", {
          className: "slds-col_bump-left",
          style: {
            display: 'inline-block'
          }
        }, props.footerWalkthroughActions) : null));
      } // MAIN RENDER


      return isOpen ? React.createElement(Dialog, {
        hasNubbin: !_this.props.hasNoNubbin,
        align: props.align,
        contentsClassName: classNames(_this.props.contentsClassName, 'ignore-react-onclickoutside', 'slds-popover', {
          'slds-popover_error': props.variant === 'error'
        }, {
          'slds-popover_walkthrough': props.variant === 'walkthrough' || props.variant === 'walkthrough-action' || props.variant === 'feature'
        }, {
          'slds-popover_walkthrough-alt': props.variant === 'walkthrough-action'
        }, {
          'slds-popover_feature': props.variant === 'feature'
        }, {
          'slds-popover_warning': props.variant === 'warning'
        }, props.className),
        context: _this.context,
        hasStaticAlignment: props.hasStaticAlignment,
        offset: offset,
        onCancel: _this.handleClose,
        onClose: _this.handleDialogClose,
        onOpen: _this.props.onOpen,
        onKeyDown: _this.handleKeyDown,
        onMouseEnter: props.openOn === 'hover' ? _this.handleMouseEnter : null,
        onMouseLeave: props.openOn === 'hover' ? _this.handleMouseLeave : null,
        outsideClickIgnoreClass: outsideClickIgnoreClass,
        onRequestTargetElement: function onRequestTargetElement() {
          return _this.getTargetElement();
        },
        position: _this.props.position,
        style: _this.props.style,
        variant: "popover",
        ref: _this.setMenuRef,
        containerProps: {
          id: "".concat(_this.getId(), "-popover"),
          'aria-labelledby': _this.props.ariaLabelledby || "".concat(_this.getId(), "-dialog-heading"),
          'aria-describedby': "".concat(_this.getId(), "-dialog-body")
        }
      }, !_this.props.hasNoCloseButton && React.createElement(Button, {
        assistiveText: {
          icon: closeButtonAssistiveText
        },
        iconCategory: "utility",
        iconName: "close",
        className: classNames('slds-button slds-button_icon-small slds-float_right slds-popover__close slds-button_icon', {
          'slds-button_icon-inverse': props.variant === 'walkthrough' || props.variant === 'walkthrough-action' || props.variant === 'feature'
        }),
        onClick: _this.handleCancel,
        variant: "icon",
        inverse: _this.props.variant === 'error' || _this.props.variant === 'warning'
      }), header, body, footer) : null;
    });

    _defineProperty(_assertThisInitialized(_this), "renderOverlay", function (isOpen) {
      if (isFunction(overlay) && documentDefined) {
        overlay(isOpen, overlay);
      } else if (_this.props.overlay && isOpen && !_this.overlay && documentDefined) {
        _this.overlay = overlay;
        document.querySelector('body').appendChild(_this.overlay);
      } else if (!isOpen && _this.overlay && _this.overlay.parentNode) {
        _this.overlay.parentNode.removeChild(_this.overlay);

        _this.overlay = undefined;
      }
    });

    _this.generatedId = shortid.generate(); // `checkProps` issues warnings to developers about properties (similar to React's built in development tools)

    checkProps(POPOVER, _props, componentDoc);
    return _this;
  }

  _createClass(Popover, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (currentOpenPopover === this) {
        currentOpenPopover = undefined;
      }

      this.isUnmounting = true;
      this.renderOverlay(false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var otherChildren = [];
      var outsideClickIgnoreClass = "ignore-click-".concat(this.getId());
      var clonedTrigger = null;
      React.Children.forEach(this.props.children, function (child, index) {
        if (index === 0) {
          clonedTrigger = React.cloneElement(child, _objectSpread({
            'aria-haspopup': 'dialog',
            id: _this2.getId(),
            onClick: _this2.props.openOn === 'click' || _this2.props.openOn === 'hybrid' ? function (event) {
              _this2.handleClick(event, {
                triggerOnClickCallback: child.props.onClick
              });
            } : child.props.onClick,
            onFocus: _this2.props.openOn === 'hover' ? _this2.handleFocus : null,
            onMouseDown: _this2.props.onMouseDown,
            onMouseEnter: _this2.props.openOn === 'hover' || _this2.props.openOn === 'hybrid' ? _this2.handleMouseEnter : null,
            onMouseLeave: _this2.props.openOn === 'hover' || _this2.props.openOn === 'hybrid' ? _this2.handleMouseLeave : null,
            tabIndex: child.props.tabIndex || '0'
          }, child.props));
        } else {
          // eslint-disable-next-line fp/no-mutating-methods
          otherChildren.push(child);
        }
      });
      this.renderOverlay(this.getIsOpen());
      var containerStyles = {
        display: this.props.hasNoTriggerStyles ? undefined : 'inline-block'
      };
      return React.createElement("div", {
        className: this.props.triggerClassName,
        style: containerStyles,
        ref: this.setContainerRef
      }, clonedTrigger, otherChildren.length > 0 ? otherChildren : null, this.renderDialog(this.getIsOpen(), outsideClickIgnoreClass));
    }
  }]);

  return Popover;
}(React.Component);

_defineProperty(Popover, "displayName", POPOVER);

_defineProperty(Popover, "propTypes", {
  /**
   * Aligns the popover with the respective side of the trigger. That is `top` will place the `Popover` above the trigger.
   */
  align: PropTypes.oneOf(['top', 'top left', 'top right', 'right', 'right top', 'right bottom', 'bottom', 'bottom left', 'bottom right', 'left', 'left top', 'left bottom']),

  /**
   * **Assistive text for accessibility.**
   * This object is merged with the default props object on every render.
   * * `closeButton`: This is a visually hidden label for the close button.
   */
  assistiveText: PropTypes.shape({
    closeButton: PropTypes.string
  }),

  /**
   * HTML `id` of heading for popover. Only use if your header is within your popover body.
   */
  ariaLabelledby: PropTypes.string,

  /**
   * Multiple children of any kind are allowed, but the first child must serve as the trigger component. Many props will be passed into this trigger related to popover interactions. The trigger needs to be a clickable element, such as a `Button` or an anchor tag (`a`).
   */
  children: PropTypes.node.isRequired,

  /**
   * The contents of the popover. This should also accept arrays.
   */
  body: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,

  /**
   * CSS classes to be added to the popover footer. That is the element with `.slds-popover__body` on it.
   */
  classNameBody: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * CSS classes to be added to the popover footer. That is the element with `.slds-popover__footer` on it.
   */
  classNameFooter: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * This prop is passed onto the triggering `Button`. Prevent popover from opening. Also applies disabled styling to trigger button.
   */
  disabled: PropTypes.bool,

  /**
   * A footer is an optional. Buttons are often placed here.
   */
  footer: PropTypes.node,

  /**
   * An object of CSS styles that are applied to the `slds-popover__footer` DOM element.
   */
  footerStyle: PropTypes.object,

  /**
   * Used with `walkthrough` variant to provide action buttons (ex: "Next" / "Skip" / etc) for a walkthrough popover footer. Accepts either a single node or array of nodes for multiple buttons.
   */
  footerWalkthroughActions: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),

  /**
   * Determines if the popover has a close button or not. Default is `false`
   */
  hasNoCloseButton: PropTypes.bool,

  /**
   * Determines if the popover has a nubbin or not. Default is `false`
   */
  hasNoNubbin: PropTypes.bool,

  /**
   * Prevents the Popover from changing position based on the viewport/window. If set to true your popover can extend outside the viewport _and_ overflow outside of a scrolling parent. If this happens, you might want to consider making the popover contents scrollable to fit the menu on the screen. When enabled, `position` `absolute` is used.
   */
  hasStaticAlignment: PropTypes.bool,

  /**
   * Removes `display:inline-block` from the trigger button.
   */
  hasNoTriggerStyles: PropTypes.bool,

  /**
   * All popovers require a heading that labels the popover for assistive technology users. This text will be placed within a heading HTML tag, or in an h2 within the popover body if used with `variant="walkthrough-action"`. A heading is **highly recommended for accessibility reasons.** Please see `ariaLabelledby` prop.
   */
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Icon displayed in the `feature` variant
   */
  icon: PropTypes.node,

  /**
   * By default, a unique ID will be created at render to support keyboard navigation, ARIA roles, and connect the popover to the triggering button. This ID will be applied to the triggering element. `${id}-popover`, `${id}-dialog-heading`, `${id}-dialog-body` are also created.
   */
  id: PropTypes.string,

  /**
   * Forces the popover to be open or closed. See controlled/uncontrolled callback/prop pattern for more on suggested use [](https://github.com/salesforce-ux/design-system-react/blob/master/CONTRIBUTING.md#concepts-and-best-practices) You will want this if Popover is to be a controlled component.
   */
  isOpen: PropTypes.bool,

  /**
   * This function is passed onto the triggering `Button`. Triggered when the trigger button is clicked. You will want this if Popover is to be a controlled component.
   */
  onClick: PropTypes.func,

  /**
   * This function is triggered when the dialog is closed. This occurs when the Dialog child component (that is the actual popover) is unmounted and removed from the DOM. This function returns `{event, { trigger, componentWillUnmount }`. Trigger can have the values `cancel`, `clickOutside`, or `newPopover`.
   */
  onClose: PropTypes.func,

  /**
   * Called when a key is pressed.
   */
  onKeyDown: PropTypes.func,

  /**
   * Called when mouse clicks down on the trigger button.
   */
  onMouseDown: PropTypes.func,

  /**
   * This function is triggered when the Dialog child component (that is the actual popover) is mounted and added to the DOM. The parameters are `event, { portal: }`. `portal` can be used as a React tree root node.
   */
  onOpen: PropTypes.func,

  /**
   * This function is triggered when the user clicks outside the Popover or clicks the close button. You will want to define this if Popover is to be a controlled component. Most of the time you will want to set `isOpen` to `false` when this is triggered unless you need to validate something.
   */
  onRequestClose: PropTypes.func,

  /**
   * Callback that returns an element or React `ref` to align the Popover with. If the target element has not been rendered yet, the popover will use the triggering element as the attachment target instead. NOTE: `position="relative"` is not compatible with custom targets that are not the triggering element.
   */
  onRequestTargetElement: PropTypes.func,

  /**
   * Please select one of the following:
   * * `absolute` - (default) The dialog will use `position: absolute` and style attributes to position itself. This allows inverted placement or flipping of the dialog.
   * * `overflowBoundaryElement` - The dialog will overflow scrolling parents. Use on elements that are aligned to the left or right of their target and don't care about the target being within a scrolling parent. Typically this is a popover or tooltip. Dropdown menus can usually open up and down if no room exists. In order to achieve this a portal element will be created and attached to `body`. This element will render into that detached render tree.
   * * `relative` - No styling or portals will be used. Menus will be positioned relative to their triggers. This is a great choice for HTML snapshot testing. NOTE: this setting is not compatible with custom targets outside the trigger
   */
  position: PropTypes.oneOf(['absolute', 'overflowBoundaryElement', 'relative']),

  /**
   * Used with `walkthrough` variant to provide the step text (ex: "Step 1 of 4") for a walkthrough popover footer. If used with `variant="walkthrough-action"`, it will be placed in the popover body.
   */
  stepText: PropTypes.string,

  /**
   * An object of CSS styles that are applied to the `slds-popover` DOM element.
   */
  style: PropTypes.object,

  /**
   * If `true`, adds a transparent overlay when the menu is open to handle outside clicks. Allows clicks on iframes to be captured, but also forces a double-click to interact with other elements. If a function is passed, custom overlay logic may be defined by the app.
   */
  overlay: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

  /**
   * CSS classes to be added to wrapping trigger `div` around the button.
   */
  triggerClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Determines the type of the popover. `error` and `warning` allows the  content body to scroll. Default is `base` _Tested with snaphots._
   */
  variant: PropTypes.oneOf(['base', 'error', 'feature', 'walkthrough', 'walkthrough-action', 'warning'])
});

_defineProperty(Popover, "defaultProps", defaultProps);

Popover.contextTypes = {
  iconPath: PropTypes.string
};
export default Popover;
export { PopoverNubbinPositions };
//# sourceMappingURL=popover.js.map