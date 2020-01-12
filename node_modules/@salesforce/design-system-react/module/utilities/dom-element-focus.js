import findTabbableElement from './tabbable';
import KEYS from './key-code';
import { canUseDOM } from './execution-environment';
var ancestor = null;
var focusLaterElement = null;

var handleScopedKeyDown = function handleScopedKeyDown(event) {
  if (!canUseDOM || !ancestor || event.keyCode !== KEYS.TAB) {
    return;
  }

  var tabbableElements = findTabbableElement(ancestor);
  var finalTabbable = tabbableElements[event.shiftKey ? 0 : tabbableElements.length - 1];
  var leavingFinalTabbable = finalTabbable === document.activeElement || // handle immediate shift+tab after opening with mouse
  ancestor === document.activeElement;
  if (!leavingFinalTabbable) return;
  event.preventDefault();
  var target = tabbableElements[event.shiftKey ? tabbableElements.length - 1 : 0];
  target.focus();
}; // PUBLIC methods


var ElementFocus = {
  focusAncestor: function focusAncestor(_ref) {
    var isPortal = _ref.isPortal;

    if (canUseDOM) {
      // When a portal is used (that is attaching a separate React mount, such as with Popover) programatic focusing within that portal may cause the window to scroll down to the DOM insertion point at the end of `body`. The following prevents the scrolling from occuring.
      if (isPortal) {
        var offset = window.pageYOffset;
        ancestor.focus({
          preventScroll: true
        });
        window.scrollTo(window.pageXOffset, offset);
      } else {
        ancestor.focus();
      }
    }
  },
  hasOrAncestorHasFocus: function hasOrAncestorHasFocus() {
    return canUseDOM && (document.activeElement === ancestor || ancestor.contains(document.activeElement));
  },
  returnFocusToStoredElement: function returnFocusToStoredElement() {
    if (canUseDOM) {
      try {
        focusLaterElement.focus();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn("You tried to return focus to ".concat(focusLaterElement, " but it is not in the DOM anymore"));
      }

      focusLaterElement = null;
    }
  },
  setupScopedFocus: function setupScopedFocus(_ref2) {
    var ancestorElement = _ref2.ancestorElement;
    ancestor = ancestorElement;
    window.addEventListener('keydown', handleScopedKeyDown, false);
  },
  storeActiveElement: function storeActiveElement() {
    focusLaterElement = canUseDOM ? document.activeElement : null;
  },
  teardownScopedFocus: function teardownScopedFocus() {
    ancestor = null;

    if (canUseDOM) {
      window.removeEventListener('keydown', handleScopedKeyDown);
    }
  }
};
export default ElementFocus;
//# sourceMappingURL=dom-element-focus.js.map