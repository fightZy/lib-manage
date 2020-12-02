import { Menu } from 'antd';
import { HddOutlined, FileAddOutlined } from '@ant-design/icons';
import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RegisterRouter from '../../../router/registerrouter';

export default function Managebooks(props) {
    // console.log(props);
    let routes = props.children;
    // console.log(routes);
    let { pathname } = useLocation();
    let key = pathname.split('/').pop()

    return <Fragment>
        <Menu mode="horizontal"
            defaultSelectedKeys="managebooks"
            selectedKeys={key}
        >
            <Menu.Item key='managebooks' icon={<HddOutlined />}>
                <Link to='/managebooks' >总览</Link>
            </Menu.Item>
            <Menu.Item key='warehousing' icon={<FileAddOutlined />}>
                <Link to='/managebooks/warehousing' >新书入库</Link>
            </Menu.Item>
        </Menu>
        <RegisterRouter routes={routes} />
    </Fragment>

}