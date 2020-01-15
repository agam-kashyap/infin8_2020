"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bounds = function Bounds(rect, offsets, view) {
  _classCallCheck(this, Bounds);

  var y0 = offsets.y0,
      y1 = offsets.y1,
      x1 = offsets.x1,
      x0 = offsets.x0; // Y offsets

  var yPercent = y1.unit === '%' && y0.unit === '%';
  var y0Px = y0.value;
  var y1Px = y1.value;

  if (yPercent) {
    var h100 = rect.height / 100;
    y0Px = y0.value * h100;
    y1Px = y1.value * h100;
  } // X offsets


  var xPercent = x1.unit === '%' && x0.unit === '%';
  var x0Px = x0.value;
  var x1Px = x1.value;

  if (xPercent) {
    var _h = rect.width / 100;

    x0Px = x0.value * _h;
    x1Px = x1.value * _h;
  }

  var totalAbsOffY = Math.abs(y0Px) + Math.abs(y1Px);
  this.totalDistY = view.height + rect.height + totalAbsOffY;
  var totalDistTrueY = view.height + rect.height + (y1Px > y0Px ? totalAbsOffY * -1 : totalAbsOffY);
  var totalAbsOffX = Math.abs(x0Px) + Math.abs(x1Px);
  this.totalDistX = view.width + rect.width + totalAbsOffX;
  var totalDistTrueX = view.width + rect.width + (x1Px > x0Px ? totalAbsOffX * -1 : totalAbsOffX); // const speed = totalDistTrueY / originTotalDistY;

  var multiplierY = rect.originTotalDistY / totalDistTrueY;
  var multiplierX = rect.originTotalDistX / totalDistTrueX;
  this.top = rect.top;
  this.bottom = rect.bottom;

  if (y0Px < 0) {
    this.top = this.top + y0Px * multiplierY;
  }

  if (y1Px > 0) {
    this.bottom = this.bottom + y1Px * multiplierY;
  }

  this.left = rect.left;
  this.right = rect.right;

  if (x0Px < 0) {
    this.left = this.left + x0Px * multiplierX;
  }

  if (x1Px > 0) {
    this.right = this.right + x1Px * multiplierX;
  }
};

var _default = Bounds;
exports.default = _default;