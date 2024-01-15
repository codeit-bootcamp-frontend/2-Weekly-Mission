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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthInput: function() { return /* binding */ AuthInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthInput.module.scss */ \"./src/auth/ui-auth-input/AuthInput.module.scss\");\n/* harmony import */ var _AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ \"./src/auth/ui-auth-input/constant.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default().bind((_AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5___default()));\nconst AuthInput = ({ password, check, input, setInput })=>{\n    _s();\n    const initialType = password ? \"password\" : \"email\";\n    const [inputType, setInputType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialType);\n    const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // const [passwordInput, setPasswordInput] = useState(\"\");\n    // placeholder\n    const isInput = inputType === \"password\" || inputType === \"text\";\n    const placeholder = isInput ? check ? \"비밀번호와 일치하는 값을 입력해 주세요\" : \"비밀번호를 입력해 주세요\" : \"이메일을 입력해 주세요\";\n    // 이메일, 비밀번호 유효성 검사\n    const isValidEmail = (input)=>{\n        return _constant__WEBPACK_IMPORTED_MODULE_4__.EMAIL_REGEX.test(input) ? true : false;\n    };\n    const isValidPassword = (input)=>{\n        return _constant__WEBPACK_IMPORTED_MODULE_4__.PASSWORD_REGEX.test(input) ? true : false;\n    };\n    const handleEmailError = (e)=>{\n        if (!e.target.value) {\n            setErrorMessage(\"이메일을 입력해 주세요\");\n        } else if (!isValidEmail(e.target.value)) {\n            setErrorMessage(\"올바른 이메일 주소가 아닙니다\");\n        } else {\n            setErrorMessage(\"\");\n        }\n    };\n    const handlePasswordError = (e)=>{\n        if (!e.target.value) {\n            setErrorMessage(\"비밀번호를 입력해 주세요\");\n        } else if (!isValidPassword(e.target.value)) {\n            setInput(e.target.value);\n            setErrorMessage(\"비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요\");\n        } else {\n            setInput(e.target.value);\n            setErrorMessage(\"\");\n        }\n    };\n    const handleCheckPasswordError = (e)=>{\n        console.log(\"value\", e.target.value);\n        console.log(\"passwordinput\", passwordInput);\n        if (!e.target.value) {\n            setErrorMessage(\"비밀번호를 입력해 주세요\");\n        } else if (e.target.value !== passwordInput) {\n            setErrorMessage(\"비밀번호가 일치하지 않아요.\");\n        } else {\n            setErrorMessage(\"\");\n        }\n    };\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!password) {\n            inputRef.current?.addEventListener(\"focusout\", handleEmailError);\n        } else if (!check) {\n            inputRef.current?.addEventListener(\"focusout\", handlePasswordError);\n        } else {\n            inputRef.current?.addEventListener(\"focusout\", handleCheckPasswordError);\n        }\n    // console.log(\"passwordInput\", passwordInput);\n    }, []);\n    // 비밀번호 보이기/숨기기\n    const handlePasswordShown = (e)=>{\n        setIsVisible(!isVisible);\n        isVisible ? setInputType(\"password\") : setInputType(\"text\");\n    };\n    // input focus시 파란 테두리\n    const handleFocus = ()=>{\n        setIsFocused(true);\n    };\n    const handleBlur = ()=>{\n        setIsFocused(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cx(\"container\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: cx(\"input\", {\n                            focused: isFocused,\n                            error: errorMessage\n                        }),\n                        type: inputType,\n                        placeholder: placeholder,\n                        ref: inputRef,\n                        onFocus: handleFocus,\n                        onBlur: handleBlur\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    password && (isVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _constant__WEBPACK_IMPORTED_MODULE_4__.EYEON_IMAGE,\n                        width: 16,\n                        height: 16,\n                        alt: \"비밀번호 보이기 아이콘\",\n                        className: cx(\"eye-icon\"),\n                        onClick: handlePasswordShown\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _constant__WEBPACK_IMPORTED_MODULE_4__.EYEOFF_IMAGE,\n                        width: 16,\n                        height: 16,\n                        alt: \"비밀번호 숨김 아이콘\",\n                        className: cx(\"eye-icon\"),\n                        onClick: handlePasswordShown\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 124,\n                        columnNumber: 13\n                    }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: cx({\n                    \"error-message\": errorMessage,\n                    hidden: errorMessage == false\n                }),\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthInput, \"shdv1XNd+cp+NB2Ve45JAIZ4IXA=\");\n_c = AuthInput;\nvar _c;\n$RefreshReg$(_c, \"AuthInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7SUFDZjtJQUVBLE1BQU13QixhQUFhO1FBQ2pCeEIsYUFBYTtJQUNmO0lBQ0EscUJBQ0UsOERBQUN5Qjs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFXckMsR0FBRzs7a0NBQ2pCLDhEQUFDSzt3QkFDQ2dDLFdBQVdyQyxHQUFHLFNBQVM7NEJBQUVzQyxTQUFTNUI7NEJBQVc2QixPQUFPM0I7d0JBQWE7d0JBQ2pFNEIsTUFBTWhDO3dCQUNOUyxhQUFhQTt3QkFDYndCLEtBQUtYO3dCQUNMWSxTQUFTUjt3QkFDVFMsUUFBUVI7Ozs7OztvQkFHVGhDLFlBQ0VXLENBQUFBLDBCQUNDLDhEQUFDbkIsbURBQUtBO3dCQUNKaUQsS0FBSy9DLGtEQUFXQTt3QkFDaEJnRCxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFJO3dCQUNKVixXQUFXckMsR0FBRzt3QkFDZGdELFNBQVNmOzs7OztrREFHWCw4REFBQ3RDLG1EQUFLQTt3QkFDSmlELEtBQUtoRCxtREFBWUE7d0JBQ2pCaUQsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsS0FBSTt3QkFDSlYsV0FBV3JDLEdBQUc7d0JBQ2RnRCxTQUFTZjs7Ozs7aUNBRWI7Ozs7Ozs7MEJBRUosOERBQUNnQjtnQkFDQ1osV0FBV3JDLEdBQUc7b0JBQ1osaUJBQWlCWTtvQkFDakJzQyxRQUFRdEMsZ0JBQWdCO2dCQUMxQjswQkFFQ0E7Ozs7Ozs7Ozs7OztBQUlULEVBQUU7R0FsSVdWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hdXRoL3VpLWF1dGgtaW5wdXQvQXV0aElucHV0LmpzeD8zM2RmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQXV0aElucHV0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHtcbiAgRVlFT0ZGX0lNQUdFLFxuICBFWUVPTl9JTUFHRSxcbiAgRU1BSUxfUkVHRVgsXG4gIFBBU1NXT1JEX1JFR0VYLFxufSBmcm9tIFwiLi9jb25zdGFudFwiO1xuXG5jb25zdCBjeCA9IGNsYXNzTmFtZXMuYmluZChzdHlsZXMpO1xuXG5leHBvcnQgY29uc3QgQXV0aElucHV0ID0gKHsgcGFzc3dvcmQsIGNoZWNrLCBpbnB1dCwgc2V0SW5wdXQgfSkgPT4ge1xuICBjb25zdCBpbml0aWFsVHlwZSA9IHBhc3N3b3JkID8gXCJwYXNzd29yZFwiIDogXCJlbWFpbFwiO1xuXG4gIGNvbnN0IFtpbnB1dFR5cGUsIHNldElucHV0VHlwZV0gPSB1c2VTdGF0ZShpbml0aWFsVHlwZSk7XG4gIGNvbnN0IFtpc0ZvY3VzZWQsIHNldElzRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gY29uc3QgW3Bhc3N3b3JkSW5wdXQsIHNldFBhc3N3b3JkSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gcGxhY2Vob2xkZXJcbiAgY29uc3QgaXNJbnB1dCA9IGlucHV0VHlwZSA9PT0gXCJwYXNzd29yZFwiIHx8IGlucHV0VHlwZSA9PT0gXCJ0ZXh0XCI7XG4gIGNvbnN0IHBsYWNlaG9sZGVyID0gaXNJbnB1dFxuICAgID8gY2hlY2tcbiAgICAgID8gXCLruYTrsIDrsojtmLjsmYAg7J287LmY7ZWY64qUIOqwkuydhCDsnoXroKXtlbQg7KO87IS47JqUXCJcbiAgICAgIDogXCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalFwiXG4gICAgOiBcIuydtOuplOydvOydhCDsnoXroKXtlbQg7KO87IS47JqUXCI7XG5cbiAgLy8g7J2066mU7J28LCDruYTrsIDrsojtmLgg7Jyg7Zqo7ISxIOqygOyCrFxuICBjb25zdCBpc1ZhbGlkRW1haWwgPSAoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gRU1BSUxfUkVHRVgudGVzdChpbnB1dCkgPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaXNWYWxpZFBhc3N3b3JkID0gKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIFBBU1NXT1JEX1JFR0VYLnRlc3QoaW5wdXQpID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVtYWlsRXJyb3IgPSAoZSkgPT4ge1xuICAgIGlmICghZS50YXJnZXQudmFsdWUpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIuydtOuplOydvOydhCDsnoXroKXtlbQg7KO87IS47JqUXCIpO1xuICAgIH0gZWxzZSBpZiAoIWlzVmFsaWRFbWFpbChlLnRhcmdldC52YWx1ZSkpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIuyYrOuwlOuluCDsnbTrqZTsnbwg7KO87IaM6rCAIOyVhOuLmeuLiOuLpFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVQYXNzd29yZEVycm9yID0gKGUpID0+IHtcbiAgICBpZiAoIWUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalFwiKTtcbiAgICB9IGVsc2UgaWYgKCFpc1ZhbGlkUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpKSB7XG4gICAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCLruYTrsIDrsojtmLjripQg7JiB66y4LCDsiKvsnpAg7KGw7ZWpIDjsnpAg7J207IOBIOyeheugpe2VtCDso7zshLjsmpRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tQYXNzd29yZEVycm9yID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInZhbHVlXCIsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkaW5wdXRcIiwgcGFzc3dvcmRJbnB1dCk7XG4gICAgaWYgKCFlLnRhcmdldC52YWx1ZSkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi67mE67CA67KI7Zi466W8IOyeheugpe2VtCDso7zshLjsmpRcIik7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gcGFzc3dvcmRJbnB1dCkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrslYTsmpQuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXBhc3N3b3JkKSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50Py5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlRW1haWxFcnJvcik7XG4gICAgfSBlbHNlIGlmICghY2hlY2spIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBoYW5kbGVQYXNzd29yZEVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRSZWYuY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZUNoZWNrUGFzc3dvcmRFcnJvcik7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwicGFzc3dvcmRJbnB1dFwiLCBwYXNzd29yZElucHV0KTtcbiAgfSwgW10pO1xuXG4gIC8vIOu5hOuwgOuyiO2YuCDrs7TsnbTquLAv7Iio6riw6riwXG4gIGNvbnN0IGhhbmRsZVBhc3N3b3JkU2hvd24gPSAoZSkgPT4ge1xuICAgIHNldElzVmlzaWJsZSghaXNWaXNpYmxlKTtcbiAgICBpc1Zpc2libGUgPyBzZXRJbnB1dFR5cGUoXCJwYXNzd29yZFwiKSA6IHNldElucHV0VHlwZShcInRleHRcIik7XG4gIH07XG5cbiAgLy8gaW5wdXQgZm9jdXPsi5wg7YyM656AIO2FjOuRkOumrFxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICBzZXRJc0ZvY3VzZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBzZXRJc0ZvY3VzZWQoZmFsc2UpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJjb250YWluZXJcIil9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e2N4KFwiaW5wdXRcIiwgeyBmb2N1c2VkOiBpc0ZvY3VzZWQsIGVycm9yOiBlcnJvck1lc3NhZ2UgfSl9XG4gICAgICAgICAgdHlwZT17aW5wdXRUeXBlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUZvY3VzfVxuICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlUGFzc3dvcmRDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIHtwYXNzd29yZCAmJlxuICAgICAgICAgIChpc1Zpc2libGUgPyAoXG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtFWUVPTl9JTUFHRX1cbiAgICAgICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezE2fVxuICAgICAgICAgICAgICBhbHQ9XCLruYTrsIDrsojtmLgg67O07J206riwIOyVhOydtOy9mFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXCJleWUtaWNvblwiKX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUGFzc3dvcmRTaG93bn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e0VZRU9GRl9JTUFHRX1cbiAgICAgICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezE2fVxuICAgICAgICAgICAgICBhbHQ9XCLruYTrsIDrsojtmLgg7Iio6rmAIOyVhOydtOy9mFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXCJleWUtaWNvblwiKX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUGFzc3dvcmRTaG93bn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwXG4gICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgaGlkZGVuOiBlcnJvck1lc3NhZ2UgPT0gZmFsc2UsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICB7ZXJyb3JNZXNzYWdlfVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjbGFzc05hbWVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJJbWFnZSIsIkVZRU9GRl9JTUFHRSIsIkVZRU9OX0lNQUdFIiwiRU1BSUxfUkVHRVgiLCJQQVNTV09SRF9SRUdFWCIsImN4IiwiYmluZCIsIkF1dGhJbnB1dCIsInBhc3N3b3JkIiwiY2hlY2siLCJpbnB1dCIsInNldElucHV0IiwiaW5pdGlhbFR5cGUiLCJpbnB1dFR5cGUiLCJzZXRJbnB1dFR5cGUiLCJpc0ZvY3VzZWQiLCJzZXRJc0ZvY3VzZWQiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJpc0lucHV0IiwicGxhY2Vob2xkZXIiLCJpc1ZhbGlkRW1haWwiLCJ0ZXN0IiwiaXNWYWxpZFBhc3N3b3JkIiwiaGFuZGxlRW1haWxFcnJvciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVBhc3N3b3JkRXJyb3IiLCJoYW5kbGVDaGVja1Bhc3N3b3JkRXJyb3IiLCJjb25zb2xlIiwibG9nIiwicGFzc3dvcmRJbnB1dCIsImlucHV0UmVmIiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVQYXNzd29yZFNob3duIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVCbHVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9jdXNlZCIsImVycm9yIiwidHlwZSIsInJlZiIsIm9uRm9jdXMiLCJvbkJsdXIiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIm9uQ2xpY2siLCJwIiwiaGlkZGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/auth/ui-auth-input/AuthInput.jsx\n"));

/***/ })

});