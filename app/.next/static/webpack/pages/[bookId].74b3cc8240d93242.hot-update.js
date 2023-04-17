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

/***/ "./components/SidePane/BookList.tsx":
/*!******************************************!*\
  !*** ./components/SidePane/BookList.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BookList\": function() { return /* binding */ BookList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"./lib/db.ts\");\n/* harmony import */ var _lib_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/default */ \"./lib/default.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"./lib/utils.ts\");\n/* harmony import */ var dexie_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dexie-react-hooks */ \"./node_modules/.pnpm/dexie-react-hooks@1.1.3_@types+react@18.0.33_dexie@3.2.3_react@18.2.0/node_modules/dexie-react-hooks/dist/dexie-react-hooks.js\");\n/* harmony import */ var dexie_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dexie_react_hooks__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/next@13.3.0_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/.pnpm/next@13.3.0_react-dom@18.2.0_react@18.2.0/node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction BookItem(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n        href: props.book.id,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row gap-3 items-center p-2 px-4 rounded-xl cursor-pointer group \".concat(props.isSelected ? \"bg-purple-400/10 text-white/60\" : \"hover:bg-white/5\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col flex-grow gap-0.5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-white/40 text-sm\",\n                            children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.truncate)(props.book.name, 24)\n                        }, void 0, false, {\n                            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-white/30 text-[10px]\",\n                            children: props.book.createdAt\n                        }, void 0, false, {\n                            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                props.isSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white/5 w-8 h-8 rounded-lg text-center text-white/30 opacity-0 justify-center items-center text-sm group-hover:flex hover:bg-red-400/10 hover:bg-red-400 group-hover:opacity-100\",\n                    onClick: (e)=>{\n                        e.preventDefault();\n                        e.stopPropagation();\n                        props.removeBook();\n                    },\n                    children: \"x\"\n                }, void 0, false, {\n                    fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = BookItem;\nfunction BookList() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { bookId  } = router.query;\n    const books = (0,dexie_react_hooks__WEBPACK_IMPORTED_MODULE_4__.useLiveQuery)(()=>{\n        var _db_books;\n        return (_db_books = _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.books) === null || _db_books === void 0 ? void 0 : _db_books.orderBy(\"createdAt\").reverse().toArray();\n    });\n    async function addBook() {\n        const newBook = {\n            ..._lib_default__WEBPACK_IMPORTED_MODULE_2__.emptyBook,\n            createdAt: new Date().toISOString(),\n            updatedAt: new Date().toISOString()\n        };\n        const id = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.books.add(newBook);\n        router.push(\"/\".concat(id));\n    }\n    async function removeBook(bookId) {\n        if (!books) return;\n        const currIndex = books.findIndex((book)=>book.id === bookId);\n        const nextBook = currIndex === books.length - 1 ? books[currIndex - 1] : books[currIndex + 1];\n        await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.books[\"delete\"](bookId);\n        if (nextBook) {\n            router.push(\"/\".concat(nextBook.id));\n        } else {\n            router.push(\"/\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex flex-col gap-4 flex-grow overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-6 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row hover:bg-black/10 justify-start items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" border-white/[3%] bg-white/[3%] w-9 h-9 rounded-lg text-center text-white/30 flex justify-center items-center text-xs\",\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \" text-white/40 text-left hover:text-white/60 text-xs p-4 rounded-lg\",\n                            onClick: addBook,\n                            children: \"New Book\"\n                        }, void 0, false, {\n                            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            books && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-6 flex flex-col gap-2 overflow-scroll flex-grow min-h-0\",\n                children: books.map((book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BookItem, {\n                        book: book,\n                        isSelected: bookId === book.id,\n                        removeBook: ()=>{\n                            removeBook(book.id);\n                        }\n                    }, book.id, false, {\n                        fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(BookList, \"VaOjJlu1XkMYcT2I8+2MB6Erd04=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        dexie_react_hooks__WEBPACK_IMPORTED_MODULE_4__.useLiveQuery\n    ];\n});\n_c1 = BookList;\nvar _c, _c1;\n$RefreshReg$(_c, \"BookItem\");\n$RefreshReg$(_c1, \"BookList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVQYW5lL0Jvb2tMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNZO0FBRUg7QUFDVTtBQUNwQjtBQUNXO0FBRXZDLFNBQVNNLFNBQVNDLEtBSWpCLEVBQUU7SUFDRCxxQkFDRSw4REFBQ0gsa0RBQUlBO1FBQUNJLE1BQU1ELE1BQU1FLElBQUksQ0FBQ0MsRUFBRTtrQkFDdkIsNEVBQUNDO1lBQUlDLFdBQVcsNkVBQXNKLE9BQXpFTCxNQUFNTSxVQUFVLEdBQUcsbUNBQW1DLGtCQUFrQjs7OEJBQ25LLDhEQUFDRjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNaVixvREFBUUEsQ0FBQ0ssTUFBTUUsSUFBSSxDQUFDSyxJQUFJLEVBQUU7Ozs7OztzQ0FFN0IsOERBQUNIOzRCQUFJQyxXQUFVO3NDQUNaTCxNQUFNRSxJQUFJLENBQUNNLFNBQVM7Ozs7Ozs7Ozs7OztnQkFJdkJSLE1BQU1NLFVBQVUsa0JBQ2hCLDhEQUFDRjtvQkFBSUMsV0FBVTtvQkFBc0xJLFNBQVMsQ0FBQ0MsSUFBTTt3QkFDbk5BLEVBQUVDLGNBQWM7d0JBQ2hCRCxFQUFFRSxlQUFlO3dCQUNqQlosTUFBTWEsVUFBVTtvQkFDbEI7OEJBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2I7S0E3QlNkO0FBZ0NGLFNBQVNlLFdBQVc7O0lBRXpCLE1BQU1DLFNBQVNqQixzREFBU0E7SUFDeEIsTUFBTSxFQUFFa0IsT0FBTSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFL0IsTUFBTUMsUUFBUXRCLCtEQUFZQSxDQUN4QjtZQUFNSDtRQUFBQSxPQUFBQSxDQUFBQSxZQUFBQSw2Q0FBUSxjQUFSQSx1QkFBQUEsS0FBQUEsSUFBQUEsVUFBVTBCLFFBQVEsYUFBYUMsT0FBTyxHQUFHQyxPQUFPLEVBQUU7O0lBRzFELGVBQWVDLFVBQVU7UUFDdkIsTUFBTUMsVUFBaUI7WUFDckIsR0FBRzdCLG1EQUFTO1lBQ1pjLFdBQVcsSUFBSWdCLE9BQU9DLFdBQVc7WUFDakNDLFdBQVcsSUFBSUYsT0FBT0MsV0FBVztRQUNuQztRQUNBLE1BQU10QixLQUFLLE1BQU1WLGlEQUFZLENBQUM4QjtRQUM5QlIsT0FBT2EsSUFBSSxDQUFDLElBQU8sT0FBSHpCO0lBQ2xCO0lBRUEsZUFBZVUsV0FBV0csTUFBYyxFQUFFO1FBQ3hDLElBQUksQ0FBQ0UsT0FBTztRQUNaLE1BQU1XLFlBQVlYLE1BQU1ZLFNBQVMsQ0FBQyxDQUFDNUIsT0FBU0EsS0FBS0MsRUFBRSxLQUFLYTtRQUN4RCxNQUFNZSxXQUFXRixjQUFlWCxNQUFNYyxNQUFNLEdBQUcsSUFDM0NkLEtBQUssQ0FBRVcsWUFBWSxFQUFHLEdBQ3RCWCxLQUFLLENBQUVXLFlBQVksRUFBRztRQUMxQixNQUFNcEMsdURBQWUsQ0FBQ3VCO1FBQ3RCLElBQUllLFVBQVU7WUFDWmhCLE9BQU9hLElBQUksQ0FBQyxJQUFnQixPQUFaRyxTQUFTNUIsRUFBRTtRQUM3QixPQUFPO1lBQ0xZLE9BQU9hLElBQUksQ0FBQztRQUNkLENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDeEI7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUF5SDs7Ozs7O3NDQUV4SSw4REFBQzZCOzRCQUFPN0IsV0FBVTs0QkFBc0VJLFNBQVNhO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztZQUk1R0osdUJBQ0EsOERBQUNkO2dCQUFJQyxXQUFVOzBCQUNaYSxNQUFNaUIsR0FBRyxDQUFDLENBQUNqQyxxQkFDViw4REFBQ0g7d0JBQXVCRyxNQUFNQTt3QkFBTUksWUFBWVUsV0FBV2QsS0FBS0MsRUFBRTt3QkFBRVUsWUFDbEUsSUFBTTs0QkFBRUEsV0FBV1gsS0FBS0MsRUFBRTt3QkFBRTt1QkFEZkQsS0FBS0MsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVFsQyxDQUFDO0dBdkRlVzs7UUFFQ2hCLGtEQUFTQTtRQUdWRiwyREFBWUE7OztNQUxaa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlUGFuZS9Cb29rTGlzdC50c3g/M2U5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9kYlwiXG5pbXBvcnQgeyBlbXB0eUJvb2sgfSBmcm9tIFwiQC9saWIvZGVmYXVsdFwiXG5pbXBvcnQgeyBJQm9vayB9IGZyb20gXCJAL2xpYi90eXBlc1wiXG5pbXBvcnQgeyB0cnVuY2F0ZSB9IGZyb20gXCJAL2xpYi91dGlsc1wiXG5pbXBvcnQgeyB1c2VMaXZlUXVlcnkgfSBmcm9tIFwiZGV4aWUtcmVhY3QtaG9va3NcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZnVuY3Rpb24gQm9va0l0ZW0ocHJvcHM6IHtcbiAgYm9vazogSUJvb2tcbiAgaXNTZWxlY3RlZDogYm9vbGVhblxuICByZW1vdmVCb29rOiAoKSA9PiB2b2lkXG59KSB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17cHJvcHMuYm9vay5pZH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cgZ2FwLTMgaXRlbXMtY2VudGVyIHAtMiBweC00IHJvdW5kZWQteGwgY3Vyc29yLXBvaW50ZXIgZ3JvdXAgJHtwcm9wcy5pc1NlbGVjdGVkID8gJ2JnLXB1cnBsZS00MDAvMTAgdGV4dC13aGl0ZS82MCcgOiAnaG92ZXI6Ymctd2hpdGUvNSd9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LWdyb3cgZ2FwLTAuNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS80MCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICB7dHJ1bmNhdGUocHJvcHMuYm9vay5uYW1lLCAyNCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzMwIHRleHQtWzEwcHhdXCI+XG4gICAgICAgICAgICB7cHJvcHMuYm9vay5jcmVhdGVkQXR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgcHJvcHMuaXNTZWxlY3RlZCAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUvNSB3LTggaC04IHJvdW5kZWQtbGcgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZS8zMCBvcGFjaXR5LTAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtc20gZ3JvdXAtaG92ZXI6ZmxleCBob3ZlcjpiZy1yZWQtNDAwLzEwIGhvdmVyOmJnLXJlZC00MDAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDBcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBwcm9wcy5yZW1vdmVCb29rKClcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHhcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEJvb2tMaXN0KCkge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgYm9va0lkIH0gPSByb3V0ZXIucXVlcnkgYXMgeyBib29rSWQ6IHN0cmluZyB9XG5cbiAgY29uc3QgYm9va3MgPSB1c2VMaXZlUXVlcnkoXG4gICAgKCkgPT4gZGIuYm9va3M/Lm9yZGVyQnkoJ2NyZWF0ZWRBdCcpLnJldmVyc2UoKS50b0FycmF5KClcbiAgKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZEJvb2soKSB7XG4gICAgY29uc3QgbmV3Qm9vazogSUJvb2sgPSB7XG4gICAgICAuLi5lbXB0eUJvb2ssXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIH1cbiAgICBjb25zdCBpZCA9IGF3YWl0IGRiLmJvb2tzLmFkZChuZXdCb29rKVxuICAgIHJvdXRlci5wdXNoKGAvJHtpZH1gKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlQm9vayhib29rSWQ6IHN0cmluZykge1xuICAgIGlmICghYm9va3MpIHJldHVyblxuICAgIGNvbnN0IGN1cnJJbmRleCA9IGJvb2tzLmZpbmRJbmRleCgoYm9vaykgPT4gYm9vay5pZCA9PT0gYm9va0lkKVxuICAgIGNvbnN0IG5leHRCb29rID0gY3VyckluZGV4ID09PSAoYm9va3MubGVuZ3RoIC0gMSlcbiAgICAgID8gYm9va3NbKGN1cnJJbmRleCAtIDEpXVxuICAgICAgOiBib29rc1soY3VyckluZGV4ICsgMSldXG4gICAgYXdhaXQgZGIuYm9va3MuZGVsZXRlKGJvb2tJZClcbiAgICBpZiAobmV4dEJvb2spIHtcbiAgICAgIHJvdXRlci5wdXNoKGAvJHtuZXh0Qm9vay5pZH1gKVxuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGdhcC00IGZsZXgtZ3JvdyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaG92ZXI6YmctYmxhY2svMTAganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBib3JkZXItd2hpdGUvWzMlXSBiZy13aGl0ZS9bMyVdIHctOSBoLTkgcm91bmRlZC1sZyB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlLzMwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQteHNcIj4rXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZS80MCB0ZXh0LWxlZnQgaG92ZXI6dGV4dC13aGl0ZS82MCB0ZXh0LXhzIHAtNCByb3VuZGVkLWxnXCIgb25DbGljaz17YWRkQm9va30+TmV3IEJvb2s8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgYm9va3MgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IGZsZXggZmxleC1jb2wgZ2FwLTIgb3ZlcmZsb3ctc2Nyb2xsIGZsZXgtZ3JvdyBtaW4taC0wXCI+XG4gICAgICAgICAge2Jvb2tzLm1hcCgoYm9vaykgPT5cbiAgICAgICAgICAgIDxCb29rSXRlbSBrZXk9e2Jvb2suaWR9IGJvb2s9e2Jvb2t9IGlzU2VsZWN0ZWQ9e2Jvb2tJZCA9PT0gYm9vay5pZH0gcmVtb3ZlQm9vaz17XG4gICAgICAgICAgICAgICgpID0+IHsgcmVtb3ZlQm9vayhib29rLmlkKSB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJkYiIsImVtcHR5Qm9vayIsInRydW5jYXRlIiwidXNlTGl2ZVF1ZXJ5IiwiTGluayIsInVzZVJvdXRlciIsIkJvb2tJdGVtIiwicHJvcHMiLCJocmVmIiwiYm9vayIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaXNTZWxlY3RlZCIsIm5hbWUiLCJjcmVhdGVkQXQiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicmVtb3ZlQm9vayIsIkJvb2tMaXN0Iiwicm91dGVyIiwiYm9va0lkIiwicXVlcnkiLCJib29rcyIsIm9yZGVyQnkiLCJyZXZlcnNlIiwidG9BcnJheSIsImFkZEJvb2siLCJuZXdCb29rIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwidXBkYXRlZEF0IiwiYWRkIiwicHVzaCIsImN1cnJJbmRleCIsImZpbmRJbmRleCIsIm5leHRCb29rIiwibGVuZ3RoIiwiZGVsZXRlIiwiYnV0dG9uIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SidePane/BookList.tsx\n"));

/***/ })

});