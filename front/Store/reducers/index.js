import { combineReducers } from "redux";
import homeReducer from "./homeReducer"
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import favoriteReducer from "./favoriteReducer";



export default combineReducers({
    coins: homeReducer,
    user: userReducer,
    error: errorReducer,
    following: favoriteReducer,
});