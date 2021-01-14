import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { routes } from './router_list';


function IndexRouter(props) {
    // console.log(props);
    let user = useSelector(state=>state.user);
    console.log(user);
    return <Switch>
        {routes.map((item, index) => {
            return <Route
                path={item.path}
                exact={item.exact}
                key={index}
                render={(routerProps) => {
                    let { children,redirect } = item;
                    // console.log(redirect);
                    
                    // # 路由鉴权
                    if(redirect){
                       // 查看用户状态是否符合要求，符合跳转，不符合跳转到指定页面，附带提示信息     
                       return user[redirect.need]?
                       item.render({ ...routerProps, ...props, children })
                       :
                       <Redirect to={{pathname:redirect.to,state:{"info":redirect.state}}} />
                    }
                    return item.render({ ...routerProps, ...props, children });
                }}
            />
        })}
    </Switch>
}




export default IndexRouter;