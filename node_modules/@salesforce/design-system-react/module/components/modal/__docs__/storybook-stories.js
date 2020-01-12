/* eslint-disable react/display-name */
import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconSettings from '../../icon-settings';
import { MODAL } from '../../../utilities/constants';
import Modal from '../../modal';
import Combobox from '../../combobox/';
import Timepicker from '../../time-picker';
import Datepicker from '../../date-picker';
import Button from '../../button';
import ComboboxBase from '../../combobox/__examples__/base';
import ModalCustomParentNode from '../__examples__/modal-custom-parent-node';
import SLDSSettings from '../../SLDSSettings';
import HeaderFooter from '../__examples__/header-footer';
import MenuContents from '../__examples__/menu-contents';
import Prompt from '../__examples__/prompt';
import Sizes from '../__examples__/sizes';
import Taglines from '../__examples__/taglines';
import { canUseDOM } from '../../../utilities/execution-environment'; // used by Modal component

if (canUseDOM && document.querySelector('#root')) {
  SLDSSettings.setAppElement('#root');
} else if (canUseDOM) {
  SLDSSettings.setAppElement(document.createElement('div'));
}

var getModal = function getModal(props) {
  return React.createElement(Modal, props);
};

var modalFooter = [React.createElement(Button, {
  key: "modalBCancel",
  label: "Cancel"
}), React.createElement(Button, {
  key: "modalBSave",
  label: "Save",
  variant: "brand"
})];
var leadSourceTypes = [{
  id: 1,
  label: 'Third Party Program',
  value: 'A0'
}, {
  id: 2,
  label: 'Cold Call',
  value: 'B0'
}, {
  id: 3,
  label: 'LinkedIn',
  value: 'C0'
}, {
  id: 4,
  label: 'Direct Mail',
  value: 'D0'
}, {
  id: 5,
  label: 'Other',
  value: 'E0'
}];
var modalContent = React.createElement("section", {
  className: "slds-p-around_large"
}, React.createElement("div", {
  className: "slds-form-element slds-m-bottom_large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "opptyName"
}, "Opportunity Name"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("input", {
  id: "opptyName",
  className: "slds-input",
  type: "text",
  placeholder: "Enter name"
}))), React.createElement("div", {
  className: "slds-form-element slds-m-bottom_large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "description"
}, "Opportunity Description"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("textarea", {
  id: "description",
  className: "slds-textarea",
  placeholder: "Enter description"
}))), React.createElement("div", {
  className: "slds-form-element slds-m-vertical_large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "amount"
}, "Amount"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("input", {
  id: "amount",
  className: "slds-input",
  type: "text",
  placeholder: "Enter Amount"
}))), React.createElement("div", {
  className: "slds-form-element slds-m-vertical_large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "amount"
}, "Amount"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("input", {
  id: "amount",
  className: "slds-input",
  type: "text",
  placeholder: "Enter Amount"
}))), React.createElement("div", {
  className: "slds-m-bottom_large"
}, React.createElement(Datepicker, {
  onDateChange: function onDateChange() {
    action('date is selected');
  },
  formatter: function formatter(date) {
    return date ? moment(date).format('M/D/YYYY') : '';
  },
  parser: function parser(dateString) {
    return moment(dateString, 'MM-DD-YYYY').toDate();
  }
})), React.createElement("div", {
  className: "slds-form-element slds-m-bottom_large"
}, React.createElement(ComboboxBase, null)), React.createElement("div", {
  className: "slds-m-bottom_large"
}, React.createElement(Combobox, {
  events: {
    onSelect: function onSelect(event, data) {
      return action('selected: ', data.selection[0].label);
    }
  },
  labels: {
    label: 'Lead Source',
    placeholder: 'Select Lead Source'
  },
  menuPosition: "relative",
  options: leadSourceTypes,
  selection: [leadSourceTypes[1]],
  variant: "readonly"
})), React.createElement("div", {
  className: "slds-m-bottom_large"
}, React.createElement(Timepicker, {
  onDateChange: function onDateChange() {
    action('time is selected');
  }
})), React.createElement("div", {
  className: "slds-form-element slds-m-vertical_large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "amount"
}, "Amount"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("input", {
  id: "amount",
  className: "slds-input",
  type: "text",
  placeholder: "Enter Amount"
}))), React.createElement("div", {
  className: "slds-form-element slds-m-vertical_large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "amount"
}, "Amount"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("input", {
  id: "amount",
  className: "slds-input",
  type: "text",
  placeholder: "Enter Amount"
}))), React.createElement("div", {
  className: "slds-form-element slds-m-vertical_large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "amount"
}, "Amount"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("input", {
  id: "amount",
  className: "slds-input",
  type: "text",
  placeholder: "Enter Amount"
}))), React.createElement("div", {
  className: "slds-form-element slds-m-vertical_large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "amount"
}, "Amount"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("input", {
  id: "amount",
  className: "slds-input",
  type: "text",
  placeholder: "Enter Amount"
}))), React.createElement("div", {
  className: "slds-form-element slds-m-vertical_large"
}, React.createElement("label", {
  className: "slds-form-element__label",
  htmlFor: "amount"
}, "Amount"), React.createElement("div", {
  className: "slds-form-element__control"
}, React.createElement("input", {
  id: "amount",
  className: "slds-input",
  type: "text",
  placeholder: "Enter Amount"
}))));
storiesOf(MODAL, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, React.createElement(IconSettings, {
    iconPath: "/assets/icons"
  }, getStory()));
}).add('Modal with Custom Parent Node', function () {
  return React.createElement(ModalCustomParentNode, null);
}).add('Small', function () {
  return getModal({
    assistiveText: {
      closeButton: 'Exit'
    },
    isOpen: true,
    tagline: 'Enter in details below',
    heading: 'New Opportunity',
    children: modalContent,
    onRequestClose: action('modal closed'),
    portalClassName: 'portal-class-name-test'
  });
}).add('Small with footer, not dismissible', function () {
  return getModal({
    disableClose: true,
    isOpen: true,
    tagline: 'Enter in details below',
    heading: 'New Opportunity',
    children: modalContent,
    onRequestClose: action('modal closed'),
    footer: modalFooter
  });
}).add('Small with custom footer', function () {
  return getModal({
    directional: true,
    isOpen: true,
    tagline: 'Enter in details below',
    heading: 'New Opportunity',
    children: modalContent,
    onRequestClose: action('modal closed'),
    footer: React.createElement("div", null, React.createElement(Button, {
      label: "cancel"
    }), " and some random text in here", ' ', React.createElement(Button, {
      label: "update"
    }), React.createElement(Button, {
      label: "run"
    }))
  });
}).add('Small no header', function () {
  return getModal({
    isOpen: true,
    children: modalContent,
    onRequestClose: action('modal closed'),
    portalClassName: 'portal-class-name-test'
  });
}).add('Small no header and custom footer', function () {
  return getModal({
    isOpen: true,
    children: modalContent,
    onRequestClose: action('modal closed'),
    portalClassName: 'portal-class-name-test',
    footer: modalFooter
  });
}).add('Large with directional footer', function () {
  return getModal({
    directional: true,
    isOpen: true,
    tagline: 'Enter in details below',
    heading: 'New Opportunity',
    children: modalContent,
    onRequestClose: action('modal closed'),
    footer: modalFooter,
    size: 'large'
  });
}).add('Prompt', function () {
  return getModal({
    isOpen: true,
    heading: 'Delete state - Default',
    children: React.createElement("div", {
      className: "slds-p-around_medium"
    }, "Are you sure you want to delete the Default State? This action cannot be undone. Are you sure you want to delete the Default State? This action cannot be undone. Are you sure you want to delete the Default State? This action cannot be undone.", ' ', React.createElement(Button, {
      className: "slds-m-around_medium"
    }, "Ok, got it!")),
    // eslint-disable-line max-len
    prompt: 'error',
    onRequestClose: action('modal closed')
  });
}).add('Docs site HeaderFooter', function () {
  return React.createElement(HeaderFooter, null);
}).add('Docs site MenuContents', function () {
  return React.createElement(MenuContents, null);
}).add('Docs site Prompt', function () {
  return React.createElement(Prompt, null);
}).add('Docs site Sizes', function () {
  return React.createElement(Sizes, null);
}).add('Docs site Taglines', function () {
  return React.createElement(Taglines, null);
});
//# sourceMappingURL=storybook-stories.js.map