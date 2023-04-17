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

/***/ "./components/Block/NewBlock.tsx":
/*!***************************************!*\
  !*** ./components/Block/NewBlock.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddBlock\": function() { return /* binding */ AddBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"./lib/db.ts\");\n/* harmony import */ var _lib_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/types */ \"./lib/types.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction BlockButton(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row text-white/40 bg-white/5 hover:bg-white/10 p-2 px-3 rounded-lg text-sm\",\n        onClick: props.onClick,\n        onMouseDown: props.onMouseDown,\n        onMouseUp: props.onMouseUp,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: props.name\n        }, void 0, false, {\n            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/Block/NewBlock.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/Block/NewBlock.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = BlockButton;\nfunction AddBlock(props) {\n    _s();\n    const [blocks, setBlocks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function getSavedBlocks() {\n            const savedBlocks = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.blocks.toArray();\n            setBlocks([\n                ...Object.values(_lib_types__WEBPACK_IMPORTED_MODULE_2__.EBlockType),\n                ...savedBlocks.map((block)=>block.name)\n            ]);\n        }\n        getSavedBlocks();\n    }, [\n        blocks\n    ]);\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isClickInside, setIsClickInside] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (isActive && inputRef.current) {\n            inputRef.current.focus();\n        }\n    }, [\n        isActive\n    ]);\n    function handleClick() {\n        if (!isActive) {\n            setIsActive(true);\n        } else {\n            setIsActive(false);\n        }\n    }\n    function handleBlur() {\n        if (!isClickInside) {\n            setIsActive(false);\n        } else {\n            var _inputRef_current;\n            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"opacity-0 group flex flex-col w-full rounded-2xl gap-4 p-4 relative cursor-pointer text-sm \".concat(isActive ? \"bg-white/5 opacity-100\" : \"bg-white/[3%] hover:bg-white/5 hover:opacity-100\"),\n        onClick: handleClick,\n        onBlur: handleBlur,\n        children: isActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    ref: inputRef,\n                    className: \"bg-black/20 w-full text-white/30 outline-none p-4 rounded-xl placeholder:text-white/40\",\n                    placeholder: \"Enter block name here\",\n                    onChange: (e)=>setQuery(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/Block/NewBlock.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-3 gap-2 capitalize max-h-36 overflow-scroll\",\n                    autoFocus: true,\n                    children: blocks.filter((block)=>block.includes(query)).map((block)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BlockButton, {\n                            name: block.replace(/_/g, \" \"),\n                            onMouseDown: ()=>setIsClickInside(true),\n                            onMouseUp: ()=>setIsClickInside(false),\n                            onClick: ()=>props.add(block)\n                        }, block, false, {\n                            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/Block/NewBlock.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/Block/NewBlock.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/Block/NewBlock.tsx\",\n            lineNumber: 70,\n            columnNumber: 11\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-white/10 group-hover:text-white/50\",\n            children: \"+ Add a Component\"\n        }, void 0, false, {\n            fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/Block/NewBlock.tsx\",\n            lineNumber: 83,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harshitsatija/projects/makeanyai/app/components/Block/NewBlock.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(AddBlock, \"VUKo/oK9w/usD9OqVyKoU2U+VGw=\");\n_c1 = AddBlock;\nvar _c, _c1;\n$RefreshReg$(_c, \"BlockButton\");\n$RefreshReg$(_c1, \"AddBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9kYlwiXG5pbXBvcnQgeyBFQmxvY2tUeXBlIH0gZnJvbSBcIkAvbGliL3R5cGVzXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmZ1bmN0aW9uIEJsb2NrQnV0dG9uKHByb3BzOiB7XG4gIG5hbWU6IHN0cmluZ1xuICBvbkNsaWNrOiAoKSA9PiB2b2lkXG4gIG9uTW91c2VEb3duOiAoKSA9PiB2b2lkXG4gIG9uTW91c2VVcDogKCkgPT4gdm9pZFxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB0ZXh0LXdoaXRlLzQwIGJnLXdoaXRlLzUgaG92ZXI6Ymctd2hpdGUvMTAgcC0yIHB4LTMgcm91bmRlZC1sZyB0ZXh0LXNtXCIgb25DbGljaz17cHJvcHMub25DbGlja30gb25Nb3VzZURvd249e3Byb3BzLm9uTW91c2VEb3dufSBvbk1vdXNlVXA9e3Byb3BzLm9uTW91c2VVcH0+XG4gICAgICA8ZGl2Pntwcm9wcy5uYW1lfTwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBZGRCbG9jayhwcm9wczoge1xuICBhZGQobmFtZTogc3RyaW5nKTogdm9pZFxufSkge1xuXG4gIGNvbnN0IFtibG9ja3MsIHNldEJsb2Nrc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGU8c3RyaW5nPignJylcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U2F2ZWRCbG9ja3MoKSB7XG4gICAgICBjb25zdCBzYXZlZEJsb2NrcyA9IGF3YWl0IGRiLmJsb2Nrcy50b0FycmF5KClcbiAgICAgIHNldEJsb2NrcyhbXG4gICAgICAgIC4uLk9iamVjdC52YWx1ZXMoRUJsb2NrVHlwZSksXG4gICAgICAgIC4uLnNhdmVkQmxvY2tzLm1hcChibG9jayA9PiBibG9jay5uYW1lKVxuICAgICAgXSlcbiAgICB9XG4gICAgZ2V0U2F2ZWRCbG9ja3MoKVxuICB9LCBbYmxvY2tzXSlcblxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKVxuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNDbGlja0luc2lkZSwgc2V0SXNDbGlja0luc2lkZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQWN0aXZlICYmIGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKVxuICAgIH1cbiAgfSwgW2lzQWN0aXZlXSlcblxuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICBzZXRJc0FjdGl2ZSh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc0FjdGl2ZShmYWxzZSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVCbHVyKCkge1xuICAgIGlmICghaXNDbGlja0luc2lkZSkge1xuICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQ/LmZvY3VzKClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgb3BhY2l0eS0wIGdyb3VwIGZsZXggZmxleC1jb2wgdy1mdWxsIHJvdW5kZWQtMnhsIGdhcC00IHAtNCByZWxhdGl2ZSBjdXJzb3ItcG9pbnRlciB0ZXh0LXNtICR7aXNBY3RpdmVcbiAgICAgID8gJ2JnLXdoaXRlLzUgb3BhY2l0eS0xMDAnXG4gICAgICA6ICdiZy13aGl0ZS9bMyVdIGhvdmVyOmJnLXdoaXRlLzUgaG92ZXI6b3BhY2l0eS0xMDAnXG4gICAgICB9YH0gb25DbGljaz17aGFuZGxlQ2xpY2t9IG9uQmx1cj17aGFuZGxlQmx1cn0+XG4gICAgICB7aXNBY3RpdmVcbiAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgICAgICA8aW5wdXQgcmVmPXtpbnB1dFJlZn0gY2xhc3NOYW1lPVwiYmctYmxhY2svMjAgdy1mdWxsIHRleHQtd2hpdGUvMzAgb3V0bGluZS1ub25lIHAtNCByb3VuZGVkLXhsIHBsYWNlaG9sZGVyOnRleHQtd2hpdGUvNDBcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGJsb2NrIG5hbWUgaGVyZVwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMiBjYXBpdGFsaXplIG1heC1oLTM2IG92ZXJmbG93LXNjcm9sbFwiIGF1dG9Gb2N1cz5cbiAgICAgICAgICAgIHtibG9ja3MuZmlsdGVyKGJsb2NrID0+IGJsb2NrLmluY2x1ZGVzKHF1ZXJ5KSkubWFwKChibG9jaykgPT4gKFxuICAgICAgICAgICAgICA8QmxvY2tCdXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e2Jsb2NrfVxuICAgICAgICAgICAgICAgIG5hbWU9e2Jsb2NrLnJlcGxhY2UoL18vZywgJyAnKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4gc2V0SXNDbGlja0luc2lkZSh0cnVlKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHNldElzQ2xpY2tJbnNpZGUoZmFsc2UpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmFkZChibG9jayl9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzEwIGdyb3VwLWhvdmVyOnRleHQtd2hpdGUvNTBcIj4rIEFkZCBhIENvbXBvbmVudDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbImRiIiwiRUJsb2NrVHlwZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQmxvY2tCdXR0b24iLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJvbk1vdXNlRG93biIsIm9uTW91c2VVcCIsIm5hbWUiLCJBZGRCbG9jayIsImJsb2NrcyIsInNldEJsb2NrcyIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJnZXRTYXZlZEJsb2NrcyIsInNhdmVkQmxvY2tzIiwidG9BcnJheSIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImJsb2NrIiwiaW5wdXRSZWYiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiaXNDbGlja0luc2lkZSIsInNldElzQ2xpY2tJbnNpZGUiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVDbGljayIsImhhbmRsZUJsdXIiLCJvbkJsdXIiLCJpbnB1dCIsInJlZiIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhdXRvRm9jdXMiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInJlcGxhY2UiLCJhZGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Block/NewBlock.tsx\n"));

/***/ })

});