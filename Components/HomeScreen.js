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

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Love Island Fan Community</Text>
      <ImageBackground
        source={{
          url: "https://www.laughingplace.com/w/wp-content/uploads/2022/06/love-island-uk-season-8-coming-to-hulu-starting-june-21st.jpg",
        }}
        style={{ resizeMode: "stretch" }}
      >
        {/* <TouchableOpacity
          style={styles.roundButton2}
          onPress={() => {
            navigation.navigate("LogIn");
          }}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton2}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.buttonText}>Sign-Up</Text>
        </TouchableOpacity> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  roundButton2: {
    marginTop: 20,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#56D8E5",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    opacity: 0.5,
    resizeMode: "contain",
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
    // backgroundColor: "#F9E9B9",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});

export default HomeScreen;
