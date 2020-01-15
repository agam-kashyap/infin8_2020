"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setParallaxStyles = setParallaxStyles;
exports.resetStyles = resetStyles;

var _getParallaxOffsets2 = require("./getParallaxOffsets");

/**
 * Takes a parallax element and set the styles based on the
 * offsets and percent the element has moved though the viewport.
 * @param {object} element
 * @param {number} percentMoved
 */
function setParallaxStyles(elInner, offsets, percentMoved) {
  // Get the parallax X and Y offsets
  var _getParallaxOffsets = (0, _getParallaxOffsets2.getParallaxOffsets)(offsets, percentMoved),
      _getParallaxOffsets$x = _getParallaxOffsets.x,
      xv = _getParallaxOffsets$x.value,
      xu = _getParallaxOffsets$x.unit,
      _getParallaxOffsets$y = _getParallaxOffsets.y,
      yv = _getParallaxOffsets$y.value,
      yu = _getParallaxOffsets$y.unit; // Apply styles


  elInner.style.transform = "translate3d(".concat(xv).concat(xu, ", ").concat(yv).concat(yu, ", 0)");
}
/**
 * Takes a parallax element and removes parallax offset styles.
 * @param {object} element
 */


function resetStyles(element) {
  var el = element.elInner;
  el.style.transform = '';
}