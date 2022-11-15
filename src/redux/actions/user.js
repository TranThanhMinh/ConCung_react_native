import axios from 'axios';
import * as ActionTypes from '../actions/ActionTypes'
import Service from '../../common/Service';
import { login } from '../../common/Api'

export const loginAccount = params => {
    console.log('params', JSON.stringify(params))
    return (dispatch) => {
        dispatch({ type: ActionTypes.LOGIN_PENĐING })
        Service.postApi(login, params)
            .then(data => {
                if (data.result == 'success'){
                    let user = data.data
                    global.accessToken = user.accessToken
                    console.log('global.accessToken '+JSON.stringify( global.accessToken.accessToken))
                    dispatch({ type: ActionTypes.LOGIN_SUCCESS, data })
                }
                else {
                    dispatch({ type: ActionTypes.LOGIN_FAIL, message: data.message, })
                }
            })
    }

}


export const login2 = params => {
    //   const dispatch = useDispatch()
    console.log('params2', JSON.stringify(params))
    return (dispatch) => {
        dispatch({ type: ActionTypes.LOGIN, data: "Login thành công " })
    }

}