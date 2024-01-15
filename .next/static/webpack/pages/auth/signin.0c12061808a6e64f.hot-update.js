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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthInput: function() { return /* binding */ AuthInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthInput.module.scss */ \"./src/auth/ui-auth-input/AuthInput.module.scss\");\n/* harmony import */ var _AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ \"./src/auth/ui-auth-input/constant.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default().bind((_AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5___default()));\nconst AuthInput = ({ password, check, input, setInput, placeholder })=>{\n    _s();\n    const initialType = password ? \"password\" : \"email\";\n    const [inputType, setInputType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialType);\n    const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // 이메일, 비밀번호 유효성 검사\n    const isValidEmail = (input)=>{\n        return _constant__WEBPACK_IMPORTED_MODULE_4__.EMAIL_REGEX.test(input) ? true : false;\n    };\n    const isValidPassword = (input)=>{\n        return _constant__WEBPACK_IMPORTED_MODULE_4__.PASSWORD_REGEX.test(input) ? true : false;\n    };\n    const handleEmailError = (e)=>{\n        if (!e.target.value) {\n            setErrorMessage(\"이메일을 입력해 주세요\");\n        } else if (!isValidEmail(e.target.value)) {\n            setErrorMessage(\"올바른 이메일 주소가 아닙니다\");\n        } else {\n            setErrorMessage(\"\");\n        }\n    };\n    const handlePasswordError = (e)=>{\n        if (!e.target.value) {\n            setErrorMessage(\"비밀번호를 입력해 주세요\");\n        } else if (!isValidPassword(e.target.value)) {\n            setInput(e.target.value);\n            setErrorMessage(\"비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요\");\n        } else {\n            setInput(e.target.value);\n            setErrorMessage(\"\");\n        }\n    };\n    const handleCheckPasswordError = (e)=>{\n        if (!e.target.value) {\n            setErrorMessage(\"비밀번호를 입력해 주세요\");\n        } else if (e.target.value !== input) {\n            setErrorMessage(\"비밀번호가 일치하지 않아요.\");\n        } else {\n            setErrorMessage(\"\");\n        }\n    };\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!password) {\n            inputRef.current?.addEventListener(\"focusout\", handleEmailError);\n        } else if (!check) {\n            inputRef.current?.addEventListener(\"focusout\", handlePasswordError);\n        } else {\n            inputRef.current?.addEventListener(\"focusout\", handleCheckPasswordError);\n        }\n    }, [\n        input\n    ]);\n    // 비밀번호 보이기/숨기기\n    const handlePasswordShown = (e)=>{\n        setIsVisible(!isVisible);\n        isVisible ? setInputType(\"password\") : setInputType(\"text\");\n    };\n    // input focus시 파란 테두리\n    const handleFocus = ()=>{\n        setIsFocused(true);\n    };\n    const handleBlur = ()=>{\n        setIsFocused(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cx(\"container\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: cx(\"input\", {\n                            focused: isFocused,\n                            error: errorMessage\n                        }),\n                        type: inputType,\n                        placeholder: placeholder,\n                        ref: inputRef,\n                        onFocus: handleFocus,\n                        onBlur: handleBlur\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    password && (isVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _constant__WEBPACK_IMPORTED_MODULE_4__.EYEON_IMAGE,\n                        width: 16,\n                        height: 16,\n                        alt: \"비밀번호 보이기 아이콘\",\n                        className: cx(\"eye-icon\"),\n                        onClick: handlePasswordShown\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _constant__WEBPACK_IMPORTED_MODULE_4__.EYEOFF_IMAGE,\n                        width: 16,\n                        height: 16,\n                        alt: \"비밀번호 숨김 아이콘\",\n                        className: cx(\"eye-icon\"),\n                        onClick: handlePasswordShown\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 13\n                    }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: cx({\n                    \"error-message\": errorMessage,\n                    hidden: errorMessage == false\n                }),\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthInput, \"shdv1XNd+cp+NB2Ve45JAIZ4IXA=\");\n_c = AuthInput;\nvar _c;\n$RefreshReg$(_c, \"AuthInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixNQUFNM0I7d0JBQ05GLGFBQWFBO3dCQUNiOEIsS0FBS1g7d0JBQ0xZLFNBQVNSO3dCQUNUUyxRQUFRUjs7Ozs7O29CQUVUNUIsWUFDRVksQ0FBQUEsMEJBQ0MsOERBQUNwQixtREFBS0E7d0JBQ0o2QyxLQUFLM0Msa0RBQVdBO3dCQUNoQjRDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLEtBQUk7d0JBQ0pWLFdBQVdqQyxHQUFHO3dCQUNkNEMsU0FBU2Y7Ozs7O2tEQUdYLDhEQUFDbEMsbURBQUtBO3dCQUNKNkMsS0FBSzVDLG1EQUFZQTt3QkFDakI2QyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFJO3dCQUNKVixXQUFXakMsR0FBRzt3QkFDZDRDLFNBQVNmOzs7OztpQ0FFYjs7Ozs7OzswQkFFSiw4REFBQ2dCO2dCQUNDWixXQUFXakMsR0FBRztvQkFDWixpQkFBaUJhO29CQUNqQmlDLFFBQVFqQyxnQkFBZ0I7Z0JBQzFCOzBCQUVDQTs7Ozs7Ozs7Ozs7O0FBSVQsRUFBRTtHQTNIV1g7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2F1dGgvdWktYXV0aC1pbnB1dC9BdXRoSW5wdXQuanN4PzMzZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9BdXRoSW5wdXQubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge1xuICBFWUVPRkZfSU1BR0UsXG4gIEVZRU9OX0lNQUdFLFxuICBFTUFJTF9SRUdFWCxcbiAgUEFTU1dPUkRfUkVHRVgsXG59IGZyb20gXCIuL2NvbnN0YW50XCI7XG5cbmNvbnN0IGN4ID0gY2xhc3NOYW1lcy5iaW5kKHN0eWxlcyk7XG5cbmV4cG9ydCBjb25zdCBBdXRoSW5wdXQgPSAoe1xuICBwYXNzd29yZCxcbiAgY2hlY2ssXG4gIGlucHV0LFxuICBzZXRJbnB1dCxcbiAgcGxhY2Vob2xkZXIsXG59KSA9PiB7XG4gIGNvbnN0IGluaXRpYWxUeXBlID0gcGFzc3dvcmQgPyBcInBhc3N3b3JkXCIgOiBcImVtYWlsXCI7XG5cbiAgY29uc3QgW2lucHV0VHlwZSwgc2V0SW5wdXRUeXBlXSA9IHVzZVN0YXRlKGluaXRpYWxUeXBlKTtcbiAgY29uc3QgW2lzRm9jdXNlZCwgc2V0SXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIOydtOuplOydvCwg67mE67CA67KI7Zi4IOycoO2aqOyEsSDqsoDsgqxcbiAgY29uc3QgaXNWYWxpZEVtYWlsID0gKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIEVNQUlMX1JFR0VYLnRlc3QoaW5wdXQpID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGlzVmFsaWRQYXNzd29yZCA9IChpbnB1dCkgPT4ge1xuICAgIHJldHVybiBQQVNTV09SRF9SRUdFWC50ZXN0KGlucHV0KSA/IHRydWUgOiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFbWFpbEVycm9yID0gKGUpID0+IHtcbiAgICBpZiAoIWUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCLsnbTrqZTsnbzsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalFwiKTtcbiAgICB9IGVsc2UgaWYgKCFpc1ZhbGlkRW1haWwoZS50YXJnZXQudmFsdWUpKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCLsmKzrsJTrpbgg7J2066mU7J28IOyjvOyGjOqwgCDslYTri5nri4jri6RcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUGFzc3dvcmRFcnJvciA9IChlKSA9PiB7XG4gICAgaWYgKCFlLnRhcmdldC52YWx1ZSkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi67mE67CA67KI7Zi466W8IOyeheugpe2VtCDso7zshLjsmpRcIik7XG4gICAgfSBlbHNlIGlmICghaXNWYWxpZFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi67mE67CA67KI7Zi464qUIOyYgeusuCwg7Iir7J6QIOyhsO2VqSA47J6QIOydtOyDgSDsnoXroKXtlbQg7KO87IS47JqUXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoZWNrUGFzc3dvcmRFcnJvciA9IChlKSA9PiB7XG4gICAgaWYgKCFlLnRhcmdldC52YWx1ZSkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi67mE67CA67KI7Zi466W8IOyeheugpe2VtCDso7zshLjsmpRcIik7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gaW5wdXQpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIuu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7JWE7JqULlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwYXNzd29yZCkge1xuICAgICAgaW5wdXRSZWYuY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZUVtYWlsRXJyb3IpO1xuICAgIH0gZWxzZSBpZiAoIWNoZWNrKSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50Py5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlUGFzc3dvcmRFcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBoYW5kbGVDaGVja1Bhc3N3b3JkRXJyb3IpO1xuICAgIH1cbiAgfSwgW2lucHV0XSk7XG5cbiAgLy8g67mE67CA67KI7Zi4IOuztOydtOq4sC/siKjquLDquLBcbiAgY29uc3QgaGFuZGxlUGFzc3dvcmRTaG93biA9IChlKSA9PiB7XG4gICAgc2V0SXNWaXNpYmxlKCFpc1Zpc2libGUpO1xuICAgIGlzVmlzaWJsZSA/IHNldElucHV0VHlwZShcInBhc3N3b3JkXCIpIDogc2V0SW5wdXRUeXBlKFwidGV4dFwiKTtcbiAgfTtcblxuICAvLyBpbnB1dCBmb2N1c+yLnCDtjIzrnoAg7YWM65GQ66asXG4gIGNvbnN0IGhhbmRsZUZvY3VzID0gKCkgPT4ge1xuICAgIHNldElzRm9jdXNlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIHNldElzRm9jdXNlZChmYWxzZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcImNvbnRhaW5lclwiKX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goXCJpbnB1dFwiLCB7IGZvY3VzZWQ6IGlzRm9jdXNlZCwgZXJyb3I6IGVycm9yTWVzc2FnZSB9KX1cbiAgICAgICAgICB0eXBlPXtpbnB1dFR5cGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgb25Gb2N1cz17aGFuZGxlRm9jdXN9XG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAvPlxuICAgICAgICB7cGFzc3dvcmQgJiZcbiAgICAgICAgICAoaXNWaXNpYmxlID8gKFxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17RVlFT05fSU1BR0V9XG4gICAgICAgICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNn1cbiAgICAgICAgICAgICAgYWx0PVwi67mE67CA67KI7Zi4IOuztOydtOq4sCDslYTsnbTsvZhcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFwiZXllLWljb25cIil9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBhc3N3b3JkU2hvd259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtFWUVPRkZfSU1BR0V9XG4gICAgICAgICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNn1cbiAgICAgICAgICAgICAgYWx0PVwi67mE67CA67KI7Zi4IOyIqOq5gCDslYTsnbTsvZhcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFwiZXllLWljb25cIil9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBhc3N3b3JkU2hvd259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8cFxuICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIGhpZGRlbjogZXJyb3JNZXNzYWdlID09IGZhbHNlLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAge2Vycm9yTWVzc2FnZX1cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiSW1hZ2UiLCJFWUVPRkZfSU1BR0UiLCJFWUVPTl9JTUFHRSIsIkVNQUlMX1JFR0VYIiwiUEFTU1dPUkRfUkVHRVgiLCJjeCIsImJpbmQiLCJBdXRoSW5wdXQiLCJwYXNzd29yZCIsImNoZWNrIiwiaW5wdXQiLCJzZXRJbnB1dCIsInBsYWNlaG9sZGVyIiwiaW5pdGlhbFR5cGUiLCJpbnB1dFR5cGUiLCJzZXRJbnB1dFR5cGUiLCJpc0ZvY3VzZWQiLCJzZXRJc0ZvY3VzZWQiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJpc1ZhbGlkRW1haWwiLCJ0ZXN0IiwiaXNWYWxpZFBhc3N3b3JkIiwiaGFuZGxlRW1haWxFcnJvciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVBhc3N3b3JkRXJyb3IiLCJoYW5kbGVDaGVja1Bhc3N3b3JkRXJyb3IiLCJpbnB1dFJlZiIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlUGFzc3dvcmRTaG93biIsImhhbmRsZUZvY3VzIiwiaGFuZGxlQmx1ciIsImRpdiIsImNsYXNzTmFtZSIsImZvY3VzZWQiLCJlcnJvciIsInR5cGUiLCJyZWYiLCJvbkZvY3VzIiwib25CbHVyIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJvbkNsaWNrIiwicCIsImhpZGRlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/auth/ui-auth-input/AuthInput.jsx\n"));

/***/ })

});