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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BookList\": function() { return /* binding */ BookList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"./lib/db.ts\");\n/* harmony import */ var _lib_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/default */ \"./lib/default.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"./lib/utils.ts\");\n/* harmony import */ var dexie_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dexie-react-hooks */ \"./node_modules/.pnpm/dexie-react-hooks@1.1.3_@types+react@18.0.33_dexie@3.2.3_react@18.2.0/node_modules/dexie-react-hooks/dist/dexie-react-hooks.js\");\n/* harmony import */ var dexie_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dexie_react_hooks__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/next@13.3.0_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/.pnpm/next@13.3.0_react-dom@18.2.0_react@18.2.0/node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction BookItem(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n        href: props.book.id,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row gap-3 items-center p-2 px-4 rounded-xl cursor-pointer group \".concat(props.isSelected ? \"bg-purple-400/10 text-white/60\" : \"hover:bg-white/5\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col flex-grow gap-0.5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-white/40 text-sm\",\n                            children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.truncate)(props.book.name, 24)\n                        }, void 0, false, {\n                            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-white/30 text-[10px]\",\n                            children: props.book.createdAt\n                        }, void 0, false, {\n                            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                props.isSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white/5 w-8 h-8 rounded-lg text-center text-white/30 opacity-0 justify-center items-center text-sm group-hover:flex hover:bg-red-400/10 hover:bg-red-400 group-hover:opacity-100\",\n                    onClick: (e)=>{\n                        e.preventDefault();\n                        e.stopPropagation();\n                        props.removeBook();\n                    },\n                    children: \"x\"\n                }, void 0, false, {\n                    fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = BookItem;\nfunction BookList() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { bookId  } = router.query;\n    const books = (0,dexie_react_hooks__WEBPACK_IMPORTED_MODULE_4__.useLiveQuery)(()=>{\n        var _db_books;\n        return (_db_books = _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.books) === null || _db_books === void 0 ? void 0 : _db_books.orderBy(\"createdAt\").reverse().toArray();\n    });\n    async function addBook() {\n        const newBook = {\n            ..._lib_default__WEBPACK_IMPORTED_MODULE_2__.emptyBook,\n            createdAt: new Date().toISOString(),\n            updatedAt: new Date().toISOString()\n        };\n        const id = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.books.add(newBook);\n        router.push(\"/\".concat(id));\n    }\n    async function removeBook(bookId) {\n        if (!books) return;\n        const currIndex = books.findIndex((book)=>book.id === bookId);\n        const nextBook = currIndex === books.length - 1 ? books[currIndex - 1] : books[currIndex + 1];\n        await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.books[\"delete\"](bookId);\n        if (nextBook) {\n            router.push(\"/\".concat(nextBook.id));\n        } else {\n            router.push(\"/\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex flex-col gap-4 flex-grow overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-full bg-black/10 text-white/40 hover:bg-purple-400/20 hover:text-white/60 text-xs p-4 rounded-lg\",\n                    onClick: addBook,\n                    children: \"New Book\"\n                }, void 0, false, {\n                    fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            books && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-6 flex flex-col gap-2 overflow-scroll flex-grow min-h-0\",\n                children: books.map((book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BookItem, {\n                        book: book,\n                        isSelected: bookId === book.id,\n                        removeBook: ()=>{\n                            removeBook(book.id);\n                        }\n                    }, book.id, false, {\n                        fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(BookList, \"VaOjJlu1XkMYcT2I8+2MB6Erd04=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        dexie_react_hooks__WEBPACK_IMPORTED_MODULE_4__.useLiveQuery\n    ];\n});\n_c1 = BookList;\nvar _c, _c1;\n$RefreshReg$(_c, \"BookItem\");\n$RefreshReg$(_c1, \"BookList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVQYW5lL0Jvb2tMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNZO0FBRUg7QUFDVTtBQUNwQjtBQUNXO0FBRXZDLFNBQVNNLFNBQVNDLEtBSWpCLEVBQUU7SUFDRCxxQkFDRSw4REFBQ0gsa0RBQUlBO1FBQUNJLE1BQU1ELE1BQU1FLElBQUksQ0FBQ0MsRUFBRTtrQkFDdkIsNEVBQUNDO1lBQUlDLFdBQVcsNkVBQXNKLE9BQXpFTCxNQUFNTSxVQUFVLEdBQUcsbUNBQW1DLGtCQUFrQjs7OEJBQ25LLDhEQUFDRjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNaVixvREFBUUEsQ0FBQ0ssTUFBTUUsSUFBSSxDQUFDSyxJQUFJLEVBQUU7Ozs7OztzQ0FFN0IsOERBQUNIOzRCQUFJQyxXQUFVO3NDQUNaTCxNQUFNRSxJQUFJLENBQUNNLFNBQVM7Ozs7Ozs7Ozs7OztnQkFJdkJSLE1BQU1NLFVBQVUsa0JBQ2hCLDhEQUFDRjtvQkFBSUMsV0FBVTtvQkFBc0xJLFNBQVMsQ0FBQ0MsSUFBTTt3QkFDbk5BLEVBQUVDLGNBQWM7d0JBQ2hCRCxFQUFFRSxlQUFlO3dCQUNqQlosTUFBTWEsVUFBVTtvQkFDbEI7OEJBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2I7S0E3QlNkO0FBZ0NGLFNBQVNlLFdBQVc7O0lBRXpCLE1BQU1DLFNBQVNqQixzREFBU0E7SUFDeEIsTUFBTSxFQUFFa0IsT0FBTSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFL0IsTUFBTUMsUUFBUXRCLCtEQUFZQSxDQUN4QjtZQUFNSDtRQUFBQSxPQUFBQSxDQUFBQSxZQUFBQSw2Q0FBUSxjQUFSQSx1QkFBQUEsS0FBQUEsSUFBQUEsVUFBVTBCLFFBQVEsYUFBYUMsT0FBTyxHQUFHQyxPQUFPLEVBQUU7O0lBRzFELGVBQWVDLFVBQVU7UUFDdkIsTUFBTUMsVUFBaUI7WUFDckIsR0FBRzdCLG1EQUFTO1lBQ1pjLFdBQVcsSUFBSWdCLE9BQU9DLFdBQVc7WUFDakNDLFdBQVcsSUFBSUYsT0FBT0MsV0FBVztRQUNuQztRQUNBLE1BQU10QixLQUFLLE1BQU1WLGlEQUFZLENBQUM4QjtRQUM5QlIsT0FBT2EsSUFBSSxDQUFDLElBQU8sT0FBSHpCO0lBQ2xCO0lBRUEsZUFBZVUsV0FBV0csTUFBYyxFQUFFO1FBQ3hDLElBQUksQ0FBQ0UsT0FBTztRQUNaLE1BQU1XLFlBQVlYLE1BQU1ZLFNBQVMsQ0FBQyxDQUFDNUIsT0FBU0EsS0FBS0MsRUFBRSxLQUFLYTtRQUN4RCxNQUFNZSxXQUFXRixjQUFlWCxNQUFNYyxNQUFNLEdBQUcsSUFDM0NkLEtBQUssQ0FBRVcsWUFBWSxFQUFHLEdBQ3RCWCxLQUFLLENBQUVXLFlBQVksRUFBRztRQUMxQixNQUFNcEMsdURBQWUsQ0FBQ3VCO1FBQ3RCLElBQUllLFVBQVU7WUFDWmhCLE9BQU9hLElBQUksQ0FBQyxJQUFnQixPQUFaRyxTQUFTNUIsRUFBRTtRQUM3QixPQUFPO1lBQ0xZLE9BQU9hLElBQUksQ0FBQztRQUNkLENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDeEI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDNkI7b0JBQU83QixXQUFVO29CQUFxR0ksU0FBU2E7OEJBQVM7Ozs7Ozs7Ozs7O1lBR3pJSix1QkFDQSw4REFBQ2Q7Z0JBQUlDLFdBQVU7MEJBQ1phLE1BQU1pQixHQUFHLENBQUMsQ0FBQ2pDLHFCQUNWLDhEQUFDSDt3QkFBdUJHLE1BQU1BO3dCQUFNSSxZQUFZVSxXQUFXZCxLQUFLQyxFQUFFO3dCQUFFVSxZQUNsRSxJQUFNOzRCQUFFQSxXQUFXWCxLQUFLQyxFQUFFO3dCQUFFO3VCQURmRCxLQUFLQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBUWxDLENBQUM7R0FsRGVXOztRQUVDaEIsa0RBQVNBO1FBR1ZGLDJEQUFZQTs7O01BTFprQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGVQYW5lL0Jvb2tMaXN0LnRzeD8zZTljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSBcIkAvbGliL2RiXCJcbmltcG9ydCB7IGVtcHR5Qm9vayB9IGZyb20gXCJAL2xpYi9kZWZhdWx0XCJcbmltcG9ydCB7IElCb29rIH0gZnJvbSBcIkAvbGliL3R5cGVzXCJcbmltcG9ydCB7IHRydW5jYXRlIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcbmltcG9ydCB7IHVzZUxpdmVRdWVyeSB9IGZyb20gXCJkZXhpZS1yZWFjdC1ob29rc1wiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5mdW5jdGlvbiBCb29rSXRlbShwcm9wczoge1xuICBib29rOiBJQm9va1xuICBpc1NlbGVjdGVkOiBib29sZWFuXG4gIHJlbW92ZUJvb2s6ICgpID0+IHZvaWRcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPXtwcm9wcy5ib29rLmlkfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LXJvdyBnYXAtMyBpdGVtcy1jZW50ZXIgcC0yIHB4LTQgcm91bmRlZC14bCBjdXJzb3ItcG9pbnRlciBncm91cCAke3Byb3BzLmlzU2VsZWN0ZWQgPyAnYmctcHVycGxlLTQwMC8xMCB0ZXh0LXdoaXRlLzYwJyA6ICdob3ZlcjpiZy13aGl0ZS81J31gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZsZXgtZ3JvdyBnYXAtMC41XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzQwIHRleHQtc21cIj5cbiAgICAgICAgICAgIHt0cnVuY2F0ZShwcm9wcy5ib29rLm5hbWUsIDI0KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUvMzAgdGV4dC1bMTBweF1cIj5cbiAgICAgICAgICAgIHtwcm9wcy5ib29rLmNyZWF0ZWRBdH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wcy5pc1NlbGVjdGVkICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZS81IHctOCBoLTggcm91bmRlZC1sZyB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlLzMwIG9wYWNpdHktMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1zbSBncm91cC1ob3ZlcjpmbGV4IGhvdmVyOmJnLXJlZC00MDAvMTAgaG92ZXI6YmctcmVkLTQwMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIHByb3BzLnJlbW92ZUJvb2soKVxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgeFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gQm9va0xpc3QoKSB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBib29rSWQgfSA9IHJvdXRlci5xdWVyeSBhcyB7IGJvb2tJZDogc3RyaW5nIH1cblxuICBjb25zdCBib29rcyA9IHVzZUxpdmVRdWVyeShcbiAgICAoKSA9PiBkYi5ib29rcz8ub3JkZXJCeSgnY3JlYXRlZEF0JykucmV2ZXJzZSgpLnRvQXJyYXkoKVxuICApXG5cbiAgYXN5bmMgZnVuY3Rpb24gYWRkQm9vaygpIHtcbiAgICBjb25zdCBuZXdCb29rOiBJQm9vayA9IHtcbiAgICAgIC4uLmVtcHR5Qm9vayxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgfVxuICAgIGNvbnN0IGlkID0gYXdhaXQgZGIuYm9va3MuYWRkKG5ld0Jvb2spXG4gICAgcm91dGVyLnB1c2goYC8ke2lkfWApXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiByZW1vdmVCb29rKGJvb2tJZDogc3RyaW5nKSB7XG4gICAgaWYgKCFib29rcykgcmV0dXJuXG4gICAgY29uc3QgY3VyckluZGV4ID0gYm9va3MuZmluZEluZGV4KChib29rKSA9PiBib29rLmlkID09PSBib29rSWQpXG4gICAgY29uc3QgbmV4dEJvb2sgPSBjdXJySW5kZXggPT09IChib29rcy5sZW5ndGggLSAxKVxuICAgICAgPyBib29rc1soY3VyckluZGV4IC0gMSldXG4gICAgICA6IGJvb2tzWyhjdXJySW5kZXggKyAxKV1cbiAgICBhd2FpdCBkYi5ib29rcy5kZWxldGUoYm9va0lkKVxuICAgIGlmIChuZXh0Qm9vaykge1xuICAgICAgcm91dGVyLnB1c2goYC8ke25leHRCb29rLmlkfWApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGZsZXggZmxleC1jb2wgZ2FwLTQgZmxleC1ncm93IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzEwIHRleHQtd2hpdGUvNDAgaG92ZXI6YmctcHVycGxlLTQwMC8yMCBob3Zlcjp0ZXh0LXdoaXRlLzYwIHRleHQteHMgcC00IHJvdW5kZWQtbGdcIiBvbkNsaWNrPXthZGRCb29rfT5OZXcgQm9vazwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7XG4gICAgICAgIGJvb2tzICYmXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBmbGV4IGZsZXgtY29sIGdhcC0yIG92ZXJmbG93LXNjcm9sbCBmbGV4LWdyb3cgbWluLWgtMFwiPlxuICAgICAgICAgIHtib29rcy5tYXAoKGJvb2spID0+XG4gICAgICAgICAgICA8Qm9va0l0ZW0ga2V5PXtib29rLmlkfSBib29rPXtib29rfSBpc1NlbGVjdGVkPXtib29rSWQgPT09IGJvb2suaWR9IHJlbW92ZUJvb2s9e1xuICAgICAgICAgICAgICAoKSA9PiB7IHJlbW92ZUJvb2soYm9vay5pZCkgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiZGIiLCJlbXB0eUJvb2siLCJ0cnVuY2F0ZSIsInVzZUxpdmVRdWVyeSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJCb29rSXRlbSIsInByb3BzIiwiaHJlZiIsImJvb2siLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImlzU2VsZWN0ZWQiLCJuYW1lIiwiY3JlYXRlZEF0Iiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZUJvb2siLCJCb29rTGlzdCIsInJvdXRlciIsImJvb2tJZCIsInF1ZXJ5IiwiYm9va3MiLCJvcmRlckJ5IiwicmV2ZXJzZSIsInRvQXJyYXkiLCJhZGRCb29rIiwibmV3Qm9vayIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInVwZGF0ZWRBdCIsImFkZCIsInB1c2giLCJjdXJySW5kZXgiLCJmaW5kSW5kZXgiLCJuZXh0Qm9vayIsImxlbmd0aCIsImRlbGV0ZSIsImJ1dHRvbiIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SidePane/BookList.tsx\n"));

/***/ })

});