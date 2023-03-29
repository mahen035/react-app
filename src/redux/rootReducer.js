import { combineReducers } from "redux";
import colorReducer from "./colorReducer";
import counterReducer from "./counterReducer";

export const rootReducer = combineReducers({
    count: counterReducer,
    favColor: colorReducer
})