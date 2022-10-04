import React from "react";
import { View, TouchableOpacity, Image, Text ,TextInput} from 'react-native';
import styles from "../Header/style";

const Header = (props) => {
    return(
        
        <View style={styles.Search}>
            <TouchableOpacity onPress={()=>{
                props.navigation.goBack()
            }}>
                <Image source={require('../../image/back.png')} tyle={styles.Back} />
            </TouchableOpacity>

            <View >
                <Image source={require('../../image/home.png')} style={styles.Cart} />
            </View>
        </View>
    )
}

export default Header;


