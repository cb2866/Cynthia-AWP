import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";

function S2({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{
          url: "https://i.pinimg.com/originals/f2/32/84/f232848dd82aa1811a32ce487bced701.jpg",
        }}
      >
        <Text style={styles.text}>All Things Season 2!</Text>
        <Text style={styles.text2}>Meet the Cast</Text>
        <Image
          style={styles.thumbnail}
          source={require("../assets/olivia.png")}
        ></Image>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "bold",
    alignItems: "center",
  },
  text2: {
    color: "#ff36a0",
    fontSize: 20,
    lineHeight: 40,
    fontWeight: "bold",
    alignItems: "center",
    textDecorationLine: true,
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 15,
    opacity: 0.5,
    resizeMode: "contain",
  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default S2;
