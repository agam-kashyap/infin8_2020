/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
import urlExists from '../../../utilities/warning/url-exists';
import { DIRECTIONS } from '../UNSAFE_direction';

var checkProps = function checkPropsFunction() {};

if (process.env.NODE_ENV !== 'production') {
  checkProps = function checkPropsFunction(COMPONENT, props) {
    if (!props.context["".concat(props.category, "Sprite")] && !props.context.onRequestIconPath) {
      var modifiedPath = props.path || props.context.iconPath;
      var svgAssetName = props.direction === DIRECTIONS.RTL ? 'symbols-rtl.svg' : 'symbols.svg';
      urlExists(COMPONENT, "".concat(modifiedPath, "/").concat(props.category, "-sprite/svg/").concat(svgAssetName, "#").concat(props.name));
    }
  };
}

export default checkProps;
//# sourceMappingURL=check-props.js.map