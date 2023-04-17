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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BookList\": function() { return /* binding */ BookList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"./lib/db.ts\");\n/* harmony import */ var _lib_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/default */ \"./lib/default.ts\");\n/* harmony import */ var dexie_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dexie-react-hooks */ \"./node_modules/.pnpm/dexie-react-hooks@1.1.3_@types+react@18.0.33_dexie@3.2.3_react@18.2.0/node_modules/dexie-react-hooks/dist/dexie-react-hooks.js\");\n/* harmony import */ var dexie_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dexie_react_hooks__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/next@13.3.0_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/.pnpm/next@13.3.0_react-dom@18.2.0_react@18.2.0/node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction BookItem(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: props.book.id,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row gap-3 justify-between items-center p-2 px-2 rounded-lg cursor-pointer \".concat(props.isSelected ? \"bg-purple-400/10 text-white/60 group\" : \"hover:bg-white/5\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col flex-shrink gap-1 truncate w-full h-9\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-white/40 text-xs flex flex-shrink w-full truncate\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"truncate\",\n                                children: [\n                                    \" \",\n                                    props.book.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 14\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-white/30 text-xs flex flex-shrink font-light truncate\",\n                            children: props.book.createdAt\n                        }, void 0, false, {\n                            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                props.isSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" bg-white/5 min-w-9 w-9 h-9 rounded-lg text-center text-white/30 opacity-0 justify-center items-center text-sm hidden group-hover:flex hover:bg-red-400/10 hover:bg-red-400 group-hover:opacity-100\",\n                    onClick: (e)=>{\n                        e.preventDefault();\n                        e.stopPropagation();\n                        props.removeBook();\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-9\",\n                        children: \" x \"\n                    }, void 0, false, {\n                        fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = BookItem;\nfunction BookList() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const { bookId  } = router.query;\n    const books = (0,dexie_react_hooks__WEBPACK_IMPORTED_MODULE_3__.useLiveQuery)(()=>{\n        var _db_books;\n        return (_db_books = _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.books) === null || _db_books === void 0 ? void 0 : _db_books.orderBy(\"createdAt\").reverse().toArray();\n    });\n    async function addBook() {\n        const newBook = {\n            ..._lib_default__WEBPACK_IMPORTED_MODULE_2__.emptyBook,\n            createdAt: new Date().toISOString(),\n            updatedAt: new Date().toISOString()\n        };\n        const id = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.books.add(newBook);\n        router.push(\"/\".concat(id));\n    }\n    async function removeBook(bookId) {\n        if (!books) return;\n        const currIndex = books.findIndex((book)=>book.id === bookId);\n        const nextBook = currIndex === books.length - 1 ? books[currIndex - 1] : books[currIndex + 1];\n        await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.books[\"delete\"](bookId);\n        if (nextBook) {\n            router.push(\"/\".concat(nextBook.id));\n        } else {\n            router.push(\"/\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex flex-col gap-2 flex-grow overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-4 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row hover:bg-black/10 justify-start items-center px-2 py-2 rounded-lg gap-2 border border-white/5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" rounded-lg text-center text-white/30 flex justify-center items-center text-xs\",\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \" text-white/40 text-left hover:text-white/60 text-xs rounded-lg\",\n                            onClick: addBook,\n                            children: \"Create a new Book\"\n                        }, void 0, false, {\n                            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            books && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-4 flex flex-col gap-2 overflow-scroll flex-grow min-h-0\",\n                children: books.map((book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BookItem, {\n                        book: book,\n                        isSelected: bookId === book.id,\n                        removeBook: ()=>{\n                            removeBook(book.id);\n                        }\n                    }, book.id, false, {\n                        fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/SidePane/BookList.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(BookList, \"VaOjJlu1XkMYcT2I8+2MB6Erd04=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        dexie_react_hooks__WEBPACK_IMPORTED_MODULE_3__.useLiveQuery\n    ];\n});\n_c1 = BookList;\nvar _c, _c1;\n$RefreshReg$(_c, \"BookItem\");\n$RefreshReg$(_c1, \"BookList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztBQVFsQyxDQUFDO0dBdkRlVzs7UUFFQ2hCLGtEQUFTQTtRQUdWRiwyREFBWUE7OztNQUxaa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlUGFuZS9Cb29rTGlzdC50c3g/M2U5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9kYlwiXG5pbXBvcnQgeyBlbXB0eUJvb2sgfSBmcm9tIFwiQC9saWIvZGVmYXVsdFwiXG5pbXBvcnQgeyBJQm9vayB9IGZyb20gXCJAL2xpYi90eXBlc1wiXG5pbXBvcnQgeyB0cnVuY2F0ZSB9IGZyb20gXCJAL2xpYi91dGlsc1wiXG5pbXBvcnQgeyB1c2VMaXZlUXVlcnkgfSBmcm9tIFwiZGV4aWUtcmVhY3QtaG9va3NcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZnVuY3Rpb24gQm9va0l0ZW0ocHJvcHM6IHtcbiAgYm9vazogSUJvb2tcbiAgaXNTZWxlY3RlZDogYm9vbGVhblxuICByZW1vdmVCb29rOiAoKSA9PiB2b2lkXG59KSB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17cHJvcHMuYm9vay5pZH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cgZ2FwLTMganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTIgcHgtMiByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyICR7cHJvcHMuaXNTZWxlY3RlZCA/ICdiZy1wdXJwbGUtNDAwLzEwIHRleHQtd2hpdGUvNjAgZ3JvdXAnIDogJ2hvdmVyOmJnLXdoaXRlLzUnfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC1zaHJpbmsgZ2FwLTEgdHJ1bmNhdGUgdy1mdWxsIGgtOVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzQwIHRleHQteHMgZmxleCBmbGV4LXNocmluayB3LWZ1bGwgdHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRydW5jYXRlXCI+IHtwcm9wcy5ib29rLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS8zMCB0ZXh0LXhzIGZsZXggZmxleC1zaHJpbmsgZm9udC1saWdodCB0cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICB7cHJvcHMuYm9vay5jcmVhdGVkQXR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wcy5pc1NlbGVjdGVkICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYmctd2hpdGUvNSBtaW4tdy05IHctOSBoLTkgcm91bmRlZC1sZyB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlLzMwIG9wYWNpdHktMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1zbSBoaWRkZW4gZ3JvdXAtaG92ZXI6ZmxleCBob3ZlcjpiZy1yZWQtNDAwLzEwIGhvdmVyOmJnLXJlZC00MDAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDBcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBwcm9wcy5yZW1vdmVCb29rKClcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy05XCI+IHggPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBCb29rTGlzdCgpIHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGJvb2tJZCB9ID0gcm91dGVyLnF1ZXJ5IGFzIHsgYm9va0lkOiBzdHJpbmcgfVxuXG4gIGNvbnN0IGJvb2tzID0gdXNlTGl2ZVF1ZXJ5KFxuICAgICgpID0+IGRiLmJvb2tzPy5vcmRlckJ5KCdjcmVhdGVkQXQnKS5yZXZlcnNlKCkudG9BcnJheSgpXG4gIClcblxuICBhc3luYyBmdW5jdGlvbiBhZGRCb29rKCkge1xuICAgIGNvbnN0IG5ld0Jvb2s6IElCb29rID0ge1xuICAgICAgLi4uZW1wdHlCb29rLFxuICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICB9XG4gICAgY29uc3QgaWQgPSBhd2FpdCBkYi5ib29rcy5hZGQobmV3Qm9vaylcbiAgICByb3V0ZXIucHVzaChgLyR7aWR9YClcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUJvb2soYm9va0lkOiBzdHJpbmcpIHtcbiAgICBpZiAoIWJvb2tzKSByZXR1cm5cbiAgICBjb25zdCBjdXJySW5kZXggPSBib29rcy5maW5kSW5kZXgoKGJvb2spID0+IGJvb2suaWQgPT09IGJvb2tJZClcbiAgICBjb25zdCBuZXh0Qm9vayA9IGN1cnJJbmRleCA9PT0gKGJvb2tzLmxlbmd0aCAtIDEpXG4gICAgICA/IGJvb2tzWyhjdXJySW5kZXggLSAxKV1cbiAgICAgIDogYm9va3NbKGN1cnJJbmRleCArIDEpXVxuICAgIGF3YWl0IGRiLmJvb2tzLmRlbGV0ZShib29rSWQpXG4gICAgaWYgKG5leHRCb29rKSB7XG4gICAgICByb3V0ZXIucHVzaChgLyR7bmV4dEJvb2suaWR9YClcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBnYXAtMiBmbGV4LWdyb3cgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGhvdmVyOmJnLWJsYWNrLzEwIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHB4LTIgcHktMiByb3VuZGVkLWxnIGdhcC0yIGJvcmRlciBib3JkZXItd2hpdGUvNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHJvdW5kZWQtbGcgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZS8zMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXhzXCI+K1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIHRleHQtd2hpdGUvNDAgdGV4dC1sZWZ0IGhvdmVyOnRleHQtd2hpdGUvNjAgdGV4dC14cyByb3VuZGVkLWxnXCIgb25DbGljaz17YWRkQm9va30+Q3JlYXRlIGEgbmV3IEJvb2s8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgYm9va3MgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IGZsZXggZmxleC1jb2wgZ2FwLTIgb3ZlcmZsb3ctc2Nyb2xsIGZsZXgtZ3JvdyBtaW4taC0wXCI+XG4gICAgICAgICAge2Jvb2tzLm1hcCgoYm9vaykgPT5cbiAgICAgICAgICAgIDxCb29rSXRlbSBrZXk9e2Jvb2suaWR9IGJvb2s9e2Jvb2t9IGlzU2VsZWN0ZWQ9e2Jvb2tJZCA9PT0gYm9vay5pZH0gcmVtb3ZlQm9vaz17XG4gICAgICAgICAgICAgICgpID0+IHsgcmVtb3ZlQm9vayhib29rLmlkKSB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJkYiIsImVtcHR5Qm9vayIsInVzZUxpdmVRdWVyeSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJCb29rSXRlbSIsInByb3BzIiwiaHJlZiIsImJvb2siLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImlzU2VsZWN0ZWQiLCJuYW1lIiwiY3JlYXRlZEF0Iiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZUJvb2siLCJCb29rTGlzdCIsInJvdXRlciIsImJvb2tJZCIsInF1ZXJ5IiwiYm9va3MiLCJvcmRlckJ5IiwicmV2ZXJzZSIsInRvQXJyYXkiLCJhZGRCb29rIiwibmV3Qm9vayIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInVwZGF0ZWRBdCIsImFkZCIsInB1c2giLCJjdXJySW5kZXgiLCJmaW5kSW5kZXgiLCJuZXh0Qm9vayIsImxlbmd0aCIsImRlbGV0ZSIsImJ1dHRvbiIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SidePane/BookList.tsx\n"));

/***/ })

});