import React from "react";
import { View } from "react-native";
import ListProduct from "../pages/ListProduct";


const ListProductScreen =({navigation,route})=>{
    return(
        <ListProduct navigation={navigation} route = {route}/>
    )
}

export default ListProductScreen;