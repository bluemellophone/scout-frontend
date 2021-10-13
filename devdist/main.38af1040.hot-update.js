self["webpackHotUpdatecodex_frontend"]("main",{

/***/ "./src/pages/sighting/encounters/CreateIndividualModal.jsx":
/*!*****************************************************************!*\
  !*** ./src/pages/sighting/encounters/CreateIndividualModal.jsx ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateIndividualModal)
/* harmony export */ });
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/set.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/pick.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony import */ var _models_individual_usePostIndividual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/individual/usePostIndividual */ "./src/models/individual/usePostIndividual.js");
/* harmony import */ var _models_individual_useIndividualFieldSchemas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/individual/useIndividualFieldSchemas */ "./src/models/individual/useIndividualFieldSchemas.js");
/* harmony import */ var _components_StandardDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/StandardDialog */ "./src/components/StandardDialog.jsx");
/* harmony import */ var _components_fields_edit_InputRowNew__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/fields/edit/InputRowNew */ "./src/components/fields/edit/InputRowNew.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button.jsx");
/* harmony import */ var _components_ButtonLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ButtonLink */ "./src/components/ButtonLink.jsx");
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Alert */ "./src/components/Alert.jsx");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text.jsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/code/src/pages/sighting/encounters/CreateIndividualModal.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();



var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};
















function calculateInitialState(schemas) {
  if (!schemas) return {};
  return schemas.reduce(function (memo, field) {
    (0,lodash_es__WEBPACK_IMPORTED_MODULE_14__.default)(memo, field.name, field.defaultValue);
    return memo;
  }, {});
}

function CreateIndividualModal(_ref) {
  var _this = this;

  var open = _ref.open,
      onClose = _ref.onClose,
      encounterId = _ref.encounterId;

  var _usePostIndividual = (0,_models_individual_usePostIndividual__WEBPACK_IMPORTED_MODULE_5__.default)(),
      loading = _usePostIndividual.loading,
      error = _usePostIndividual.error,
      postIndividual = _usePostIndividual.postIndividual;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),
      _useState2 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      _useState4 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState3, 2),
      newIndividualId = _useState4[0],
      setNewIndividualId = _useState4[1];

  var fieldSchemas = (0,_models_individual_useIndividualFieldSchemas__WEBPACK_IMPORTED_MODULE_6__.default)();
  var createFieldSchemas = fieldSchemas.filter(function (f) {
    return f.requiredForIndividualCreation;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var initialState = calculateInitialState(fieldSchemas);
    setFormState(initialState);
  }, fieldSchemas);

  var onCloseDialog = function onCloseDialog() {
    setFormState(calculateInitialState(fieldSchemas));
    setNewIndividualId(null);
    onClose();
  };

  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_StandardDialog__WEBPACK_IMPORTED_MODULE_7__.default, {
    maxWidth: newIndividualId ? 'sm' : 'xl',
    titleId: newIndividualId ? 'NEW_INDIVIDUAL_CREATED' : 'CREATE_INDIVIDUAL',
    open: open,
    onClose: onCloseDialog,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_13__.jsx)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_15__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, newIndividualId ? (0,_emotion_core__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_12__.default, {
    id: "NEW_INDIVIDUAL_CREATED_DESCRIPTION",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }) : (0,_emotion_core__WEBPACK_IMPORTED_MODULE_13__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {
    container: true,
    spacing: 2,
    justifyContent: "center",
    component: "form",
    direction: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, createFieldSchemas.map(function (schema) {
    return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_13__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {
      item: true,
      key: schema.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 15
      }
    }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_fields_edit_InputRowNew__WEBPACK_IMPORTED_MODULE_8__.default, {
      schema: schema,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_13__.jsx)(schema.editComponent, {
      schema: schema,
      value: (0,lodash_es__WEBPACK_IMPORTED_MODULE_17__.default)(formState, schema.name),
      onChange: function onChange(newFieldValue) {
        var newFormState = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({}, (0,lodash_es__WEBPACK_IMPORTED_MODULE_14__.default)(formState, schema.name, newFieldValue));

        setFormState(newFormState);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 19
      }
    })));
  })), error && (0,_emotion_core__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Alert__WEBPACK_IMPORTED_MODULE_11__.default, {
    titleId: "SERVER_ERROR",
    style: {
      marginTop: 16,
      marginBottom: 8
    },
    severity: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, error)), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_13__.jsx)(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_18__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
    display: "basic",
    onClick: onCloseDialog,
    id: newIndividualId ? 'CLOSE' : 'CANCEL',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }), newIndividualId ? (0,_emotion_core__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_ButtonLink__WEBPACK_IMPORTED_MODULE_10__.default, {
    id: "VIEW_NEW_INDIVIDUAL",
    display: "primary",
    href: "/individuals/".concat(newIndividualId),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }) : (0,_emotion_core__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
    display: "primary",
    loading: loading,
    onClick: /*#__PURE__*/(0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
      var individualData, newId;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              individualData = (0,lodash_es__WEBPACK_IMPORTED_MODULE_19__.default)(formState, 'names'); // just this for now...

              _context.next = 3;
              return postIndividual(individualData, encounterId);

            case 3:
              newId = _context.sent;
              setNewIndividualId(newId);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })),
    id: "CREATE_INDIVIDUAL",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  })));
}

__signature__(CreateIndividualModal, "usePostIndividual{{ loading, error, postIndividual }}\nuseState{[formState, setFormState]({})}\nuseState{[newIndividualId, setNewIndividualId](null)}\nuseIndividualFieldSchemas{fieldSchemas}\nuseEffect{}", function () {
  return [_models_individual_usePostIndividual__WEBPACK_IMPORTED_MODULE_5__.default, _models_individual_useIndividualFieldSchemas__WEBPACK_IMPORTED_MODULE_6__.default];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(calculateInitialState, "calculateInitialState", "/code/src/pages/sighting/encounters/CreateIndividualModal.jsx");
  reactHotLoader.register(CreateIndividualModal, "CreateIndividualModal", "/code/src/pages/sighting/encounters/CreateIndividualModal.jsx");
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
/******/ 	__webpack_require__.h = () => ("475a9410")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.38af1040.hot-update.js.map