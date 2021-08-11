"use strict";
(self["webpackChunkvendors"] = self["webpackChunkvendors"] || []).push([["allInOne"],{

/***/ "./main-all-in-one.js":
/*!****************************!*\
  !*** ./main-all-in-one.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var doma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! doma */ "./node_modules/doma/index.js");

console.log(doma__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./node_modules/doma/index.js":
/*!************************************!*\
  !*** ./node_modules/doma/index.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./main-all-in-one.js"));
/******/ }
]);