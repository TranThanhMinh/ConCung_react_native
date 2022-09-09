/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image, View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './main/HomeScreen';
import PromotionScreen from './main/PromotionScreen';
import CategoryScreen from './main/CategoryScreen';
import AccountScreen from './main/AccountScreen';
import LoadingScreen from './main/LoadingScreen';
import ListProduct from './main/ListProductScreen';
import Strings from './common/Strings';
import DetailProduct from './main/DetailProductScreen'
import CartScreen from './main/CartScreen';
import { Store } from './redux/reducer';
import { Provider } from 'react-redux';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Constants from './common/Constants';

//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyDrawer = (props) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={Constants.Screen.MyTabs} children={() => <MyTabs {...props} />} />
      <Drawer.Screen name="Category" children={() => <CategoryScreen {...props} />} />
    </Drawer.Navigator>
  );
}


const MyTabs = (props) => {
  console.disableYellowBox = true;
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
          } else {
            iconName = focused ? require('./image/user.png') : require('./image/user_2.png');
          }
          return <Image source={iconName} style={{ width: 24, height: 24 }} />
        },
        tabBarActiveTintColor: '#EE3E80',
        tabBarInactiveTintColor: '#737071',
        headerShown: false
      })} >
      <Tab.Screen name={Constants.Screen.Home} children={() => <HomeScreen {...props} />} options={{ title: Strings.home }} />
      <Tab.Screen name={Constants.Screen.Category} children={() => <CategoryScreen {...props} />} options={{ title: Strings.ca }} />
      <Tab.Screen name={Constants.Screen.Promotion} children={() => <PromotionScreen {...props} />} options={{ title: Strings.promotion, tabBarBadge: 3 }} />
      <Tab.Screen name={Constants.Screen.Account} children={() => <AccountScreen {...props} />} options={{ title: Strings.account}} />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ title: "Tabs" }} />
        <Stack.Screen name="MyTabs" component={MyTabs} options={{ title: "MyTabs" }} />
        <Stack.Screen name="ListProduct" component={ListProduct} options={{ title: "ListProduct" }} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} options={{ title: "DetailProduct" }} />
        <Stack.Screen name="CartScreen" component={CartScreen} options={{ title: "CartScreen" }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
export default App;
