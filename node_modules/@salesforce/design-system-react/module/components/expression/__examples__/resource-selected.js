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
import find from 'lodash.find';
import log from "../../../../utilities/log";
import IconSettings from "../../../../components/icon-settings";
import Combobox from "../../../../components/combobox";
import Input from "../../../../components/input";
import Expression from "../../../../components/expression";
import ExpressionGroup from "../../../../components/expression/group";
import ExpressionCondition from "../../../../components/expression/condition";
import ExpressionFormula from "../../../../components/expression/formula";
var ResourcesList = [{
  id: '111',
  label: 'Resource 1'
}, {
  id: '112',
  label: 'Resource 2'
}, {
  id: '113',
  label: 'Resource 3'
}, {
  id: '114',
  label: 'Resource 4'
}];
var OperatorsList = [{
  id: '1',
  label: 'Equals'
}, {
  id: '2',
  label: 'Does Not Equals'
}, {
  id: '3',
  label: 'Greater Than'
}, {
  id: '4',
  label: 'Less Than'
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
      conditions: [{
        resource: '111'
      }],
      triggerType: 'all',
      customLogic: undefined
    };
    return _this;
  }

  _createClass(Example, [{
    key: "updateData",
    value: function updateData(i, val, type) {
      var conditions = this.state.conditions;
      if (type === 'value') conditions[i].value = val;else conditions[i][type] = val.selection[0].id;
      this.setState({
        conditions: conditions
      });
    }
  }, {
    key: "updateSubData",
    value: function updateSubData(i, j, val, type) {
      var conditions = this.state.conditions;
      if (type === 'value') conditions[i].conditions[j].value = val;else conditions[i].conditions[j][type] = val.selection[0].id;
      this.setState({
        conditions: conditions
      });
    }
  }, {
    key: "updateFormula",
    value: function updateFormula(data, type) {
      var conditions = this.state.conditions;
      conditions[type] = data;
      this.setState({
        conditions: conditions
      });
    }
  }, {
    key: "addCondition",
    value: function addCondition() {
      var conditions = this.state.conditions;
      var newCondition = {
        isGroup: false,
        resource: '',
        operator: '',
        value: ''
      };
      conditions.push(newCondition);
      this.setState({
        conditions: conditions
      });
    }
  }, {
    key: "addSubCondition",
    value: function addSubCondition(i) {
      var conditions = this.state.conditions;
      var newCondition = {
        resource: '',
        operator: '',
        value: ''
      };
      conditions[i].conditions.push(newCondition);
      this.setState({
        conditions: conditions
      });
    }
  }, {
    key: "deleteCondition",
    value: function deleteCondition(i) {
      var conditions = this.state.conditions;

      if (conditions.length > 1) {
        conditions.splice(i, 1);
        this.setState({
          conditions: conditions
        });
      } else {
        var newCondition = {
          resource: '',
          operator: '',
          value: ''
        };
        this.setState({
          conditions: [newCondition]
        });
      }
    }
  }, {
    key: "deleteSubCondition",
    value: function deleteSubCondition(i, j) {
      var conditions = this.state.conditions;

      if (conditions[i].conditions.length > 1) {
        conditions[i].conditions.splice(j, 1);
        this.setState({
          conditions: conditions
        });
      } else {
        conditions.splice(i, 1);
        this.setState({
          conditions: conditions
        });
      }
    }
  }, {
    key: "addGroup",
    value: function addGroup() {
      if (!this.props.isChild) {
        var conditions = this.state.conditions;
        var newCondition = {
          resource: '',
          operator: '',
          value: ''
        };
        var newGroup = {
          isGroup: true,
          triggerType: 'all',
          conditions: [newCondition]
        };
        conditions.push(newGroup);
        this.setState({
          conditions: conditions
        });
      }
    }
  }, {
    key: "updateGroupData",
    value: function updateGroupData(i, val, type) {
      var conditions = this.state.conditions;
      conditions[i][type] = val;
      this.setState({
        conditions: conditions
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(Expression, {
        id: "expression-example",
        events: {
          onChangeTrigger: function onChangeTrigger(event, data) {
            log({
              action: _this2.props.action,
              event: event,
              eventName: 'Trigger Changed',
              data: data
            });

            _this2.setState({
              triggerType: data.triggerType
            });
          },
          onChangeCustomLogicValue: function onChangeCustomLogicValue(event, data) {
            log({
              action: _this2.props.action,
              event: event,
              eventName: 'Custom Logic Changed',
              data: data
            });

            _this2.setState({
              customLogic: data.value
            });
          },
          onAddCondition: function onAddCondition() {
            log({
              action: _this2.props.action,
              event: event,
              eventName: 'New Condition Added',
              data: null
            });

            _this2.addCondition();
          },
          onAddGroup: function onAddGroup() {
            log({
              action: _this2.props.action,
              event: event,
              eventName: 'New Group Added',
              data: null
            });

            _this2.addGroup();
          }
        },
        triggerType: this.state.triggerType,
        customLogicValue: this.state.customLogic
      }, this.state.triggerType === 'formula' ? React.createElement(ExpressionFormula, {
        id: "expression-formula",
        resourceCombobox: React.createElement(Combobox, {
          labels: {
            placeholder: 'Insert a Resource'
          },
          id: "expression-formula-insert-resource",
          multiple: false,
          options: ResourcesList,
          selection: this.state.conditions.resource ? [find(ResourcesList, {
            id: this.state.conditions.resource
          })] : [],
          events: {
            onSelect: function onSelect(event, data) {
              _this2.updateFormula(data.selection[0].id, 'resource');

              log({
                action: _this2.props.action,
                event: event,
                eventName: "Formula Resource Changed",
                data: data
              });
            }
          },
          variant: "inline-listbox"
        }),
        events: {
          onChangeTextEditor: function onChangeTextEditor(event, data) {
            return log({
              action: _this2.props.action,
              event: event,
              eventName: "Formula updated in Text Editor",
              data: data
            });
          },
          onClickCheckSyntax: function onClickCheckSyntax() {
            return log({
              action: _this2.props.action,
              event: event,
              eventName: "Check Syntax Button Clicked",
              data: null
            });
          },
          onClickHelp: function onClickHelp() {
            return log({
              action: _this2.props.action,
              event: event,
              eventName: "Get Help Button Clicked",
              data: null
            });
          }
        },
        functionCombobox: React.createElement(Combobox, {
          labels: {
            placeholder: 'Insert a Function'
          },
          id: "expression-formula-insert-function",
          options: ResourcesList,
          selection: this.state.conditions.function ? [find(ResourcesList, {
            id: this.state.conditions.function
          })] : [],
          events: {
            onSelect: function onSelect(event, data) {
              _this2.updateFormula(data.selection[0].id, 'function');

              log({
                action: _this2.props.action,
                event: event,
                eventName: "Formula Function Changed",
                data: data
              });
            }
          },
          variant: "inline-listbox"
        }),
        operatorInput: React.createElement(Input, {
          assistiveText: {
            label: 'Insert a Operator'
          },
          id: "insert-operator-formula",
          placeholder: "Insert a Operator"
        })
      }) : this.state.conditions.map(function (condition, i) {
        return !condition.isGroup ? React.createElement(ExpressionCondition, {
          focusOnMount: true
          /* eslint-disable-next-line react/no-array-index-key */
          ,
          key: i,
          id: "expression-condition-".concat(i),
          labels: {
            label: Example.getTriggerType(i, _this2.state.triggerType)
          },
          events: {
            onChangeOperator: function onChangeOperator(event, obj) {
              log({
                action: _this2.props.action,
                event: event,
                eventName: "Condition ".concat(i, " Operator Changed"),
                data: obj
              });

              _this2.updateData(i, obj, 'operator');
            },
            onChangeResource: function onChangeResource(event, obj) {
              log({
                action: _this2.props.action,
                event: event,
                eventName: "Condition ".concat(i, " Resource Changed"),
                data: obj
              });

              _this2.updateData(i, obj, 'resource');
            },
            onChangeValue: function onChangeValue(event, data) {
              log({
                action: _this2.props.action,
                event: event,
                eventName: "Condition ".concat(i, " Value Changed"),
                data: data
              });

              _this2.updateData(i, data.value, 'value');
            },
            onDelete: function onDelete() {
              log({
                action: _this2.props.action,
                event: event,
                eventName: "Condition ".concat(i, " Deleted"),
                data: null
              });

              _this2.deleteCondition(i);
            }
          },
          resourcesList: ResourcesList,
          resourceSelected: find(ResourcesList, {
            id: condition.resource
          }),
          operatorsList: OperatorsList,
          operatorSelected: find(OperatorsList, {
            id: condition.operator
          }),
          value: condition.value
        }) : React.createElement(ExpressionGroup, {
          focusOnMount: true
          /* eslint-disable-next-line react/no-array-index-key */
          ,
          key: i,
          id: "expression-group-".concat(i),
          labels: {
            label: Example.getTriggerType(i, _this2.state.triggerType)
          },
          events: {
            onChangeCustomLogicValue: function onChangeCustomLogicValue(event, data) {
              log({
                action: _this2.props.action,
                event: event,
                eventName: "Custom Logic Value of Condition Group ".concat(i, " Changed"),
                data: data
              });

              _this2.updateGroupData(i, data.value, 'customLogic');
            },
            onChangeTrigger: function onChangeTrigger(event, data) {
              log({
                action: _this2.props.action,
                event: event,
                eventName: "Trigger of Condition Group ".concat(i, " Changed"),
                data: data
              });

              _this2.updateGroupData(i, data.triggerType, 'triggerType');
            },
            onAddCondition: function onAddCondition() {
              log({
                action: _this2.props.action,
                event: event,
                eventName: "New Condition added to Condition Group ".concat(i),
                data: null
              });

              _this2.addSubCondition(i);
            }
          },
          customLogicValue: condition.customLogic,
          triggerType: condition.triggerType
        }, condition.triggerType === 'formula' ? React.createElement(ExpressionFormula, {
          id: "expression-group-".concat(i, "-formula"),
          resourceCombobox: React.createElement(Combobox, {
            labels: {
              placeholder: 'Insert a Resource'
            },
            id: "expression-group-".concat(i, "-formula-resource"),
            options: ResourcesList,
            variant: "inline-listbox"
          }),
          events: {
            onClickCheckSyntax: log({
              action: _this2.props.action,
              event: event,
              eventName: "Check Syntax Button Clicked",
              data: null
            }),
            onClickHelp: log({
              action: _this2.props.action,
              event: event,
              eventName: "Get Help Button Clicked",
              data: null
            })
          },
          functionCombobox: React.createElement(Combobox, {
            labels: {
              placeholder: 'Insert a Function'
            },
            id: "expression-group-".concat(i, "-formula-function"),
            options: ResourcesList,
            variant: "inline-listbox"
          }),
          operatorInput: React.createElement(Input, {
            assistiveText: {
              label: 'Insert a Operator'
            },
            id: "insert-operator-formula-".concat(i),
            placeholder: "Insert a Operator"
          })
        }) : condition.conditions.map(function (c, j) {
          return React.createElement(ExpressionCondition, {
            focusOnMount: true
            /* eslint-disable-next-line react/no-array-index-key */
            ,
            key: j,
            id: "expression-group-".concat(i, "-condition-").concat(j),
            isSubCondition: true,
            labels: {
              label: Example.getTriggerType(j, condition.triggerType)
            },
            events: {
              onChangeOperator: function onChangeOperator(event, obj) {
                log({
                  action: _this2.props.action,
                  event: event,
                  eventName: "Operator of Condition ".concat(j, " of Group ").concat(i, " Changed"),
                  data: obj
                });

                _this2.updateSubData(i, j, obj, 'operator');
              },
              onChangeResource: function onChangeResource(event, obj) {
                log({
                  action: _this2.props.action,
                  event: event,
                  eventName: "Resource of Condition [".concat(i, ",").concat(j, "] Changed"),
                  data: obj
                });

                _this2.updateSubData(i, j, obj, 'resource');
              },
              onChangeValue: function onChangeValue(event, data) {
                log({
                  action: _this2.props.action,
                  event: event,
                  eventName: "Value of Condition [".concat(i, ",").concat(j, "] Changed"),
                  data: data
                });

                _this2.updateSubData(i, j, data.value, 'value');
              },
              onDelete: function onDelete() {
                log({
                  action: _this2.props.action,
                  event: event,
                  eventName: "Condition [".concat(i, ",").concat(j, "] deleted"),
                  data: null
                });

                _this2.deleteSubCondition(i, j);
              }
            },
            resourcesList: ResourcesList,
            resourceSelected: find(ResourcesList, {
              id: c.resource
            }),
            operatorsList: OperatorsList,
            operatorSelected: find(OperatorsList, {
              id: c.operator
            }),
            value: c.value
          });
        }));
      })));
    }
  }], [{
    key: "getTriggerType",
    value: function getTriggerType(i, trigger) {
      if (trigger === 'custom') return String(i + 1);

      if (i > 0) {
        if (trigger === 'all') return 'AND';
        if (trigger === 'any') return 'OR';
      }

      return '';
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'ExpressionResourceSelectedExample');

export default Example;
//# sourceMappingURL=resource-selected.js.map