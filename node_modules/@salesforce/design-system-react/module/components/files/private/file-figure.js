/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # FileFigure Component
// Implements the [FileFigure design pattern](https://www.lightningdesignsystem.com/components/files/) in React.
import React from 'react';
import PropTypes from 'prop-types';
import { FILES_FIGURE } from '../../../utilities/constants';
import Spinner from '../../spinner';
/**
 * A file can have a image, an icon or a loading animation as its thumbnail
 */

var FileFigure = function FileFigure(props) {
  if (props.isLoading) {
    return React.createElement(React.Fragment, null, React.createElement("span", {
      className: "slds-assistive-text"
    }, props.assistiveText.link), React.createElement(Spinner, {
      size: "medium",
      variant: "base",
      assistiveText: {
        label: props.assistiveText.loading
      },
      containerStyle: {
        zIndex: '1'
      }
    }));
  }

  if (props.image) {
    return React.createElement(React.Fragment, null, React.createElement("span", {
      className: "slds-assistive-text"
    }, props.assistiveText.link), React.createElement("img", {
      alt: props.assistiveText.image || props.labels.title,
      src: props.image
    }));
  }

  return React.createElement(React.Fragment, null, React.createElement("span", {
    className: "slds-assistive-text"
  }, props.assistiveText.link), React.createElement("span", {
    className: "slds-file__icon slds-icon_container",
    title: props.labels.title
  }, React.cloneElement(props.icon, {
    size: null
  })));
};

FileFigure.displayName = FILES_FIGURE;
FileFigure.propTypes = {
  assistiveText: PropTypes.shape({
    image: PropTypes.string
  }),

  /**
   *  Whether the file figure is loading
   */
  isLoading: PropTypes.bool,

  /**
   *  Image/Figure for the file
   */
  image: PropTypes.string,

  /**
   *  Labels for the file figure component
   */
  labels: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
};
FileFigure.defaultProps = {
  isLoading: false
};
export default FileFigure;
//# sourceMappingURL=file-figure.js.map