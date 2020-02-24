import { combineReducers } from "redux";
import coinsReducer from "./coinsReducer"
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import favoriteReducer from "./favoriteReducer";
import watchlistReducer from "./watchlistReducer";
import searchReducer from "./searchReducer"
import listReducer from "./listReducer"



export default combineReducers({
    coins: coinsReducer,
    user: userReducer,
    error: errorReducer,
    following: favoriteReducer,
    watched: watchlistReducer,
    searched: searchReducer,
    list: listReducer
});