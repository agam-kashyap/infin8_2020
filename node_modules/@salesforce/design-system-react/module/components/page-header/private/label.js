/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from '../../breadcrumb';
var displayName = 'PageHeaderLabel';
var propTypes = {
  /**
   * Contents of label section
   */
  content: PropTypes.node,

  /**
   * An array of react elements, presumably anchor <a> elements.
   */
  trail: PropTypes.array
};

var Label = function Label(props) {
  if (props.trail && props.trail.length > 0) {
    return React.createElement(Breadcrumb, {
      styleContainer: props.style,
      trail: props.trail
    });
  }

  if (props.content) {
    if (typeof props.content === 'string') {
      return React.createElement("span", null, props.content);
    }

    return props.content;
  }

  return null;
};

Label.displayName = displayName;
Label.propTypes = propTypes;
export default Label;
//# sourceMappingURL=label.js.map