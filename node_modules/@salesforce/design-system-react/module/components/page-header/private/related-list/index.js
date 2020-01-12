/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import Controls from '../controls';
import Info from '../info';
import Label from '../label';
import MediaObject from '../../../media-object';
import Title from '../title';
var displayName = 'PageHeaderRelatedList';
var propTypes = {
  /**
   * The label property can be a string or a React element
   */
  label: PropTypes.node,

  /**
   * The info property can be a string or a React element
   */
  info: PropTypes.node,

  /**
   * Content to appear on the right hand side of the page header
   * prop 'contentRight' will be deprecated soon, use 'onRenderActions' instead
   */
  onRenderActions: PropTypes.func,

  /**
   * Nav content which appears in the upper right hand corner.
   * prop 'navRight' will be deprecated soon, use 'onRenderControls' instead
   */
  onRenderControls: PropTypes.func,

  /**
   * The title property can be a string or a React element
   */
  title: PropTypes.node,

  /**
   * An array of react elements presumably anchor <a> elements.
   */
  trail: PropTypes.array,

  /**
   * The type of component
   * Note: Extra options are added to make the version backward compatible
   */
  variant: PropTypes.string
};
var defaultProps = {};

var RelatedList = function RelatedList(props) {
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "slds-page-header__row"
  }, React.createElement("div", {
    className: "slds-page-header__col-title"
  }, React.createElement(Label, {
    content: props.label,
    trail: props.trail
  }), React.createElement(MediaObject, {
    body: React.createElement("div", {
      className: "slds-page-header__name"
    }, React.createElement(Title, {
      content: props.title,
      label: props.label
    }))
  })), React.createElement(Controls, {
    contentRight: props.contentRight,
    onRenderActions: props.onRenderActions,
    type: "actions"
  })), React.createElement("div", {
    className: "slds-page-header__row"
  }, React.createElement("div", {
    className: "slds-page-header__col-meta"
  }, React.createElement(Info, {
    content: props.info,
    variant: props.variant
  })), React.createElement(Controls, {
    navRight: props.navRight,
    onRenderControls: props.onRenderControls,
    type: "controls"
  })));
};

RelatedList.displayName = displayName;
RelatedList.propTypes = propTypes;
RelatedList.defaultProps = defaultProps;
export default RelatedList;
//# sourceMappingURL=index.js.map