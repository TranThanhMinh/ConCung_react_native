import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert, Image, FlatList, ScrollView, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../Promotion/style";
import { useSelector, useDispatch } from 'react-redux';
import { workouts } from '@actions/promotion';
import * as ActionTypes from '@actions/ActionTypes'
import Loading from '../../component/Loading';


let API_SERVER_2 = require('../../common/Api')



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

    const dispacth = useDispatch()
    const { promotionReducer } = useSelector(state => state)

    const getData = async () => {
        const user = await AsyncStorage.getItem("user");
        try {
            console.log(user);
        }
        catch (error) {
            console.log(error);

        }
    }

    const ItemAssignments = ({ item }) => (
        <Text>{item.title}</Text>
    )



    const ItemPromotion = ({ item }) => (
        <View>
            <Text style={styles.tite}>{item.name}</Text>
            {/* <FlatList
                data={item.assignments}
                renderItem={ItemAssignments} /> */}

            <View style={styles.line} />

        </View>
    )




    const initialState = {
        data: []
    }

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        const{type,data,message}  = promotionReducer
        switch (type) {
            case ActionTypes.WORKOUTS_PENĐING:
                console.log('WORKOUTS_PENĐING')
            case ActionTypes.WORKOUTS_SUCCESS:
                console.log('WORKOUTS_SUCCESS' + data)
                setLoading(false)
                setData(data);
                break
            case ActionTypes.WORKOUTS_FAIL:
                break
        }
    }, [promotionReducer])

    const getWorkouts = async () => {
        dispacth(workouts())
    }


    useEffect(() => {
        getWorkouts();
    },[])

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* <TextInput placeholder="ewewqewq" />
            <TouchableOpacity onPress={getData}>
                <Text>Setting ten  </Text>
            </TouchableOpacity> */}
                <View>
                    <Image source={{ uri: 'https://concung.com/themes/mobile4.1/image//banner_uu_dai.png' }} style={{ width: '100%', height: 300 }} />
                    <View style={{
                        width: '100%',
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center',
                        bottom: -25

                    }}>
                        <Image source={{ uri: 'https://concung.com/themes/mobile4.1/image/icon/promotion_icon.webp' }}
                            style={{
                                width: 50,
                                height: 50,
                            }} />
                    </View>
                </View>
                {
                    isLoading ? <Loading/> :
                        <FlatList
                            style={{ marginTop: 40, marginHorizontal: 10 }}
                            data={data}
                            renderItem={ItemPromotion} />

                }

            </View>
        </ScrollView>

    )
}

export default Promotion;