import React, { Fragment, useState } from 'react';
import { Button, Form, Input, Space } from 'antd';
import { UserOutlined, EditOutlined, FieldBinaryOutlined, CheckOutlined } from '@ant-design/icons';
import { useID, useName, usePassword, useSame } from '../../../hooks/log/localval';

import Container from '../../../component/container';

export default function Register(props) {
    

    return <div style={{width:"600px",height:"400px",margin:"auto 200px auto auto",padding:"10px",border:"1px solid black",borderRadius:"5px"}}>
        
            <Form
                
                name='register'
                scrollToFirstError={true}
                onFinish={(value) => { console.log(value); }}
            >
                <Form.Item><h2>注册新用户</h2></Form.Item>
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
                                console.log(rule, value);
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