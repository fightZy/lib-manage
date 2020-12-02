import React, { useEffect, useState } from 'react';
import { Button, Input, notification, Space } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useAdminlog, useLog } from '../../../store/action/index';

export default function Log(props) {
    // let state = useSelector(state => state);
    // console.log(props);
    let {location:{state}} =  props;
    // console.dir(state);
    useEffect(()=>{
        if(state){
            if(state.info) nwarn(state.info);
        }
    },[])
    let log1 = useLog();
    let adminlog = useAdminlog();

    let [name, setName] = useState('');
    let [password, setPassword] = useState('');
    return <div className="box" >
        <Space direction="vertical" size="large" style={{ width: "100%" }} >
            <Input size="large" placeholder="用户名" prefix={<UserOutlined />}
                value={name}
                onChange={({ target: { value } }) => { setName(value) }}
            />
            <Input.Password size="large" placeholder="密码" prefix={<EditOutlined />}
                value={password}
                onChange={({ target: { value } }) => { setPassword(value) }}
            />
            <Space size="large">
                <Button type="primary" size="large"
                    onClick={() => {
                        // 验证用户名密码
                        // todo 发送用户名密码 name,password
                        // let res = log1(name,password);
                        // console.log(res);


                        if (name === '111' && password === '111') {
                            log1(name,password)
                            props.history.push("/");
                            
                        }
                        if(name === 'admin' && password === 'admin'){
                            props.history.push("/indexadmin");
                            adminlog(name);
                        }   
                    }}
                >登录</Button>
                <Button size="large" onClick={() => { props.history.push("/register") }}>注册</Button>
            </Space>
            <Link to="/resetpassword">忘记密码</Link>
        </Space>
    </div>
}

function nwarn(des){
    notification.warning({
        top:77,
        message:'提醒',
        description:des,
    })
}