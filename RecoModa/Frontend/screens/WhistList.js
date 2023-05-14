import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState,useEffect } from 'react';
import { useSelector } from "react-redux";
import MasonryList from "@react-native-seoul/masonry-list";
import RecoPost from "../components/RecoPost";


const WhistList = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   setPosts(user.user.favoriteProductList)
   console.log(user.user.favoriteProductList)
  }, []);
  const searchData = [
    {
      id: 0,
      images: [
        {
          key: "icon0",
          source: require("../Assets/logoicon.png"),
        },
        {
          key: "icon1",
          source: require("../Assets/profile.png"),
        },
        {
          key: "icon2",
          source: require("../Assets/profile.png"),
        },
        {
          key: "icon3",
          source: require("../Assets/logoicon.png"),
        },
        {
          key: "icon4",
          source: require("../Assets/logoicon.png"),
        },
        {
          key: "icon5",
          source: require("../Assets/profile.png"),
        },
        {
          key: "icon6",
          source: require("../Assets/profile.png"),
        },
        {
          key: "icon7",

          source: require("../Assets/logoicon.png"),
        },
        {
          key: "icon8",
          source: require("../Assets/logoicon.png"),
        },
        {
          key: "icon9",
          source: require("../Assets/profile.png"),
        },
        {
          key: "icon10",

          source: require("../Assets/profile.png"),
        },
        {
          key: "icon11",
          source: require("../Assets/logoicon.png"),
        },
        {
          key: "icon12",
          source: require("../Assets/profile.png"),
        },
      ],
    },
  ];


  return (
    <SafeAreaView style={styles.container} forceInset={{ bottom: "never" }}>
      <Text style={styles.title}>Your WishList</Text>
      <FlatList
        numColumns={2}
        data={user.user.favoriteProductList}
        columnWrapperStyle={{ justifyContent: "space-between", padding: 5 }}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <RecoPost post={item}  ></RecoPost>
        )}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{ height: 150 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingTop: 25,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  image: {
    width: "49%",
    height: undefined,
    aspectRatio: 1,
  },
});
export default WhistList;
