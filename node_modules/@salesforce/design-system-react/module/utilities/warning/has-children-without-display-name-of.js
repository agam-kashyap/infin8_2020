/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
import React from 'react'; // This function will deliver an error message to the browser console when all of the props passed in are undefined (falsey).

import warning from 'warning';

var hasChildrenWithoutDisplayNameOf = function hasChildrenWithoutDisplayNameOfFunction() {};

if (process.env.NODE_ENV !== 'production') {
  var hasWarned = {}; // TODO: allow `displayName` to be an array of displayNames

  hasChildrenWithoutDisplayNameOf = function hasChildrenWithoutDisplayNameOfFunction(control, children, displayName, comment) {
    if (!hasWarned[control]) {
      var additionalComment = comment ? " ".concat(comment) : '';
      var childrenWithoutSelectedDisplayName = [];
      React.Children.forEach(children, function (child) {
        if (child && child.type && child.type.displayName !== displayName) {
          // eslint-disable-next-line fp/no-mutating-methods
          childrenWithoutSelectedDisplayName.push(child);
        }
      });
      var hasChildrenWithoutSelectedDisplayName = childrenWithoutSelectedDisplayName.length > 0;

      if (hasChildrenWithoutSelectedDisplayName) {
        /* eslint-disable max-len */
        warning(false, "[Design System React] Unable to use child components specified within ".concat(control, ". Please use a child component with a `displayName` class property value of ").concat(displayName, ". Children without that class property are ignored. Please review `children` prop documentation.").concat(additionalComment));
        /* eslint-enable max-len */
      }

      hasWarned[control] = !!hasChildrenWithoutSelectedDisplayName;
    }
  };
}

export default hasChildrenWithoutDisplayNameOf;
//# sourceMappingURL=has-children-without-display-name-of.js.map