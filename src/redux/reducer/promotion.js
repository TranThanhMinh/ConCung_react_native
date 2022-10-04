import * as ActionTypes from '../actions/ActionTypes'

function promotionReducer(state = {}, action) {
    switch (action.type) {
        case ActionTypes.WORKOUTS_PENĐING:
        case ActionTypes.WORKOUTS_SUCCESS:
            return {
                ...state,
                type: action.type,
                data: action.data,
                message: ''
            };

        default:
            return state
    }
}

export default promotionReducer