import React from "react";
import { View, Text, TouchableOpacity, Image, useWindowDimensions, FlatList, SafeAreaView, ScrollView, Dimensions } from "react-native";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
let Utils = require('../../common/Utils');


import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }} />
);

const renderScene = SceneMap({
  chogiao: FirstRoute,
  danggiao: SecondRoute,
  danhgia: FirstRoute,
  lichsu: SecondRoute,
});

const Account = ({ navigation, route }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'chogiao', title: 'Chờ giao', image: '../../image/wall-clock.png' },
    { key: 'danggiao', title: 'Đang giao', image: '../../image/wall-clock.png' },
    { key: 'danhgia', title: 'Đánh giá', image: '../../image/wall-clock.png' },
    { key: 'lichsu', title: 'Lịch sử', image: '../../image/wall-clock.png' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({ focused, route }) => {
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../image/wall-clock.png')} style={{ width: 30, height: 30, }} />
            <Text
              style={{ color: 'black' }}>
              {route.title}
            </Text>
          </View>
        );
      }}
      indicatorStyle={{ backgroundColor: '#f54282' }}
      style={{ backgroundColor: 'white' }}

    />
  );


  const handleLogOut = async () => {
    await AsyncStorage.setItem("user", "");
    Utils.isLogin = false;
    navigation.navigate('Home')
  }
  return (
    <ScrollView>
      <View style={styles.containner}>
        <Image source={{ uri: 'https://concung.com/themes/mobile4.1/image/customer-new.png' }} style={{ width: '100%', height: 200, resizeMode: 'stretch', }} />
        <View style={styles.information}>
          <Image source={require('../../image/qr-code.png')} style={{ width: 40, height: 40 }} />
          <View style={styles.imfor2}>
            <Text>Minh Trần</Text>
            <Text>0355406448</Text>
          </View>
        </View>
        <View>
          <TabView
            style={{ height: 200, backgroundColor: 'red' }}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.logout}>
          <View>
            <TouchableOpacity onPress={handleLogOut} style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../../image/logout.png')} style={{ width: 20, height: 20, marginHorizontal: 5 }} />
              <Text>Đăng xuất</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </ScrollView>

  )
}

export default Account;