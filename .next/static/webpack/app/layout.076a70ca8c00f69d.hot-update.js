"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/providers.tsx":
/*!***************************!*\
  !*** ./app/providers.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Providers: function() { return /* binding */ Providers; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"(app-pages-browser)/./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"(app-pages-browser)/./node_modules/@rainbow-me/rainbowkit/dist/chunk-RZWDCITT.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/@wagmi/core/dist/esm/createConfig.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/context.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/chains */ \"(app-pages-browser)/./node_modules/viem/_esm/chains/definitions/mainnet.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/query-core/build/modern/queryClient.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* harmony import */ var viem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! viem */ \"(app-pages-browser)/./node_modules/viem/_esm/clients/createPublicClient.js\");\n/* harmony import */ var viem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! viem */ \"(app-pages-browser)/./node_modules/viem/_esm/clients/transports/http.js\");\n/* __next_internal_client_entry_do_not_use__ Providers auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// Make sure to replace this with your actual WalletConnect project ID\nconst projectId = \"YOUR_WALLETCONNECT_PROJECT_ID\";\nconst { connectors } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultWallets)({\n    appName: \"FLUX\",\n    projectId: projectId,\n    chains: [\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.mainnet\n    ] // Simplified to just mainnet for now\n});\nconst publicClient = (0,viem__WEBPACK_IMPORTED_MODULE_4__.createPublicClient)({\n    chain: wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.mainnet,\n    transport: (0,viem__WEBPACK_IMPORTED_MODULE_5__.http)()\n});\nconst config = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.createConfig)({\n    connectors,\n    publicClient\n});\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClient();\nfunction Providers(param) {\n    let { children } = param;\n    _s();\n    const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        setMounted(true);\n    }, []);\n    if (!mounted) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_8__.WagmiProvider, {\n        config: config,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.QueryClientProvider, {\n            client: queryClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.RainbowKitProvider, {\n                theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_10__.darkTheme)(),\n                chains: [\n                    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.mainnet\n                ],\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\paynow\\\\app\\\\providers.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Dell\\\\paynow\\\\app\\\\providers.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\paynow\\\\app\\\\providers.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Providers, \"LrrVfNW3d1raFE0BNzCTILYmIfo=\");\n_c = Providers;\nvar _c;\n$RefreshReg$(_c, \"Providers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm92aWRlcnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUtDO0FBQ2tCO0FBQ1g7QUFDa0M7QUFDekI7QUFFaEQsc0VBQXNFO0FBQ3RFLE1BQU1XLFlBQVk7QUFFbEIsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR1YseUVBQWlCQSxDQUFDO0lBQ3ZDVyxTQUFTO0lBQ1RGLFdBQVdBO0lBQ1hHLFFBQVE7UUFBQ1IsaURBQU9BO0tBQUMsQ0FBRSxxQ0FBcUM7QUFDMUQ7QUFFQSxNQUFNUyxlQUFlTix3REFBa0JBLENBQUM7SUFDdENPLE9BQU9WLGlEQUFPQTtJQUNkVyxXQUFXUCwwQ0FBSUE7QUFDakI7QUFFQSxNQUFNUSxTQUFTZCxtREFBWUEsQ0FBQztJQUMxQlE7SUFDQUc7QUFDRjtBQUVBLE1BQU1JLGNBQWMsSUFBSVosOERBQVdBO0FBRTVCLFNBQVNhLFVBQVUsS0FBMkM7UUFBM0MsRUFBRUMsUUFBUSxFQUFpQyxHQUEzQzs7SUFDeEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUd2QiwyQ0FBYyxDQUFDO0lBRTdDQSw0Q0FBZSxDQUFDO1FBQ2R1QixXQUFXO0lBQ2IsR0FBRyxFQUFFO0lBRUwsSUFBSSxDQUFDRCxTQUFTO1FBQ1osT0FBTztJQUNUO0lBRUEscUJBQ0UsOERBQUNqQixnREFBV0E7UUFBQ2EsUUFBUUE7a0JBQ25CLDRFQUFDVixzRUFBbUJBO1lBQUNrQixRQUFRUDtzQkFDM0IsNEVBQUNsQixzRUFBa0JBO2dCQUNqQjBCLE9BQU94QixrRUFBU0E7Z0JBQ2hCVyxRQUFRO29CQUFDUixpREFBT0E7aUJBQUM7MEJBRWhCZTs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0dBdkJnQkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Byb3ZpZGVycy50c3g/Y2U0NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFJhaW5ib3dLaXRQcm92aWRlcixcbiAgZ2V0RGVmYXVsdFdhbGxldHMsXG4gIGRhcmtUaGVtZSxcbn0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XG5pbXBvcnQgeyBjcmVhdGVDb25maWcsIFdhZ21pQ29uZmlnIH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IHsgbWFpbm5ldCB9IGZyb20gJ3dhZ21pL2NoYWlucyc7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBjcmVhdGVQdWJsaWNDbGllbnQsIGh0dHAgfSBmcm9tICd2aWVtJztcblxuLy8gTWFrZSBzdXJlIHRvIHJlcGxhY2UgdGhpcyB3aXRoIHlvdXIgYWN0dWFsIFdhbGxldENvbm5lY3QgcHJvamVjdCBJRFxuY29uc3QgcHJvamVjdElkID0gJ1lPVVJfV0FMTEVUQ09OTkVDVF9QUk9KRUNUX0lEJztcblxuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XG4gIGFwcE5hbWU6ICdGTFVYJyxcbiAgcHJvamVjdElkOiBwcm9qZWN0SWQsXG4gIGNoYWluczogW21haW5uZXRdICAvLyBTaW1wbGlmaWVkIHRvIGp1c3QgbWFpbm5ldCBmb3Igbm93XG59KTtcblxuY29uc3QgcHVibGljQ2xpZW50ID0gY3JlYXRlUHVibGljQ2xpZW50KHtcbiAgY2hhaW46IG1haW5uZXQsXG4gIHRyYW5zcG9ydDogaHR0cCgpLFxufSk7XG5cbmNvbnN0IGNvbmZpZyA9IGNyZWF0ZUNvbmZpZyh7XG4gIGNvbm5lY3RvcnMsXG4gIHB1YmxpY0NsaWVudCxcbn0pO1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZXJzKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TW91bnRlZCh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGlmICghbW91bnRlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V2FnbWlDb25maWcgY29uZmlnPXtjb25maWd9PlxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgIDxSYWluYm93S2l0UHJvdmlkZXJcbiAgICAgICAgICB0aGVtZT17ZGFya1RoZW1lKCl9XG4gICAgICAgICAgY2hhaW5zPXtbbWFpbm5ldF19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgIDwvV2FnbWlDb25maWc+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJnZXREZWZhdWx0V2FsbGV0cyIsImRhcmtUaGVtZSIsImNyZWF0ZUNvbmZpZyIsIldhZ21pQ29uZmlnIiwibWFpbm5ldCIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsImNyZWF0ZVB1YmxpY0NsaWVudCIsImh0dHAiLCJwcm9qZWN0SWQiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsImNoYWlucyIsInB1YmxpY0NsaWVudCIsImNoYWluIiwidHJhbnNwb3J0IiwiY29uZmlnIiwicXVlcnlDbGllbnQiLCJQcm92aWRlcnMiLCJjaGlsZHJlbiIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjbGllbnQiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/providers.tsx\n"));

/***/ })

});