import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image, FlatList } from "react-native";
import ItemCategoryProduct from "../Category/itemcategoryproduct";
import styles from "../ListProduct/style";



const categoryProduct = [{
    id: 1,
    image: "https://concung.com/img/res/menu-mobile/10-iconsuabotcongthuc@500-1634918291.png",
    name: "Sữa bột cao cấp"
},
{
    id: 2,
    image: "https://concung.com/img/res/menu-mobile/10-iconsuabotcongthuc@500-1634918291.png",
    name: "Bĩm sửa khuyến mãi"
}, {
    id: 3,
    image: "https://concung.com/img/res/menu-mobile/10-iconsuabotcongthuc@500-1634918291.png",
    name: "Sữa tươi các loại"
}, {
    id: 4,
    image: "https://concung.com/img/res/menu-mobile/10-iconsuabotcongthuc@500-1634918291.png",
    name: "Sữa bột cao cấp"
}, {
    id: 5,
    image: "https://concung.com/img/res/menu-mobile/10-iconsuabotcongthuc@500-1634918291.png",
    name: "Sữa bột cao cấp"
}, {
    id: 6,
    image: "https://concung.com/img/res/menu-mobile/10-iconsuabotcongthuc@500-1634918291.png",
    name: "Sữa bột cao cấp"
}, {
    id: 7,
    image: "https://concung.com/img/res/menu-mobile/10-iconsuabotcongthuc@500-1634918291.png",
    name: "Sữa bột cao cấp"
}, {
    id: 8,
    image: "https://concung.com/img/res/menu-mobile/10-iconsuabotcongthuc@500-1634918291.png",
    name: "Sữa bột cao cấp"
}, {
    id: 9,
    image: "https://concung.com/img/res/menu-mobile/10-iconsuabotcongthuc@500-1634918291.png",
    name: "Sữa bột cao cấp"
}, {
    id: 10,
    image: "https://concung.com/img/res/menu-mobile/10-iconsuabotcongthuc@500-1634918291.png",
    name: "Sữa bột cao cấp"
}, {
    id: 11,
    image: "https://concung.com/img/res/menu-mobile/10-iconsuabotcongthuc@500-1634918291.png",
    name: "Sữa bột cao cấp"
}];


const ListProduct = ({ navigation, route }) => {

    const itemCategoryProduct = ({ item }) => (
        <ItemCategoryProduct name={item.name} image={item.image} />
    )

    const backHome = () => {
        navigation.goBack();
    }




    return (
        <View style={styles.container}>
            <View style={styles.Search}>
                <TouchableOpacity onPress={backHome}>
                    <Image source={require('../../image/back.png')} tyle={styles.Back} />
                </TouchableOpacity>

                <TextInput style={styles.borderSearch} placeholder="Tìm kiếm sản phẩm" />
                <Image source={require('../../image/shoppingcart.png')} style={styles.Cart} />
            </View>
            <View>
                <FlatList
                    data={categoryProduct}
                    renderItem={itemCategoryProduct}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                />
            </View>
        </View>
    )
}

export default ListProduct;