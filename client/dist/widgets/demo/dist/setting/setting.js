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

/***/ "./your-extensions/widgets/demo/src/setting/setting.tsx":
/*!**************************************************************!*\
  !*** ./your-extensions/widgets/demo/src/setting/setting.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Setting)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translations/default */ \"./your-extensions/widgets/demo/src/setting/translations/default.ts\");\n/**\r\n  Licensing\r\n\r\n  Copyright 2020 Esri\r\n\r\n  Licensed under the Apache License, Version 2.0 (the \"License\"); You\r\n  may not use this file except in compliance with the License. You may\r\n  obtain a copy of the License at\r\n  http://www.apache.org/licenses/LICENSE-2.0\r\n\r\n  Unless required by applicable law or agreed to in writing, software\r\n  distributed under the License is distributed on an \"AS IS\" BASIS,\r\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\r\n  implied. See the License for the specific language governing\r\n  permissions and limitations under the License.\r\n\r\n  A copy of the license is available in the repository's\r\n  LICENSE file.\r\n*/\r\n\r\n\r\nclass Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.onP1Change = (evt) => {\r\n            this.props.onSettingChange({\r\n                id: this.props.id,\r\n                config: this.props.config.set('p1', evt.currentTarget.value)\r\n            });\r\n        };\r\n        this.onP2Change = (evt) => {\r\n            this.props.onSettingChange({\r\n                id: this.props.id,\r\n                config: this.props.config.set('p2', evt.currentTarget.value)\r\n            });\r\n        };\r\n    }\r\n    render() {\r\n        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"div\", { className: \"widget-setting-demo\" },\r\n            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"div\", null,\r\n                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: \"p1\", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p1 }),\r\n                \": \",\r\n                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"input\", { defaultValue: this.props.config.p1, onChange: this.onP1Change })),\r\n            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"div\", null,\r\n                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: \"p2\", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p2 }),\r\n                \": \",\r\n                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"input\", { defaultValue: this.props.config.p2, onChange: this.onP2Change })));\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9kZW1vL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUdBO0FBRUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQU5BO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZGVtby9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeD9kZTI1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICBMaWNlbnNpbmdcblxuICBDb3B5cmlnaHQgMjAyMCBFc3JpXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xuICBMSUNFTlNFIGZpbGUuXG4qL1xuaW1wb3J0IHtSZWFjdCwgRm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnamltdS1jb3JlJztcbmltcG9ydCB7QWxsV2lkZ2V0U2V0dGluZ1Byb3BzfSBmcm9tICdqaW11LWZvci1idWlsZGVyJztcbmltcG9ydCB7SU1Db25maWd9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgZGVmYXVsdEkxOG5NZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+LCBhbnk+e1xuICBvblAxQ2hhbmdlID0gKGV2dDogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgncDEnLCBldnQuY3VycmVudFRhcmdldC52YWx1ZSlcbiAgICB9KTtcbiAgfVxuXG4gIG9uUDJDaGFuZ2UgPSAoZXZ0OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdwMicsIGV2dC5jdXJyZW50VGFyZ2V0LnZhbHVlKVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNldHRpbmctZGVtb1wiPlxuICAgICAgPGRpdj48Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInAxXCIgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRJMThuTWVzc2FnZXMucDF9Lz46IDxpbnB1dCBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMuY29uZmlnLnAxfSBvbkNoYW5nZT17dGhpcy5vblAxQ2hhbmdlfS8+PC9kaXY+XG4gICAgICA8ZGl2PjxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwicDJcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5wMn0vPjogPGlucHV0IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5jb25maWcucDJ9IG9uQ2hhbmdlPXt0aGlzLm9uUDJDaGFuZ2V9Lz48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/demo/src/setting/setting.tsx\n");

/***/ }),

/***/ "./your-extensions/widgets/demo/src/setting/translations/default.ts":
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/demo/src/setting/translations/default.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n  Licensing\r\n\r\n  Copyright 2020 Esri\r\n\r\n  Licensed under the Apache License, Version 2.0 (the \"License\"); You\r\n  may not use this file except in compliance with the License. You may\r\n  obtain a copy of the License at\r\n  http://www.apache.org/licenses/LICENSE-2.0\r\n\r\n  Unless required by applicable law or agreed to in writing, software\r\n  distributed under the License is distributed on an \"AS IS\" BASIS,\r\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\r\n  implied. See the License for the specific language governing\r\n  permissions and limitations under the License.\r\n\r\n  A copy of the license is available in the repository's\r\n  LICENSE file.\r\n*/\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    p1: 'Property 1',\r\n    p2: 'Property 2'\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9kZW1vL3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZGVtby9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cz80YWQ4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICBMaWNlbnNpbmdcblxuICBDb3B5cmlnaHQgMjAyMCBFc3JpXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xuICBMSUNFTlNFIGZpbGUuXG4qL1xuZXhwb3J0IGRlZmF1bHQge1xuICBwMTogJ1Byb3BlcnR5IDEnLFxuICBwMjogJ1Byb3BlcnR5IDInXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./your-extensions/widgets/demo/src/setting/translations/default.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/demo/src/setting/setting.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});