function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Tree Branch Component
// Implements the [Tree design pattern](https://www.lightningdesignsystem.com/components/tree/) in React.
// ## Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import findIndex from 'lodash.findindex';
import isFunction from 'lodash.isfunction';
import classNames from 'classnames'; // Child components

import Button from '../../button';
import Highlighter from '../../utilities/highlighter';
import EventUtil from '../../../utilities/event';
import KEYS from '../../../utilities/key-code';
import mapKeyEventCallbacks from '../../../utilities/key-callbacks';
var propTypes = {
  /**
   * HTML `id` of primary element that has `.slds-tree` on it. This component has a wrapping container element outside of `.slds-tree`.
   */
  htmlId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

  /**
   * The text of the tree item.
   */
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

  /**
   * The number of nestings. Determines the ARIA level and style alignment.
   */
  level: PropTypes.number.isRequired,

  /**
   * The current node that is being rendered.
   */
  node: PropTypes.object.isRequired,

  /**
   * This function triggers when the expand or collapse icon is clicked or due to keyboard navigation.
   */
  onExpand: PropTypes.func.isRequired,

  /**
   * Function that will run whenever an item or branch is clicked.
   */
  onSelect: PropTypes.func,

  /**
   * Highlights term if found in node label
   */
  searchTerm: PropTypes.string,

  /**
   * Location of node (zero index). First node is `0`. It's first child is `0-0`. This can be used to modify your nodes without searching for the node. This index is only valid if the `nodes` prop is the same as at the time of the event.
   */
  treeIndex: PropTypes.string,

  /**
   * Flattened tree structure.
   */
  flattenedNodes: PropTypes.arrayOf(PropTypes.object),

  /**
   * Tree indexes of nodes that are currently selected.
   */
  selectedNodeIndexes: PropTypes.arrayOf(PropTypes.string),

  /**
   * Tree index of the node that is currently focused.
   */
  focusedNodeIndex: PropTypes.string,

  /**
   * Callback for when a node is blurred.
   */
  onNodeBlur: PropTypes.func,

  /**
   * Sets focus on render.
   */
  treeHasFocus: PropTypes.bool,

  /**
   * This node's parent.
   */
  parent: PropTypes.object
};

var handleExpand = function handleExpand(event, props) {
  EventUtil.trap(event);

  if (isFunction(props.onExpand)) {
    props.onExpand({
      event: event,
      data: {
        node: props.node,
        expand: !props.node.expanded,
        treeIndex: props.treeIndex
      }
    });
  }
};

var handleSelect = function handleSelect(_ref) {
  var event = _ref.event,
      props = _ref.props,
      fromFocus = _ref.fromFocus;
  EventUtil.trap(event);

  if (isFunction(props.onSelect)) {
    props.onSelect({
      event: event,
      data: {
        node: props.node,
        select: !props.node.selected,
        treeIndex: props.treeIndex
      },
      fromFocus: fromFocus
    });
  }
};

var findNextNode = function findNextNode(flattenedNodes, node) {
  var nodes = flattenedNodes.map(function (flattenedNode) {
    return flattenedNode.node;
  });
  var index = findIndex(nodes, {
    id: node.id
  });
  return flattenedNodes[(index + 1) % flattenedNodes.length];
};

var findPreviousNode = function findPreviousNode(flattenedNodes, node) {
  var nodes = flattenedNodes.map(function (flattenedNode) {
    return flattenedNode.node;
  });
  var index = findIndex(nodes, {
    id: node.id
  }) - 1;

  if (index < 0) {
    index += flattenedNodes.length;
  }

  return flattenedNodes[index];
};

var handleKeyDownDown = function handleKeyDownDown(event, props) {
  if (props.focusedNodeIndex === props.treeIndex) {
    // Select the next visible node
    var flattenedNode = findNextNode(props.flattenedNodes, props.node);
    props.onSelect({
      event: event,
      data: {
        node: flattenedNode.node,
        select: true,
        treeIndex: flattenedNode.treeIndex
      },
      clearSelectedNodes: true
    });
  }
};

var handleKeyDownUp = function handleKeyDownUp(event, props) {
  if (props.focusedNodeIndex === props.treeIndex) {
    // Go to the previous visible node
    var flattenedNode = findPreviousNode(props.flattenedNodes, props.node);
    props.onSelect({
      event: event,
      data: {
        node: flattenedNode.node,
        select: true,
        treeIndex: flattenedNode.treeIndex
      },
      clearSelectedNodes: true
    });
  }
};

var handleKeyDownRight = function handleKeyDownRight(event, props) {
  if (props.node.expanded) {
    if (props.getNodes(props.node) && props.getNodes(props.node).length > 0) {
      handleKeyDownDown(event, props);
    }
  } else {
    handleExpand(event, props);
  }
};

var handleKeyDownLeft = function handleKeyDownLeft(event, props) {
  if (props.node.expanded) {
    handleExpand(event, props);
  } else {
    var nodes = props.flattenedNodes.map(function (flattenedNode) {
      return flattenedNode.node;
    });
    var index = findIndex(nodes, {
      id: props.parent.id
    });

    if (index !== -1) {
      props.onExpand({
        event: event,
        data: {
          node: props.parent,
          select: true,
          expand: !props.parent.expanded,
          treeIndex: props.flattenedNodes[index].treeIndex
        }
      });
    }
  }
};

var handleKeyDownEnter = function handleKeyDownEnter(event, props) {
  handleSelect({
    event: event,
    props: props
  });
};

var handleKeyDown = function handleKeyDown(event, props) {
  var _callbacks;

  mapKeyEventCallbacks(event, {
    callbacks: (_callbacks = {}, _defineProperty(_callbacks, KEYS.DOWN, {
      callback: function callback(evt) {
        return handleKeyDownDown(evt, props);
      }
    }), _defineProperty(_callbacks, KEYS.UP, {
      callback: function callback(evt) {
        return handleKeyDownUp(evt, props);
      }
    }), _defineProperty(_callbacks, KEYS.RIGHT, {
      callback: function callback(evt) {
        return handleKeyDownRight(evt, props);
      }
    }), _defineProperty(_callbacks, KEYS.LEFT, {
      callback: function callback(evt) {
        return handleKeyDownLeft(evt, props);
      }
    }), _defineProperty(_callbacks, KEYS.ENTER, {
      callback: function callback(evt) {
        return handleKeyDownEnter(evt, props);
      }
    }), _callbacks)
  });
};

var handleFocus = function handleFocus(event, props) {
  if (!props.treeHasFocus && !props.focusedNodeIndex && event.target === event.currentTarget) {
    // did it happen by mouse?
    handleSelect({
      event: event,
      props: props,
      fromFocus: true
    });
  }
};

var getTabIndex = function getTabIndex(props) {
  var initialFocus = props.selectedNodeIndexes.length === 0 && props.treeIndex === props.flattenedNodes[0].treeIndex;
  return props.treeIndex === props.focusedNodeIndex || initialFocus ? 0 : -1;
}; // Most of these props come from the nodes array, not from the Tree props


var RenderBranch = function RenderBranch(children, props) {
  var isExpanded = props.node.expanded;
  var isSelected = props.node.selected;
  var isFocused = props.treeIndex === props.focusedNodeIndex;
  var isLoading = props.node.loading;
  var loader = React.createElement("div", {
    style: {
      display: 'block',
      paddingLeft: "".concat(1.5 * props.level + 1.5, "rem"),
      marginTop: '.5rem'
    }
  }, React.createElement("div", {
    style: {
      borderRadius: '15rem',
      display: 'block',
      marginBottom: '.75rem',
      height: '.5rem',
      backgroundColor: 'rgb(224, 229, 238)',
      width: '40%'
    }
  }), React.createElement("div", {
    style: {
      borderRadius: '15rem',
      display: 'block',
      marginBottom: '.75rem',
      height: '.5rem',
      backgroundColor: 'rgb(224, 229, 238)',
      width: '80%'
    }
  }), React.createElement("div", {
    style: {
      borderRadius: '15rem',
      display: 'block',
      marginBottom: '.75rem',
      height: '.5rem',
      backgroundColor: 'rgb(224, 229, 238)',
      width: '60%'
    }
  }));
  var label = props.node.assistiveText || (typeof props.node.label === 'string' ? props.node.label : null);
  return React.createElement("li", {
    id: props.htmlId,
    role: "treeitem",
    "aria-level": props.level,
    "aria-expanded": isExpanded ? 'true' : 'false',
    "aria-label": props.node.nodes && props.node.nodes.length > 0 ? label : null,
    tabIndex: getTabIndex(props),
    onKeyDown: function onKeyDown(event) {
      return handleKeyDown(event, props);
    },
    onFocus: function onFocus(event) {
      return handleFocus(event, props);
    },
    onBlur: props.onNodeBlur,
    ref: function ref(component) {
      if (props.treeHasFocus && component && isFocused) {
        component.focus();
      }
    }
  }, React.createElement("div", {
    className: classNames('slds-tree__item', {
      'slds-is-selected': isSelected
    }),
    onClick: function onClick(event) {
      handleSelect({
        event: event,
        props: props
      });
    }
  }, React.createElement(Button, {
    "aria-hidden": true,
    assistiveText: {
      icon: 'Expand Tree Branch'
    },
    iconCategory: "utility",
    iconName: "chevronright",
    iconSize: "small",
    variant: "icon",
    className: "slds-m-right_small",
    role: "presentation",
    "aria-controls": props.htmlId,
    onClick: function onClick(event) {
      handleExpand(event, props);
    },
    tabIndex: "-1"
  }), React.createElement("span", {
    className: "slds-size_1-of-1",
    id: "".concat(props.htmlId, "__label")
  }, React.createElement(Highlighter, {
    search: props.searchTerm,
    className: "slds-tree__item-label slds-truncate"
  }, props.label))), isLoading ? loader : null, React.createElement("ul", {
    className: classNames({
      'slds-is-expanded': isExpanded,
      'slds-is-collapsed': !isExpanded
    }),
    role: "group",
    "aria-labelledby": "".concat(props.htmlId, "__label")
  }, isExpanded && !isLoading ? children : null));
};

RenderBranch.displayName = 'Branch';
RenderBranch.propTypes = propTypes;
export default RenderBranch;
//# sourceMappingURL=render-branch.js.map