/*import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Post from "../components/Post";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["1", "2", "3","4"],
    };
    this._isMounted = false;
  }
  useEffect(() => {
    // this function will be called after the component is mounted or updated
    console.log("Component did mount or update");
  });
  
  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      
      const ipv4Address =  '192.168.3.247'
      const res = await axios.get(
        "http://" + ipv4Address + ":5000/api/post/"
      );
      console.log(res.data);
      this.state = res;
    } catch (error) {
      // handle error response
      console.log(error);
    }

    //props.navigation.navigate("Home")
  };
  
  changeEmail = (text) => {
    this.setState({ email: text });
  };

  changePassword = (text) => {
    this.setState({ password: text });
  };

  render() {
    return (
      <SafeAreaView style={{ width: "100%", height: "100%" }}>
        <View
          style={{
            width: "100%",
            height: "13%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            adjustsFontSizeToFit
            style={{
              fontSize: Dimensions.get("window").width / 12,
              fontWeight: "bold",
              marginTop: "5%",
              textAlign: "center"
            }}
          >
            RecoModa
          </Text>
        </View>
        <FlatList
          contentContainerStyle={{
            width: "100%",
          }}
          data={this.state.data}
          renderItem={({ item, index }) => <Post></Post>}
          keyExtractor={(item, key) => item}
        />
      </SafeAreaView>
    );
  }
}
export const screenOptions = (navData) => {
  return {
    headerTitle: "SocialApp",
    headerRight: () => (
      <Ionicons
        name={Platform.OS === "android" ? "md-chatboxes" : "ios-chatboxes"}
        size={24}
        color={Platform.OS === "android" ? "#fff" : Colors.brightBlue}
        style={{ padding: 15, marginRight: 5 }}
        onPress={() => navData.navigation.navigate("ChatList")}
      />
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: "100%",
  },
  separator: {
    marginTop: 10,
  },
});*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Post from "../components/Post";
import rawipv4 from "../ipv4.json";
//fonts
import AppLoading from "expo-app-loading";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

const Home = (props) => {
  const [data, setData] = useState({});
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });
  const user = useSelector((state) => state.user.currentUser);
  const handleSubmit = async () => {
    try {
      const ipv4Address = rawipv4["ip"];
      const res = await axios.get("http://" + ipv4Address + ":5000/api/post/");
      //console.log(res.data[0].mediaId);
      setData(res.data);
    } catch (error) {
      // handle error response
      console.log(error);
    }
  };
  var FONT_SIZE = 37;
  useEffect(() => {
    // this function will be called after the component is mounted or updated
    handleSubmit();
    console.log("user : ", user.user._id);
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={{ width: "100%", height: "100%", backgroundColor: "#e3e2e0" }}
    >
      {/* <Image style={styles.bgImage} source={require("../Assets/back1.jpg")} /> */}
      <View
        style={{
          width: "100%",
          height: "12%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#e3e2e0",
        }}
      >
        <Text
          adjustsFontSizeToFit
          style={{
            fontSize: Dimensions.get("window").width / 10,
            marginTop: "5%",
            top: 8,
            textAlign: "center",
            fontFamily: "Pacifico_400Regular",
            color: "#8D3667",
          }}
        >
          RecoModa
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{
          width: "100%",
        }}
        data={data}
        renderItem={({ item, index }) => <Post post={item}></Post>}
        keyExtractor={(item, key) => item._id}
      />
    </SafeAreaView>
  );
};

export default Home;

export const screenOptions = (navData) => {
  return {
    headerTitle: "SocialApp",
    headerRight: () => (
      <Ionicons
        name={Platform.OS === "android" ? "md-chatboxes" : "ios-chatboxes"}
        size={24}
        color={Platform.OS === "android" ? "#fff" : Colors.brightBlue}
        style={{ padding: 15, marginRight: 5 }}
        onPress={() => navData.navigation.navigate("ChatList")}
      />
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: "100%",
  },
  separator: {
    marginTop: 10,
  },
  bgImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});
