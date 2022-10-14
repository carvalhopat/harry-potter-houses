"use strict";
(() => {
var exports = {};
exports.id = 47;
exports.ids = [47];
exports.modules = {

/***/ 991:
/***/ ((module) => {

module.exports = import("ramda");;

/***/ }),

/***/ 210:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(991);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ramda__WEBPACK_IMPORTED_MODULE_0__]);
ramda__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

var mappedTermTypes = {
  name: 'name',
  species: 'species'
};

function getNewMatches(_ref) {
  var query = _ref.query,
      data = _ref.data,
      termType = _ref.termType;
  return data === null || data === void 0 ? void 0 : data.filter(function (item) {
    return (0,ramda__WEBPACK_IMPORTED_MODULE_0__.includes)(query.toLowerCase().trim(), item[termType].toLowerCase());
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNewMatches);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(210));
module.exports = __webpack_exports__;

})();