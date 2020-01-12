function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable max-lines */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import chai, { expect } from 'chai';
import Dropdown from '../../menu-dropdown';
import DataTable from '../../data-table';
import DataTableColumn from '../../data-table/column';
import DataTableRowActions from '../../data-table/row-actions';
import DataTableHighlightCell from '../../data-table/highlight-cell';
import IconSettings from '../../icon-settings';
chai.should();
var Simulate = TestUtils.Simulate,
    scryRenderedComponentsWithType = TestUtils.scryRenderedComponentsWithType,
    findRenderedDOMComponentWithClass = TestUtils.findRenderedDOMComponentWithClass;
describe('DataTable: ', function describeFunction() {
  var items = [{
    id: '8IKZHZZV80',
    name: 'Cloudhub',
    count: 100976,
    lastModified: 'Yesterday'
  }, {
    id: '5GJOOOPWU7',
    name: 'Cloudhub + Anypoint Connectors',
    count: 54976,
    lastModified: 'Today'
  }, {
    id: 'Q8Z71ZUCEZ',
    name: 'Cloud City',
    count: 101280,
    lastModified: 'Today'
  }, {
    id: '2FSH2DP0LY',
    name: 'IoT',
    count: 976,
    lastModified: 'Yesterday'
  }, {
    id: '8NE888QKV1',
    name: 'IoT + Anypoint Connectors',
    count: 54976,
    lastModified: 'Today'
  }, {
    id: 'M4D37GW83H',
    name: 'Salesforce Tower',
    count: 101280,
    lastModified: 'Today'
  }];
  var columns = [{
    label: 'Name',
    property: 'name',
    truncate: true
  }, {
    label: 'Count',
    property: 'count',
    sortable: true
  }];
  var defaultProps = {
    id: 'DataTableExample-default',
    items: items,
    selectRows: true
  };

  var renderTable = function renderTable(instance) {
    return function renderTableFunction() {
      this.dom = document.createElement('div');
      document.body.appendChild(this.dom);
      /* deepscan-disable REACT_ASYNC_RENDER_RETURN_VALUE */

      this.component = ReactDOM.render(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, instance), this.dom);
      /* deepscan-enable REACT_ASYNC_RENDER_RETURN_VALUE */
    };
  };

  function removeTable() {
    ReactDOM.unmountComponentAtNode(this.dom);
    document.body.removeChild(this.dom);
  }

  var getTable = function getTable(dom) {
    return dom.querySelector('.slds-table');
  };

  var getRow = function getRow(dom, row) {
    var tbody = getTable(dom).querySelectorAll('tbody')[0];
    return tbody.querySelectorAll('tr')[row - 1];
  };

  var getCell = function getCell(dom, row, column) {
    var tr = getRow(dom, row);
    return tr.querySelectorAll('td')[column];
  };

  var getMenu = function getMenu(dom) {
    return dom.querySelector('.slds-dropdown');
  };

  describe('Structure', function describeFunction2() {
    beforeEach(renderTable(React.createElement(DataTable, defaultProps, columns.map(function (columnProps) {
      return React.createElement(DataTableColumn, _extends({}, columnProps, {
        key: columnProps.property
      }));
    }))));
    afterEach(removeTable);
    it('has a header', function () {
      var thead = getTable(this.dom).querySelectorAll('thead');
      thead.should.have.length(1);
      thead[0].querySelectorAll('th').should.have.length(3);
    });
    it('has a row for each item', function () {
      var tbody = getTable(this.dom).querySelectorAll('tbody');
      tbody.should.have.length(1);
      tbody[0].querySelectorAll('tr').should.have.length(6);
    });
    it('renders the correct contents in each cell', function () {
      var firstName = getCell(this.dom, 1, 1);
      firstName.innerHTML.should.equal('<div class="" title="Cloudhub">Cloudhub</div>');
      var secondCount = getCell(this.dom, 2, 2);
      secondCount.innerHTML.should.equal('<div class="" title="54976">54976</div>');
    });
    it('has checkboxes when selectRows is true or "checkbox"', function () {
      var checkboxes = getTable(this.dom).querySelectorAll('.slds-checkbox');
      checkboxes.should.have.length(7);
      removeTable.call(this);
      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        selectRows: false
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      checkboxes = getTable(this.dom).querySelectorAll('.slds-checkbox');
      checkboxes.should.have.length(0);
      removeTable.call(this);
      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        selectRows: "checkbox"
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      checkboxes = getTable(this.dom).querySelectorAll('.slds-checkbox');
      checkboxes.should.have.length(7);
    });
    it('has radios only when selectRows is "radio"', function () {
      var checkboxes = getTable(this.dom).querySelectorAll('.slds-checkbox');
      checkboxes.should.have.length(7);
      removeTable.call(this);
      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        selectRows: "radio"
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      var radios = getTable(this.dom).querySelectorAll('.slds-radio');
      radios.should.have.length(6);
    });
  });
  describe('Selectable - Checkbox', function describeFunction2() {
    var defaultSelection = [{
      id: '8IKZHZZV80',
      name: 'Cloudhub',
      count: 100976,
      lastModified: 'Yesterday'
    }];
    afterEach(removeTable);
    it('can start with a row selected', function () {
      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        selection: defaultSelection
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      var tbody = getTable(this.dom).querySelectorAll('tbody')[0];
      var selectedRows = tbody.querySelectorAll('tr.slds-is-selected');
      selectedRows.should.have.length(1);
      var checkedBoxes = tbody.querySelectorAll('.slds-checkbox input:checked');
      checkedBoxes.should.have.length(1);
    });
    it('can deselect a row', function (done) {
      this.onRowChange = function (event, _ref) {
        var selection = _ref.selection;
        selection.should.have.length(0);
        done();
      };

      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        selection: defaultSelection,
        onRowChange: this.onRowChange
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      var tbody = getTable(this.dom).querySelectorAll('tbody')[0];
      var selectedRow = tbody.querySelectorAll('tr.slds-is-selected')[0];
      var checkbox = selectedRow.querySelectorAll('.slds-checkbox input')[0];
      Simulate.change(checkbox, {
        target: {
          checked: false
        }
      });
    });
    it('can select a row', function (done) {
      this.onRowChange = function (event, _ref2) {
        var selection = _ref2.selection;
        selection.should.have.length(2);
        selection[1].id.should.equal('5GJOOOPWU7');
        done();
      };

      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        selection: defaultSelection,
        onRowChange: this.onRowChange
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      var secondRow = getRow(this.dom, 2);
      var checkbox = secondRow.querySelectorAll('.slds-checkbox input')[0];
      Simulate.change(checkbox, {
        target: {
          checked: true
        }
      });
    });
    it('can select all rows', function (done) {
      this.onRowChange = function (event, _ref3) {
        var selection = _ref3.selection;
        selection.should.have.length(6);
        done();
      };

      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        onRowChange: this.onRowChange
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      var thead = getTable(this.dom).querySelectorAll('thead')[0];
      var checkAll = thead.querySelectorAll('.slds-checkbox input')[0];
      Simulate.change(checkAll, {
        target: {
          checked: true
        }
      });
    });
    it('can deselect all rows', function (done) {
      this.onRowChange = function (event, _ref4) {
        var selection = _ref4.selection;
        selection.should.have.length(0);
        done();
      };

      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        selection: items,
        onRowChange: this.onRowChange
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      var thead = getTable(this.dom).querySelectorAll('thead')[0];
      var checkAll = thead.querySelectorAll('.slds-checkbox input')[0];
      Simulate.change(checkAll, {
        target: {
          checked: false
        }
      });
    });
  });
  describe('Selectable - Radio', function describeFunction2() {
    var defaultSelection = [{
      id: '8IKZHZZV80',
      name: 'Cloudhub',
      count: 100976,
      lastModified: 'Yesterday'
    }];
    afterEach(removeTable);
    it('can start with a row selected', function () {
      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        selection: defaultSelection,
        selectRows: "radio"
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      var tbody = getTable(this.dom).querySelectorAll('tbody')[0];
      var selectedRows = tbody.querySelectorAll('tr.slds-is-selected');
      selectedRows.should.have.length(1);
      var radios = tbody.querySelectorAll('.slds-radio input:checked');
      radios.should.have.length(1);
    });
    it('can select a row', function (done) {
      this.onRowChange = function (event, _ref5) {
        var selection = _ref5.selection;
        selection.should.have.length(1);
        selection[0].id.should.equal('5GJOOOPWU7');
        done();
      };

      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        selection: defaultSelection,
        selectRows: "radio",
        onRowChange: this.onRowChange
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      var secondRow = getRow(this.dom, 2);
      var radio = secondRow.querySelectorAll('.slds-radio input')[0];
      Simulate.change(radio, {
        target: {
          checked: true
        }
      });
    });
  });
  describe('Sortable', function describeFunction2() {
    afterEach(removeTable);
    it('first clicked on sortable column header should result in ascending sort by default', function (done) {
      this.onSort = function (data) {
        data.property.should.equal('count');
        data.sortDirection.should.equal('asc');
        done();
      };

      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        fixedLayout: true,
        onSort: this.onSort
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      var thead = getTable(this.dom).querySelectorAll('thead')[0];
      var sortButton = thead.querySelectorAll('a')[0];
      Simulate.click(sortButton, {});
    });
    it('if isDefaultSortDescending is true, first click on sortable column header should result in descending order', function (done) {
      this.onSort = function (data) {
        data.property.should.equal('count');
        data.sortDirection.should.equal('desc');
        done();
      };

      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        fixedLayout: true,
        onSort: this.onSort
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          isDefaultSortDescending: true,
          key: columnProps.property
        }));
      }))).call(this);
      var thead = getTable(this.dom).querySelectorAll('thead')[0];
      var sortButton = thead.querySelectorAll('a')[0];
      Simulate.click(sortButton, {});
    });
    it('does not call onSort when a non-sortable column is clicked', function (done) {
      this.onSort = function () {
        done('sort called');
      };

      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        onSort: this.onSort
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }))).call(this);
      var thead = getTable(this.dom).querySelectorAll('thead')[0];
      var secondColumn = thead.querySelectorAll('th')[1];
      Simulate.click(secondColumn, {});
      setTimeout(done, 0);
    });
  });
  describe('w/ RowActions', function describeFunction2() {
    afterEach(removeTable);
    it('renders the RowActions and uses dropdown override property', function () {
      renderTable(React.createElement(DataTable, defaultProps, columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }), React.createElement(DataTableRowActions, {
        dropdown: React.createElement(Dropdown, {
          options: [{
            id: 0,
            label: 'Add to Group',
            value: '1'
          }, {
            id: 1,
            label: 'Publish',
            value: '2'
          }]
        })
      }))).call(this);
      var rowActionMenus = scryRenderedComponentsWithType(this.component, DataTableRowActions);
      rowActionMenus.should.have.length(6);
    });
    it('calls onAction & onSelect when an action is clicked', function (done) {
      var expectedCalbacks = 2;

      this.onAction = function (item, action) {
        item.id.should.equal('8IKZHZZV80');
        action.value.should.equal('1'); // eslint-disable-next-line no-plusplus

        if (! --expectedCalbacks) done();
      };

      this.onSelect = function (action) {
        action.value.should.equal('1'); // eslint-disable-next-line no-plusplus

        if (! --expectedCalbacks) done();
      };

      renderTable(React.createElement(DataTable, defaultProps, columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }));
      }), React.createElement(DataTableRowActions, {
        onAction: this.onAction,
        options: [{
          id: 0,
          label: 'Add to Group',
          value: '1'
        }, {
          id: 1,
          label: 'Publish',
          value: '2'
        }],
        dropdown: React.createElement(Dropdown, {
          onSelect: this.onSelect
        })
      }))).call(this);
      var rowActionMenu = scryRenderedComponentsWithType(this.component, DataTableRowActions)[0];
      var trigger = findRenderedDOMComponentWithClass(rowActionMenu, 'slds-button');
      Simulate.click(trigger, {});
      setTimeout(function () {
        var menu = getMenu(document.body);
        var firstAction = menu.querySelectorAll('.slds-dropdown__item')[0];
        Simulate.click(firstAction.querySelector('a'), {});
      }, 0);
    });
  });
  describe('w/ HighlightCell', function describeFunction2() {
    afterEach(removeTable);
    it('marks the appropriate text in a cell', function () {
      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        search: "Cloud"
      }), columns.map(function (columnProps) {
        return React.createElement(DataTableColumn, _extends({}, columnProps, {
          key: columnProps.property
        }), React.createElement(DataTableHighlightCell, null));
      }))).call(this);
      var secondRow = getRow(this.dom, 2);
      var markedText = secondRow.querySelectorAll('mark')[0];
      markedText.innerHTML.should.equal('Cloud');
    });
  });
  describe('w/ Fixed Headers', function describeFunction2() {
    afterEach(removeTable);
    it('Renders a fixedHeader table as expected', function () {
      renderTable(React.createElement(DataTable, _extends({}, defaultProps, {
        fixedHeader: true,
        fixedLayout: true,
        id: "DataTable-FixedHeader-Test",
        onFixedHeaderResize: function onFixedHeaderResize(event, data) {
          expect(Array.isArray(data.headerRefs)).to.eql(true);
          expect(data.headerRefs.length).to.eql(4);
          data.headerRefs.forEach(function (ref) {
            expect(_typeof(ref)).to.eql('object');
          });
          expect(_typeof(data.scrollerRef)).to.eql('object');
          expect(data.scrollerRef.className.search('slds-table_header-fixed_scroller') >= 0).to.eql(true);
        },
        onToggleFixedHeaderListeners: function onToggleFixedHeaderListeners(event, data) {
          expect(_typeof(data.attach)).to.eql('boolean');
          expect(_typeof(data.resizeHandler)).to.eql('function');
          expect(_typeof(data.scrollerRef)).to.eql('object');
          expect(data.scrollerRef.className.search('slds-table_header-fixed_scroller') >= 0).to.eql(true);
        },
        selectRows: "checkbox"
      }), React.createElement(DataTableColumn, {
        isSorted: true,
        label: "Name",
        primaryColumn: true,
        property: "name",
        sortable: true,
        sortDirection: "asc"
      }), React.createElement(DataTableColumn, {
        label: "Count",
        property: "count"
      }), React.createElement(DataTableRowActions, {
        options: [{
          id: 0,
          label: 'Add to Group',
          value: '1'
        }, {
          id: 1,
          label: 'Publish',
          value: '2'
        }],
        onAction: function onAction() {},
        dropdown: React.createElement(Dropdown, {
          length: "5"
        })
      }))).call(this);
      expect(this.dom.querySelectorAll('.slds-table_header-fixed_container').length).to.eql(1);
      expect(this.dom.querySelectorAll('.slds-table_header-fixed_scroller').length).to.eql(1);
      expect(this.dom.querySelector('table.slds-table').className.search('slds-table_header-fixed') >= 0).to.eql(true);
      expect(this.dom.querySelectorAll('thead .slds-cell-fixed').length).to.eql(4);
    });
  });
});
//# sourceMappingURL=data-table.browser-test.js.map