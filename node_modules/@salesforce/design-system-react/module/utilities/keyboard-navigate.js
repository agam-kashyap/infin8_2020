function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import ReactDOM from 'react-dom';
import escapeRegExp from 'lodash.escaperegexp';
import KEYS from './key-code';

var keyboardNavigate = function keyboardNavigate(_ref) {
  var componentContext = _ref.componentContext,
      currentFocusedIndex = _ref.currentFocusedIndex,
      isOpen = _ref.isOpen,
      event = _ref.event,
      key = _ref.key,
      keyCode = _ref.keyCode,
      navigableItems = _ref.navigableItems,
      onFocus = _ref.onFocus,
      onSelect = _ref.onSelect,
      target = _ref.target,
      toggleOpen = _ref.toggleOpen;
  var indexes = navigableItems.indexes;
  var lastIndex = indexes.length - 1;
  var focusedIndex;
  var ch = key || String.fromCharCode(keyCode);

  if (/^[ -~]$/.test(ch)) {
    ch = ch.toLowerCase();
  } else {
    ch = null;
  }

  var openMenuKeys = keyCode === KEYS.ENTER || keyCode === KEYS.SPACE || keyCode === KEYS.UP;

  if (keyCode === KEYS.ESCAPE) {
    if (isOpen) toggleOpen();
  } else if (!isOpen) {
    var _indexes = _slicedToArray(indexes, 1);

    focusedIndex = _indexes[0];

    if (openMenuKeys || ch) {
      toggleOpen();
    }

    if (openMenuKeys && componentContext.trigger && // eslint-disable-next-line react/no-find-dom-node
    ReactDOM.findDOMNode(componentContext.trigger) === target) {
      componentContext.handleClick(event);
    }
  } else if (keyCode === KEYS.ENTER || keyCode === KEYS.SPACE) {
    onSelect(currentFocusedIndex);
  } else {
    var navigableIndex = indexes.indexOf(currentFocusedIndex);

    if (keyCode === KEYS.DOWN) {
      if (navigableIndex < lastIndex) {
        var newNavigableIndex = navigableIndex + 1;
        focusedIndex = indexes[newNavigableIndex];
      } else {
        var _indexes2 = _slicedToArray(indexes, 1);

        focusedIndex = _indexes2[0];
      }
    } else if (keyCode === KEYS.UP) {
      if (navigableIndex > 0) {
        var _newNavigableIndex = navigableIndex - 1;

        focusedIndex = indexes[_newNavigableIndex];
      } else {
        focusedIndex = indexes[lastIndex];
      }
    } else if (ch) {
      // Combine subsequent keypresses
      var pattern = navigableItems.keyBuffer(ch);
      var consecutive = 0; // Support for navigating to the next option of the same letter with repeated presses of the same key

      if (pattern.length > 1 && new RegExp("^[".concat(escapeRegExp(ch), "]+$")).test(pattern)) {
        consecutive = pattern.length;
      }

      navigableItems.forEach(function (item) {
        if (focusedIndex === undefined && item.text.substr(0, pattern.length) === pattern || consecutive > 0 && item.text.substr(0, 1) === ch) {
          consecutive -= 1;
          focusedIndex = item.index;
        }
      });
    }
  }

  onFocus(focusedIndex);
  return focusedIndex;
};

export default keyboardNavigate;
//# sourceMappingURL=keyboard-navigate.js.map