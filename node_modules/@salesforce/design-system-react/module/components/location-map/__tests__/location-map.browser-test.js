import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'lodash.assign';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import IconSettings from '../../icon-settings';
import Settings from '../../settings';
import SLDSLocationMap from '../../location-map';
chai.use(chaiEnzyme());
describe('SLDSLocationMap: ', function () {
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

  var renderLocationMap = function renderLocationMap(locationMapInstance) {
    container = document.createElement('div');
    var opener = React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, locationMapInstance);
    document.body.appendChild(container);
    renderedNode = ReactDOM.render(opener, container); // deepscan-disable-line REACT_ASYNC_RENDER_RETURN_VALUE

    return renderedNode;
  };

  var defaultProps = {
    googleAPIKey: 'AIzaSyDliLquGXGts9S8YtkWVolSQEJdBL1ZuWc'
  };

  var createLocationMap = function createLocationMap(props) {
    return React.createElement(SLDSLocationMap, assign({}, defaultProps, props));
  };

  var getLocationMap = function getLocationMap(props) {
    return renderLocationMap(createLocationMap(props));
  };

  var getLocationMapNode = function getLocationMapNode(dom) {
    return dom.querySelector('.slds-grid');
  };

  describe('Single Location', function () {
    beforeEach(function () {
      var locations = [{
        id: '1',
        name: 'Worldwide Corporate Headquarters',
        address: 'The Landmark @ One Market, San Francisco, CA'
      }];
      getLocationMap({
        defaultLocation: locations[0],
        locations: locations,
        labels: {
          title: 'Geo Code: 37°48&#x27;08.3&quot;N 122°15&#x27;55.2W'
        },
        id: 'map-test'
      });
    });
    it('renders map correctly', function () {
      var Container = getLocationMapNode(document.body);
      expect(Container.childElementCount).to.equal(1);
      var MapContainer = Container.querySelector('.slds-map');
      expect(MapContainer).to.exist;
      expect(MapContainer.querySelector('iframe').title).to.equal('Geo Code: 37°48&#x27;08.3&quot;N 122°15&#x27;55.2W');
    });
  });
  describe('Multiple Locations', function () {
    var locations = [{
      id: '1',
      name: 'Worldwide Corporate Headquarters',
      address: 'The Landmark @ One Market, San Francisco, CA'
    }, {
      id: '2',
      name: 'salesforce.com inc Atlanta',
      address: '950 East Paces Ferry Road NE, Atlanta, GA'
    }, {
      id: '3',
      name: 'salesforce.com inc Bellevue',
      address: '929 108th Ave NE, Bellevue, WA'
    }, {
      id: '4',
      name: 'salesforce.com inc Boston',
      address: '500 Boylston Street 19th Floor, Boston, MA'
    }, {
      id: '5',
      name: 'salesforce.com inc Chicago',
      address: '111 West Illinois Street, Chicago, IL'
    }];
    beforeEach(function () {
      getLocationMap({
        defaultLocation: locations[0],
        locations: locations,
        labels: {
          title: 'Salesforce Locations In United States'
        },
        selection: locations[2],
        id: 'map-test'
      });
    });
    it('renders map correctly', function () {
      var LocationMapContainer = getLocationMapNode(document.body).querySelector('.slds-map');
      expect(LocationMapContainer).to.exist;
      expect(LocationMapContainer.querySelector('iframe').title).to.equal('Salesforce Locations In United States');
    });
    it('renders map coordinates correctly', function () {
      var LocationMapCoordinates = getLocationMapNode(document.body).querySelector('.slds-coordinates');
      expect(LocationMapCoordinates).to.exist;
      expect(LocationMapCoordinates.querySelector('.slds-coordinates__title').textContent).to.equal('Salesforce Locations In United States (5)');
      var loc = LocationMapCoordinates.querySelector('.slds-coordinates__list').children;
      expect(loc.length).to.equal(5);
      expect(loc[0].querySelector('.slds-text-link').textContent).to.equal('Worldwide Corporate Headquarters');
      expect(loc[0].querySelectorAll('.slds-media__body span')[1].textContent).to.equal('The Landmark @ One Market, San Francisco, CA');
    });
  });
});
//# sourceMappingURL=location-map.browser-test.js.map