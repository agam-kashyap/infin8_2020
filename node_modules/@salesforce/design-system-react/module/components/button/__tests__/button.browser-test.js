/* eslint-disable react/no-render-return-value */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { expect } from 'chai';
import assign from 'lodash.assign';
import SLDSButton from '../../button';
import IconSettings from '../../icon-settings';
var Simulate = TestUtils.Simulate,
    findRenderedDOMComponentWithTag = TestUtils.findRenderedDOMComponentWithTag,
    findRenderedDOMComponentWithClass = TestUtils.findRenderedDOMComponentWithClass;
var mockCallback = sinon.spy();
describe('SLDSButton: ', function () {
  var body;
  var defaultProps = {
    label: 'Neutral',
    onClick: mockCallback,
    variant: 'neutral'
  };

  var renderButton = function renderButton(inst) {
    body = document.createElement('div');
    document.body.appendChild(body);
    /* deepscan-disable REACT_ASYNC_RENDER_RETURN_VALUE */

    return ReactDOM.render(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, inst), body);
    /* deepscan-enable REACT_ASYNC_RENDER_RETURN_VALUE */
  };

  function removeButton() {
    ReactDOM.unmountComponentAtNode(body);
    document.body.removeChild(body);
  }

  var createButton = function createButton(props) {
    return React.createElement(SLDSButton, assign({}, defaultProps, props));
  };

  var getButton = function getButton(props) {
    return renderButton(createButton(props));
  };

  describe('Basic Button Props Render', function () {
    var cmp;
    var btn;
    beforeEach(function () {
      cmp = getButton({
        id: 'custom-id',
        text: 'Brand',
        theme: 'brand',
        style: {
          background: 'rgb(18, 49, 35)'
        }
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-button');
    });
    afterEach(function () {
      removeButton();
    });
    it('renders correct label', function () {
      expect(btn.textContent).to.equal('Neutral');
    });
    it('renders correct variant styles', function () {
      expect(btn.className).to.include('slds-button_neutral');
    });
    it('renders custom id', function () {
      expect(btn.getAttribute('id')).to.equal('custom-id');
    });
    it('renders custom styles', function () {
      btn.style.backgroundColor.should.equal('rgb(18, 49, 35)');
    });
  });
  describe('Form Props Render ', function () {
    var cmp;
    var btn;
    var formAction = 'http://localhost/some/url';
    beforeEach(function () {
      cmp = getButton({
        id: 'custom-id',
        formAction: formAction
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-button');
    });
    afterEach(function () {
      removeButton();
    });
    it('renders formAction prop', function () {
      expect(btn.formAction).to.equal(formAction);
    });
  });
  describe('Icon with Label Button Props Render', function () {
    var cmp;
    var btn;
    var svg;
    beforeEach(function () {
      cmp = getButton({
        label: 'Neutral with Icon',
        iconName: 'download',
        iconCategory: 'action',
        iconPosition: 'right',
        variant: 'neutral'
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-button');
      svg = findRenderedDOMComponentWithClass(cmp, 'slds-button__icon');
    });
    afterEach(function () {
      removeButton();
    });
    it('renders label', function () {
      expect(btn.textContent).to.equal('Neutral with Icon');
    });
    it('renders icon', function () {
      expect(svg.className.baseVal).to.include('slds-button__icon_right');
    });
  });
  describe('Icon Button Props render', function () {
    var cmp;
    var asstText;
    var svg;
    beforeEach(function () {
      cmp = getButton({
        assistiveText: {
          icon: 'my settings'
        },
        variant: 'icon',
        iconCategory: 'utility',
        iconName: 'settings',
        iconSize: 'small',
        iconVariant: 'bare'
      });
      asstText = findRenderedDOMComponentWithClass(cmp, 'slds-assistive-text');
      svg = findRenderedDOMComponentWithTag(cmp, 'svg');
    });
    afterEach(function () {
      removeButton();
    });
    it('renders label', function () {
      expect(asstText.textContent).to.equal('my settings');
    });
    it('renders icon styles', function () {
      expect(svg.className.baseVal).to.include('slds-button__icon');
    });
  });
  describe('(icon path) Icon Button renders assistive text', function () {
    var cmp;
    var asstText;
    beforeEach(function () {
      cmp = getButton({
        assistiveText: {
          icon: 'News'
        },
        iconSize: 'large',
        iconPath: '/assets/icons/utility-sprite/svg/symbols.svg#announcement',
        title: 'announcement'
      });
      asstText = findRenderedDOMComponentWithClass(cmp, 'slds-assistive-text');
    });
    afterEach(function () {
      removeButton();
    });
    it('renders label', function () {
      expect(asstText.textContent).to.equal('News');
    });
  });
  describe('External Path Icon Button renders', function () {
    var cmp;
    var use;
    var svgHref;
    before(function () {
      cmp = getButton({
        assistiveText: {
          icon: 'announcement'
        },
        variant: 'icon',
        iconPath: '/assets/icons/utility-sprite/svg/symbols.svg#announcement',
        iconSize: 'large',
        iconVariant: 'bare'
      });
      use = findRenderedDOMComponentWithTag(cmp, 'use');
      svgHref = use.getAttribute('xlink:href');
    });
    after(function () {
      removeButton();
    });
    it('renders svg', function () {
      expect(svgHref).to.equal('/assets/icons/utility-sprite/svg/symbols.svg#announcement');
    });
  });
  describe('Button Clickable', function () {
    var cmp;
    var btn;
    var clicked;

    function setClick() {
      clicked = true;
    }

    beforeEach(function () {
      clicked = false;
      cmp = getButton({
        label: 'Neutral',
        variant: 'neutral',
        onClick: setClick
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-button');
    });
    afterEach(function () {
      removeButton();
    });
    it('can be clicked', function () {
      /* eslint-disable no-unused-expressions */
      expect(clicked).to.be.false;
      Simulate.click(btn, {});
      expect(clicked).to.be.true;
      /* eslint-enable no-unused-expressions */
    });
  });
});
//# sourceMappingURL=button.browser-test.js.map