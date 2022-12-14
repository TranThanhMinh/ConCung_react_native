import React from 'react';
import Urgent from '../pages/Urgent';

import Constants from "@common/Constants"

const UrgentScreen = ({ navigation, route }) => {

    return (
        <Urgent navigation={navigation} route={route} 
        goToBack={()=>{navigation.goBack()}}/>
    )
}
export default UrgentScreen;