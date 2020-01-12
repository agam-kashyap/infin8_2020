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
import EditDialog from "../../../../components/popover/edit-dialog"; // `~` is replaced with design-system-react at runtime

import Input from "../../../../components/input"; // `~` is replaced with design-system-react at runtime

import Tooltip from "../../../../components/tooltip"; // `~` is replaced with design-system-react at runtime

import Button from "../../../../components/button";
import BuilderHeader from "../../../../components/builder-header";
import BuilderHeaderNav from "../../../../components/builder-header/nav";
import BuilderHeaderNavDropdown from "../../../../components/builder-header/nav-dropdown";
import BuilderHeaderNavLink from "../../../../components/builder-header/nav-link";
import BuilderHeaderMisc from "../../../../components/builder-header/misc";
var DEFAULT_PAGE_TYPE = 'Page Type';
var DEFAULT_ERROR_TEXT = '';

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (inputName) {
      return function (event, _ref) {
        var value = _ref.value;

        _this.setState({
          pageType: value
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (event, data) {
      if (_this.props.log) {
        _this.props.log('onClose')(event, data);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRequestClose", function (event, data) {
      if (_this.props.log) {
        _this.props.log('handleRequestClose');
      }

      _this.setState({
        isOpen: false,
        pageType: _this.state.prevPageType,
        errorText: DEFAULT_ERROR_TEXT
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSave", function (event, data) {
      if (_this.state.pageType.length === 0) {
        _this.setState({
          errorText: 'Required field.'
        });
      } else if (_this.state.pageType.length > 255) {
        _this.setState({
          errorText: 'Shorten this value to 255 or fewer characters.'
        });
      } else {
        _this.setState({
          prevPageType: _this.state.pageType,
          isOpen: false,
          errorText: DEFAULT_ERROR_TEXT
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpen", function () {
      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnter", function () {
      _this.setState({
        opacity: 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onOpen", function () {
      if (_this.inputRef) {
        _this.inputRef.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setInputRef", function (inputRef) {
      _this.inputRef = inputRef;
    });

    _this.state = {
      isOpen: _this.props.isOpen,
      pageType: DEFAULT_PAGE_TYPE,
      // stores pageType in edit input field
      prevPageType: DEFAULT_PAGE_TYPE,
      errorText: DEFAULT_ERROR_TEXT
    };
    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      // Body of Edit Dialog that is shown when clicking on edit button (pencil icon)
      var editDialogPopoverBody = React.createElement("div", {
        className: "slds-form slds-form_stacked slds-p-top_medium slds-p-right_small slds-p-left_small"
      }, React.createElement(Input, {
        id: "page-type",
        inputRef: this.setInputRef,
        label: "Page Type",
        value: this.state.pageType,
        onChange: this.onChange('page-type'),
        required: true,
        errorText: this.state.errorText
      }));
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(BuilderHeader, {
        assistiveText: {
          icon: 'Builder',
          backIcon: 'Back',
          helpIcon: 'Help'
        },
        labels: {
          back: 'Back',
          help: 'Help',
          pageType: '',
          title: 'App Name'
        },
        style: {
          position: 'relative'
        }
      }, React.createElement(BuilderHeaderNav, null, React.createElement(BuilderHeaderNavLink, {
        assistiveText: {
          label: 'Link'
        },
        iconCategory: "utility",
        iconName: "settings",
        label: "Link"
      }), React.createElement(BuilderHeaderNavDropdown, {
        assistiveText: {
          icon: 'Dropdown'
        },
        iconCategory: "utility",
        iconName: "page",
        id: "dropdown",
        label: "Dropdown",
        options: [{
          label: 'Menu Item One',
          value: 'A0'
        }, {
          label: 'Menu Item Two',
          value: 'B0'
        }]
      })), React.createElement(BuilderHeaderMisc, null, React.createElement("div", {
        style: {
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }
      }, React.createElement("span", {
        className: "slds-p-right_x-small slds-truncate",
        style: {
          display: 'inline-block'
        }
      }, this.state.prevPageType), React.createElement(EditDialog, {
        ariaLabelledby: "Edit Name",
        body: editDialogPopoverBody,
        isModified: this.state.pageType !== this.state.prevPageType,
        onCancel: this.handleRequestClose,
        onClose: this.handleClose,
        onRequestClose: this.handleRequestClose,
        onSave: this.handleSave,
        handleOpen: this.handleOpen,
        onOpen: this.onOpen,
        position: "absolute",
        align: "top left",
        id: "edit-dialog-popover",
        isOpen: this.state.isOpen,
        style: {
          color: 'initial'
        },
        labels: {
          save: 'Done'
        }
      }, React.createElement(Tooltip, {
        id: "page-type-tooltip",
        align: "bottom",
        content: "Edit Page Type"
      }, React.createElement(Button, {
        assistiveText: {
          icon: 'Edit: Status'
        },
        className: "slds-button_reset",
        iconCategory: "utility",
        iconName: "edit",
        inverse: true,
        onClick: this.handleOpen,
        variant: "icon",
        style: {
          verticalAlign: 'middle'
        },
        onMouseEnter: this.handleEnter
      }))))), React.createElement(BuilderHeaderMisc, null, React.createElement("div", {
        style: {
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }
      }, React.createElement("span", {
        className: "slds-p-right_x-small slds-truncate",
        style: {
          display: 'inline-block'
        }
      }, this.state.prevPageType), React.createElement(EditDialog, {
        ariaLabelledby: "Edit Name",
        body: editDialogPopoverBody,
        isModified: this.state.pageType !== this.state.prevPageType,
        onCancel: this.handleRequestClose,
        onClose: this.handleClose,
        onRequestClose: this.handleRequestClose,
        onSave: this.handleSave,
        handleOpen: this.handleOpen,
        onOpen: this.onOpen,
        position: "absolute",
        align: "top left",
        id: "edit-dialog-popover",
        isOpen: this.state.isOpen,
        style: {
          color: 'initial'
        },
        labels: {
          save: 'Done'
        }
      }, React.createElement(Tooltip, {
        id: "page-type-tooltip",
        align: "bottom",
        content: "Edit Page Type"
      }, React.createElement(Button, {
        assistiveText: {
          icon: 'Edit: Status'
        },
        className: "slds-button_reset",
        iconCategory: "utility",
        iconName: "edit",
        inverse: true,
        onClick: this.handleOpen,
        variant: "icon",
        style: {
          verticalAlign: 'middle'
        },
        onMouseEnter: this.handleEnter
      })))))));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'PopoverExample');

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=base-with-page-type-editable.js.map