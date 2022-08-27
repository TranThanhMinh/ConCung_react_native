import React from "react";
import { View } from "react-native";
import Cart from "../pages/Cart";

const CartScreen =({navigation,route})=>{
    return(
      <Cart navigation={navigation} route={route}
         goBack={()=>{navigation.goBack()}}/>
    )
}
export default CartScreen;