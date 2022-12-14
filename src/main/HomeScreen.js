import React from 'react';
import Home from '../pages/Home';
import AsyncStorage from '@react-native-async-storage/async-storage'
let Utils = require('../common/Utils');


const HomeScreen = ({ navigation, route }) => {
    const getData = async () => {
        const user = await AsyncStorage.getItem("user");
        const login = JSON.parse(user);
        Utils.username = login.user
        console.log(login.user);
        try {
            if (login.user != '')
                Utils.isLogin = true
            else Utils.isLogin = false;

        }
        catch (error) {
            console.log(error);
            Utils.isLogin = false;
        }
    }

    getData()

    return (
        <Home navigation={navigation} route={route} />
    )
}
export default HomeScreen;

