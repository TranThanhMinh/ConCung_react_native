import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert, Image, FlatList, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../Promotion/style";


let API_SERVER_2 = require('../../common/Api')


const listNotification = [{
    id: 1,
    title: 'Bĩm tả 100% trúng quà',
    information: '🌿Cho mỗi hoá đơn 500k mua tã: Bobby, Huggies, Genki, Whito, Rascal,\n🎁Quà siêu khủng Xe Vespa, iPhone 13 Pro Max, Máy giặt sấy, Tủ lạnh,...👉Chốt ngay kẻo lỡ\n⏰Áp dụng đến 31/8'
},
{
    id: 1,
    title: 'Bĩm tả 100% trúng quà',
    information: '🌿Cho mỗi hoá đơn 500k mua tã: Bobby, Huggies, Genki, Whito, Rascal,\n🎁Quà siêu khủng Xe Vespa, iPhone 13 Pro Max, Máy giặt sấy, Tủ lạnh,...👉Chốt ngay kẻo lỡ\n⏰Áp dụng đến 31/8'
},
{
    id: 1,
    title: 'Bĩm tả 100% trúng quà',
    information: '🌿Cho mỗi hoá đơn 500k mua tã: Bobby, Huggies, Genki, Whito, Rascal,\n🎁Quà siêu khủng Xe Vespa, iPhone 13 Pro Max, Máy giặt sấy, Tủ lạnh,...👉Chốt ngay kẻo lỡ\n⏰Áp dụng đến 31/8'
},
{
    id: 1,
    title: 'Bĩm tả 100% trúng quà',
    information: '🌿Cho mỗi hoá đơn 500k mua tã: Bobby, Huggies, Genki, Whito, Rascal,\n🎁Quà siêu khủng Xe Vespa, iPhone 13 Pro Max, Máy giặt sấy, Tủ lạnh,...👉Chốt ngay kẻo lỡ\n⏰Áp dụng đến 31/8'
},
{
    id: 1,
    title: 'Bĩm tả 100% trúng quà',
    information: '🌿Cho mỗi hoá đơn 500k mua tã: Bobby, Huggies, Genki, Whito, Rascal,\n🎁Quà siêu khủng Xe Vespa, iPhone 13 Pro Max, Máy giặt sấy, Tủ lạnh,...👉Chốt ngay kẻo lỡ\n⏰Áp dụng đến 31/8'
},
{
    id: 1,
    title: 'Bĩm tả 100% trúng quà',
    information: '🌿Cho mỗi hoá đơn 500k mua tã: Bobby, Huggies, Genki, Whito, Rascal,\n🎁Quà siêu khủng Xe Vespa, iPhone 13 Pro Max, Máy giặt sấy, Tủ lạnh,...👉Chốt ngay kẻo lỡ\n⏰Áp dụng đến 31/8'
},
{
    id: 1,
    title: 'Bĩm tả 100% trúng quà',
    information: '🌿Cho mỗi hoá đơn 500k mua tã: Bobby, Huggies, Genki, Whito, Rascal,\n🎁Quà siêu khủng Xe Vespa, iPhone 13 Pro Max, Máy giặt sấy, Tủ lạnh,...👉Chốt ngay kẻo lỡ\n⏰Áp dụng đến 31/8'
}]

const list =
    [
        {
            "_id": "5e65189e35c44f223f75e471",
            "assignments": [
                {
                    "_id": "5e6518b535c44f223f75e492",
                    "title": "Legs day",
                    "status": 1,
                    "total_exercise": 5
                }
            ],
            "day": 0
        },
        {
            "_id": "5e6518b535c44f223f75e48f",
            "assignments": [
                {
                    "title": "Full warm up workout",
                    "_id": "5e61da43c3282e27e35170de",
                    "status": 1,
                    "total_exercise": 2
                },
                {
                    "title": "Full warm up workout completed",
                    "_id": "5e61da43c3282e27e35170xe",
                    "status": 2,
                    "total_exercise": 5
                }
            ],
            "day": 1
        },
        {
            "_id": "5cc11fc97fa31e52875dae11",
            "assignments": [],
            "day": 2
        },
        {
            "_id": "5cc11fc97fa31e52875dae14",
            "assignments": [
                {
                    "title": "Chest and should workout",
                    "_id": "5cc11fc97fa31e52875dae10",
                    "status": 0,
                    "total_exercise": 11
                }
            ],
            "day": 3
        },
        {
            "_id": "5cc11fc97fa31e52875dae1c",
            "assignments": [
                {
                    "title": "Legs day",
                    "_id": "5e5f5c294ecabc0e67f29b15",
                    "status": 0,
                    "total_exercise": 5
                },
                {
                    "title": "HIIT tabata",
                    "_id": "5d102e466f28a71be8dd327x",
                    "status": 0,
                    "total_exercise": 8
                }
            ],
            "day": 4
        },
        {
            "_id": "5cd4efea4d3ffa779c30688c",
            "assignments": [
                {
                    "title": "Squat, press, power clean",
                    "_id": "5cd03cc480999e2ada34306z",
                    "status": 0,
                    "total_exercise": 5
                }
            ],
            "day": 5
        },
        {
            "_id": "5e6518b535c44f223f75e48e",
            "assignments": [
                {
                    "title": "Squat, press, power clean",
                    "_id": "5cd03cc480999e2ada34306a",
                    "status": 0,
                    "total_exercise": 5
                },
                {
                    "title": "Squat, press, power clean",
                    "_id": "5cd03cc480999e2ada34306c",
                    "status": 0,
                    "total_exercise": 5
                },
                {
                    "title": "Squat, press, power clean",
                    "_id": "5cd03cc480999e2ada34306f",
                    "status": 0,
                    "total_exercise": 5
                }
            ],
            "day": 6
        }
    ]




const Promotion = ({ navigation, route }) => {
    const getData = async () => {
        const user = await AsyncStorage.getItem("user");
        try {
            console.log(user);
        }
        catch (error) {
            console.log(error);

        }
    }



    const ItemNotification = ({ item }) => (
        //console.log(JSON.stringify(item.assignments[0].title) +' a');
        //  console.log(item.assignments + ' dịch')


        <View>
            <Text style={styles.tite}>
                {item.assignments
                    .map((index) => (
                        JSON.stringify(index.title)
                       // console.log(JSON.stringify(index.title) + ' dịch')
                    ))}</Text>
            <Text>{item.day}</Text>
            <View style={styles.line} />
        </View>
    )




    const initialState = {
        data: []
    }

    const [data, setData] = useState([])

    const getWorkouts = async () => {
        // try {
        //     const response = await fetch('https://demo2187508.mockable.io/workouts');
        //     const json = await response.json();
        //     setData(json.data);
        //     console.log(json.data[0].assignments[0].title);
        // } catch (error) {
        //     console.log(error);
        // }\
        const url = 'https://demo2187508.mockable.io/workouts'
        fetch(url,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },

            })
            .then((res) => res.json())
            .then((resJson) => {
                setData(resJson.data);
                console.log(resJson.data);

            }).catch((error) => {
                console.log(error + ' minh');
            })
    }


    useEffect(() => {
        getWorkouts();
    })

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* <TextInput placeholder="ewewqewq" />
            <TouchableOpacity onPress={getData}>
                <Text>Setting ten  </Text>
            </TouchableOpacity> */}
                <Image source={{ uri: 'https://concung.com/themes/mobile4.1/image//banner_uu_dai.png' }} style={{ width: '100%', height: 200 }} />
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',

                }}>
                    <Image source={{ uri: 'https://concung.com/themes/mobile4.1/image/icon/promotion_icon.webp' }}
                        style={{
                            width: 50,
                            height: 50,
                        }} />
                </View>

                <FlatList
                    style={{ marginTop: 20, marginHorizontal: 10 }}
                    data={data}
                    renderItem={ItemNotification} />

            </View>
        </ScrollView>

    )
}

export default Promotion;