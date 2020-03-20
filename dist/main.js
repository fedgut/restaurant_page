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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/elementManager.js":
/*!*******************************!*\
  !*** ./src/elementManager.js ***!
  \*******************************/
/*! exports provided: elemental, listCreator, cleanUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elemental\", function() { return elemental; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listCreator\", function() { return listCreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cleanUp\", function() { return cleanUp; });\n/* Arguments Doc:\ntype is the kind of html tag to create.\nproperty is the html tag's property you want to set.\nvalue is the property's value\n*/\n\nfunction elemental(type, property, value) {\n  const element = document.createElement(type);\n  element[property] = value;\n  return element;\n}\n\n/* Arguments Doc:\ntarget is the html element's ID where the list is going to be created.\ntype is the kind of html tag you want, can be a ul or a nav.\nargs are the list items\n*/\n\nfunction listCreator(target, type, [...args]) {\n  const list = elemental(type[0], 'id', target);\n  args.forEach((x) => {\n    const node = elemental(type[1], 'id', x);\n    node.appendChild(document.createTextNode(x));\n    list.appendChild(node);\n  });\n  return list;\n}\n\nconst cleanUp = (target) => {\n  const section = document.getElementById(target);\n  while (section.firstChild) {\n    section.removeChild(section.lastChild);\n  }\n};\n\n\n\n\n//# sourceURL=webpack:///./src/elementManager.js?");

/***/ }),

/***/ "./src/envirom.js":
/*!************************!*\
  !*** ./src/envirom.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return envirom; });\nconst envirom = (target) => {\n  const copy = '22222222';\n  document.getElementById(target).appendChild(document.createTextNode(copy));\n};\n\n\n\n\n//# sourceURL=webpack:///./src/envirom.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return home; });\nconst home = (target) => {\n  const copy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';\n  document.getElementById(target).appendChild(document.createTextNode(copy));\n};\n\n\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elementManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementManager */ \"./src/elementManager.js\");\n/* harmony import */ var _startUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startUp */ \"./src/startUp.js\");\n/* harmony import */ var _pujol_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pujol.jpg */ \"./src/pujol.jpg\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _envirom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./envirom */ \"./src/envirom.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\n\n\nconst navMenu = ['Home', 'Enviroment', 'Menu'];\nconst navItem = ['nav', 'button'];\nconst mainDiv = document.getElementById('content');\nconst changes = 'mutating-div';\n\nObject(_startUp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(navMenu, navItem, mainDiv, _pujol_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], changes);\nObject(_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(changes);\n\nconst homeTrigger = document.getElementById('Home');\nconst enviroTrigger = document.getElementById('Enviroment');\nconst menuTrigger = document.getElementById('Menu');\n\nhomeTrigger.addEventListener('click', () => {\n  _elementManager__WEBPACK_IMPORTED_MODULE_0__[\"cleanUp\"](changes);\n  Object(_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(changes);\n});\n\nenviroTrigger.addEventListener('click', () => {\n  _elementManager__WEBPACK_IMPORTED_MODULE_0__[\"cleanUp\"](changes);\n  Object(_envirom__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(changes);\n});\n\nmenuTrigger.addEventListener('click', () => {\n  _elementManager__WEBPACK_IMPORTED_MODULE_0__[\"cleanUp\"](changes);\n  Object(_menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(changes);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return menu; });\nconst menu = (target) => {\n  const copy = '3333333';\n  document.getElementById(target).appendChild(document.createTextNode(copy));\n};\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/pujol.jpg":
/*!***********************!*\
  !*** ./src/pujol.jpg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"abbc2128b229a7c73c57ff6ac0d73caa.jpg\");\n\n//# sourceURL=webpack:///./src/pujol.jpg?");

/***/ }),

/***/ "./src/startUp.js":
/*!************************!*\
  !*** ./src/startUp.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return startUp; });\n/* harmony import */ var _elementManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementManager */ \"./src/elementManager.js\");\n\n\nconst startUp = (navMenu, navItem, mainDiv, image, changing) => {\n  mainDiv.appendChild(_elementManager__WEBPACK_IMPORTED_MODULE_0__[\"elemental\"]('img', 'src', image));\n  mainDiv.appendChild(_elementManager__WEBPACK_IMPORTED_MODULE_0__[\"listCreator\"]('nav-list', navItem, navMenu));\n  mainDiv.appendChild(_elementManager__WEBPACK_IMPORTED_MODULE_0__[\"elemental\"]('div', 'id', changing));\n};\n\n\n\n\n//# sourceURL=webpack:///./src/startUp.js?");

/***/ })

/******/ });