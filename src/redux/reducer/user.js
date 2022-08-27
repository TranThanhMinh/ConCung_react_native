import {LOGIN,INCREMENT} from '../actions/user'

function userReducer(state ={},action){
  switch(action.type){
    case INCREMENT:
    case LOGIN:{
      return {
        ...state,
        type: action.type,
        data:action.data,
        message: '',
      };
    }
  }
}

// import { applyMiddleware, combineReducers,createStore } from "redux";

// import {loginReducer} from "../actions/user";
// import thunk from 'redux-thunk';

// const allReducers = combineReducers({
//   loginReducer,
// });

// export const Store = createStore(allReducers,applyMiddleware(thunk))