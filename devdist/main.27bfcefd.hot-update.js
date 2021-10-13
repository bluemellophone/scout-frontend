self["webpackHotUpdatecodex_frontend"]("main",{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/components/provider.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _formatjs_intl_numberformat_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @formatjs/intl-numberformat/polyfill */ "./node_modules/@formatjs/intl-numberformat/polyfill.js");
/* harmony import */ var _formatjs_intl_numberformat_polyfill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_formatjs_intl_numberformat_polyfill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _formatjs_intl_numberformat_dist_locale_data_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @formatjs/intl-numberformat/dist/locale-data/en */ "./node_modules/@formatjs/intl-numberformat/dist/locale-data/en.js");
/* harmony import */ var _formatjs_intl_numberformat_dist_locale_data_en__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_formatjs_intl_numberformat_dist_locale_data_en__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _formatjs_intl_numberformat_dist_locale_data_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @formatjs/intl-numberformat/dist/locale-data/es */ "./node_modules/@formatjs/intl-numberformat/dist/locale-data/es.js");
/* harmony import */ var _formatjs_intl_numberformat_dist_locale_data_es__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_formatjs_intl_numberformat_dist_locale_data_es__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _models_site_useSiteSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/site/useSiteSettings */ "./src/models/site/useSiteSettings.js");
/* harmony import */ var _modules_app_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/app/selectors */ "./src/modules/app/selectors.js");
/* harmony import */ var _styles_materialTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/materialTheme */ "./src/styles/materialTheme.js");
/* harmony import */ var _locale_en_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../locale/en.json */ "./locale/en.json");
/* harmony import */ var _locale_es_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../locale/es.json */ "./locale/es.json");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./context */ "./src/context.js");
/* harmony import */ var _FrontDesk__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FrontDesk */ "./src/FrontDesk.jsx");
/* harmony import */ var _components_SadScreen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/SadScreen */ "./src/components/SadScreen.jsx");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ErrorBoundary */ "./src/ErrorBoundary.jsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/code/src/App.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



















 // polyfill to enable formatting of a number using the unit prop



if (typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData((_formatjs_intl_numberformat_dist_locale_data_en__WEBPACK_IMPORTED_MODULE_5___default()));

  Intl.NumberFormat.__addLocaleData((_formatjs_intl_numberformat_dist_locale_data_es__WEBPACK_IMPORTED_MODULE_6___default()));
}

var messageMap = {
  en: _locale_en_json__WEBPACK_IMPORTED_MODULE_10__,
  es: _locale_es_json__WEBPACK_IMPORTED_MODULE_11__
};

function ScrollToTop() {
  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useLocation)(),
      pathname = _useLocation.pathname;

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    return window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

__signature__(ScrollToTop, "useLocation{{ pathname }}\nuseEffect{}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useLocation];
});

function reducer(state, action) {
  var type = action.type,
      data = action.data;

  if (type === 'SET_SIGHTINGS_NEEDS_FETCH') {
    return (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)((0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({}, state), {}, {
      sightingsNeedsFetch: data
    });
  }

  if (type === 'SET_SITE_SETTINGS_NEEDS_FETCH') {
    return (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)((0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({}, state), {}, {
      siteSettingsNeedsFetch: data
    });
  }

  if (type === 'SET_SITE_SETTINGS_SCHEMA_NEEDS_FETCH') {
    return (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)((0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({}, state), {}, {
      siteSettingsSchemaNeedsFetch: data
    });
  }

  if (type === 'SET_SITE_SETTINGS_SCHEMA') {
    return (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)((0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({}, state), {}, {
      siteSettingsSchema: data
    });
  }

  if (type === 'SET_SITE_SETTINGS_VERSION') {
    return (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)((0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({}, state), {}, {
      siteSettingsVersion: data
    });
  }

  if (type === 'SET_SITE_SETTINGS') {
    return (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)((0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({}, state), {}, {
      siteSettings: data
    });
  }

  if (type === 'SET_ME') {
    return (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)((0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({}, state), {}, {
      me: data
    });
  }

  console.warn('Action not recognized', action);
  return state;
}

function ContextualizedApp() {
  var locale = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_modules_app_selectors__WEBPACK_IMPORTED_MODULE_8__.selectLocale);

  var _useSiteSettings = (0,_models_site_useSiteSettings__WEBPACK_IMPORTED_MODULE_7__.default)(),
      data = _useSiteSettings.data,
      error = _useSiteSettings.error;

  var adminUserInitialized = (0,lodash_es__WEBPACK_IMPORTED_MODULE_18__.default)(data, 'site.adminUserInitialized');
  var primaryColor = (0,lodash_es__WEBPACK_IMPORTED_MODULE_18__.default)(data, ['site.look.themeColor', 'value']);
  if (error) return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_SadScreen__WEBPACK_IMPORTED_MODULE_14__.default, {
    variant: "serverError",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  });
  if (!primaryColor) return null;
  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__.default)((0,_styles_materialTheme__WEBPACK_IMPORTED_MODULE_9__.default)(primaryColor));
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_16__.jsx)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__.default, {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_16__.jsx)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_21__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_22__.default, {
    locale: locale,
    defaultLocale: "en",
    messages: messageMap[locale],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.BrowserRouter, {
    basename: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_16__.jsx)(ScrollToTop, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_15__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_16__.jsx)(_FrontDesk__WEBPACK_IMPORTED_MODULE_13__.default, {
    adminUserInitialized: adminUserInitialized,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  })))));
}

__signature__(ContextualizedApp, "useSelector{locale}\nuseSiteSettings{{ data, error }}", function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, _models_site_useSiteSettings__WEBPACK_IMPORTED_MODULE_7__.default];
});

function App() {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, _context__WEBPACK_IMPORTED_MODULE_12__.initialState),
      _useReducer2 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_16__.jsx)(_context__WEBPACK_IMPORTED_MODULE_12__.AppContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_16__.jsx)(ContextualizedApp, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }));
}

__signature__(App, "useReducer{[state, dispatch](initialState)}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messageMap, "messageMap", "/code/src/App.jsx");
  reactHotLoader.register(ScrollToTop, "ScrollToTop", "/code/src/App.jsx");
  reactHotLoader.register(reducer, "reducer", "/code/src/App.jsx");
  reactHotLoader.register(ContextualizedApp, "ContextualizedApp", "/code/src/App.jsx");
  reactHotLoader.register(App, "App", "/code/src/App.jsx");
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
/******/ 	__webpack_require__.h = () => ("715a279f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.27bfcefd.hot-update.js.map