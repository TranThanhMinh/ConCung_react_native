import React from 'react';
import Promotion from '../pages/Promotion';
import { View } from 'react-native'

const PromotionScreen = ({ navigation, route }) => {
    return (
        <View>
            <Promotion navigation={navigation} route={route} />
        </View>

    )
}
export default PromotionScreen;