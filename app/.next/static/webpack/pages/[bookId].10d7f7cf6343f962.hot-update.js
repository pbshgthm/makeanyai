"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[bookId]",{

/***/ "./components/SidePane/APIKey.tsx":
/*!****************************************!*\
  !*** ./components/SidePane/APIKey.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APIKey\": function() { return /* binding */ APIKey; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"./lib/db.ts\");\n/* harmony import */ var dexie_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dexie-react-hooks */ \"./node_modules/.pnpm/dexie-react-hooks@1.1.3_@types+react@18.0.33_dexie@3.2.3_react@18.2.0/node_modules/dexie-react-hooks/dist/dexie-react-hooks.js\");\n/* harmony import */ var dexie_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dexie_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction APIKey() {\n    _s();\n    const apiKey = (0,dexie_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useLiveQuery)(()=>_lib_db__WEBPACK_IMPORTED_MODULE_1__.db.config.get(\"openai\"));\n    function onChange(e) {\n        const apiKeyValue = e.target.value;\n        if (apiKeyValue !== undefined) _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.config.put({\n            key: \"openai\",\n            value: apiKeyValue\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-8 flex flex-col gap-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xs text-white/20\",\n                children: \"OpenAI API Key\"\n            }, void 0, false, {\n                fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/APIKey.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                placeholder: \"Paste OpenAI API Key here\",\n                className: \"bg-black/20 rounded-lg w-full text-sm font-light py-2 px-4 outline-none placeholder:text-white/20 text-white/40\",\n                onChange: onChange,\n                value: (apiKey === null || apiKey === void 0 ? void 0 : apiKey.value) || \"\"\n            }, void 0, false, {\n                fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/APIKey.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/APIKey.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(APIKey, \"bVwCCBwouwQREXRmcM1tDWo5a0Y=\", false, function() {\n    return [\n        dexie_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useLiveQuery\n    ];\n});\n_c = APIKey;\nvar _c;\n$RefreshReg$(_c, \"APIKey\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVQYW5lL0FQSUtleS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkI7QUFDbUI7QUFHekMsU0FBU0UsU0FBUzs7SUFFdkIsTUFBTUMsU0FBU0YsK0RBQVlBLENBQUMsSUFBTUQsa0RBQWEsQ0FBQztJQUdoRCxTQUFTTSxTQUFTQyxDQUFzQyxFQUFFO1FBQ3hELE1BQU1DLGNBQWNELEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztRQUNsQyxJQUFJRixnQkFBZ0JHLFdBQ2xCWCxrREFBYSxDQUFDO1lBQ1phLEtBQUs7WUFDTEgsT0FBT0Y7UUFDVDtJQUNKO0lBRUEscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBd0I7Ozs7OzswQkFDdkMsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaSCxXQUFVO2dCQUNWVCxVQUFVQTtnQkFDVkksT0FBT1AsQ0FBQUEsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRTyxLQUFLLEtBQUk7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDO0dBMUJlUjs7UUFFQ0QsMkRBQVlBOzs7S0FGYkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlUGFuZS9BUElLZXkudHN4PzViYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9saWIvZGJcIlxuaW1wb3J0IHsgdXNlTGl2ZVF1ZXJ5IH0gZnJvbSBcImRleGllLXJlYWN0LWhvb2tzXCJcblxuXG5leHBvcnQgZnVuY3Rpb24gQVBJS2V5KCkge1xuXG4gIGNvbnN0IGFwaUtleSA9IHVzZUxpdmVRdWVyeSgoKSA9PiBkYi5jb25maWcuZ2V0KCdvcGVuYWknKSlcblxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgY29uc3QgYXBpS2V5VmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgIGlmIChhcGlLZXlWYWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgZGIuY29uZmlnLnB1dCh7XG4gICAgICAgIGtleTogJ29wZW5haScsXG4gICAgICAgIHZhbHVlOiBhcGlLZXlWYWx1ZSxcbiAgICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IGZsZXggZmxleC1jb2wgZ2FwLTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXdoaXRlLzIwXCI+T3BlbkFJIEFQSSBLZXk8L2Rpdj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3RlIE9wZW5BSSBBUEkgS2V5IGhlcmVcIlxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjay8yMCByb3VuZGVkLWxnIHctZnVsbCB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC00IG91dGxpbmUtbm9uZSBwbGFjZWhvbGRlcjp0ZXh0LXdoaXRlLzIwIHRleHQtd2hpdGUvNDBcIlxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIHZhbHVlPXthcGlLZXk/LnZhbHVlIHx8ICcnfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImRiIiwidXNlTGl2ZVF1ZXJ5IiwiQVBJS2V5IiwiYXBpS2V5IiwiY29uZmlnIiwiZ2V0Iiwib25DaGFuZ2UiLCJlIiwiYXBpS2V5VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsInB1dCIsImtleSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SidePane/APIKey.tsx\n"));

/***/ })

});