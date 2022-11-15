import React, { useState, useEffect, useRef } from "react";
import Dialog from "react-native-dialog";
import i18n from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Geolocation from "react-native-geolocation-service";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


import {
  Button,
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  Platform,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Geocoder from 'react-native-geocoding';
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT, Marker, Callout, Polyline } from 'react-native-maps';

const { width, height } = Dimensions.get('window');


const ASPECT_RATIO = width / height; //15.706896201504355, 108.47184857418542
const LATITUDE = 15.706896201504355;
const LONGITUDE = 108.47184857418542;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const ShopRecently = (props) => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };


  const [coordinates] = useState([
    {
      latitude: 15.709808407661331,
      longitude: 108.46768591603758,
    },
    {
      latitude: 15.701380532661755,
      longitude: 108.47326491048982,
    },
    {
      latitude: 15.704768249804749,
      longitude: 108.46545431825668
    },
  ]);

  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
  });

  const [
    currentLongitude,
    setCurrentLongitude
  ] = useState('...');
  const [
    currentLatitude,
    setCurrentLatitude
  ] = useState('...');

  useEffect(() => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        //getting the Longitude from the location json
        const currentLongitude =
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude =
          JSON.stringify(position.coords.latitude);

        console.log("Geolocation " + currentLongitude + ' ' + currentLatitude)
        setPosition({ latitude: currentLatitude, longitude: currentLongitude })
      }, (error) => alert(error.message), {
      enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
    }
    );
  }, []);

  // Geocoder.init("AIzaSyAVVG0HS2LsnOs1oX5JxOyZDkoUEao5tqc"); // use a valid API key
  // // // Search by address
  // Geocoder.from("tổ 1, an trân , bình hải,thăng bình,quảng nam")
  //   .then(json => {
  //     var location = json.results[0].geometry.location;
  //     console.log(location);
  //   })
  //   .catch(error => console.warn(error));
  // Address Geocoding
  // Geocoder.geocodeAddress('tổ 1, an trân , bình hải,thăng bình,quảng nam').then(json => {
  //   // res is an Array of geocoding object (see below)
  //   var location = json.results[0].geometry.location;
  //   console.log('location ' + location);
  // })
  //   .catch(err => console.log(err))

  const handleCancel = () => {
    global.multilanguge = 'vi';
    saveLanguge(global.multilanguge)
    i18n.changeLanguage(global.multilanguge)
    setVisible(false);
  };

  const saveLanguge = (language) => {
    try {
      AsyncStorage.setItem("language", language);
    } catch (error) {

    }
  }

  const ref = useRef();

  useEffect(() => {
    ref.current?.setAddressText('Some Text');
  }, []);

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    global.multilanguge = 'en';
    i18n.changeLanguage(global.multilanguge)
    saveLanguge(global.multilanguge)
    setVisible(false);
  };

  // useEffect(()=>{
  //   changeLanguge
  // },[visible])

  function changeLanguge() {
    return (
      <Dialog.Container visible={visible}>
        <Dialog.Title>Account delete</Dialog.Title>
        <Dialog.Description>
          Do you want to delete this account? You cannot undo this action.
        </Dialog.Description>
        <Dialog.Button label="Viet nam" onPress={handleCancel} />
        <Dialog.Button label="English" onPress={handleDelete} />
      </Dialog.Container>
    )
  }

  return (
    <View style={styles.containner}>
      <TouchableOpacity onPress={() => props.goToUrgent()}>
        <Text>Gửi khân cấp</Text>
      </TouchableOpacity>
  
      <View style={{flex:1}}>
      <MapView
     //  provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 15.706938,
          longitude: 108.471806,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
        <Marker coordinate={coordinates[2]} />

        <Marker coordinate={position} />
        <Polyline
          coordinates={coordinates}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={['#7F0000']}
          strokeWidth={6}
        />
        <Marker
          coordinate={{
            latitude: 15.706938,
            longitude: 108.471806,
          }}
          image={require('../../image/location-pin.png')}
          title={'shop 1'}
          description={'ban nhiều thứ'}>
          <Callout tooltips>
            <View>
              <Text>Nhà tôi ở đây</Text>
              <Image source={require('../../image/scan.png')} />
            </View>
          </Callout>
        </Marker>

      </MapView>
      </View>



    </View>
  );
}

export default ShopRecently;

const styles = StyleSheet.create({
  containner: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
