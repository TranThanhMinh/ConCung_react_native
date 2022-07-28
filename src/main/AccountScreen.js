import React,{useState} from 'react';
import {View} from 'react-native';
import Account from '../pages/Account';
import Login from '../pages/Login'

let Utils  = require('../common/Utils');

const AccountScreen =({navigation,route})=>{
    console.log("account: "+Utils.isLogin)
    return(
        <View style ={{flex:1}}>
          {
             Utils.isLogin ? <Account navigation={navigation} route = {route} /> :
              <Login navigation={navigation} route = {route}/>
          }
        </View>
    )

}

export default AccountScreen;