self["webpackHotUpdatecodex_frontend"]("main",{

/***/ "./src/pages/individual/CreateIndividual.jsx":
/*!***************************************************!*\
  !*** ./src/pages/individual/CreateIndividual.jsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateIndividual)
/* harmony export */ });
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _models_individual_usePostIndividual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/individual/usePostIndividual */ "./src/models/individual/usePostIndividual.js");
/* harmony import */ var _components_CreatePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/CreatePage */ "./src/components/CreatePage.jsx");
/* harmony import */ var _components_InputRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/InputRow */ "./src/components/InputRow.jsx");
/* harmony import */ var _constants_individualSchema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/individualSchema */ "./src/constants/individualSchema.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/code/src/pages/individual/CreateIndividual.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();



var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var createFields = _constants_individualSchema__WEBPACK_IMPORTED_MODULE_9__.defaultIndividualFields.filter(function (f) {
  return f.requiredForIndividualCreation;
});
function CreateIndividual() {
  var _this = this;

  var _usePostIndividual = (0,_models_individual_usePostIndividual__WEBPACK_IMPORTED_MODULE_6__.default)(),
      postIndividual = _usePostIndividual.postIndividual;

  var initialState = createFields.reduce(function (memo, field) {
    memo[field.name] = field.defaultValue;
    return memo;
  }, {});

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(initialState),
      _useState2 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_CreatePage__WEBPACK_IMPORTED_MODULE_7__.default, {
    ctaId: "CREATE_INDIVIDUAL",
    onCreate: /*#__PURE__*/(0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
      var newIndividual;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return postIndividual();

            case 2:
              newIndividual = _context.sent;
              console.log(newIndividual);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {
    container: true,
    spacing: 2,
    justifyContent: "center",
    component: "form",
    direction: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, createFields.map(function (field) {
    return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {
      item: true,
      key: field.label || field.labelId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_InputRow__WEBPACK_IMPORTED_MODULE_8__.default, {
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
        lineNumber: 40,
        columnNumber: 13
      }
    }));
  })));
}

__signature__(CreateIndividual, "usePostIndividual{{ postIndividual }}\nuseState{[formState, setFormState](initialState)}", function () {
  return [_models_individual_usePostIndividual__WEBPACK_IMPORTED_MODULE_6__.default];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(createFields, "createFields", "/code/src/pages/individual/CreateIndividual.jsx");
  reactHotLoader.register(CreateIndividual, "CreateIndividual", "/code/src/pages/individual/CreateIndividual.jsx");
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
/******/ 	__webpack_require__.h = () => ("a3162f54")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.081d186a.hot-update.js.map