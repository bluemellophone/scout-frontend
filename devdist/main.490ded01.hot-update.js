self["webpackHotUpdatecodex_frontend"]("main",{

/***/ "./src/components/dataDisplays/DataDisplay.jsx":
/*!*****************************************************!*\
  !*** ./src/components/dataDisplays/DataDisplay.jsx ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataDisplay)
/* harmony export */ });
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/sortBy.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/Table.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/TableCell.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/TableHead.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/TableRow.js");
/* harmony import */ var _material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/TableFooter */ "./node_modules/@material-ui/core/esm/TableFooter/TableFooter.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/TablePagination.js");
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/TableSortLabel */ "./node_modules/@material-ui/core/esm/TableSortLabel/TableSortLabel.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/Popper.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/Fade.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js");
/* harmony import */ var _material_ui_icons_Print__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Print */ "./node_modules/@material-ui/icons/Print.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "./node_modules/@material-ui/icons/FilterList.js");
/* harmony import */ var _material_ui_icons_CloudDownload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/CloudDownload */ "./node_modules/@material-ui/icons/CloudDownload.js");
/* harmony import */ var _FilterBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FilterBar */ "./src/components/FilterBar.jsx");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Text */ "./src/components/Text.jsx");
/* harmony import */ var _TablePaginationActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TablePaginationActions */ "./src/components/dataDisplays/TablePaginationActions.jsx");
/* harmony import */ var _CollapsibleRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CollapsibleRow */ "./src/components/dataDisplays/CollapsibleRow.jsx");
/* harmony import */ var _sendCsv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sendCsv */ "./src/components/dataDisplays/sendCsv.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/code/src/components/dataDisplays/DataDisplay.jsx";
var _excluded = ["columns", "data", "title", "onPrint", "initiallySelectedRow", "onSelectRow", "hideFilterSearch", "renderExpandedRow", "variant", "idKey", "noTitleBar", "loading", "paginated", "paginatedExternally", "page", "onChangePage", "rowsPerPage", "dataCount", "paperStyles", "cellStyles"];

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






























function getCellAlignment(cellIndex, columnDefinition) {
  if (columnDefinition.align) return columnDefinition.align;
  if (cellIndex === 0) return undefined;
  return 'right';
}
/* Note for component consumers: every data item needs a unique ID!
   Yeah yeah typescript proptypes yeah yeah */


function DataDisplay(_ref) {
  var _this = this;

  var columns = _ref.columns,
      data = _ref.data,
      title = _ref.title,
      onPrint = _ref.onPrint,
      _ref$initiallySelecte = _ref.initiallySelectedRow,
      initiallySelectedRow = _ref$initiallySelecte === void 0 ? null : _ref$initiallySelecte,
      _ref$onSelectRow = _ref.onSelectRow,
      onSelectRow = _ref$onSelectRow === void 0 ? Function.prototype : _ref$onSelectRow,
      _ref$hideFilterSearch = _ref.hideFilterSearch,
      hideFilterSearch = _ref$hideFilterSearch === void 0 ? false : _ref$hideFilterSearch,
      renderExpandedRow = _ref.renderExpandedRow,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
      _ref$idKey = _ref.idKey,
      idKey = _ref$idKey === void 0 ? 'id' : _ref$idKey,
      noTitleBar = _ref.noTitleBar,
      loading = _ref.loading,
      _ref$paginated = _ref.paginated,
      paginated = _ref$paginated === void 0 ? false : _ref$paginated,
      _ref$paginatedExterna = _ref.paginatedExternally,
      paginatedExternally = _ref$paginatedExterna === void 0 ? true : _ref$paginatedExterna,
      page = _ref.page,
      onChangePage = _ref.onChangePage,
      rowsPerPage = _ref.rowsPerPage,
      dataCount = _ref.dataCount,
      _ref$paperStyles = _ref.paperStyles,
      paperStyles = _ref$paperStyles === void 0 ? {} : _ref$paperStyles,
      _ref$cellStyles = _ref.cellStyles,
      cellStyles = _ref$cellStyles === void 0 ? {} : _ref$cellStyles,
      rest = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.default)(_ref, _excluded);

  var initialColumnNames = columns.filter(function (c) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_11__.default)(c, 'options.display', true);
  }).map(function (c) {
    return c.name;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(initiallySelectedRow),
      _useState2 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState, 2),
      selectedRow = _useState2[0],
      setSelectedRow = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(initialColumnNames),
      _useState4 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState3, 2),
      visibleColumnNames = _useState4[0],
      setVisibleColumnNames = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState6 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState5, 2),
      filter = _useState6[0],
      setFilter = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      _useState8 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState7, 2),
      sortColumn = _useState8[0],
      setSortColumn = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      _useState10 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState9, 2),
      sortDirection = _useState10[0],
      setSortDirection = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      _useState12 = (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState11, 2),
      anchorEl = _useState12[0],
      setAnchorEl = _useState12[1];

  var filterPopperOpen = Boolean(anchorEl);
  var startIndex = paginated ? page * rowsPerPage : 0;
  var endIndex = paginated ? (page + 1) * rowsPerPage - 1 : Infinity;
  var visibleData = data.filter(function (datum, index) {
    if (index < startIndex && !paginatedExternally) return false;
    if (index > endIndex && !paginatedExternally) return false;
    var match = false;
    columns.forEach(function (c) {
      var userSuppliedDataParser = (0,lodash_es__WEBPACK_IMPORTED_MODULE_11__.default)(c, 'options.getStringValue');
      var rawValue = (0,lodash_es__WEBPACK_IMPORTED_MODULE_11__.default)(datum, c.name, '');
      var dataValue;

      if (userSuppliedDataParser) {
        var userValue = userSuppliedDataParser(rawValue, datum);
        dataValue = userValue ? userValue.toLowerCase().trim() : userValue;
      } else {
        var stringifiedValue = JSON.stringify(rawValue) || '';
        dataValue = stringifiedValue.toLowerCase().trim();
      }

      if (dataValue && dataValue.includes(filter.toLowerCase())) match = true;
    });
    return match;
  });
  var sortedData = visibleData;

  if (sortColumn) {
    sortedData = (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__.default)(data, sortColumn);
    if (sortDirection === 'asc') sortedData.reverse();
  }

  var visibleColumns = columns.filter(function (column) {
    return visibleColumnNames.includes(column.name);
  });
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_13__.default, {
    open: filterPopperOpen,
    anchorEl: anchorEl,
    placement: "bottom-end",
    transition: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, function (_ref2) {
    var TransitionProps = _ref2.TransitionProps;
    return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_14__.default, (0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, TransitionProps, {
      timeout: 350,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }
    }), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__.default, {
      style: {
        padding: '20px 32px 20px 20px'
      },
      elevation: 8,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {
      container: true,
      direction: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 15
      }
    }, !hideFilterSearch && (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_FilterBar__WEBPACK_IMPORTED_MODULE_5__.default, {
      size: "small",
      width: 140,
      style: {
        margin: '0 0 12px 0'
      },
      value: filter,
      onChange: setFilter,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 19
      }
    }), columns.filter(function (c) {
      return (0,lodash_es__WEBPACK_IMPORTED_MODULE_11__.default)(c, 'options.displayInFilter', true);
    }).map(function (c) {
      return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_17__.default, {
        key: c.name,
        control: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_18__.default, {
          size: "small",
          checked: visibleColumnNames.includes(c.name),
          onClick: function onClick() {
            if (visibleColumnNames.includes(c.name)) {
              if (visibleColumnNames.length === 1) return;
              setVisibleColumnNames(visibleColumnNames.filter(function (vc) {
                return vc !== c.name;
              }));
            } else {
              setVisibleColumnNames([].concat((0,_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(visibleColumnNames), [c.name]));
            }
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }
        }),
        label: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__.default, {
          variant: "body2",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 30
          }
        }, c.label),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }
      });
    }))));
  }), !noTitleBar && (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {
    container: true,
    justifyContent: "space-between",
    alignItems: "center",
    style: {
      margin: '16px 0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__.default, {
    variant: variant === 'primary' ? 'subtitle1' : 'subtitle2',
    style: {
      margin: variant === 'secondary' ? '12px 0 0 12px' : 'unset'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }, title)), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__.default, {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }, variant === 'primary' && (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__.default, {
    onClick: function onClick() {
      return (0,_sendCsv__WEBPACK_IMPORTED_MODULE_9__.default)(visibleColumns, visibleData);
    },
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 15
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_icons_CloudDownload__WEBPACK_IMPORTED_MODULE_20__.default, {
    style: {
      marginRight: 4
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 17
    }
  })), onPrint && (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__.default, {
    onClick: onPrint,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 15
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_icons_Print__WEBPACK_IMPORTED_MODULE_21__.default, {
    style: {
      marginRight: 4
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }
  })), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__.default, {
    onClick: function onClick(event) {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    },
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 13
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_22__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 15
    }
  })))), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_23__.default, {
    component: variant === 'secondary' ? _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__.default : undefined,
    elevation: variant === 'secondary' ? 2 : undefined,
    style: paperStyles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_24__.default, {
    style: {
      minWidth: 10
    },
    size: "small",
    "aria-label": title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 9
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_25__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_26__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, renderExpandedRow && (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_27__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 37
    }
  }), visibleColumns.map(function (c, i) {
    var activeSort = c.name === sortColumn;
    return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_27__.default, {
      key: c.name,
      align: getCellAlignment(i, c),
      sortDirection: activeSort ? sortDirection : false,
      style: {
        whiteSpace: 'nowrap'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 19
      }
    }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_28__.default, {
      active: activeSort,
      direction: activeSort ? sortDirection : 'asc',
      onClick: function onClick() {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        setSortColumn(c.name);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 21
      }
    }, c.label));
  }))), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_29__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 11
    }
  }, !loading && sortedData.map(function (datum) {
    return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CollapsibleRow__WEBPACK_IMPORTED_MODULE_8__.default, {
      key: (0,lodash_es__WEBPACK_IMPORTED_MODULE_11__.default)(datum, idKey),
      onClick: function onClick() {
        if (selectedRow === (0,lodash_es__WEBPACK_IMPORTED_MODULE_11__.default)(datum, idKey)) {
          setSelectedRow(null);
          onSelectRow(null);
        } else {
          setSelectedRow((0,lodash_es__WEBPACK_IMPORTED_MODULE_11__.default)(datum, idKey));
          onSelectRow(datum);
        }
      },
      selected: selectedRow === (0,lodash_es__WEBPACK_IMPORTED_MODULE_11__.default)(datum, idKey),
      datum: datum,
      cellStyles: cellStyles,
      columns: visibleColumns,
      renderExpandedRow: renderExpandedRow,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 17
      }
    });
  })), paginated && !loading && (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_30__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 13
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_26__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 15
    }
  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_31__.default, {
    page: page,
    count: dataCount || (0,lodash_es__WEBPACK_IMPORTED_MODULE_11__.default)(data, 'length', 0),
    onChangePage: onChangePage,
    rowsPerPage: rowsPerPage,
    rowsPerPageOptions: [rowsPerPage],
    ActionsComponent: _TablePaginationActions__WEBPACK_IMPORTED_MODULE_7__.default,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 17
    }
  }))))), loading && (0,_emotion_core__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_32__.default, {
    style: {
      margin: '16px 32px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 19
    }
  }));
}

__signature__(DataDisplay, "useState{[selectedRow, setSelectedRow](initiallySelectedRow)}\nuseState{[visibleColumnNames, setVisibleColumnNames](initialColumnNames)}\nuseState{[filter, setFilter]('')}\nuseState{[sortColumn, setSortColumn](null)}\nuseState{[sortDirection, setSortDirection](null)}\nuseState{[anchorEl, setAnchorEl](null)}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getCellAlignment, "getCellAlignment", "/code/src/components/dataDisplays/DataDisplay.jsx");
  reactHotLoader.register(DataDisplay, "DataDisplay", "/code/src/components/dataDisplays/DataDisplay.jsx");
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
/******/ 	__webpack_require__.h = () => ("081d186a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.490ded01.hot-update.js.map