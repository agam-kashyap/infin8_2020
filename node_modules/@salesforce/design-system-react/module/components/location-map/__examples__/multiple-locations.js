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

import React from 'react';
import IconSettings from "../../../../components/icon-settings";
import LocationMap from "../../../../components/location-map";
import Button from "../../../../components/button";
import Modal from "../../../../components/modal";
import log from "../../../../utilities/log";
var locations = [{
  id: '1',
  name: 'Worldwide Corporate Headquarters',
  address: 'The Landmark @ One Market, San Francisco, CA'
}, {
  id: '2',
  name: 'salesforce.com inc Atlanta',
  address: '950 East Paces Ferry Road NE, Atlanta, GA'
}, {
  id: '3',
  name: 'salesforce.com inc Bellevue',
  address: '929 108th Ave NE, Bellevue, WA'
}, {
  id: '4',
  name: 'salesforce.com inc Boston',
  address: '500 Boylston Street 19th Floor, Boston, MA'
}, {
  id: '5',
  name: 'salesforce.com inc Chicago',
  address: '111 West Illinois Street, Chicago, IL'
}, {
  id: '6',
  name: 'salesforce.com inc Herndon',
  address: '2550 Wasser Terrace, Herndon, VA'
}, {
  id: '7',
  name: 'salesforce.com inc Hillsboro',
  address: '2035 NE Cornelius Pass Road, Hillsboro, OR'
}, {
  id: '8',
  name: 'salesforce.com inc Indy',
  address: '111 Monument Circle, Indianapolis, IN'
}, {
  id: '9',
  name: 'salesforce.com inc Irvine',
  address: '300 Spectrum Center Drive, Irvine, CA'
}];

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));
    _this.state = {
      selection: _this.props.selection || undefined
    };
    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var locationMap = React.createElement(LocationMap, {
        defaultLocation: locations[0],
        id: "location-map-multiple-locations-example",
        googleAPIKey: "AIzaSyDliLquGXGts9S8YtkWVolSQEJdBL1ZuWc",
        labels: {
          title: 'Salesforce Locations In United States'
        },
        locations: locations,
        onClickLocation: function onClickLocation(event, data) {
          log({
            action: _this2.props.action,
            event: event,
            eventName: 'Location is selected',
            data: data
          });

          _this2.setState({
            selection: data
          });
        },
        selection: this.state.selection
      });
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, this.props.isModal ? React.createElement(Modal, {
        isOpen: true,
        size: "medium",
        heading: "Salesforce Locations In United States (9)",
        footer: React.createElement(Button, {
          title: "Go to Google Maps",
          label: "Go to Google Maps",
          variant: "brand"
        })
      }, locationMap) : React.createElement(React.Fragment, null, locationMap));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'LocationMapExampleMultipleLocations');

export default Example;
//# sourceMappingURL=multiple-locations.js.map