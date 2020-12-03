import { combineReducers,createStore } from "redux";
import user from "./reducers/user";

// 合并reducers
export default createStore(combineReducers({
    user,
    
}))