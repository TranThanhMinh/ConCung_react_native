import { applyMiddleware, combineReducers,createStore } from "redux";
import thunk from "redux-thunk";

import userReducer from "../reducer/user";


const allReducers = combineReducers({
  userReducer,
});

export const Store = createStore(allReducers,applyMiddleware(thunk))