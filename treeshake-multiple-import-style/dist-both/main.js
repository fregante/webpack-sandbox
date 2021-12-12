/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dynamic.js":
/*!********************!*\
  !*** ./dynamic.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! doma */ "./node_modules/doma/index.js")).then(console.log)


/***/ }),

/***/ "./static.js":
/*!*******************!*\
  !*** ./static.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var doma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! doma */ "./node_modules/doma/index.js");

console.log(doma__WEBPACK_IMPORTED_MODULE_0__["default"])


/***/ }),

/***/ "./node_modules/doma/index.js":
/*!************************************!*\
  !*** ./node_modules/doma/index.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const doma = (html) => {
    if (html === undefined || html === null) {
        return new DocumentFragment();
    }
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
};
doma.one = (html) => {
    var _a;
    return (_a = doma(html).firstElementChild) !== null && _a !== void 0 ? _a : undefined;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (doma);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./index-both.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static.js */ "./static.js");
/* harmony import */ var _dynamic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic.js */ "./dynamic.js");
/* harmony import */ var _dynamic_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dynamic_js__WEBPACK_IMPORTED_MODULE_1__);



})();

/******/ })()
;