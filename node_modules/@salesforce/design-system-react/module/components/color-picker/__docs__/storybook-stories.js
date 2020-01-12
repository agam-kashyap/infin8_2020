function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconSettings from '../../icon-settings';
import ColorPicker from '../../color-picker';
import { COLOR_PICKER } from '../../../utilities/constants';
import Default from '../__examples__/default'; // eslint-disable-next-line camelcase

import UNSAFE_DirectionSettings from '../../utilities/UNSAFE_direction';

var makeRtl = function makeRtl(component) {
  return (// eslint-disable-next-line
    React.createElement(UNSAFE_DirectionSettings.Provider, {
      value: "rtl"
    }, React.createElement("div", {
      dir: "rtl"
    }, component))
  );
};

var HEX_REGEX_6_DIGITS = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

var handleChange = function handleChange(event, data) {
  var dataAsArray = Object.keys(data).map(function (key) {
    return data[key];
  });
  action('onChange').apply(void 0, [event, data].concat(_toConsumableArray(dataAsArray)));
};

var customOuterInputValidator = function customOuterInputValidator(hex) {
  return !hex || HEX_REGEX_6_DIGITS.test(hex);
};

storiesOf(COLOR_PICKER, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Default', function () {
  return React.createElement(ColorPicker, {
    className: "test_class_name",
    events: {
      onChange: handleChange
    },
    labels: {
      label: 'Choose Color'
    },
    id: "default-color-picker"
  });
}).add('Default - Right to Left (RTL)', function () {
  return makeRtl(React.createElement(ColorPicker, {
    className: "test_class_name",
    events: {
      onChange: handleChange
    },
    labels: {
      label: 'Choose Color'
    },
    id: "default-color-picker"
  }));
}).add('Custom Only', function () {
  return React.createElement(ColorPicker, {
    events: {
      onChange: handleChange
    },
    id: "custom-only-color-picker",
    labels: {
      label: 'Choose Color'
    },
    variant: "custom"
  });
}).add('Swatch Only', function () {
  return React.createElement(ColorPicker, {
    events: {
      onChange: handleChange
    },
    id: "swatch-only-color-picker",
    labels: {
      label: 'Choose Color'
    },
    variant: "swatches"
  });
}).add('Predefined Colors', function () {
  return React.createElement(ColorPicker, {
    events: {
      onChange: handleChange
    },
    id: "predefined-color-picker",
    labels: {
      label: 'Choose Color'
    },
    swatchColors: ['#000000', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff', ''],
    value: "#000000"
  });
}).add('Predefined Colors Only', function () {
  return React.createElement(ColorPicker, {
    value: "#000000",
    events: {
      onChange: handleChange
    },
    id: "predefined-only-color-picker",
    labels: {
      label: 'Choose Color'
    },
    swatchColors: ['#000000', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff', ''],
    variant: "swatches"
  });
}).add('Hidden Input', function () {
  return React.createElement(ColorPicker, {
    events: {
      onChange: handleChange
    },
    hideInput: true,
    id: "hidden-input-color-picker",
    labels: {
      label: 'Choose Color'
    }
  });
}).add('Custom Tab Selected', function () {
  return React.createElement(ColorPicker, {
    defaultSelectedTab: "custom",
    events: {
      onChange: handleChange
    },
    id: "Custom-tab-default-color-picker",
    labels: {
      label: 'Choose Color'
    }
  });
}).add('Outer Input in Error State', function () {
  return React.createElement(ColorPicker, {
    events: {
      onChange: handleChange
    },
    errorText: "Hex is invalid. Please correct this field.",
    id: "outer-input-error-state-color-picker",
    labels: {
      label: 'Choose Color'
    },
    value: "#invalid"
  });
}).add('Working Color Input in Error State', function () {
  return React.createElement(ColorPicker, {
    events: {
      onChange: handleChange
    },
    errorTextWorkingColor: "Hex is invalid. Please correct this field.",
    id: "working-color-error-state-color-picker",
    labels: {
      label: 'Choose Color'
    },
    valueWorking: "#f",
    variant: "custom"
  });
}).add('Custom Validator', function () {
  return (// Example of a custom validator that support hex color with strictly 6 digits.
    React.createElement(ColorPicker, {
      events: {
        onChange: handleChange,
        onValidateColor: customOuterInputValidator,
        onValidateWorkingColor: customOuterInputValidator
      },
      id: "custom-validator-color-picker",
      labels: {
        label: 'Choose Color'
      }
    })
  );
}).add('Color Picker Disabled', function () {
  return React.createElement(ColorPicker, {
    id: "color-picker",
    disabled: true,
    labels: {
      label: 'Choose Color'
    }
  });
}).add('ColorPicker Menu Open', function () {
  return React.createElement(ColorPicker, {
    id: "color-picker",
    classNameMenu: "test_class_name_menu",
    isOpen: true,
    labels: {
      label: 'Choose Color'
    }
  });
}).add('Doc site Default', function () {
  return React.createElement(Default, null);
});
//# sourceMappingURL=storybook-stories.js.map