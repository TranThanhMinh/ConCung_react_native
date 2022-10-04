import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import Color from '../../common/Color';
export default style = StyleSheet.create({
  containner: {
    flex: 1,
  },
  search: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    alignItems: 'center',
    alignContent: 'space-between'
  },
  ic_back: {
    width: 30,
    height: 30
  },
  borderSearch: {
    width: '77%',
    height: 35,
    borderColor: Color.red,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10
  },
  ic_category_product: {
    width: 50,
    height: 50
  },
  borderCategoryProduct: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },

  imfor2: {
    marginHorizontal: 5,
    justifyContent: 'space-between'
  },
  line: {
    backgroundColor: Color.gray3,
    width: '100%',
    height: 10,
  },
  line2: {
    backgroundColor: Color.black,
    width: '100%',
    height: 0.5,
    marginVertical: 5
  },
  logout: {
    alignItems: 'center',
    marginVertical: 10,
  },
  tabBar: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: Color.blue,
  },
  indicatorStyle: {
    backgroundColor: Color.pink,
    padding: 1.5,
    marginBottom: -2,
  },
  sizeIcon: {
    width: 30,
    height: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5
  },
  text: {
    marginLeft: 5,
    color: Color.black,
  },
  tabBar: {
    height: 65,
    backgroundColor: '#ffaaca',
  },
  indicatorStyle: {
    backgroundColor: 'white',
    height: 60,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  noLabel: {
    display: 'none',
    height: 0
  },
  bubble: {
    backgroundColor: 'lime',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10
  },
  Back: {
    width: 30,
    height: 30,
    marginLeft: 15,
  },
  Cart: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: '100%',
  },

  iconBar:{
    width: 25, height: 25,
  }

})