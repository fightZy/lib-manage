import React from 'react';
import { Switch, Route } from 'react-router-dom';

function RegisterRouter(props) {
    let { routes } = props;
    return <Switch>
        {routes.map((item, index) => {
            // console.log(item);
            return <Route
                path={item.path}
                exact={true}
                key={index}
                
                render={(routerProps) => {
                    return item.render({ ...routerProps, ...props });
                }}
            />
        })}
    </Switch>

    
}

export default RegisterRouter;