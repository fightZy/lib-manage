import React from 'react';
import { Menu } from "antd";
import { Link, useLocation } from 'react-router-dom';


function Nav(props) {

    const { navs, mode, getSelected, theme = "dark" } = props;
    // 根据url确定选中的导航
    const location = useLocation();
    const selectedKey = getSelected(location);
    return <Menu
        style={{ textAlign: "center" }}
        // 排列模式
        mode={mode}
        // 主题
        theme={theme}
        // 默认选中项
        //defaultSelectedKeys={["0"]}
        // 选中项
        selectedKeys={[selectedKey.toString()]}

    >

        {navs.map((item, index) => {
            return <Menu.Item key={index}>
                <Link to={item.to}>{item.title}</Link>
            </Menu.Item>
        })}
    </Menu>
}


export default Nav;