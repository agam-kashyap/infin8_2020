function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';

var Swatch = function Swatch(_ref) {
  var color = _ref.color,
      style = _ref.style,
      label = _ref.label,
      labels = _ref.labels;

  var innerStyle = _objectSpread({
    backgroundColor: color
  }, style);

  var assistiveText = label || color; // falsey values output a transparent swatch

  if (!color) {
    innerStyle.backgroundImage = 'linear-gradient(-45deg, white 47%, #870500 0, #870500 53%, white 0)';

    if (labels && labels.swatchTabTransparentSwatch) {
      assistiveText = labels.swatchTabTransparentSwatch;
    }
  }

  return React.createElement("span", {
    className: "slds-swatch",
    style: innerStyle
  }, React.createElement("span", {
    className: "slds-assistive-text"
  }, assistiveText));
};

Swatch.propTypes = {
  color: PropTypes.string.isRequired
};
export default Swatch;
//# sourceMappingURL=swatch.js.map