/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Image} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './main/HomeScreen';
import LoginScreen from './main/LoginScreen';
import SettingScreen from './main/SettingScreen';
import CategoryScreen from './main/CategoryScreen';
import AccountScreen from './main/AccountScreen';
import LoadingScreen from './main/LoadingScreen';
import ListProduct from './main/ListProductScreen';


import { createDrawerNavigator } from '@react-navigation/drawer';

//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyDrawer =(props)=> {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MyTabs" children={() => <MyTabs {...props} />}/>
      <Drawer.Screen name="Category" children={() => <CategoryScreen {...props} />} />
    </Drawer.Navigator>
  );
}


const MyTabs = (props) => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen name="Home" children={() => <HomeScreen {...props} />} 
      options={{ title: 'Trang chủ',
        tabBarIcon: ({ focused, color, size }) => {
           <Image source={ require('./image/wall-clock.png')}/>
        }}} />
      <Tab.Screen name="Category" children={() => <CategoryScreen {...props} />} options={{ title: 'Danh mục' }} />
      <Tab.Screen name="Setting" children={() => <SettingScreen {...props} />}  options ={{title:'Cài đặt'}}/>
      <Tab.Screen name="Account" children={() => <AccountScreen {...props} />}  options ={{title:'Tài khoản'}}/>
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Loading" component={LoadingScreen} options={{ title: "Tabs" }} />
      <Stack.Screen name="MyTabs" component={MyTabs} options={{ title: "MyTabs" }} />
      <Stack.Screen name="ListProduct" component ={ListProduct}  options={{title:"ListProduct"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
