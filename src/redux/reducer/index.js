import { applyMiddleware, combineReducers,createStore } from "redux";

import {userReducer} from "../reducer/user";


const allReducers = combineReducers({
  userReducer,
});

export const Store = createStore(allReducers)