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


    return <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100vw' }}>
        <Container>
            <Row>
                <Col xl={{ span: 4, push: 0 }} md={{ span: 8, push: 8 }} xs={{ span: 8, push: 8 }} >
                    <h1 id="logo" >
                        <Link to="/" ><GlobalOutlined /> 图书管理系统</Link>
                    </h1>
                </Col>
                <Col xl={9} md={5} xs={5}></Col>
                {

                    <Col xl={{ span: 3, pull: 0 }} md={{ span: 3, pull: 13 }} xs={{ span: 3, pull: 13 }} style={{ color: "#e6f7ff", textAlign: "center" }}>
                        {
                            user.log ?
                                <span
                                    onClick={() => { outlog() }}
                                    style={{ cursor: "pointer" }}
                                >{`${user.username}退出登录`}</span>
                                : ''
                        }
                    </Col>
                }
                <Col xl={8} md={8} xs={8}>
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