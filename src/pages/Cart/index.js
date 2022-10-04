import React , {useEffect} from "react";
import { View ,Text} from "react-native";
import Header from '../Header';
import styles from "../Cart/style";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Cart =(props)=>{
    const{navigation} = props
    const{route} = props



    const getData =async()=>{
        const data = await AsyncStorage.getItem('listCart');
        console.log(' gio hàng: '+ data)
    }

    getData()
   
    return(
        <View style ={styles.container}>
            <Header navigation ={navigation} route ={route}/>
             
        </View> 
    )
}

export default Cart;