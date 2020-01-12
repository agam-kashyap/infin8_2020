function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable react/prefer-es6-class, jsx-a11y/no-noninteractive-element-interactions */
// Implements the [Modal design pattern](https://lightningdesignsystem.com/components/modals/) in React.
// Based on SLDS v2.2.1
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import ReactModal from 'react-modal'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid'; // This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)

import checkProps from './check-props';
import checkAppElementIsSet from '../../utilities/warning/check-app-element-set';
import Button from '../button';
import { MODAL } from '../../utilities/constants';
import componentDoc from './component.json';
var documentDefined = typeof document !== 'undefined';
var windowDefined = typeof window !== 'undefined';
var propTypes = {
  /**
   * Vertical alignment of Modal.
   */
  align: PropTypes.oneOf(['top', 'center']),

  /**
   * Boolean indicating if the appElement should be hidden.
   */
  ariaHideApp: PropTypes.bool,

  /**
   * **Assistive text for accessibility.**
   * This object is merged with the default props object on every render.
   * * `dialogLabel`: This is a visually hidden label for the dialog. If not provided, `heading` is used.
   * * `dialogLabelledBy`: This describes which node labels the dialog. If not provided and dialogLabel is unavailable, `id` is used.
   * * `closeButton`: This is a visually hidden label for the close button.
   */
  assistiveText: PropTypes.shape({
    dialogLabel: PropTypes.string,
    dialogLabelledBy: PropTypes.string,
    closeButton: PropTypes.string
  }),

  /**
   * Modal content.
   */
  children: PropTypes.node.isRequired,

  /**
   * Custom CSS classes for the modal `section` node classed `.slds-modal` and the parent of `.slds-modal__container`. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Custom CSS classes for the modal's container. This is the child element of `.slds-modal` with class `.slds-modal__container`. Uses `classNames` [API](https://github.com/JedWatson/classnames).
   */
  containerClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Custom CSS classes for the modal's body. This is the element that has overflow rules and should be used to set a static height if desired. Use `classNames` [API](https://github.com/JedWatson/classnames).
   */
  contentClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Custom styles for the modal's body. This is the element that has overflow rules and should be used to set a static height if desired.
   */
  contentStyle: PropTypes.object,

  /**
   * If true, modal footer buttons render left and right. An example use case would be for "back" and "next" buttons.
   */
  directional: PropTypes.bool,

  /**
   * If true, Modals cannot be dismissed by clicking on the close icon or pressing esc key.
   */
  disableClose: PropTypes.bool,

  /**
   * If true, Modals can be dismissed by clicking outside of modal. If unspecified, defaults to disableClose.
   */
  dismissOnClickOutside: PropTypes.bool,

  /**
   * Callback to fire with Modal is dismissed
   */
  onRequestClose: PropTypes.func,

  /**
   * Accepts a node or array of nodes that are typically a `Button` or `ProgressIndicator`. If an array, the nodes render on the right side first but are then floated left and right if <code>directional</code> prop is `true`.
   */
  footer: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),

  /**
   * Allows for a custom modal header that does not scroll with modal content. If this is defined, `heading` and `tagline` will be ignored. The close button will still be present.
   */
  header: PropTypes.node,

  /**
   * Adds CSS classes to the container surrounding the modal header and the close button. Use `classNames` [API](https://github.com/JedWatson/classnames).
   */
  headerClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Unique identifier for the modal. The id is automatically generated if not provided
   */
  id: PropTypes.string,

  /**
   * Forces the modal to be open or closed.
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * Function whose return value is the mount node to insert the Modal element into. The default is `() => document.body`.
   */
  parentSelector: PropTypes.func,

  /**
   * Custom CSS classes for the portal DOM node. This node is a direct descendant of the `body` and is the parent of `ReactModal__Overlay`. Use `classNames` [API](https://github.com/JedWatson/classnames).
   */
  portalClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Styles the modal as a prompt.
   */
  prompt: PropTypes.oneOf(['success', 'warning', 'error', 'wrench', 'offline', 'info']),

  /**
   * Specifies the modal's width. May be deprecated in favor of `width` in the future.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * Content underneath the heading in the modal header.
   */
  tagline: PropTypes.node,

  /**
   * Content underneath the title in the modal header.
   */
  title: PropTypes.node,

  /**
   * Text heading at the top of a modal.
   */
  heading: PropTypes.node,

  /**
   * Allows adding additional notifications within the modal.
   */
  toast: PropTypes.node
};
var defaultProps = {
  assistiveText: {
    dialogLabel: '',
    dialogLabelledBy: '',
    closeButton: 'Close'
  },
  align: 'center',
  ariaHideApp: true
};
/**
 * The Modal component is used for the Lightning Design System Modal and Notification > Prompt components. The Modal opens from a state change outside of the component itself (pass this state to the <code>isOpen</code> prop). For more details on the Prompt markup, please review the <a href="http://www.lightningdesignsystem.com/components/notifications#prompt">Notifications > Prompt</a>.
 *
 * By default, `Modal` will add `aria-hidden=true` to the `body` tag, but this disables some assistive technologies. To prevent this you can add the following to your application with `#mount` being the root node of your application that you would like to hide from assistive technologies when the `Modal` is open.
 * ```
 * import settings from 'design-system-react/components/settings';
 * settings.setAppElement('#mount');
 * ```
 * This component uses a portalMount (a disconnected React subtree mount) to create a modal as a child of `body`.
 */

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));
    _this.state = {
      isClosing: false
    }; // Bind

    _this.handleModalClick = _this.handleModalClick.bind(_assertThisInitialized(_this));
    _this.closeModal = _this.closeModal.bind(_assertThisInitialized(_this));
    _this.dismissModalOnClickOutside = _this.dismissModalOnClickOutside.bind(_assertThisInitialized(_this));
    _this.generatedId = shortid.generate();
    checkProps(MODAL, props, componentDoc);

    if (props.ariaHideApp) {
      checkAppElementIsSet();
    }

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setReturnFocus();
      this.updateBodyScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.updateBodyScroll();
      }

      if (this.state.isClosing !== prevState.isClosing) {
        if (this.state.isClosing) {
          // This section of code should be removed once trigger.jsx
          // and manager.jsx are removed. They appear to have
          // been created in order to do modals in portals.
          if (!this.isUnmounting) {
            var el = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node

            if (el && el.parentNode && el.parentNode.getAttribute('data-slds-modal')) {
              ReactDOM.unmountComponentAtNode(el);
              document.body.removeChild(el);
            }
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isUnmounting = true;
      this.clearBodyScroll();
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "getBorderRadius",
    value: function getBorderRadius() {
      var borderRadiusValue = '.25rem';
      var borderTopRadius = this.props.title || this.props.heading || this.props.header ? {} : {
        borderTopLeftRadius: borderRadiusValue,
        borderTopRightRadius: borderRadiusValue
      };
      var borderBottomRadius = this.props.footer ? {} : {
        borderBottomLeftRadius: borderRadiusValue,
        borderBottomRightRadius: borderRadiusValue
      };
      return _objectSpread({}, borderTopRadius, borderBottomRadius);
    }
  }, {
    key: "getModal",
    value: function getModal() {
      var modalStyle = this.props.align === 'top' ? {
        justifyContent: 'flex-start'
      } : null;
      var borderRadius = this.getBorderRadius();
      var contentStyleFromProps = this.props.contentStyle || {};

      var contentStyle = _objectSpread({}, borderRadius, contentStyleFromProps);

      var dialogLabelledBy = null;

      if (this.props.assistiveText.dialogLabelledBy) {
        // eslint-disable-next-line prefer-destructuring
        dialogLabelledBy = this.props.assistiveText.dialogLabelledBy;
      } else if (!this.props.assistiveText.dialogLabel && (this.props.heading || this.props.title)) {
        dialogLabelledBy = "".concat(this.getId(), "-heading");
      }

      return (// temporarily disabling eslint for the onClicks on the div tags

        /* eslint-disable */
        React.createElement("section", {
          "aria-describedby": "".concat(this.getId(), "-modal-content"),
          "aria-label": this.props.assistiveText.dialogLabel,
          "aria-labelledby": dialogLabelledBy,
          "aria-modal": true,
          className: classNames('slds-modal', 'slds-fade-in-open', this.props.size ? "slds-modal_".concat(this.props.size) : null, {
            'slds-modal_prompt': this.isPrompt()
          }, this.props.className),
          onClick: this.dismissModalOnClickOutside,
          role: this.props.disableClose ? 'alertdialog' : 'dialog'
        }, React.createElement("div", {
          className: classNames('slds-modal__container', this.props.containerClassName),
          style: modalStyle
        }, this.headerComponent(), React.createElement("div", {
          className: classNames('slds-modal__content', this.props.contentClassName),
          id: "".concat(this.getId(), "-modal-content"),
          style: contentStyle,
          onClick: this.handleModalClick
        }, this.props.children), this.footerComponent()))
        /* eslint-enable */

      );
    }
  }, {
    key: "setReturnFocus",
    value: function setReturnFocus() {
      this.setState({
        returnFocusTo: documentDefined ? document.activeElement : null
      });
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "clearBodyScroll",
    value: function clearBodyScroll() {
      if (windowDefined && documentDefined && document.body) {
        document.body.style.overflow = 'inherit';
      }
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      if (!this.props.disableClose) {
        this.dismissModal();
      }
    }
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.setState({
        isClosing: true
      });

      if (this.state.returnFocusTo && this.state.returnFocusTo.focus) {
        this.state.returnFocusTo.focus();
      }

      if (this.props.onRequestClose) {
        this.props.onRequestClose();
      }
    }
  }, {
    key: "dismissModalOnClickOutside",
    value: function dismissModalOnClickOutside() {
      // if dismissOnClickOutside is not set, default its value to disableClose
      var dismissOnClickOutside = this.props.dismissOnClickOutside !== undefined ? this.props.dismissOnClickOutside : !this.props.disableClose;

      if (dismissOnClickOutside) {
        this.dismissModal();
      }
    }
  }, {
    key: "footerComponent",
    value: function footerComponent() {
      var footer = null;
      var hasFooter = this.props.footer;
      var footerClass = {
        'slds-modal__footer': true,
        'slds-modal__footer_directional': this.props.directional,
        'slds-theme_default': this.isPrompt()
      };

      if (hasFooter) {
        footer = // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-interactions
        React.createElement("footer", {
          className: classNames(footerClass, this.props.footerClassNames),
          onClick: this.handleModalClick
        }, this.props.footer);
      }

      return footer;
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "handleModalClick",
    value: function handleModalClick(event) {
      if (event && event.stopPropagation) {
        event.stopPropagation();
      }
    }
  }, {
    key: "handleSubmitModal",
    value: function handleSubmitModal() {
      this.closeModal();
    }
  }, {
    key: "headerComponent",
    value: function headerComponent() {
      var _classNames;

      var headerContent = this.props.header;
      var headerEmpty = !headerContent && !(this.props.heading || this.props.title) && !this.props.tagline;

      var assistiveText = _objectSpread({}, defaultProps.assistiveText, this.props.assistiveText);

      var closeButtonAssistiveText = this.props.closeButtonAssistiveText || assistiveText.closeButton;
      var closeButton = React.createElement(Button, {
        assistiveText: {
          icon: closeButtonAssistiveText
        },
        iconCategory: "utility",
        iconName: "close",
        iconSize: "large",
        inverse: true,
        className: "slds-button_icon slds-modal__close",
        onClick: this.closeModal,
        title: closeButtonAssistiveText,
        variant: "icon"
      });

      if (!headerContent && (this.props.heading || this.props.title) || this.props.tagline) {
        headerContent = React.createElement("div", null, this.props.toast, React.createElement("h2", {
          className: classNames({
            'slds-text-heading_small': this.isPrompt(),
            'slds-text-heading_medium': !this.isPrompt()
          }),
          id: "".concat(this.getId(), "-heading")
        }, this.props.heading ? this.props.heading : this.props.title), this.props.tagline ? React.createElement("p", {
          className: "slds-m-top_x-small"
        }, this.props.tagline) : null);
      }

      return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
        React.createElement("header", {
          className: classNames('slds-modal__header', (_classNames = {
            'slds-modal__header_empty': headerEmpty
          }, _defineProperty(_classNames, "slds-theme_".concat(this.props.prompt), this.isPrompt()), _defineProperty(_classNames, 'slds-theme_alert-texture', this.isPrompt()), _classNames), this.props.headerClassName),
          onClick: this.handleModalClick
        }, this.props.disableClose ? null : closeButton, headerContent)
      );
    }
  }, {
    key: "isPrompt",
    value: function isPrompt() {
      return this.props.prompt !== undefined;
    }
  }, {
    key: "updateBodyScroll",
    value: function updateBodyScroll() {
      if (windowDefined && documentDefined && document.body) {
        if (this.props.isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'inherit';
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var customStyles = {
        content: {
          position: 'default',
          top: 'default',
          left: 'default',
          right: 'default',
          bottom: 'default',
          border: 'default',
          background: 'default',
          overflow: 'default',
          WebkitOverflowScrolling: 'default',
          borderRadius: 'default',
          outline: 'default',
          padding: 'default'
        },
        overlay: {
          zIndex: 8000,
          // following SLDS guideline for z-index overlay
          backgroundColor: 'default'
        }
      };
      return React.createElement(ReactModal, {
        ariaHideApp: this.props.ariaHideApp,
        contentLabel: "Modal",
        isOpen: this.props.isOpen,
        onRequestClose: this.closeModal,
        style: customStyles,
        parentSelector: this.props.parentSelector,
        portalClassName: classNames('ReactModalPortal', this.props.portalClassName)
      }, this.getModal(), React.createElement("div", {
        className: "slds-backdrop slds-backdrop_open"
      }));
    }
  }]);

  return Modal;
}(React.Component);

Modal.displayName = MODAL;
Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
export default Modal;
//# sourceMappingURL=index.js.map