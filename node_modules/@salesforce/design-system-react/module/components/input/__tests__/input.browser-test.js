function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable max-lines */

/* eslint-disable react/no-render-return-value */
import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import assign from 'lodash.assign';
import TestUtils from 'react-dom/test-utils';
import Input from '../../input';
import Icon from '../../icon';
import InputIcon from '../../icon/input-icon';
import IconSettings from '../../icon-settings';
var findRenderedDOMComponentWithTag = TestUtils.findRenderedDOMComponentWithTag,
    scryRenderedDOMComponentsWithTag = TestUtils.scryRenderedDOMComponentsWithTag,
    findRenderedDOMComponentWithClass = TestUtils.findRenderedDOMComponentWithClass;
describe('SLDSInput', function () {
  var defaultProps = {
    placeholder: 'Placeholder Text'
  };
  var body;

  var renderInput = function renderInput(instance) {
    body = document.createElement('div');
    document.body.appendChild(body);
    /* deepscan-disable REACT_ASYNC_RENDER_RETURN_VALUE */

    return ReactDOM.render(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, instance), body);
    /* deepscan-enable REACT_ASYNC_RENDER_RETURN_VALUE */
  };

  function removeInput() {
    ReactDOM.unmountComponentAtNode(body);
    document.body.removeChild(body);
  }

  var createInput = function createInput(props) {
    return React.createElement(Input, assign({}, defaultProps, props));
  };

  var getInput = function getInput(props) {
    return renderInput(createInput(props));
  };

  describe('Standard Input with Label', function () {
    var component;
    var wrapper;
    var input;
    var label;
    beforeEach(function () {
      component = getInput({
        label: 'Input Label',
        id: 'custom-id'
      });
      wrapper = findRenderedDOMComponentWithClass(component, 'slds-form-element');
      input = findRenderedDOMComponentWithTag(component, 'input');
      label = findRenderedDOMComponentWithClass(component, 'slds-form-element__label');
    });
    afterEach(function () {
      removeInput();
    });
    it('is wrapped in div with class "slds-form-element"', function () {
      expect(wrapper.className).to.include('slds-form-element');
    });
    it('renders label', function () {
      expect(label.textContent).to.equal('Input Label');
    });
    it('renders input element with class "slds-input"', function () {
      expect(input.className).to.include('slds-input');
    });
    it('has an id', function () {
      expect(input.getAttribute('id')).to.be.ok;
    });
    it('can pass custom id', function () {
      expect(input.getAttribute('id')).to.equal('custom-id');
    });
    it('renders placeholder text', function () {
      expect(input.getAttribute('placeholder')).to.equal('Placeholder Text');
    });
    it('has associated label for tag pointing to id of input', function () {
      var labelForTag = label.getAttribute('for');
      var inputId = input.getAttribute('id');
      expect(labelForTag).to.equal(inputId);
    });
  });
  describe('Input without Assistive Text Label', function () {
    var component;
    var label;
    var input;
    beforeEach(function () {
      component = getInput({
        assistiveText: {
          label: 'Assistive Label'
        }
      });
      label = findRenderedDOMComponentWithClass(component, 'slds-form-element__label');
      input = findRenderedDOMComponentWithTag(component, 'input');
    });
    afterEach(function () {
      removeInput();
    });
    it('renders label (assitive)', function () {
      expect(label.textContent).to.equal('Assistive Label');
    });
    it('label has class "slds-assistive-text"', function () {
      expect(label.className).to.include('slds-assistive-text');
    });
    it('has associated label for tag pointing to id of input', function () {
      var labelForTag = label.getAttribute('for');
      var inputId = input.getAttribute('id');
      expect(labelForTag).to.equal(inputId);
    });
  });
  describe('Read Only Input', function () {
    var component;
    var label;
    var input;
    beforeEach(function () {
      component = getInput({
        label: 'Input Label',
        readOnly: true
      });
      label = findRenderedDOMComponentWithTag(component, 'label');
      input = findRenderedDOMComponentWithTag(component, 'input');
    });
    afterEach(function () {
      removeInput();
    });
    it('label has class "slds-form-element__label"', function () {
      expect(label.className).to.include('slds-form-element__label');
    });
    it('input has attribute "readonly"', function () {
      expect(input.getAttribute('readonly')).to.equal('');
    });
  });
  describe('Static Input', function () {
    var component;
    var label;
    var input;
    beforeEach(function () {
      component = getInput({
        label: 'Input Label',
        isStatic: true
      });

      var _scryRenderedDOMCompo = scryRenderedDOMComponentsWithTag(component, 'span');

      var _scryRenderedDOMCompo2 = _slicedToArray(_scryRenderedDOMCompo, 1);

      label = _scryRenderedDOMCompo2[0];
      // eslint-disable-next-line prefer-destructuring
      input = scryRenderedDOMComponentsWithTag(component, 'span')[1];
    });
    afterEach(function () {
      removeInput();
    });
    it('label is a span and has class "slds-form-element__label"', function () {
      expect(label.className).to.include('slds-form-element__label');
    });
    it('input is a span and has class "slds-form-element__static"', function () {
      expect(input.className).to.include('slds-form-element__static');
    });
  });
  describe('Disabled Input', function () {
    var component;
    var input;
    beforeEach(function () {
      component = getInput({
        label: 'Input Label',
        disabled: true
      });
      input = findRenderedDOMComponentWithTag(component, 'input');
    });
    afterEach(function () {
      removeInput();
    });
    it('input has attribute "disabled"', function () {
      expect(input.getAttribute('disabled')).to.equal('');
    });
  });
  describe('Multiple Inputs', function () {
    var component1;
    var component2;
    var input1;
    var input2;
    beforeEach(function () {
      component1 = getInput({
        className: 'input-one',
        label: 'Input One'
      });
      component2 = getInput({
        className: 'input-two',
        label: 'Input Two'
      });
      input1 = findRenderedDOMComponentWithTag(component1, 'input');
      input2 = findRenderedDOMComponentWithTag(component2, 'input');
    });
    afterEach(function () {
      var inputNodes = document.querySelectorAll('.slds-form-element');
      inputNodes[0].parentNode.remove(inputNodes[0]);
      inputNodes[1].parentNode.remove(inputNodes[1]);
    });
    it('each input has unique generated id', function () {
      expect(input1.getAttribute('id')).to.not.equal(input2.getAttribute('id'));
    });
  });
  describe('Required Input in Error State', function () {
    var component;
    var wrapper;
    var error;
    var input;
    beforeEach(function () {
      component = getInput({
        label: 'Input Label',
        required: true,
        errorText: 'Error Message'
      });
      wrapper = findRenderedDOMComponentWithClass(component, 'slds-form-element');
      error = findRenderedDOMComponentWithClass(component, 'slds-form-element__help');
      input = findRenderedDOMComponentWithTag(component, 'input');
    });
    afterEach(function () {
      removeInput();
    });
    it('input wrapper contains an <abbr> that has class "slds-required"', function () {
      expect(findRenderedDOMComponentWithTag(component, 'abbr').className).to.include('slds-required');
    });
    it('input wrapper has class "slds-has-error"', function () {
      expect(wrapper.className).to.include('slds-has-error');
    });
    it('renders error message', function () {
      expect(error.textContent).to.equal('Error Message');
    });
    it('has associated aria-describedby pointing to id of error message', function () {
      var inputDescribedby = input.getAttribute('aria-describedby');
      var errorId = error.getAttribute('id');
      expect(inputDescribedby).to.equal(errorId);
    });
  });
  describe('Input with Left Clickable Icon', function () {
    var component;
    var elementControl;
    var leftButton;
    var iconAssistiveText;
    var clickCallback = sinon.spy();
    beforeEach(function () {
      component = getInput({
        iconLeft: React.createElement(InputIcon, {
          assistiveText: {
            icon: 'Passed assistive text to icon'
          },
          name: "search",
          category: "utility",
          onClick: clickCallback
        })
      });
      leftButton = findRenderedDOMComponentWithTag(component, 'button');
      iconAssistiveText = findRenderedDOMComponentWithClass(component, 'slds-assistive-text');
      elementControl = findRenderedDOMComponentWithClass(component, 'slds-form-element__control');
    });
    afterEach(function () {
      removeInput();
    });
    it('element control has class "slds-input-has-icon"', function () {
      expect(elementControl.className).to.include('slds-input-has-icon');
    });
    it('passes "assitiveText" down to icon', function () {
      expect(iconAssistiveText.textContent).to.equal('Passed assistive text to icon');
    });
    it('icon renders button BEFORE input in DOM', function () {
      var render = elementControl.innerHTML;
      expect(render.indexOf('<button')).to.be.below(render.indexOf('<input'));
    });
    it('icon can be clicked', function () {
      TestUtils.Simulate.click(leftButton);
      expect(clickCallback.calledOnce).to.be.true;
    });
  });
  describe('Input with Right Clickable Icon', function () {
    var component;
    var elementControl;
    var leftButton;
    var clickCallback = sinon.spy();
    beforeEach(function () {
      component = getInput({
        iconRight: React.createElement(InputIcon, {
          assistiveText: {
            icon: 'Passed assistive text to icon'
          },
          name: "search",
          category: "utility",
          onClick: clickCallback
        })
      });
      leftButton = findRenderedDOMComponentWithTag(component, 'button');
      elementControl = findRenderedDOMComponentWithClass(component, 'slds-form-element__control');
    });
    afterEach(function () {
      removeInput();
    });
    it('element control has class "slds-input-has-icon"', function () {
      expect(elementControl.className).to.include('slds-input-has-icon');
    });
    it('icon renders button AFTER input in DOM', function () {
      var render = elementControl.innerHTML;
      expect(render.indexOf('<button')).to.be.above(render.indexOf('<input'));
    });
    it('icon can be clicked', function () {
      TestUtils.Simulate.click(leftButton);
      expect(clickCallback.calledOnce).to.be.true;
    });
  });
  describe('Input with Non-Clickable Icon', function () {
    var component;
    var elementControl;
    beforeEach(function () {
      component = getInput({
        iconRight: React.createElement(Icon, {
          name: "search",
          category: "utility"
        })
      });
      elementControl = findRenderedDOMComponentWithClass(component, 'slds-form-element__control');
    });
    afterEach(function () {
      removeInput();
    });
    it('button tag does not exist', function () {
      expect(elementControl.getElementsByTagName('button')[0]).to.not.be.ok;
    });
  });
  describe('Input with Loading Spinner Icon', function () {
    var component;
    var spinner;
    var input;
    beforeEach(function () {
      component = getInput({
        assistiveText: {
          label: 'Passed assistive text to icon'
        },
        hasSpinner: true,
        iconRight: React.createElement(InputIcon, {
          assistiveText: {
            icon: 'Passed assistive text to icon'
          },
          name: "search",
          category: "utility"
        }),
        id: 'unique-id-4',
        label: 'Input Label'
      });
      spinner = findRenderedDOMComponentWithClass(component, 'slds-spinner');
      input = findRenderedDOMComponentWithTag(component, 'input');
    });
    afterEach(function () {
      removeInput();
    });
    it('renders loading spinner icon', function () {
      expect(spinner).to.be.ok;
    });
    it('input aria-describedby points to id of spinner)', function () {
      var spinnerId = spinner.getAttribute('id');
      var inputDescribedby = input.getAttribute('aria-describedby');
      expect(inputDescribedby).to.include(spinnerId);
    });
    it('input aria-describedby points to id of spinner AND id of error message)', function () {
      var spinnerId = spinner.getAttribute('id');
      var inputDescribedby = input.getAttribute('aria-describedby');
      expect(inputDescribedby).to.include(spinnerId);
    });
  });
  describe('Input with Loading Spinner Icon & Error', function () {
    var component;
    var spinner;
    var input;
    var error;
    beforeEach(function () {
      component = getInput({
        assistiveText: {
          label: 'Passed assistive text to icon'
        },
        required: true,
        errorText: 'Error Message',
        hasSpinner: true,
        iconRight: React.createElement(InputIcon, {
          assistiveText: {
            icon: 'Passed assistive text to icon'
          },
          name: "search",
          category: "utility"
        }),
        id: 'unique-id-4',
        label: 'Input Label'
      });
      spinner = findRenderedDOMComponentWithClass(component, 'slds-spinner');
      input = findRenderedDOMComponentWithTag(component, 'input');
      error = findRenderedDOMComponentWithClass(component, 'slds-form-element__help');
    });
    afterEach(function () {
      removeInput();
    });
    it('input aria-describedby points to id of spinner AND id of error message)', function () {
      var errorId = error.getAttribute('id');
      var spinnerId = spinner.getAttribute('id');
      var inputDescribedby = input.getAttribute('aria-describedby');
      expect(inputDescribedby).to.equal("".concat(spinnerId, " ").concat(errorId));
    });
  });
  describe('Input with Fixed Left Text', function () {
    var component;
    var fixedTextLeft;
    beforeEach(function () {
      component = getInput({
        fixedTextLeft: '$',
        id: 'unique-id-5',
        label: 'Input Label'
      });
      fixedTextLeft = findRenderedDOMComponentWithClass(component, 'slds-form-element__addon');
    });
    afterEach(function () {
      removeInput();
    });
    it('renders fixed text node', function () {
      expect(fixedTextLeft).to.be.ok;
    });
    it('renders fixed text node content', function () {
      expect(fixedTextLeft.textContent).to.equal('$');
    });
  });
  describe('Counter Input', function () {
    var changeOccurred;
    var component;
    var decrement;
    var increment;
    var onChangeData;
    afterEach(function () {
      removeInput();
    });
    it('increments and decrements as expected', function () {
      component = getInput({
        onChange: function onChange(event, data) {
          onChangeData = data;
        },
        value: 1,
        variant: 'counter'
      });
      decrement = findRenderedDOMComponentWithClass(component, 'slds-input__button_decrement');
      increment = findRenderedDOMComponentWithClass(component, 'slds-input__button_increment');
      onChangeData = {};
      TestUtils.Simulate.mouseDown(increment);
      TestUtils.Simulate.mouseUp(increment);
      expect(onChangeData.number === 2 && onChangeData.value === '2').to.be.true;
      onChangeData = {};
      TestUtils.Simulate.keyDown(increment, {
        key: 'Enter',
        keyCode: 13,
        which: 13
      });
      TestUtils.Simulate.keyUp(increment, {
        key: 'Enter',
        keyCode: 13,
        which: 13
      });
      expect(onChangeData.number === 2 && onChangeData.value === '2').to.be.true;
      TestUtils.Simulate.mouseDown(decrement);
      TestUtils.Simulate.mouseUp(decrement);
      expect(onChangeData.number === 0 && onChangeData.value === '0').to.be.true;
      onChangeData = {};
      TestUtils.Simulate.keyDown(decrement, {
        key: 'Enter',
        keyCode: 13,
        which: 13
      });
      TestUtils.Simulate.keyUp(decrement, {
        key: 'Enter',
        keyCode: 13,
        which: 13
      });
      expect(onChangeData.number === 0 && onChangeData.value === '0').to.be.true;
    });
    it('respects min and max values', function () {
      component = getInput({
        maxValue: 1,
        minValue: 1,
        onChange: function onChange() {
          changeOccurred = true;
        },
        value: 1,
        variant: 'counter'
      });
      decrement = findRenderedDOMComponentWithClass(component, 'slds-input__button_decrement');
      increment = findRenderedDOMComponentWithClass(component, 'slds-input__button_increment');
      changeOccurred = false;
      TestUtils.Simulate.mouseDown(increment);
      TestUtils.Simulate.mouseUp(increment);
      expect(changeOccurred).to.be.false;
      expect(increment.disabled).to.be.true;
      changeOccurred = false;
      TestUtils.Simulate.mouseDown(decrement);
      TestUtils.Simulate.mouseUp(decrement);
      expect(changeOccurred).to.be.false;
      expect(decrement.disabled).to.be.true;
    });
    it('acknowledges custom step values', function () {
      component = getInput({
        onChange: function onChange(event, data) {
          onChangeData = data;
        },
        step: 0.1,
        value: 1,
        variant: 'counter'
      });
      decrement = findRenderedDOMComponentWithClass(component, 'slds-input__button_decrement');
      increment = findRenderedDOMComponentWithClass(component, 'slds-input__button_increment');
      onChangeData = {};
      TestUtils.Simulate.mouseDown(increment);
      TestUtils.Simulate.mouseUp(increment);
      expect(onChangeData.number === 1.1 && onChangeData.value === '1.1').to.be.true;
      TestUtils.Simulate.mouseDown(decrement);
      TestUtils.Simulate.mouseUp(decrement);
      expect(onChangeData.number === 0.9 && onChangeData.value === '0.9').to.be.true;
    });
  });
});
//# sourceMappingURL=input.browser-test.js.map