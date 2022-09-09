import { Dimensions, Platform, PixelRatio } from "react-native"
const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height
export default{
 ScreenSize:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
 },
 Screen:{
    Home:'Home',
    Category:'Category',
    Promotion:'Promotion',
    Account:'Account'
 }
}