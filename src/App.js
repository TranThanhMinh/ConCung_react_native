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

import { createDrawerNavigator } from '@react-navigation/drawer';

//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyDrawer = (props) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MyTabs" children={() => <MyTabs {...props} />} />
      <Drawer.Screen name="Category" children={() => <CategoryScreen {...props} />} />
    </Drawer.Navigator>
  );
}


const MyTabs = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('./image/home.png')
              : require('./image/home_2.png');
          } else if (route.name === 'Category') {
            iconName = focused ? require('./image/categories.png') : require('./image/categories_2.png');
          }else if (route.name === 'Promotion') {
            iconName = focused ? require('./image/bell.png') : require('./image/bell_2.png');
          }else  {
            iconName = focused ? require('./image/user.png') : require('./image/user_2.png');
          }
          
  
          return <Image source={iconName} style={{width:24,height:24}}/>
        },
        tabBarActiveTintColor: '#EE3E80',
        tabBarInactiveTintColor: 'gray',
        headerShown:false
      })} >
      <Tab.Screen name="Home" children={() => <HomeScreen {...props} />}options={{title:'Trang chủ'}}/>
      <Tab.Screen name="Category" children={() => <CategoryScreen {...props} />} options={{ title: 'Danh mục' }} />
      <Tab.Screen name="Promotion" children={() => <PromotionScreen {...props} />} options={{ title: 'Khuyến mãi', tabBarBadge: 3 }} />
      <Tab.Screen name="Account" children={() => <AccountScreen {...props} />} options={{ title: 'Tài khoản' }} />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ title: "Tabs" }} />
        <Stack.Screen name="MyTabs" component={MyTabs} options={{ title: "MyTabs" }} />
        <Stack.Screen name="ListProduct" component={ListProduct} options={{ title: "ListProduct" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
