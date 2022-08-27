import { StyleSheet, Dimensions } from "react-native";
import Color from "../../common/Color";

const width = Dimensions.get('window').width
const style = StyleSheet.create({
    container: {
        backgroundColor: Color.white,
        flex: 1,
        flexDirection: 'column',
    },
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

    addCart: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    Back: {
        width: 30,
        height: 30,
        marginLeft: 20,
    },
    informationProduct: {
        marginVertical: 20,
    },
    name_price: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,

    },
    margin: {
        marginHorizontal: 10,
    },
    nameProduct2: {
        fontWeight: 'bold',
        fontSize: 15,
        flex: 3
    },
    priceProduct2: {
        fontWeight: 'bold',
        fontSize: 20,
        alignItems: 'flex-end',
        flex: 1
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    line: {
        marginVertical: 10,
        width: '100%',
        height: 0.5,
        backgroundColor: Color.gray,
    },
    line2: {
        marginVertical: 10,
        width: '100%',
        height: 5,
        backgroundColor: Color.gray3,
    },
    detail_2: {
        flex: 1,
        alignItems: 'center'
    },
    number: {
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical: 10
    },
    bottom: {
        flexDirection: 'row',
        bottom: 0,
        position: 'absolute',
        width: '100%',
        paddingBottom:30,
        paddingTop:10,
        backgroundColor:Color.white
    },
    chat: {
        flex: 1.6,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    call: {
        flex: 1.6,
        justifyContent: 'center',
        alignItems: 'center',

    },
    addCart: {
        flex: 2.8,
        borderColor: Color.blue2,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        marginLeft: 5
    },
    textAddCart: {
        color: Color.blue2
    },
    buy: {
        flex: 4,
        backgroundColor: Color.blue3,
        borderRadius: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBuy: {
        color: Color.white,
        fontSize: 18,
        fontWeight: 'bold'
    },
    textchat: {
        fontSize: 10,
    },
    bgtextchat: {
        position: 'absolute',
        fontSize: 10,
        top: 0,
        right: 0,
        backgroundColor: Color.red,
        borderRadius: 5
    },
    ic_product: {
        width: width / 4,
        height: width / 4,
        margin: 5,
        resizeMode: 'stretch',
    },
    borderProduct: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Color.pink,
        marginHorizontal: 10
    },
    nameProduct: {
        width: width / 4,
        margin: 5,
    },
    priceProduct: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 5,
    },
})

export default style;