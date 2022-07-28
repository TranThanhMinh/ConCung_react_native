import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";

const Login =  ({navigation,route}) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
  
    const handleLogin  = async () => {
        if (user.length == 0) {
            Alert.alert('Vui long nhap tai khoan')
        } else if (pass.length == 0) {
            Alert.alert('Vui long nhap mat khau')
        } else {
            try{
               await AsyncStorage.setItem("user","tranthanhminh");
            }catch(error){

            }
           
            navigation.navigate('Home');
        }
    }
    return (
        <View style={styles.contrainer}>
            <Text style={styles.titleLogin}>Đăng nhập</Text>
             <TextInput placeholder="nhap TAI KHOAN" style={styles.borderInput} onChangeText={text => setUser(text)} />
            <TextInput placeholder="nhap mat khau" style={styles.borderInput} onChangeText={text => setPass(text)} secureTextEntry={true} />
            <TouchableOpacity onPress={handleLogin} style={styles.borderLogin}>
                <Text style={styles.text}>Dang nhap</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;