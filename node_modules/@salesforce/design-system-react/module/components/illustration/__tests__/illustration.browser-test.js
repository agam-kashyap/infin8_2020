function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-env mocha */

/* global sinon */

/* eslint-disable prefer-arrow-callback */

/* eslint-disable no-unused-expressions */
import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'; // `this.wrapper` and `this.dom` is set in the helpers file

import { mountComponent, unmountComponent } from '../../../tests/enzyme-helpers';
import Illustration from '../../illustration';
chai.use(chaiEnzyme());

var DemoIllustration =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DemoIllustration, _React$Component);

  function DemoIllustration() {
    _classCallCheck(this, DemoIllustration);

    return _possibleConstructorReturn(this, _getPrototypeOf(DemoIllustration).apply(this, arguments));
  }

  _createClass(DemoIllustration, [{
    key: "render",
    value: function render() {
      return React.createElement(Illustration, _extends({}, this.props, {
        silenceDeprecationWarning: true
      }));
    }
  }]);

  return DemoIllustration;
}(React.Component);

_defineProperty(DemoIllustration, "displayName", 'DemoIllustration');

describe('SLDSIllustration: ', function describeFunction() {
  describe('Image with heading and message render', function describeFunction2() {
    var svg;
    var heading;
    var messageBody;
    beforeEach(mountComponent(React.createElement(DemoIllustration, {
      className: "custom-illustration",
      internalIllustration: true,
      heading: "Lorem ipsum dolor",
      messageBody: "Lorem ipsum dolor sit amet, consectetur",
      name: "No Access",
      path: "/assets/images/illustrations/empty-state-no-access.svg#no-access",
      size: "small",
      style: {
        backgroundColor: 'rgb(218, 165, 32)'
      }
    })));
    afterEach(unmountComponent);
    it('renders container class', function () {
      expect(this.wrapper).to.have.className('slds-illustration');
      expect(this.wrapper).to.have.className('custom-illustration');
    });
    it('renders illustration size class', function () {
      expect(this.wrapper).to.have.className('slds-illustration_small');
    });
    it('sets svg aria-hidden to true', function () {
      svg = this.wrapper.find('svg');
      expect(svg).to.have.attr('aria-hidden', 'true');
    });
    it('renders illustration svg class', function () {
      svg = this.wrapper.find('svg');
      expect(svg.hasClass('slds-illustration__svg')).to.be.true; // chai-enzyme is buggy with an svg
    });
    it('renders svg name attribute', function () {
      svg = this.wrapper.find('svg'); // also tests that all '_' and ' ' are replaced with '-'

      expect(svg).to.have.attr('name', 'no-access');
    });
    it('renders svg custom background color', function () {
      svg = this.wrapper.find('svg');
      expect(svg).to.have.style('backgroundColor', 'rgb(218, 165, 32)');
    });
    it('renders heading', function () {
      heading = this.wrapper.find('.slds-text-heading_medium');
      expect(heading.text()).to.equal('Lorem ipsum dolor');
    });
    it('renders message body', function () {
      messageBody = this.wrapper.find('.slds-text-body_regular');
      expect(messageBody.text()).to.equal('Lorem ipsum dolor sit amet, consectetur');
    });
  });
  describe('Heading and message render', function describeFunction2() {
    var svg;
    var heading;
    var messageBody;
    beforeEach(mountComponent(React.createElement(DemoIllustration, {
      internalIllustration: true,
      heading: "Lorem ipsum dolor",
      messageBody: "Lorem ipsum dolor sit amet, consectetur"
    })));
    afterEach(unmountComponent);
    it('does not render svg', function () {
      svg = this.wrapper.find('svg');
      expect(svg).not.to.be.present();
    });
    it('renders heading', function () {
      heading = this.wrapper.find('.slds-text-heading_medium');
      expect(heading.text()).to.equal('Lorem ipsum dolor');
    });
    it('renders message body', function () {
      messageBody = this.wrapper.find('.slds-text-body_regular');
      expect(messageBody.text()).to.equal('Lorem ipsum dolor sit amet, consectetur');
    });
  });
  describe('Heading only renders', function describeFunction2() {
    var svg;
    var heading;
    beforeEach(mountComponent(React.createElement(DemoIllustration, {
      internalIllustration: true,
      heading: "Lorem ipsum dolor"
    })));
    afterEach(unmountComponent);
    it('does not render svg', function () {
      svg = this.wrapper.find('svg');
      expect(svg).not.to.be.present();
    });
    it('renders heading', function () {
      heading = this.wrapper.find('.slds-text-heading_medium');
      expect(heading.text()).to.equal('Lorem ipsum dolor');
    });
    it('does not render message body', function () {
      expect(this.wrapper.find('.slds-text-body_regular')).not.to.be.present();
    });
  });
  describe('Message only renders', function () {
    var svg;
    var heading;
    var messageBody;
    beforeEach(mountComponent(React.createElement(DemoIllustration, {
      internalIllustration: true,
      messageBody: "Lorem ipsum dolor sit amet, consectetur"
    })));
    afterEach(unmountComponent);
    it('does not render svg', function () {
      svg = this.wrapper.find('svg');
      expect(svg).not.to.be.present();
    });
    it('does not render heading', function () {
      heading = this.wrapper.find('.slds-text-heading_medium');
      expect(heading).not.to.be.present();
    });
    it('renders message body', function () {
      messageBody = this.wrapper.find('.slds-text-body_regular');
      expect(messageBody.text()).to.equal('Lorem ipsum dolor sit amet, consectetur');
    });
  });
});
//# sourceMappingURL=illustration.browser-test.js.map