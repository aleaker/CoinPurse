import { combineReducers } from "redux";
import homeReducer from "./homeReducer"
import userReducer from "./userReducer";



export default combineReducers({
    coins: homeReducer,
    user: userReducer
});