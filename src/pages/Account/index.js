import React, { useState,useContext } from "react";
import {
  View, Text, TouchableOpacity, Image, useWindowDimensions, FlatList, SafeAreaView, ScrollView, Dimensions,
  ImageBackground, Alert, Platform
} from "react-native";
import styles from "./style";
let Utils = require('../../common/Utils');


import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Color from "../../common/Color";
import WattingDelivery from "./WattingDelivery";
import style from "./style";

import { useTranslation, initReactI18next } from "react-i18next";

const PaymentRequest = require('react-native-payments').PaymentRequest
import { GooglePay } from 'react-native-google-pay';

import Dialog from "react-native-dialog";
import i18n from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useColors,ThemeContext} from '@hooks'
import { useTheme } from 'react-native-paper';

const allowedCardNetworks = ['VISA', 'MASTERCARD'];
const allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];


const OPTIONS = {
  requestPayerName: true,
  requestPayerPhone: true,
  requestPayerEmail: true,
  requestShipping: true
};

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

const METHOD_DATA_Android = [{
  supportedMethods: ['android-pay'],
  data: {
    supportedNetworks: ['visa', 'mastercard', 'amex'],
    currencyCode: 'USD',
    environment: 'TEST', // defaults to production
    paymentMethodTokenizationParameters: {
      tokenizationType: 'NETWORK_TOKEN',
      parameters: {
        publicKey: 'your-pubic-key'
      }
    }
  }
}];

const ANDROID_METHOD_DATA = [
  {
    supportedMethods: ['android-pay'],
    data: {
      supportedNetworks: ['visa', 'mastercard', 'amex'],
      currencyCode: 'USD',
      environment: 'TEST', // defaults to production
      paymentMethodTokenizationParameters: {
        tokenizationType: "GATEWAY_TOKEN",
        // tokenizationType: 'NETWORK_TOKEN',
        parameters: {
          publicKey: 'pk_test_51I5wapmXmOyoqYiJvT9QU00JMWuQtpg',
          gateway: "stripe",
          'stripe:publishableKey':
            'pk_test_51SjonY7g500rYY0D6YE',

        },
      },
    },
  },
];

const DETAILS2 = {
  id: 'simple-basket',
  displayItems: [
    { amount: { value: "369.00", currency: "USD" }, label: "Product 1 " },
    { amount: { value: "10.00", currency: "USD" }, label: "Shipping" }
  ],
  total: {
    label: 'Grand Total',
    amount: { currency: 'USD', value: '379.00' }
  }
};
const DETAILS = {
  id: 'basic-example',
  displayItems: [
    {
      label: 'Movie Ticket',
      amount: { currency: 'USD', value: '15.00' }
    },
    {
      label: 'Grocery',
      amount: { currency: 'USD', value: '5.00' }
    }
  ],
  shippingOptions: [{
    id: 'economy',
    label: 'Economy Shipping',
    amount: { currency: 'USD', value: '0.00' },
    detail: 'Arrives in 3-5 days' // `detail` is specific to React Native Payments
  }],
  total: {
    label: 'Enappd Store',
    amount: { currency: 'USD', value: '20.00' }
  }
};
const Account = (props) => {
  const { navigation } = props
  const { theme, setTheme } = useColors({ themeName: 'Light' })
  const { route } = props
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const layout = useWindowDimensions();
  const { t } = useTranslation()

  const [visible, setVisible] = useState(false);
  const [visibleColor, setVisibleColor] = useState(false);
  const [index, setIndex] = React.useState(0);

  const {colors} = useTheme()

  const themeContext = useContext(ThemeContext)
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
    const paymentRequest = new PaymentRequest(METHOD_DATA, DETAILS, OPTIONS);
    paymentRequest.show()
      .then(paymentResponse => {
        const { transactionIdentifier, paymentData } = paymentResponse.details;
        console.log('paymentResponse.details  ' + JSON.stringify(paymentResponse.details))
        // return fetch('...', {
        //   method: 'POST',
        //   body: {
        //     transactionIdentifier,
        //     paymentData
        //   }
        // })
        //   .then(res => res.json())
        //   .then(successHandler)
        //   .catch(errorHandler)
      });
  };
  const showPaymentSheet2 = () => {
    const paymentRequest = new PaymentRequest(ANDROID_METHOD_DATA, DETAILS);
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



  function changeLanguge() {
    return (
      <Dialog.Container visible={visible}>
        <Dialog.Title> Cài đặt ngôn ngữ</Dialog.Title>
        <Dialog.Button label="Việt Nam" onPress={handleCancel} />
        <Dialog.Button label="Tiếng Anh" onPress={handleDelete} />
      </Dialog.Container>
    )
  }

  function changeTheme() {
    return (
      <Dialog.Container visible={visibleColor}>
        <Dialog.Title> {t('theme')}</Dialog.Title>

        <Dialog.Button label={t('dark')} onPress={colorDark} />
        <Dialog.Button label={t('light')} onPress={colorLight} />
      </Dialog.Container>
    )
  }

  const showChangeLanguge = () => {
    setVisible(true);
  };

  const showChangeColor = () => {
    setVisibleColor(true);
  };

  const handleCancel = () => {
    global.multilanguge = 'vi';
    saveLanguge(global.multilanguge)
    themeContext.toggleLanguge()
    setVisible(false);
  };

  const colorDark = () => {
    saveColor('Dark')
    
  }
  

  const colorLight = () => {
    saveColor('Light')
   
  }

  const saveColor = (color) => {
    try {
      AsyncStorage.setItem("color", color);
      setTheme(color)
      themeContext.toggleTheme()
    } catch (error) {
      console.log("color error 2")
    }
    setVisibleColor(false)
  }

  const saveLanguge = (language) => {
    try {
      AsyncStorage.setItem("language", language);
    } catch (error) {

    }
  }

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    global.multilanguge = 'en';
   // i18n.changeLanguage(global.multilanguge)
    saveLanguge(global.multilanguge)
    themeContext.toggleLanguge()
    setVisible(false);

   
  };

  return (
    <ScrollView>
      <View style={[styles.containner,{backgroundColor:colors.background}]}>
        {changeLanguge()}
        {changeTheme()}
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
            <Text style={styles.text}>{t('account.discount.code')}</Text>
          </View>
          <View style={styles.line2} />
          <View style={styles.row}>
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>{t('account.gift')}</Text>
          </View>
          <View style={styles.line2} />
          <View style={styles.row}>
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>{t('account.address')}</Text>
          </View>
          <View style={styles.line2} />
          <View style={styles.row}>
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>{t('account.member')}</Text>
          </View>
          <View style={styles.line2} />
          <View style={styles.row}>
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>{t('account.offers')}</Text>
          </View>
          <View style={styles.line2} />
          <View style={styles.row}>
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>{t('account.information')}</Text>
          </View>
          <View style={styles.line2} />

          <View style={styles.row}>
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>{t('viewed.product')}</Text>
          </View>
          <View style={styles.line2} />

          <View style={styles.row}>
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>{t('mycomment')}</Text>
          </View>

          <View style={styles.line2} />
          <TouchableOpacity style={styles.row} onPress={() => Platform.OS == 'ios' ? showPaymentSheet() : showPaymentSheet2()} >
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>{t('payment')}</Text>
          </TouchableOpacity>

          <View style={styles.line2} />
          <TouchableOpacity style={styles.row} onPress={() => showChangeLanguge()} >
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>{t('language')}</Text>
          </TouchableOpacity>

          <View style={styles.line2} />
          <TouchableOpacity style={styles.row} onPress={() => showChangeColor()} >
            <Image source={require('../../image/addCart.png')} style={styles.sizeIcon} />
            <Text style={styles.text}>{t('theme')}</Text>
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
              <Text>{t('account.logout')}</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </ScrollView>

  )
}

export default Account;