import { StyleSheet } from "react-native";
import Color from "../../common/Color";

export default styles = StyleSheet.create({
    container:{
      //  flex:1,
    },
    tite:{
        fontSize:18,
        fontWeight:'bold',
        color:Color.black,
    },
    line:{
      backgroundColor:Color.gray,
      width:'100%',
      height:0.3,
      marginVertical:10,
    }
})