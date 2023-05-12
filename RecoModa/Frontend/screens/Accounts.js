import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Ionic from "react-native-vector-icons/Ionicons";

const Accounts = () => {
  const [image, setImage] = useState(null);
  const addImage = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ACCOUNTS</Text>
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.icon} />
          ) : (
            <Ionic name="person-circle-outline" size={100} color="#aaa" />
          )}
          <TouchableOpacity onPress={addImage}>
            <Text style={styles.iconText}>Change Your Profile Picture</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.seperator}></View>
        <View style={styles.item}>
          <Text style={styles.itemText}>@zulalhdroglu</Text>
          <TouchableOpacity onPress={() => console.log("change your username")}>
            <Text style={styles.buttonText}>Change Your Username</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.seperator}></View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Zülal Nur Hıdıroğlu</Text>
          <TouchableOpacity onPress={() => console.log("change your name")}>
            <Text style={styles.buttonText}>Change Your Name</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.seperator}></View>
        <View style={styles.item}>
          <Text style={styles.itemText}>*********</Text>
          <TouchableOpacity onPress={() => console.log("change your password")}>
            <Text style={styles.buttonText}>Change Your Password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.seperator}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  iconText: {
    color: "#0096FF",
    fontSize: 18,
  },
  content: {
    alignContent: "flex-start",
    justifyContent: "flex-start",
    gap: 10,
    marginTop: 50,
  },
  item: {
    marginHorizontal: 15,
  },
  itemText: {
    color: "#525252",
    fontSize: 16,
  },
  seperator: {
    height: 1,
    backgroundColor: "#dedede",
    width: "100%",
  },
  buttonText: {
    color: "#0096FF",
  },
});

export default Accounts;
