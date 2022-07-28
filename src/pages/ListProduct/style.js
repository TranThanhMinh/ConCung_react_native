import { StyleSheet, Dimensions } from "react-native";
import Color from "../../common/Color";
const width = Dimensions.get('window').width

const size = width / 3
const size1 = width / 3.5
const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 50,
    },
    itemProduct: {
        backgroundColor: Color.white,
        width: size,
        borderColor: Color.gray,
        margin: 1,
        paddingHorizontal: 5,
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
        height: 35,
        marginHorizontal: 10,
        paddingHorizontal: 5,
    },
    Cart: {
        width: 30,
        height: 30,
        marginRight: 15,
    },

    addCart: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    Back: {
        width: 30,
        height: 30,
        marginLeft: 15,
    },
    listCategory: {
        marginTop: 10,
    },
    ic_product: {
        width: size1,
        height: size1,
        marginTop: 10,
        resizeMode: 'stretch',
    },

    nameProduct: {
        marginVertical: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sale: {
        flexDirection: 'row',
        marginBottom: 10
    },
    borderSale: {
        marginLeft: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Color.red,
        color: Color.red,
        paddingHorizontal: 5,
    },
    listProduct: {
        marginTop: 10,
        marginBottom: 50,
    }
})

export default styles;