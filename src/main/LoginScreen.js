import React from 'react';
import Login from '../pages/Login';


const LoginScreen =({navigation,route})=>{

    return(
        <Login navigation={navigation} route ={route}/>
    )
}
export default LoginScreen;