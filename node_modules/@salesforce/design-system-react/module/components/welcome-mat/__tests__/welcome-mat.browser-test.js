import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'lodash.assign'; // import TestUtils from 'react-dom/test-utils';

import { expect } from 'chai';
import IconSettings from '../../icon-settings';
import SLDSButton from '../../button';
import Settings from '../../settings';
import SLDSCheckbox from '../../checkbox'; // const { Simulate } = TestUtils;

import SLDSWelcomeMat from '../../welcome-mat';
import SLDSWelcomeMatTile from '../../welcome-mat/tile';
import WelcomeMatInfoBadge from '../../welcome-mat/info-badge';
describe('SLDSWelcomeMat: ', function () {
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

  var renderWelcomeMat = function renderWelcomeMat(welcomeMatInstance) {
    container = document.createElement('div');
    var opener = React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, welcomeMatInstance);
    document.body.appendChild(container);
    renderedNode = ReactDOM.render(opener, container); // deepscan-disable-line REACT_ASYNC_RENDER_RETURN_VALUE

    return renderedNode;
  };

  var title = 'The Lightning Experience is here!';
  var description = 'This is a sample description for the welcome mat';
  var labels = {
    title: title,
    description: description
  };
  var defaultProps = {
    isOpen: true,
    labels: labels
  };

  var createWelcomeMat = function createWelcomeMat(props) {
    return React.createElement(SLDSWelcomeMat, assign({}, defaultProps, props));
  };

  var getWelcomeMat = function getWelcomeMat(props) {
    return renderWelcomeMat(createWelcomeMat(props));
  };

  var getWelcomeMatNode = function getWelcomeMatNode(dom) {
    return dom.querySelector('.slds-modal');
  };

  var tiles = [React.createElement(SLDSWelcomeMatTile, {
    title: "Welcome to Salesforce!",
    description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    icon: "animal_and_nature",
    href: "javascript:void(0);",
    isComplete: true
  }), React.createElement(SLDSWelcomeMatTile, {
    title: "Learn About OpenCTI!",
    description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    icon: "call",
    href: "javascript:void(0);",
    isComplete: true
  }), React.createElement(SLDSWelcomeMatTile, {
    title: "Power Up the Utility Bar",
    description: "Tap into case history or share notes with fellow agents\u2014it all happens on the utility bar.",
    href: "javascript:void(0);",
    icon: "call"
  }), React.createElement(SLDSWelcomeMatTile, {
    title: "Customize your view",
    description: "Tailor your cases to your team's workflow with custom list views.",
    href: "javascript:void(0);",
    icon: "upload"
  }), React.createElement(SLDSWelcomeMatTile, {
    title: "Share the Knowledge",
    description: "Harness your team's collective know-how with our powerful knowledge base.",
    href: "javascript:void(0);",
    icon: "knowledge_base"
  })];
  describe('Steps Variant', function () {
    beforeEach(function () {
      getWelcomeMat({
        variant: 'steps',
        labels: labels,
        children: tiles,
        id: 'welcome-mat-test'
      });
    });
    it('renders welcome mat', function () {
      var WelcomeMatContainer = getWelcomeMatNode(document.body).querySelector('.slds-welcome-mat');
      expect(WelcomeMatContainer).to.exist;
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__content')).to.exist;
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__info')).to.exist;
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__tiles')).to.exist;
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__tiles').childElementCount).to.eql(5);
      expect(WelcomeMatContainer.querySelectorAll('.slds-welcome-mat__tile_complete').length).to.eql(2);
    });
    it('tile links have correct href', function () {
      var WelcomeMatTiles = getWelcomeMatNode(document.body).querySelectorAll('.slds-welcome-mat__tile a');
      WelcomeMatTiles.forEach(function (tile) {
        expect(tile.href).to.eql.toString('javascript:void(0)');
      });
    });
    it('shows labels correctly', function () {
      var WelcomeMatInfo = getWelcomeMatNode(document.body).querySelector('.slds-welcome-mat__info');
      expect(WelcomeMatInfo.querySelector('.slds-welcome-mat__info-title').textContent).to.eql(title);
      expect(WelcomeMatInfo.querySelector('.slds-welcome-mat__info-description').textContent).to.eql(description);
      expect(WelcomeMatInfo.querySelector('.slds-welcome-mat__info-progress p').textContent).to.eql('2/5 units completed');
    });
  });
  describe('Info-Only Variant', function () {
    beforeEach(function () {
      getWelcomeMat({
        variant: 'info-only',
        labels: labels,
        id: 'welcome-mat-test',
        children: tiles,
        doNotShowAgainCheckbox: React.createElement(SLDSCheckbox, {
          assistiveText: {
            label: "Don't show this again"
          },
          labels: {
            label: "Don't show this again"
          }
        }),
        onRenderInfoActions: function onRenderInfoActions() {
          return React.createElement(SLDSButton, {
            type: "button",
            variant: "brand",
            title: "Learn More",
            label: "Learn More"
          });
        }
      });
    });
    it('renders welcome mat', function () {
      var WelcomeMatContainer = getWelcomeMatNode(document.body).querySelector('.slds-welcome-mat');
      expect(WelcomeMatContainer).to.exist;
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__content')).to.exist;
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__info')).to.exist;
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__tiles')).to.exist;
      expect(WelcomeMatContainer.querySelectorAll('.slds-welcome-mat__tile_info-only').length).to.eql(5);
    });
    it('shows info action button and do not show checkbox', function () {
      var WelcomeMatContainer = getWelcomeMatNode(document.body).querySelector('.slds-welcome-mat');
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__info-actions')).to.exist;
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__info-actions button')).to.exist;
      expect(WelcomeMatContainer.querySelector('.slds-checkbox')).to.exist;
    });
  });
  describe('Splash Variant', function () {
    beforeEach(function () {
      getWelcomeMat({
        variant: 'splash',
        labels: labels,
        id: 'welcome-mat-test',
        doNotShowAgainCheckbox: React.createElement(SLDSCheckbox, {
          assistiveText: {
            label: "Don't show this again"
          },
          labels: {
            label: "Don't show this again"
          }
        }),
        onRenderInfoActions: function onRenderInfoActions() {
          return React.createElement(SLDSButton, {
            type: "button",
            variant: "brand",
            title: "Learn More",
            label: "Learn More"
          });
        }
      });
    });
    it('renders welcome mat', function () {
      var WelcomeMatContainer = getWelcomeMatNode(document.body).querySelector('.slds-welcome-mat');
      expect(WelcomeMatContainer).to.exist;
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__content')).to.exist;
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__info')).to.exist;
    });
    it('does not render any tiles', function () {
      var WelcomeMatContainer = getWelcomeMatNode(document.body).querySelector('.slds-welcome-mat');
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__tiles')).to.not.exist;
    });
    it('shows info action button and do not show checkbox', function () {
      var WelcomeMatContainer = getWelcomeMatNode(document.body).querySelector('.slds-welcome-mat');
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__info-actions')).to.exist;
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__info-actions button')).to.exist;
      expect(WelcomeMatContainer.querySelector('.slds-checkbox')).to.exist;
    });
  });
  describe('Trailhead Variant', function () {
    beforeEach(function () {
      getWelcomeMat({
        variant: 'trailhead-connected',
        labels: labels,
        children: tiles,
        infoBadge: React.createElement(WelcomeMatInfoBadge, {
          image: "/assets/images/welcome-mat/trailhead_badge@2x.png",
          onCompleteRenderActions: function onCompleteRenderActions() {
            return React.createElement(React.Fragment, null, React.createElement("p", null, "Cha-ching! You earned the badge."), React.createElement(SLDSButton, {
              className: "slds-m-top_medium",
              type: "button",
              variant: "brand",
              title: "View on your Trailblazer Profile",
              label: "View on your Trailblazer Profile"
            }));
          }
        }, React.createElement("p", null, React.createElement("strong", null, "Lightning Explorer"))),
        id: 'welcome-mat-test'
      });
    });
    it('renders welcome mat', function () {
      var WelcomeMatContainer = getWelcomeMatNode(document.body).querySelector('.slds-welcome-mat');
      expect(WelcomeMatContainer).to.exist;
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__content')).to.exist;
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__info')).to.exist;
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__tiles')).to.exist;
      ReactDOM.unmountComponentAtNode(container);
      expect(WelcomeMatContainer.querySelector('.slds-welcome-mat__tiles').childElementCount).to.eql(5);
      expect(WelcomeMatContainer.querySelectorAll('.slds-welcome-mat__tile_complete').length).to.eql(2);
    });
    it('shows trailhead badge', function () {
      var WelcomeMatInfo = getWelcomeMatNode(document.body).querySelector('.slds-welcome-mat__info');
      expect(WelcomeMatInfo.querySelector('.slds-welcome-mat__info-badge')).to.exist;
      expect(WelcomeMatInfo.querySelector('.slds-welcome-mat__info-progress p strong').textContent).to.eql('Lightning Explorer');
    });
    it('shows labels correctly', function () {
      var WelcomeMatInfo = getWelcomeMatNode(document.body).querySelector('.slds-welcome-mat__info');
      expect(WelcomeMatInfo.querySelector('.slds-welcome-mat__info-title').textContent).to.eql(title);
      expect(WelcomeMatInfo.querySelector('.slds-welcome-mat__info-description').textContent).to.eql(description);
    });
  });
});
//# sourceMappingURL=welcome-mat.browser-test.js.map