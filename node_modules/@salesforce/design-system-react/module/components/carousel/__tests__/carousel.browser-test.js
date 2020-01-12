function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import IconSettings from '../../icon-settings';
import Carousel from '../../carousel';
import KEYS from '../../../utilities/key-code';
/* eslint-disable react/no-find-dom-node */

var items = [{
  id: 1,
  heading: 'Visit App Exchange',
  description: 'Extend Salesforce with the #1 business marketplace.',
  imageAssistiveText: 'Appy',
  src: '/assets/images/carousel/carousel-01.jpg',
  href: 'https://www.salesforce.com'
}, {
  id: 2,
  heading: 'Click to Customize',
  description: 'Use the Object Manager to add fields, build layouts, and more.',
  imageAssistiveText: 'Apps',
  src: '/assets/images/carousel/carousel-02.jpg',
  href: 'https://www.salesforce.com'
}, {
  id: 3,
  heading: 'Download Salesforce Apps',
  description: "Get the mobile app that's just for Salesforce admins.",
  imageAssistiveText: 'Salesforce Apps',
  src: '/assets/images/carousel/carousel-03.jpg',
  href: 'https://www.salesforce.com'
}, {
  id: 4,
  heading: 'Carousel Item 4',
  description: 'Description for carousel item #4',
  imageAssistiveText: 'Apps',
  src: '/assets/images/carousel/carousel-02.jpg',
  href: 'https://www.salesforce.com'
}, {
  id: 5,
  heading: 'Carousel Item 5',
  description: 'Description for carousel item #5',
  imageAssistiveText: 'Appy',
  src: '/assets/images/carousel/carousel-01.jpg',
  href: 'https://www.salesforce.com'
}, {
  id: 6,
  heading: 'Carousel Item 6',
  description: 'Description for carousel item #6',
  imageAssistiveText: 'Salesforce Apps',
  src: '/assets/images/carousel/carousel-03.jpg',
  href: 'https://www.salesforce.com'
}, {
  id: 7,
  heading: 'Carousel Item 7',
  description: 'Description for carousel item #7',
  imageAssistiveText: 'Apps',
  src: '/assets/images/carousel/carousel-02.jpg',
  href: 'https://www.salesforce.com'
}];
describe('SLDS Carousel', function () {
  var handles = {
    carousel: null
  };
  var defaultCarouselProps = {
    hasAutoplay: true,
    hasPreviousNextPanelNavigation: true,
    id: 'test-carousel',
    isInfinite: true,
    items: items
  };

  var createCarousel = function createCarousel(props) {
    return React.createElement(Carousel, _objectSpread({}, defaultCarouselProps, props));
  };

  function mountCarousel(props) {
    handles.carousel = mount(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, createCarousel(props)));
  }

  describe('Carousel interactions - one item per panel', function () {
    var tabIndexRegex = /tabindex="0"/;
    beforeEach(function () {
      mountCarousel({
        itemsPerPanel: 1
      });
    });
    it('renders carousel', function () {
      expect(handles.carousel.length).to.equal(1);
    });
    it('handles autoplay toggle correctly', function () {
      var autoplayButton = handles.carousel.find('.slds-carousel__autoplay button');
      autoplayButton.simulate('click');
      expect(autoplayButton.html().search(/#play/) >= 0).to.eql(true);
      autoplayButton.simulate('click');
      expect(autoplayButton.html().search(/#pause/) >= 0).to.eql(true);
    });
    it('handles previous button presses correctly', function () {
      var previousButton = handles.carousel.find('.slds-is-absolute button.slds-button_icon-border-filled').at(0);
      previousButton.simulate('click');
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-7 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-6")).html().search(tabIndexRegex) >= 0).to.eql(true);
      previousButton.simulate('click');
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-6 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-5")).html().search(tabIndexRegex) >= 0).to.eql(true);
    });
    it('handles next button presses correctly', function () {
      var nextButton = handles.carousel.find('.slds-is-absolute button.slds-button_icon-border-filled').at(1);
      nextButton.simulate('click');
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-2 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-1")).html().search(tabIndexRegex) >= 0).to.eql(true);
      nextButton.simulate('click');
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-3 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-2")).html().search(tabIndexRegex) >= 0).to.eql(true);
    });
    it('handles keyboard navigation correctly', function () {
      handles.carousel.simulate('focus');
      handles.carousel.simulate('keyDown', {
        keyCode: KEYS.RIGHT
      });
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-2 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-1")).html().search(tabIndexRegex) >= 0).to.eql(true);
      handles.carousel.simulate('keyDown', {
        keyCode: KEYS.LEFT
      });
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-1 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-0")).html().search(tabIndexRegex) >= 0).to.eql(true);
    });
    it('handles indicator button presses correctly', function () {
      handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-2")).simulate('click');
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-3 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-2")).html().search(tabIndexRegex) >= 0).to.eql(true);
      handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-6")).simulate('click');
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-7 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-6")).html().search(tabIndexRegex) >= 0).to.eql(true);
    });
  });
  describe('Carousel interactions - three items per panel', function () {
    var tabIndexRegex = /tabindex="0"/;
    beforeEach(function () {
      mountCarousel({
        itemsPerPanel: 3
      });
    });
    it('handles previous button presses correctly', function () {
      var previousButton = handles.carousel.find('.slds-is-absolute button.slds-button_icon-border-filled').at(0);
      previousButton.simulate('click');
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-7 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      previousButton.simulate('click');
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-6 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-5 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-4 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      previousButton.simulate('click');
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-3 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-2 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-1 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
    });
    it('handles next button presses correctly', function () {
      var nextButton = handles.carousel.find('.slds-is-absolute button.slds-button_icon-border-filled').at(1);
      nextButton.simulate('click');
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-4 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-5 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-6 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-1")).html().search(tabIndexRegex) >= 0).to.eql(true);
      nextButton.simulate('click');
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-7 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-2")).html().search(tabIndexRegex) >= 0).to.eql(true);
      nextButton.simulate('click');
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-1 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-2 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-3 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-0")).html().search(tabIndexRegex) >= 0).to.eql(true);
    });
    it('handles keyboard navigation correctly', function () {
      handles.carousel.simulate('focus');
      handles.carousel.simulate('keyDown', {
        keyCode: KEYS.RIGHT
      });
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-4 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-5 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-6 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-1")).html().search(tabIndexRegex) >= 0).to.eql(true);
      handles.carousel.simulate('keyDown', {
        keyCode: KEYS.LEFT
      });
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-1 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-2 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-3 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-0")).html().search(tabIndexRegex) >= 0).to.eql(true);
    });
    it('handles indicator button presses correctly', function () {
      handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-2")).simulate('click');
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-7 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-2")).html().search(tabIndexRegex) >= 0).to.eql(true);
      handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-1")).simulate('click');
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-4 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-5 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-6 a")).html().search(tabIndexRegex) >= 0).to.eql(true);
      expect(handles.carousel.find("#indicator-id-".concat(defaultCarouselProps.id, "-1")).html().search(tabIndexRegex) >= 0).to.eql(true);
    });
  });
  describe('Carousel events', function () {
    var itemClickObject;
    var requestAutoplayObject;
    var requestPanelChangeObject;
    beforeEach(function () {
      mountCarousel({
        itemsPerPanel: 1,
        onRequestAutoplayToggle: function onRequestAutoplayToggle(event, data) {
          requestAutoplayObject = {
            event: event,
            data: data
          };
        },
        onRequestPanelChange: function onRequestPanelChange(event, data) {
          requestPanelChangeObject = {
            event: event,
            data: data
          };
        },
        onItemClick: function onItemClick(event, data) {
          itemClickObject = {
            event: event,
            data: data
          };
        }
      });
    });
    it('calls onRequestAutoplayToggle correctly', function () {
      handles.carousel.find('.slds-carousel__autoplay button').simulate('click');
      expect(requestAutoplayObject !== undefined).to.eql(true);
      expect(_typeof(requestAutoplayObject.event)).to.eql('object');
      expect(_typeof(requestAutoplayObject.data)).to.eql('object');
      expect(requestAutoplayObject.data.isAutoplayOn).to.eql(true);
    });
    it('calls onRequestPanelChange correctly', function () {
      handles.carousel.simulate('focus');
      handles.carousel.simulate('keyDown', {
        keyCode: KEYS.RIGHT
      });
      expect(requestPanelChangeObject !== undefined).to.eql(true);
      expect(_typeof(requestPanelChangeObject.event)).to.eql('object');
      expect(_typeof(requestPanelChangeObject.data)).to.eql('object');
      expect(requestPanelChangeObject.data.currentPanel).to.eql(0);
      expect(requestPanelChangeObject.data.requestedPanel).to.eql(1);
    });
    it('calls onItemClick correctly', function () {
      handles.carousel.find("#content-id-".concat(defaultCarouselProps.id, "-1 a")).simulate('click');
      expect(itemClickObject !== undefined).to.eql(true);
      expect(_typeof(itemClickObject.event)).to.eql('object');
      expect(_typeof(itemClickObject.data)).to.eql('object');
      expect(_typeof(itemClickObject.data.item)).to.eql('object');
      expect(itemClickObject.data.item.id).to.eql(1);
    });
  });
});
//# sourceMappingURL=carousel.browser-test.js.map