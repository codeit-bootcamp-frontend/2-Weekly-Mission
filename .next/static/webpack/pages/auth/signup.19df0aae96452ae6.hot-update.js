"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/signup",{

/***/ "./src/auth/ui-auth-input/AuthInput.jsx":
/*!**********************************************!*\
  !*** ./src/auth/ui-auth-input/AuthInput.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthInput: function() { return /* binding */ AuthInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthInput.module.scss */ \"./src/auth/ui-auth-input/AuthInput.module.scss\");\n/* harmony import */ var _AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ \"./src/auth/ui-auth-input/constant.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default().bind((_AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5___default()));\nconst AuthInput = ({ password, check, input, setInput })=>{\n    _s();\n    const initialType = password ? \"password\" : \"email\";\n    const [inputType, setInputType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialType);\n    const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // const [passwordInput, setPasswordInput] = useState(\"\");\n    // placeholder\n    const isInput = inputType === \"password\" || inputType === \"text\";\n    const placeholder = isInput ? check ? \"비밀번호와 일치하는 값을 입력해 주세요\" : \"비밀번호를 입력해 주세요\" : \"이메일을 입력해 주세요\";\n    // 이메일, 비밀번호 유효성 검사\n    const isValidEmail = (input)=>{\n        return _constant__WEBPACK_IMPORTED_MODULE_4__.EMAIL_REGEX.test(input) ? true : false;\n    };\n    const isValidPassword = (input)=>{\n        return _constant__WEBPACK_IMPORTED_MODULE_4__.PASSWORD_REGEX.test(input) ? true : false;\n    };\n    const handleEmailError = (e)=>{\n        if (!e.target.value) {\n            setErrorMessage(\"이메일을 입력해 주세요\");\n        } else if (!isValidEmail(e.target.value)) {\n            setErrorMessage(\"올바른 이메일 주소가 아닙니다\");\n        } else {\n            setErrorMessage(\"\");\n        }\n    };\n    const handlePasswordError = (e)=>{\n        if (!e.target.value) {\n            setErrorMessage(\"비밀번호를 입력해 주세요\");\n        } else if (!isValidPassword(e.target.value)) {\n            setInput(e.target.value);\n            setErrorMessage(\"비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요\");\n        } else {\n            setInput(e.target.value);\n            setErrorMessage(\"\");\n        }\n    };\n    const handleCheckPasswordError = (e)=>{\n        console.log(\"비교할 패스워드 인풋\", input);\n        console.log(\"비교할 패스워드확인 인풋\", e.target.value);\n        if (!e.target.value) {\n            setErrorMessage(\"비밀번호를 입력해 주세요\");\n        } else if (e.target.value !== input) {\n            setErrorMessage(\"비밀번호가 일치하지 않아요.\");\n        } else {\n            setErrorMessage(\"\");\n        }\n    };\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!password) {\n            inputRef.current?.addEventListener(\"focusout\", handleEmailError);\n        } else if (!check) {\n            inputRef.current?.addEventListener(\"focusout\", handlePasswordError);\n        } else {\n            inputRef.current?.addEventListener(\"focusout\", handleCheckPasswordError);\n        }\n    // console.log(\"passwordInput\", passwordInput);\n    }, []);\n    // 비밀번호 보이기/숨기기\n    const handlePasswordShown = (e)=>{\n        setIsVisible(!isVisible);\n        isVisible ? setInputType(\"password\") : setInputType(\"text\");\n    };\n    // input focus시 파란 테두리\n    const handleFocus = ()=>{\n        setIsFocused(true);\n    };\n    const handleBlur = ()=>{\n        setIsFocused(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cx(\"container\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: cx(\"input\", {\n                            focused: isFocused,\n                            error: errorMessage\n                        }),\n                        type: inputType,\n                        placeholder: placeholder,\n                        ref: inputRef,\n                        onFocus: handleFocus,\n                        onBlur: handleBlur\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    password && (isVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _constant__WEBPACK_IMPORTED_MODULE_4__.EYEON_IMAGE,\n                        width: 16,\n                        height: 16,\n                        alt: \"비밀번호 보이기 아이콘\",\n                        className: cx(\"eye-icon\"),\n                        onClick: handlePasswordShown\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _constant__WEBPACK_IMPORTED_MODULE_4__.EYEOFF_IMAGE,\n                        width: 16,\n                        height: 16,\n                        alt: \"비밀번호 숨김 아이콘\",\n                        className: cx(\"eye-icon\"),\n                        onClick: handlePasswordShown\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 124,\n                        columnNumber: 13\n                    }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: cx({\n                    \"error-message\": errorMessage,\n                    hidden: errorMessage == false\n                }),\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthInput, \"shdv1XNd+cp+NB2Ve45JAIZ4IXA=\");\n_c = AuthInput;\nvar _c;\n$RefreshReg$(_c, \"AuthInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYTtJQUNmO0lBRUEsTUFBTXVCLGFBQWE7UUFDakJ2QixhQUFhO0lBQ2Y7SUFDQSxxQkFDRSw4REFBQ3dCOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVdwQyxHQUFHOztrQ0FDakIsOERBQUNLO3dCQUNDK0IsV0FBV3BDLEdBQUcsU0FBUzs0QkFBRXFDLFNBQVMzQjs0QkFBVzRCLE9BQU8xQjt3QkFBYTt3QkFDakUyQixNQUFNL0I7d0JBQ05TLGFBQWFBO3dCQUNidUIsS0FBS1g7d0JBQ0xZLFNBQVNSO3dCQUNUUyxRQUFRUjs7Ozs7O29CQUdUL0IsWUFDRVcsQ0FBQUEsMEJBQ0MsOERBQUNuQixtREFBS0E7d0JBQ0pnRCxLQUFLOUMsa0RBQVdBO3dCQUNoQitDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLEtBQUk7d0JBQ0pWLFdBQVdwQyxHQUFHO3dCQUNkK0MsU0FBU2Y7Ozs7O2tEQUdYLDhEQUFDckMsbURBQUtBO3dCQUNKZ0QsS0FBSy9DLG1EQUFZQTt3QkFDakJnRCxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFJO3dCQUNKVixXQUFXcEMsR0FBRzt3QkFDZCtDLFNBQVNmOzs7OztpQ0FFYjs7Ozs7OzswQkFFSiw4REFBQ2dCO2dCQUNDWixXQUFXcEMsR0FBRztvQkFDWixpQkFBaUJZO29CQUNqQnFDLFFBQVFyQyxnQkFBZ0I7Z0JBQzFCOzBCQUVDQTs7Ozs7Ozs7Ozs7O0FBSVQsRUFBRTtHQWxJV1Y7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2F1dGgvdWktYXV0aC1pbnB1dC9BdXRoSW5wdXQuanN4PzMzZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9BdXRoSW5wdXQubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge1xuICBFWUVPRkZfSU1BR0UsXG4gIEVZRU9OX0lNQUdFLFxuICBFTUFJTF9SRUdFWCxcbiAgUEFTU1dPUkRfUkVHRVgsXG59IGZyb20gXCIuL2NvbnN0YW50XCI7XG5cbmNvbnN0IGN4ID0gY2xhc3NOYW1lcy5iaW5kKHN0eWxlcyk7XG5cbmV4cG9ydCBjb25zdCBBdXRoSW5wdXQgPSAoeyBwYXNzd29yZCwgY2hlY2ssIGlucHV0LCBzZXRJbnB1dCB9KSA9PiB7XG4gIGNvbnN0IGluaXRpYWxUeXBlID0gcGFzc3dvcmQgPyBcInBhc3N3b3JkXCIgOiBcImVtYWlsXCI7XG5cbiAgY29uc3QgW2lucHV0VHlwZSwgc2V0SW5wdXRUeXBlXSA9IHVzZVN0YXRlKGluaXRpYWxUeXBlKTtcbiAgY29uc3QgW2lzRm9jdXNlZCwgc2V0SXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCBbcGFzc3dvcmRJbnB1dCwgc2V0UGFzc3dvcmRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAvLyBwbGFjZWhvbGRlclxuICBjb25zdCBpc0lucHV0ID0gaW5wdXRUeXBlID09PSBcInBhc3N3b3JkXCIgfHwgaW5wdXRUeXBlID09PSBcInRleHRcIjtcbiAgY29uc3QgcGxhY2Vob2xkZXIgPSBpc0lucHV0XG4gICAgPyBjaGVja1xuICAgICAgPyBcIuu5hOuwgOuyiO2YuOyZgCDsnbzsuZjtlZjripQg6rCS7J2EIOyeheugpe2VtCDso7zshLjsmpRcIlxuICAgICAgOiBcIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbQg7KO87IS47JqUXCJcbiAgICA6IFwi7J2066mU7J287J2EIOyeheugpe2VtCDso7zshLjsmpRcIjtcblxuICAvLyDsnbTrqZTsnbwsIOu5hOuwgOuyiO2YuCDsnKDtmqjshLEg6rKA7IKsXG4gIGNvbnN0IGlzVmFsaWRFbWFpbCA9IChpbnB1dCkgPT4ge1xuICAgIHJldHVybiBFTUFJTF9SRUdFWC50ZXN0KGlucHV0KSA/IHRydWUgOiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBpc1ZhbGlkUGFzc3dvcmQgPSAoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gUEFTU1dPUkRfUkVHRVgudGVzdChpbnB1dCkgPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW1haWxFcnJvciA9IChlKSA9PiB7XG4gICAgaWYgKCFlLnRhcmdldC52YWx1ZSkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi7J2066mU7J287J2EIOyeheugpe2VtCDso7zshLjsmpRcIik7XG4gICAgfSBlbHNlIGlmICghaXNWYWxpZEVtYWlsKGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi7Jis67CU66W4IOydtOuplOydvCDso7zshozqsIAg7JWE64uZ64uI64ukXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBhc3N3b3JkRXJyb3IgPSAoZSkgPT4ge1xuICAgIGlmICghZS50YXJnZXQudmFsdWUpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbQg7KO87IS47JqUXCIpO1xuICAgIH0gZWxzZSBpZiAoIWlzVmFsaWRQYXNzd29yZChlLnRhcmdldC52YWx1ZSkpIHtcbiAgICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIuu5hOuwgOuyiO2YuOuKlCDsmIHrrLgsIOyIq+yekCDsobDtlakgOOyekCDsnbTsg4Eg7J6F66Cl7ZW0IOyjvOyEuOyalFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGVja1Bhc3N3b3JkRXJyb3IgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwi67mE6rWQ7ZWgIO2MqOyKpOybjOuTnCDsnbjtkotcIiwgaW5wdXQpO1xuICAgIGNvbnNvbGUubG9nKFwi67mE6rWQ7ZWgIO2MqOyKpOybjOuTnO2ZleyduCDsnbjtkotcIiwgZS50YXJnZXQudmFsdWUpO1xuICAgIGlmICghZS50YXJnZXQudmFsdWUpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbQg7KO87IS47JqUXCIpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudmFsdWUgIT09IGlucHV0KSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCLruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyVhOyalC5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcGFzc3dvcmQpIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBoYW5kbGVFbWFpbEVycm9yKTtcbiAgICB9IGVsc2UgaWYgKCFjaGVjaykge1xuICAgICAgaW5wdXRSZWYuY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZVBhc3N3b3JkRXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50Py5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlQ2hlY2tQYXNzd29yZEVycm9yKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coXCJwYXNzd29yZElucHV0XCIsIHBhc3N3b3JkSW5wdXQpO1xuICB9LCBbXSk7XG5cbiAgLy8g67mE67CA67KI7Zi4IOuztOydtOq4sC/siKjquLDquLBcbiAgY29uc3QgaGFuZGxlUGFzc3dvcmRTaG93biA9IChlKSA9PiB7XG4gICAgc2V0SXNWaXNpYmxlKCFpc1Zpc2libGUpO1xuICAgIGlzVmlzaWJsZSA/IHNldElucHV0VHlwZShcInBhc3N3b3JkXCIpIDogc2V0SW5wdXRUeXBlKFwidGV4dFwiKTtcbiAgfTtcblxuICAvLyBpbnB1dCBmb2N1c+yLnCDtjIzrnoAg7YWM65GQ66asXG4gIGNvbnN0IGhhbmRsZUZvY3VzID0gKCkgPT4ge1xuICAgIHNldElzRm9jdXNlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIHNldElzRm9jdXNlZChmYWxzZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcImNvbnRhaW5lclwiKX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goXCJpbnB1dFwiLCB7IGZvY3VzZWQ6IGlzRm9jdXNlZCwgZXJyb3I6IGVycm9yTWVzc2FnZSB9KX1cbiAgICAgICAgICB0eXBlPXtpbnB1dFR5cGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgb25Gb2N1cz17aGFuZGxlRm9jdXN9XG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAge3Bhc3N3b3JkICYmXG4gICAgICAgICAgKGlzVmlzaWJsZSA/IChcbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e0VZRU9OX0lNQUdFfVxuICAgICAgICAgICAgICB3aWR0aD17MTZ9XG4gICAgICAgICAgICAgIGhlaWdodD17MTZ9XG4gICAgICAgICAgICAgIGFsdD1cIuu5hOuwgOuyiO2YuCDrs7TsnbTquLAg7JWE7J207L2YXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChcImV5ZS1pY29uXCIpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQYXNzd29yZFNob3dufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17RVlFT0ZGX0lNQUdFfVxuICAgICAgICAgICAgICB3aWR0aD17MTZ9XG4gICAgICAgICAgICAgIGhlaWdodD17MTZ9XG4gICAgICAgICAgICAgIGFsdD1cIuu5hOuwgOuyiO2YuCDsiKjquYAg7JWE7J207L2YXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChcImV5ZS1pY29uXCIpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQYXNzd29yZFNob3dufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHBcbiAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IGVycm9yTWVzc2FnZSxcbiAgICAgICAgICBoaWRkZW46IGVycm9yTWVzc2FnZSA9PSBmYWxzZSxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsImNsYXNzTmFtZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkltYWdlIiwiRVlFT0ZGX0lNQUdFIiwiRVlFT05fSU1BR0UiLCJFTUFJTF9SRUdFWCIsIlBBU1NXT1JEX1JFR0VYIiwiY3giLCJiaW5kIiwiQXV0aElucHV0IiwicGFzc3dvcmQiLCJjaGVjayIsImlucHV0Iiwic2V0SW5wdXQiLCJpbml0aWFsVHlwZSIsImlucHV0VHlwZSIsInNldElucHV0VHlwZSIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsImlzSW5wdXQiLCJwbGFjZWhvbGRlciIsImlzVmFsaWRFbWFpbCIsInRlc3QiLCJpc1ZhbGlkUGFzc3dvcmQiLCJoYW5kbGVFbWFpbEVycm9yIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUGFzc3dvcmRFcnJvciIsImhhbmRsZUNoZWNrUGFzc3dvcmRFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dFJlZiIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlUGFzc3dvcmRTaG93biIsImhhbmRsZUZvY3VzIiwiaGFuZGxlQmx1ciIsImRpdiIsImNsYXNzTmFtZSIsImZvY3VzZWQiLCJlcnJvciIsInR5cGUiLCJyZWYiLCJvbkZvY3VzIiwib25CbHVyIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJvbkNsaWNrIiwicCIsImhpZGRlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/auth/ui-auth-input/AuthInput.jsx\n"));

/***/ })

});