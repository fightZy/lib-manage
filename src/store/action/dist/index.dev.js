"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAdminlog = exports.useOutlog = exports.useLog = void 0;

var _reactRedux = require("react-redux");

var _http = _interopRequireDefault(require("../http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useLog = function useLog() {
  var dispatch = (0, _reactRedux.useDispatch)();
  return function _callee(name, password) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // http({
            //     method: 'post',
            //     url: "/login",
            // headers: { 'Access-Control-Allow-Origin': '*' },
            // params:{
            //     name,
            //     password,
            // }
            //     data: {
            //         name,
            //         password,
            //     }
            // }).then(res => {
            //     console.log(res);
            //     let {data,headers:{authorization}}  = res;
            //     console.log(data,authorization);
            dispatch({
              type: 'LOG',
              name: name
            }); // }).catch(err=>{
            //     console.log(err);
            // })

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.useLog = useLog;

var useOutlog = function useOutlog() {
  var dispatch = (0, _reactRedux.useDispatch)();
  return function () {
    dispatch({
      type: 'OUT_LOG'
    });
  };
};

exports.useOutlog = useOutlog;

var useAdminlog = function useAdminlog() {
  var dispatch = (0, _reactRedux.useDispatch)();
  return function (name) {
    dispatch({
      type: 'ADMIN_LOG',
      name: name
    });
  };
};

exports.useAdminlog = useAdminlog;