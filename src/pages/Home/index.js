import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, FlatList, SafeAreaView, ActivityIndicator } from "react-native";
import styles from "./style";
import ItemCategoryProduct from '../Category/itemcategoryproduct';

let API_SERVER = require("../../common/Api");


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


const trademark = [
    {
        image: "https://cdn.concung.com/img/res/menu/516-download-1628306159.png",
    },
    {
        image: "https://cdn.concung.com/img/res/menu/516-download-1628306159.png",
    },
    {
        image: "https://cdn.concung.com/img/res/menu/516-download-1628306159.png",
    },
    {
        image: "https://cdn.concung.com/img/res/menu/516-download-1628306159.png",
    },
    {
        image: "https://cdn.concung.com/img/res/menu/516-download-1628306159.png",
    },
    {
        image: "https://cdn.concung.com/img/res/menu/516-download-1628306159.png",
    },
    {
        image: "https://cdn.concung.com/img/res/menu/516-download-1628306159.png",
    },
    {
        image: "https://cdn.concung.com/img/res/menu/516-download-1628306159.png",
    },
    {
        image: "https://cdn.concung.com/img/res/menu/516-download-1628306159.png",
    },
    {
        image: "https://cdn.concung.com/img/res/menu/516-download-1628306159.png",
    },
    {
        image: "https://cdn.concung.com/img/res/menu/516-download-1628306159.png",
    },
]

const listProduct = [
    {
        idProduct: 1,
        nameProduct: "Tã quần Rascal + Friends (L, 10-15kg, 52 miếng)",
        image: "https://cdn.concung.com/2021/10/52398-75559-large_mobile/ta-quan-rascal-friends-l-10-15kg-52-mieng.jpg",
        price: "25.000đ"
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
    }

]



const Home = ({ navigation, route }) => {

    const toListProduct = async() => {
       navigation.navigate("ListProduct");
    
    }

    const itemcategoryproduct = ({ item }) => (
        <ItemCategoryProduct image={item.image} name={item.name} />
    )

    const ItemTradeMark = ({ item }) => (
        <View>
            <Image source={{ uri: item.image }} style={styles.ic_trademasrk} />
        </View>
    )

    const ItemProduct = ({ item }) => (
        <View>
            <View style={styles.borderProduct}>
                <Image source={{ uri: item.image }} style={styles.ic_product} />
            </View>
            <Text numberOfLines={2} style={styles.nameProduct}>{item.nameProduct}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 5 }}>
                <Text style={styles.priceProduct}>{item.price}</Text>
                <Image source={require('../../image/add_shoppingcart.png')}
                    styles={{ with: '100%', height: '100%' }} />
            </View>

        </View>
    )

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getMovies = async () => {
        try {
            const response = await fetch(API_SERVER.movies);
            const json = await response.json();
            setData(json.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getMovies();

    }, []);



    return (
        <View style={styles.containner}>
            <View style={styles.search}>
                <Image source={require('../../image/scan.png')} style={styles.ic_back} />
                <TextInput placeholder="tim kiem nhanh " style={styles.borderSearch} />
                <Image source={require('../../image/shoppingcart.png')} style={styles.ic_back} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <FlatList
                        style={{ marginTop: 10 }}
                        data={categoryProduct}
                        renderItem={itemcategoryproduct}
                        horizontal={true}
                        showsHorizontalScrollIndicator={true} />
                </View>
                <View style={styles.line}></View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.border1}>
                        <Text style={styles.text1} >Siêu thị</Text>
                        <Text style={styles.text2}>Gần đây</Text>
                    </View>
                    <View style={styles.border1}>
                        <Text style={styles.text1} >Đơn hàng</Text>
                        <Text style={styles.text2}>đã mua</Text>
                    </View>
                    <View style={styles.border1}>
                        <Text style={styles.text1} >Voucher</Text>
                        <Text style={styles.text2}>Sưu tập ngay</Text>
                    </View>
                    <View style={styles.border1}>
                        <Text style={styles.text1} >CSKH</Text>
                        <Text style={styles.text2}>Gọi điện</Text>
                    </View>
                </View>
                <View style={styles.line2}></View>
                <View>
                    <View style={styles.title}>
                        <Text style={styles.title1}>Sữa bột</Text>
                        <TouchableOpacity onPress={toListProduct}>
                            <Text style={styles.viewAll}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image source={{ uri: "https://concung.com/img/adds/2022/1651046864-HOME-CAT-ON-HOME-ENFA-MOBI.png" }}
                            style={{ width: '100%', height: 150, marginBottom: 5 }} />
                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <FlatList
                                contentContainerStyle={{ alignSelf: 'flex-start' }}
                                data={trademark}
                                showsVerticalScrollIndicator={true}
                                showsHorizontalScrollIndicator={false}
                                numColumns={Math.ceil(trademark.length / 2)}
                                renderItem={ItemTradeMark} />
                        </ScrollView>

                        <FlatList
                            contentContainerStyle={{ alignSelf: 'flex-start' }}
                            data={listProduct}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={ItemProduct} />
                    </View>
                </View>
                <View style={styles.line2}></View>
                <View>
                    <View style={styles.title}>
                        <Text style={styles.title1}>Bĩm tả</Text>
                        <TouchableOpacity onPress={toListProduct}>
                            <Text style={styles.viewAll}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image source={{ uri: "https://concung.com/img/adds/2022/1651046864-HOME-CAT-ON-HOME-ENFA-MOBI.png" }}
                            style={{ width: '100%', height: 150, marginBottom: 5 }} />
                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <FlatList
                                contentContainerStyle={{ alignSelf: 'flex-start' }}
                                data={trademark}
                                showsVerticalScrollIndicator={true}
                                showsHorizontalScrollIndicator={false}
                                numColumns={Math.ceil(trademark.length / 2)}
                                renderItem={ItemTradeMark} />
                        </ScrollView>

                        <FlatList
                            contentContainerStyle={{ alignSelf: 'flex-start' }}
                            data={listProduct}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={ItemProduct} />
                    </View>
                </View>
                {isLoading ? <ActivityIndicator /> :
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View>
                                <Text>{item.title}, {item.releaseYear}</Text>
                            </View>

                        )}
                    />}

            </ScrollView>
        </View>
    )
}

export default Home;