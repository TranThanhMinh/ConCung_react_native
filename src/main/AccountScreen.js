import React,{useState} from 'react';
import {View} from 'react-native';
import Account from '../pages/Account';
import Login from '../pages/Login'
import  Constants from '../common/Constants'

let Utils  = require('../common/Utils');

const AccountScreen =({navigation,route})=>{
    console.log("account: "+Utils.isLogin)

    const handleLogOut = async () => {
        await AsyncStorage.setItem("user", "");
        Utils.isLogin = false;
        navigation.navigate('Home')
      }
    return(
        <View style ={{flex:1}}>
          {
             Utils.isLogin ? <Account navigation={navigation} route = {route} /> :
              <Login navigation={navigation} route = {route} 
               goToHome={() => navigation.navigate(Constants.Screen.Home)}/>
          }
        </View>
    )

}

export default AccountScreen;