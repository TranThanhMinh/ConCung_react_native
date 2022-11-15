import React,{useState} from 'react';
import {View} from 'react-native';
import ShopRecently from '../pages/ShopRecently';
import Login from '../pages/Login'
import  Constants from '../common/Constants'

let Utils  = require('../common/Utils');

const ShopRecentlyScreen =({navigation,route})=>{
    console.log("account: "+Utils.isLogin)

    const handleLogOut = async () => {
        await AsyncStorage.setItem("user", "");
        Utils.isLogin = false;
        navigation.navigate('Home')
      }
    return(
     
          <ShopRecently navigation={navigation} route = {route} 
          goToUrgent={()=>{navigation.navigate('UrgentScreen')}}/> 
   
    )

}

export default ShopRecentlyScreen;