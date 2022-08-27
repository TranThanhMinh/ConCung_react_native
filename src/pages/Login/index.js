import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";
import { useSelector, useDispatch } from "react-redux";
import { State } from "react-native-gesture-handler";
 import { login } from '../../redux/actions/user'

const Login = ({ navigation, route }) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const {userReducer} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(()=>{
        const{type,data,message} = userReducer
        switch(type){
           case "LOGIN":
            console.log('LOGIN2',JSON.stringify(data))
            break
        }

    },[userReducer])

    const handleLogin = async () => {
        dispatch(login({user:user,pass:pass}))
        // if (user.length == 0) {
        //     Alert.alert('Vui long nhap tai khoan')
        // } else if (pass.length == 0) {
        //     Alert.alert('Vui long nhap mat khau')
        // } else {
        //     try {
        //         await AsyncStorage.setItem("user", JSON.stringify({
        //             user: user,
        //             pass: pass
        //         }));
        //     } catch (error) {

        //     }

        //     navigation.navigate('Home');
        // }
    }
    return (
        <View style={styles.contrainer}>
            <Text style={styles.titleLogin}>Đăng nhập</Text>
            <TextInput placeholder="nhap TAI KHOAN" style={styles.borderInput} onChangeText={text => setUser(text)} />
            <TextInput placeholder="nhap mat khau" style={styles.borderInput} onChangeText={text => setPass(text)} secureTextEntry={true} />
            <TouchableOpacity onPress={()=>handleLogin()} style={styles.borderLogin}>
                <Text style={styles.text}>Dang nhap</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;