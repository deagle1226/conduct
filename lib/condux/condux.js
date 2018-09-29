"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _conduct = require("../conduct");

var _conductor = _interopRequireDefault(require("../conductor"));

var _dispatch = _interopRequireDefault(require("./dispatch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultMapState = function defaultMapState() {
  return {};
};

var defaultMapDispatch = function defaultMapDispatch(dispatch) {
  return {
    dispatch: dispatch
  };
};

var condux = function condux() {
  var mapStateToProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultMapState;
  var mapDispatchToProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMapDispatch;
  return function (Component) {
    var displayName = "Condux(".concat(Component.displayName || Component.name || 'Component', ")");

    var Condux = function Condux() {
      return _react.default.createElement(_conduct.ConductConsumer, null, function (conduct) {
        return _react.default.createElement(_conductor.default, _extends({}, conduct, {
          component: Component,
          mapStateToProps: mapStateToProps,
          mapSetStateToProps: function mapSetStateToProps(setState) {
            return mapDispatchToProps((0, _dispatch.default)(setState));
          }
        }));
      });
    };

    Condux.displayName = displayName;
    return Condux;
  };
};

var _default = condux;
exports.default = _default;