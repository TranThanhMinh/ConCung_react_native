import { StyleSheet } from "react-native";
import color from "../../common/Color";

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: color.white,
        paddingHorizontal:20,
    },
    borderCategoryProduct:{

        padding:5
      },
      ic_category_product:{
        width: 100,
        height: 100
      },
    titleLogin:{
       fontSize: 19,
       fontWeight:'bold',
       marginVertical:10,

    },
    borderInput: {
        width: '100%',
        height: 40,
        backgroundColor: color.white,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: color.gray,
        marginTop:5,
        paddingHorizontal:10
    },

    borderLogin: {
        marginTop:10,
        width: '50%',
        height: 40,
        backgroundColor: color.green,
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color: color.white,
        fontSize:15,
    }
})

export default styles