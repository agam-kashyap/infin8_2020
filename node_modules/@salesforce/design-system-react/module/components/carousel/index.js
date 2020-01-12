function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Carousel Component
// Implements the [Carousel design pattern](https://www.lightningdesignsystem.com/components/carousel/) in React.
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import { CAROUSEL } from '../../utilities/constants';
import { canUseDOM, canUseEventListeners } from '../../utilities/execution-environment';
import CarouselIndicators from './private/carousel-indicators';
import PreviousNextCarouselNavigator from './private/previous-next-carousel-navigator';
import CarouselItem from './private/carousel-item';
import AutoplayButton from './private/auto-play-button'; // ### Event Helpers

import KEYS from '../../utilities/key-code';
import EventUtil from '../../utilities/event';
/* eslint-disable jsx-a11y/no-static-element-interactions */
// ### Default Props

var defaultProps = {
  assistiveText: {
    autoplayButton: 'Start / Stop auto-play',
    nextPanel: 'Next Panel',
    previousPanel: 'Previous Panel'
  },
  autoplayInterval: 4000,
  hasAutoplay: false,
  hasPreviousNextPanelNavigation: false,
  isInfinite: false,
  itemsPerPanel: 1
};
/**
 * A carousel allows multiple pieces of featured content to occupy an allocated amount of space.
 * Currently panel index and auto play cannot be controlled by the app.
 */

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Carousel, _React$Component);

  // ### Display Name
  // Always use the canonical component name as the React display name.
  // ### Prop Types
  // ### Default Props
  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onNextPanelHandler", function (event) {
      var next = _this.getCurrentPanel() + 1;

      if (next > _this.nrOfPanels - 1) {
        next = 0;
      }

      _this.setCurrentPanel(event, next, _this.changeTranslationAutomatically);
    });

    _defineProperty(_assertThisInitialized(_this), "onPreviousPanelHandler", function (event) {
      var prev = _this.getCurrentPanel() - 1;

      if (prev < 0) {
        prev = _this.nrOfPanels - 1;
      }

      _this.setCurrentPanel(event, prev, _this.changeTranslationAutomatically);
    });

    _defineProperty(_assertThisInitialized(_this), "onIndicatorBlur", function () {
      _this.setState({
        indicatorsHaveFocus: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onIndicatorClickHandler", function (event, panel) {
      _this.setCurrentPanel(event, panel, _this.changeTranslationAutomatically);

      _this.setState({
        indicatorsHaveFocus: true
      });

      if (_this.getIsAutoplayOn()) {
        _this.stopAutoplay(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onIndicatorFocus", function (event) {
      _this.setState({
        indicatorsHaveFocus: true
      });

      if (_this.getIsAutoplayOn()) {
        _this.stopAutoplay(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAutoplayBtnClick", function (event) {
      var isAutoplayOn = _this.getIsAutoplayOn();

      if (_this.props.onRequestAutoplayToggle) {
        _this.props.onRequestAutoplayToggle(event, {
          isAutoplayOn: isAutoplayOn
        });
      } else {
        var actionToTake = isAutoplayOn ? _this.stopAutoplay : _this.startAutoplay;

        _this.setState({
          isAutoplayOn: !isAutoplayOn
        });

        actionToTake(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getPanelId", function (_ref) {
      var carouselId = _ref.carouselId,
          itemId = _ref.itemId;
      return "content-id-".concat(carouselId, "-").concat(itemId);
    });

    _defineProperty(_assertThisInitialized(_this), "setDimensions", function () {
      if (canUseDOM && _this.stageItem !== undefined && _this.stageItem.current !== undefined && _this.stageItem.current.offsetWidth !== undefined) {
        _this.setState({
          stageWidth: _this.stageItem.current.offsetWidth
        }, _this.changeTranslationAutomatically);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setTranslationAmount", function (amount, cb) {
      _this.setState({
        translateX: amount
      }, cb);
    });

    _defineProperty(_assertThisInitialized(_this), "setCurrentPanel", function (event, amount, cb) {
      if (_this.props.onRequestPanelChange) {
        _this.props.onRequestPanelChange(event, {
          currentPanel: _this.getCurrentPanel(),
          requestedPanel: amount
        });
      } else {
        _this.setState({
          currentPanel: amount
        }, cb);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "startAutoplay", function (event) {
      _this.autoplayId = setInterval(function () {
        if (_this.canGoToNext()) {
          _this.onNextPanelHandler(event);
        } else if (_this.props.isInfinite) {
          _this.setCurrentPanel(event, 0, _this.changeTranslationAutomatically);
        } else {
          _this.stopAutoplay(event);
        }
      }, _this.props.autoplayInterval);
    });

    _defineProperty(_assertThisInitialized(_this), "stopAutoplay", function (event, ignoreCallbacksAndStateUpdates) {
      if (_this.autoplayId) {
        clearInterval(_this.autoplayId);
      }

      if (!ignoreCallbacksAndStateUpdates) {
        if (_this.props.onRequestAutoplayToggle) {
          _this.props.onRequestAutoplayToggle(event, {
            isAutoplayOn: _this.getIsAutoplayOn()
          });
        } else {
          _this.setState({
            isAutoplayOn: false
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "changeTranslationAutomatically", function () {
      _this.setTranslationAmount(-((_this.state.stageWidth || _this.stageWidth) * _this.getCurrentPanel()));
    });

    _defineProperty(_assertThisInitialized(_this), "canGoToNext", function () {
      return _this.getCurrentPanel() < _this.nrOfPanels - 1;
    });

    _defineProperty(_assertThisInitialized(_this), "canGoToPrevious", function () {
      return _this.getCurrentPanel() > 0;
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var _keyDownCallbacks;

      var keyDownCallbacks = (_keyDownCallbacks = {}, _defineProperty(_keyDownCallbacks, KEYS.LEFT, function () {
        if (_this.props.isInfinite || _this.canGoToPrevious()) {
          _this.onPreviousPanelHandler(event);

          _this.setState({
            indicatorsHaveFocus: true
          });

          if (_this.getIsAutoplayOn()) {
            _this.stopAutoplay(event);
          }
        }
      }), _defineProperty(_keyDownCallbacks, KEYS.RIGHT, function () {
        if (_this.props.isInfinite || _this.canGoToNext()) {
          _this.onNextPanelHandler(event);

          _this.setState({
            indicatorsHaveFocus: true
          });

          if (_this.getIsAutoplayOn()) {
            _this.stopAutoplay(event);
          }
        }
      }), _keyDownCallbacks);

      if (keyDownCallbacks[event.keyCode]) {
        EventUtil.trapImmediate(event);
        keyDownCallbacks[event.keyCode]();
      }
    });

    _this.nrOfPanels = Math.ceil(props.items.length / props.itemsPerPanel);
    _this.stageItem = React.createRef();
    _this.state = {
      currentPanel: props.currentPanel !== undefined ? props.currentPanel : 0,
      indicatorsHaveFocus: false,
      isAutoplayOn: props.isAutoplayOn !== undefined ? props.isAutoplayOn : props.hasAutoplay,
      stageWidth: 0,
      translateX: -1000000
    };
    _this.generatedId = shortid.generate();
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (canUseDOM && this.stageItem !== undefined && this.stageItem.current !== undefined && this.stageItem.current.offsetWidth !== undefined) {
        this.stageWidth = this.stageItem.current.offsetWidth;
      }

      if (canUseEventListeners) {
        window.addEventListener('resize', this.setDimensions, false);
      }

      this.changeTranslationAutomatically();

      if (this.getIsAutoplayOn()) {
        this.startAutoplay({
          mountAutoplayEvent: true
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.currentPanel !== undefined && prevProps.currentPanel !== this.props.currentPanel) {
        this.changeTranslationAutomatically();
      }

      if (this.props.isAutoplayOn !== undefined && prevProps.isAutoplayOn !== this.props.isAutoplayOn) {
        if (this.props.isAutoplayOn) {
          this.startAutoplay({
            updateAutoplayEvent: true
          });
        } else {
          this.stopAutoplay({
            updateAutoplayEvent: true
          }, true);
        }
      }

      if (prevProps.items.length !== this.props.items.length || prevProps.itemsPerPanel !== this.props.itemsPerPanel) {
        this.nrOfPanels = Math.ceil(this.props.items.length / this.props.itemsPerPanel);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (canUseEventListeners) {
        window.removeEventListener('resize', this.setDimensions, false);
      }

      this.stopAutoplay({
        unmountAutoplayEvent: true
      }, true);
    }
  }, {
    key: "getCurrentPanel",
    value: function getCurrentPanel() {
      return this.props.currentPanel !== undefined ? this.props.currentPanel : this.state.currentPanel;
    }
  }, {
    key: "getIsAutoplayOn",
    value: function getIsAutoplayOn() {
      return this.props.isAutoplayOn !== undefined ? this.props.isAutoplayOn : this.state.isAutoplayOn;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          hasAutoplay = _this$props.hasAutoplay,
          hasPreviousNextPanelNavigation = _this$props.hasPreviousNextPanelNavigation,
          isInfinite = _this$props.isInfinite;
      var currentPanel = this.getCurrentPanel();
      var id = this.props.id || this.generatedId;
      var isPreviousBtnDisabled = !(isInfinite || this.canGoToPrevious());
      var isNextBtnDisabled = !(isInfinite || this.canGoToNext());
      var itemWidth = (this.state.stageWidth || this.stageWidth) / this.props.itemsPerPanel;
      var carouselMargins = hasPreviousNextPanelNavigation ? {
        marginLeft: '44px',
        marginRight: '44px'
      } : {};
      return React.createElement("div", {
        className: classnames('slds-carousel', this.props.className),
        id: id,
        onKeyDown: this.handleKeyDown
      }, React.createElement("div", {
        className: "slds-grid_vertical slds-col slds-path__scroller"
      }, hasAutoplay && React.createElement(AutoplayButton, {
        assistiveText: this.props.assistiveText.autoplayButton,
        isAutoplayOn: this.getIsAutoplayOn(),
        onClick: this.onAutoplayBtnClick
      }), React.createElement("div", {
        className: "slds-is-relative",
        style: carouselMargins
      }, hasPreviousNextPanelNavigation && React.createElement(PreviousNextCarouselNavigator, {
        assistiveText: this.props.assistiveText.previousPanel,
        iconName: "chevronleft",
        isDisabled: isPreviousBtnDisabled,
        onClick: function onClick(event) {
          if (_this2.getIsAutoplayOn()) {
            _this2.stopAutoplay(event);
          }

          _this2.onPreviousPanelHandler(event);
        },
        inlineStyle: {
          left: '-38px'
        }
      }), React.createElement("div", {
        ref: this.stageItem,
        className: "slds-carousel__stage slds-show"
      }, React.createElement("div", {
        className: "slds-carousel__panels slds-is-relative",
        style: {
          transform: "translateX(".concat(this.state.translateX, "px)")
        }
      }, this.props.items.map(function (item, index) {
        return React.createElement(CarouselItem, _extends({
          carouselId: id,
          getPanelId: _this2.getPanelId,
          onClick: function onClick(event) {
            _this2.props.onItemClick(event, {
              item: item
            });
          },
          onFocus: function onFocus(event) {
            if (_this2.getIsAutoplayOn()) {
              _this2.stopAutoplay(event);
            }
          },
          onRenderItem: _this2.props.onRenderItem
        }, item, {
          isInCurrentPanel: index >= currentPanel * _this2.props.itemsPerPanel && index < currentPanel * _this2.props.itemsPerPanel + _this2.props.itemsPerPanel,
          itemWidth: itemWidth,
          key: item.id,
          panelIndex: Math.ceil((index + 1) / _this2.props.itemsPerPanel) - 1
        }));
      }))), hasPreviousNextPanelNavigation && React.createElement(PreviousNextCarouselNavigator, {
        assistiveText: this.props.assistiveText.nextPanel,
        iconName: "chevronright",
        isDisabled: isNextBtnDisabled,
        onClick: function onClick(event) {
          if (_this2.getIsAutoplayOn()) {
            _this2.stopAutoplay(event);
          }

          _this2.onNextPanelHandler(event);
        },
        inlineStyle: {
          right: '-38px'
        }
      })), React.createElement(CarouselIndicators, {
        noOfIndicators: this.nrOfPanels,
        carouselId: id,
        currentIndex: currentPanel,
        getPanelId: this.getPanelId,
        hasFocus: this.state.indicatorsHaveFocus,
        onBlur: this.onIndicatorBlur,
        onClick: this.onIndicatorClickHandler,
        onFocus: this.onIndicatorFocus,
        items: this.props.items,
        itemsPerPanel: this.props.itemsPerPanel
      })));
    }
  }]);

  return Carousel;
}(React.Component);

_defineProperty(Carousel, "displayName", CAROUSEL);

_defineProperty(Carousel, "propTypes", {
  /**
   * Description of the carousel items for screen-readers.
   */
  assistiveText: PropTypes.object,

  /**
   * Interval for the autoplay iteration
   */
  autoplayInterval: PropTypes.number,

  /**
   * CSS classes that are applied to the main 'slds-carousel' classed component container
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Dictates the currently active/visible carousel panel. Use with `onRequestPanelChange` for a controlled carousel component. If not provided, the carousel will manage this itself via state.
   */
  currentPanel: PropTypes.number,

  /**
   * Boolean showing whether the autoplay button is available or not
   */
  hasAutoplay: PropTypes.bool,

  /**
   * Boolean for displaying the navigation indicators (left/right arrows) of the carousel
   */
  hasPreviousNextPanelNavigation: PropTypes.bool,

  /**
   * Id of component, if desired. If not provided an id is automatically generated
   */
  id: PropTypes.string,

  /**
   * Boolean that dictates whether autoplay is active or not. Use with `onRequestAutoplayToggle` for a controlled carousel component.
   */
  isAutoplayOn: PropTypes.bool,

  /**
   * Boolean for infinite loop navigation. Note: if not true autoplay will stop automatically at the last panel.
   */
  isInfinite: PropTypes.bool,

  /**
   * * **Array of item objects used by the default carousel item renderer.**
   * Each object can contain:
   * * `id`: The id of the carousel item. [REQUIRED]
   * * `heading`: Primary string that will be used as the heading
   * * `description`: Secondary string that is used to describe the item
   * * `buttonLabel`: If assigned a call to button action will be rendered with this text, if unassigned no button is rendered
   * * `imageAssistiveText`: Image alt text, if not present heading will be used instead
   * * `href`: Used for item link, if not provided 'javascript:void(0);' is used instead
   * * `src`: Item image src value
   */
  items: PropTypes.array.isRequired,

  /**
   * Number of items to be displayed at a time in the carousel
   */
  itemsPerPanel: PropTypes.number,

  /**
   * Accepts a custom carousel item rendering function
   */
  onRenderItem: PropTypes.func,

  /**
   * Called whenever `isAutoplayOn` is requested to be toggled on or off. Use with `isAutoplayOn` prop for a controlled carousel component. Passes an event object and a data object with the current `isAutoplayOn` value as an attribute.
   */
  onRequestAutoplayToggle: PropTypes.func,

  /**
   * Called whenever the panel is requested to change due to user interaction or auto-play. Use with `currentPanel` for a controlled carousel component. Passes an event object and a data object with `currentPanel` and `requestedPanel` attributes.
   */
  onRequestPanelChange: PropTypes.func,

  /**
   * Handler for clicking on a carousel item
   */
  onItemClick: PropTypes.func
});

_defineProperty(Carousel, "defaultProps", defaultProps);

export default Carousel;
//# sourceMappingURL=index.js.map