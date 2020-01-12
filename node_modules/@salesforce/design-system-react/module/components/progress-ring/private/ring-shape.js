/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// Implements the [Progress Ring design pattern](https://lightningdesignsystem.com/components/progress-ring/) in React.
// Based on SLDS v2.4.5
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var PROGRESS_RING_SHAPE = 'SLDSProgressRingShape';
var propTypes = {
  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   * CSS class names to be added to the container element. `array`, `object`, or `string` are accepted.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Decimal percentage drain of the ring [0.0 - 1.0]
   */
  fillPercentDecimal: PropTypes.number,

  /**
   * Direction that the progress ring "flows." Default is counter-clockwise, or `drain`. For clockwise flow, use `fill`
   */
  flowDirection: PropTypes.oneOf(['drain', 'fill']),

  /**
   * Size of the progress ring. Default is 'medium'
   */
  size: PropTypes.oneOf(['medium', 'large'])
};
var defaultProps = {
  fillPercentDecimal: 0
};
/**
 * Generates the string for the D value of the SVG path
 * @param isLong {number} a binary flag if the arc should 'take the long path' (used for > 50% fill)
 * @param arcX {decimal} the arc's x position
 * @param arcY {decimal} the arc's y position
 */

var getD = function getD(isLong, arcX, arcY) {
  return "M 1 0 A 1 1 0 ".concat(isLong, " 1 ").concat(arcX, " ").concat(arcY, " L 0 0");
};
/**
 * Calculates the fill part of the ring
 * @param fillPercent {decimal} Decimal percentage that represents the amount of the ring which is filled with color.
 */


var calculateD = function calculateD(fillPercent) {
  var isLong = fillPercent > 0.5 ? 1 : 0;
  var arcX = Math.cos(2 * Math.PI * fillPercent);
  var arcY = Math.sin(2 * Math.PI * fillPercent);
  return getD(isLong, arcX, arcY);
};
/**
 * Displays the progress ring shape.
 */


var ProgressRingShape = function ProgressRingShape(props) {
  var progressStyles = {
    height: props.size === 'large' ? '2rem' : '1.5rem'
  };

  if (props.flowDirection === 'fill') {
    progressStyles.transform = 'scaleX(1) rotate(-90deg)';
  }

  return React.createElement("div", {
    id: props.id,
    className: classNames('slds-progress-ring', props.className)
  }, React.createElement("div", {
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": props.fillPercentDecimal * 100,
    className: "slds-progress-ring__progress",
    role: "progressbar",
    style: progressStyles
  }, React.createElement("svg", {
    viewBox: "-1 -1 2 2"
  }, React.createElement("path", {
    className: "slds-progress-ring__path",
    d: calculateD(props.fillPercentDecimal)
  }))), React.createElement("div", {
    className: "slds-progress-ring__content"
  }, props.children));
};

ProgressRingShape.displayName = PROGRESS_RING_SHAPE;
ProgressRingShape.propTypes = propTypes;
ProgressRingShape.defaultProps = defaultProps;
export default ProgressRingShape;
//# sourceMappingURL=ring-shape.js.map