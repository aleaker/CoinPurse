import { combineReducers } from "redux";
import coinsReducer from "./coinsReducer"
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import favoriteReducer from "./favoriteReducer";
import watchlistReducer from "./watchlistReducer";
import searchReducer from "./searchReducer"



export default combineReducers({
    coins: coinsReducer,
    user: userReducer,
    error: errorReducer,
    following: favoriteReducer,
    watched: watchlistReducer,
    searched: searchReducer,
});