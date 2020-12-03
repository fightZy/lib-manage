import { useDispatch } from 'react-redux';

// # 不连接后端测试时使用
const useLog = () => {
    const dispatch = useDispatch();
    return async (name, password) => {
            dispatch({
                type:'LOG',
                name
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