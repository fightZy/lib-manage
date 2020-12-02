"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetLog = useGetLog;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useGetLog() {
  var userstate = (0, _reactRedux.useSelector)(function (state) {
    return state.user;
  });
  return userstate;
}