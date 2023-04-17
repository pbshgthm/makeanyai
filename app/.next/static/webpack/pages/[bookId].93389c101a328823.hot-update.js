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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BookList\": function() { return /* binding */ BookList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"./lib/db.ts\");\n/* harmony import */ var _lib_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/default */ \"./lib/default.ts\");\n/* harmony import */ var dexie_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dexie-react-hooks */ \"./node_modules/.pnpm/dexie-react-hooks@1.1.3_@types+react@18.0.33_dexie@3.2.3_react@18.2.0/node_modules/dexie-react-hooks/dist/dexie-react-hooks.js\");\n/* harmony import */ var dexie_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dexie_react_hooks__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/next@13.3.0_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/.pnpm/next@13.3.0_react-dom@18.2.0_react@18.2.0/node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction BookItem(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: props.book.id,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row gap-3 justify-between items-center p-2 px-2 rounded-lg cursor-pointer \".concat(props.isSelected ? \"bg-purple-400/10 text-white/60 group\" : \"hover:bg-white/5\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col flex-shrink gap-1 truncate h-9\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-white/40 text-xs flex flex-shrink truncate\",\n                            children: props.book.name\n                        }, void 0, false, {\n                            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-white/30 text-xs flex flex-shrink font-light truncate\",\n                            children: props.book.createdAt\n                        }, void 0, false, {\n                            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                props.isSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" bg-white/5 min-w-9 w-9 h-9 rounded-lg text-center text-white/30 opacity-0 justify-center items-center text-sm hidden group-hover:flex hover:bg-red-400/10 hover:bg-red-400 group-hover:opacity-100\",\n                    onClick: (e)=>{\n                        e.preventDefault();\n                        e.stopPropagation();\n                        props.removeBook();\n                    },\n                    children: \"x\"\n                }, void 0, false, {\n                    fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = BookItem;\nfunction BookList() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const { bookId  } = router.query;\n    const books = (0,dexie_react_hooks__WEBPACK_IMPORTED_MODULE_3__.useLiveQuery)(()=>{\n        var _db_books;\n        return (_db_books = _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.books) === null || _db_books === void 0 ? void 0 : _db_books.orderBy(\"createdAt\").reverse().toArray();\n    });\n    async function addBook() {\n        const newBook = {\n            ..._lib_default__WEBPACK_IMPORTED_MODULE_2__.emptyBook,\n            createdAt: new Date().toISOString(),\n            updatedAt: new Date().toISOString()\n        };\n        const id = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.books.add(newBook);\n        router.push(\"/\".concat(id));\n    }\n    async function removeBook(bookId) {\n        if (!books) return;\n        const currIndex = books.findIndex((book)=>book.id === bookId);\n        const nextBook = currIndex === books.length - 1 ? books[currIndex - 1] : books[currIndex + 1];\n        await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.books[\"delete\"](bookId);\n        if (nextBook) {\n            router.push(\"/\".concat(nextBook.id));\n        } else {\n            router.push(\"/\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex flex-col gap-2 flex-grow overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-4 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row hover:bg-black/10 justify-start items-center px-2 py-2 rounded-lg gap-2 border border-white/5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" border-white/5 bg-white/5 w-9 h-9 rounded-lg text-center text-white/30 flex justify-center items-center text-xs\",\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \" text-white/40 text-left hover:text-white/60 text-xs rounded-lg\",\n                            onClick: addBook,\n                            children: \"Create a new Book\"\n                        }, void 0, false, {\n                            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            books && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-4 flex flex-col gap-2 overflow-scroll flex-grow min-h-0\",\n                children: books.map((book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BookItem, {\n                        book: book,\n                        isSelected: bookId === book.id,\n                        removeBook: ()=>{\n                            removeBook(book.id);\n                        }\n                    }, book.id, false, {\n                        fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(BookList, \"VaOjJlu1XkMYcT2I8+2MB6Erd04=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        dexie_react_hooks__WEBPACK_IMPORTED_MODULE_3__.useLiveQuery\n    ];\n});\n_c1 = BookList;\nvar _c, _c1;\n$RefreshReg$(_c, \"BookItem\");\n$RefreshReg$(_c1, \"BookList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVQYW5lL0Jvb2tMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1k7QUFHTztBQUNwQjtBQUNXO0FBRXZDLFNBQVNLLFNBQVNDLEtBSWpCLEVBQUU7SUFDRCxxQkFDRSw4REFBQ0gsa0RBQUlBO1FBQUNJLE1BQU1ELE1BQU1FLElBQUksQ0FBQ0MsRUFBRTtrQkFDdkIsNEVBQUNDO1lBQUlDLFdBQVcsdUZBQXNLLE9BQS9FTCxNQUFNTSxVQUFVLEdBQUcseUNBQXlDLGtCQUFrQjs7OEJBQ25MLDhEQUFDRjtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNaTCxNQUFNRSxJQUFJLENBQUNLLElBQUk7Ozs7OztzQ0FFbEIsOERBQUNIOzRCQUFJQyxXQUFVO3NDQUNaTCxNQUFNRSxJQUFJLENBQUNNLFNBQVM7Ozs7Ozs7Ozs7OztnQkFJekJSLE1BQU1NLFVBQVUsa0JBQ2hCLDhEQUFDRjtvQkFBSUMsV0FBVTtvQkFBc01JLFNBQVMsQ0FBQ0MsSUFBTTt3QkFDbk9BLEVBQUVDLGNBQWM7d0JBQ2hCRCxFQUFFRSxlQUFlO3dCQUNqQlosTUFBTWEsVUFBVTtvQkFDbEI7OEJBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2I7S0E3QlNkO0FBZ0NGLFNBQVNlLFdBQVc7O0lBRXpCLE1BQU1DLFNBQVNqQixzREFBU0E7SUFDeEIsTUFBTSxFQUFFa0IsT0FBTSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFL0IsTUFBTUMsUUFBUXRCLCtEQUFZQSxDQUN4QjtZQUFNRjtRQUFBQSxPQUFBQSxDQUFBQSxZQUFBQSw2Q0FBUSxjQUFSQSx1QkFBQUEsS0FBQUEsSUFBQUEsVUFBVXlCLFFBQVEsYUFBYUMsT0FBTyxHQUFHQyxPQUFPLEVBQUU7O0lBRzFELGVBQWVDLFVBQVU7UUFDdkIsTUFBTUMsVUFBaUI7WUFDckIsR0FBRzVCLG1EQUFTO1lBQ1phLFdBQVcsSUFBSWdCLE9BQU9DLFdBQVc7WUFDakNDLFdBQVcsSUFBSUYsT0FBT0MsV0FBVztRQUNuQztRQUNBLE1BQU10QixLQUFLLE1BQU1ULGlEQUFZLENBQUM2QjtRQUM5QlIsT0FBT2EsSUFBSSxDQUFDLElBQU8sT0FBSHpCO0lBQ2xCO0lBRUEsZUFBZVUsV0FBV0csTUFBYyxFQUFFO1FBQ3hDLElBQUksQ0FBQ0UsT0FBTztRQUNaLE1BQU1XLFlBQVlYLE1BQU1ZLFNBQVMsQ0FBQyxDQUFDNUIsT0FBU0EsS0FBS0MsRUFBRSxLQUFLYTtRQUN4RCxNQUFNZSxXQUFXRixjQUFlWCxNQUFNYyxNQUFNLEdBQUcsSUFDM0NkLEtBQUssQ0FBRVcsWUFBWSxFQUFHLEdBQ3RCWCxLQUFLLENBQUVXLFlBQVksRUFBRztRQUMxQixNQUFNbkMsdURBQWUsQ0FBQ3NCO1FBQ3RCLElBQUllLFVBQVU7WUFDWmhCLE9BQU9hLElBQUksQ0FBQyxJQUFnQixPQUFaRyxTQUFTNUIsRUFBRTtRQUM3QixPQUFPO1lBQ0xZLE9BQU9hLElBQUksQ0FBQztRQUNkLENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDeEI7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUFtSDs7Ozs7O3NDQUVsSSw4REFBQzZCOzRCQUFPN0IsV0FBVTs0QkFBa0VJLFNBQVNhO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztZQUl4R0osdUJBQ0EsOERBQUNkO2dCQUFJQyxXQUFVOzBCQUNaYSxNQUFNaUIsR0FBRyxDQUFDLENBQUNqQyxxQkFDViw4REFBQ0g7d0JBQXVCRyxNQUFNQTt3QkFBTUksWUFBWVUsV0FBV2QsS0FBS0MsRUFBRTt3QkFBRVUsWUFDbEUsSUFBTTs0QkFBRUEsV0FBV1gsS0FBS0MsRUFBRTt3QkFBRTt1QkFEZkQsS0FBS0MsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVFsQyxDQUFDO0dBdkRlVzs7UUFFQ2hCLGtEQUFTQTtRQUdWRiwyREFBWUE7OztNQUxaa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlUGFuZS9Cb29rTGlzdC50c3g/M2U5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9kYlwiXG5pbXBvcnQgeyBlbXB0eUJvb2sgfSBmcm9tIFwiQC9saWIvZGVmYXVsdFwiXG5pbXBvcnQgeyBJQm9vayB9IGZyb20gXCJAL2xpYi90eXBlc1wiXG5pbXBvcnQgeyB0cnVuY2F0ZSB9IGZyb20gXCJAL2xpYi91dGlsc1wiXG5pbXBvcnQgeyB1c2VMaXZlUXVlcnkgfSBmcm9tIFwiZGV4aWUtcmVhY3QtaG9va3NcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZnVuY3Rpb24gQm9va0l0ZW0ocHJvcHM6IHtcbiAgYm9vazogSUJvb2tcbiAgaXNTZWxlY3RlZDogYm9vbGVhblxuICByZW1vdmVCb29rOiAoKSA9PiB2b2lkXG59KSB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17cHJvcHMuYm9vay5pZH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cgZ2FwLTMganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTIgcHgtMiByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyICR7cHJvcHMuaXNTZWxlY3RlZCA/ICdiZy1wdXJwbGUtNDAwLzEwIHRleHQtd2hpdGUvNjAgZ3JvdXAnIDogJ2hvdmVyOmJnLXdoaXRlLzUnfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC1zaHJpbmsgZ2FwLTEgdHJ1bmNhdGUgaC05XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUvNDAgdGV4dC14cyBmbGV4IGZsZXgtc2hyaW5rIHRydW5jYXRlXCI+XG4gICAgICAgICAgICAgIHtwcm9wcy5ib29rLm5hbWV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS8zMCB0ZXh0LXhzIGZsZXggZmxleC1zaHJpbmsgZm9udC1saWdodCB0cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICB7cHJvcHMuYm9vay5jcmVhdGVkQXR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wcy5pc1NlbGVjdGVkICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYmctd2hpdGUvNSBtaW4tdy05IHctOSBoLTkgcm91bmRlZC1sZyB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlLzMwIG9wYWNpdHktMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1zbSBoaWRkZW4gZ3JvdXAtaG92ZXI6ZmxleCBob3ZlcjpiZy1yZWQtNDAwLzEwIGhvdmVyOmJnLXJlZC00MDAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDBcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBwcm9wcy5yZW1vdmVCb29rKClcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgICB4IFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gQm9va0xpc3QoKSB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBib29rSWQgfSA9IHJvdXRlci5xdWVyeSBhcyB7IGJvb2tJZDogc3RyaW5nIH1cblxuICBjb25zdCBib29rcyA9IHVzZUxpdmVRdWVyeShcbiAgICAoKSA9PiBkYi5ib29rcz8ub3JkZXJCeSgnY3JlYXRlZEF0JykucmV2ZXJzZSgpLnRvQXJyYXkoKVxuICApXG5cbiAgYXN5bmMgZnVuY3Rpb24gYWRkQm9vaygpIHtcbiAgICBjb25zdCBuZXdCb29rOiBJQm9vayA9IHtcbiAgICAgIC4uLmVtcHR5Qm9vayxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgfVxuICAgIGNvbnN0IGlkID0gYXdhaXQgZGIuYm9va3MuYWRkKG5ld0Jvb2spXG4gICAgcm91dGVyLnB1c2goYC8ke2lkfWApXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiByZW1vdmVCb29rKGJvb2tJZDogc3RyaW5nKSB7XG4gICAgaWYgKCFib29rcykgcmV0dXJuXG4gICAgY29uc3QgY3VyckluZGV4ID0gYm9va3MuZmluZEluZGV4KChib29rKSA9PiBib29rLmlkID09PSBib29rSWQpXG4gICAgY29uc3QgbmV4dEJvb2sgPSBjdXJySW5kZXggPT09IChib29rcy5sZW5ndGggLSAxKVxuICAgICAgPyBib29rc1soY3VyckluZGV4IC0gMSldXG4gICAgICA6IGJvb2tzWyhjdXJySW5kZXggKyAxKV1cbiAgICBhd2FpdCBkYi5ib29rcy5kZWxldGUoYm9va0lkKVxuICAgIGlmIChuZXh0Qm9vaykge1xuICAgICAgcm91dGVyLnB1c2goYC8ke25leHRCb29rLmlkfWApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGZsZXggZmxleC1jb2wgZ2FwLTIgZmxleC1ncm93IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBob3ZlcjpiZy1ibGFjay8xMCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBweC0yIHB5LTIgcm91bmRlZC1sZyBnYXAtMiBib3JkZXIgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBib3JkZXItd2hpdGUvNSBiZy13aGl0ZS81IHctOSBoLTkgcm91bmRlZC1sZyB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlLzMwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQteHNcIj4rXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZS80MCB0ZXh0LWxlZnQgaG92ZXI6dGV4dC13aGl0ZS82MCB0ZXh0LXhzIHJvdW5kZWQtbGdcIiBvbkNsaWNrPXthZGRCb29rfT5DcmVhdGUgYSBuZXcgQm9vazwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge1xuICAgICAgICBib29rcyAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgZmxleCBmbGV4LWNvbCBnYXAtMiBvdmVyZmxvdy1zY3JvbGwgZmxleC1ncm93IG1pbi1oLTBcIj5cbiAgICAgICAgICB7Ym9va3MubWFwKChib29rKSA9PlxuICAgICAgICAgICAgPEJvb2tJdGVtIGtleT17Ym9vay5pZH0gYm9vaz17Ym9va30gaXNTZWxlY3RlZD17Ym9va0lkID09PSBib29rLmlkfSByZW1vdmVCb29rPXtcbiAgICAgICAgICAgICAgKCkgPT4geyByZW1vdmVCb29rKGJvb2suaWQpIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbImRiIiwiZW1wdHlCb29rIiwidXNlTGl2ZVF1ZXJ5IiwiTGluayIsInVzZVJvdXRlciIsIkJvb2tJdGVtIiwicHJvcHMiLCJocmVmIiwiYm9vayIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaXNTZWxlY3RlZCIsIm5hbWUiLCJjcmVhdGVkQXQiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicmVtb3ZlQm9vayIsIkJvb2tMaXN0Iiwicm91dGVyIiwiYm9va0lkIiwicXVlcnkiLCJib29rcyIsIm9yZGVyQnkiLCJyZXZlcnNlIiwidG9BcnJheSIsImFkZEJvb2siLCJuZXdCb29rIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwidXBkYXRlZEF0IiwiYWRkIiwicHVzaCIsImN1cnJJbmRleCIsImZpbmRJbmRleCIsIm5leHRCb29rIiwibGVuZ3RoIiwiZGVsZXRlIiwiYnV0dG9uIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SidePane/BookList.tsx\n"));

/***/ })

});