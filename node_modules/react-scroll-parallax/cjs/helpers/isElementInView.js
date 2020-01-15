"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isElementInView = isElementInView;

/**
 * Takes two values (start, end) and returns whether it is within
 * the view size based on the cached position adjusted for current scroll.
 * Only along a single dimension <--- [ --- a --- b --- ] -->
 * @param {number} a - top/left
 * @param {number} b - bottom/right
 * @param {number} size - width/height
 * @param {number} scroll - x/y
 * @return {boolean} isInView
 */
function isElementInView(a, b, size, scroll) {
  var ax = a - scroll;
  var bx = b - scroll;
  var aView = ax >= 0 && ax <= size;
  var bInView = bx >= 0 && bx <= size;
  var abCovering = ax <= 0 && bx >= size;
  var isInView = aView || bInView || abCovering;
  return isInView;
}