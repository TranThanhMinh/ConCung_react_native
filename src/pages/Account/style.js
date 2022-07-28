import { StyleSheet} from 'react-native';
import Color from '../../common/Color';
export default style = StyleSheet.create({
  containner: {
    marginTop: 50,
    flex: 1,
  },
  search: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    alignItems:'center',
    alignContent:'space-between'
  },
  ic_back: {
    width: 30,
    height: 30
  },
  borderSearch:{
    width:'77%',
    height: 35,
    borderColor:Color.red,
    borderWidth:1,
    borderRadius:20,
    paddingHorizontal:10,
    marginHorizontal:10
  },
  ic_category_product:{
    width: 50,
    height: 50
  },
  borderCategoryProduct:{
    width: 80,
    justifyContent:'center',
    alignItems:'center',
    padding:5
  },
  information:{
    flexDirection:'row',
    justifyContent:'center',
    marginVertical:10,
  },

  imfor2:{
    marginHorizontal:5,
    justifyContent:'space-between'
  },
  line:{
    backgroundColor:Color.gray3,
    width:'100%',
    height:10,
  },
  logout:{
    alignItems:'center',
    marginVertical:10,
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

})