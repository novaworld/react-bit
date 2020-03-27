"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _lodashEs = require("lodash-es");

var _reactUse = require("react-use");

var _fuse = _interopRequireDefault(require("fuse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**

 * @name useFuse

 * @returns Object.

 * @description A React Hook that filters an array using the Fuse.js fuzzy-search library.

 * @example

 * @see https://fusejs.io/

 */
function useFuse(list, _ref) {
  var _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 200 : _ref$delay,
      options = _objectWithoutProperties(_ref, ["delay"]);

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      term = _useState2[0],
      setTerm = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      debouncedTerm = _useState4[0],
      setDebouncedTerm = _useState4[1];

  var fuse = (0, _react.useMemo)(function () {
    return new _fuse.default(list, options);
  }, [list, options]);
  var result = (0, _react.useMemo)(function () {
    var result = fuse.search("".concat(debouncedTerm));
    return debouncedTerm ? (0, _lodashEs.map)(result, 'item') : list;
  }, [fuse, term]);

  var _useDebounce = (0, _reactUse.useDebounce)(function () {
    setDebouncedTerm(term);
  }, delay, [term]),
      _useDebounce2 = _slicedToArray(_useDebounce, 2),
      cancel = _useDebounce2[1];

  var reset = function reset() {
    return setTerm('');
  };

  return {
    result: result,
    term: term,
    setTerm: setTerm,
    reset: reset
  };
}

var _default = useFuse;
exports.default = _default;

//# sourceMappingURL=useFuse.js.map