self["webpackHotUpdatecodex_frontend"]("main",{

/***/ "./src/components/filterFields/PointDistanceFilter.jsx":
/*!*************************************************************!*\
  !*** ./src/components/filterFields/PointDistanceFilter.jsx ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointDistanceFilter)
/* harmony export */ });
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/components/useIntl.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/Slider.js");
/* harmony import */ var _mapUtils_PointDistanceMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapUtils/PointDistanceMap */ "./src/components/filterFields/mapUtils/PointDistanceMap.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button */ "./src/components/Button.jsx");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Text */ "./src/components/Text.jsx");
/* harmony import */ var _StandardDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../StandardDialog */ "./src/components/StandardDialog.jsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "/code/src/components/filterFields/PointDistanceFilter.jsx";
var _excluded = ["label", "labelId", "description", "descriptionId", "filterId", "defaultDistance", "clause", "queryTerm", "onChange", "style", "nested"];

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};













var inputWidth = 220;
function PointDistanceFilter(_ref) {
  var label = _ref.label,
      labelId = _ref.labelId,
      description = _ref.description,
      descriptionId = _ref.descriptionId,
      filterId = _ref.filterId,
      _ref$defaultDistance = _ref.defaultDistance,
      defaultDistance = _ref$defaultDistance === void 0 ? 50 : _ref$defaultDistance,
      _ref$clause = _ref.clause,
      clause = _ref$clause === void 0 ? 'filter' : _ref$clause,
      queryTerm = _ref.queryTerm,
      onChange = _ref.onChange,
      style = _ref.style,
      _ref$nested = _ref.nested,
      nested = _ref$nested === void 0 ? false : _ref$nested,
      rest = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__.default)(_ref, _excluded);

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__.default)();
  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__.default)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(defaultDistance),
      _useState2 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useState, 2),
      distance = _useState2[0],
      setDistance = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState4 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useState3, 2),
      latitude = _useState4[0],
      setLatitude = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState6 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useState5, 2),
      longitude = _useState6[0],
      setLongitude = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      _useState8 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useState7, 2),
      gpsForMapUpdate = _useState8[0],
      setGpsForMapUpdate = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState10 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useState9, 2),
      modalOpen = _useState10[0],
      setModalOpen = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      _useState12 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useState11, 2),
      openCount = _useState12[0],
      setOpenCount = _useState12[1];

  var onClose = function onClose() {
    return setModalOpen(false);
  };

  var translatedLabel = labelId ? intl.formatMessage({
    id: labelId
  }) : label;
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
    style: (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.default)({
      display: 'flex',
      justifyContent: 'space-between'
    }, style),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__.default, {
    style: {
      color: theme.palette.text.secondary
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, translatedLabel), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_7__.default, (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    size: "small",
    onClick: function onClick() {
      setModalOpen(true);
      setOpenCount(openCount + 1);
    },
    style: {
      marginLeft: 8,
      minWidth: 48,
      height: 36
    },
    id: "SET"
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  })), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_StandardDialog__WEBPACK_IMPORTED_MODULE_9__.default, {
    open: modalOpen,
    onClose: onClose,
    titleId: "SELECT_LOCATION",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_13__.default, {
    style: {
      marginBottom: 24
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_mapUtils_PointDistanceMap__WEBPACK_IMPORTED_MODULE_6__.default, {
    latitude: latitude,
    longitude: longitude,
    gps: gpsForMapUpdate,
    openCount: openCount,
    distance: distance,
    onChange: function onChange(_ref2) {
      var lat = _ref2.lat,
          lng = _ref2.lng;
      setLatitude(lat.toString());
      setLongitude(lng.toString());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__.default, {
    id: "SEARCH_CENTER_POINT",
    variant: "h6",
    style: {
      marginTop: 12
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__.default, {
    style: {
      width: inputWidth,
      marginRight: 16
    },
    id: "gps-latitude",
    label: intl.formatMessage({
      id: 'DECIMAL_LATITUDE'
    }),
    value: latitude,
    onChange: function onChange(e) {
      var inputValue = e.target.value;
      setLatitude(inputValue);
      if (longitude) setGpsForMapUpdate([inputValue, longitude]);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__.default, {
    style: {
      width: inputWidth
    },
    id: "gps-longitude",
    label: intl.formatMessage({
      id: 'DECIMAL_LONGITUDE'
    }),
    value: longitude,
    onChange: function onChange(e) {
      var inputValue = e.target.value;
      setLongitude(inputValue);
      if (latitude) setGpsForMapUpdate([latitude, inputValue]);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  })), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__.default, {
    id: "SEARCH_RADIUS_LABEL",
    variant: "h6",
    style: {
      marginTop: 12
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_15__.default, {
    style: {
      marginTop: 48,
      width: inputWidth * 2 + 16
    },
    value: distance,
    min: 1,
    max: 500,
    onChange: function onChange(_, newDistance) {
      setDistance(newDistance);
    },
    valueLabelDisplay: "on",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  })), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_16__.default, {
    style: {
      padding: '0px 24px 24px 24px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_7__.default, {
    display: "basic",
    onClick: onClose,
    id: "CANCEL",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_7__.default, {
    display: "primary",
    onClick: function onClick() {
      onChange({
        filterId: filterId,
        descriptor: "".concat(translatedLabel, ": ").concat(distance, "km"),
        nested: nested,
        clause: clause,
        query: {
          geo_distance: (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
            distance: "".concat(distance, "km")
          }, queryTerm, [parseFloat(latitude), parseFloat(longitude)])
        }
      });
      onClose();
    },
    id: "CONFIRM",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }))));
}

__signature__(PointDistanceFilter, "useIntl{intl}\nuseTheme{theme}\nuseState{[distance, setDistance](defaultDistance)}\nuseState{[latitude, setLatitude]('')}\nuseState{[longitude, setLongitude]('')}\nuseState{[gpsForMapUpdate, setGpsForMapUpdate]([])}\nuseState{[modalOpen, setModalOpen](false)}\nuseState{[openCount, setOpenCount](0)}", function () {
  return [react_intl__WEBPACK_IMPORTED_MODULE_11__.default, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__.default];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(inputWidth, "inputWidth", "/code/src/components/filterFields/PointDistanceFilter.jsx");
  reactHotLoader.register(PointDistanceFilter, "PointDistanceFilter", "/code/src/components/filterFields/PointDistanceFilter.jsx");
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
/******/ 	__webpack_require__.h = () => ("c82c85df")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.3151bafd.hot-update.js.map