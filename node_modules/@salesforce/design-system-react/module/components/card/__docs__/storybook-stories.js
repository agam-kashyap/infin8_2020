function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconSettings from '../../icon-settings';
import { CARD } from '../../../utilities/constants';
import Button from '../../button';
import Card from '../../card';
import CardEmpty from '../../card/empty';
import CardFilter from '../../card/filter';
import DataTable from '../../data-table';
import DataTableColumn from '../../data-table/column';
import DataTableHighlightCell from '../../data-table/highlight-cell';
import Icon from '../../icon';
import MediaObject from '../../media-object';
import InlineEdit from '../../forms/input/inline';
import RelatedListWithTable from '../__examples__/related-list-with-table';
var sampleItems = [{
  id: '0',
  name: 'Cloudhub'
}, {
  id: '1',
  name: 'Cloudhub + Anypoint Connectors'
}, {
  id: '2',
  name: 'Cloud City'
}];
var currentId = 3;

var DemoCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DemoCard, _React$Component);

  function DemoCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DemoCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DemoCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      filter: null,
      items: _this.props.items
    });

    _defineProperty(_assertThisInitialized(_this), "handleFilterChange", function (event) {
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      action('filter').apply(void 0, [event].concat(rest));
      var filter = event.target.value !== '' ? RegExp(event.target.value, 'i') : null;

      _this.setState({
        filter: filter
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteAllItems", function () {
      action('delete all').apply(void 0, arguments);

      _this.setState({
        filter: null,
        items: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleAddItem", function () {
      action('add').apply(void 0, arguments);

      _this.setState({
        items: [// eslint-disable-next-line no-plusplus
        {
          id: currentId++,
          name: "New item #".concat(shortid.generate())
        }].concat(_toConsumableArray(_this.state.items))
      });
    });

    return _this;
  }

  _createClass(DemoCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.state.items;

      if (this.state.filter) {
        items = items.filter(function (item) {
          return _this2.state.filter.test(item.name);
        });
      }

      var isEmpty = items.length === 0;
      var heading = this.props.heading;

      if (!this.props.heading) {
        heading = items.length > 0 ? "Related Items (".concat(items.length, ")") : 'Related Items';
      }

      return React.createElement("div", {
        className: "slds-grid slds-grid_vertical"
      }, React.createElement(Card, {
        id: "ExampleCard",
        filter: !isEmpty || this.state.filter ? React.createElement(CardFilter, {
          onChange: this.handleFilterChange
        }) : null,
        header: this.props.header,
        headerActions: !isEmpty ? React.createElement(Button, {
          label: "Delete All Items",
          onClick: this.handleDeleteAllItems
        }) : React.createElement(Button, {
          label: "New",
          onClick: this.handleAddItem
        }),
        footer: "Card Footer",
        heading: heading,
        icon: React.createElement(Icon, {
          category: "standard",
          name: "document",
          size: "small"
        }),
        empty: isEmpty ? React.createElement(CardEmpty, {
          heading: "No Related Items"
        }) : null
      }, React.createElement(DataTable, {
        id: "SLDSDataTableExample-1",
        items: items
      }, React.createElement(DataTableColumn, {
        label: "Opportunity Name",
        property: "name",
        truncate: true
      }, React.createElement(DataTableHighlightCell, {
        search: this.state.filter
      })))));
    }
  }]);

  return DemoCard;
}(React.Component);

_defineProperty(DemoCard, "displayName", 'DemoCard');

_defineProperty(DemoCard, "propTypes", {
  items: PropTypes.array,
  header: PropTypes.node,
  heading: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
});

var SetHeightCard = function SetHeightCard() {
  return React.createElement(Card, {
    bodyClassName: "slds-grow slds-scrollable_y",
    className: "slds-grid slds-grid_vertical",
    footer: React.createElement("a", {
      href: "javascript:void(0);"
    }, "Footer text") // eslint-disable-line no-script-url
    ,
    heading: "Card with set height",
    icon: React.createElement(Icon, {
      category: "standard",
      name: "document",
      size: "small"
    }),
    style: {
      height: '300px'
    }
  }, React.createElement("div", {
    className: "slds-card__body_inner"
  }, React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf"), React.createElement("div", null, "asdf")));
};

SetHeightCard.displayName = 'SET_HEIGHT_CARD';

var DemoCardWithoutHeader = function DemoCardWithoutHeader() {
  return React.createElement(Card, {
    bodyClassName: "slds-grow slds-scrollable_y",
    className: "slds-grid slds-grid_vertical",
    footer: React.createElement("a", {
      href: "javascript:void(0);"
    }, "Footer text") // eslint-disable-line no-script-url
    ,
    hasNoHeader: true,
    icon: React.createElement(Icon, {
      category: "standard",
      name: "document",
      size: "small"
    }),
    style: {
      height: '300px'
    }
  }, React.createElement(DataTable, {
    id: "SLDSDataTableExample-1",
    items: sampleItems
  }, React.createElement(DataTableColumn, {
    label: "Opportunity Name",
    property: "name",
    truncate: true
  }, React.createElement(DataTableHighlightCell, null))));
};

DemoCardWithoutHeader.displayName = 'CARD_WITHOUT_HEADER';
storiesOf(CARD, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('w/ Items', function () {
  return React.createElement(DemoCard, {
    items: sampleItems
  });
}).add('Empty', function () {
  return React.createElement(DemoCard, {
    items: []
  });
}).add('Custom Header', function () {
  return React.createElement(DemoCard, {
    header: React.createElement(MediaObject, {
      body: React.createElement(InlineEdit, {
        className: "slds-text-heading_small slds-truncate",
        name: "inline-edit-standard",
        value: "Write your own heading",
        id: "inline-edit-standard",
        silenceDeprecationWarning: true
      })
    }),
    items: sampleItems
  });
}).add('Custom Heading', function () {
  return React.createElement(DemoCard, {
    items: sampleItems,
    heading: React.createElement("span", {
      style: {
        color: 'red'
      }
    }, "To Wanda! This is custom!")
  });
}).add('Set height card', function () {
  return React.createElement(SetHeightCard, null);
}).add('w/o Header', function () {
  return React.createElement(DemoCardWithoutHeader, null);
}).add('Doc site Related List With Table', function () {
  return React.createElement(RelatedListWithTable, null);
});
//# sourceMappingURL=storybook-stories.js.map