"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isObject = _interopRequireDefault(require("lodash/isObject"));

var _isFunction = _interopRequireDefault(require("lodash/isFunction"));

var _reduce = _interopRequireDefault(require("./reduce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var logger = function logger(next, action, previous) {
  console.log("--- CONDUX LOGGER ---");
  console.log('previous', previous);
  console.log('action', action);
  console.log('next', next);
};

var mapSetStateToDispatch = function mapSetStateToDispatch(setState) {
  var dispatch = function dispatch(action) {
    if ((0, _isFunction.default)(action)) {
      return action(dispatch);
    } else if ((0, _isObject.default)(action) && action.type) {
      return setState(function (_ref) {
        var reducers = _ref.reducers,
            middleware = _ref.middleware,
            state = _objectWithoutProperties(_ref, ["reducers", "middleware"]);

        return middleware((0, _reduce.default)(reducers, state, action), action, state);
      });
    }

    console.error('invalid action');
    return null;
  };

  return dispatch;
};

var _default = mapSetStateToDispatch;
exports.default = _default;