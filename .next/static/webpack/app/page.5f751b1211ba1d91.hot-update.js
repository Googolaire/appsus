"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/sections/_home/view/home-view.tsx":
/*!***********************************************!*\
  !*** ./src/sections/_home/view/home-view.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomeView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var src_layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/layouts/main */ \"(app-pages-browser)/./src/layouts/main/index.tsx\");\n/* harmony import */ var src_components_scroll_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/scroll-progress */ \"(app-pages-browser)/./src/components/scroll-progress/index.ts\");\n/* harmony import */ var _home_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home-hero */ \"(app-pages-browser)/./src/sections/_home/home-hero.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// ----------------------------------------------------------------------\nfunction HomeView() {\n    _s();\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_layouts_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_scroll_progress__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                scrollYProgress: scrollYProgress\n            }, void 0, false, {\n                fileName: \"/Users/huntermaxwell/Documents/appus/src/sections/_home/view/home-view.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/huntermaxwell/Documents/appus/src/sections/_home/view/home-view.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/huntermaxwell/Documents/appus/src/sections/_home/view/home-view.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(HomeView, \"K+vLkUSSogCN887TkXa8xjCRTOU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll\n    ];\n});\n_c = HomeView;\nvar _c;\n$RefreshReg$(_c, \"HomeView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZWN0aW9ucy9faG9tZS92aWV3L2hvbWUtdmlldy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFMEM7QUFFQTtBQUVrQjtBQUV4QjtBQUVwQyx5RUFBeUU7QUFFMUQsU0FBU0k7O0lBQ3RCLE1BQU0sRUFBRUMsZUFBZSxFQUFFLEdBQUdMLHdEQUFTQTtJQUVyQyxxQkFDRSw4REFBQ0Msd0RBQVVBOzswQkFDVCw4REFBQ0Msc0VBQWNBO2dCQUFDRyxpQkFBaUJBOzs7Ozs7MEJBQ2pDLDhEQUFDRixrREFBUUE7Ozs7Ozs7Ozs7O0FBR2Y7R0FUd0JDOztRQUNNSixvREFBU0E7OztLQURmSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VjdGlvbnMvX2hvbWUvdmlldy9ob21lLXZpZXcudHN4PzI1NTciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VTY3JvbGwgfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSAnc3JjL2xheW91dHMvbWFpbic7XG5cbmltcG9ydCBTY3JvbGxQcm9ncmVzcyBmcm9tICdzcmMvY29tcG9uZW50cy9zY3JvbGwtcHJvZ3Jlc3MnO1xuXG5pbXBvcnQgSG9tZUhlcm8gZnJvbSAnLi4vaG9tZS1oZXJvJztcbmltcG9ydCBGb290ZXIgZnJvbSAnc3JjL2xheW91dHMvbWFpbi9mb290ZXInO1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lVmlldygpIHtcbiAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVNjcm9sbCgpO1xuXG4gIHJldHVybiAoXG4gICAgPE1haW5MYXlvdXQ+XG4gICAgICA8U2Nyb2xsUHJvZ3Jlc3Mgc2Nyb2xsWVByb2dyZXNzPXtzY3JvbGxZUHJvZ3Jlc3N9IC8+XG4gICAgICA8SG9tZUhlcm8gLz5cbiAgICA8L01haW5MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU2Nyb2xsIiwiTWFpbkxheW91dCIsIlNjcm9sbFByb2dyZXNzIiwiSG9tZUhlcm8iLCJIb21lVmlldyIsInNjcm9sbFlQcm9ncmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/sections/_home/view/home-view.tsx\n"));

/***/ })

});