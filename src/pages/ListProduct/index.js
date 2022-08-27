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


const listProduct = [
    {
        idProduct: 1,
        nameProduct: "Tã quần Rascal + Friends",
        image: "https://cdn.concung.com/2021/10/52398-75559-large_mobile/ta-quan-rascal-friends-l-10-15kg-52-mieng.jpg",
        price: "350.000đ"
    },
    {
        idProduct: 2,
        nameProduct: "Tã quần Rascal + Friends (L, 10-15kg, 52 miếng)",
        image: "https://cdn.concung.com/2021/10/52398-75559-large_mobile/ta-quan-rascal-friends-l-10-15kg-52-mieng.jpg",
        price: "25.000đ"
    },
    {
        idProduct: 3,
        nameProduct: "Tã quần Rascal + Friends (L, 10-15kg, 52 miếng)",
        image: "https://cdn.concung.com/2021/10/52398-75559-large_mobile/ta-quan-rascal-friends-l-10-15kg-52-mieng.jpg",
        price: "25.000đ"
    },
    {
        idProduct: 4,
        nameProduct: "Tã quần Rascal + Friends (L, 10-15kg, 52 miếng)",
        image: "https://cdn.concung.com/2021/10/52398-75559-large_mobile/ta-quan-rascal-friends-l-10-15kg-52-mieng.jpg",
        price: "25.000đ"
    },
    {
        idProduct: 5,
        nameProduct: "Tã quần Rascal + Friends (L, 10-15kg, 52 miếng)",
        image: "https://cdn.concung.com/2021/10/52398-75559-large_mobile/ta-quan-rascal-friends-l-10-15kg-52-mieng.jpg",
        price: "25.000đ"
    },
    {
        idProduct: 6,
        nameProduct: "Tã quần Rascal + Friends (L, 10-15kg, 52 miếng)",
        image: "https://cdn.concung.com/2021/10/52398-75559-large_mobile/ta-quan-rascal-friends-l-10-15kg-52-mieng.jpg",
        price: "25.000đ"
    },
    {
        idProduct: 7,
        nameProduct: "Tã quần Rascal + Friends (L, 10-15kg, 52 miếng)",
        image: "https://cdn.concung.com/2021/10/52398-75559-large_mobile/ta-quan-rascal-friends-l-10-15kg-52-mieng.jpg",
        price: "25.000đ"
    },
    {
        idProduct: 7,
        nameProduct: "Tã quần Rascal + Friends (L, 10-15kg, 52 miếng)",
        image: "https://cdn.concung.com/2021/10/52398-75559-large_mobile/ta-quan-rascal-friends-l-10-15kg-52-mieng.jpg",
        price: "25.000đ"
    },
    {
        idProduct: 7,
        nameProduct: "Tã quần Rascal + Friends (L, 10-15kg, 52 miếng)",
        image: "https://cdn.concung.com/2021/10/52398-75559-large_mobile/ta-quan-rascal-friends-l-10-15kg-52-mieng.jpg",
        price: "25.000đ"
    },
    {
        idProduct: 7,
        nameProduct: "Tã quần Rascal + Friends (L, 10-15kg, 52 miếng)",
        image: "https://cdn.concung.com/2021/10/52398-75559-large_mobile/ta-quan-rascal-friends-l-10-15kg-52-mieng.jpg",
        price: "25.000đ"
    }
    ,
    {
        idProduct: 7,
        nameProduct: "Tã quần Rascal + Friends (L, 10-15kg, 52 miếng)",
        image: "https://cdn.concung.com/2021/10/52398-75559-large_mobile/ta-quan-rascal-friends-l-10-15kg-52-mieng.jpg",
        price: "25.000đ"
    }

]

const ListProduct = (props) => {
    const { navigation } = props
    const { route } = props
   // const { name } = route.params;

  //  alert(name.nameProduct)

    const itemCategoryProduct = ({ item }) => (
        <ItemCategoryProduct name={item.name} image={item.image} />
    )

    const BarCount = ({ count }) => {
        <View>
            <Text>{count}</Text>
        </View>
    }

    const backHome = () => {
        props.goBack();
    }

    const clickItem = (item) => (
        props.detailProduct(item)
    //   navigation.navigate('DetailProduct', { product: item })
    )

    const ItemProduct = ({ item }) => (


        <View style={styles.itemProduct}>
            <Image source={{ url: 'https://cdn.concung.com/2022/06/57936-89792-large_mobile/sua-nutifood-varna-complete-850g.jpg' }} style={styles.ic_product} />
            <TouchableOpacity onPress={() => clickItem(item)}>
                <Text numberOfLines={2} style={styles.nameProduct}>{item.nameProduct}</Text>
            </TouchableOpacity>

            <View style={styles.addCart}>
                <Text style={styles.price}>{item.price}</Text>
                <Image source={require('../../image/addCart.png')} />
            </View>

            <View style={styles.sale}>
                <Text>30.000đ</Text>
                <Text style={styles.borderSale}>20%</Text>
            </View>
        </View>

    )

    return (
        <View style={styles.container}>
            <View style={styles.Search}>
                <TouchableOpacity onPress={backHome}>
                    <Image source={require('../../image/back.png')} tyle={styles.Back} />
                </TouchableOpacity>

                <TextInput style={styles.borderSearch} placeholder="Tìm kiếm sản phẩm" />
                <View >
                    <Image source={require('../../image/shoppingcart.png')} style={styles.Cart} />
                    <View style={{
                        backgroundColor: 'red',
                        position: 'absolute',
                        paddingHorizontal: 3,
                        borderRadius: 10,
                        top: -5,
                        right: 10,
                        justifyContent: "center",
                        alignItems: "center",

                    }}>
                        <Text style={{ color: 'white', fontSize: 15 }} > 2 </Text>
                    </View>

                </View>
            </View>
            <View>

                <FlatList
                    style={styles.listCategory}
                    data={categoryProduct}
                    renderItem={itemCategoryProduct}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true} />
            </View>
            <View>

                <FlatList
                    style={styles.listProduct}
                    data={listProduct}
                    numColumns={3}
                    renderItem={ItemProduct} />
            </View>
        </View>
    )
}

export default ListProduct;