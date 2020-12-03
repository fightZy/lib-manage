import React from 'react';

import IndexPage from '../views/general/index';
import Searchbooks from '../views/general/searchbooks/index';
import Log from '../views/general/log/index';
import Register from '../views/general/log/register';
import Er404 from '../views/general/404';
import Resetpassword from '../views/general/log/resetpassword';

import Center from '../views/user/center/index';
import Conadmin from '../views/user/conadmin';

import IndexAdmin from '../views/admin/index';
import Managebooks from '../views/admin/managebooks/index';
import Manageusers from '../views/admin/manageusers/index';

import Favorite from '../views/user/center/favorite';
import Recording from '../views/user/center/recording';
import Reserved from '../views/user/center/recording/reserved';
import Notice from '../views/user/center/notice';
import Indexpage from '../views/user/center/indexpage';

import Warehousing from '../views/admin/managebooks/warehousing';
import Message from '../views/admin/manageusers/message';
import Overview from '../views/admin/managebooks/overview';
import Allusers from '../views/admin/manageusers/allusers';



const routes = [{
    path: '/',
    exact: true,
    render(props) {
        return <IndexPage {...props} />
    }
}, {
    path: "/searchbooks",
    exact: true,
    render(props) {
        return <Searchbooks {...props} />
    }
}, {
    path: "/register",
    exact: true,
    render(props) {
        return <Register {...props} />
    }
}, {
    path: "/log",
    exact: true,
    render(props) {
        return <Log {...props} />
    }
}, {
    path: "/resetpassword",
    exact: true,
    render(props) {
        return <Resetpassword {...props} />
    }
}, {
    path: "/center",
    // 这里不能使用精准匹配，否则下面的子路由匹配不到
    // 路由鉴权重定向
    redirect: {
        need: "log",
        to: "/log",
        state: "请先登录"
    },
    render(props) {
        return <Center {...props} />
    },
    children: [
        {
            path: "/center",
            exact: true,
            render(props) {
                return <Indexpage {...props} />
            }
        },
        {
            path: "/center/notice",
            exact: true,
            render(props) {
                return <Notice {...props} />
            }
        },
        {
            path: "/center/favorite",
            exact: true,
            render(props) {
                return <Favorite {...props} />
            }
        },
        {
            path: "/center/recording",
            exact: true,
            render(props) {
                return <Recording {...props} />
            }
        },
        {
            path: "/center/reserved",
            exact: true,
            render(props) {
                return <Reserved {...props} />
            }
        }
    ]

}, {
    path: "/conadmin",
    exact: true,
    redirect: { need: "log", to: "/log", state: "请先登录" },
    render(props) {
        return <Conadmin {...props} />
    }
}, {
    path: "/indexadmin",
    exact: true,
    redirect: { need: "admin", to: "/", state: "您没有该权限" },
    render(props) {
        return <IndexAdmin {...props} />
    }
}, {
    path: "/managebooks",
    redirect: { need: "admin", to: "/", state: "您没有该权限" },
    render(props) {
        return <Managebooks {...props} />
    },
    children: [
        {
            path: '/managebooks',
            exact: true,
            render(props) {
                return <Overview {...props} />
            }
        },
        {
            path: '/managebooks/warehousing',
            exact: true,
            render(props) {
                return <Warehousing {...props} />
            }
        }
    ]
}, {
    path: "/manageusers",
    redirect: { need: "admin", to: "/", state: "您没有该权限" },
    render(props) {
        return <Manageusers {...props} />
    },
    children: [
        {
            path: '/manageusers',
            render(props) {
                return <Allusers {...props} />
            }
        },
        {
            path: '/manageusers/message',
            render(props) {
                return <Message {...props} />
            }
        }
    ]
}, {
    path: "",
    exact: false,
    render(props) {
        return <Er404 {...props} />
    }
}];

const genNav = [
    {
        title: "首页",
        to: '/'
    }, {
        title: "书籍查询",
        to: '/searchbooks'
    }, {
        title: "登录注册",
        to: '/log'
    }
];

const userNav = [
    {
        title: "首页",
        to: '/'
    }, {
        title: "书籍查询",
        to: '/searchbooks'
    }, {
        title: "个人中心",
        to: '/center'
    }, {
        title: "联系管理员",
        to: "/conadmin"
    }
];


const adminNav = [
    {
        title: "首页",
        to: '/indexadmin'
    }, {
        title: "书籍管理",
        to: '/managebooks'
    }, {
        title: "读者管理",
        to: '/manageusers'
    }
];

export { routes, genNav, userNav, adminNav };