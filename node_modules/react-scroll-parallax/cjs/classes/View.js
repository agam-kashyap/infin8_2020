"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var View =
/*#__PURE__*/
function () {
  function View(_ref) {
    var width = _ref.width,
        height = _ref.height,
        scrollContainer = _ref.scrollContainer;

    _classCallCheck(this, View);

    this.scrollContainer = scrollContainer;
    this.setSize(width, height);
  }

  _createClass(View, [{
    key: "setSize",
    value: function setSize(width, height) {
      this.width = width;
      this.height = height;
      return this;
    }
  }]);

  return View;
}();

exports.View = View;