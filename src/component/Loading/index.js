import React from "react";
import { View,ActivityIndicator } from "react-native";

const Loading =()=>{
    return(
        <ActivityIndicator size='large' style={{ marginTop: 50 }}/>
    )
}

export default Loading;