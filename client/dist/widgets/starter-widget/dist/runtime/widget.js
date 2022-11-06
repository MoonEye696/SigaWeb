/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-core/lib/set-public-path.ts":
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\r\n * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.\r\n * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.\r\n * */\r\n// eslint-disable-next-line\r\n// @ts-ignore\r\n__webpack_require__.p = window.jimuConfig.baseUrl;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHM/OGQyYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./jimu-core/lib/set-public-path.ts\n");

/***/ }),

/***/ "./your-extensions/widgets/starter-widget/src/runtime/widget.tsx":
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/starter-widget/src/runtime/widget.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Widget)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/** @jsx jsx */\r\n\r\nclass Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {\r\n    render() {\r\n        const styleInputLogin = jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `\r\n    width: 539px;\r\n    height: 65px;\r\n    border: 1px solid #000000;\r\n    border-radius: 10px;\r\n    margin-bottom: 30px;\r\n    `;\r\n        const styleInputPassword = jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `\r\n      border: 2px solid #000000\t;\r\n    `;\r\n        const styleButton = jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `\r\n    position: absolute;\r\n    `;\r\n        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"widget-starter jimu-widget\" },\r\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"login-area\" },\r\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"form\", { action: \"\" },\r\n                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", { type: \"text\", name: \"Login\", id: \"login\", placeholder: \"CPF\", css: styleInputLogin }),\r\n                    \" \",\r\n                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", null),\r\n                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", { type: \"password\", name: \"Login\", id: \"senha\", placeholder: \"Senha\", css: styleInputLogin }),\r\n                    \" \",\r\n                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", null),\r\n                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", { type: \"submit\", css: styleButton }, \"Entrar\"))));\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zdGFydGVyLXdpZGdldC9zcmMvcnVudGltZS93aWRnZXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBS0E7QUFDQTs7Ozs7O0FBTUE7QUFFQTs7QUFFQTtBQUVBOztBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBTUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zdGFydGVyLXdpZGdldC9zcmMvcnVudGltZS93aWRnZXQudHN4P2EzYWIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IFJlYWN0LCBBbGxXaWRnZXRQcm9wcywganN4LCBjc3MgfSBmcm9tIFwiamltdS1jb3JlXCI7XHJcbmltcG9ydCB7IFRhYiwgVGFicyB9IGZyb20gXCJqaW11LXVpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFsbFdpZGdldFByb3BzPGFueT4sIGFueT4ge1xyXG5cclxuXHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBzdHlsZUlucHV0TG9naW4gPSBjc3NgXHJcbiAgICB3aWR0aDogNTM5cHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IHN0eWxlSW5wdXRQYXNzd29yZCA9IGNzc2BcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMFx0O1xyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBzdHlsZUJ1dHRvbiA9IGNzc2BcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGA7XHJcblxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zdGFydGVyIGppbXUtd2lkZ2V0XCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWFyZWFcIj5cclxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJMb2dpblwiIGlkPVwibG9naW5cIiBwbGFjZWhvbGRlcj1cIkNQRlwiIGNzcz17c3R5bGVJbnB1dExvZ2lufSAvPiA8YnI+PC9icj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwiTG9naW5cIiBpZD1cInNlbmhhXCIgcGxhY2Vob2xkZXI9XCJTZW5oYVwiIGNzcz17c3R5bGVJbnB1dExvZ2lufSAvPiA8YnI+PC9icj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNzcz17c3R5bGVCdXR0b259ID5FbnRyYXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PjtcclxuXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./your-extensions/widgets/starter-widget/src/runtime/widget.tsx\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./jimu-core/lib/set-public-path.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/starter-widget/src/runtime/widget.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});