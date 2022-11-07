import React,{useEffect} from "react";
import { View, Image, Text, TouchableOpacity, TextInput, FlatList, ScrollView } from "react-native";
import styles from "../DetailProduct/style";
import Color from "../../common/Color";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { HistorySchema } from "../../data/History";
import Realm from "realm";


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

let realm;

const DetailProduct = (props) => {
    const { navigation } = props;
    const { route } = props;
    const { product } = route.params;

    


    // useEffect(() => {

    //     //   let todos = realm.objects('Todos');
    //     //   setData([...todos]);
    //     getRealmInstance();
    //     createData()
    // }, []);

    useEffect(() => {
        const getRealmInstance = async () => {
          try {
           
            realm = await Realm.open({
              path: 'myrealm',
              schema: [HistorySchema],
            });
          } catch (e) {
            console.log(e);
          }
        };
        //   let todos = realm.objects('History');
        //   setData([...todos]);
        getRealmInstance();
        createData()
      }, []);

    const getRealmInstance = async () => {
        try {
            realm = await Realm.open({
                path: 'myrealm',
                schema: [HistorySchema],
            });
        } catch (e) {
            console.log(e);
        }
    };

    const createData = () => {
        realm.write(() => {
            realm.create('History', {
                id: product.idProduct,
                image: product.image,
                name: product.nameProduct,
            });

        });
    }




    const ItemProduct = ({ item }) => (
        <View>
            <TouchableOpacity onPress={() => onClickItemProduct(item)}>
                <View style={styles.borderProduct}>
                    <Image source={{ uri: item.image }} style={styles.ic_product} />
                </View>
                <Text numberOfLines={2} style={styles.nameProduct}>{item.nameProduct}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 5 }}>
                    <Text style={styles.priceProduct}>{item.price}</Text>
                    <Image source={require('../../image/add_shoppingcart.png')}
                        styles={{ with: '100%', height: '100%' }} />
                </View>
            </TouchableOpacity>
        </View>
    )


    const addCart = async () => {
        try {
            await AsyncStorage.setItem('listCart', JSON.stringify({
                idProduct: product.idProduct,
                nameProduct: product.nameProduct,
                image: product.image,
                price: product.price
            }));
            console.log('save data');
        } catch (error) {

        }

    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 40 }}>
                    <View style={styles.Search}>
                        <TouchableOpacity onPress={props.Back}>
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

                    <View style={styles.informationProduct}>
                        <Image source={{ uri: product.image }} style={{ width: '100%', height: 200 }} />
                        <View style={styles.name_price}>
                            <Text style={styles.nameProduct2}>{product.nameProduct}</Text>
                            <Text style={styles.priceProduct2}>{product.price}</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.detail}>
                            <View style={styles.detail_2}>
                                <Text>Chi tiết</Text>
                                <Image source={require('../../image/menu.png')} style={{ width: 20, height: 20, marginVertical: 10 }} />
                                <Text>Sản phẩm</Text>
                            </View>
                            <View style={styles.detail_2}>
                                <Text>Đánh giá</Text>
                                <Text style={styles.number}>18</Text>
                            </View>
                            <View style={styles.detail_2}>
                                <Text>Hỏi đáp</Text>
                                <Text style={styles.number}>34</Text>
                                <Text>Đặt câu hỏi</Text>
                            </View>
                            <View style={styles.detail_2}>
                                <Text>Siêu thị</Text>
                                <Text style={styles.number}>600</Text>
                                <Text>Gần ba mẹ</Text>
                            </View>

                        </View>
                        <View style={styles.line2} />
                        <View style={styles.margin}>
                            <Text style={{
                                color: Color.pink,
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}>Thường được mua cùng</Text>
                            <FlatList
                                contentContainerStyle={{ alignSelf: 'flex-start', marginVertical: 10 }}
                                data={listProduct}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={ItemProduct} />
                        </View>
                        <View style={styles.line2} />
                        <View style={styles.margin}>
                            <Text style={{
                                color: Color.pink,
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}>Sản phẩm tương tự</Text>
                            <FlatList
                                contentContainerStyle={{ alignSelf: 'flex-start', marginVertical: 10 }}
                                data={listProduct}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={ItemProduct} />
                        </View>
                    </View>
                </View>
            </ScrollView>



            <View style={styles.bottom}>
                <View style={styles.chat}>
                    <Image source={require('../../image/chat.png')} />
                    <View style={styles.bgtextchat}>
                        <Text style={styles.textchat}>Chat</Text>
                    </View>

                </View>
                <View style={styles.call}>
                    <Image source={require('../../image/telephone.png')} />
                    <View style={styles.bgtextchat}>
                        <Text style={styles.textchat}>Call</Text>
                    </View>
                </View>
                <View style={styles.addCart}>
                    <Text style={styles.textAddCart}>Them vao giỏ</Text>
                </View>
                <View style={styles.buy}>
                    <TouchableOpacity onPress={() => addCart()}>
                        <Text style={styles.textBuy}>Mua ngay</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}


export default DetailProduct;