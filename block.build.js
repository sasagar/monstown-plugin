/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./block.js":
/*!******************!*\
  !*** ./block.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload,\n    MediaUploadCheck = _wp$editor.MediaUploadCheck;\nvar Button = wp.components.Button;\nregisterBlockType('monstown/monster-profile', {\n  title: __('モンスタープロフ'),\n  // ブロック名\n  icon: 'admin-users',\n  // アイコン\n  category: 'monstown-blocks',\n  // ブロックのカテゴリー\n  attributes: {\n    mediaId: {\n      type: 'number'\n    },\n    mediaURL: {\n      type: 'string',\n      source: 'attribute',\n      selector: 'img',\n      attribute: 'src'\n    },\n    textarea: {\n      type: 'array',\n      source: 'children',\n      selector: '.textarea'\n    }\n  },\n  edit: function edit(props) {\n    var focusedEditable = props.focus ? props.focus.editable || 'mediaID' : null;\n    var attributes = props.attributes;\n\n    var onSelectImage = function onSelectImage(media) {\n      props.setAttributes({\n        mediaURL: media.url,\n        mediaID: media.id\n      });\n    };\n\n    var onChangeTextarea = function onChangeTextarea(value) {\n      props.setAttributes({\n        textarea: value\n      });\n    };\n\n    var onFocusTextarea = function onFocusTextarea(focus) {\n      props.setFocus(_.extend({}, focus, {\n        editable: 'textarea'\n      }));\n    };\n\n    return wp.element.createElement(\"div\", {\n      className: \"monstown-profile-row\"\n    }, wp.element.createElement(\"div\", {\n      className: \"monstown-profile-image\"\n    }, wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(MediaUpload, {\n      onSelect: onSelectImage,\n      type: \"image\",\n      value: attributes.mediaID,\n      render: function render(_ref) {\n        var open = _ref.open;\n        return wp.element.createElement(Button, {\n          className: attributes.mediaID ? 'image-button' : 'button button-large',\n          onClick: open\n        }, !attributes.mediaID ? __('画像選択') : wp.element.createElement(\"img\", {\n          src: attributes.mediaURL\n        }));\n      }\n    }))), wp.element.createElement(RichText, {\n      tagName: \"p\",\n      className: \"monstown-profile-textarea\",\n      onChange: onChangeTextarea,\n      value: attributes.textarea,\n      focus: focusedEditable === 'textarea',\n      onFocus: onFocusTextarea\n    }));\n  },\n  save: function save(props) {\n    var className = props.className,\n        _props$attributes = props.attributes,\n        mediaURL = _props$attributes.mediaURL,\n        textarea = _props$attributes.textarea;\n    return wp.element.createElement(\"div\", {\n      className: \"monstown-profile-row\"\n    }, mediaURL && wp.element.createElement(\"div\", {\n      className: \"monstown-profile-image\"\n    }, wp.element.createElement(\"figure\", null, wp.element.createElement(\"img\", {\n      className: className,\n      src: mediaURL\n    }))), wp.element.createElement(\"div\", {\n      className: \"monstown-profile-textarea\"\n    }, textarea));\n  }\n});\n\n//# sourceURL=webpack:///./block.js?");

/***/ })

/******/ });