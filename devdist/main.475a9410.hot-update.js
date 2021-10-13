self["webpackHotUpdatecodex_frontend"]("main",{

/***/ "./src/pages/splash/Testimonial.jsx":
/*!******************************************!*\
  !*** ./src/pages/splash/Testimonial.jsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _components_ButtonLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ButtonLink */ "./src/components/ButtonLink.jsx");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text.jsx");
/* harmony import */ var _models_site_useSiteSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/site/useSiteSettings */ "./src/models/site/useSiteSettings.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "/code/src/pages/splash/Testimonial.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var imageSize = '25vw';
function CustomCard() {
  var _useSiteSettings = (0,_models_site_useSiteSettings__WEBPACK_IMPORTED_MODULE_3__.default)(),
      siteSettings = _useSiteSettings.data,
      loading = _useSiteSettings.loading,
      error = _useSiteSettings.error;

  if (loading || error) return null;
  var buttonUrl = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__.default)(siteSettings, ['site.general.customCardButtonUrl', 'value']);
  var imageUrl = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__.default)(siteSettings, ['site.images', 'customCardImage']);
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
    container: true,
    justifyContent: "center",
    style: {
      width: '100vw',
      margin: '64px auto',
      display: 'flex',
      justifyContent: 'space-evenly'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
    item: true,
    style: {
      marginBottom: 40
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    style: {
      backgroundImage: "url(".concat(imageUrl, ")"),
      borderRadius: 1000,
      backgroundSize: 'cover',
      "float": 'right',
      height: imageSize,
      width: imageSize,
      minHeight: 280,
      minWidth: 280
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
    item: true,
    style: {
      textAlign: 'left',
      maxWidth: 480,
      padding: '0 20px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_2__.default, {
    responsive: true,
    mobileStyle: {
      fontSize: 20,
      lineHeight: '30px'
    },
    desktopStyle: {
      fontSize: 24,
      lineHeight: '36px'
    },
    style: {
      fontStyle: 'italic',
      letterSpacing: '0.05em'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__.default)(siteSettings, ['site.general.customCardLine1', 'value'], '')), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_2__.default, {
    responsive: true,
    mobileStyle: {
      fontSize: 18,
      lineHeight: '26px'
    },
    desktopStyle: {
      fontSize: 22,
      lineHeight: '36px'
    },
    style: {
      marginTop: 40,
      letterSpacing: '0.04em',
      fontWeight: 'bold'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__.default)(siteSettings, ['site.general.customCardLine2', 'value'], '')), buttonUrl && (0,_emotion_core__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ButtonLink__WEBPACK_IMPORTED_MODULE_1__.default, {
    display: "marketing",
    style: {
      marginTop: 52
    },
    href: buttonUrl,
    external: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__.default)(siteSettings, ['site.general.customCardButtonText', 'value'], ''))));
}

__signature__(CustomCard, "useSiteSettings{{ data: siteSettings, loading, error }}", function () {
  return [_models_site_useSiteSettings__WEBPACK_IMPORTED_MODULE_3__.default];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(imageSize, "imageSize", "/code/src/pages/splash/Testimonial.jsx");
  reactHotLoader.register(CustomCard, "CustomCard", "/code/src/pages/splash/Testimonial.jsx");
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
/******/ 	__webpack_require__.h = () => ("d2d9bf24")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.475a9410.hot-update.js.map