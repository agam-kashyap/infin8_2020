/* eslint-disable no-unused-vars */

/* eslint-disable react/no-find-dom-node */
import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'lodash.assign';
import TestUtils from 'react-dom/test-utils';
import { expect } from 'chai';
import SLDSModal from '../../modal';
import IconSettings from '../../icon-settings';
import Settings from '../../settings';
var Simulate = TestUtils.Simulate;
describe('SLDSModal: ', function () {
  var container;
  var renderedNode; // set "app node" fixture, so no warnings are triggered.

  var appNode = document.createElement('span');
  appNode.id = 'app';
  document.body.appendChild(appNode);
  Settings.setAppElement('#app');
  after(function () {
    document.body.removeChild(appNode);
    appNode = null;
  });
  afterEach(function () {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
    container = null;
  });
  var defaultProps = {
    align: 'top',
    children: React.createElement("div", {
      key: true
    }, "hello")
  };

  var renderModal = function renderModal(modalInstance) {
    container = document.createElement('div');
    var opener = React.createElement("button", {
      type: "button"
    }, React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, modalInstance));
    document.body.appendChild(container);
    renderedNode = ReactDOM.render(opener, container); // deepscan-disable-line REACT_ASYNC_RENDER_RETURN_VALUE

    return renderedNode;
  };

  var createModal = function createModal(props) {
    return React.createElement(SLDSModal, assign({}, defaultProps, props));
  };

  var getModal = function getModal(props) {
    return renderModal(createModal(props));
  };

  var getModalNode = function getModalNode(dom) {
    return dom.querySelector('.slds-modal');
  };

  describe('Styling', function () {
    beforeEach(function () {
      getModal({
        containerClassName: 'container-class-name-test',
        contentClassName: 'content-class-name-test',
        contentStyle: {
          height: '500px'
        },
        isOpen: true,
        portalClassName: 'portal-class-name-test'
      });
    });
    it('has correct containerClassName, contentClassName, contentStyle, and portalClassName', function () {
      var modalContainer = getModalNode(document.body).querySelector('.slds-modal__container.container-class-name-test');
      expect(modalContainer).to.exist;
      var modalContent = getModalNode(document.body).querySelector('.slds-modal__content.content-class-name-test');
      expect(modalContent).to.exist;
      expect(modalContent.style.height).to.equal('500px');
      var modalPortal = document.querySelector('body > .portal-class-name-test');
      expect(modalPortal).to.exist;
    });
  });
  describe('Sizing', function () {
    it('size is set to small', function () {
      var cmp = getModal({
        isOpen: true,
        size: 'small'
      });
      var modal = getModalNode(document.body);
      expect(modal.className).to.include('slds-modal_small');
    });
    it('size is set to medium', function () {
      var cmp = getModal({
        isOpen: true,
        size: 'medium'
      });
      var modal = getModalNode(document.body);
      expect(modal.className).to.include('slds-modal_medium');
    });
    it('size is set to large', function () {
      var cmp = getModal({
        isOpen: true,
        size: 'large'
      });
      var modal = getModalNode(document.body);
      expect(modal.className).to.include('slds-modal_large');
    });
  });
  describe('Closed modal', function () {
    beforeEach(function () {
      getModal({
        isOpen: false
      });
    });
    it('updates the overflow', function () {
      expect(document.body.style.overflow).to.equal('inherit');
    });
    it('does not render to the body', function () {
      expect(getModalNode(document.body)).to.be.null;
    });
  });
  describe('Open modal', function () {
    var cmp;
    var closed;
    var modal;
    beforeEach(function () {
      closed = false;
      cmp = getModal({
        assistiveText: {
          closeButton: 'Exit'
        },
        isOpen: true,
        size: 'large',
        containerClassName: 'my-custom-class',
        onRequestClose: function onRequestClose() {
          closed = true;
        }
      });
      modal = getModalNode(document.body);
    });
    it('size is set to large', function () {
      expect(modal.className).to.include('slds-modal_large');
    });
    it('adds custom classname from modal container prop', function () {
      expect(modal.firstChild.className).to.include('my-custom-class');
    });
    it('renders correct assistive text/title for close button', function () {
      var closeBtn = modal.querySelector('.slds-modal__close');
      expect(closeBtn.title).to.equal('Exit');
    });
    it('calls onRequestClose', function () {
      var closeBtn = modal.querySelector('.slds-modal__close');
      expect(closed).to.be.false;
      Simulate.click(closeBtn, {});
      expect(closed).to.be.true;
    });
  });
  describe('Proper HTML markup', function () {
    it('dismissible modal has role=dialog', function () {
      // eslint-disable-next-line no-unused-vars
      var cmp = getModal({
        isOpen: true,
        size: 'medium'
      });
      var modal = getModalNode(document.body);
      var role = modal.getAttribute('role');
      expect(role).to.equal('dialog');
    });
    it('non-dismissible modal has role=alertdialog', function () {
      var cmp = getModal({
        isOpen: true,
        disableClose: true
      });
      var modal = getModalNode(document.body);
      var role = modal.getAttribute('role');
      expect(role).to.equal('alertdialog');
    });
  });
  describe('Open with custom header and header className', function () {
    var modal;
    beforeEach(function () {
      getModal({
        header: React.createElement("div", {
          id: "art-vandelay"
        }, "Art vandelay"),
        headerClassName: 'art-vandelay',
        isOpen: true
      });
      modal = getModalNode(document.body);
    });
    it('adds the header', function () {
      var customHeader = modal.querySelector('#art-vandelay');
      expect(customHeader).to.not.be.null;
    });
    it('adds the custom header class', function () {
      expect(modal.querySelector('.slds-modal__header').className).to.include('art-vandelay');
    });
  });
  describe('Open with Prompt and Footer', function () {
    var modal;
    beforeEach(function () {
      var feet = React.createElement("div", {
        className: "toes"
      }, "Toes");
      getModal({
        isOpen: true,
        prompt: 'warning',
        heading: 'are you sure?',
        footer: feet
      });
      modal = getModalNode(document.body);
    });
    it('adds the footer', function () {
      var footer = modal.querySelector('.slds-modal__footer');
      expect(footer.className).to.include('slds-theme_default');
    });
    it('adds the prompt class', function () {
      expect(modal.className).to.include('slds-modal_prompt');
    });
    it('adds the prompt theme class', function () {
      expect(modal.querySelector('.slds-modal__header').className).to.include('slds-theme_warning');
    });
    it('adds the footer html content', function () {
      expect(modal.querySelector('.toes').innerHTML).to.equal('Toes');
    });
  });
  describe('Open Directional', function () {
    var modal;
    beforeEach(function () {
      var feet = [React.createElement("div", {
        key: "test-content1",
        className: "toes"
      }, "Toe 1"), React.createElement("div", {
        key: "test-content2",
        className: "toes"
      }, "Toe 2")];
      getModal({
        isOpen: true,
        directional: true,
        footer: feet
      });
      modal = getModalNode(document.body);
    });
    it('adds the footer', function () {
      var footer = modal.querySelector('.slds-modal__footer_directional');
      expect(footer.className).to.include('slds-modal__footer');
    });
  });
  describe('Keyboard behavior', function () {
    var modal;
    beforeEach(function () {
      var feet = [React.createElement("button", {
        type: "button",
        key: "test-content1",
        className: "cancel"
      }, "Cancel"), React.createElement("button", {
        type: "button",
        key: "test-content2",
        className: "save"
      }, "Save")];
      getModal({
        isOpen: true,
        directional: true,
        footer: feet
      });
      modal = getModalNode(document.body);
    });
    it('first tab focuses close button', function () {// There an issue with this test, functionality works fine.
      // setTimeout(() => {
      // 	Simulate.keyDown(modal, {
      // 		key: 'Tab',
      // 		keyCode: 9,
      // 		which: 9,
      // 	});
      // 	setTimeout(() => {
      // 		expect(document.activeElement.className).to.include(
      // 			'slds-modal__close'
      // 		);
      // 		done();
      // 	}, 200);
      // }, 200);
    });
    it('enter on close button works', function () {// TODO: simulate enter on close button and modal is undefined
    });
    it('traps focus inside Modal', function () {// TODO: simulate tabbing around inside of Modal
    });
  });
});
//# sourceMappingURL=modal.browser-test.js.map