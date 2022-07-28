import React from 'react';
import { View, Image,Text,TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';


const LoadingScreen = ({navigation,route}) => {
    setTimeout(
        () => {
            handleLoading()
        },
        4 * 1000
      );

    const handleLoading = () => {
        navigation.replace('MyTabs')
    }

    return (
        <View style={{ flex: 1,marginTop:50}}>
            <TouchableOpacity onPress={handleLoading}>
                <Text>test</Text>
            </TouchableOpacity>
            <Image source={require('../image/background.png')} style={{ width: '100%', height: '100%' }} />
            <Progress.Bar progress={0.3} width={200} />
        </View>
    )
}

export default LoadingScreen;