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
// Implements the [Welcome Mat InfoBadge design pattern](https://lightningdesignsystem.com/components/welcome-mat/) in React.
// Based on SLDS v2.4.0
import React from 'react';
import PropTypes from 'prop-types'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import Icon from '../icon';
import { WELCOME_MAT_BADGE } from '../../utilities/constants';
var displayName = WELCOME_MAT_BADGE;
var propTypes = {
  /**
   *  **Assistive text for accessibility.**
   * * `completed` : For users of assistive technology, assistive text for completed icon.
   */
  assistiveText: PropTypes.shape({
    completed: PropTypes.string
  }),

  /**
   * CSS class names to be added to the container element. `array`, `object`, or `string` are accepted.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   * Icon for the tile
   */
  image: PropTypes.string,

  /**
   * Whether the trail is completed
   */
  isComplete: PropTypes.bool,

  /**
   * Actions to be rendered on completion of the trail
   */
  onCompleteRenderActions: PropTypes.func
};
var defaultProps = {
  isComplete: false,
  variant: 'steps'
};
/**
 * InfoBadge component item represents a tile in a Welcome Mat
 */

var InfoBadge =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InfoBadge, _React$Component);

  function InfoBadge() {
    _classCallCheck(this, InfoBadge);

    return _possibleConstructorReturn(this, _getPrototypeOf(InfoBadge).apply(this, arguments));
  }

  _createClass(InfoBadge, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.generatedId = shortid.generate();
    }
    /**
     * Get the Welcome Mat Info Badge's HTML id. Generate a new one if no ID present.
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "getCompletedText",
    value: function getCompletedText() {
      return this.props.assistiveText && this.props.assistiveText.completed ? this.props.assistiveText.completed : 'Completed';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: this.getId(),
        className: this.props.className
      }, React.createElement("div", {
        className: "slds-welcome-mat__info-badge-container"
      }, React.createElement("img", {
        className: "slds-welcome-mat__info-badge",
        src: this.props.image,
        width: "50",
        height: "50",
        alt: ""
      }), React.createElement(Icon, {
        category: "action",
        name: "check",
        assistiveText: {
          label: this.getCompletedText()
        }
      })), this.props.children, this.props.isComplete ? this.props.onCompleteRenderActions() : null);
    }
  }]);

  return InfoBadge;
}(React.Component);

InfoBadge.displayName = displayName;
InfoBadge.propTypes = propTypes;
InfoBadge.defaultProps = defaultProps;
export default InfoBadge;
//# sourceMappingURL=info-badge.js.map