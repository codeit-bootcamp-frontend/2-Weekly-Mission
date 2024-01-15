"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/signin",{

/***/ "./src/auth/ui-auth-input/AuthInput.jsx":
/*!**********************************************!*\
  !*** ./src/auth/ui-auth-input/AuthInput.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthInput: function() { return /* binding */ AuthInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthInput.module.scss */ \"./src/auth/ui-auth-input/AuthInput.module.scss\");\n/* harmony import */ var _AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ \"./src/auth/ui-auth-input/constant.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default().bind((_AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5___default()));\nconst AuthInput = ({ password, check })=>{\n    _s();\n    const initialType = password ? \"password\" : \"email\";\n    const [inputType, setInputType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialType);\n    const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [passwordInput, setPasswordInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // placeholder\n    const isInput = inputType === \"password\" || inputType === \"text\";\n    const placeholder = isInput ? check ? \"비밀번호와 일치하는 값을 입력해 주세요\" : \"비밀번호를 입력해 주세요\" : \"이메일을 입력해 주세요\";\n    // 이메일, 비밀번호 유효성 검사\n    const isValidEmail = (input)=>{\n        return _constant__WEBPACK_IMPORTED_MODULE_4__.EMAIL_REGEX.test(input) ? true : false;\n    };\n    const isValidPassword = (input)=>{\n        return _constant__WEBPACK_IMPORTED_MODULE_4__.PASSWORD_REGEX.test(input) ? true : false;\n    };\n    const handleEmailError = (e)=>{\n        if (!e.target.value) {\n            setErrorMessage(\"이메일을 입력해 주세요\");\n        } else if (!isValidEmail(e.target.value)) {\n            setErrorMessage(\"올바른 이메일 주소가 아닙니다\");\n        } else {\n            setErrorMessage(\"\");\n        }\n    };\n    const handlePasswordError = (e)=>{\n        if (!e.target.value) {\n            setErrorMessage(\"비밀번호를 입력해 주세요\");\n        } else if (!isValidPassword(e.target.value)) {\n            setPasswordInput(e.target.value);\n            setErrorMessage(\"비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요\");\n        } else {\n            setPasswordInput(e.target.value);\n            setErrorMessage(\"\");\n        }\n    };\n    const handleCheckPasswordError = (e)=>{\n        console.log(\"value\", e.target.value);\n        console.log(\"passwordinput\", passwordInput);\n        if (!e.target.value) {\n            setErrorMessage(\"비밀번호를 입력해 주세요\");\n        } else if (e.target.value === passwordInput) {\n            setErrorMessage(\"비밀번호가 일치하지 않아요.\");\n        } else {\n            setErrorMessage(\"\");\n        }\n    };\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!password) {\n            inputRef.current?.addEventListener(\"focusout\", handleEmailError);\n        } else if (!check) {\n            inputRef.current?.addEventListener(\"focusout\", handlePasswordError);\n        } else {\n            inputRef.current?.addEventListener(\"focusout\", handleCheckPasswordError);\n        }\n        console.log(\"passwordInput\", passwordInput);\n    }, [\n        passwordInput\n    ]);\n    // 비밀번호 보이기/숨기기\n    const handlePasswordShown = (e)=>{\n        setIsVisible(!isVisible);\n        isVisible ? setInputType(\"password\") : setInputType(\"text\");\n    };\n    // input focus시 파란 테두리\n    const handleFocus = ()=>{\n        setIsFocused(true);\n    };\n    const handleBlur = ()=>{\n        setIsFocused(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cx(\"container\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: cx(\"input\", {\n                            focused: isFocused,\n                            error: errorMessage\n                        }),\n                        type: inputType,\n                        placeholder: placeholder,\n                        ref: inputRef,\n                        onFocus: handleFocus,\n                        onBlur: handleBlur\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    password && (isVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _constant__WEBPACK_IMPORTED_MODULE_4__.EYEON_IMAGE,\n                        width: 16,\n                        height: 16,\n                        alt: \"비밀번호 보이기 아이콘\",\n                        className: cx(\"eye-icon\"),\n                        onClick: handlePasswordShown\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _constant__WEBPACK_IMPORTED_MODULE_4__.EYEOFF_IMAGE,\n                        width: 16,\n                        height: 16,\n                        alt: \"비밀번호 숨김 아이콘\",\n                        className: cx(\"eye-icon\"),\n                        onClick: handlePasswordShown\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 124,\n                        columnNumber: 13\n                    }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: cx({\n                    \"error-message\": errorMessage,\n                    hidden: errorMessage == false\n                }),\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthInput, \"mggWOPwQ/hOzLlZxlBfO3y2yUhQ=\");\n_c = AuthInput;\nvar _c;\n$RefreshReg$(_c, \"AuthInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXV0aC91aS1hdXRoLWlucHV0L0F1dGhJbnB1dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDSjtBQUNXO0FBQ3JCO0FBTVg7QUFFcEIsTUFBTVUsS0FBS1QsMkRBQWUsQ0FBQ0QsK0RBQU1BO0FBRTFCLE1BQU1ZLFlBQVksQ0FBQyxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRTs7SUFDM0MsTUFBTUMsY0FBY0YsV0FBVyxhQUFhO0lBRTVDLE1BQU0sQ0FBQ0csV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQ1k7SUFDM0MsTUFBTSxDQUFDRyxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNpQixjQUFjQyxnQkFBZ0IsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ21CLFdBQVdDLGFBQWEsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ3FCLGVBQWVDLGlCQUFpQixHQUFHdEIsK0NBQVFBLENBQUM7SUFFbkQsY0FBYztJQUNkLE1BQU11QixVQUFVVixjQUFjLGNBQWNBLGNBQWM7SUFDMUQsTUFBTVcsY0FBY0QsVUFDaEJaLFFBQ0UsMEJBQ0Esa0JBQ0Y7SUFFSixtQkFBbUI7SUFDbkIsTUFBTWMsZUFBZSxDQUFDQztRQUNwQixPQUFPckIsa0RBQVdBLENBQUNzQixJQUFJLENBQUNELFNBQVMsT0FBTztJQUMxQztJQUVBLE1BQU1FLGtCQUFrQixDQUFDRjtRQUN2QixPQUFPcEIscURBQWNBLENBQUNxQixJQUFJLENBQUNELFNBQVMsT0FBTztJQUM3QztJQUVBLE1BQU1HLG1CQUFtQixDQUFDQztRQUN4QixJQUFJLENBQUNBLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO1lBQ25CZCxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUNPLGFBQWFLLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHO1lBQ3hDZCxnQkFBZ0I7UUFDbEIsT0FBTztZQUNMQSxnQkFBZ0I7UUFDbEI7SUFDRjtJQUVBLE1BQU1lLHNCQUFzQixDQUFDSDtRQUMzQixJQUFJLENBQUNBLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO1lBQ25CZCxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUNVLGdCQUFnQkUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLEdBQUc7WUFDM0NWLGlCQUFpQlEsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO1lBQy9CZCxnQkFBZ0I7UUFDbEIsT0FBTztZQUNMSSxpQkFBaUJRLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztZQUMvQmQsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNZ0IsMkJBQTJCLENBQUNKO1FBQ2hDSyxRQUFRQyxHQUFHLENBQUMsU0FBU04sRUFBRUMsTUFBTSxDQUFDQyxLQUFLO1FBQ25DRyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCZjtRQUM3QixJQUFJLENBQUNTLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO1lBQ25CZCxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJWSxFQUFFQyxNQUFNLENBQUNDLEtBQUssS0FBS1gsZUFBZTtZQUMzQ0gsZ0JBQWdCO1FBQ2xCLE9BQU87WUFDTEEsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNbUIsV0FBV3BDLDZDQUFNQTtJQUV2QkYsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNXLFVBQVU7WUFDYjJCLFNBQVNDLE9BQU8sRUFBRUMsaUJBQWlCLFlBQVlWO1FBQ2pELE9BQU8sSUFBSSxDQUFDbEIsT0FBTztZQUNqQjBCLFNBQVNDLE9BQU8sRUFBRUMsaUJBQWlCLFlBQVlOO1FBQ2pELE9BQU87WUFDTEksU0FBU0MsT0FBTyxFQUFFQyxpQkFBaUIsWUFBWUw7UUFDakQ7UUFDQUMsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQmY7SUFDL0IsR0FBRztRQUFDQTtLQUFjO0lBRWxCLGVBQWU7SUFDZixNQUFNbUIsc0JBQXNCLENBQUNWO1FBQzNCVixhQUFhLENBQUNEO1FBQ2RBLFlBQVlMLGFBQWEsY0FBY0EsYUFBYTtJQUN0RDtJQUVBLHNCQUFzQjtJQUN0QixNQUFNMkIsY0FBYztRQUNsQnpCLGFBQWE7SUFDZjtJQUVBLE1BQU0wQixhQUFhO1FBQ2pCMUIsYUFBYTtJQUNmO0lBQ0EscUJBQ0UsOERBQUMyQjs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFXckMsR0FBRzs7a0NBQ2pCLDhEQUFDbUI7d0JBQ0NrQixXQUFXckMsR0FBRyxTQUFTOzRCQUFFc0MsU0FBUzlCOzRCQUFXK0IsT0FBTzdCO3dCQUFhO3dCQUNqRThCLE1BQU1sQzt3QkFDTlcsYUFBYUE7d0JBQ2J3QixLQUFLWDt3QkFDTFksU0FBU1I7d0JBQ1RTLFFBQVFSOzs7Ozs7b0JBR1RoQyxZQUNFUyxDQUFBQSwwQkFDQyw4REFBQ2pCLG1EQUFLQTt3QkFDSmlELEtBQUsvQyxrREFBV0E7d0JBQ2hCZ0QsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsS0FBSTt3QkFDSlYsV0FBV3JDLEdBQUc7d0JBQ2RnRCxTQUFTZjs7Ozs7a0RBR1gsOERBQUN0QyxtREFBS0E7d0JBQ0ppRCxLQUFLaEQsbURBQVlBO3dCQUNqQmlELE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLEtBQUk7d0JBQ0pWLFdBQVdyQyxHQUFHO3dCQUNkZ0QsU0FBU2Y7Ozs7O2lDQUViOzs7Ozs7OzBCQUVKLDhEQUFDZ0I7Z0JBQ0NaLFdBQVdyQyxHQUFHO29CQUNaLGlCQUFpQlU7b0JBQ2pCd0MsUUFBUXhDLGdCQUFnQjtnQkFDMUI7MEJBRUNBOzs7Ozs7Ozs7Ozs7QUFJVCxFQUFFO0dBbElXUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXV0aC91aS1hdXRoLWlucHV0L0F1dGhJbnB1dC5qc3g/MzNkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0F1dGhJbnB1dC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7XG4gIEVZRU9GRl9JTUFHRSxcbiAgRVlFT05fSU1BR0UsXG4gIEVNQUlMX1JFR0VYLFxuICBQQVNTV09SRF9SRUdFWCxcbn0gZnJvbSBcIi4vY29uc3RhbnRcIjtcblxuY29uc3QgY3ggPSBjbGFzc05hbWVzLmJpbmQoc3R5bGVzKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhJbnB1dCA9ICh7IHBhc3N3b3JkLCBjaGVjayB9KSA9PiB7XG4gIGNvbnN0IGluaXRpYWxUeXBlID0gcGFzc3dvcmQgPyBcInBhc3N3b3JkXCIgOiBcImVtYWlsXCI7XG5cbiAgY29uc3QgW2lucHV0VHlwZSwgc2V0SW5wdXRUeXBlXSA9IHVzZVN0YXRlKGluaXRpYWxUeXBlKTtcbiAgY29uc3QgW2lzRm9jdXNlZCwgc2V0SXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGFzc3dvcmRJbnB1dCwgc2V0UGFzc3dvcmRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAvLyBwbGFjZWhvbGRlclxuICBjb25zdCBpc0lucHV0ID0gaW5wdXRUeXBlID09PSBcInBhc3N3b3JkXCIgfHwgaW5wdXRUeXBlID09PSBcInRleHRcIjtcbiAgY29uc3QgcGxhY2Vob2xkZXIgPSBpc0lucHV0XG4gICAgPyBjaGVja1xuICAgICAgPyBcIuu5hOuwgOuyiO2YuOyZgCDsnbzsuZjtlZjripQg6rCS7J2EIOyeheugpe2VtCDso7zshLjsmpRcIlxuICAgICAgOiBcIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbQg7KO87IS47JqUXCJcbiAgICA6IFwi7J2066mU7J287J2EIOyeheugpe2VtCDso7zshLjsmpRcIjtcblxuICAvLyDsnbTrqZTsnbwsIOu5hOuwgOuyiO2YuCDsnKDtmqjshLEg6rKA7IKsXG4gIGNvbnN0IGlzVmFsaWRFbWFpbCA9IChpbnB1dCkgPT4ge1xuICAgIHJldHVybiBFTUFJTF9SRUdFWC50ZXN0KGlucHV0KSA/IHRydWUgOiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBpc1ZhbGlkUGFzc3dvcmQgPSAoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gUEFTU1dPUkRfUkVHRVgudGVzdChpbnB1dCkgPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW1haWxFcnJvciA9IChlKSA9PiB7XG4gICAgaWYgKCFlLnRhcmdldC52YWx1ZSkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi7J2066mU7J287J2EIOyeheugpe2VtCDso7zshLjsmpRcIik7XG4gICAgfSBlbHNlIGlmICghaXNWYWxpZEVtYWlsKGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi7Jis67CU66W4IOydtOuplOydvCDso7zshozqsIAg7JWE64uZ64uI64ukXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBhc3N3b3JkRXJyb3IgPSAoZSkgPT4ge1xuICAgIGlmICghZS50YXJnZXQudmFsdWUpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbQg7KO87IS47JqUXCIpO1xuICAgIH0gZWxzZSBpZiAoIWlzVmFsaWRQYXNzd29yZChlLnRhcmdldC52YWx1ZSkpIHtcbiAgICAgIHNldFBhc3N3b3JkSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi67mE67CA67KI7Zi464qUIOyYgeusuCwg7Iir7J6QIOyhsO2VqSA47J6QIOydtOyDgSDsnoXroKXtlbQg7KO87IS47JqUXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRQYXNzd29yZElucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tQYXNzd29yZEVycm9yID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInZhbHVlXCIsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkaW5wdXRcIiwgcGFzc3dvcmRJbnB1dCk7XG4gICAgaWYgKCFlLnRhcmdldC52YWx1ZSkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi67mE67CA67KI7Zi466W8IOyeheugpe2VtCDso7zshLjsmpRcIik7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gcGFzc3dvcmRJbnB1dCkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrslYTsmpQuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXBhc3N3b3JkKSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50Py5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlRW1haWxFcnJvcik7XG4gICAgfSBlbHNlIGlmICghY2hlY2spIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBoYW5kbGVQYXNzd29yZEVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRSZWYuY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZUNoZWNrUGFzc3dvcmRFcnJvcik7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmRJbnB1dFwiLCBwYXNzd29yZElucHV0KTtcbiAgfSwgW3Bhc3N3b3JkSW5wdXRdKTtcblxuICAvLyDruYTrsIDrsojtmLgg67O07J206riwL+yIqOq4sOq4sFxuICBjb25zdCBoYW5kbGVQYXNzd29yZFNob3duID0gKGUpID0+IHtcbiAgICBzZXRJc1Zpc2libGUoIWlzVmlzaWJsZSk7XG4gICAgaXNWaXNpYmxlID8gc2V0SW5wdXRUeXBlKFwicGFzc3dvcmRcIikgOiBzZXRJbnB1dFR5cGUoXCJ0ZXh0XCIpO1xuICB9O1xuXG4gIC8vIGlucHV0IGZvY3Vz7IucIO2MjOuegCDthYzrkZDrpqxcbiAgY29uc3QgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XG4gICAgc2V0SXNGb2N1c2VkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgc2V0SXNGb2N1c2VkKGZhbHNlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwiY29udGFpbmVyXCIpfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtjeChcImlucHV0XCIsIHsgZm9jdXNlZDogaXNGb2N1c2VkLCBlcnJvcjogZXJyb3JNZXNzYWdlIH0pfVxuICAgICAgICAgIHR5cGU9e2lucHV0VHlwZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVGb2N1c31cbiAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgLy8gb25DaGFuZ2U9e2hhbmRsZVBhc3N3b3JkQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICB7cGFzc3dvcmQgJiZcbiAgICAgICAgICAoaXNWaXNpYmxlID8gKFxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17RVlFT05fSU1BR0V9XG4gICAgICAgICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNn1cbiAgICAgICAgICAgICAgYWx0PVwi67mE67CA67KI7Zi4IOuztOydtOq4sCDslYTsnbTsvZhcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFwiZXllLWljb25cIil9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBhc3N3b3JkU2hvd259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtFWUVPRkZfSU1BR0V9XG4gICAgICAgICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNn1cbiAgICAgICAgICAgICAgYWx0PVwi67mE67CA67KI7Zi4IOyIqOq5gCDslYTsnbTsvZhcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFwiZXllLWljb25cIil9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBhc3N3b3JkU2hvd259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8cFxuICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIGhpZGRlbjogZXJyb3JNZXNzYWdlID09IGZhbHNlLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAge2Vycm9yTWVzc2FnZX1cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiSW1hZ2UiLCJFWUVPRkZfSU1BR0UiLCJFWUVPTl9JTUFHRSIsIkVNQUlMX1JFR0VYIiwiUEFTU1dPUkRfUkVHRVgiLCJjeCIsImJpbmQiLCJBdXRoSW5wdXQiLCJwYXNzd29yZCIsImNoZWNrIiwiaW5pdGlhbFR5cGUiLCJpbnB1dFR5cGUiLCJzZXRJbnB1dFR5cGUiLCJpc0ZvY3VzZWQiLCJzZXRJc0ZvY3VzZWQiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJwYXNzd29yZElucHV0Iiwic2V0UGFzc3dvcmRJbnB1dCIsImlzSW5wdXQiLCJwbGFjZWhvbGRlciIsImlzVmFsaWRFbWFpbCIsImlucHV0IiwidGVzdCIsImlzVmFsaWRQYXNzd29yZCIsImhhbmRsZUVtYWlsRXJyb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQYXNzd29yZEVycm9yIiwiaGFuZGxlQ2hlY2tQYXNzd29yZEVycm9yIiwiY29uc29sZSIsImxvZyIsImlucHV0UmVmIiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVQYXNzd29yZFNob3duIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVCbHVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9jdXNlZCIsImVycm9yIiwidHlwZSIsInJlZiIsIm9uRm9jdXMiLCJvbkJsdXIiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIm9uQ2xpY2siLCJwIiwiaGlkZGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/auth/ui-auth-input/AuthInput.jsx\n"));

/***/ })

});