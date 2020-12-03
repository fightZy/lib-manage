import axios from "axios";

const http = axios.create({
    baseURL: "/api",

});
// todo 做数据请求



// # 登录前

// 登录
let toUserLog = function (name, password) {
    return http({
        method: 'post',
        url: "/login",
        data: {
            name,
            password,
        }
    })
}

// 注册
let toRegister = function (uid, name, password) {
    return http({
        method: 'post',
        url: "/register",
        data: {
            uid,
            name,
            password
        }
    })
}

// 获取首页数据
let toGetindex = function () {
    return http({
        method: "get",
        url: "/getindex"
    })
}

// 获取书籍
let toGetbooks = function () {
    return http({
        method: "get",
        url: "/getbooks"
    })
}


// # 登录后请求通用方法
const request = (method, url, data = null) => {
    return http({
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        data: data,
    });

};

// user
// 获取用户个人信息
let userGetinfor = ()=>{
    return request('get','/user/getinfor')
}
// 添加用户收藏
let userAddfaver = (data) => {
    return  request('post', '/user/addfaver', data);
} 
// 发送预约请求
// ...


// admin
// 修改首页数据
let adminChangeindex = (data)=>{
    return request('post','/admin/changeindex',data)
}
// 获取用户数据
// 修改用户数据
// 获取书籍数据
// 修改书籍数据
// 新书入库
// ...

export {
    toUserLog,
    toRegister,
    toGetindex,
    toGetbooks
};
