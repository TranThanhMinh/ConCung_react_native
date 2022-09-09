import { applyMiddleware, combineReducers,createStore } from "redux";
import thunk from "redux-thunk";

import userReducer from "../reducer/user";
import promotionReducer from "../reducer/promotion";


const allReducers = combineReducers({
  userReducer,promotionReducer
});

export const Store = createStore(allReducers,applyMiddleware(thunk))