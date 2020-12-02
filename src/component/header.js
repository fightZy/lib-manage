import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Layout, Row } from 'antd';
import { useSelector } from 'react-redux';
import { GlobalOutlined } from "@ant-design/icons";
// 三路由
import { genNav, userNav, adminNav } from '../router/router_list';
import Container from './container';
import Nav from './nav';
import { useOutlog } from '../store/action';

function Header() {

    let outlog = useOutlog();

    let nav = genNav;
    let user = useSelector(state => state.user);
    // console.log(user);
    // 根据不用状态显示不同的路由
    if (user.log && user.admin) {
        nav = adminNav;
    } else if (user.log) {
        nav = userNav;
    }


    return <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Container>
            <Row>
                <Col span={4}>
                    <h1 id="logo" >
                        
                        <Link to="/" ><GlobalOutlined /> 图书管理系统</Link>
                    </h1>
                </Col>
                <Col span={9}></Col>
                {
                    user.log ?
                        <Col span={3} style={{ color: "#e6f7ff", textAlign: "center" }}>
                            {`欢迎 ${user.username} `} <span
                                onClick={() => { outlog() }}
                                style={{cursor:"pointer"}}
                            >退出登录</span>
                        </Col> :
                        <Col span={3}></Col>
                }
                <Col span={8} >
                    <Nav
                        navs={nav}
                        mode={"horizontal"}
                        getSelected={(location) => {
                            let { pathname } = location;
                            return nav.findIndex(item => {
                                return item.to === pathname;
                            })
                        }}
                    />
                </Col>
            </Row>
        </Container>
    </Layout.Header>


}

export default Header;