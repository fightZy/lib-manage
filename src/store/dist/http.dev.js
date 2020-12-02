"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var http = _axios["default"].create({
  baseURL: "/api"
}); // todo 做数据请求


var _default = http;
exports["default"] = _default;