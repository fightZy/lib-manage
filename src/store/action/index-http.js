import { useDispatch } from 'react-redux';
import { userlog } from '../http';

// # 连接后端时使用
const useLog = () => {
    const dispatch = useDispatch();
    return async (name, password) => {
        userlog(name, password).then(res => {
            let { data, headers: { authorization } } = res;
            // console.log(data,authorization);
            localStorage.setItem("token", authorization);
            dispatch({
                type: 'LOG',
                name
            })
        }).catch(err => {
            console.log(err);
        })

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