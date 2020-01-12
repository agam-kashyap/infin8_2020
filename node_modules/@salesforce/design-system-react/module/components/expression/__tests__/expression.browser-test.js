function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable max-lines */
import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import ExpressionCondition from '../../../components/expression/condition';
import IconSettings from '../../icon-settings';
import { keyObjects } from '../../../utilities/key-code';
import ExpressionGroup from '../group';
import ExpressionFormula from '../formula';
/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */

chai.use(chaiEnzyme());
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

var DemoCondition = function DemoCondition(props) {
  return React.createElement(ExpressionCondition, _extends({
    resourcesList: ResourcesList,
    operatorsList: OperatorsList
  }, props, {
    id: "test"
  }));
};

var DemoGroup = function DemoGroup(props) {
  return React.createElement(ExpressionGroup, _extends({}, props, {
    id: "test"
  }));
};

var DemoFormula = function DemoFormula(props) {
  return React.createElement(ExpressionFormula, _extends({}, props, {
    id: "test"
  }));
};

describe('SLDSExpression', function describeFunction() {
  var handles = {
    condition: null,
    group: null,
    formula: null
  };

  function mountCondition(props) {
    handles.condition = mount(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, DemoCondition(props)));
  }

  function mountGroup(props) {
    handles.group = mount(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, DemoGroup(props)));
  }

  function mountFormula(props) {
    handles.formula = mount(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, DemoFormula(props)));
  }

  describe('Expression Condition', function () {
    var resourceChange;
    var operatorChange;
    var valueChange;
    var deleteClicked;

    var getNodes = function getNodes(wrapper) {
      return {
        resourceSelector: wrapper.find('input[id="test-resource-selector"]'),
        operatorSelector: wrapper.find('input[id="test-operator-selector"]'),
        valueInput: wrapper.find('input[id="test-input"]'),
        deleteButton: wrapper.find('button[id="test-delete-button"]')
      };
    };

    beforeEach(function () {
      mountCondition({
        events: {
          onChangeResource: function onChangeResource(event, data) {
            resourceChange = {
              event: event,
              data: data
            };
          },
          onChangeOperator: function onChangeOperator(event, data) {
            operatorChange = {
              event: event,
              data: data
            };
          },
          onChangeValue: function onChangeValue(event, data) {
            valueChange = {
              event: event,
              data: data
            };
          },
          onDelete: function onDelete(event, data) {
            deleteClicked = {
              event: event,
              data: data
            };
          }
        }
      });
    });
    it('Resource selector works', function () {
      var node = getNodes(handles.condition);
      expect(node.resourceSelector).attr('value', '');
      node.resourceSelector.simulate('focus');
      node.resourceSelector.simulate('keyDown', keyObjects.DOWN);
      node.resourceSelector.simulate('keyDown', keyObjects.DOWN);
      node.resourceSelector.simulate('keyDown', keyObjects.ENTER);
      expect(resourceChange !== undefined).to.eql(true);
      expect(_typeof(resourceChange.event)).to.eql('object');
      expect(_typeof(resourceChange.data)).to.eql('object');
      expect(resourceChange.data.selection[0]).to.equal(ResourcesList[1]);
    });
    it('Operator selector works', function () {
      var node = getNodes(handles.condition);
      expect(node.operatorSelector).attr('value', '');
      node.operatorSelector.simulate('focus');
      node.operatorSelector.simulate('keyDown', keyObjects.DOWN);
      node.operatorSelector.simulate('keyDown', keyObjects.DOWN);
      node.operatorSelector.simulate('keyDown', keyObjects.ENTER);
      expect(operatorChange !== undefined).to.eql(true);
      expect(_typeof(operatorChange.event)).to.eql('object');
      expect(_typeof(operatorChange.data)).to.eql('object');
      expect(operatorChange.data.selection[0]).to.equal(OperatorsList[1]);
    });
    it('Value input works', function () {
      var node = getNodes(handles.condition);
      expect(node.valueInput).attr('value', '');
      node.valueInput.simulate('focus');
      node.valueInput.simulate('change', {
        target: {
          value: 'something'
        }
      });
      expect(valueChange.data.value).to.equal('something');
    });
    it('Delete button works', function () {
      var node = getNodes(handles.condition);
      expect(deleteClicked === undefined).to.equal(true);
      node.deleteButton.simulate('click');
      expect(deleteClicked === undefined).to.equal(false);
    });
  });
  describe('Expression Group', function () {
    var triggerChange;
    var addGroup;
    var addCondition;
    var customLogic;

    var getNodes = function getNodes(wrapper) {
      return {
        trigger: wrapper.find('input[id="test-take-action-trigger"]'),
        addGroup: wrapper.find('button[id="test-add-group-button"]'),
        addCondition: wrapper.find('button[id="test-add-condition-button"]'),
        customLogicInput: wrapper.find('input[id="test-custom-logic-input"]')
      };
    };

    beforeEach(function () {
      mountGroup({
        isRoot: true,
        triggerType: 'custom',
        events: {
          onChangeTrigger: function onChangeTrigger(event, data) {
            triggerChange = {
              event: event,
              data: data
            };
          },
          onAddGroup: function onAddGroup(event, data) {
            addGroup = {
              event: event,
              data: data
            };
          },
          onAddCondition: function onAddCondition(event, data) {
            addCondition = {
              event: event,
              data: data
            };
          },
          onChangeCustomLogicValue: function onChangeCustomLogicValue(event, data) {
            customLogic = {
              event: event,
              data: data
            };
          }
        }
      });
    });
    it('Trigger change button works', function () {
      var node = getNodes(handles.group);
      expect(node.trigger).attr('value', 'Custom Logic Is Met');
      node.trigger.simulate('focus');
      node.trigger.simulate('keyDown', keyObjects.DOWN);
      node.trigger.simulate('keyDown', keyObjects.ENTER);
      expect(triggerChange !== undefined).to.eql(true);
      expect(_typeof(triggerChange.event)).to.eql('object');
      expect(_typeof(triggerChange.data)).to.eql('object');
      expect(triggerChange.data.triggerType).to.eql('all');
    });
    it('Custom logic input works', function () {
      var node = getNodes(handles.group);
      expect(node.customLogicInput).attr('value', '');
      node.customLogicInput.simulate('focus');
      node.customLogicInput.simulate('change', {
        target: {
          value: '1 + 2'
        }
      });
      expect(customLogic.data.value).to.equal('1 + 2');
    });
    it('Add group button works', function () {
      var node = getNodes(handles.group);
      expect(addGroup === undefined).to.equal(true);
      node.addGroup.simulate('click');
      expect(addGroup === undefined).to.equal(false);
    });
    it('Add condition button works', function () {
      var node = getNodes(handles.group);
      expect(addCondition === undefined).to.equal(true);
      node.addCondition.simulate('click');
      expect(addCondition === undefined).to.equal(false);
    });
  });
  describe('Expression Formula', function () {
    var helpClicked;
    var checkSyntaxClicked;

    var getNodes = function getNodes(wrapper) {
      return {
        helpButton: wrapper.find('button[id="test-help-button"]'),
        checkSyntax: wrapper.find('button[id="test-check-syntax-button"]'),
        contentEditor: wrapper.find('div[id="test-content-editor"]')
      };
    };

    beforeEach(function () {
      mountFormula({
        events: {
          onClickHelp: function onClickHelp(event, data) {
            helpClicked = {
              event: event,
              data: data
            };
          },
          onClickCheckSyntax: function onClickCheckSyntax(event, data) {
            checkSyntaxClicked = {
              event: event,
              data: data
            };
          }
        }
      });
    });
    it('Help button works', function () {
      var node = getNodes(handles.formula);
      expect(helpClicked === undefined).to.equal(true);
      node.helpButton.simulate('click');
      expect(helpClicked === undefined).to.equal(false);
    });
    it('Check syntax button works', function () {
      var node = getNodes(handles.formula);
      expect(checkSyntaxClicked === undefined).to.equal(true);
      node.checkSyntax.simulate('click');
      expect(checkSyntaxClicked === undefined).to.equal(false);
    });
  });
});
//# sourceMappingURL=expression.browser-test.js.map