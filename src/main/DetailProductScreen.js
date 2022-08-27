import React from "react";
import DetailProduct from '../pages/DetailProduct'
import { View } from "react-native";


const DetailProductScreen = ({ navigation, route }) => {
    return (
        <DetailProduct navigation={navigation} route={route}
            Back={() => { navigation.goBack() }} />
    )
}

export default DetailProductScreen;