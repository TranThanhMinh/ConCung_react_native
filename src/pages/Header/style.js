import { StyleSheet } from "react-native";
import Color from "../../common/Color";


const style = StyleSheet.create({
    Search: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '100%',
        marginTop: 50,
    },

    borderSearch: {
        borderRadius: 10,
        borderColor: Color.red,
        borderWidth: 1,
        flex: 1,
        height: 35,
        marginHorizontal: 10,
        paddingHorizontal: 5,
    },
    Cart: {
        width: 30,
        height: 30,
        marginRight: 20
    },
})

export default style;