import { StyleSheet,Dimensions} from 'react-native';
import Color from '../../common/Color';
const width = Dimensions.get('window').width

console.log('numColumns2 '+width)

export default style = StyleSheet.create({
  containner: {
    paddingTop: 50,
    flex: 1,
    backgroundColor:Color.white
  },
  search: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    alignItems:'center',
    justifyContent:'space-between'
  },
  ic_back: {
    width: 30,
    height: 30
  },
  ic_trademasrk:{
    width: 70,
    height: 50,
    margin:5,
    resizeMode:'stretch',
  },
  ic_product:{
    width: width/4,
    height: width/4,
    margin:5,
    resizeMode:'stretch',
  },
  borderProduct:{
    borderRadius:10,
    borderWidth:1,
    borderColor:Color.pink,
    marginHorizontal:10
  },
  nameProduct:{
    width: width/4,
    margin:5,
  },
  priceProduct:{
    fontSize:15,
    fontWeight:'bold',
    margin:5,
  },
  borderSearch:{
    flex:1,
    height: 35,
    borderColor:Color.red,
    borderWidth:1,
    borderRadius:20,
    paddingHorizontal:10,
    marginHorizontal:10
  },
  border1:{
    width:80,
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    flex:1
  },
  text1:{
 fontSize:15,
 fontStyle:'normal',
 fontWeight:'bold'
  },
  text2:{
    fontSize:10,
     },
  line:{
    backgroundColor:Color.gray,
    width:'100%',
    height:0.5,
    marginVertical:10
  },
  line2:{
    backgroundColor:Color.gray2,
    width:'100%',
    height:5,
    marginVertical:10
  },
  title:{
   flexDirection:'row',
   justifyContent:'space-between',
   padding:10
  },
  title1:{
    color:Color.pink,
    fontSize:20,
    fontWeight:'bold'
  },
  viewAll:{
    textDecorationLine:"underline",
    color:Color.blue2,
  },
})