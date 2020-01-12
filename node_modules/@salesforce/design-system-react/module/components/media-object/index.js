function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// This project uses `classnames`, "a simple javascript utility for conditionally
// joining classNames together."

import classnames from 'classnames';
import { MEDIA_OBJECT } from '../../utilities/constants'; // Allow for predicatable DOM queries with `querySelectorAll(cssClasses.base)`

export var cssClasses = {
  base: 'slds-media',
  figure: 'slds-media__figure',
  body: 'slds-media__body'
};
/**
 * When you need text and a figure next to each other, use a media object.
 */

var MediaObject =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MediaObject, _React$Component);

  function MediaObject() {
    _classCallCheck(this, MediaObject);

    return _possibleConstructorReturn(this, _getPrototypeOf(MediaObject).apply(this, arguments));
  }

  _createClass(MediaObject, [{
    key: "render",
    // ### Display Name
    // Always use the canonical component name as the React display name.
    // ### Prop Types
    value: function render() {
      return React.createElement("div", {
        className: classnames(cssClasses.base, {
          'slds-media_center': this.props.verticalCenter,
          'slds-has-flexi-truncate': this.props.canTruncate
        }, this.props.className)
      }, this.props.figure ? React.createElement("div", {
        className: cssClasses.figure
      }, this.props.figure, " ") : null, React.createElement("div", {
        className: cssClasses.body
      }, this.props.body));
    }
  }]);

  return MediaObject;
}(React.Component);

_defineProperty(MediaObject, "displayName", MEDIA_OBJECT);

_defineProperty(MediaObject, "propTypes", {
  /**
   * Often the body may need to be truncated for correct layout. This is only applicable if using the component within a flexbox container.
   */
  canTruncate: PropTypes.bool,

  /**
   * Class names to be added to the component's HTML tag with `slds-media` class.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * The body is often text such as a heading or paragraph.
   */
  body: PropTypes.node,

  /**
   * The figure is the optional visualization of the text within the body.
   */
  figure: PropTypes.node,

  /**
   * Vertically centers the body with the middle of the figure.
   */
  verticalCenter: PropTypes.bool
});

export default MediaObject;
//# sourceMappingURL=index.js.map