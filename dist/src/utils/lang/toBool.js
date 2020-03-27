"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodashEs = require("lodash-es");

/**

 * @render utils

 * @name toBool

 * @param val

 * @returns {boolean}

 * @description Convert value to a boolean.

 * @example

 * toBool(true); // -> true

 * toBool(null); // -> false

 * toBool(1); // -> true

 * toBool(0); // -> false

 * toBool('0'); // -> false

 * toBool('1'); // -> true

 * toBool('false'); // -> false

 */
function toBool(val) {
  if ((0, _lodashEs.isString)(val)) {
    val = val.toLowerCase();
    return val !== '0' && val !== '' && val !== 'false';
  }

  return !!val;
}

var _default = toBool;
exports.default = _default;

//# sourceMappingURL=toBool.js.map