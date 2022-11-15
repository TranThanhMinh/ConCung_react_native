import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, TextInput, Image, ImageBackground, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";
import { useSelector, useDispatch } from "react-redux";
import { State } from "react-native-gesture-handler";
import { loginAccount } from '../../redux/actions/user';
import * as ActionTypes from '@actions/ActionTypes'
import Toast from 'react-native-toast-message';
import Loading from '../../component/Loading';
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import ImagePicker from 'react-native-image-crop-picker';
import { UserState } from "realm";
import ItemCategoryProduct from '../Category/itemcategoryproduct';

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

const initialList = [

];




// { navigation, route }
const Urgent = (props) => {

    const [image, setImage] = useState('')

    const [list, setList] = React.useState(initialList);

    const itemcategoryproduct = ({ item }) => (
        <ItemCategoryProduct image={item.image} name={item.name} />
    )


    function pickSingleWithCamera(cropping, mediaType = 'photo') {
        ImagePicker.openCamera({
            cropping: cropping,
            width: 500,
            height: 500,
            includeExif: true,
            mediaType,
        })
            .then((image) => {
                console.log('received image', image);
                const i = image.path
                const newList = list.concat({ i });
                setList(newList);
                // this.setState({
                //     image: {
                //         uri: image.path,
                //         width: image.width,
                //         height: image.height,
                //         mime: image.mime,
                //     },
                //     images: null,
                // });
            })
            .catch((e) => alert(e));
    }

    const pickSingleBase64 = (cropit) => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: cropit,
            includeBase64: true,
            includeExif: true,
        })
            .then((image) => {
                // console.log('received base64 image', image);
                const i = image.path
                const newList = list.concat({ i });
                setList(newList);
                // setImage(image.path)
                // handleAdd()
                // this.setState({
                //   image: {
                //     uri: `data:${image.mime};base64,` + image.data,
                //     width: image.width,
                //     height: image.height,
                //   },
                //   images: null,
                // });
            })
            .catch((e) => alert(e));
    }

    const handleDelete = (image) => {
        const newList = list.filter(item => item.i != image);
        setList(newList);
    }

    const ItemRender = ({ item }) => {
        console.log('Image ', item)
        return (
            <View style={styles.borderCategoryProduct}>
                <Image source={{
                    uri: item.i,
                }} style={styles.ic_category_product} />
                <TouchableOpacity onPress={() => handleDelete(item.i)} style={{ position: 'absolute', top: 0, right: 0 }}>
                    <Image source={require('../../image/remove.png')} />
                </TouchableOpacity>
            </View>
        )


    }

    return (
        <View style={styles.contrainer}>
            <TouchableOpacity onPress={() => pickSingleWithCamera(true)} style={styles.borderLogin}>
                <Text style={styles.text}>Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => pickSingleBase64(false)} style={styles.borderLogin}>
                <Text style={styles.text}>Select image</Text>
            </TouchableOpacity>


            <FlatList
                style={{ marginTop: 10 }}
                data={list}
                horizontal={true}
                renderItem={ItemRender}
            />


        </View>
    )
}


export default Urgent;