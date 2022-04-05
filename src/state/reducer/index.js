import { combineReducers } from "redux";
import reducer from "./amountReducer";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    amount:amountReducer
})

export default reducers;