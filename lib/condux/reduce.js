"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduce = _interopRequireDefault(require("lodash/reduce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(reducers) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return (0, _reduce.default)(reducers, function (result, func, name) {
    result[name] = func(state[name], action);
    return result;
  }, {});
};

exports.default = _default;