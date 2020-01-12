function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import Button from "../../../../components/button"; // `~` is replaced with design-system-react at runtime

import Card from "../../../../components/card";
import CardEmpty from "../../../../components/card/empty";
import CardFilter from "../../../../components/card/filter";
import DataTable from "../../../../components/data-table";
import DataTableColumn from "../../../../components/data-table/column";
import Icon from "../../../../components/icon";
var sampleItems = [{
  id: '1',
  name: 'Cloudhub'
}, {
  id: '2',
  name: 'Cloudhub + Anypoint Connectors'
}, {
  id: '3',
  name: 'Cloud City'
}];

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
      items: sampleItems,
      isFiltering: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleFilterChange", function (event) {
      var filteredItems = sampleItems.filter(function (item) {
        return RegExp(event.target.value, 'i').test(item.name);
      });

      _this.setState({
        isFiltering: true,
        items: filteredItems
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteAllItems", function () {
      _this.setState({
        isFiltering: false,
        items: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleAddItem", function () {
      _this.setState({
        items: sampleItems
      });
    });

    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      var isEmpty = this.state.items.length === 0;
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement("div", {
        className: "slds-grid slds-grid_vertical"
      }, React.createElement(Card, {
        id: "ExampleCard",
        filter: (!isEmpty || this.state.isFiltering) && React.createElement(CardFilter, {
          onChange: this.handleFilterChange
        }),
        headerActions: !isEmpty && React.createElement(Button, {
          label: "Delete All Items",
          onClick: this.handleDeleteAllItems
        }),
        heading: "Releated Items",
        icon: React.createElement(Icon, {
          category: "standard",
          name: "document",
          size: "small"
        }),
        empty: isEmpty ? React.createElement(CardEmpty, {
          heading: "No Related Items"
        }, React.createElement(Button, {
          label: "Add Item",
          onClick: this.handleAddItem
        })) : null
      }, React.createElement(DataTable, {
        items: this.state.items,
        id: "DataTableExample-1"
      }, React.createElement(DataTableColumn, {
        label: "Opportunity Name",
        property: "name",
        truncate: true
      })))));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'CardExample');

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=related-list-with-table.js.map