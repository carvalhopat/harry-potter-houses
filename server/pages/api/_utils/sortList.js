"use strict";
(() => {
var exports = {};
exports.id = 439;
exports.ids = [439];
exports.modules = {

/***/ 293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sortList(sortType) {
  return function (a, b) {
    if (a[sortType] < b[sortType]) {
      return -1;
    }

    if (a[sortType] > b[sortType]) {
      return 1;
    }

    return 0;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortList);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(293));
module.exports = __webpack_exports__;

})();