self["webpackHotUpdatecodex_frontend"]("main",{

/***/ "./src/components/AuthenticatedAppHeader/HeaderButton.jsx":
/*!****************************************************************!*\
  !*** ./src/components/AuthenticatedAppHeader/HeaderButton.jsx ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderButton)
/* harmony export */ });
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/Badge.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Text */ "./src/components/Text.jsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _excluded = ["showBadge", "badgeContent"];
var _jsxFileName = "/code/src/components/AuthenticatedAppHeader/HeaderButton.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









function Core(_ref) {
  var Icon = _ref.Icon,
      onClick = _ref.onClick,
      titleId = _ref.titleId,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default)();
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__.default, {
    title: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_4__.default, {
      variant: "body2",
      id: titleId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__.default, {
    onClick: onClick,
    style: (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.default)({
      marginLeft: 8,
      padding: 10,
      backgroundColor: theme.palette.grey.A100,
      color: theme.palette.grey.A400
    }, style),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_5__.jsx)(Icon, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })));
}

__signature__(Core, "useTheme{theme}", function () {
  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default];
});

function HeaderButton(_ref2) {
  var showBadge = _ref2.showBadge,
      badgeContent = _ref2.badgeContent,
      rest = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, _excluded);

  if (showBadge) return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_9__.default, {
    color: "secondary",
    overlap: "circular",
    badgeContent: badgeContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_5__.jsx)(Core, (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  })));
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_5__.jsx)(Core, (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 10
    }
  }));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Core, "Core", "/code/src/components/AuthenticatedAppHeader/HeaderButton.jsx");
  reactHotLoader.register(HeaderButton, "HeaderButton", "/code/src/components/AuthenticatedAppHeader/HeaderButton.jsx");
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
/******/ 	__webpack_require__.h = () => ("6079e811")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.715a279f.hot-update.js.map