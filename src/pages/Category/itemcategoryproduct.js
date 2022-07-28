import React from 'react';
import { View, Image ,Text} from 'react-native';
import styles from './style';



const ItemCategoryProduct = (props) => {
    const{image} = props;
    const{name} = props;
    return (
        <View style={styles.borderCategoryProduct}>
            <Image source={{
                uri: image,
            }} style={styles.ic_category_product} />
            <Text style={{textAlign:'center',fontSize:12,marginTop:5}}>{name}</Text>
        </View>
    )
};

export default ItemCategoryProduct;