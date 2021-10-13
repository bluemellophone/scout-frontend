self["webpackHotUpdatecodex_frontend"]("main",{

/***/ "./src/pages/user/Users.jsx":
/*!**********************************!*\
  !*** ./src/pages/user/Users.jsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Users)
/* harmony export */ });
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/components/useIntl.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");
/* harmony import */ var _components_LoadingScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LoadingScreen */ "./src/components/LoadingScreen.jsx");
/* harmony import */ var _components_SadScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SadScreen */ "./src/components/SadScreen.jsx");
/* harmony import */ var _components_AvatarGallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AvatarGallery */ "./src/components/AvatarGallery.jsx");
/* harmony import */ var _components_MainColumn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/MainColumn */ "./src/components/MainColumn.jsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header */ "./src/components/Header.jsx");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text.jsx");
/* harmony import */ var _components_ConfirmDelete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ConfirmDelete */ "./src/components/ConfirmDelete.jsx");
/* harmony import */ var _models_users_useGetUsers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/users/useGetUsers */ "./src/models/users/useGetUsers.js");
/* harmony import */ var _models_users_useGetMe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/users/useGetMe */ "./src/models/users/useGetMe.js");
/* harmony import */ var _modules_site_selectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modules/site/selectors */ "./src/modules/site/selectors.jsx");
/* harmony import */ var _hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/useDocumentTitle */ "./src/hooks/useDocumentTitle.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/code/src/pages/user/Users.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

















function Users() {
  var _this = this;

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__.default)();
  var siteName = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_modules_site_selectors__WEBPACK_IMPORTED_MODULE_12__.selectSiteName);
  var pageTitle = intl.formatMessage({
    id: 'USERS_PAGE_TITLE'
  }, {
    siteName: siteName
  });
  (0,_hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_13__.default)(pageTitle, false);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState2 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      userToDelete = _useState2[0],
      setUserToDelete = _useState2[1];

  var _useGetUsers = (0,_models_users_useGetUsers__WEBPACK_IMPORTED_MODULE_10__.default)(),
      data = _useGetUsers.data,
      loading = _useGetUsers.loading,
      error = _useGetUsers.error;

  var _useGetMe = (0,_models_users_useGetMe__WEBPACK_IMPORTED_MODULE_11__.default)(),
      currentUserData = _useGetMe.data;

  if (loading) return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_LoadingScreen__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 23
    }
  });
  if (error) return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_SadScreen__WEBPACK_IMPORTED_MODULE_4__.default, {
    variant: "genericError",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  });
  var safeUsers = data || [];
  var filteredUsers = safeUsers.filter(function (u) {
    return u.email !== 'public@localhost';
  });
  var deleteUsername = (0,lodash_es__WEBPACK_IMPORTED_MODULE_16__.default)(userToDelete, 'name', 'Unknown user');
  var isAdministrator = (0,lodash_es__WEBPACK_IMPORTED_MODULE_16__.default)(currentUserData, 'is_admin', false);
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_MainColumn__WEBPACK_IMPORTED_MODULE_6__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_ConfirmDelete__WEBPACK_IMPORTED_MODULE_9__.default, {
    onClose: function onClose() {
      return setUserToDelete(null);
    },
    onDelete: function onDelete() {
      return setUserToDelete(null);
    },
    open: Boolean(userToDelete),
    entityToDelete: deleteUsername,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_7__.default, {
    title: pageTitle,
    showButtonLink: isAdministrator,
    buttonLinkHref: "/create/user",
    buttonText: intl.formatMessage({
      id: 'CREATE_USER'
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_AvatarGallery__WEBPACK_IMPORTED_MODULE_5__.default, {
    entities: filteredUsers,
    titleKey: "full_name",
    filterKey: "full_name",
    justifyContent: "flex-start",
    getHref: function getHref(entity) {
      return "/users/".concat(entity.guid);
    },
    canDelete: isAdministrator,
    onDelete: function onDelete(entity) {
      setUserToDelete(entity);
    },
    renderDetails: function renderDetails(entity) {
      var affiliation = null;
      return affiliation ? (0,_emotion_core__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_8__.default, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 32
        }
      }, affiliation) : null;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }));
}

__signature__(Users, "useIntl{intl}\nuseSelector{siteName}\nuseDocumentTitle{}\nuseState{[userToDelete, setUserToDelete](null)}\nuseGetUsers{{ data, loading, error }}\nuseGetMe{{ data: currentUserData }}", function () {
  return [react_intl__WEBPACK_IMPORTED_MODULE_15__.default, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, _hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_13__.default, _models_users_useGetUsers__WEBPACK_IMPORTED_MODULE_10__.default, _models_users_useGetMe__WEBPACK_IMPORTED_MODULE_11__.default];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Users, "Users", "/code/src/pages/user/Users.jsx");
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
/******/ 	__webpack_require__.h = () => ("27bfcefd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.14435439.hot-update.js.map