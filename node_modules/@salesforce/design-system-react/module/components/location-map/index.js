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

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// Implements the [Map design pattern](https://lightningdesignsystem.com/components/map/) in React.
// Based on SLDS v2.4.0
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import Icon from '../icon';
import { LOCATION_MAP } from '../../utilities/constants';
var displayName = LOCATION_MAP;
var propTypes = {
  /**
   * CSS class names to be added with `slds-map` class. `array`, `object`, or `string` are accepted.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * CSS class names to be added to the container element. `array`, `object`, or `string` are accepted.
   */
  classNameContainer: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   *  Accepts location object that will be shown if no location has been selected. Required
   *  * `id` : A unique identifier string for the location
   *  * `name` : Name of the location
   *  * `address` : Address of the location
   */
  defaultLocation: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  }).isRequired,

  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   *  Labels
   *  * `title` - Title for the LocationMap component.
   */
  labels: PropTypes.shape({
    title: PropTypes.string
  }),

  /**
   * Array of locations objects for the LocationMap component.**
   * Each location object can contain:
   *  * `id` : A unique identifier string for the location
   *  * `name` : Name of the location
   *  * `address` : Address of the location
   */
  locations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  })).isRequired,

  /**
   * Callback function triggered when a location is selected
   */
  onClickLocation: PropTypes.func,

  /**
   * Accepts a Google Map API Key that will be used for showing the map
   */
  googleAPIKey: PropTypes.string.isRequired,

  /**
   *  Accepts location object that will be shown when selected
   *  * `id` : A unique identifier string for the location
   *  * `name` : Name of the location
   *  * `address` : Address of the location
   */
  selection: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  })
};
var defaultProps = {
  labels: {
    title: 'Interactive Map'
  }
};
/**
 * A location map component is used to find and show locations
 */

var LocationMap =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LocationMap, _React$Component);

  function LocationMap(props) {
    var _this;

    _classCallCheck(this, LocationMap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LocationMap).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event, i) {
      if (typeof _this.props.onClickLocation === 'function') _this.props.onClickLocation(event, _this.props.locations[i]);

      if (_this.map) {
        _this.map.focus();
      }
    });

    _this.generatedId = shortid.generate();
    return _this;
  }
  /**
   * Get the LocationMap's HTML id. Generate a new one if no ID present.
   */


  _createClass(LocationMap, [{
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
    /**
     * Handles clicking of a location
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var labels = _objectSpread({}, defaultProps.labels, this.props.labels);

      return React.createElement("div", {
        id: this.getId(),
        className: classNames("slds-grid", {
          'slds-has-coordinates': this.props.locations
        }, this.props.classNameContainer)
      }, React.createElement("div", {
        className: "slds-map_container",
        style: {
          padding: '4px'
        }
      }, React.createElement("div", {
        className: classNames("slds-map", this.props.className),
        ref: function ref(map) {
          _this2.map = map;
        },
        tabIndex: 0 // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
        ,
        title: labels.title
      }, React.createElement("iframe", {
        id: "".concat(this.getId(), "-google-map"),
        src: "https://www.google.com/maps/embed/v1/place?key=".concat(this.props.googleAPIKey, "&q=").concat(encodeURIComponent(this.props.selection ? this.props.selection.address : this.props.defaultLocation.address)),
        title: labels.title
      }))), this.props.locations.length > 1 ? React.createElement("div", {
        className: "slds-coordinates"
      }, React.createElement("div", {
        className: "slds-coordinates__header"
      }, React.createElement("h2", {
        className: "slds-coordinates__title"
      }, "".concat(labels.title, " (").concat(this.props.locations.length, ")"))), React.createElement("ul", {
        className: "slds-coordinates__list"
      }, this.props.locations.map(function (location, i) {
        return React.createElement("li", {
          key: location.id,
          className: "slds-coordinates__item"
        }, React.createElement("span", {
          className: "slds-assistive-text",
          "aria-live": "polite"
        }, "".concat(location.name, " is currently selected")), React.createElement("button", {
          type: "button",
          onClick: function onClick(event) {
            return _this2.handleClick(event, i);
          },
          className: "slds-coordinates__item-action slds-button_reset slds-media",
          "aria-pressed": _this2.props.selection && _this2.props.selection.id === location.id
        }, React.createElement("span", {
          className: "slds-media__figure"
        }, React.createElement(Icon, {
          category: "standard",
          name: "account"
        })), React.createElement("span", {
          className: "slds-media__body"
        }, React.createElement("span", {
          className: "slds-text-link"
        }, location.name), React.createElement("span", null, location.address))));
      }))) : null);
    }
  }]);

  return LocationMap;
}(React.Component);

LocationMap.displayName = displayName;
LocationMap.propTypes = propTypes;
export default LocationMap;
//# sourceMappingURL=index.js.map