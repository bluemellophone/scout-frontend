self["webpackHotUpdatecodex_frontend"]("main",{

/***/ "./src/pages/org/CreateOrg.jsx":
/*!*************************************!*\
  !*** ./src/pages/org/CreateOrg.jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateOrg)
/* harmony export */ });
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _components_CreatePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CreatePage */ "./src/components/CreatePage.jsx");
/* harmony import */ var _components_InputRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/InputRow */ "./src/components/InputRow.jsx");
/* harmony import */ var _constants_orgSchema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/orgSchema */ "./src/constants/orgSchema.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/code/src/pages/org/CreateOrg.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







function CreateOrg() {
  var _this = this;

  var initialState = _constants_orgSchema__WEBPACK_IMPORTED_MODULE_6__.default.reduce(function (memo, field) {
    memo[field.name] = field.defaultValue;
    return memo;
  }, {});

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialState),
      _useState2 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_CreatePage__WEBPACK_IMPORTED_MODULE_4__.default, {
    ctaId: "CREATE_ORG",
    onCreate: function onCreate() {
      return console.log(formState);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__.default, {
    container: true,
    spacing: 2,
    justifyContent: "center",
    component: "form",
    direction: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, _constants_orgSchema__WEBPACK_IMPORTED_MODULE_6__.default.map(function (field) {
    return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__.default, {
      item: true,
      key: field.label || field.labelId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_InputRow__WEBPACK_IMPORTED_MODULE_5__.default, {
      label: field.label,
      labelId: field.labelId,
      description: field.description,
      descriptionId: field.descriptionId,
      required: field.required,
      schema: field,
      value: formState[field.name],
      onChange: function onChange(newFieldValue) {
        return setFormState((0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)((0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({}, formState), {}, (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, field.name, newFieldValue)));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }));
  })));
}

__signature__(CreateOrg, "useState{[formState, setFormState](initialState)}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CreateOrg, "CreateOrg", "/code/src/pages/org/CreateOrg.jsx");
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
/******/ 	__webpack_require__.h = () => ("38af1040")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a3162f54.hot-update.js.map