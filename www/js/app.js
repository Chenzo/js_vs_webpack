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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_module1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/module1.js */ "./src/js/modules/module1.js");
/* harmony import */ var _modules_module1_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_module1_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_threeOBJ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/threeOBJ.js */ "./src/js/modules/threeOBJ.js");
/* harmony import */ var _modules_threeOBJ_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_threeOBJ_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_two_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/two.js */ "./src/js/modules/two.js");
/* harmony import */ var _modules_two_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_two_js__WEBPACK_IMPORTED_MODULE_2__);






//var module_1 = require('./modules/module1.js');
//var two_obj = require('./modules/two.js');

//import * as module_1 from './modules/module1.js';
//import * as two_obj from './modules/two.js';

//import './modules/module1.js';
//import './modules/two.js';

/* require('./modules/module1.js');
require('./modules/two.js'); */


_modules_module1_js__WEBPACK_IMPORTED_MODULE_0___default.a.init();
_modules_two_js__WEBPACK_IMPORTED_MODULE_2___default.a.init();

_modules_two_js__WEBPACK_IMPORTED_MODULE_2___default.a.pubFunction();


console.log(_modules_threeOBJ_js__WEBPACK_IMPORTED_MODULE_1___default.a.someVar);


_modules_threeOBJ_js__WEBPACK_IMPORTED_MODULE_1___default.a.someVar = "Chenzo is cool";


_modules_two_js__WEBPACK_IMPORTED_MODULE_2___default.a.readNewVar();

/***/ }),

/***/ "./src/js/modules/module1.js":
/*!***********************************!*\
  !*** ./src/js/modules/module1.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const threeOBJ = __webpack_require__(/*! ./threeOBJ */ "./src/js/modules/threeOBJ.js");

console.log("Module_1");

var module_1 = (function(){

    function privateFunction() {
        console.log("I'm private");
    }

    function init() {
        console.log("initializing");
        privateFunction();
        threeOBJ.thing();
    }

    function pubFunction() {
        console.log("I'm a public function in module_1");
    }

    return {
        init: init,
        pubFunction: pubFunction
    };

}());

module.exports = { 
    init: module_1.init,
    pubFunction: module_1.pubFunction
};

//module_1.init();

/***/ }),

/***/ "./src/js/modules/threeOBJ.js":
/*!************************************!*\
  !*** ./src/js/modules/threeOBJ.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



threeOBJ = {

    someVar: "Vince was here",


    thing: function() {
        console.log("From Inside threeOBJ - boop");
    }

}



module.exports = { 
    someVar: threeOBJ.someVar,
    thing: threeOBJ.thing
};


/***/ }),

/***/ "./src/js/modules/two.js":
/*!*******************************!*\
  !*** ./src/js/modules/two.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const module1 = __webpack_require__(/*! ./module1 */ "./src/js/modules/module1.js");
const threeOBJ = __webpack_require__(/*! ./threeOBJ */ "./src/js/modules/threeOBJ.js");


var two_obj = (function(){

    function privateFunction() {
        console.log("I'm private in two_obj");
    }

    function init() {
        console.log("two_obj initializing");
        privateFunction();
    }

    function pubFunction() {
        console.log("I'm a public function in two_obj!!");
        module1.pubFunction();
    }

    function readNewVar() {
        console.log(threeOBJ.someVar);
    }

    return {
        init: init,
        pubFunction: pubFunction,
        readNewVar: readNewVar
    };

}());

module.exports = { 
    init: two_obj.init,
    pubFunction: two_obj.pubFunction,
    readNewVar: two_obj.readNewVar
};

//two_obj.init();

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vince/sites/js_webpack/src/js/app.js */"./src/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map