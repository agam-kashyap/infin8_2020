/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
var displayName = 'PageHeaderInfo';
var propTypes = {
  /**
   * Optional class name
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Contents of info section
   */
  content: PropTypes.node,

  /**
   * Variant passed down from page header
   */
  variant: PropTypes.string
};

var Info = function Info(props) {
  if (!props.content) return null;
  var classes = classnames({
    'slds-page-header__name-meta': props.variant === 'base',
    'slds-page-header__meta-text': props.variant === 'object-home' || props.variant === 'objectHome' || props.variant === 'related-list' || props.variant === 'relatedList'
  }, props.className);

  if (typeof props.content === 'string') {
    return React.createElement("p", {
      className: classes
    }, props.content);
  }

  return React.createElement("div", {
    className: classes
  }, props.content);
};

Info.displayName = displayName;
Info.propTypes = propTypes;
export default Info;
//# sourceMappingURL=info.js.map