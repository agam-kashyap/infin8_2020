function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import PropTypes from 'prop-types';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */

import { createMountNode, destroyMountNode } from '../../../tests/enzyme-helpers';
import IconSettings from '../../icon-settings';
import Icon from '../../icon';
import VisualPicker from '../../visual-picker';
import Radio from '../../radio';
import Checkbox from '../../checkbox';
chai.use(chaiEnzyme());
/* Re-usable demo component.
 */

var VisualPickerExample =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VisualPickerExample, _React$Component);

  function VisualPickerExample(props) {
    var _this;

    _classCallCheck(this, VisualPickerExample);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VisualPickerExample).call(this, props));
    _this.state = {
      checked: _this.props.checked
    };
    return _this;
  }

  _createClass(VisualPickerExample, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(VisualPicker, {
        label: this.props.label,
        id: this.props.id,
        size: "medium",
        coverable: true
      }, this.props.type === 'radio' ? React.createElement(React.Fragment, null, React.createElement(Radio, {
        labels: {
          label: 'Connected App'
        },
        id: "".concat(this.props.id, "-1"),
        value: "1",
        checked: this.state.checked === '1',
        onChange: function onChange() {
          return _this2.setState({
            checked: '1'
          });
        },
        onRenderVisualPickerSelected: function onRenderVisualPickerSelected() {
          return React.createElement(Icon, {
            assistiveText: {
              label: 'selected-icon'
            },
            category: "utility",
            name: "check",
            colorVariant: "base",
            size: "large"
          });
        },
        onRenderVisualPickerNotSelected: function onRenderVisualPickerNotSelected() {
          return React.createElement(Icon, {
            assistiveText: {
              label: 'connected_apps-icon'
            },
            category: "utility",
            name: "connected_apps",
            size: "large"
          });
        }
      }), React.createElement(Radio, {
        labels: {
          label: 'Custom App'
        },
        id: "".concat(this.props.id, "-2"),
        value: "2",
        checked: this.state.checked === '2',
        onChange: function onChange() {
          return _this2.setState({
            checked: '2'
          });
        },
        onRenderVisualPickerSelected: function onRenderVisualPickerSelected() {
          return React.createElement(Icon, {
            assistiveText: {
              label: 'selected-icon'
            },
            category: "utility",
            name: "check",
            colorVariant: "base",
            size: "large"
          });
        },
        onRenderVisualPickerNotSelected: function onRenderVisualPickerNotSelected() {
          return React.createElement(Icon, {
            assistiveText: {
              label: 'custom_apps-icon'
            },
            category: "utility",
            name: "custom_apps",
            size: "large"
          });
        }
      })) : React.createElement(React.Fragment, null, React.createElement(Checkbox, {
        labels: {
          label: 'Account'
        },
        value: "1",
        checked: this.state.checked.includes('1'),
        onChange: function onChange() {
          if (_this2.state.checked.includes('1')) _this2.setState({
            checked: _this2.state.checked.filter(function (item) {
              return item !== '1';
            })
          });else _this2.setState({
            checked: [].concat(_toConsumableArray(_this2.state.checked), ['1'])
          });
        },
        id: "visual-picker-coverable-checkbox-1",
        onRenderVisualPickerSelected: function onRenderVisualPickerSelected() {
          return React.createElement(Icon, {
            assistiveText: _this2.props.assistiveText,
            category: "utility",
            name: "check",
            colorVariant: "base",
            size: "large"
          });
        },
        onRenderVisualPickerNotSelected: function onRenderVisualPickerNotSelected() {
          return React.createElement(Icon, {
            assistiveText: _this2.props.assistiveText,
            category: "standard",
            name: "account",
            size: "large"
          });
        }
      }), React.createElement(Checkbox, {
        labels: {
          label: 'Lead'
        },
        value: "2",
        checked: this.state.checked.includes('2'),
        onChange: function onChange() {
          if (_this2.state.checked.includes('2')) _this2.setState({
            checked: _this2.state.checked.filter(function (item) {
              return item !== '2';
            })
          });else _this2.setState({
            checked: [].concat(_toConsumableArray(_this2.state.checked), ['2'])
          });
        },
        id: "visual-picker-coverable-checkbox-2",
        onRenderVisualPickerSelected: function onRenderVisualPickerSelected() {
          return React.createElement(Icon, {
            assistiveText: _this2.props.assistiveText,
            category: "utility",
            name: "check",
            colorVariant: "base",
            size: "large"
          });
        },
        onRenderVisualPickerNotSelected: function onRenderVisualPickerNotSelected() {
          return React.createElement(Icon, {
            assistiveText: _this2.props.assistiveText,
            category: "standard",
            name: "lead",
            size: "large"
          });
        }
      }), React.createElement(Checkbox, {
        labels: {
          label: 'Orders'
        },
        value: "3",
        checked: this.state.checked.includes('3'),
        onChange: function onChange() {
          if (_this2.state.checked.includes('3')) _this2.setState({
            checked: _this2.state.checked.filter(function (item) {
              return item !== '3';
            })
          });else {
            _this2.setState({
              checked: [].concat(_toConsumableArray(_this2.state.checked), ['3'])
            });
          }
        },
        id: "visual-picker-coverable-checkbox-3",
        onRenderVisualPickerSelected: function onRenderVisualPickerSelected() {
          return React.createElement(Icon, {
            assistiveText: _this2.props.assistiveText,
            category: "utility",
            name: "check",
            colorVariant: "base",
            size: "large"
          });
        },
        onRenderVisualPickerNotSelected: function onRenderVisualPickerNotSelected() {
          return React.createElement(Icon, {
            assistiveText: _this2.props.assistiveText,
            category: "standard",
            name: "orders",
            size: "large"
          });
        }
      }))));
    }
  }]);

  return VisualPickerExample;
}(React.Component);

VisualPickerExample.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.any,
  type: PropTypes.oneOf(['radio', 'checkbox'])
};
VisualPickerExample.defaultProps = {
  type: 'radio',
  checked: null
};
/* VisualPicker rendering tests
 */

describe('SLDS Visual Picker', function () {
  var _this3 = this;

  var mountNode;
  var wrapper;
  beforeEach(function () {
    mountNode = createMountNode({
      context: _this3
    });
  });
  afterEach(function () {
    destroyMountNode({
      wrapper: wrapper,
      mountNode: mountNode
    });
  });
  it('radio switching works correctly', function () {
    wrapper = mount(React.createElement(VisualPickerExample, {
      label: "Select any one",
      type: "radio",
      checked: "1"
    }), {
      attachTo: mountNode
    }); // Get the radio options

    var radio1 = wrapper.find({
      value: '1'
    }).find('input');
    var radio2 = wrapper.find({
      value: '2'
    }).find('input'); // Check if the first option alone is selected initially

    expect(radio1).to.have.prop('checked', true);
    expect(radio2).to.have.prop('checked', false); // Click on radio 2, and switch the option

    radio2.simulate('change'); // Get both the radios again after the update

    radio1 = wrapper.find({
      value: '1'
    }).find('input');
    radio2 = wrapper.find({
      value: '2'
    }).find('input'); // Check if only the second option is selected

    expect(radio1).to.have.prop('checked', false);
    expect(radio2).to.have.prop('checked', true);
  });
  it('checkbox selection works correctly', function () {
    wrapper = mount(React.createElement(VisualPickerExample, {
      label: "Select any one",
      type: "checkbox",
      checked: ['1']
    }), {
      attachTo: mountNode
    }); // Get the checkbox options

    var cb1 = wrapper.find({
      value: '1'
    }).find('input');
    var cb2 = wrapper.find({
      value: '2'
    }).find('input');
    var cb3 = wrapper.find({
      value: '3'
    }).find('input'); // Check if the first option alone is selected initially

    expect(cb1).to.have.prop('checked', true);
    expect(cb2).to.have.prop('checked', false);
    expect(cb3).to.have.prop('checked', false); // Click on each of the checkbox options

    cb1.simulate('change');
    cb2.simulate('change');
    cb3.simulate('change'); // Get the checkbox options again after the update

    cb1 = wrapper.find({
      value: '1'
    }).find('input');
    cb2 = wrapper.find({
      value: '2'
    }).find('input');
    cb3 = wrapper.find({
      value: '3'
    }).find('input'); // Check if all options except first option is selected

    expect(cb1).to.have.prop('checked', false);
    expect(cb2).to.have.prop('checked', true);
    expect(cb3).to.have.prop('checked', true);
  });
});
//# sourceMappingURL=visual-picker.browser-test.js.map