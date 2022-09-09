import React from "react";
import { View, Text, TouchableOpacity, Image, useWindowDimensions, FlatList, SafeAreaView, ScrollView, Dimensions,
   ImageBackground, Alert ,Platform} from "react-native";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
let Utils = require('../../common/Utils');


import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Color from "../../common/Color";
import WattingDelivery from "./WattingDelivery";
import style from "./style";
import { ApplePayButton, PaymentRequest } from 'react-native-payments';
import { GooglePay } from 'react-native-google-pay';




const allowedCardNetworks = ['VISA', 'MASTERCARD'];
const allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];



const METHOD_DATA = [
  {
    supportedMethods: ['apple-pay'],
    data: {
      merchantIdentifier: 'merchant.com.your-app.namespace',
      supportedNetworks: ['visa', 'mastercard', 'amex'],
      countryCode: 'US',
      currencyCode: 'USD',
    },
  },
];

const DETAILS = {
  id: 'basic-example',
  displayItems: [
    {
      label: 'Movie Ticket',
      amount: { currency: 'USD', value: '15.00' },
    },
  ],
  total: {
    label: 'Merchant Name',
    amount: { currency: 'USD', value: '15.00' },
  },
};

const Account = (props) => {
  const { navigation } = props
  const { route } = props
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'chogiao', title: 'Chờ giao', image: '../../image/wall-clock.png' },
    { key: 'danggiao', title: 'Đang giao', image: '../../image/gift.png' },
    { key: 'danhgia', title: 'Đánh giá', image: '../../image/wall-clock.png' },
    { key: 'lichsu', title: 'Lịch sử', image: '../../image/wall-clock.png' },
  ]);

  if (Platform.OS === 'android') {
  // Set the environment before the payment request
  GooglePay.setEnvironment(GooglePay.ENVIRONMENT_TEST);
  }

 const payWithGooglePay = (requestData) => {
  // // Check if Google Pay is available
  GooglePay.isReadyToPay(allowedCardNetworks, allowedCardAuthMethods)
    .then((ready) => {
      if (ready) {
        // Request payment token
        GooglePay.requestPayment(requestData)
          .then((token) => {
            // Send a token to your payment gateway
          })
          .catch((error) => console.log(error.code, error.message));
      }
    })
  }



  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#fff' }} />
  );

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'chogiao':
        return <WattingDelivery navigation={navigation}
          goHome={() => {
            navigation.navigate('Home');
          }
          } />;
      case 'danggiao':
        return <SecondRoute />;
      case 'danhgia':
        return <SecondRoute />;
      case 'lichsu':
        return <SecondRoute />;
      default:
        return null;
    }
  };

  const requestData = {
    cardPaymentMethod: {
      tokenizationSpecification: {
        type: 'PAYMENT_GATEWAY',
        // stripe (see Example):
        gateway: 'stripe',
        gatewayMerchantId: '',
        stripe: {
          publishableKey: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
          version: '2018-11-08',
        },
        // other:
        gateway: 'example',
        gatewayMerchantId: 'exampleGatewayMerchantId',
      },
      allowedCardNetworks,
      allowedCardAuthMethods,
    },
    transaction: {
      totalPrice: '10',
      totalPriceStatus: 'FINAL',
      currencyCode: 'USD',
    },
    merchantName: 'Example Merchant',
  };


  const showPaymentSheet = () => {
    const paymentRequest = new PaymentRequest(METHOD_DATA, DETAILS);
    paymentRequest.show();
  };

  const getTabBarIcon = (props) => {

    const { route } = props
    const { focused } = props
    if (route.key === 'chogiao') {

      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Image source={require('../../image/time-left.png')} style={styles.iconBar} />
          <Text
            style={{ color: 'black' }}>
            {route.title}
          </Text>
        </View>
      );

    } else if (route.key === 'danggiao') {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Image source={require('../../image/delivery.png')} style={styles.iconBar} />
          <Text
            style={{ color: 'black' }}>
            {route.title}
          </Text>
        </View>
      );

    } else if (route.key === 'danhgia') {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Image source={require('../../image/star_2.png')} style={styles.iconBar} />
          <Text
            style={{ color: 'black' }}>
            {route.title}
          </Text>
        </View>
      );

    } else {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Image source={require('../../image/history.png')} style={styles.iconBar} />
          <Text
            style={{ color: 'black' }}>
            {route.title}
          </Text>
        </View>
      );
    }
  }

  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={
        props => getTabBarIcon(props)
      }
      style={styles.tabBar}
      indicatorStyle={styles.indicatorStyle} />
  );


  const handleLogOut = async () => {
    await AsyncStorage.setItem("user", "");
    Utils.isLogin = false;
    navigation.navigate('Home')
  }

  return (
    <ScrollView>
      <View style={styles.containner}>
        <Image source={{ uri: 'https://concung.com/themes/mobile4.1/image/customer-new.png' }} style={{ width: '100%', height: 250, resizeMode: 'stretch', }} />
        <View style={styles.information}>
          <Image source={require('../../image/qr-code.png')} style={{ width: 40, height: 40 }} />
          <View style={styles.imfor2}>
            <Text>{Utils.username}</Text>
            <Text>0355406448</Text>
          </View>
        </View>
        <View>
          <TabView
            style={{ height: 200, backgroundColor: Color.white, }}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
          />
        </View>
        <View style={styles.line} />
        <View style={{ backgroundColor: Color.white }}>
          <View style={styles.row}>
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>Mã giảm giá</Text>
          </View>
          <View style={styles.line2} />
          <View style={styles.row}>
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>Mã quà tặng</Text>
          </View>
          <View style={styles.line2} />
          <View style={styles.row}>
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>Địa chỉ nhận hàng</Text>
          </View>
          <View style={styles.line2} />
          <View style={styles.row}>
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>Thẻ thành viển </Text>
          </View>
          <View style={styles.line2} />
          <View style={styles.row}>
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>Ưu đãi VIP</Text>
          </View>
          <View style={styles.line2} />
          <View style={styles.row}>
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>Thông tin bảo hành</Text>
          </View>
          <View style={styles.line2} />

          <View style={styles.row}>
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>Sản phẩm đã xem</Text>
          </View>
          <View style={styles.line2} />

          <View style={styles.row}>
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>Bình luận của tôi</Text>
          </View>

          <View style={styles.line2} />
          <TouchableOpacity style={styles.row} onPress={() => Platform.OS == 'ios' ? showPaymentSheet() : payWithGooglePay(requestData)} >
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>Thanh toán</Text>
          </TouchableOpacity>

          {/* <ApplePayButton
            type="plain"
            style="black"
            onPress={()=>showPaymentSheet()}
          /> */}

        </View>
        <View style={styles.line} />
        <View style={styles.logout}>
          <View>
            <TouchableOpacity onPress={handleLogOut} style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../../image/logout.png')} style={{ width: 20, height: 20, marginHorizontal: 5 }} />
              <Text>Đăng xuất</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </ScrollView>

  )
}

export default Account;