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

function InitialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Welcome to the Love Island Fan Community</Text> */}
      <ImageBackground
        style={styles.image}
        source={{
          url: "https://stylecaster.com/wp-content/uploads/2021/08/Love-Island-UK-2.png?w=445",
        }}
      >
        <TouchableOpacity
          style={styles.roundButton2}
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton2}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
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
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#56D8E5",
  },
  image: {
    flex: 1,
    justifyContent: "space-evenly",
    opacity: 0.5,
    padding: 15,
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "bold",
    textAlignmentVertical: "bottom",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default InitialScreen;
