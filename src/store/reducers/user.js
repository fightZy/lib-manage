import { createStore } from 'redux';

const user = (state = {
    admin:false,
    log: false,
    username: null,
    notice:[
        {
            title:'欢迎使用 图书管理系统',
            sender:'图书系统',
            content:'请仔细阅读以下使用手册balbal....'
        }
    ]
}, action) => {
    switch (action.type) {
        case 'LOG':
            return {
                ...state,
                log: true,
                username: action.name
            }
        case 'OUT_LOG':
            return {
                ...state,
                admin:false,
                log: false,
                username: null
            }
        case 'ADMIN_LOG':
            return{
                ...state,
                admin:true,
                log:true,
                username:action.name
            }
        default:
            return state
    }
}



export default user;
