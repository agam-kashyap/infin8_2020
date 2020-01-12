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

import React from 'react';
import IconSettings from "../../../../components/icon-settings";
import Panel from "../../../../components/panel"; // `~` is replaced with design-system-react at runtime

import PanelFilterGroup from "../../../../components/panel/filtering/group";
import PanelFilterList from "../../../../components/panel/filtering/list";
import PanelFilterListHeading from "../../../../components/panel/filtering/list-heading";
import Filter from "../../../../components/filter";
import Picklist from "../../../../components/menu-picklist";
var options = {
  'show-me': [{
    label: 'All Products',
    value: 'all-products'
  }, {
    label: 'All Wackamoles',
    value: 'all-Wackamoles'
  }],
  'created-date': [{
    label: 'equals THIS WEEK',
    value: 'this-week'
  }, {
    label: 'equals LAST WEEK',
    value: 'last-week'
  }],
  'list-price': [{
    label: 'greater than "500"',
    value: 'greater-than-500'
  }, {
    label: 'greater than "100"',
    value: 'greater-than-100'
  }]
};

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      modifiedPanel: false,
      'show-me': {
        selectedPicklistItem: options['show-me'][0],
        selectedItem: options['show-me'][0]
      },
      'created-date': {
        selectedPicklistItem: options['created-date'][0],
        selectedItem: options['created-date'][0],
        isActive: true
      },
      'list-price': {
        selectedPicklistItem: options['list-price'][0],
        selectedItem: options['list-price'][0],
        isActive: true
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChangePredicate", function (event, _ref) {
      var id = _ref.id;
      var idSuffix = id.split('sample-panel-filtering-')[1];

      _this.setState(_defineProperty({
        modifiedPanel: _this.state[idSuffix].selectedItem !== _this.state[idSuffix].selectedPicklistItem
      }, idSuffix, _objectSpread({}, _this.state[idSuffix], {
        selectedItem: _this.state[idSuffix].selectedPicklistItem
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectPicklist", function (selectedItem, id) {
      _this.setState(_defineProperty({}, id, _objectSpread({}, _this.state[id], {
        selectedPicklistItem: selectedItem
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "onRemove", function (event, _ref2) {
      var id = _ref2.id;
      var idSuffix = id.split('sample-panel-filtering-')[1];

      _this.setState(_defineProperty({}, idSuffix, _objectSpread({}, _this.state[idSuffix], {
        isActive: false
      })));
    });

    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var hasActiveFilters = this.state['created-date'].isActive || this.state['list-price'].isActive || this.state.new.isActive;
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(Panel, {
        variant: "filters"
      }, React.createElement(PanelFilterGroup, {
        errorLabel: "Filters could not be applied. Please fix the validation errors below.",
        modified: this.state.modifiedPanel,
        onClickAdd: function onClickAdd() {
          _this2.setState({
            modifiedPanel: true,
            new: {
              isActive: true,
              new: true
            }
          });
        },
        onClickRemoveAll: function onClickRemoveAll() {
          _this2.onRemove(null, {
            id: 'sample-panel-filtering-created-date'
          });

          _this2.onRemove(null, {
            id: 'sample-panel-filtering-list-price'
          });

          _this2.onRemove(null, {
            id: 'sample-panel-filtering-new'
          });
        },
        onRequestCancel: function onRequestCancel() {
          _this2.setState({
            modifiedPanel: false
          });
        },
        onRequestClose: function onRequestClose() {
          console.log('Request filtering panel to close');
        },
        onRequestSave: function onRequestSave() {
          _this2.setState({
            modifiedPanel: false
          });
        },
        variant: "panel"
      }, React.createElement(PanelFilterList, null, React.createElement(Filter, {
        id: "sample-panel-filtering-show-me",
        isPermanent: true,
        onChange: this.onChangePredicate,
        property: "Show Me",
        predicate: this.state['show-me'].selectedItem.label
      }, React.createElement(Picklist, {
        isInline: true,
        label: "Show Me",
        onSelect: function onSelect(selectedItem) {
          _this2.onSelectPicklist(selectedItem, 'show-me');
        },
        options: options['show-me'],
        placeholder: "Select record type",
        value: this.state['show-me'].selectedPicklistItem.value
      }))), hasActiveFilters ? React.createElement(PanelFilterListHeading, {
        label: "Matching all these filters"
      }) : null, hasActiveFilters ? React.createElement(PanelFilterList, null, this.state['created-date'].isActive ? React.createElement(Filter, {
        id: "sample-panel-filtering-created-date",
        onChange: this.onChangePredicate,
        onRemove: this.onRemove,
        predicate: this.state['created-date'].selectedItem.label,
        property: "Created Date"
      }, React.createElement(Picklist, {
        isInline: true,
        label: "Created Date EQUALS",
        onSelect: function onSelect(selectedItem) {
          _this2.onSelectPicklist(selectedItem, 'created-date');
        },
        options: options['created-date'],
        placeholder: "Select a time range",
        value: this.state['created-date'].selectedPicklistItem.value
      })) : null, this.state['list-price'].isActive ? React.createElement(Filter, {
        id: "sample-panel-filtering-list-price",
        onChange: this.onChangePredicate,
        onRemove: this.onRemove,
        predicate: this.state['list-price'].selectedItem.label,
        property: "List Price"
      }, React.createElement(Picklist, {
        isInline: true,
        label: "List Price",
        onSelect: function onSelect(selectedItem) {
          _this2.onSelectPicklist(selectedItem, 'list-price');
        },
        options: options['list-price'],
        placeholder: "Select a price",
        value: this.state['list-price'].selectedPicklistItem.value
      })) : null, React.createElement(Filter, {
        errorLabel: "Error Message",
        id: "sample-panel-filtering-error",
        predicate: 'equals "Red"',
        property: "Stage"
      })) : null)));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'PanelExample');

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=filtering-error.js.map