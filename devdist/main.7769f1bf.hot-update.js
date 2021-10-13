self["webpackHotUpdatecodex_frontend"]("main",{

/***/ "./src/pages/home/Home.jsx":
/*!*********************************!*\
  !*** ./src/pages/home/Home.jsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/components/useIntl.js");
/* harmony import */ var _models_users_useGetMe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/users/useGetMe */ "./src/models/users/useGetMe.js");
/* harmony import */ var _components_LoadingScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/LoadingScreen */ "./src/components/LoadingScreen.jsx");
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/UserProfile */ "./src/components/UserProfile.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button.jsx");
/* harmony import */ var _components_bulkImport_UnprocessedBulkImportAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/bulkImport/UnprocessedBulkImportAlert */ "./src/components/bulkImport/UnprocessedBulkImportAlert.jsx");
/* harmony import */ var _hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useDocumentTitle */ "./src/hooks/useDocumentTitle.js");
/* harmony import */ var _ProfileSetup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProfileSetup */ "./src/pages/home/ProfileSetup.jsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "/code/src/pages/home/Home.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};












function Home() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.default)();

  var _useGetMe = (0,_models_users_useGetMe__WEBPACK_IMPORTED_MODULE_1__.default)(),
      data = _useGetMe.data,
      loading = _useGetMe.loading,
      refresh = _useGetMe.refresh;

  var unprocessedAssetGroupId = (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__.default)(data, ['unprocessed_asset_groups', '0']);
  var fullName = (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__.default)(data, ['full_name']);
  var userId = (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__.default)(data, 'guid');
  (0,_hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_6__.default)(intl.formatMessage({
    id: 'HOME'
  }), true, fullName);
  if (loading) return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_LoadingScreen__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 23
    }
  }); // if (error) handle error

  if (!fullName) return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ProfileSetup__WEBPACK_IMPORTED_MODULE_7__.default, {
    userData: data,
    refreshUserData: refresh,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 12
    }
  });
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_UserProfile__WEBPACK_IMPORTED_MODULE_3__.default, {
    someoneElse: false,
    userData: data,
    userId: userId,
    userDataLoading: loading,
    refreshUserData: refresh,
    noCollaborate: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, unprocessedAssetGroupId && (0,_emotion_core__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_bulkImport_UnprocessedBulkImportAlert__WEBPACK_IMPORTED_MODULE_5__.default, {
    unprocessedAssetGroupId: unprocessedAssetGroupId,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_4__.default, {
    onClick: function onClick() {
      var a = b.c.d.e.f;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, "Create an error"));
}

__signature__(Home, "useIntl{intl}\nuseGetMe{{ data, loading, refresh }}\nuseDocumentTitle{}", function () {
  return [react_intl__WEBPACK_IMPORTED_MODULE_9__.default, _models_users_useGetMe__WEBPACK_IMPORTED_MODULE_1__.default, _hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_6__.default];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, "Home", "/code/src/pages/home/Home.jsx");
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
/******/ 	__webpack_require__.h = () => ("e6150123")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.7769f1bf.hot-update.js.map