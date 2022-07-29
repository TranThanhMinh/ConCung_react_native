import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Promotion = ({ navigation, route }) => {
    const getData = async ()=>{
        const user =await AsyncStorage.getItem("user");
        try {
            console.log(user);
        }
        catch (error) {
            console.log(error);
          
        }
    }
    
    return (
        <View style={{ marginTop: 50 }}>
            <TextInput placeholder="ewewqewq" />
            <TouchableOpacity onPress={getData}>
                <Text>Setting ten  </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Promotion;