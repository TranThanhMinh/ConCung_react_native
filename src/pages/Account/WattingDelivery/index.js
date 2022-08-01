import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const WattingDelivery = (props) => {

    const { navigation } = props
    const goHome = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }} >
            <TouchableOpacity onPress={goHome} style={styles.borderButton}>
                <Text style={{
                    textAlign: 'center',
                    color: 'white',
                }}>Tiếp tục mua sản phẩm</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WattingDelivery;


const styles = StyleSheet.create({
    borderButton: {
        padding: 10,
        alignItems: 'center',
        borderColor: 'blue',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 10
    }
})