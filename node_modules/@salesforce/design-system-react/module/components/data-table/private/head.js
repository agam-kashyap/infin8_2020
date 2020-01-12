function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ## Children

import CellFixed from './cell-fixed';
import Checkbox from '../../checkbox';
import HeaderCell from './header-cell'; // ## Constants

import { DATA_TABLE_HEAD } from '../../../utilities/constants';
/**
 * Used internally, provides header row rendering to the DataTable.
 */

var DataTableHead =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DataTableHead, _React$Component);

  function DataTableHead() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DataTableHead);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DataTableHead)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getActionsHeader", function () {
      var fixedHeader = _this.props.fixedHeader;

      var getContent = function getContent(style) {
        return React.createElement("div", {
          className: "slds-th__action",
          style: style
        }, React.createElement("span", {
          className: "slds-assistive-text"
        }, _this.props.assistiveText.actionsHeader));
      };

      var actionsHeader = null;

      if (_this.props.showRowActions) {
        actionsHeader = React.createElement("th", {
          ref: function ref(_ref) {
            if (_this.props.headerRefs) {
              _this.props.headerRefs(_ref, 'action');
            }
          },
          scope: "col",
          style: {
            height: fixedHeader ? 0 : null,
            lineHeight: fixedHeader ? 0 : null,
            width: '3.25rem'
          }
        }, getContent(fixedHeader ? {
          height: 0,
          overflow: 'hidden',
          paddingBottom: 0,
          paddingTop: 0,
          visibility: 'hidden'
        } : null), fixedHeader ? React.createElement(CellFixed, null, getContent({
          lineHeight: 1,
          width: '100%'
        })) : null);
      }

      return actionsHeader;
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectHeader", function () {
      var _this$props = _this.props,
          canSelectRows = _this$props.canSelectRows,
          fixedHeader = _this$props.fixedHeader;

      var getContent = function getContent(idSuffix, style, ariaHidden) {
        var render = null;

        if (canSelectRows === 'radio') {
          render = React.createElement("div", {
            className: "slds-truncate slds-assistive-text",
            id: "".concat(_this.props.id, "-column-group-header-row-select"),
            title: _this.props.assistiveText.selectRowGroup
          }, _this.props.assistiveText.selectRowGroup);
        } else if (canSelectRows === true || canSelectRows === 'checkbox') {
          render = React.createElement("div", {
            className: "slds-th__action slds-th__action_form",
            "aria-hidden": ariaHidden && true,
            style: style
          }, !ariaHidden ? React.createElement("span", {
            id: "".concat(_this.props.id, "-column-group-header-row-select"),
            className: "slds-assistive-text"
          }, _this.props.assistiveText.selectAllRows) : null, React.createElement(Checkbox, {
            assistiveText: {
              label: _this.props.assistiveText.selectAllRows
            },
            checked: _this.props.allSelected,
            indeterminate: _this.props.indeterminateSelected,
            id: "".concat(_this.props.id, "-").concat(idSuffix) // There is a checkbox for user interaction and a checkbox for positioning. ariaHidden is for the checkbox for positioning and it should be removed from the accessibility tree.
            ,
            name: !ariaHidden ? 'SelectAll' : undefined,
            onChange: _this.props.onToggleAll
          }));
        }

        return render;
      };

      var selectHeader = null;

      if (canSelectRows) {
        selectHeader = React.createElement("th", {
          className: "slds-text-align_right",
          ref: function ref(_ref2) {
            if (_this.props.headerRefs) {
              _this.props.headerRefs(_ref2, 'select');
            }
          },
          scope: "col",
          style: {
            height: fixedHeader ? 0 : null,
            lineHeight: fixedHeader ? 0 : null,
            width: '3.25rem'
          }
        }, getContent('SelectAll-fixed-header', fixedHeader ? {
          display: 'flex',
          height: 0,
          overflow: 'hidden',
          paddingBottom: 0,
          paddingTop: 0,
          visibility: 'hidden'
        } : null, fixedHeader && 'ariaHidden'), fixedHeader ? React.createElement(CellFixed, null, getContent('SelectAll', {
          display: 'flex',
          justifyContent: 'flex-end',
          lineHeight: 1,
          width: '100%'
        })) : null);
      }

      return selectHeader;
    });

    return _this;
  }

  _createClass(DataTableHead, [{
    key: "render",
    // ### Render
    value: function render() {
      var _this2 = this;

      var actionsHeader = this.getActionsHeader();
      var selectHeader = this.getSelectHeader();
      return React.createElement("thead", null, React.createElement("tr", {
        className: "slds-line-height_reset"
      }, selectHeader, this.props.columns.map(function (column, index) {
        return React.createElement(HeaderCell, _extends({
          assistiveText: _this2.props.assistiveText,
          cellRef: function cellRef(ref) {
            if (_this2.props.headerRefs) {
              _this2.props.headerRefs(ref, index);
            }
          },
          fixedHeader: _this2.props.fixedHeader,
          id: "".concat(_this2.props.id, "-").concat(column.props.property),
          key: "".concat(_this2.props.id, "-").concat(column.props.property),
          onSort: _this2.props.onSort
        }, column.props));
      }), actionsHeader));
    }
  }]);

  return DataTableHead;
}(React.Component);

_defineProperty(DataTableHead, "displayName", DATA_TABLE_HEAD);

_defineProperty(DataTableHead, "propTypes", {
  assistiveText: PropTypes.shape({
    actionsHeader: PropTypes.string,
    columnSort: PropTypes.string,
    columnSortedAscending: PropTypes.string,
    columnSortedDescending: PropTypes.string,
    selectAllRows: PropTypes.string,
    selectRow: PropTypes.string
  }),
  allSelected: PropTypes.bool,
  headerRefs: PropTypes.func,
  indeterminateSelected: PropTypes.bool,
  canSelectRows: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['checkbox', 'radio'])]),
  columns: PropTypes.arrayOf(PropTypes.shape({
    Cell: PropTypes.func,
    props: PropTypes.object
  })),
  fixedHeader: PropTypes.bool,
  id: PropTypes.string,
  onToggleAll: PropTypes.func,
  onSort: PropTypes.func,
  showRowActions: PropTypes.bool
});

export default DataTableHead;
//# sourceMappingURL=head.js.map