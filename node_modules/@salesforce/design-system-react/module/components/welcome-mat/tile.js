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
// Implements the [Welcome Mat Tile design pattern](https://lightningdesignsystem.com/components/welcome-mat/) in React.
// Based on SLDS v2.4.0
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import Icon from '../icon';
import { WELCOME_MAT_TILE } from '../../utilities/constants';
var displayName = WELCOME_MAT_TILE;
var propTypes = {
  /**
   * **Assistive text for accessibility.**
   * This object is merged with the default props object on every render.
   * * `completeIcon`: Text that is visually hidden but read aloud by screenreaders to tell the user what the complete icon means.
   */
  assistiveText: PropTypes.shape({
    completedIcon: PropTypes.string
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
   * Title for the tile component.
   */
  title: PropTypes.string,

  /**
   * Description for the tile component.
   */
  description: PropTypes.string,

  /**
   * Href for the tile link
   */
  href: PropTypes.string,

  /**
   * Icon for the tile
   */
  icon: PropTypes.node,

  /**
   * Whether the tile is completed
   */
  isComplete: PropTypes.bool,

  /**
   * Variant of the Welcome Mat Tile
   */
  variant: PropTypes.oneOf(['steps', 'info-only', 'splash', 'trailhead-connected'])
};
var defaultProps = {
  assistiveText: {
    completedIcon: 'Completed'
  },
  isComplete: false,
  variant: 'steps'
};
/**
 * Tile component item represents a tile in a Welcome Mat
 */

var Tile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tile, _React$Component);

  function Tile() {
    _classCallCheck(this, Tile);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tile).apply(this, arguments));
  }

  _createClass(Tile, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.generatedId = shortid.generate();
    }
    /**
     * Get the Welcome Mat Tile's HTML id. Generate a new one if no ID present.
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

      var body = React.createElement(React.Fragment, null, React.createElement("div", {
        className: classNames('slds-media__figure', 'slds-media__figure_fixed-width', 'slds-align_absolute-center')
      }, React.createElement("div", {
        className: "slds-welcome-mat__tile-figure"
      }, React.createElement("div", {
        className: "slds-welcome-mat__tile-icon-container"
      }, this.props.icon, this.props.isComplete && this.props.variant !== 'info-only' ? React.createElement(Icon, {
        assistiveText: {
          label: assistiveText.completedIcon
        },
        category: "action",
        name: "check",
        title: assistiveText.completedIcon
      }) : null))), React.createElement("div", {
        className: "slds-media__body"
      }, React.createElement("div", {
        className: "slds-welcome-mat__tile-body"
      }, React.createElement("h3", {
        className: "slds-welcome-mat__tile-title"
      }, this.props.title), React.createElement("p", {
        className: "slds-welcome-mat__tile-description"
      }, this.props.description))));
      return React.createElement("div", {
        id: this.getId(),
        className: classNames('slds-welcome-mat__tile', this.props.variant === 'info-only' ? 'slds-welcome-mat__tile_info-only' : null, this.props.isComplete && this.props.variant !== 'info-only' ? 'slds-welcome-mat__tile_complete' : null, this.props.className)
      }, this.props.variant === 'info-only' ? React.createElement("div", {
        className: "slds-media"
      }, body) : React.createElement("a", {
        href: this.props.href,
        className: "slds-box slds-box_link slds-media"
      }, body));
    }
  }]);

  return Tile;
}(React.Component);

Tile.displayName = displayName;
Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;
export default Tile;
//# sourceMappingURL=tile.js.map