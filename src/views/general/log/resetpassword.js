import React, { useState } from 'react';
import { Button, Input, Space } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';

export default function Resetpassword() {
    let [id, setId] = useState('');
    let [name, setName] = useState('');
    let [password, setPassword] = useState('');
    return <div className="box" >
        <Space direction="vertical" size="large" style={{width:"100%"}} >
            <Input size="large" placeholder="学号" prefix={<UserOutlined />}
                value={id}
                onChange={({ target: { value } }) => { setId(value) }}
            />
            <Input size="large" placeholder="用户名" prefix={<UserOutlined />}
                value={name}
                onChange={({ target: { value } }) => { setName(value) }}
            />

            <Input.Password size="large" placeholder="新密码" prefix={<EditOutlined />}
                value={password}
                onChange={({ target: { value } }) => { setPassword(value) }}
            />
            <Button type="primary" size="large"
                onClick={() => {
                    // 验证学号姓名
                    // 修改密码 
                    // todo 修改用户密码 

                }}
            >修改</Button>
        </Space>
    </div>
}