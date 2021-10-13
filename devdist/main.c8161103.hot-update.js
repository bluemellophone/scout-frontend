self["webpackHotUpdatecodex_frontend"]("main",{

/***/ "./src/pages/splash/Metrics.jsx":
/*!**************************************!*\
  !*** ./src/pages/splash/Metrics.jsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Testimonial)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Fingerprint */ "./node_modules/@material-ui/icons/Fingerprint.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text.jsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "/code/src/pages/splash/Metrics.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};










var metrics = [{
  labelId: 'IDENTIFIED_INDIVIDUALS',
  count: 257,
  icon: _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_3__.default
}, {
  labelId: 'REPORTED_SIGHTINGS',
  count: 810,
  icon: _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_4__.default
}, {
  labelId: 'USERS',
  count: 951,
  icon: _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__.default
}];
function Testimonial() {
  var _this = this;

  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default)();
  var isSm = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__.default)(theme.breakpoints.down('sm'));
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    style: {
      marginTop: 40,
      padding: '40px 0',
      backgroundColor: theme.palette.primary.main
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__.default, {
    container: true,
    justifyContent: "space-around",
    direction: isSm ? 'column' : 'row',
    style: {
      width: '100vw',
      padding: '0 20px',
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, metrics.map(function (metric) {
    return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__.default, {
      item: true,
      style: {
        display: 'flex',
        margin: '32px 0',
        flexDirection: isSm ? 'column' : 'row',
        alignItems: 'center'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)(metric.icon, {
      style: {
        fontSize: 52,
        marginRight: isSm ? 0 : 12
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: {
        textAlign: isSm ? 'center' : 'unset'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_1__.default, {
      style: {
        color: theme.palette.primary.main,
        fontWeight: 800,
        letterSpacing: '0.02em',
        fontSize: isSm ? '1.8rem' : '1.2rem'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, metric.count), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_1__.default, {
      style: {
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
        fontSize: 14,
        fontWeight: 400
      },
      id: metric.labelId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 15
      }
    })));
  })));
}

__signature__(Testimonial, "useTheme{theme}\nuseMediaQuery{isSm}", function () {
  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default, _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__.default];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(metrics, "metrics", "/code/src/pages/splash/Metrics.jsx");
  reactHotLoader.register(Testimonial, "Testimonial", "/code/src/pages/splash/Metrics.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e7b70d7b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.c8161103.hot-update.js.map