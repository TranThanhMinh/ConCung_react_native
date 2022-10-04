import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const WattingDelivery = (props) => {

    const goHome2 = () => {
        props.goHome();
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }} >
            <TouchableOpacity onPress={goHome2} style={styles.borderButton}>
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
        borderColor: 'blue',
        backgroundColor: 'blue',
        borderRadius: 10
    }
})