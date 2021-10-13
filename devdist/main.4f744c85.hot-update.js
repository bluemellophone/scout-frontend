self["webpackHotUpdatecodex_frontend"]("main",{

/***/ "./src/pages/splash/Trifold.jsx":
/*!**************************************!*\
  !*** ./src/pages/splash/Trifold.jsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Trifold)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Fingerprint */ "./node_modules/@material-ui/icons/Fingerprint.js");
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Code */ "./node_modules/@material-ui/icons/Code.js");
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/BarChart */ "./node_modules/@material-ui/icons/BarChart.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text.jsx");
/* harmony import */ var _models_site_useSiteSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/site/useSiteSettings */ "./src/models/site/useSiteSettings.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "/code/src/pages/splash/Trifold.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};












function Card(_ref) {
  var Icon = _ref.Icon,
      titleId = _ref.titleId,
      descriptionId = _ref.descriptionId;
  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.default)();
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {
    item: true,
    style: {
      width: 240,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      marginBottom: 48
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
      padding: 12,
      height: 108,
      width: 108,
      borderRadius: 10000
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {
    style: {
      fontSize: 64,
      color: theme.palette.common.black
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_1__.default, {
    responsive: true,
    variant: "h5",
    style: {
      marginTop: 40,
      marginBottom: 20
    },
    id: titleId,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_1__.default, {
    style: {
      color: '#818181',
      lineHeight: '25px',
      fontSize: 18,
      letterSpacing: '0.04em',
      fontWeight: 400
    },
    id: descriptionId,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }));
}

__signature__(Card, "useTheme{theme}", function () {
  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.default];
});

function Trifold() {
  var _useSiteSettings = (0,_models_site_useSiteSettings__WEBPACK_IMPORTED_MODULE_2__.default)(),
      siteSettings = _useSiteSettings.data,
      loading = _useSiteSettings.loading,
      error = _useSiteSettings.error;

  var siteDescription = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__.default)(siteSettings, ['site.general.description', 'value'], '');
  if (loading || error) return null;
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    style: {
      width: '100vw',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 40,
      padding: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_1__.default, {
    responsive: true,
    variant: "h2",
    style: {
      marginBottom: 48
    },
    id: "TRIFOLD_TAGLINE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_1__.default, {
    responsive: true,
    desktopStyle: {
      fontSize: 24,
      lineHeight: '45px'
    },
    mobileStyle: {
      fontSize: 16,
      lineHeight: '30px'
    },
    style: {
      maxWidth: 900,
      padding: '0px 20px',
      marginBottom: 60,
      letterSpacing: '0.04em'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, siteDescription), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {
    container: true,
    justifyContent: "space-around",
    style: {
      maxWidth: 900,
      margin: '0 auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)(Card, {
    titleId: "OPEN_SOURCE",
    descriptionId: "OPEN_SOURCE_DESCRIPTION",
    Icon: _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_7__.default,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)(Card, {
    titleId: "AUTOMATIC_IDENTIFICATION",
    descriptionId: "AUTOMATIC_IDENTIFICATION_DESCRIPTION",
    Icon: _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_8__.default,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)(Card, {
    titleId: "ANALYZE_AND_EXPORT",
    descriptionId: "ANALYZE_AND_EXPORT_DESCRIPTION",
    Icon: _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_9__.default,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  })));
}

__signature__(Trifold, "useSiteSettings{{ data: siteSettings, loading, error }}", function () {
  return [_models_site_useSiteSettings__WEBPACK_IMPORTED_MODULE_2__.default];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Card, "Card", "/code/src/pages/splash/Trifold.jsx");
  reactHotLoader.register(Trifold, "Trifold", "/code/src/pages/splash/Trifold.jsx");
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
/******/ 	__webpack_require__.h = () => ("4edd5788")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4f744c85.hot-update.js.map