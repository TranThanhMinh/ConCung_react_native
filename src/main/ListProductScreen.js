import React from "react";
import ListProduct from "../pages/ListProduct";


const ListProductScreen = ({ navigation, route }) => {
    return (
        <ListProduct navigation={navigation} route={route}
            detailProduct={(item) => {
                navigation.navigate('DetailProduct', { product: item })
            }}
            goBack={() => {
                navigation.goBack()
            }} />
    )
}

export default ListProductScreen;