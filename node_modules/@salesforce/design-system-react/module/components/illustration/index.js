function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Illustration Component
// Based on SLDS v2.6.2
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // This component's `checkProps` which issues warnings to developers about properties
// when in development mode (similar to React's built in development tools)

import checkProps from './check-props'; // ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// A simple javascript utility for conditionally joining classNames together.

import classNames from '../../utilities/class-names'; // ## SVG

import Svg from '../utilities/utility-icon/svg'; // ## Constants

import { ILLUSTRATION } from '../../utilities/constants';
import componentDoc from './component.json';
/**
 * An illustration is an image and inline text that work in tandem to communicate a state in a more friendly way.
 */

var Illustration = function Illustration(props) {
  var className = props.className,
      illustration = props.illustration,
      heading = props.heading,
      messageBody = props.messageBody,
      name = props.name,
      path = props.path,
      size = props.size,
      style = props.style;
  checkProps('Illustration', props, componentDoc);
  var kababCaseName = name ? name.replace(/_| /g, '-').toLowerCase() : '';

  var styles = _objectSpread({}, style);

  var illustrationSvg; // large illustration svg should have a default height of 400px if not already specified

  if (size === 'large' && !styles.height) {
    styles.height = '400px';
  }

  if (illustration) {
    // Use SVG data passed in with `illustration` prop
    illustrationSvg = React.createElement(Svg, {
      className: "slds-illustration__svg",
      "aria-hidden": "true",
      data: illustration,
      name: kababCaseName,
      style: styles
    });
  } else if (path) {
    illustrationSvg = React.createElement("svg", {
      className: "slds-illustration__svg",
      "aria-hidden": "true",
      name: kababCaseName,
      style: styles
    }, React.createElement("use", {
      xlinkHref: path
    }));
  }

  return React.createElement("div", {
    className: classNames(className, 'slds-illustration', {
      'slds-illustration_small': size === 'small',
      'slds-illustration_large': size === 'large'
    })
  }, illustrationSvg, React.createElement("div", {
    className: "slds-text-longform"
  }, heading ? React.createElement("h3", {
    className: "slds-text-heading_medium"
  }, heading) : null, messageBody ? React.createElement("p", {
    className: "slds-text-body_regular"
  }, messageBody) : null));
}; // ### Display Name
// Always use the canonical component name as the React display name.


Illustration.displayName = ILLUSTRATION; // ### Prop Types

Illustration.propTypes = {
  /**
   * CSS classes that are applied to the SVG. _Tested with Mocha testing._
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * A heading text. It is required if illustration is present. _Tested with snapshot testing._ _Tested with Mocha testing._
   */
  heading: PropTypes.string,

  /**
   * A custom SVG object to use instead of the supplied SLDS illustrations, look in `design-system-react/icons` for examples and syntax. _Tested with snapshot testing._ _Tested with Mocha testing._
   */
  illustration: PropTypes.object,

  /**
   * Indicates whether the illustration SVGs are from the design-system-react repo. If yes, set to true.
   */
  internalIllustration: PropTypes.bool.isRequired,

  /**
   * A message body below the heading to further communicate the state of the component. _Tested with snapshot testing._ _Tested with Mocha testing._
   */
  messageBody: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Name of the illustration. Visit <a href='https://lightningdesignsystem.com/components/illustration/'>Lightning Design System Illustration</a> to reference illustration names. _Tested with snapshot testing._ _Tested with Mocha testing._
   */
  name: PropTypes.string,

  /**
   * Path to the illustration SVG image. _Tested with snapshot testing._
   */
  path: PropTypes.string,

  /**
   * Size of the illustration. _Tested with snapshot testing._ _Tested with Mocha testing._
   */
  size: PropTypes.oneOf(['small', 'large']),

  /**
   * Custom styles to be passed to the illustration SVG. _Tested with Mocha testing._
   */
  style: PropTypes.object
};
Illustration.defaultProps = {
  internalIllustration: true,
  size: 'small',
  style: {}
};
export default Illustration;
//# sourceMappingURL=index.js.map