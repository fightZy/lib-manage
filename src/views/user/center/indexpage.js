import { Descriptions } from "antd";
import React from "react";
import { useSelector } from "react-redux";

export default function Indexpage() {

    let user = useSelector(state => state.user);
    let { username } = user;
    // todo 在登录的时候就已经需要获取到的信息 
    return <Descriptions title={`${username}的个人信息`}>
        <Descriptions.Item label="用户名">{username}</Descriptions.Item>
        {/**
         * todo
         * 补充动态信息
         * **/}
        <Descriptions.Item label="电话">{111}</Descriptions.Item>
        <Descriptions.Item label="学号">{111}</Descriptions.Item>
        <Descriptions.Item label="邮箱">{12312312}</Descriptions.Item>
    </Descriptions>
}