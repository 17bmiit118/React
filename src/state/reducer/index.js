import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import secondReducer from "./secondReducer";

const reducers = combineReducers({
    amount:amountReducer,
    second:secondReducer
})

export default reducers;