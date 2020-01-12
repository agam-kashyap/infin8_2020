function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

/* Adds all of the Mocha (eg `it` and `should`) and sinon testing global
 * variables to the global namespace for eslint purposes.
 */

/* eslint-env mocha */

/* global sinon */
// Import your external dependencies
import React from 'react';
import PropTypes from 'prop-types';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */

import { mountComponent, unmountComponent } from '../../../tests/enzyme-helpers';
import { sampleReportCategories } from '../../../utilities/sample-data/vertical-navigation';
import VerticalNavigation from '../../vertical-navigation';
/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */

chai.use(chaiEnzyme());
var defaultProps = {
  id: 'sample-navigation',
  className: 'sample-navigation',
  categories: sampleReportCategories
};
/* A re-usable demo component fixture outside of `describe` sections
 * can accept props within each test and be unmounted after each tests.
 */

var DemoComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DemoComponent, _React$Component);

  function DemoComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DemoComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DemoComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  _createClass(DemoComponent, [{
    key: "render",
    // event handlers
    value: function render() {
      return React.createElement(VerticalNavigation, this.props);
    }
  }]);

  return DemoComponent;
}(React.Component);

_defineProperty(DemoComponent, "displayName", 'NavigationDemoComponent');

_defineProperty(DemoComponent, "propTypes", {
  selectedId: PropTypes.string,
  onSelect: PropTypes.func
});

_defineProperty(DemoComponent, "defaultProps", defaultProps);

describe('SLDSVerticalNavigation', function () {
  describe('Assistive technology', function () {
    /* Detect if presence of accessibility features such as ARIA
     * roles and screen reader text is present in the DOM.
     */
    beforeEach(mountComponent(React.createElement(DemoComponent, null)));
    afterEach(unmountComponent);
    it('has items described by category headers', function () {
      var _this2 = this;

      var structure = {
        reports: 5,
        folders: 3
      };
      Object.entries(structure).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            categoryId = _ref2[0],
            itemCount = _ref2[1];

        var header = _this2.wrapper.find("#sample-navigation-".concat(categoryId));

        expect(header).to.have.length(1);

        var ariaDescribedbyId = _this2.wrapper.find("a[aria-describedby=\"sample-navigation-".concat(categoryId, "\"]"));

        expect(ariaDescribedbyId).to.have.length(itemCount);
      });
    });
  }); // PROPS

  describe('selectedId prop', function () {
    var selectedId = 'my_folders';
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      selectedId: selectedId
    })));
    afterEach(unmountComponent);
    it('is used to select an item', function () {
      var item = this.wrapper.find('.sample-navigation').find('li.slds-is-active').find('a[data-id="my_folders"]');
      expect(item).to.have.length(1);
    });
  }); // EVENTS

  describe('Item', function () {
    var clickHandler = sinon.spy();
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      onSelect: clickHandler
    })));
    afterEach(unmountComponent);
    it('calls onSelect', function () {
      var item = this.wrapper.find('.sample-navigation').find('a[data-id="my_folders"]');
      item.simulate('click');
      expect(clickHandler.callCount).to.equal(1);
    });
  });
});
//# sourceMappingURL=navigation.browser-test.js.map