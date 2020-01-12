import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { INPUT } from '../../../utilities/constants';
import Button from '../../button';
import IconSettings from '../../icon-settings';
import Input from '../';
import InputIcon from '../../icon/input-icon';
import CounterInput from '../__examples__/counter-input';
import CounterStaticInput from '../__examples__/counter-static-input';
import InlineHelpInput from '../__examples__/inline-help';
import FieldLevelHelpInput from '../__examples__/field-level-help';
import Default from '../__examples__/default';
import Error from '../__examples__/error';
import Icons from '../__examples__/icons';
import InactiveInputs from '../__examples__/inactiveInputs';
var iconClicked = action;
var clearIcon = React.createElement(InputIcon, {
  assistiveText: {
    icon: 'clear'
  },
  name: "clear",
  category: "utility"
});
var clearIconClickable = React.createElement(InputIcon, {
  assistiveText: {
    icon: 'clear'
  },
  name: "clear",
  category: "utility",
  onClick: iconClicked('Clear icon clicked')
});
var searchIcon = React.createElement(InputIcon, {
  name: "search",
  category: "utility"
});
var searchIconClickable = React.createElement(InputIcon, {
  assistiveText: {
    icon: 'Search'
  },
  name: "search",
  category: "utility",
  onClick: iconClicked('Search icon clicked')
});
storiesOf(INPUT, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Base', function () {
  return React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, React.createElement("section", null, React.createElement("ol", null, React.createElement("li", {
    className: "slds-p-bottom_large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "1. Base Input with visible label"), React.createElement(Input, {
    id: "base-id",
    label: "My Label",
    placeholder: "My placeholder"
  })), React.createElement("li", {
    className: "slds-p-bottom_large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "2. Base Input with hidden label (assistive text)"), React.createElement(Input, {
    assistiveText: {
      label: 'My label'
    },
    id: "assistiveLabel-id",
    placeholder: "My placeholder"
  })))));
}).add('Custom style and autocomplete', function () {
  return React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, React.createElement("section", null, React.createElement("ol", null, React.createElement("li", {
    className: "slds-p-bottom_large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "Input with custom style"), React.createElement(Input, {
    autoComplete: "off",
    styleInput: {
      width: 130,
      height: 30,
      background: '#efffff'
    },
    id: "custom-style",
    label: "My Label",
    placeholder: "My placeholder"
  })))));
}).add('Base with Icons', function () {
  return React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, React.createElement("section", null, React.createElement("ol", null, React.createElement("li", {
    className: "slds-p-bottom_large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "1. Base Input with left icon"), React.createElement(Input, {
    id: "with-left-icon",
    label: "My label",
    iconLeft: searchIcon,
    placeholder: "My placeholder"
  })), React.createElement("li", {
    className: "slds-p-bottom_large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "2. Base Input with Clickable left icon"), React.createElement(Input, {
    id: "with-left-clickable-icon",
    label: "My Label",
    iconLeft: searchIconClickable,
    placeholder: "My placeholder"
  })), React.createElement("li", {
    className: "slds-p-bottom_large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "3. Base Input with right icon"), React.createElement(Input, {
    id: "with-right-icon",
    label: "My Label",
    iconRight: searchIcon,
    placeholder: "My placeholder"
  })), React.createElement("li", {
    className: "slds-p-bottom_large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "4. Base Input with Clickable right icon"), React.createElement(Input, {
    id: "with-right-clickable-icon",
    label: "My Label",
    iconRight: clearIconClickable,
    placeholder: "My placeholder"
  })), React.createElement("li", {
    className: "slds-p-bottom_large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "5. Base Input with left and right icons"), React.createElement(Input, {
    id: "with-left-and-right-icons",
    label: "My Label",
    iconLeft: searchIcon,
    iconRight: clearIcon,
    placeholder: "My placeholder"
  })), React.createElement("li", {
    className: "slds-p-bottom_large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "6. Base Input with Clickable left and right icon"), React.createElement(Input, {
    id: "with-clickable-left-and-right-icon",
    label: "My label",
    iconLeft: searchIconClickable,
    iconRight: clearIconClickable,
    placeholder: "My placeholder"
  })), React.createElement("li", {
    className: "slds-p-bottom_large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "7. Base Input with left and clickable right icon"), React.createElement(Input, {
    id: "with-left-and-clickable-right-icon",
    label: "My Label",
    iconLeft: searchIcon,
    iconRight: clearIconClickable,
    placeholder: "My placeholder"
  })), React.createElement("li", {
    className: "slds-p-bottom_large"
  }, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "8. Base Input with left, clickable right icon, and loading spinner"), React.createElement(Input, {
    id: "with-left-clickable-right-and-spinner",
    assistiveText: {
      spinner: 'Field data is loading'
    },
    hasSpinner: true,
    iconLeft: searchIcon,
    iconRight: clearIconClickable,
    label: "My Label",
    name: "right-clickable-icon",
    placeholder: "My placeholder"
  })))));
}).add('Fixed Text', function () {
  return React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, React.createElement("section", null, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "Input with Fixed Text"), React.createElement(Input, {
    id: "fixed-text",
    assistiveText: {
      label: 'My Label'
    },
    name: "fixed-text",
    label: "My Label",
    fixedTextLeft: "$",
    placeholder: "My placeholder"
  })));
}).add('Read Only', function () {
  return React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, React.createElement("section", null, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "Read only Input"), React.createElement(Input, {
    id: "read-only",
    name: "read-only",
    label: "My Label",
    readOnly: true,
    value: "Read Only Value"
  })));
}).add('Static Input', function () {
  return React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, React.createElement("section", null, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "Static Input"), React.createElement(Input, {
    id: "static-input",
    name: "static-input",
    label: "My Label",
    isStatic: true,
    value: "Static value"
  })));
}).add('Disabled Input', function () {
  return React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, React.createElement("section", null, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "Disabled Input"), React.createElement(Input, {
    id: "disabled-input",
    name: "disabled-input",
    label: "My Label",
    disabled: true,
    value: "Disabled value"
  })));
}).add('Required Input in Error State', function () {
  return React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, React.createElement("section", null, React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "Example Button"), React.createElement(Button, {
    label: "Test"
  }), React.createElement("h1", {
    className: "slds-text-title_caps slds-p-vertical_medium"
  }, "Required Input with Error"), React.createElement(Input, {
    id: "required-input-error",
    "aria-describedby": "error-1",
    name: "required-input-error",
    label: "My Label",
    required: true,
    errorText: "This field is required.",
    placeholder: "My placeholder"
  })));
}).add('Inline Help', function () {
  return React.createElement(InlineHelpInput, null);
}).add('Field Level Help', function () {
  return React.createElement(FieldLevelHelpInput, null);
}).add('Field Level Help, Tooltip Open', function () {
  return React.createElement(FieldLevelHelpInput, {
    tooltipOpen: true
  });
}).add('Counter Input', function () {
  return React.createElement(CounterInput, null);
}).add('Counter Static Input', function () {
  return React.createElement(CounterStaticInput, null);
}).add('Docs site Default', function () {
  return React.createElement(Default, null);
}).add('Docs site Error', function () {
  return React.createElement(Error, null);
}).add('Docs site Icons', function () {
  return React.createElement(Icons, null);
}).add('Docs site InactiveInputs', function () {
  return React.createElement(InactiveInputs, null);
});
//# sourceMappingURL=storybook-stories.js.map