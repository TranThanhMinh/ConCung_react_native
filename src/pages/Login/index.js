import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";
import { useSelector, useDispatch } from "react-redux";
import { State } from "react-native-gesture-handler";
import { loginAccount } from '../../redux/actions/user';
import * as ActionTypes from '@actions/ActionTypes'
import  Toast  from 'react-native-toast-message';
import Loading from '../../component/Loading';
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

// { navigation, route }
const Login = (props) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const { userReducer } = useSelector(state => state)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        console.log('LOGIN2', loading)
    }, [])

    useEffect(() => {
        const { type, data, message } = userReducer
        switch (type) {
            case ActionTypes.LOGIN_PENĐING:
                setLoading(true)
                break
            case ActionTypes.LOGIN_SUCCESS:
                try {
                    AsyncStorage.setItem("user", JSON.stringify({
                        user: user,
                        pass: pass
                    }));

                    console.log(JSON.stringify('accessToken: '+global.accessToken))
                } catch (error) {

                }
                setLoading(false)
               props.goToHome()
                break
            case ActionTypes.LOGIN_FAIL:
                  console.log('LOGIN_FAIL', JSON.stringify(message))
                  Toast.show({
                    type: 'tomatoToast',
                    // And I can pass any custom props I want
                    props: { uuid: 'bba1a7d0-6ab2-4a0a-a76e-ebbe05ae6d70' }
                  });
                //   Toast.show(
                //     {
                //         error:'title',
                //         text1:message
                //     }
                //   );
                setLoading(false)
                break
        }

    }, [userReducer])

    const handleLogin = async () => {
        if (user.length == 0) {
            Alert.alert('Vui long nhap tai khoan')
        } else if (pass.length == 0) {
            Alert.alert('Vui long nhap mat khau')
        } else {
            dispatch(loginAccount({ email: user, password: pass }))
        }
    }
    return (
        <View style={styles.contrainer}>
            <Text style={styles.titleLogin}>Đăng nhập</Text>
            <TextInput placeholder="nhap TAI KHOAN" style={styles.borderInput} onChangeText={text => setUser(text)} />
            <TextInput placeholder="nhap mat khau" style={styles.borderInput} onChangeText={text => setPass(text)} secureTextEntry={true} />
            <TouchableOpacity onPress={() => handleLogin()} style={styles.borderLogin}>
                <Text style={styles.text}>Dang nhap</Text>
            </TouchableOpacity>
            {

                loading ? <Loading/> : null
            }
        </View>
    )
}

export default Login;