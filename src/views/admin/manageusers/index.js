import { Menu } from 'antd';
import { TeamOutlined, SoundOutlined } from '@ant-design/icons';
import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RegisterRouter from '../../../router/registerrouter';

export default function Manageusers(props){

    let routes = props.children;
    // console.log(routes);
    let { pathname } = useLocation();
    let key = pathname.split('/').pop()

    return <Fragment>
        <Menu mode="horizontal"
            defaultSelectedKeys="manageusers"
            selectedKeys={key}
        >
            <Menu.Item key='manageusers' icon={<TeamOutlined />}>
                <Link to='/manageusers' >总览</Link>
            </Menu.Item>
            <Menu.Item key='message' icon={<SoundOutlined />}>
                <Link to='/manageusers/message' >读者留言</Link>
            </Menu.Item>
        </Menu>
        <RegisterRouter routes={routes} />
    </Fragment>
}