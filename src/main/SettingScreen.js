import React from 'react';
import Setting from '../pages/Setting';
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRef } from 'react/cjs/react.development';


const SettingScreen = ({ navigation, route }) => {
    return (
        <View>
            <Setting navigation={navigation} route={route} />
        </View>

    )
}
export default SettingScreen;