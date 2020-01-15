"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scroll = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scroll =
/*#__PURE__*/
function () {
  function Scroll() {
    _classCallCheck(this, Scroll);

    this.setScroll.apply(this, arguments);
  }

  _createClass(Scroll, [{
    key: "setScroll",
    value: function setScroll(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }
  }]);

  return Scroll;
}();

exports.Scroll = Scroll;