import React from 'react';
import ReactModal from 'react-modal';
import { expect } from 'chai';
import { mount, ReactWrapper } from 'enzyme';
import assign from 'lodash.assign';
import IconSettings from '../../icon-settings';
import AppLauncher from '../../app-launcher';
import AppLauncherTile from '../../app-launcher/tile';
import AppLauncherExpandableSection from '../../app-launcher/expandable-section';
import Search from '../../input/search';
import Button from '../../button';
/* eslint-disable react/no-find-dom-node */

var should = chai.should();
describe('SLDS APP LAUNCHER *******************************************', function () {
  var handles = {
    appLauncher: null,
    appLauncherIcon: null,
    modal: null
  };
  var defaultAppLauncherProps = {
    isOpen: true
  };

  var createAppLauncher = function createAppLauncher(props) {
    return React.createElement(AppLauncher, assign({}, defaultAppLauncherProps, props), React.createElement(AppLauncherExpandableSection, {
      title: "All Items"
    }, React.createElement(AppLauncherTile, {
      title: "Marketing Cloud"
    }), React.createElement(AppLauncherTile, {
      title: "Support Cloud"
    })));
  };

  function mountAppLauncher(props) {
    handles.appLauncher = mount(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, createAppLauncher(props)));
    handles.appLauncherIcon = handles.appLauncher.find('.slds-context-bar__icon-action'); // Wrap the modal portal in an Enzyme wrapper

    handles.modal = new ReactWrapper(handles.appLauncher.find(ReactModal).getElement().portal, true);
  }

  function cleanDom() {
    // Removes the modal container element from the bottom of the DOM, this will prevent the 'setState' errors
    // gotta be a better way to do this..
    var modalWrapper = document.documentElement.querySelectorAll('.ReactModalPortal')[0];

    if (modalWrapper) {
      modalWrapper.parentNode.removeChild(modalWrapper);
    }
  } // ///////////////////////
  // ////// T O D O ////////
  // ///////////////////////
  // APP LAUNCHER -----
  // tabs?
  // if you pass a isOpen prop, you must control the component with it (this.state.isOpen will now work)
  // (#591, waiting on #590) modal content has classes: slds-modal__content slds-app-launcher__content slds-p-around_medium


  describe('App Launcher', function () {
    var onClose;
    beforeEach(function () {
      onClose = sinon.spy();
      mountAppLauncher({
        modalClassName: 'custom-modal-class',
        modalHeaderButton: React.createElement(Button, {
          label: "App Exchange"
        }),
        onClose: onClose,
        search: React.createElement(Search, {
          assistiveText: {
            icon: 'Find an app'
          }
        }),
        title: 'App Launcher!',
        triggerName: 'App Name'
      });
    });
    afterEach(function () {
      cleanDom();
    });
    it('renders modal', function () {
      expect(handles.appLauncher.find('.slds-modal').length).to.eql(1);
    });
    it('renders custom modal class', function () {
      should.exist(handles.appLauncher.find('.custom-modal-class'));
    });
    it('renders modal header', function () {
      should.exist(handles.appLauncher.find('.slds-app-launcher__header'));
    });
    it('app launcher title can be set', function () {
      var appLauncherTitle = handles.appLauncher.find('h2.slds-text-heading_medium');
      expect(appLauncherTitle.length).to.eql(1);
      expect(appLauncherTitle.text()).to.eql('App Launcher!');
    });
    it('app launcher triggerName can be set', function () {
      var appLauncherTriggerName = handles.appLauncher.find('.slds-context-bar__app-name');
      expect(appLauncherTriggerName.length).to.eql(1);
      expect(appLauncherTriggerName.text()).to.eql('App Name');
    });
    it('renders search bar', function () {
      should.exist(handles.modal.find(Search));
      expect(handles.appLauncher.find('.slds-app-launcher__header-search').length).to.eql(1);
    });
    it('renders `modalHeaderButton`', function () {
      var headerButton = handles.appLauncher.find('header.slds-modal__header button.slds-button.slds-button_neutral');
      expect(headerButton.length).to.eql(1);
      expect(headerButton.text()).to.eql('App Exchange');
    });
    it('closing modal fires callback', function () {
      handles.appLauncher.find('button.slds-modal__close').simulate('click');
      expect(onClose.calledOnce).to.be.true; // eslint-disable-line no-unused-expressions
    });
    it('close modal callback receives original event as arg', function () {
      handles.appLauncher.find('button.slds-modal__close').simulate('click');
      expect(onClose.args.length).to.equal(1);
    });
    it('renders modal content', function () {
      expect(handles.appLauncher.find('.slds-modal__content.slds-app-launcher__content.slds-p-around_medium').length).to.equal(1);
    });
    it('app launcher can be passed children', function () {
      should.exist(handles.appLauncher.find('SLDSAppLauncherExpandableSection'));
      expect(handles.appLauncher.find('SLDSAppLauncherTile').length).to.equal(2);
    });
  });
  describe('App Launcher Icon', function () {
    var triggerOnClick;
    beforeEach(function () {
      triggerOnClick = sinon.spy();
      mountAppLauncher({
        assistiveText: {
          trigger: 'Custom Icon Assistive Text'
        },
        triggerOnClick: triggerOnClick
      });
    });
    afterEach(function () {
      cleanDom();
    });
    it('renders App Launcer icon', function () {
      should.exist(handles.appLauncherIcon);
    });
    it('renders all App Launcher dots', function () {
      expect(handles.appLauncherIcon.find('.slds-icon-waffle').containsAllMatchingElements([React.createElement("span", {
        className: "slds-r1"
      }), React.createElement("span", {
        className: "slds-r2"
      }), React.createElement("span", {
        className: "slds-r3"
      }), React.createElement("span", {
        className: "slds-r4"
      }), React.createElement("span", {
        className: "slds-r5"
      }), React.createElement("span", {
        className: "slds-r6"
      }), React.createElement("span", {
        className: "slds-r7"
      }), React.createElement("span", {
        className: "slds-r8"
      }), React.createElement("span", {
        className: "slds-r9"
      })])).to.equal(true);
    });
    it('App Launcher Icon link has proper classes', function () {
      var button = handles.appLauncherIcon.find('button');
      expect(button).to.have.className('slds-icon-waffle_container');
      expect(button).to.have.className('slds-context-bar__button');
    });
    it('clicking App Launcher Icon fires callback', function () {
      handles.appLauncherIcon.find('button').simulate('click');
      expect(triggerOnClick.calledOnce).to.be.true; // eslint-disable-line no-unused-expressions
    });
    it('App Launcher Icon callback receives original event as arg', function () {
      handles.appLauncherIcon.find('button').simulate('click');
      expect(triggerOnClick.args.length).to.equal(1);
    });
    it('renders assistive text from prop', function () {
      expect(handles.appLauncherIcon.find('.slds-assistive-text').text()).to.equal('Custom Icon Assistive Text');
    });
  });
});
//# sourceMappingURL=app-launcher.browser-test.js.map