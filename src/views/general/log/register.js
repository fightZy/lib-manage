import React from 'react';
import { Button, Form, Input } from 'antd';
import { toRegister } from '../../../store/http';


export default function Register(props) {
    

    return <div className="box">
        
            <Form
                name='register'
                scrollToFirstError={true}
                onFinish={async (value) => { 
                    
                    // console.log(value);
                    let {id,username,password} = value;
                    // todo 注册新用户
                    // let res = await toRegister(id,username,password);


                 }}
            >
                <Form.Item style={{textAlign:"center",fontSize:24,color:"#8c8c8c"}}>新用户注册</Form.Item>
                <Form.Item name="id" label="学号"
                    rules={[
                        {
                            len: 8,
                            message: '请输入正确的学号'
                        },
                        {
                            required: true,
                            message: '请输入学号'
                        }
                    ]}
                ><Input /></Form.Item>
                <Form.Item name='username' label="姓名"
                    rules={[
                        {
                            required: true,
                            message: '请输入姓名'
                        }
                    ]}
                ><Input /></Form.Item>
                <Form.Item name='password' label="密码"
                    rules={[
                        {
                            required: true,
                            message: "请输入密码"
                        }
                    ]}
                ><Input /></Form.Item>
                <Form.Item name="confirm" label="确认密码" dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: "请输入确认密码"
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                // console.log(rule, value);
                                if (!value || getFieldValue('password') == value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('两次密码输入不一致')
                            }
                        })
                    ]}
                ><Input /></Form.Item>
                <Form.Item><Button htmlType="submit" type="primary">提交注册</Button></Form.Item>
            </Form>
        </div>

}