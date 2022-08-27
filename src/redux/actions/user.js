export const INCREMENT='INCREMENT'
export const LOGIN='LOGIN'

export const login = params => {
    console.log('params', JSON.stringify(params))

    return (dispatch) => {
        dispatch({ type: LOGIN, data: "Login thành công" })
    }

}


export const login2 = params => {
    //   const dispatch = useDispatch()
    console.log('params', JSON.stringify(params))

    return (dispatch) => {
        dispatch({ type: "INCREMENT", data: "Login thành công" })
    }

}