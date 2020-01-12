/* eslint-disable react/no-render-return-value */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { expect } from 'chai';
import BuilderHeader from '../../builder-header';
import IconSettings from '../../icon-settings';
var Simulate = TestUtils.Simulate,
    scryRenderedDOMComponentsWithClass = TestUtils.scryRenderedDOMComponentsWithClass;
describe('SLDSBuilderHeader: ', function () {
  var clicked;
  var body;

  var setClick = function setClick() {
    clicked = true;
  };

  var renderBuilderHeader = function renderBuilderHeader() {
    body = document.createElement('div');
    document.body.appendChild(body);
    /* deepscan-disable REACT_ASYNC_RENDER_RETURN_VALUE */

    return ReactDOM.render(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(BuilderHeader, {
      events: {
        onClickBack: setClick,
        onClickHelp: setClick
      }
    })), body);
    /* deepscan-enable REACT_ASYNC_RENDER_RETURN_VALUE */
  };

  function removeBuilderHeader() {
    ReactDOM.unmountComponentAtNode(body);
    document.body.removeChild(body);
  }

  describe('Links are clickable', function () {
    var cmp;
    var links;
    beforeEach(function () {
      clicked = false;
      cmp = renderBuilderHeader();
      links = scryRenderedDOMComponentsWithClass(cmp, 'slds-builder-header__item-action');
    });
    afterEach(function () {
      removeBuilderHeader();
    });
    it('triggers when Back link is clicked', function () {
      expect(clicked).to.be.false;
      Simulate.click(links[0], {});
      expect(clicked).to.be.true;
    });
    it('triggers when Help link is clicked', function () {
      expect(clicked).to.be.false;
      Simulate.click(links[1], {});
      expect(clicked).to.be.true;
    });
  });
});
//# sourceMappingURL=builder-header.browser-test.js.map