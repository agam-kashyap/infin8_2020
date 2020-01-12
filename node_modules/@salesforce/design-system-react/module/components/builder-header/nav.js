import React from 'react';
import PropTypes from 'prop-types';
import { BUILDER_HEADER_NAV, BUILDER_HEADER_NAV_DROPDOWN, BUILDER_HEADER_NAV_LINK } from '../../utilities/constants';
var propTypes = {
  /**
   * Provide children of the types `<BuilderHeaderNavLink />` or `<BuilderHeaderNavDropdown />` to define the structure of the navigation section.
   * ```
   * <BuilderHeader>
   *   <BuilderHeaderNav>
   *     <BuilderHeaderNavLink />
   *     <BuilderHeaderNavDropdown />
   *   </BuilderHeaderNav>
   * </BuilderHeader>
   * ```
   */
  children: PropTypes.node
};
/**
 * The navigation section of the header.
 */

var BuilderHeaderNav = function BuilderHeaderNav(props) {
  return React.createElement("nav", {
    className: "slds-builder-header__item slds-builder-header__nav"
  }, React.createElement("ul", {
    className: "slds-builder-header__nav-list"
  }, React.Children.map(props.children, function (child) {
    if (child.type.displayName === BUILDER_HEADER_NAV_LINK || child.type.displayName === BUILDER_HEADER_NAV_DROPDOWN) {
      return child;
    }

    return null;
  })));
};

BuilderHeaderNav.displayName = BUILDER_HEADER_NAV;
BuilderHeaderNav.propTypes = propTypes;
export default BuilderHeaderNav;
//# sourceMappingURL=nav.js.map