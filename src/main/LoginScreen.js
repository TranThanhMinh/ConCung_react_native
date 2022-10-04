import React from 'react';
import Login from '../pages/Login';
import Constants from "@actions/Constants"

const LoginScreen = ({ navigation, route }) => {

    return (
        <Login navigation={navigation} route={route} />
    )
}
export default LoginScreen;