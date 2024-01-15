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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthInput: function() { return /* binding */ AuthInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthInput.module.scss */ \"./src/auth/ui-auth-input/AuthInput.module.scss\");\n/* harmony import */ var _AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ \"./src/auth/ui-auth-input/constant.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default().bind((_AuthInput_module_scss__WEBPACK_IMPORTED_MODULE_5___default()));\nconst AuthInput = ({ password, check })=>{\n    _s();\n    const initialType = password ? \"password\" : \"email\";\n    const [inputType, setInputType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialType);\n    const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [passwordInput, setPasswordInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // placeholder\n    const isInput = inputType === \"password\" || inputType === \"text\";\n    const placeholder = isInput ? \"비밀번호를 입력해 주세요\" : \"이메일을 입력해 주세요\";\n    // 이메일, 비밀번호 유효성 검사\n    const isValidEmail = (input)=>{\n        return _constant__WEBPACK_IMPORTED_MODULE_4__.EMAIL_REGEX.test(input) ? true : false;\n    };\n    const isValidPassword = (input)=>{\n        return _constant__WEBPACK_IMPORTED_MODULE_4__.PASSWORD_REGEX.test(input) ? true : false;\n    };\n    const handleEmailError = (e)=>{\n        if (!e.target.value) {\n            setErrorMessage(\"이메일을 입력해 주세요\");\n        } else if (!isValidEmail(e.target.value)) {\n            setErrorMessage(\"올바른 이메일 주소가 아닙니다\");\n        } else {\n            setErrorMessage(\"\");\n        }\n    };\n    const handlePasswordError = (e)=>{\n        if (!e.target.value) {\n            setErrorMessage(\"비밀번호를 입력해 주세요\");\n        } else if (!isValidPassword(e.target.value)) {\n            setErrorMessage(\"비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요\");\n        } else {\n            setErrorMessage(\"\");\n        }\n    };\n    const handleCheckPasswordError = (e)=>{\n        if (!e.target.value) {\n            setErrorMessage(\"비밀번호를 입력해 주세요\");\n        } else if (e.target.value !== passwordInput) {\n            console.log(\"PI\", passwordInput);\n            setErrorMessage(\"비밀번호가 일치하지 않아요.\");\n        } else {\n            setErrorMessage(\"\");\n        }\n    };\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!password) {\n            inputRef.current?.addEventListener(\"focusout\", handleEmailError);\n        } else if (!check) {\n            setPasswordInput(inputRef.current.value);\n            inputRef.current?.addEventListener(\"focusout\", handlePasswordError);\n        } else {\n            setPasswordInput(inputRef.current.value);\n            inputRef.current?.addEventListener(\"focusout\", handleCheckPasswordError);\n        }\n    }, [\n        passwordInput\n    ]);\n    // 비밀번호 보이기/숨기기\n    const handlePasswordShown = (e)=>{\n        setIsVisible(!isVisible);\n        isVisible ? setInputType(\"password\") : setInputType(\"text\");\n    };\n    // input focus시 파란 테두리\n    const handleFocus = ()=>{\n        setIsFocused(true);\n    };\n    const handleBlur = ()=>{\n        setIsFocused(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cx(\"container\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: cx(\"input\", {\n                            focused: isFocused,\n                            error: errorMessage\n                        }),\n                        type: inputType,\n                        placeholder: placeholder,\n                        ref: inputRef,\n                        onFocus: handleFocus,\n                        onBlur: handleBlur\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined),\n                    password && (isVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _constant__WEBPACK_IMPORTED_MODULE_4__.EYEON_IMAGE,\n                        width: 16,\n                        height: 16,\n                        alt: \"비밀번호 보이기 아이콘\",\n                        className: cx(\"eye-icon\"),\n                        onClick: handlePasswordShown\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _constant__WEBPACK_IMPORTED_MODULE_4__.EYEOFF_IMAGE,\n                        width: 16,\n                        height: 16,\n                        alt: \"비밀번호 숨김 아이콘\",\n                        className: cx(\"eye-icon\"),\n                        onClick: handlePasswordShown\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                        lineNumber: 120,\n                        columnNumber: 13\n                    }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: cx({\n                    \"error-message\": errorMessage,\n                    hidden: errorMessage == false\n                }),\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-input/AuthInput.jsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthInput, \"mggWOPwQ/hOzLlZxlBfO3y2yUhQ=\");\n_c = AuthInput;\nvar _c;\n$RefreshReg$(_c, \"AuthInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQzJCOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVdyQyxHQUFHOztrQ0FDakIsOERBQUNtQjt3QkFDQ2tCLFdBQVdyQyxHQUFHLFNBQVM7NEJBQUVzQyxTQUFTOUI7NEJBQVcrQixPQUFPN0I7d0JBQWE7d0JBQ2pFOEIsTUFBTWxDO3dCQUNOVyxhQUFhQTt3QkFDYndCLEtBQUtYO3dCQUNMWSxTQUFTUjt3QkFDVFMsUUFBUVI7Ozs7OztvQkFFVGhDLFlBQ0VTLENBQUFBLDBCQUNDLDhEQUFDakIsbURBQUtBO3dCQUNKaUQsS0FBSy9DLGtEQUFXQTt3QkFDaEJnRCxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFJO3dCQUNKVixXQUFXckMsR0FBRzt3QkFDZGdELFNBQVNmOzs7OztrREFHWCw4REFBQ3RDLG1EQUFLQTt3QkFDSmlELEtBQUtoRCxtREFBWUE7d0JBQ2pCaUQsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsS0FBSTt3QkFDSlYsV0FBV3JDLEdBQUc7d0JBQ2RnRCxTQUFTZjs7Ozs7aUNBRWI7Ozs7Ozs7MEJBRUosOERBQUNnQjtnQkFDQ1osV0FBV3JDLEdBQUc7b0JBQ1osaUJBQWlCVTtvQkFDakJ3QyxRQUFReEMsZ0JBQWdCO2dCQUMxQjswQkFFQ0E7Ozs7Ozs7Ozs7OztBQUlULEVBQUU7R0E5SFdSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hdXRoL3VpLWF1dGgtaW5wdXQvQXV0aElucHV0LmpzeD8zM2RmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQXV0aElucHV0Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHtcbiAgRVlFT0ZGX0lNQUdFLFxuICBFWUVPTl9JTUFHRSxcbiAgRU1BSUxfUkVHRVgsXG4gIFBBU1NXT1JEX1JFR0VYLFxufSBmcm9tIFwiLi9jb25zdGFudFwiO1xuXG5jb25zdCBjeCA9IGNsYXNzTmFtZXMuYmluZChzdHlsZXMpO1xuXG5leHBvcnQgY29uc3QgQXV0aElucHV0ID0gKHsgcGFzc3dvcmQsIGNoZWNrIH0pID0+IHtcbiAgY29uc3QgaW5pdGlhbFR5cGUgPSBwYXNzd29yZCA/IFwicGFzc3dvcmRcIiA6IFwiZW1haWxcIjtcblxuICBjb25zdCBbaW5wdXRUeXBlLCBzZXRJbnB1dFR5cGVdID0gdXNlU3RhdGUoaW5pdGlhbFR5cGUpO1xuICBjb25zdCBbaXNGb2N1c2VkLCBzZXRJc0ZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwYXNzd29yZElucHV0LCBzZXRQYXNzd29yZElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vIHBsYWNlaG9sZGVyXG4gIGNvbnN0IGlzSW5wdXQgPSBpbnB1dFR5cGUgPT09IFwicGFzc3dvcmRcIiB8fCBpbnB1dFR5cGUgPT09IFwidGV4dFwiO1xuICBjb25zdCBwbGFjZWhvbGRlciA9IGlzSW5wdXRcbiAgICA/IFwi67mE67CA67KI7Zi466W8IOyeheugpe2VtCDso7zshLjsmpRcIlxuICAgIDogXCLsnbTrqZTsnbzsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalFwiO1xuXG4gIC8vIOydtOuplOydvCwg67mE67CA67KI7Zi4IOycoO2aqOyEsSDqsoDsgqxcbiAgY29uc3QgaXNWYWxpZEVtYWlsID0gKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIEVNQUlMX1JFR0VYLnRlc3QoaW5wdXQpID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGlzVmFsaWRQYXNzd29yZCA9IChpbnB1dCkgPT4ge1xuICAgIHJldHVybiBQQVNTV09SRF9SRUdFWC50ZXN0KGlucHV0KSA/IHRydWUgOiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFbWFpbEVycm9yID0gKGUpID0+IHtcbiAgICBpZiAoIWUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCLsnbTrqZTsnbzsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalFwiKTtcbiAgICB9IGVsc2UgaWYgKCFpc1ZhbGlkRW1haWwoZS50YXJnZXQudmFsdWUpKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCLsmKzrsJTrpbgg7J2066mU7J28IOyjvOyGjOqwgCDslYTri5nri4jri6RcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUGFzc3dvcmRFcnJvciA9IChlKSA9PiB7XG4gICAgaWYgKCFlLnRhcmdldC52YWx1ZSkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi67mE67CA67KI7Zi466W8IOyeheugpe2VtCDso7zshLjsmpRcIik7XG4gICAgfSBlbHNlIGlmICghaXNWYWxpZFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi67mE67CA67KI7Zi464qUIOyYgeusuCwg7Iir7J6QIOyhsO2VqSA47J6QIOydtOyDgSDsnoXroKXtlbQg7KO87IS47JqUXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoZWNrUGFzc3dvcmRFcnJvciA9IChlKSA9PiB7XG4gICAgaWYgKCFlLnRhcmdldC52YWx1ZSkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi67mE67CA67KI7Zi466W8IOyeheugpe2VtCDso7zshLjsmpRcIik7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gcGFzc3dvcmRJbnB1dCkge1xuICAgICAgY29uc29sZS5sb2coXCJQSVwiLCBwYXNzd29yZElucHV0KTtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIuu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7JWE7JqULlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwYXNzd29yZCkge1xuICAgICAgaW5wdXRSZWYuY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZUVtYWlsRXJyb3IpO1xuICAgIH0gZWxzZSBpZiAoIWNoZWNrKSB7XG4gICAgICBzZXRQYXNzd29yZElucHV0KGlucHV0UmVmLmN1cnJlbnQudmFsdWUpO1xuICAgICAgaW5wdXRSZWYuY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZVBhc3N3b3JkRXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRQYXNzd29yZElucHV0KGlucHV0UmVmLmN1cnJlbnQudmFsdWUpO1xuICAgICAgaW5wdXRSZWYuY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZUNoZWNrUGFzc3dvcmRFcnJvcik7XG4gICAgfVxuICB9LCBbcGFzc3dvcmRJbnB1dF0pO1xuXG4gIC8vIOu5hOuwgOuyiO2YuCDrs7TsnbTquLAv7Iio6riw6riwXG4gIGNvbnN0IGhhbmRsZVBhc3N3b3JkU2hvd24gPSAoZSkgPT4ge1xuICAgIHNldElzVmlzaWJsZSghaXNWaXNpYmxlKTtcbiAgICBpc1Zpc2libGUgPyBzZXRJbnB1dFR5cGUoXCJwYXNzd29yZFwiKSA6IHNldElucHV0VHlwZShcInRleHRcIik7XG4gIH07XG5cbiAgLy8gaW5wdXQgZm9jdXPsi5wg7YyM656AIO2FjOuRkOumrFxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICBzZXRJc0ZvY3VzZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBzZXRJc0ZvY3VzZWQoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcImNvbnRhaW5lclwiKX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goXCJpbnB1dFwiLCB7IGZvY3VzZWQ6IGlzRm9jdXNlZCwgZXJyb3I6IGVycm9yTWVzc2FnZSB9KX1cbiAgICAgICAgICB0eXBlPXtpbnB1dFR5cGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgb25Gb2N1cz17aGFuZGxlRm9jdXN9XG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAvPlxuICAgICAgICB7cGFzc3dvcmQgJiZcbiAgICAgICAgICAoaXNWaXNpYmxlID8gKFxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17RVlFT05fSU1BR0V9XG4gICAgICAgICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNn1cbiAgICAgICAgICAgICAgYWx0PVwi67mE67CA67KI7Zi4IOuztOydtOq4sCDslYTsnbTsvZhcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFwiZXllLWljb25cIil9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBhc3N3b3JkU2hvd259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtFWUVPRkZfSU1BR0V9XG4gICAgICAgICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNn1cbiAgICAgICAgICAgICAgYWx0PVwi67mE67CA67KI7Zi4IOyIqOq5gCDslYTsnbTsvZhcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFwiZXllLWljb25cIil9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBhc3N3b3JkU2hvd259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8cFxuICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIGhpZGRlbjogZXJyb3JNZXNzYWdlID09IGZhbHNlLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAge2Vycm9yTWVzc2FnZX1cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiSW1hZ2UiLCJFWUVPRkZfSU1BR0UiLCJFWUVPTl9JTUFHRSIsIkVNQUlMX1JFR0VYIiwiUEFTU1dPUkRfUkVHRVgiLCJjeCIsImJpbmQiLCJBdXRoSW5wdXQiLCJwYXNzd29yZCIsImNoZWNrIiwiaW5pdGlhbFR5cGUiLCJpbnB1dFR5cGUiLCJzZXRJbnB1dFR5cGUiLCJpc0ZvY3VzZWQiLCJzZXRJc0ZvY3VzZWQiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJwYXNzd29yZElucHV0Iiwic2V0UGFzc3dvcmRJbnB1dCIsImlzSW5wdXQiLCJwbGFjZWhvbGRlciIsImlzVmFsaWRFbWFpbCIsImlucHV0IiwidGVzdCIsImlzVmFsaWRQYXNzd29yZCIsImhhbmRsZUVtYWlsRXJyb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQYXNzd29yZEVycm9yIiwiaGFuZGxlQ2hlY2tQYXNzd29yZEVycm9yIiwiY29uc29sZSIsImxvZyIsImlucHV0UmVmIiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVQYXNzd29yZFNob3duIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVCbHVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9jdXNlZCIsImVycm9yIiwidHlwZSIsInJlZiIsIm9uRm9jdXMiLCJvbkJsdXIiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIm9uQ2xpY2siLCJwIiwiaGlkZGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/auth/ui-auth-input/AuthInput.jsx\n"));

/***/ })

});