import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput ,FlatList,SafeAreaView} from "react-native";
import styles from "./style";

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const Category = ({ navigation, route }) => {

    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    
    return (
        <View style={styles.containner}>
            <View style={styles.search}>
                <Image source={require('../../image/back.png')} style={styles.ic_back} />
                <TextInput placeholder="tim kiem nhanh " style={styles.borderSearch} />
                <Image source={require('../../image/shoppingcart.png')} style={styles.ic_back} />
            </View>
            <TouchableOpacity>
                <Text>Category ten</Text>
            </TouchableOpacity>

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    )
}

export default Category;