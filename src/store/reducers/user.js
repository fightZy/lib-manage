// import { createStore } from 'redux';

const user = (state = {
    admin:false,
    log: false,
    username: null,
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
