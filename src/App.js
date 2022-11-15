/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Image, View, Text, useColorScheme } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './main/HomeScreen';
import PromotionScreen from './main/PromotionScreen';
import CategoryScreen from './main/CategoryScreen';
import AccountScreen from './main/AccountScreen';
import LoadingScreen from './main/LoadingScreen';
import ListProduct from './main/ListProductScreen';
import ShopRecentlyScreen from './main/ShopRecentlyScreen';
import Strings from './common/Strings';
import DetailProduct from './main/DetailProductScreen'
import CartScreen from './main/CartScreen';
import UrgentScreen from './main/UrgentScreen';
import { Store } from './redux/reducer';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Constants from './common/Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useColors, ThemeContext } from '@hooks'
import './common/i18n'

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import AsyncStorage from "@react-native-async-storage/async-storage";

//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MyTabs = (props) => {
  const { t } = useTranslation();
  const [multilanguge, setMultilanguge] = useState('en')
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === Constants.Screen.Home) {
            iconName = focused
              ? require('./image/home.png')
              : require('./image/home_2.png');
          } else if (route.name === Constants.Screen.Category) {
            iconName = focused ? require('./image/categories.png') : require('./image/categories_2.png');
          } else if (route.name === Constants.Screen.Promotion) {
            iconName = focused ? require('./image/bell.png') : require('./image/bell_2.png');
          }
          else if (route.name === Constants.Screen.ShopRecently) {
            iconName = focused ? require('./image/maps-and-flags.png') : require('./image/bell_2.png');
          }
          else {
            iconName = focused ? require('./image/user.png') : require('./image/user_2.png');
          }
          return <Image source={iconName} style={{ width: 24, height: 24 }} />
        },
        tabBarActiveTintColor: '#EE3E80',
        tabBarInactiveTintColor: '#737071',
        headerShown: false
      })} >
      <Tab.Screen name={Constants.Screen.Home} children={() => <HomeScreen {...props} />} options={{ title: t('home') }} />
      <Tab.Screen name={Constants.Screen.Category} children={() => <CategoryScreen {...props} />} options={{ title: t('category') }} />
      <Tab.Screen name={Constants.Screen.Promotion} children={() => <PromotionScreen {...props} />} options={{ title: t('promotion'), tabBarBadge: 3 }} />
      <Tab.Screen name={Constants.Screen.ShopRecently} children={() => <ShopRecentlyScreen {...props} />} options={{ title: t('shops') }} />
      <Tab.Screen name={Constants.Screen.Account} children={() => <AccountScreen {...props} />} options={{ title: t('account') }} />
    </Tab.Navigator>
  );
}
const App = () => {
  const { theme, setTheme, themeName } = useColors({ themeName: 'Light' })
  const getLanguge = async () => {
    const language = await AsyncStorage.getItem("language");
    try {
      if(language === null)
      i18n.changeLanguage('vi')
      else
      i18n.changeLanguage(language)
    }
    catch (error) {
      console.log(error);
      language = 'vi'
      i18n.changeLanguage(language)
    }
  }

  const toggleLanguge = async () => {
    getLanguge()
  }

  const getTheme = async () => {
    const theme1 = await AsyncStorage.getItem("color");
    try {
      if (!theme1) {
        theme1 = 'Dark'
      } else {
        setTheme(theme1)
      }
    }
    catch (error) {
      console.log(error);

    }
  }


  const toggleTheme = async () => {
    const theme = await AsyncStorage.getItem("color");
    setTheme(theme)
  }

  useEffect(() => {
    getLanguge()
    getTheme()
  }, [])



  return (
    <ThemeContext.Provider value={{ theme: themeName, toggleTheme, toggleLanguge }}>
      <PaperProvider theme={theme} >
        <Provider store={Store}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Loading" component={LoadingScreen} options={{ title: "Tabs" }} />
              <Stack.Screen name="MyTabs" component={MyTabs} options={{ title: "MyTabs" }} />
              <Stack.Screen name="ListProduct" component={ListProduct} options={{ title: "ListProduct" }} />
              <Stack.Screen name="DetailProduct" component={DetailProduct} options={{ title: "DetailProduct" }} />
              <Stack.Screen name="CartScreen" component={CartScreen} options={{ title: "CartScreen" }} />
              <Stack.Screen name="UrgentScreen" component={UrgentScreen} options={{ title: "UrgentScreen" }} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </PaperProvider>
    </ThemeContext.Provider>
  );

}
export default App;
