import React from 'react';
import PropTypes from 'prop-types';
import { BUILDER_HEADER_MISC } from '../../utilities/constants';
var propTypes = {
  /**
   * Provide custom content in place of Page Type label
   * ```
   * <BuilderHeader>
   *   <BuilderHeaderMisc>
   *     Custom content
   *   </BuilderHeaderMisc>
   * </BuilderHeader>
   * ```
   */
  children: PropTypes.node
};
/**
 * The miscellaneous section of the header.
 */

var BuilderHeaderMisc = function BuilderHeaderMisc(props) {
  return React.createElement("div", {
    className: "slds-builder-header__item",
    style: {
      width: '100%'
    }
  }, React.createElement("div", {
    className: "slds-builder-header__item-label"
  }, props.children));
};

BuilderHeaderMisc.displayName = BUILDER_HEADER_MISC;
BuilderHeaderMisc.propTypes = propTypes;
export default BuilderHeaderMisc;
//# sourceMappingURL=misc.js.map