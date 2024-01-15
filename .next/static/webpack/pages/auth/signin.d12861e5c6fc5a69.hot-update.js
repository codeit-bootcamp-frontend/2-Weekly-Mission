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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthInput: function() { return /* binding */ AuthInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthInput.module.scss */ \"./src/auth/ui-auth-input/AuthInput.module.scss\");\n/* harmony import */ var _AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ \"./src/auth/ui-auth-input/constant.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default().bind((_AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5___default()));\nconst AuthInput = ({ password, check })=>{\n    _s();\n    const initialType = password ? \"password\" : \"email\";\n    const [inputType, setInputType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialType);\n    const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [passwordInput, setPasswordInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // placeholder\n    const isInput = inputType === \"password\" || inputType === \"text\";\n    const placeholder = isInput ? \"비밀번호를 입력해 주세요\" : \"이메일을 입력해 주세요\";\n    // 이메일, 비밀번호 유효성 검사\n    const isValidEmail = (input)=>{\n        return _constant__WEBPACK_IMPORTED_MODULE_4__.EMAIL_REGEX.test(input) ? true : false;\n    };\n    const isValidPassword = (input)=>{\n        return _constant__WEBPACK_IMPORTED_MODULE_4__.PASSWORD_REGEX.test(input) ? true : false;\n    };\n    const handleEmailError = (e)=>{\n        if (!e.target.value) {\n            setErrorMessage(\"이메일을 입력해 주세요\");\n        } else if (!isValidEmail(e.target.value)) {\n            setErrorMessage(\"올바른 이메일 주소가 아닙니다\");\n        } else {\n            setErrorMessage(\"\");\n        }\n    };\n    const handlePasswordError = (e)=>{\n        if (!e.target.value) {\n            setErrorMessage(\"비밀번호를 입력해 주세요\");\n        } else if (!isValidPassword(e.target.value)) {\n            setPasswordInput(e.target.value);\n            setErrorMessage(\"비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요\");\n        } else {\n            setPasswordInput(e.target.value);\n            setErrorMessage(\"\");\n        }\n    };\n    const handleCheckPasswordError = (e)=>{\n        if (!e.target.value) {\n            setErrorMessage(\"비밀번호를 입력해 주세요\");\n        } else if (e.target.value !== passwordInput) {\n            setErrorMessage(\"비밀번호가 일치하지 않아요.\");\n        } else {\n            setErrorMessage(\"\");\n        }\n    };\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    // useEffect(() => {\n    //   if (password && !check) setPasswordInput(inputRef.current.value);\n    // }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!password) {\n            inputRef.current?.addEventListener(\"focusout\", handleEmailError);\n        } else if (!check) {\n            inputRef.current?.addEventListener(\"focusout\", handlePasswordError);\n        } else {\n            inputRef.current?.addEventListener(\"focusout\", handleCheckPasswordError);\n        }\n    }, [\n        passwordInput\n    ]);\n    // 비밀번호 보이기/숨기기\n    const handlePasswordShown = (e)=>{\n        setIsVisible(!isVisible);\n        isVisible ? setInputType(\"password\") : setInputType(\"text\");\n    };\n    // input focus시 파란 테두리\n    const handleFocus = ()=>{\n        setIsFocused(true);\n    };\n    const handleBlur = ()=>{\n        setIsFocused(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cx(\"container\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: cx(\"input\", {\n                            focused: isFocused,\n                            error: errorMessage\n                        }),\n                        type: inputType,\n                        placeholder: placeholder,\n                        ref: inputRef,\n                        onFocus: handleFocus,\n                        onBlur: handleBlur\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    password && (isVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _constant__WEBPACK_IMPORTED_MODULE_4__.EYEON_IMAGE,\n                        width: 16,\n                        height: 16,\n                        alt: \"비밀번호 보이기 아이콘\",\n                        className: cx(\"eye-icon\"),\n                        onClick: handlePasswordShown\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _constant__WEBPACK_IMPORTED_MODULE_4__.EYEOFF_IMAGE,\n                        width: 16,\n                        height: 16,\n                        alt: \"비밀번호 숨김 아이콘\",\n                        className: cx(\"eye-icon\"),\n                        onClick: handlePasswordShown\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 124,\n                        columnNumber: 13\n                    }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: cx({\n                    \"error-message\": errorMessage,\n                    hidden: errorMessage == false\n                }),\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthInput, \"mggWOPwQ/hOzLlZxlBfO3y2yUhQ=\");\n_c = AuthInput;\nvar _c;\n$RefreshReg$(_c, \"AuthInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFCQUNFLDhEQUFDeUI7OzBCQUNDLDhEQUFDQTtnQkFBSUMsV0FBV25DLEdBQUc7O2tDQUNqQiw4REFBQ21CO3dCQUNDZ0IsV0FBV25DLEdBQUcsU0FBUzs0QkFBRW9DLFNBQVM1Qjs0QkFBVzZCLE9BQU8zQjt3QkFBYTt3QkFDakU0QixNQUFNaEM7d0JBQ05XLGFBQWFBO3dCQUNic0IsS0FBS1g7d0JBQ0xZLFNBQVNSO3dCQUNUUyxRQUFRUjs7Ozs7O29CQUdUOUIsWUFDRVMsQ0FBQUEsMEJBQ0MsOERBQUNqQixtREFBS0E7d0JBQ0orQyxLQUFLN0Msa0RBQVdBO3dCQUNoQjhDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLEtBQUk7d0JBQ0pWLFdBQVduQyxHQUFHO3dCQUNkOEMsU0FBU2Y7Ozs7O2tEQUdYLDhEQUFDcEMsbURBQUtBO3dCQUNKK0MsS0FBSzlDLG1EQUFZQTt3QkFDakIrQyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFJO3dCQUNKVixXQUFXbkMsR0FBRzt3QkFDZDhDLFNBQVNmOzs7OztpQ0FFYjs7Ozs7OzswQkFFSiw4REFBQ2dCO2dCQUNDWixXQUFXbkMsR0FBRztvQkFDWixpQkFBaUJVO29CQUNqQnNDLFFBQVF0QyxnQkFBZ0I7Z0JBQzFCOzBCQUVDQTs7Ozs7Ozs7Ozs7O0FBSVQsRUFBRTtHQWxJV1I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2F1dGgvdWktYXV0aC1pbnB1dC9BdXRoSW5wdXQuanN4PzMzZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9BdXRoSW5wdXQubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge1xuICBFWUVPRkZfSU1BR0UsXG4gIEVZRU9OX0lNQUdFLFxuICBFTUFJTF9SRUdFWCxcbiAgUEFTU1dPUkRfUkVHRVgsXG59IGZyb20gXCIuL2NvbnN0YW50XCI7XG5cbmNvbnN0IGN4ID0gY2xhc3NOYW1lcy5iaW5kKHN0eWxlcyk7XG5cbmV4cG9ydCBjb25zdCBBdXRoSW5wdXQgPSAoeyBwYXNzd29yZCwgY2hlY2sgfSkgPT4ge1xuICBjb25zdCBpbml0aWFsVHlwZSA9IHBhc3N3b3JkID8gXCJwYXNzd29yZFwiIDogXCJlbWFpbFwiO1xuXG4gIGNvbnN0IFtpbnB1dFR5cGUsIHNldElucHV0VHlwZV0gPSB1c2VTdGF0ZShpbml0aWFsVHlwZSk7XG4gIGNvbnN0IFtpc0ZvY3VzZWQsIHNldElzRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Bhc3N3b3JkSW5wdXQsIHNldFBhc3N3b3JkSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gcGxhY2Vob2xkZXJcbiAgY29uc3QgaXNJbnB1dCA9IGlucHV0VHlwZSA9PT0gXCJwYXNzd29yZFwiIHx8IGlucHV0VHlwZSA9PT0gXCJ0ZXh0XCI7XG4gIGNvbnN0IHBsYWNlaG9sZGVyID0gaXNJbnB1dFxuICAgID8gXCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalFwiXG4gICAgOiBcIuydtOuplOydvOydhCDsnoXroKXtlbQg7KO87IS47JqUXCI7XG5cbiAgLy8g7J2066mU7J28LCDruYTrsIDrsojtmLgg7Jyg7Zqo7ISxIOqygOyCrFxuICBjb25zdCBpc1ZhbGlkRW1haWwgPSAoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gRU1BSUxfUkVHRVgudGVzdChpbnB1dCkgPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaXNWYWxpZFBhc3N3b3JkID0gKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIFBBU1NXT1JEX1JFR0VYLnRlc3QoaW5wdXQpID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVtYWlsRXJyb3IgPSAoZSkgPT4ge1xuICAgIGlmICghZS50YXJnZXQudmFsdWUpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIuydtOuplOydvOydhCDsnoXroKXtlbQg7KO87IS47JqUXCIpO1xuICAgIH0gZWxzZSBpZiAoIWlzVmFsaWRFbWFpbChlLnRhcmdldC52YWx1ZSkpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIuyYrOuwlOuluCDsnbTrqZTsnbwg7KO87IaM6rCAIOyVhOuLmeuLiOuLpFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVQYXNzd29yZEVycm9yID0gKGUpID0+IHtcbiAgICBpZiAoIWUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalFwiKTtcbiAgICB9IGVsc2UgaWYgKCFpc1ZhbGlkUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpKSB7XG4gICAgICBzZXRQYXNzd29yZElucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIuu5hOuwgOuyiO2YuOuKlCDsmIHrrLgsIOyIq+yekCDsobDtlakgOOyekCDsnbTsg4Eg7J6F66Cl7ZW0IOyjvOyEuOyalFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0UGFzc3dvcmRJbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoZWNrUGFzc3dvcmRFcnJvciA9IChlKSA9PiB7XG4gICAgaWYgKCFlLnRhcmdldC52YWx1ZSkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi67mE67CA67KI7Zi466W8IOyeheugpe2VtCDso7zshLjsmpRcIik7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gcGFzc3dvcmRJbnB1dCkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrslYTsmpQuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAocGFzc3dvcmQgJiYgIWNoZWNrKSBzZXRQYXNzd29yZElucHV0KGlucHV0UmVmLmN1cnJlbnQudmFsdWUpO1xuICAvLyB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXBhc3N3b3JkKSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50Py5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlRW1haWxFcnJvcik7XG4gICAgfSBlbHNlIGlmICghY2hlY2spIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBoYW5kbGVQYXNzd29yZEVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRSZWYuY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZUNoZWNrUGFzc3dvcmRFcnJvcik7XG4gICAgfVxuICB9LCBbcGFzc3dvcmRJbnB1dF0pO1xuXG4gIC8vIOu5hOuwgOuyiO2YuCDrs7TsnbTquLAv7Iio6riw6riwXG4gIGNvbnN0IGhhbmRsZVBhc3N3b3JkU2hvd24gPSAoZSkgPT4ge1xuICAgIHNldElzVmlzaWJsZSghaXNWaXNpYmxlKTtcbiAgICBpc1Zpc2libGUgPyBzZXRJbnB1dFR5cGUoXCJwYXNzd29yZFwiKSA6IHNldElucHV0VHlwZShcInRleHRcIik7XG4gIH07XG5cbiAgLy8gaW5wdXQgZm9jdXPsi5wg7YyM656AIO2FjOuRkOumrFxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICBzZXRJc0ZvY3VzZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBzZXRJc0ZvY3VzZWQoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcImNvbnRhaW5lclwiKX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goXCJpbnB1dFwiLCB7IGZvY3VzZWQ6IGlzRm9jdXNlZCwgZXJyb3I6IGVycm9yTWVzc2FnZSB9KX1cbiAgICAgICAgICB0eXBlPXtpbnB1dFR5cGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgb25Gb2N1cz17aGFuZGxlRm9jdXN9XG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAge3Bhc3N3b3JkICYmXG4gICAgICAgICAgKGlzVmlzaWJsZSA/IChcbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e0VZRU9OX0lNQUdFfVxuICAgICAgICAgICAgICB3aWR0aD17MTZ9XG4gICAgICAgICAgICAgIGhlaWdodD17MTZ9XG4gICAgICAgICAgICAgIGFsdD1cIuu5hOuwgOuyiO2YuCDrs7TsnbTquLAg7JWE7J207L2YXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChcImV5ZS1pY29uXCIpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQYXNzd29yZFNob3dufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17RVlFT0ZGX0lNQUdFfVxuICAgICAgICAgICAgICB3aWR0aD17MTZ9XG4gICAgICAgICAgICAgIGhlaWdodD17MTZ9XG4gICAgICAgICAgICAgIGFsdD1cIuu5hOuwgOuyiO2YuCDsiKjquYAg7JWE7J207L2YXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChcImV5ZS1pY29uXCIpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQYXNzd29yZFNob3dufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHBcbiAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IGVycm9yTWVzc2FnZSxcbiAgICAgICAgICBoaWRkZW46IGVycm9yTWVzc2FnZSA9PSBmYWxzZSxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsImNsYXNzTmFtZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkltYWdlIiwiRVlFT0ZGX0lNQUdFIiwiRVlFT05fSU1BR0UiLCJFTUFJTF9SRUdFWCIsIlBBU1NXT1JEX1JFR0VYIiwiY3giLCJiaW5kIiwiQXV0aElucHV0IiwicGFzc3dvcmQiLCJjaGVjayIsImluaXRpYWxUeXBlIiwiaW5wdXRUeXBlIiwic2V0SW5wdXRUeXBlIiwiaXNGb2N1c2VkIiwic2V0SXNGb2N1c2VkIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwicGFzc3dvcmRJbnB1dCIsInNldFBhc3N3b3JkSW5wdXQiLCJpc0lucHV0IiwicGxhY2Vob2xkZXIiLCJpc1ZhbGlkRW1haWwiLCJpbnB1dCIsInRlc3QiLCJpc1ZhbGlkUGFzc3dvcmQiLCJoYW5kbGVFbWFpbEVycm9yIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUGFzc3dvcmRFcnJvciIsImhhbmRsZUNoZWNrUGFzc3dvcmRFcnJvciIsImlucHV0UmVmIiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVQYXNzd29yZFNob3duIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVCbHVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9jdXNlZCIsImVycm9yIiwidHlwZSIsInJlZiIsIm9uRm9jdXMiLCJvbkJsdXIiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIm9uQ2xpY2siLCJwIiwiaGlkZGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/auth/ui-auth-input/AuthInput.jsx\n"));

/***/ })

});