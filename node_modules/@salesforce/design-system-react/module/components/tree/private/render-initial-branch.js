/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Tree Initial Branch
import React from 'react';
import PropTypes from 'prop-types';
import isFunction from 'lodash.isfunction';
import classNames from 'classnames';
var propTypes = {
  /**
   * HTML `id` of the wrapping container element.
   */
  htmlId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

  /*
   * Class names to be added to the top-level `ul` element.
   */
  initalClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /*
   * Styles to be added to the top-level `ul` element. Useful for `overflow:hidden`.
   */
  initialStyle: PropTypes.object
};

var handleScroll = function handleScroll(event, props) {
  var percentage = event.target.scrollTop / (event.target.scrollHeight - event.target.clientHeight) * 100;

  if (isFunction(props.onScroll)) {
    props.onScroll(event, {
      percentage: percentage
    });
  }
};

var renderInitialNode = function renderInitialNode(children, props) {
  return (// id intentionally not rendered here, and is present on
    // container that includes the header
    React.createElement("ul", {
      "aria-labelledby": "".concat(props.htmlId, "__heading"),
      className: classNames('slds-tree', props.initalClassName),
      onScroll: function onScroll(event) {
        handleScroll(event, props);
      },
      role: "tree",
      style: props.initialStyle
    }, children)
  );
};

renderInitialNode.displayName = 'TreeInitialNode';
renderInitialNode.propTypes = propTypes;
export default renderInitialNode;
//# sourceMappingURL=render-initial-branch.js.map