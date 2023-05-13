"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/Grade2";
exports.ids = ["pages/Grade2"];
exports.modules = {

/***/ "./pages/Grade2.tsx":
/*!**************************!*\
  !*** ./pages/Grade2.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Grade)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Grade() {\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"0\");\n    const [grade, setGrade] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        calculateGrade();\n    }, [\n        score\n    ]);\n    const handleChange = (event)=>{\n        setScore(event.target.value);\n    };\n    function calculateGrade() {\n        if (Number(score) >= 90) {\n            setGrade(\"S\");\n        } else if (Number(score) >= 80) {\n            setGrade(\"A\");\n        } else if (Number(score) >= 70 && Number(score) < 80) {\n            setGrade(\"B\");\n        } else if (Number(score) >= 60 && Number(score) < 70) {\n            setGrade(\"C\");\n        } else {\n            setGrade(\"F\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            flexDirection: \"column\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                    type: \"text\",\n                    placeholder: \"Score\",\n                    onChange: handleChange,\n                    value: score\n                }, void 0, false, {\n                    fileName: \"/Users/hok191/Desktop/baowhan-app/pages/Grade2.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hok191/Desktop/baowhan-app/pages/Grade2.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    onClick: ()=>{\n                        calculateGrade();\n                    },\n                    variant: \"contained\",\n                    children: \"Confirm\"\n                }, void 0, false, {\n                    fileName: \"/Users/hok191/Desktop/baowhan-app/pages/Grade2.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hok191/Desktop/baowhan-app/pages/Grade2.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: {\n                        fontSize: \"200px\",\n                        color: \"#376CCA \"\n                    },\n                    children: grade\n                }, void 0, false, {\n                    fileName: \"/Users/hok191/Desktop/baowhan-app/pages/Grade2.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hok191/Desktop/baowhan-app/pages/Grade2.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hok191/Desktop/baowhan-app/pages/Grade2.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9HcmFkZTIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZDO0FBRWM7QUFHNUMsU0FBU0ksUUFBUTtJQUM5QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBRW5DRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RPO0lBQ0YsR0FBRztRQUFDSjtLQUFNO0lBRVYsTUFBTUssZUFBZSxDQUFDQyxRQUVoQjtRQUNKTCxTQUFTSyxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFDQSxTQUFTSixpQkFBaUI7UUFDeEIsSUFBSUssT0FBT1QsVUFBVSxJQUFJO1lBQ3ZCRyxTQUFTO1FBQ1gsT0FBTyxJQUFJTSxPQUFPVCxVQUFVLElBQUk7WUFDOUJHLFNBQVM7UUFDWCxPQUFPLElBQUlNLE9BQU9ULFVBQVUsTUFBTVMsT0FBT1QsU0FBUyxJQUFJO1lBQ3BERyxTQUFTO1FBQ1gsT0FBTyxJQUFJTSxPQUFPVCxVQUFVLE1BQU1TLE9BQU9ULFNBQVMsSUFBSTtZQUNwREcsU0FBUztRQUNYLE9BQU87WUFDTEEsU0FBUztRQUNYLENBQUM7SUFDSDtJQUNBLHFCQUNFLDhEQUFDTztRQUNDQyxPQUFPO1lBQ0xDLFNBQVM7WUFDVEMsZ0JBQWdCO1lBQ2hCQyxlQUFlO1FBQ2pCOzswQkFFQSw4REFBQ0o7Z0JBQ0NDLE9BQU87b0JBQ0xDLFNBQVM7b0JBQ1RDLGdCQUFnQjtnQkFDbEI7MEJBRUEsNEVBQUNqQixnREFBS0E7b0JBQ0ptQixNQUFLO29CQUNMQyxhQUFZO29CQUNaQyxVQUFVWjtvQkFDVkcsT0FBT1I7Ozs7Ozs7Ozs7OzBCQUdYLDhEQUFDVTtnQkFDQ0MsT0FBTztvQkFDTEMsU0FBUztvQkFDVEMsZ0JBQWdCO2dCQUNsQjswQkFFQSw0RUFBQ2xCLGlEQUFNQTtvQkFDTHVCLFNBQVMsSUFBTTt3QkFDYmQ7b0JBQ0Y7b0JBQ0FlLFNBQVE7OEJBQ1Q7Ozs7Ozs7Ozs7OzBCQUlILDhEQUFDVDtnQkFDQ0MsT0FBTztvQkFDTEMsU0FBUztvQkFDVEMsZ0JBQWdCO2dCQUNsQjswQkFFQSw0RUFBQ087b0JBQUdULE9BQU87d0JBQUVVLFVBQVU7d0JBQVNDLE9BQU87b0JBQVc7OEJBQUlwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhb3doYW4tYXBwLy4vcGFnZXMvR3JhZGUyLnRzeD9hNDU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgSW5wdXQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiXG5pbXBvcnQgaGFuZGxlciBmcm9tIFwiLi9hcGkvaGVsbG9cIlxuaW1wb3J0IHsgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE5hdiBmcm9tIFwiQC9zcmMvY29tcG9uZW50L05hdlwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyYWRlKCkge1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKFwiMFwiKVxuICBjb25zdCBbZ3JhZGUsIHNldEdyYWRlXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjYWxjdWxhdGVHcmFkZSgpXG4gIH0sIFtzY29yZV0pXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiB7XG4gICAgdGFyZ2V0OiB7IHZhbHVlOiBTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+IH1cbiAgfSkgPT4ge1xuICAgIHNldFNjb3JlKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuICBmdW5jdGlvbiBjYWxjdWxhdGVHcmFkZSgpIHtcbiAgICBpZiAoTnVtYmVyKHNjb3JlKSA+PSA5MCkge1xuICAgICAgc2V0R3JhZGUoXCJTXCIpXG4gICAgfSBlbHNlIGlmIChOdW1iZXIoc2NvcmUpID49IDgwKSB7XG4gICAgICBzZXRHcmFkZShcIkFcIilcbiAgICB9IGVsc2UgaWYgKE51bWJlcihzY29yZSkgPj0gNzAgJiYgTnVtYmVyKHNjb3JlKSA8IDgwKSB7XG4gICAgICBzZXRHcmFkZShcIkJcIilcbiAgICB9IGVsc2UgaWYgKE51bWJlcihzY29yZSkgPj0gNjAgJiYgTnVtYmVyKHNjb3JlKSA8IDcwKSB7XG4gICAgICBzZXRHcmFkZShcIkNcIilcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0R3JhZGUoXCJGXCIpXG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNjb3JlXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXtzY29yZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgY2FsY3VsYXRlR3JhZGUoKVxuICAgICAgICAgIH19XG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgID5cbiAgICAgICAgICBDb25maXJtXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxoMSBzdHlsZT17eyBmb250U2l6ZTogXCIyMDBweFwiLCBjb2xvcjogXCIjMzc2Q0NBIFwiIH19PntncmFkZX08L2gxPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJJbnB1dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiR3JhZGUiLCJzY29yZSIsInNldFNjb3JlIiwiZ3JhZGUiLCJzZXRHcmFkZSIsImNhbGN1bGF0ZUdyYWRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk51bWJlciIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwib25DbGljayIsInZhcmlhbnQiLCJoMSIsImZvbnRTaXplIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Grade2.tsx\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Grade2.tsx"));
module.exports = __webpack_exports__;

})();