exports.id = 834;
exports.ids = [834];
exports.modules = {

/***/ 685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sort_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(878);
/* harmony import */ var _Sort_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Sort_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */




function Sort(_ref) {
  var sortType = _ref.sortType;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  var _router$query = router.query,
      _router$query$sortTyp = _router$query.sortType,
      category = _router$query$sortTyp === void 0 ? sortType : _router$query$sortTyp,
      _router$query$sort = _router$query.sort,
      sort = _router$query$sort === void 0 ? 'asc' : _router$query$sort;

  function Icon(_ref2) {
    var path = _ref2.path,
        arrow = _ref2.arrow;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", {
      width: "8",
      height: "5",
      viewBox: "0 0 12 6",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
      d: path,
      fill: category === sortType && sort === arrow ? '#000' : '#AAAAAA'
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: (_Sort_module_scss__WEBPACK_IMPORTED_MODULE_2___default().sort)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    onClick: function onClick() {
      return router.push({
        query: _objectSpread(_objectSpread({}, router.query), {}, {
          sort: 'asc',
          sortType: sortType
        })
      });
    },
    "data-testid": "sort-asc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Icon, {
    path: "M6 0L12 6H0L6 0Z",
    arrow: "asc"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    onClick: function onClick() {
      return router.push({
        query: _objectSpread(_objectSpread({}, router.query), {}, {
          sort: 'desc',
          sortType: sortType
        })
      });
    },
    "data-testid": "sort-desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Icon, {
    path: "M6 6L0 0H12L6 6Z",
    arrow: "desc"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sort);

/***/ }),

/***/ 834:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(991);
/* harmony import */ var _Table_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(390);
/* harmony import */ var _Table_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(685);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ramda__WEBPACK_IMPORTED_MODULE_0__]);
ramda__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Table(_ref) {
  var categories = _ref.categories,
      list = _ref.list,
      customClass = _ref.customClass;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
    className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_6___default().listTable)
  }, (0,ramda__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(list) && router.isReady ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
    className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_6___default().notFound)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
    src: "/search-icon.svg",
    width: "200",
    height: "50",
    alt: "Search not found"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h4", null, "No matching results found."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", null, "We're sorry! Please try another way.")) : list.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
    className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_6___default().table)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Table_module_scss__WEBPACK_IMPORTED_MODULE_6___default().thead), customClass)
  }, Object.entries(categories).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        category = _ref3[0],
        _ref3$ = _ref3[1],
        value = _ref3$.value,
        isSortable = _ref3$.isSortable,
        isNumberCell = _ref3$.isNumberCell;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      key: category,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Table_module_scss__WEBPACK_IMPORTED_MODULE_6___default().theadValue), _defineProperty({}, (_Table_module_scss__WEBPACK_IMPORTED_MODULE_6___default().numberCell), isNumberCell))
    }, value, isSortable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Sort__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      sortType: category
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
    className: (_Table_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tbody)
  }, list === null || list === void 0 ? void 0 : list.map(function (item) {
    var rowItems = Object.entries(categories).reduce(function (acc, _ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          category = _ref5[0],
          _ref5$ = _ref5[1],
          isNumberCell = _ref5$.isNumberCell,
          formatter = _ref5$.formatter;

      var value = item[category];
      var formattedValue = formatter ? formatter({
        item: item
      }) : value;
      return [].concat(_toConsumableArray(acc), [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        key: category,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_defineProperty({}, (_Table_module_scss__WEBPACK_IMPORTED_MODULE_6___default().numberCell), isNumberCell))
      }, (0,ramda__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(formattedValue) ? '-' : formattedValue)]);
    }, []);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      key: item.name,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Table_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableRow), customClass)
    }, rowItems);
  }))) : '');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 878:
/***/ ((module) => {

// Exports
module.exports = {
	"sort": "Sort_sort__r8yi0"
};


/***/ }),

/***/ 390:
/***/ ((module) => {

// Exports
module.exports = {
	"listTable": "Table_listTable__XPX35",
	"notFound": "Table_notFound__FX876",
	"table": "Table_table__svHvy",
	"thead": "Table_thead__6zIyJ",
	"theadValue": "Table_theadValue__SZdCO",
	"tbody": "Table_tbody__dsjDi",
	"tableRow": "Table_tableRow__M82uU",
	"numberCell": "Table_numberCell__P_B5H"
};


/***/ })

};
;