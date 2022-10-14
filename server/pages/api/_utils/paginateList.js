"use strict";
(() => {
var exports = {};
exports.id = 732;
exports.ids = [732];
exports.modules = {

/***/ 540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function paginateList(_ref) {
  var pageNumber = _ref.pageNumber,
      pageSize = _ref.pageSize,
      items = _ref.items;
  var currentPageNumber = Number(pageNumber);
  var currentPageSize = Number(pageSize);
  return items.slice((currentPageNumber - 1) * currentPageSize, (currentPageNumber - 1) * currentPageSize + (currentPageSize || items.length));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paginateList);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(540));
module.exports = __webpack_exports__;

})();