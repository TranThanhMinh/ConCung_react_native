
import * as ActionTypes from '../actions/ActionTypes'

function userReducer(state ={},action){
  switch(action.type){
    case ActionTypes.LOGIN_PENĐING:
    case ActionTypes.LOGIN_SUCCESS:{
      return {
        ...state,
        type: action.type,
        data:action.data,
        message: '',
      };
    }
    case ActionTypes.LOGIN_FAIL:{
      return {
        ...state,
        type: action.type,
        data:action.data,
        message: action.message,
      };
    }
    default:
      return state;
  }
}

export default userReducer
