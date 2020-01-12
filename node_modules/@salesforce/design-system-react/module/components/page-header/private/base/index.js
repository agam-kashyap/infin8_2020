/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Controls from '../controls';
import Icon from '../../../icon';
import Info from '../info';
import MediaObject from '../../../media-object';
import Title from '../title';
var displayName = 'PageHeaderBase';
var propTypes = {
  /**
   * The page header icon
   */
  icon: PropTypes.node,

  /**
   * The info property can be a string or a React element
   */
  info: PropTypes.node,

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
   * The type of component
   */
  variant: PropTypes.string
};

var Base = function Base(props) {
  var icon; // Backwards compatibility

  if (props.iconName) {
    icon = React.createElement(Icon, {
      category: props.iconCategory,
      className: "slds-page-header__icon",
      name: props.iconName,
      position: props.iconPosition,
      size: props.iconSize,
      variant: props.iconVariant
    });
  } else if (props.icon) {
    var iconClasses = 'slds-page-header__icon';

    if (props.icon.props) {
      iconClasses = classnames(props.icon.props.className, iconClasses);
    }

    icon = React.cloneElement(props.icon, {
      className: iconClasses
    });
  }

  return React.createElement("div", {
    className: "slds-page-header__row"
  }, React.createElement("div", {
    className: "slds-page-header__col-title"
  }, React.createElement(MediaObject, {
    body: React.createElement(React.Fragment, null, React.createElement("div", {
      className: "slds-page-header__name"
    }, React.createElement(Title, {
      content: props.title
    })), React.createElement(Info, {
      content: props.info,
      variant: props.variant
    })),
    figure: icon
  })), React.createElement(Controls, {
    className: "slds-align-middle",
    navRight: props.navRight,
    onRenderControls: props.onRenderControls,
    type: "controls"
  }));
};

Base.displayName = displayName;
Base.propTypes = propTypes;
export default Base;
//# sourceMappingURL=index.js.map