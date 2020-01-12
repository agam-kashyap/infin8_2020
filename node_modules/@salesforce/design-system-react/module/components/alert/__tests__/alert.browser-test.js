function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable react/no-render-return-value */

/* eslint-disable react/no-find-dom-node */
import React, { Component } from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mountComponent, unmountComponent } from '../../../tests/enzyme-helpers';
import Alert from '../';
import AlertContainer from '../container';
import Icon from '../../icon';
import IconSettings from '../../icon-settings';
chai.use(chaiEnzyme());

var DemoComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(DemoComponent, _Component);

  function DemoComponent(props) {
    var _this;

    _classCallCheck(this, DemoComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DemoComponent).call(this, props));
    _this.state = {
      isOpen: true
    };
    return _this;
  }

  _createClass(DemoComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement("div", null, React.createElement(AlertContainer, null, this.state.isOpen ? React.createElement(Alert, {
        style: this.props.style,
        dismissible: true,
        icon: React.createElement(Icon, {
          category: "utility",
          name: "user"
        }),
        labels: {
          heading: 'Logged in as John Smith (johnsmith@acme.com).',
          headingLink: 'Log out'
        },
        onClickHeadingLink: this.props.onClickHeadingLink,
        onRequestClose: function onRequestClose() {
          _this2.setState({
            isOpen: false
          });
        }
      }) : null)));
    }
  }]);

  return DemoComponent;
}(Component);

DemoComponent.displayName = 'AlertExample';
describe('SLDSAlert: ', function describeFunction() {
  var onClickHeadingLink = sinon.spy();
  describe('Dismiss alert', function () {
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      onClickHeadingLink: onClickHeadingLink
    })));
    afterEach(unmountComponent);
    /* Please notice the of `function () {}` and not () => {}.
     * It allows access to the Mocha test context via `this`.
     */

    it('calls onRequestClose handler', function () {
      var button = this.wrapper.find('button.slds-notify__close'); // If applicable, use second parameter to pass the data object

      expect(this.wrapper).to.have.state('isOpen', true);
      button.simulate('click', {});
      expect(this.wrapper).to.have.state('isOpen', false);
    });
    it('calls onClickHeadingLink handler', function () {
      var link = this.wrapper.find('a'); // If applicable, use second parameter to pass the data object

      link.simulate('click', {});
      expect(onClickHeadingLink.calledOnce).to.be.true;
    });
  });
  describe('Basic Alert Props Render', function describeFunction2() {
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      style: {
        backgroundColor: 'rgb(18, 49, 35)'
      }
    })));
    afterEach(unmountComponent);
    it('render custom styles', function () {
      expect(this.wrapper.find('.slds-notify').prop('style').backgroundColor).to.equal('rgb(18, 49, 35)');
    });
  });
});
//# sourceMappingURL=alert.browser-test.js.map