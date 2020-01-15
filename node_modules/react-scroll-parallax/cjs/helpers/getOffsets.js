"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOffsets;

var _index = require("../utils/index");

/**
 * Takes a parallax element and parses the offset props to get the value
 * and unit. Sets these values as offset object accessible on the element.
 * @param {object} element
 */
function getOffsets(props) {
  var y0Prop = props.y0,
      y1Prop = props.y1,
      x1Prop = props.x1,
      x0Prop = props.x0;
  var y0 = (0, _index.parseValueAndUnit)(y0Prop);
  var y1 = (0, _index.parseValueAndUnit)(y1Prop);
  var x0 = (0, _index.parseValueAndUnit)(x0Prop);
  var x1 = (0, _index.parseValueAndUnit)(x1Prop);

  if (x0.unit !== x1.unit || y0.unit !== y1.unit) {
    throw new Error('Must provide matching units for the min and max offset values of each axis.');
  }

  var xUnit = x0.unit || '%';
  var yUnit = y0.unit || '%';
  return {
    xUnit: xUnit,
    yUnit: yUnit,
    y0: y0,
    y1: y1,
    x0: x0,
    x1: x1
  };
}