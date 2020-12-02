import { useDispatch } from 'react-redux';
import http from '../http';

const useLog = () => {
    const dispatch = useDispatch();
    return async (name, password) => {
        // http({
        //     method: 'post',
        //     url: "/login",
            // headers: { 'Access-Control-Allow-Origin': '*' },
            // params:{
            //     name,
            //     password,
            // }
        //     data: {
        //         name,
        //         password,
        //     }
        // }).then(res => {
        //     console.log(res);
        //     let {data,headers:{authorization}}  = res;
        //     console.log(data,authorization);
            dispatch({
                type:'LOG',
                name
            })
        // }).catch(err=>{
        //     console.log(err);
        // })

    }
}

const useOutlog = () => {
    const dispatch = useDispatch();
    return () => {
        dispatch({
            type: 'OUT_LOG',
        })
    }
}

const useAdminlog = () => {
    const dispatch = useDispatch();
    return (name) => {
        dispatch({
            type: 'ADMIN_LOG',
            name
        })
    }
}

export {
    useLog,
    useOutlog,
    useAdminlog
}