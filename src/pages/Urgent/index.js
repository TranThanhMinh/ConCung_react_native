import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground, FlatList } from "react-native";
import styles from "./style";

import ImagePicker from 'react-native-image-crop-picker';
import Dialog from "react-native-dialog";

// { navigation, route }
const Urgent = (props) => {

    const [image, setImage] = useState('')

    const [visible, setVisible] = useState(false)

    const [list, setList] = React.useState([]);

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
                handleHidden()
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
                handleHidden()
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

    const handleShow = () => (
        setVisible(true)
    )

    const handleHidden = () => (
        setVisible(false)
    )



    const dialogImage = () => {
        return (
            <View style={styles.container}>
                <Dialog.Container visible={visible}>
                    <Dialog.Title>Image</Dialog.Title>
                    {/* <Dialog.Button label="Camera"  onPress={()=>pickSingleWithCamera(true)}/>
                <Dialog.Button label="Select from library"  onPress={()=>pickSingleBase64(false)}/> */}
                    <TouchableOpacity onPress={() => pickSingleWithCamera(true)} style={styles.borderLogin}>
                        <Text style={styles.text}>Camera</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => pickSingleBase64(false)} style={styles.borderLogin}>
                        <Text style={styles.text}>Select image</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleHidden()} style={styles.borderLogin}>
                        <Text style={styles.text}>Cancel</Text>
                    </TouchableOpacity>
                </Dialog.Container>
            </View>
        );
    }

    return (
        <View style={styles.contrainer}>
            <TouchableOpacity onPress={() => props.goToBack()}>
                <Text style={{ color: 'red' }}>{'< '}Quay lại</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => pickSingleWithCamera(true)} style={styles.borderLogin}>
                <Text style={styles.text}>Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => pickSingleBase64(false)} style={styles.borderLogin}>
                <Text style={styles.text}>Select image</Text>
            </TouchableOpacity> */}

            <TouchableOpacity onPress={() => handleShow()} style={styles.borderLogin}>
                <Text style={styles.text}>Add image</Text>
            </TouchableOpacity>

            <FlatList
                style={{ marginTop: 10 }}
                data={list}
                horizontal={true}
                renderItem={ItemRender} />
            {dialogImage()}
        </View>
    )
}


export default Urgent;