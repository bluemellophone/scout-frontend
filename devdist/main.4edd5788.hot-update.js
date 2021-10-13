self["webpackHotUpdatecodex_frontend"]("main",{

/***/ "./src/components/EditEntityModal.jsx":
/*!********************************************!*\
  !*** ./src/components/EditEntityModal.jsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/components/message.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/Tabs.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/Tab.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./src/components/Button.jsx");
/* harmony import */ var _LabeledInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LabeledInput */ "./src/components/LabeledInput.jsx");
/* harmony import */ var _StandardDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StandardDialog */ "./src/components/StandardDialog.jsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/code/src/components/EditEntityModal.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};













var _default = function _default(_ref) {
  var _this = this;

  var open = _ref.open,
      _ref$onSave = _ref.onSave,
      onSave = _ref$onSave === void 0 ? Function.prototype : _ref$onSave,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? Function.prototype : _ref$onClose,
      fieldValues = _ref.fieldValues,
      fieldSchema = _ref.fieldSchema,
      categories = _ref.categories;
  var categoryArray = categories ? Object.values(categories) : null;
  var initialState = fieldValues.reduce(function (memo, field) {
    memo[field.name] = field.value;
    return memo;
  }, {});

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialState),
      _useState2 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(categories ? categoryArray[0].name : null),
      _useState4 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState3, 2),
      currentCategory = _useState4[0],
      setCurrentCategory = _useState4[1];

  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StandardDialog__WEBPACK_IMPORTED_MODULE_6__.default, {
    open: open,
    onClose: onClose,
    titleId: "EDIT",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__.default, {
    style: {
      height: 500
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, categories && (0,_emotion_core__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__.default, {
    component: "h3",
    value: currentCategory,
    style: {
      marginTop: 0
    },
    onChange: function onChange(_, newCategory) {
      return setCurrentCategory(newCategory);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, categoryArray.map(function (category) {
    return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__.default, {
      key: category.name,
      value: category.name,
      label: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_11__.default, {
        id: category.labelId,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 24
        }
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    });
  })), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__.default, {
    container: true,
    spacing: 2,
    justifyContent: "center",
    style: {
      maxWidth: 320
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, fieldValues.map(function (fieldData) {
    var schema = fieldSchema.find(function (candidateSchema) {
      return candidateSchema.name === fieldData.name;
    });
    var matchingCategory = currentCategory ? schema.category === currentCategory : true;
    if (!matchingCategory) return null;
    return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__.default, {
      item: true,
      key: fieldData.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LabeledInput__WEBPACK_IMPORTED_MODULE_5__.default, {
      schema: schema,
      value: formState[fieldData.name],
      onChange: function onChange(newFieldValue) {
        setFormState((0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)((0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({}, formState), {}, (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, fieldData.name, newFieldValue)));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }));
  }))), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_13__.default, {
    style: {
      padding: '0px 24px 24px 24px',
      marginTop: 32
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.default, {
    onClick: function onClick() {
      setFormState(initialState);
      onClose();
    },
    display: "basic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_11__.default, {
    id: "CANCEL",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  })), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.default, {
    onClick: function onClick() {
      onSave(formState);
    },
    display: "primary",
    autoFocus: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_11__.default, {
    id: "CONFIRM",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }))));
};

__signature__(_default, "useState{[formState, setFormState](initialState)}\nuseState{[currentCategory, setCurrentCategory](categories ? categoryArray[0].name : null)}");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/code/src/components/EditEntityModal.jsx");
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
/******/ 	__webpack_require__.h = () => ("490ded01")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4edd5788.hot-update.js.map