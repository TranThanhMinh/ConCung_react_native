import * as ActionTypes from './ActionTypes'

import Service from '../../common/Service';
import axios from 'axios';
import { workout } from '../../common/Api'


export const workouts = params => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.WORKOUTS_PENĐING })
        Service.getApi(workout,params).then(data => {
            if (data != null) {
                dispatch({ type: ActionTypes.WORKOUTS_SUCCESS, data })
            } else {
                dispatch({ type: ActionTypes.WORKOUTS_FAIL, data })
            }
        })
    }
}