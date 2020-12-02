import { Menu } from 'antd';
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, UserOutlined, FolderOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { SubMenu, Item } = Menu;
function Subnav(props) {

    const { pathname } = useLocation();
    let key = pathname.split('/').pop();
    
    return <Menu
        mode="inline"
        theme="light"
        style={{ width: "90%" }}
        multiple={false}
        selectedKeys={key}
        openKeys={key === "recording" || key === "reserved" ? ["sub1"] : []}
    >
        <Item key="center" icon={<UserOutlined />} >
            <Link to="/center">{"个人信息"}</Link>
        </Item>
        <Item key="notice" icon={<MailOutlined />} >
            <Link to="/center/notice">{"通知"}</Link>
        </Item>
        <Item key="favorite" icon={<FolderOutlined />} >
            <Link to="/center/favorite">{"收藏"}</Link>
        </Item>
        <SubMenu key="sub1" onTitleClick={() => { props.history.push('/center/recording') }} icon={<AppstoreOutlined />} title="记录">
            <Item key="recording" >
                <Link to="/center/recording">{"借阅记录"}</Link>
            </Item>
            <Item key="reserved" >
                <Link to="/center/reserved">{"预约记录"}</Link>
            </Item>
        </SubMenu>

    </Menu>
}


export default Subnav;