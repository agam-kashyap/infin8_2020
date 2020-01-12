/* eslint-env mocha */

/* global sinon */

/* eslint-disable prefer-arrow-callback */

/* eslint-disable no-unused-expressions */
import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'; // `this.wrapper` and `this.dom` is set in the helpers file

import { mountComponent, unmountComponent } from '../../../tests/enzyme-helpers';
import { keyObjects } from '../../../utilities/key-code';
import sampleNodesDynamicHashMap from '../__docs__/dynamic-hashmap';
import DefaultExample from '../__examples__/default';
chai.use(chaiEnzyme());
var COMPONENT_CSS_CLASSES = {
  base: 'slds-tree'
};
describe('Tree: ', function () {
  /*
  	Tests
   */
  describe('Tree can be navigated up/down using the keyboard', function () {
    beforeEach(mountComponent(React.createElement(DefaultExample, {
      log: function log() {}
    })));
    afterEach(unmountComponent);
    it('moves selection up/down with wrapping when using keyboard up/down keys', function () {
      // Initial focus selects the item
      this.wrapper.find('#example-tree-1').simulate('focus');
      var itemDiv = this.wrapper.find('#example-tree-1').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Go to next node

      this.wrapper.find('#example-tree-1').simulate('keyDown', keyObjects.DOWN);
      itemDiv = this.wrapper.find('#example-tree-2').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Go to next node

      this.wrapper.find('#example-tree-2').simulate('keyDown', keyObjects.DOWN);
      itemDiv = this.wrapper.find('#example-tree-3').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Go to next node

      this.wrapper.find('#example-tree-3').simulate('keyDown', keyObjects.DOWN);
      itemDiv = this.wrapper.find('#example-tree-7').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Wrap to first node

      this.wrapper.find('#example-tree-7').simulate('keyDown', keyObjects.DOWN);
      itemDiv = this.wrapper.find('#example-tree-1').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Wrap to last node

      this.wrapper.find('#example-tree-1').simulate('keyDown', keyObjects.UP);
      itemDiv = this.wrapper.find('#example-tree-7').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Go to previous node

      this.wrapper.find('#example-tree-7').simulate('keyDown', keyObjects.UP);
      itemDiv = this.wrapper.find('#example-tree-3').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Go to previous node

      this.wrapper.find('#example-tree-3').simulate('keyDown', keyObjects.UP);
      itemDiv = this.wrapper.find('#example-tree-2').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Go to previous node

      this.wrapper.find('#example-tree-2').simulate('keyDown', keyObjects.UP);
      itemDiv = this.wrapper.find('#example-tree-1').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1);
    });
  });
  describe('Tree can be navigated right/left using the keyboard', function () {
    beforeEach(mountComponent(React.createElement(DefaultExample, {
      log: function log() {}
    })));
    afterEach(unmountComponent);
    it('expands/collapses branches when using right/left keys', function () {
      // Initial focus selects the item
      var item = this.wrapper.find('#example-tree-1');
      item.simulate('focus');
      var itemDiv = this.wrapper.find('#example-tree-1').find('.slds-is-selected');
      expect(itemDiv).to.have.length(1); // Expand branch

      this.wrapper.find('#example-tree-3').simulate('keyDown', keyObjects.RIGHT);
      var items = this.wrapper.find('li[aria-level=2]');
      expect(items).to.have.length(4); // Collapse branch

      this.wrapper.find('#example-tree-3').simulate('keyDown', keyObjects.LEFT);
      items = this.wrapper.find('li[aria-level=2]');
      expect(items).to.have.length(0); // Expand branch and select an item

      this.wrapper.find('#example-tree-3').simulate('keyDown', keyObjects.RIGHT);
      items = this.wrapper.find('li[aria-level=2]');
      expect(items).to.have.length(4); // Collapse branch from an item

      this.wrapper.find('#example-tree-3').simulate('keyDown', keyObjects.DOWN);
      this.wrapper.find('#example-tree-8').simulate('keyDown', keyObjects.LEFT);
      items = this.wrapper.find('li[aria-level=2]');
      expect(items).to.have.length(0);
    });
  });
  describe('Default Structure and CSS', function () {
    var id = 'this-is-a-container-test';
    beforeEach(mountComponent(React.createElement(DefaultExample, {
      className: "this-is-a-container-test",
      heading: "Foods",
      id: id,
      listClassName: "this-is-an-unordered-list-test",
      listStyle: {
        height: '500px'
      },
      log: function log() {}
    })));
    afterEach(unmountComponent);
    it('has tree container class, list class, and heading', function () {
      var container = this.wrapper.find('.slds-tree_container');
      expect(container.hasClass('this-is-a-container-test')).to.be.true;
      var list = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      expect(list).to.have.length(1);
      expect(list.hasClass('this-is-an-unordered-list-test')).to.be.true;
      expect(list.get(0).props.style).to.have.property('height', '500px', 'height of list');
      var heading = this.wrapper.find("#".concat(id, "__heading"));
      expect(heading).to.have.length(1);
    });
  });
  describe('Assistive Technology', function () {
    beforeEach(mountComponent(React.createElement(DefaultExample, {
      log: function log() {},
      assistiveText: {
        label: 'Foods'
      }
    })));
    afterEach(unmountComponent);
    it('has heading via assistiveText', function () {
      var heading = this.wrapper.find('#example-tree__heading.slds-assistive-text');
      expect(heading).to.have.length(1);
      var ariaLabelledbyId = this.wrapper.find('.slds-tree[aria-labelledby="example-tree__heading"]');
      expect(ariaLabelledbyId).to.have.length(1);
    });
  });
  describe('Initial Expanded and Selection based on nodes', function () {
    beforeEach(mountComponent(React.createElement(DefaultExample, {
      log: function log() {},
      nodes: sampleNodesDynamicHashMap.initialExpandedSelected
    })));
    afterEach(unmountComponent);
    it('has initial selection', function () {
      var selectedNode = this.wrapper.find('#example-tree-2').find('.slds-is-selected'); // Fruits, Watermelon, Tree Fruits

      expect(selectedNode).to.have.length(3);
      selectedNode = this.wrapper.find('#example-tree-5').find('.slds-is-selected');
      expect(selectedNode).to.have.length(1);
    });
    it('has initial expanded branches', function () {
      var expandedBranchList = this.wrapper.find('#example-tree-2').find('.slds-is-expanded');
      expect(expandedBranchList).to.have.length(2);
    });
  });
  describe('Branch expands and selects on click', function () {
    var itemClicked = sinon.spy();
    var expandClicked = sinon.spy();
    beforeEach(mountComponent(React.createElement(DefaultExample, {
      log: function log() {},
      onExpandClick: expandClicked,
      onClick: itemClicked
    })));
    afterEach(unmountComponent);
    it('branch calls onExpandClicked and onClick', function () {
      var branch = this.wrapper.find('#example-tree-2').find('.slds-tree__item');
      branch.simulate('click');
      expect(itemClicked.callCount).to.equal(1);
      var expandButton = this.wrapper.find('#example-tree-2').find('.slds-button');
      expandButton.simulate('click');
      expect(expandClicked.callCount).to.equal(1);
    });
  });
  describe('Item calls onClick', function () {
    var itemClicked = sinon.spy();
    beforeEach(mountComponent(React.createElement(DefaultExample, {
      log: function log() {},
      onClick: itemClicked
    })));
    afterEach(unmountComponent);
    it('item calls itemClicked', function () {
      var item = this.wrapper.find('#example-tree-1').find('.slds-tree__item');
      item.simulate('click');
      expect(itemClicked.callCount).to.equal(1);
    });
  });
  describe('Search term is highlighted', function () {
    beforeEach(mountComponent(React.createElement(DefaultExample, {
      log: function log() {},
      searchTerm: "fruit"
    })));
    afterEach(unmountComponent);
    it('item calls itemClicked', function () {
      var markedItem = this.wrapper.find('mark');
      expect(markedItem).to.have.length(1);
    });
  });
  describe('Scrolling calls onScroll', function () {
    var onScroll = sinon.spy();
    beforeEach(mountComponent(React.createElement(DefaultExample, {
      heading: "Foods",
      listStyle: {
        height: '300px',
        overflowY: 'auto'
      },
      log: function log() {},
      nodes: sampleNodesDynamicHashMap.large,
      onScroll: onScroll
    })));
    afterEach(unmountComponent);
    it('scrolling calls onScroll', function () {
      var list = this.wrapper.find(".".concat(COMPONENT_CSS_CLASSES.base));
      list.simulate('scroll');
      expect(onScroll.callCount).to.equal(1);
    });
  });
});
//# sourceMappingURL=tree.browser-test.js.map