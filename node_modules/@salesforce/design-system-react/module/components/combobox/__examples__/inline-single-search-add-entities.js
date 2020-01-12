function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-console, react/prop-types */
import React from 'react';
import Combobox from "../../../../components/combobox";
import Icon from "../../../../components/icon";
import comboboxFilterAndLimit from "../../../../components/combobox/filter";
import IconSettings from "../../../../components/icon-settings";
var accounts = [{
  id: '1',
  label: 'Acme',
  subTitle: 'Account • San Francisco',
  type: 'account'
}, {
  id: '2',
  label: 'Salesforce.com, Inc.',
  subTitle: 'Account • San Francisco',
  type: 'account'
}, {
  id: '3',
  label: "Paddy's Pub",
  subTitle: 'Account • Boston, MA',
  type: 'account'
}, {
  id: '4',
  label: 'Tyrell Corp',
  subTitle: 'Account • San Francisco, CA',
  type: 'account'
}];
var accountsWithIcon = accounts.map(function (elem) {
  return _objectSpread({}, elem, {
    icon: React.createElement(Icon, {
      assistiveText: {
        label: 'Account'
      },
      category: "standard",
      name: elem.type
    })
  });
});

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "delayOptionsLoad", function () {
      // A promise should be used here for asynchronous callbacks
      setTimeout(function () {
        _this.setState({
          isLoadingMenuItems: false
        });
      }, 1000);
    });

    _this.state = {
      inputValue: '',
      isLoadingMenuItems: false,
      selection: []
    };
    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(Combobox, _extends({
        id: "combobox-unique-id",
        hasInputSpinner: this.state.isLoadingMenuItems,
        optionsSearchEntity: [{
          id: 'options-search-id-1',
          icon: React.createElement(Icon, {
            assistiveText: {
              label: 'Search'
            },
            size: "x-small",
            category: "utility",
            name: "search"
          }),
          label: 'Search in Salesforce'
        }, {
          id: 'search-in-account-id',
          icon: React.createElement(Icon, {
            assistiveText: {
              label: 'Search in Accounts'
            },
            size: "x-small",
            category: "utility",
            name: "search"
          }),
          label: function label(searchTerm) {
            return [searchTerm && searchTerm.length > 0 ? React.createElement("span", {
              className: "slds-text-title_bold"
            }, "\"".concat(searchTerm, "\" ")) : 'Search ', 'in Accounts'];
          }
        }],
        optionsAddItem: [{
          id: 'options-add-id-1',
          icon: React.createElement(Icon, {
            assistiveText: {
              label: 'Add'
            },
            category: "utility",
            size: "x-small",
            name: "add"
          }),
          label: 'New Entity'
        }],
        events: {
          onChange: function onChange(event, _ref) {
            var value = _ref.value;

            if (_this2.props.action) {
              _this2.props.action('onChange')(event, value);
            } else if (console) {
              console.log('onChange', event, value);
            }

            _this2.setState({
              inputValue: value,
              isLoadingMenuItems: true
            });

            _this2.delayOptionsLoad();
          },
          onRequestRemoveSelectedOption: function onRequestRemoveSelectedOption(event, data) {
            _this2.setState({
              inputValue: '',
              selection: data.selection
            });
          },
          onSubmit: function onSubmit(event, _ref2) {
            var value = _ref2.value;

            if (_this2.props.action) {
              _this2.props.action('onChange')(event, value);
            } else if (console) {
              console.log('onChange', event, value);
            }

            _this2.setState({
              inputValue: ''
            });
          },
          onSelect: function onSelect(event, data) {
            if (_this2.props.action) {
              _this2.props.action('onSelect').apply(void 0, [event].concat(_toConsumableArray(Object.keys(data).map(function (key) {
                return data[key];
              }))));
            } else if (console) {
              console.log('onSelect', event, data);
            }

            _this2.setState({
              inputValue: ''
            });
          }
        },
        labels: {
          label: 'Search',
          placeholder: 'Search Salesforce'
        },
        options: this.state.isLoadingMenuItems ? [] : comboboxFilterAndLimit({
          inputValue: this.state.inputValue,
          options: accountsWithIcon,
          selection: this.state.selection
        }),
        selection: this.state.selection,
        value: this.state.selectedOption ? this.state.selectedOption.label : this.state.inputValue,
        variant: "inline-listbox"
      }, this.props)));
    }
  }]);

  return Example;
}(React.Component);

Example.displayName = 'ComboboxExample';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=inline-single-search-add-entities.js.map