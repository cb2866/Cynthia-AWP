import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
// import { NavigationContainer } from "@react-navigation/native";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Welcome to the Love Island Fan Community</Text> */}
      <ImageBackground
        style={styles.image}
        source={{
          url: "https://stylecaster.com/wp-content/uploads/2021/08/Love-Island-UK-2.png?w=445",
        }}
      >
        <Button
          // style={styles.buttonText}
          color="white"
          title="Go to Discussion Board"
          onPress={() => {
            navigation.navigate("Discussion Board");
          }}
        />
        <Button
          // style={styles.buttonText}
          color="white"
          title="Sign-up for full access"
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    opacity: 0.5,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 35,
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "bold",
    textAlignmentVertical: "bottom",
    backgroundColor: "#F9E9B9",
  },
  buttonText: {
    fontSize: 20,
    color: "#FF36A0",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});

export default Home;
