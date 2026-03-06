/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css"
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: #6366f1;
  --primary-color-darker: #4f46e5;
  --primary-color-light: #818cf8;
  --success-color: #10b981;
  --error-color: #ef4444;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --border-color: #e5e7eb;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

* {
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-dark);
}

.container {
  max-width: 500px;
  width: 90%;
  margin: 30px auto;
  background: #ffffff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: var(--shadow-xl);
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.container h1 {
  font-size: 36px;
  font-weight: 900;
  color: var(--text-dark);
  margin-bottom: 20px;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
  font-family: 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  text-shadow: 0 4px 20px rgba(102, 126, 234, 0.2);
}

.container p {
  color: var(--text-light);
  text-align: center;
  margin-bottom: 30px;
  font-size: 14px;
}

form {
  width: 100%;
}

form label {
  display: block;
  width: 100%;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--text-dark);
  font-size: 14px;
}

form input {
  display: block;
  width: 100%;
  font-size: 16px;
  height: 50px;
  padding: 0 16px;
  margin-bottom: 20px;
  border: 2px solid var(--border-color);
  border-radius: 10px;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  background: #f9fafb;
}

form input:hover {
  border-color: var(--primary-color-light);
  background: #ffffff;
}

form input:focus {
  outline: none;
  border-color: var(--primary-color);
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

form button {
  display: block;
  width: 100%;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  height: 50px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
}

form button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

form button:hover::before {
  left: 100%;
}

form button:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  box-shadow: 0 15px 30px -5px rgba(102, 126, 234, 0.5);
  transform: translateY(-3px);
}
form button:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.senha-gerada{
  font-size: 1.5em;
  font-weight: 600;
  color: var(--primary-color);
  margin: 30px 0;
  text-align: center;
  font-family: 'Courier New', monospace;
  letter-spacing: 1px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 12px;
  border: 2px dashed var(--primary-color-light);
  word-break: break-word;
  transition: all 0.3s ease;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.senha-gerada:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-md);
}

input[type="checkbox"] {
  width: 25px;
  height: 16px;
  margin-right: 50px;
  margin-top: 16px;
   
}
.btn-gerar{
  height: 60px;
  margin-top: 30px;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 14px;
  color: white;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
  position: relative;
  overflow: hidden;
  font-family: 'Space Grotesk', sans-serif;
}

.btn-gerar::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.6s ease;
}

.btn-gerar:hover::before {
  left: 100%;
}

.btn-gerar:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

.btn-gerar:active {
  transform: translateY(-2px) scale(1);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.5);
}
`, "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap');\n\n:root {\n  --primary-color: #6366f1;\n  --primary-color-darker: #4f46e5;\n  --primary-color-light: #818cf8;\n  --success-color: #10b981;\n  --error-color: #ef4444;\n  --text-dark: #1f2937;\n  --text-light: #6b7280;\n  --border-color: #e5e7eb;\n  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-dark);\n}\n\n.container {\n  max-width: 500px;\n  width: 90%;\n  margin: 30px auto;\n  background: #ffffff;\n  padding: 40px;\n  border-radius: 20px;\n  box-shadow: var(--shadow-xl);\n  animation: fadeInUp 0.6s ease-out;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.container h1 {\n  font-size: 36px;\n  font-weight: 900;\n  color: var(--text-dark);\n  margin-bottom: 20px;\n  text-align: center;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  letter-spacing: -1px;\n  font-family: 'Space Grotesk', sans-serif;\n  text-transform: uppercase;\n  text-shadow: 0 4px 20px rgba(102, 126, 234, 0.2);\n}\n\n.container p {\n  color: var(--text-light);\n  text-align: center;\n  margin-bottom: 30px;\n  font-size: 14px;\n}\n\nform {\n  width: 100%;\n}\n\nform label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: var(--text-dark);\n  font-size: 14px;\n}\n\nform input {\n  display: block;\n  width: 100%;\n  font-size: 16px;\n  height: 50px;\n  padding: 0 16px;\n  margin-bottom: 20px;\n  border: 2px solid var(--border-color);\n  border-radius: 10px;\n  transition: all 0.3s ease;\n  font-family: 'Poppins', sans-serif;\n  background: #f9fafb;\n}\n\nform input:hover {\n  border-color: var(--primary-color-light);\n  background: #ffffff;\n}\n\nform input:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n\nform button {\n  display: block;\n  width: 100%;\n  border: none;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 10px;\n  border-radius: 10px;\n  transition: all 0.3s ease;\n  box-shadow: var(--shadow-md);\n  font-family: 'Space Grotesk', sans-serif;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  position: relative;\n  overflow: hidden;\n}\n\nform button::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);\n  transition: left 0.5s;\n}\n\nform button:hover::before {\n  left: 100%;\n}\n\nform button:hover {\n  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);\n  box-shadow: 0 15px 30px -5px rgba(102, 126, 234, 0.5);\n  transform: translateY(-3px);\n}\nform button:active {\n  transform: translateY(0);\n  box-shadow: var(--shadow-sm);\n}\n\n.senha-gerada{\n  font-size: 1.5em;\n  font-weight: 600;\n  color: var(--primary-color);\n  margin: 30px 0;\n  text-align: center;\n  font-family: 'Courier New', monospace;\n  letter-spacing: 1px;\n  padding: 20px;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);\n  border-radius: 12px;\n  border: 2px dashed var(--primary-color-light);\n  word-break: break-word;\n  transition: all 0.3s ease;\n  min-height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.senha-gerada:hover {\n  transform: scale(1.02);\n  box-shadow: var(--shadow-md);\n}\n\ninput[type=\"checkbox\"] {\n  width: 25px;\n  height: 16px;\n  margin-right: 50px;\n  margin-top: 16px;\n   \n}\n.btn-gerar{\n  height: 60px;\n  margin-top: 30px;\n  width: 100%;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: none;\n  border-radius: 14px;\n  color: white;\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);\n  position: relative;\n  overflow: hidden;\n  font-family: 'Space Grotesk', sans-serif;\n}\n\n.btn-gerar::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);\n  transition: left 0.6s ease;\n}\n\n.btn-gerar:hover::before {\n  left: 100%;\n}\n\n.btn-gerar:hover {\n  transform: translateY(-4px) scale(1.02);\n  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);\n  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);\n}\n\n.btn-gerar:active {\n  transform: translateY(-2px) scale(1);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.5);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./src/assets/css/style.css"
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./src/modules/formGeraSenha.js"
/*!**************************************!*\
  !*** ./src/modules/formGeraSenha.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _geradores_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geradores.js */ "./src/modules/geradores.js");


const senhaGerada = document.querySelector('.senha-gerada');
const tamanhoSenha = document.querySelector('.tamanho-senha');
const btnGerar = document.querySelector('.btn-gerar');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  btnGerar.addEventListener('click', () => {
    senhaGerada.innerHTML = gerandoSenha();
  });
});

function gerandoSenha(){
    const senha = (0,_geradores_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tamanhoSenha.value, chkMaiusculas.checked, chkMinusculas.checked, chkNumeros.checked, chkSimbolos.checked);
    return senha || 'Nada selecionado';
}


/***/ },

/***/ "./src/modules/geradores.js"
/*!**********************************!*\
  !*** ./src/modules/geradores.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ geraSenha)
/* harmony export */ });
const rand = (max, min) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^[]{}!@#$%&*()_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos){
    const senhaArray = [];

    qtd = Number(qtd);

    console.log(qtd);

    for (let i = 0; i < qtd; i++) {
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);
};

/***/ }

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _modules_formGeraSenha_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/formGeraSenha.js */ "./src/modules/formGeraSenha.js");




(0,_modules_formGeraSenha_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map