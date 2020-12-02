import axios from "axios";

const http = axios.create({
    baseURL: "/api",

});
// todo 做数据请求
export default http;
