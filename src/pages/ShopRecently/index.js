import React, { useState,useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
import Dialog from "react-native-dialog";
import i18n from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ShopRecently = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    global.multilanguge ='vi';
    saveLanguge( global.multilanguge)
    i18n.changeLanguage(global.multilanguge)
    setVisible(false);
  };

  const saveLanguge =(language)=>{
    try {
      AsyncStorage.setItem("language",language);
  } catch (error) {

  }
  }

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    global.multilanguge ='en';
    i18n.changeLanguage(global.multilanguge)
    saveLanguge( global.multilanguge)
    setVisible(false);
  };

  // useEffect(()=>{
  //   changeLanguge
  // },[visible])

  function changeLanguge () {
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
    <View style={styles.container}>
      <Button title="Show dialog" onPress={showDialog} />
      {changeLanguge()}
    </View>
  );
}

export default ShopRecently;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
