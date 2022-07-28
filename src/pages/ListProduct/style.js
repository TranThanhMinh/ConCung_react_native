import { StyleSheet } from "react-native";
import Color from "../../common/Color";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    Search: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '100%',
    },

    borderSearch: {
        borderRadius: 10,
        borderColor: Color.red,
        borderWidth: 1,
        flex: 1,
        height:35,
        marginHorizontal:10,
        paddingHorizontal:5,
    },
    Cart: {
      width:30,
      height:30,
      marginRight:15,
    },

    Back: {
        width:30,
        height:30,
        marginLeft:15,
      }
})

export default styles;