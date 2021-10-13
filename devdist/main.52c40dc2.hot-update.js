self["webpackHotUpdatecodex_frontend"]("main",{

/***/ "./src/components/filterFields/mapUtils/PointDistanceMap.jsx":
/*!*******************************************************************!*\
  !*** ./src/components/filterFields/mapUtils/PointDistanceMap.jsx ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointDistanceMap)
/* harmony export */ });
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var _constants_apiKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/apiKeys */ "./src/constants/apiKeys.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/code/src/components/filterFields/mapUtils/PointDistanceMap.jsx";
var _excluded = ["distance", "latitude", "longitude", "gps", "openCount", "onChange"];

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var lastMarker = null;
var lastCircle = null;
/* component expects distance in kilometers */

function PointDistanceMap(_ref) {
  var _ref$distance = _ref.distance,
      distance = _ref$distance === void 0 ? 50 : _ref$distance,
      latitude = _ref.latitude,
      longitude = _ref.longitude,
      gps = _ref.gps,
      openCount = _ref.openCount,
      onChange = _ref.onChange,
      rest = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, _excluded);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      _useState2 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      mapObject = _useState2[0],
      setMapObject = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      _useState4 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState3, 2),
      mapsApi = _useState4[0],
      setMapsApi = _useState4[1];

  var mapsApiRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  mapsApiRef.current = mapsApi;
  var mapObjectRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  mapObjectRef.current = mapsApi;

  function draw(lat, lng) {
    if (lastMarker) lastMarker.setMap(null); // remove old marker

    if (lastCircle) lastCircle.setMap(null); // remove old circle

    console.log('here i go with the drawing', lat, lng);
    var safeMapsApi = mapsApi || mapsApiRef.current;
    var safeMapObject = mapObject || mapObjectRef.current;
    if (!safeMapsApi || !safeMapObject) return;
    var markerPosition = new safeMapsApi.LatLng(lat, lng);
    var circle = new safeMapsApi.Circle({
      center: markerPosition,
      radius: 1000 * distance,
      strokeColor: '#000000',
      strokeWeight: 2,
      strokeOpacity: 0.8,
      fillColor: '#000000',
      fillOpacity: 0.35
    });
    circle.setMap(safeMapObject);
    var marker = new safeMapsApi.Marker({
      position: markerPosition
    });
    marker.setMap(safeMapObject);
    lastMarker = marker;
    lastCircle = circle;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (lastCircle) {
      lastCircle.setOptions({
        radius: 1000 * distance
      });
    }
  }, [distance]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var lat = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__.default)(gps, '0');
    var lng = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__.default)(gps, '1');
    if (lat && lng) draw(parseFloat(lat), parseFloat(lng));
  }, [gps]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (latitude && longitude) {
      console.log('gonna draw this suckkaaa');
      draw(parseFloat(latitude), parseFloat(longitude));
    }

    ;
  }, [openCount]);
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    style: {
      height: 400,
      width: 500,
      maxWidth: '100%',
      maxHeight: '50vh'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_6__.jsx)(google_map_react__WEBPACK_IMPORTED_MODULE_4__.default, (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    bootstrapURLKeys: {
      key: _constants_apiKeys__WEBPACK_IMPORTED_MODULE_5__.googleMapsApiKey
    },
    defaultCenter: {
      lat: 0,
      lng: 0
    },
    defaultZoom: 1.3,
    options: {
      minZoom: 1
    },
    onClick: function onClick(_ref2) {
      var lat = _ref2.lat,
          lng = _ref2.lng;
      onChange({
        lat: lat,
        lng: lng
      });
      draw(lat, lng);
    },
    yesIWantToUseGoogleMapApiInternals: true,
    onGoogleApiLoaded: function onGoogleApiLoaded(_ref3) {
      var map = _ref3.map,
          maps = _ref3.maps;
      setMapObject(map);
      setMapsApi(maps);
    }
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  })));
}

__signature__(PointDistanceMap, "useState{[mapObject, setMapObject](null)}\nuseState{[mapsApi, setMapsApi](null)}\nuseRef{mapsApiRef}\nuseRef{mapObjectRef}\nuseEffect{}\nuseEffect{}\nuseEffect{}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(lastMarker, "lastMarker", "/code/src/components/filterFields/mapUtils/PointDistanceMap.jsx");
  reactHotLoader.register(lastCircle, "lastCircle", "/code/src/components/filterFields/mapUtils/PointDistanceMap.jsx");
  reactHotLoader.register(PointDistanceMap, "PointDistanceMap", "/code/src/components/filterFields/mapUtils/PointDistanceMap.jsx");
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
/******/ 	__webpack_require__.h = () => ("585db903")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.52c40dc2.hot-update.js.map