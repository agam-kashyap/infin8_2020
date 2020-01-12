/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'; // ## Constants

import { PAGE_HEADER_CONTROL } from '../../utilities/constants';
var propTypes = {
  /**
   * Optional class name
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string])
};
/**
 * The PageHeaderControl component is used to wrap individual controls within PageHeader 'actions' and 'controls' sections.
 */

var Control = function Control(props) {
  return React.createElement("div", {
    className: classnames('slds-page-header__control', props.className)
  }, props.children);
};

Control.displayName = PAGE_HEADER_CONTROL;
Control.propTypes = propTypes;
export default Control;
//# sourceMappingURL=control.js.map