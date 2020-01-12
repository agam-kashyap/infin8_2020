/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
import React from 'react'; // This function will deliver an error message to the browser console when all of the props passed in are undefined (falsey).

import warning from 'warning';

var renderFunctionReturnContentsLackDisplayName = function renderFunctionReturnContentsLackDisplayNameFunction() {};

if (process.env.NODE_ENV !== 'production') {
  var hasWarned = {};

  renderFunctionReturnContentsLackDisplayName = function renderFunctionReturnContentsLackDisplayNameFunction(control, propName, renderFunctionReturnContents, displayNames, // array of allowed displayName strings
  checkChildren, // if true children of the render function return main node will be checked for displayNames matches
  comment) {
    var additionalComment = comment ? " ".concat(comment) : '';
    var displayNamesJoined = displayNames.join(',');
    var foundDiscrepancy = false;

    if (!renderFunctionReturnContents.type || !renderFunctionReturnContents.type.displayName || !displayNamesJoined.match(renderFunctionReturnContents.type.displayName)) {
      if (checkChildren && renderFunctionReturnContents.props && renderFunctionReturnContents.props.children) {
        React.Children.forEach(renderFunctionReturnContents.props.children, function (child) {
          if (!child || !child.type || !child.type.displayName || !displayNamesJoined.match(child.type.displayName)) {
            foundDiscrepancy = true;
          }
        });
      } else {
        foundDiscrepancy = true;
      }
    }

    if (foundDiscrepancy && !hasWarned[control]) {
      var allowedDisplayNames = '';
      displayNames.forEach(function (displayName, index) {
        allowedDisplayNames += displayName;

        if (displayNames.length > index + 2) {
          allowedDisplayNames += ', ';
        } else if (displayNames.length > index + 1) {
          allowedDisplayNames += displayNames.length > 2 ? ', or ' : ' or ';
        }
      });
      /* eslint-disable max-len */

      warning(false, "[Design System React] Content provided by `".concat(propName, "` for ").concat(control, " must have a `displayName` property value of ").concat(allowedDisplayNames).concat(checkChildren ? " or be an element/fragment with children all having the `displayName` property value of ".concat(allowedDisplayNames, ".") : '.', " Please review ").concat(propName, " prop documentation.").concat(additionalComment));
      /* eslint-enable max-len */

      hasWarned[control] = true;
    }
  };
}

export default renderFunctionReturnContentsLackDisplayName;
//# sourceMappingURL=render-function-return-contents-lack-display-name.js.map