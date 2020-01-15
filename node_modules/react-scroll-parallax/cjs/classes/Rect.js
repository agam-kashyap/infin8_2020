"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rect = function Rect(el, view, scroll) {
  _classCallCheck(this, Rect);

  var rect = el.getBoundingClientRect(); // rect is based on viewport -- must adjust for relative scroll container

  if (view.scrollContainer) {
    var scrollRect = view.scrollContainer.getBoundingClientRect();
    rect = {
      top: rect.top - scrollRect.top,
      right: rect.right - scrollRect.left,
      bottom: rect.bottom - scrollRect.top,
      left: rect.left - scrollRect.left
    };
  }

  this.height = el.offsetHeight;
  this.width = el.offsetWidth;
  this.left = rect.left + scroll.x;
  this.right = rect.right + scroll.x;
  this.top = rect.top + scroll.y;
  this.bottom = rect.bottom + scroll.y;
  this.originTotalDistY = view.height + this.height;
  this.originTotalDistX = view.width + this.width;
};

var _default = Rect;
exports.default = _default;