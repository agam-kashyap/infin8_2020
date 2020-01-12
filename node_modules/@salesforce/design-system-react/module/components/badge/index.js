function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
// Implements the [Badge design pattern](https://latest-216.lightningdesignsystem.com/components/badges/) in React.
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid'; // ## Constants

import { BADGE } from '../../utilities/constants';
/**
 * Badges are labels which hold small amounts of information.
 */

var Badge =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Badge, _React$Component);

  function Badge(props) {
    var _this;

    _classCallCheck(this, Badge);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Badge).call(this, props));
    _this.generatedId = shortid.generate();
    return _this;
  }
  /**
   * Get the Badge's HTML id. Generate a new one if no ID present.
   */


  _createClass(Badge, [{
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "render",
    value: function render() {
      var icon = React.createElement("span", {
        className: classNames('slds-badge__icon', "slds-badge__icon_".concat(this.props.iconAlignment)),
        style: this.props.style
      }, this.props.icon);
      return React.createElement("span", {
        id: this.getId(),
        className: classNames('slds-badge', {
          'slds-badge_inverse': this.props.color === 'inverse',
          'slds-badge_lightest': this.props.color === 'light'
        }, this.props.className)
      }, this.props.iconAlignment === 'left' ? React.createElement(React.Fragment, null, icon, this.props.content) : React.createElement(React.Fragment, null, this.props.content, icon));
    }
  }]);

  return Badge;
}(React.Component);

Badge.displayName = BADGE;
Badge.propTypes = {
  /**
   * CSS classes that are applied to the component
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Id of component, if desired. If not provided an id is automatically generated
   */
  id: PropTypes.string,

  /**
   * Custom styles to be passed to the component
   */
  style: PropTypes.object,

  /**
   * Color variant for the badge component
   */
  color: PropTypes.oneOf(['default', 'inverse', 'light']),

  /**
   * Icon alignment for the badge component
   */
  iconAlignment: PropTypes.oneOf(['left', 'right']),

  /**
   *  Content to be placed inside the badge component
   */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
Badge.defaultProps = {
  iconAlignment: 'left',
  color: 'default'
};
export default Badge;
//# sourceMappingURL=index.js.map