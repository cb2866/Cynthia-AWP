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
import { useFonts } from "expo-font";

function InitialScreen({ navigation }) {
  const [loaded] = useFonts({
    Pecita: require("../assets/fonts/Pecita.otf"),
    JosefinSans: require("../assets/fonts/JosefinSans-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{
          url: "https://stylecaster.com/wp-content/uploads/2021/08/Love-Island-UK-2.png?w=445",
        }}
      >
        <View style={styles.signContainer}>
          <Text style={styles.text}>Welcome to Love Island!</Text>
        </View>

        <View
          style={{
            paddingBottom: 40,
            justifyContent: "flex-end",
            alignItems: "flex-end",
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
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  signContainer: {
    paddingTop: 40,
    flexDirection: "column",
    alignItems: "center",
  },
  roundButton2: {
    marginTop: 20,
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#56D8E5",
  },
  image: {
    flex: 1,
    justifyContent: "space-between",
    opacity: 0.5,
    padding: 15,
  },

  text: {
    color: "yellow",
    fontSize: 60,
    lineHeight: 60,
    fontFamily: "Pecita",
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    fontFamily: "JosefinSans",
  },
});

export default InitialScreen;
