function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// Implements the [Files design pattern](https://lightningdesignsystem.com/components/files/) in React.
// Based on SLDS v2.4.0
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import { FILES_FILE } from '../../utilities/constants';
import FileFigure from './private/file-figure';
import FileActions from './private/file-actions';
var displayName = FILES_FILE;
var propTypes = {
  /**
   * **Assistive text for accessibility**
   *  * download - description for the download button if present
   *  * image - description for the file image
   *  * link - description for the file link
   *  * loading - description for the loading spinner if present
   *  * moreActions - description for the more actions dropdown if present
   */
  assistiveText: PropTypes.shape({
    download: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    loading: PropTypes.string,
    moreActions: PropTypes.string
  }),

  /**
   * CSS class names to be added to the container element. `array`, `object`, or `string` are accepted.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Controls different cropping aspect ratios for the component
   */
  crop: PropTypes.oneOf(['16-by-9', '4-by-3', '1-by-1']),

  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   * Action to be done on clicking download button; doesn't show download button if empty
   */
  onClickDownload: PropTypes.func,

  /**
   * Function that is called when image is clicked; can be used instead of href for more advanced event handling
   */
  onClickImage: PropTypes.func,

  /**
   * Dropdown for more actions button; doesn't show more actions button if empty
   */
  moreActionsDropdown: PropTypes.node,

  /**
   * Icon associated with the file. Accepts an Icon component
   */
  icon: PropTypes.node,

  /**
   * Icon to be shown in top left corner of File component. Accepts an Icon component
   */
  externalIcon: PropTypes.node,

  /**
   * Link to thumbnail image
   */
  image: PropTypes.string,

  /**
   * Controls whether file preview is loading
   */
  isLoading: PropTypes.bool,

  /**
   * Href attribute for image
   */
  href: PropTypes.string,

  /**
   * Labels for the File Component
   * * image - title for the file. Required.
   */
  labels: PropTypes.shape({
    title: PropTypes.string.isRequired
  }),

  /**
   *  Controls whether the file's title should be visible
   */
  hasNoVisibleTitle: PropTypes.bool
};
var defaultProps = {
  assistiveText: {
    download: 'download',
    link: 'Preview:',
    loading: 'loading',
    moreActions: 'more actions'
  },
  crop: '16-by-9',
  href: 'javascript:void(0);',
  isLoading: false,
  hasNoVisibleTitle: false
};
/**
 * File is a component that represents content uploaded as an attachment.
 */

var File =
/*#__PURE__*/
function (_React$Component) {
  _inherits(File, _React$Component);

  function File() {
    _classCallCheck(this, File);

    return _possibleConstructorReturn(this, _getPrototypeOf(File).apply(this, arguments));
  }

  _createClass(File, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.generatedId = shortid.generate();
    }
    /**
     * Get the File's HTML id. Generate a new one if no ID present.
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "render",
    value: function render() {
      var assistiveText = _objectSpread({}, defaultProps.assistiveText, this.props.assistiveText);

      return React.createElement("div", {
        id: this.getId(),
        className: classNames('slds-file', 'slds-file_card', !this.props.hasNoVisibleTitle ? 'slds-has-title' : null, this.props.className)
      }, React.createElement("figure", null, React.createElement("a", {
        href: this.props.href,
        className: classNames('slds-file__crop', this.props.crop ? "slds-file__crop_".concat(this.props.crop) : null),
        onClick: this.props.onClickImage
      }, React.createElement(FileFigure, {
        assistiveText: assistiveText,
        labels: {
          title: this.props.labels.title
        },
        isLoading: this.props.isLoading,
        image: this.props.image,
        icon: this.props.icon
      })), !this.props.hasNoVisibleTitle ? React.createElement("figcaption", {
        className: "slds-file__title slds-file__title_card"
      }, React.createElement("div", {
        className: "slds-media__figure slds-line-height_reset"
      }, this.props.icon ? React.cloneElement(this.props.icon, {
        size: 'x-small'
      }) : null), React.createElement("div", {
        className: "slds-media__body"
      }, React.createElement("span", {
        className: "slds-file__text slds-truncate",
        title: this.props.labels.title
      }, this.props.labels.title))) : null), this.props.externalIcon ? React.createElement("div", {
        className: "slds-file__external-icon"
      }, React.cloneElement(this.props.externalIcon, {
        containerClassName: 'slds-file__icon slds-icon_container'
      })) : null, this.props.moreActionsDropdown ? File.injectMoreActionsStyles() : null, React.createElement(FileActions, {
        assistiveText: assistiveText,
        hasNoVisibleTitle: this.props.hasNoVisibleTitle,
        onClickDownload: this.props.onClickDownload,
        moreActionsDropdown: this.props.moreActionsDropdown
      }));
    }
  }], [{
    key: "injectMoreActionsStyles",
    value: function injectMoreActionsStyles() {
      return React.createElement("style", null, "\n\t\t\t\t\t.dsr-file__more-actions-dropdown  ul.dropdown__list li.slds-dropdown__item > a:before\n\t\t\t\t\t{ background: none; }\n\t\t\t\t\t.dsr-file__more-actions-dropdown  ul.dropdown__list li.slds-dropdown__item > a:after\n\t\t\t\t\t{ background: none; }\n\t\t\t\t\t.dsr-file__more-actions > button:first-child\n\t\t\t\t\t{ border-radius: 0 0.25rem 0.25rem 0!important;}\n\t\t\t");
    }
  }]);

  return File;
}(React.Component);

File.displayName = displayName;
File.propTypes = propTypes;
File.defaultProps = defaultProps;
export default File;
//# sourceMappingURL=file.js.map