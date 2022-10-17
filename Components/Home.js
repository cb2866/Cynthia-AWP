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
import { NavigationContainer } from "@react-navigation/native";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Welcome to the Love Island Fan Community</Text> */}
      <ImageBackground
        style={styles.image}
        resizeMode="stretch"
        source={{
          url: "https://m.media-amazon.com/images/M/MV5BZWE2ZDZmNzUtMmMyMS00YTBmLTk4NTktMGQ5OTc5YWJmNDU2XkEyXkFqcGdeQXVyMTA1NzU3MTM1._V1_.jpg",
        }}
      >
        <Button
          // style={styles.text}
          title="Go to Discussion Board"
          onPress={() => {
            navigation.navigate("Discussion Board");
          }}
        />
        <Button
          // style={styles.text}
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
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    opacity: 0.5,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
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
    color: "#fff",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});

export default Home;
