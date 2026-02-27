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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: #2563eb;
  --primary-color-darker: #1d4ed8;
  --primary-color-light: #3b82f6;
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
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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
  font-size: 28px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 10px;
  text-align: center;
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
  font-family: 'Inter', sans-serif;
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
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-darker) 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  height: 50px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
}

form button:hover {
  background: linear-gradient(135deg, var(--primary-color-darker) 0%, #1e40af 100%);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

form button:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

/* Estilos para mensagens de sucesso e erro */
.success,
.error {
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 500;
  animation: slideIn 0.4s ease-out;
}

/* Estilos para exibição do CPF gerado */
.cpf-display {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border: 2px solid var(--primary-color-light);
  border-radius: 15px;
  padding: 40px 30px;
  margin: 30px 0;
  text-align: center;
  animation: fadeInUp 0.5s ease-out;
  box-shadow: var(--shadow-md);
}

.cpf-display h2 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-light);
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.cpf-display .cpf-number {
  font-size: 36px;
  font-weight: 700;
  color: var(--primary-color);
  letter-spacing: 2px;
  margin: 20px 0;
  font-family: 'Courier New', monospace;
  user-select: all;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
  padding: 15px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  transition: all 0.3s ease;
  display: block;
  width: 100%;
  text-align: center;
}

.cpf-display .cpf-number:hover {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.02);
}

.cpf-display p {
  font-size: 13px;
  color: var(--text-light);
  margin-top: 12px;
}

/* Botão para gerar novo CPF */
.btn-generate {
  display: block;
  width: 100%;
  border: none;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-darker) 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  height: 50px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
}

.btn-generate:hover {
  background: linear-gradient(135deg, var(--primary-color-darker) 0%, #1e40af 100%);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.btn-generate:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

/* Botão secundário para validar */
.btn-validate {
  display: block;
  width: 100%;
  border: 2px solid var(--primary-color);
  background: transparent;
  color: var(--primary-color);
  font-size: 16px;
  font-weight: 600;
  height: 50px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
}

.btn-validate:hover {
  background: var(--primary-color);
  color: #fff;
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.btn-validate:active {
  transform: translateY(0);
}

/* Botão de copiar CPF */
.btn-copy {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border: 2px solid var(--primary-color);
  background: #fff;
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
}

.btn-copy:hover {
  background: var(--primary-color);
  color: #fff;
  transform: scale(1.05);
}

.btn-copy.copied {
  background: var(--success-color);
  border-color: var(--success-color);
  color: #fff;
}

/* Responsividade */
@media (max-width: 640px) {
  .container {
    padding: 30px 20px;
    margin: 20px auto;
    width: 95%;
  }

  .container h1 {
    font-size: 24px;
  }

  .container p {
    font-size: 13px;
  }

  form input,
  form button,
  .btn-generate,
  .btn-validate {
    height: 48px;
    font-size: 15px;
  }

  .cpf-display {
    padding: 25px 15px;
  }

  .cpf-display h2 {
    font-size: 12px;
  }

  .cpf-display .cpf-number {
    font-size: 20px;
    letter-spacing: 0.5px;
    padding: 12px 8px;
  }

  .btn-copy {
    font-size: 13px;
    padding: 8px 16px;
  }
}

/* Melhorias de acessibilidade */
*:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Animação de loading para o botão */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading::after {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: 8px;
  border: 2px solid #ffffff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
`, "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');\n\n:root {\n  --primary-color: #2563eb;\n  --primary-color-darker: #1d4ed8;\n  --primary-color-light: #3b82f6;\n  --success-color: #10b981;\n  --error-color: #ef4444;\n  --text-dark: #1f2937;\n  --text-light: #6b7280;\n  --border-color: #e5e7eb;\n  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-dark);\n}\n\n.container {\n  max-width: 500px;\n  width: 90%;\n  margin: 30px auto;\n  background: #ffffff;\n  padding: 40px;\n  border-radius: 20px;\n  box-shadow: var(--shadow-xl);\n  animation: fadeInUp 0.6s ease-out;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.container h1 {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n.container p {\n  color: var(--text-light);\n  text-align: center;\n  margin-bottom: 30px;\n  font-size: 14px;\n}\n\nform {\n  width: 100%;\n}\n\nform label {\n  display: block;\n  width: 100%;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: var(--text-dark);\n  font-size: 14px;\n}\n\nform input {\n  display: block;\n  width: 100%;\n  font-size: 16px;\n  height: 50px;\n  padding: 0 16px;\n  margin-bottom: 20px;\n  border: 2px solid var(--border-color);\n  border-radius: 10px;\n  transition: all 0.3s ease;\n  font-family: 'Inter', sans-serif;\n  background: #f9fafb;\n}\n\nform input:hover {\n  border-color: var(--primary-color-light);\n  background: #ffffff;\n}\n\nform input:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n\nform button {\n  display: block;\n  width: 100%;\n  border: none;\n  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-darker) 100%);\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 10px;\n  border-radius: 10px;\n  transition: all 0.3s ease;\n  box-shadow: var(--shadow-md);\n  font-family: 'Inter', sans-serif;\n  letter-spacing: 0.5px;\n}\n\nform button:hover {\n  background: linear-gradient(135deg, var(--primary-color-darker) 0%, #1e40af 100%);\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-2px);\n}\n\nform button:active {\n  transform: translateY(0);\n  box-shadow: var(--shadow-sm);\n}\n\n/* Estilos para mensagens de sucesso e erro */\n.success,\n.error {\n  padding: 16px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  font-weight: 500;\n  animation: slideIn 0.4s ease-out;\n}\n\n/* Estilos para exibição do CPF gerado */\n.cpf-display {\n  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);\n  border: 2px solid var(--primary-color-light);\n  border-radius: 15px;\n  padding: 40px 30px;\n  margin: 30px 0;\n  text-align: center;\n  animation: fadeInUp 0.5s ease-out;\n  box-shadow: var(--shadow-md);\n}\n\n.cpf-display h2 {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-light);\n  margin-bottom: 15px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n}\n\n.cpf-display .cpf-number {\n  font-size: 36px;\n  font-weight: 700;\n  color: var(--primary-color);\n  letter-spacing: 2px;\n  margin: 20px 0;\n  font-family: 'Courier New', monospace;\n  user-select: all;\n  line-height: 1.2;\n  white-space: nowrap;\n  cursor: pointer;\n  padding: 15px;\n  background: rgba(255, 255, 255, 0.7);\n  border-radius: 10px;\n  transition: all 0.3s ease;\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n\n.cpf-display .cpf-number:hover {\n  background: rgba(255, 255, 255, 1);\n  transform: scale(1.02);\n}\n\n.cpf-display p {\n  font-size: 13px;\n  color: var(--text-light);\n  margin-top: 12px;\n}\n\n/* Botão para gerar novo CPF */\n.btn-generate {\n  display: block;\n  width: 100%;\n  border: none;\n  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-darker) 100%);\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 10px;\n  border-radius: 10px;\n  transition: all 0.3s ease;\n  box-shadow: var(--shadow-md);\n  font-family: 'Inter', sans-serif;\n  letter-spacing: 0.5px;\n}\n\n.btn-generate:hover {\n  background: linear-gradient(135deg, var(--primary-color-darker) 0%, #1e40af 100%);\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-2px);\n}\n\n.btn-generate:active {\n  transform: translateY(0);\n  box-shadow: var(--shadow-sm);\n}\n\n/* Botão secundário para validar */\n.btn-validate {\n  display: block;\n  width: 100%;\n  border: 2px solid var(--primary-color);\n  background: transparent;\n  color: var(--primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 10px;\n  border-radius: 10px;\n  transition: all 0.3s ease;\n  font-family: 'Inter', sans-serif;\n  letter-spacing: 0.5px;\n}\n\n.btn-validate:hover {\n  background: var(--primary-color);\n  color: #fff;\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n\n.btn-validate:active {\n  transform: translateY(0);\n}\n\n/* Botão de copiar CPF */\n.btn-copy {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: 2px solid var(--primary-color);\n  background: #fff;\n  color: var(--primary-color);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 15px;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  font-family: 'Inter', sans-serif;\n}\n\n.btn-copy:hover {\n  background: var(--primary-color);\n  color: #fff;\n  transform: scale(1.05);\n}\n\n.btn-copy.copied {\n  background: var(--success-color);\n  border-color: var(--success-color);\n  color: #fff;\n}\n\n/* Responsividade */\n@media (max-width: 640px) {\n  .container {\n    padding: 30px 20px;\n    margin: 20px auto;\n    width: 95%;\n  }\n\n  .container h1 {\n    font-size: 24px;\n  }\n\n  .container p {\n    font-size: 13px;\n  }\n\n  form input,\n  form button,\n  .btn-generate,\n  .btn-validate {\n    height: 48px;\n    font-size: 15px;\n  }\n\n  .cpf-display {\n    padding: 25px 15px;\n  }\n\n  .cpf-display h2 {\n    font-size: 12px;\n  }\n\n  .cpf-display .cpf-number {\n    font-size: 20px;\n    letter-spacing: 0.5px;\n    padding: 12px 8px;\n  }\n\n  .btn-copy {\n    font-size: 13px;\n    padding: 8px 16px;\n  }\n}\n\n/* Melhorias de acessibilidade */\n*:focus-visible {\n  outline: 2px solid var(--primary-color);\n  outline-offset: 2px;\n}\n\nbutton:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n/* Animação de loading para o botão */\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.loading::after {\n  content: '';\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  margin-left: 8px;\n  border: 2px solid #ffffff;\n  border-top-color: transparent;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/GeraCPF.js"
/*!********************************!*\
  !*** ./src/modules/GeraCPF.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GeraCPF)
/* harmony export */ });
/* harmony import */ var _ValidaCPF_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValidaCPF.js */ "./src/modules/ValidaCPF.js");


class GeraCPF{

    rand (min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    formataCpf(cpf){
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    }
    
    geraNovoCpf(){
        const cpfSemDigito = this.rand();
        const digito1 = _ValidaCPF_js__WEBPACK_IMPORTED_MODULE_0__["default"].CriaDigito(cpfSemDigito);
        const digito2 = _ValidaCPF_js__WEBPACK_IMPORTED_MODULE_0__["default"].CriaDigito(cpfSemDigito + digito1);
        const novoCpf = cpfSemDigito + digito1 + digito2;
        return this.formataCpf(novoCpf);
    }
}

/***/ },

/***/ "./src/modules/ValidaCPF.js"
/*!**********************************!*\
  !*** ./src/modules/ValidaCPF.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValidaCPF)
/* harmony export */ });
//preciso valida cpf

//ex: 705.484.450-52 

/*

7x  0x 5x 4x 8x 4x 4x 5x 0x
10x 9x 8x 7x 6x 5x 4x 3x 2x
70  0 40  28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro dígito verificador)

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11x 10x 9x 8x 7x 6x 5x 4x 3x 2x
77   0  45 32 56 24 20 15 0  10 = 279

11 - (279 % 11) = 2 (segundo dígito verificador)
*/


class ValidaCPF{
    constructor(cpfEnviado){
        this.cpf = cpfEnviado;
    }

    get cpfLimpo(){
        return this.cpf.replace(/\D+/g, '');
    }

    valida(){
        if(this.cpfLimpo.length !== 11){
            console.log('CPF inválido: Tamanho incorreto');
            return false;
        }


        if(this.isSequencia()){
            console.log('CPF inválido: Sequência');
            return false;
        }
       

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.CriaDigito(cpfParcial);
        const digito2 = ValidaCPF.CriaDigito(cpfParcial + digito1);
        
        const novoCpf = cpfParcial + digito1 + digito2; 
        return novoCpf === this.cpfLimpo;
 
        
    }

    static CriaDigito(CpfParcial){
        const cpfArray = Array.from(CpfParcial);
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac,val) => {
            ac += (regressivo * Number(val));
            regressivo --;
            return ac;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito); // se o dígito for maior que 9, retorna '0', caso contrário, retorna o dígito convertido para string.
    }

    isSequencia(){
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }

        
}

const cpf = new ValidaCPF('705.484.450-52');


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
/* harmony import */ var _modules_GeraCPF_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/GeraCPF.js */ "./src/modules/GeraCPF.js");
/* harmony import */ var _modules_ValidaCPF_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ValidaCPF.js */ "./src/modules/ValidaCPF.js");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");




// Função para gerar novo CPF
window.gerarNovoCPF = function() {
    const gera = new _modules_GeraCPF_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const cpfGerado = gera.geraNovoCpf();
    
    const cpfGeradoDiv = document.querySelector('.cpf-gerado');
    const cpfNumber = document.querySelector('.cpf-number');
    
    cpfNumber.textContent = cpfGerado;
    cpfGeradoDiv.style.display = 'block';
    
    // Animação de destaque
    cpfNumber.style.animation = 'none';
    setTimeout(() => {
        cpfNumber.style.animation = 'fadeInUp 0.5s ease-out';
    }, 10);
};

// Função para copiar CPF
window.copiarCPF = function() {
    const cpfNumber = document.querySelector('.cpf-number').textContent;
    const btnCopy = document.querySelector('.btn-copy');
    
    navigator.clipboard.writeText(cpfNumber).then(() => {
        const originalText = btnCopy.innerHTML;
        btnCopy.innerHTML = '✅ Copiado!';
        btnCopy.classList.add('copied');
        
        setTimeout(() => {
            btnCopy.innerHTML = originalText;
            btnCopy.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        alert('Erro ao copiar: ' + err);
    });
};

// Validação de CPF
(function(){
    const form = document.querySelector('form');
    const resultadoDiv = document.querySelector('.resultado-validacao');
    
    if (!form || !resultadoDiv) return; // Proteção caso os elementos não existam
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const cpfInputElement = document.querySelector('#cpf-input');
        const cpfInput = cpfInputElement.value;
        const cpfLimpo = cpfInput.replace(/\D/g, '');
        
        if (cpfLimpo.length !== 11) {
            resultadoDiv.innerHTML = '<div class="error">❌ CPF deve conter 11 dígitos!</div>';
            return;
        }
        
        // Passar o CPF com formatação ou limpo (a classe limpa internamente)
        const valida = new _modules_ValidaCPF_js__WEBPACK_IMPORTED_MODULE_1__["default"](cpfInput);
        
        if (valida.valida()) {
            resultadoDiv.innerHTML = '<div class="success">✅ CPF válido!</div>';
        } else {
            resultadoDiv.innerHTML = '<div class="error">❌ CPF inválido!</div>';
        }
    });
    
    // Máscara de CPF no input
    const cpfInput = document.querySelector('#cpf-input');
    if (cpfInput) {
        cpfInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length <= 11) {
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                e.target.value = value;
            }
        });
    }
})();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map