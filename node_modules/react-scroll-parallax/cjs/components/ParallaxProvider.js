"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ParallaxContext = _interopRequireDefault(require("../helpers/ParallaxContext"));

var _ParallaxController = _interopRequireDefault(require("../classes/ParallaxController"));

var _constants = require("../constants");

var _validHTMLElement = _interopRequireDefault(require("../utils/validHTMLElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var createController = function createController(options) {
  // Don't initialize on the server
  var isServer = typeof window === 'undefined';

  if (!isServer) {
    // Must not be the server so kick it off...
    return _ParallaxController.default.init(options);
  }

  return null;
};

var ParallaxProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(ParallaxProvider, _Component);

  function ParallaxProvider(props) {
    var _this;

    _classCallCheck(this, ParallaxProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ParallaxProvider).call(this, props));
    _this.controller = createController({
      scrollAxis: props.scrollAxis,
      scrollContainer: props.scrollContainer
    });
    return _this;
  }

  _createClass(ParallaxProvider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.scrollContainer !== this.props.scrollContainer) {
        this.controller.updateScrollContainer(this.props.scrollContainer);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.controller = this.controller.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement(_ParallaxContext.default.Provider, {
        value: this.controller
      }, children);
    }
  }]);

  return ParallaxProvider;
}(_react.Component);

exports.default = ParallaxProvider;

_defineProperty(ParallaxProvider, "defaultProps", {
  scrollAxis: _constants.VERTICAL
});

_defineProperty(ParallaxProvider, "propTypes", {
  children: _propTypes.default.node.isRequired,
  scrollAxis: _propTypes.default.oneOf([_constants.VERTICAL, _constants.HORIZONTAL]),
  scrollContainer: _validHTMLElement.default
});