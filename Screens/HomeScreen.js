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
      <ImageBackground
        style={styles.image}
        source={{
          url: "https://i.pinimg.com/originals/f2/32/84/f232848dd82aa1811a32ce487bced701.jpg",
        }}
      >
        <Text style={styles.text}>
          Welcome to the Love Island Fan Community!
        </Text>
        <TouchableOpacity
          style={styles.flatButton}
          onPress={() => {
            navigation.navigate("LogIn");
          }}
        >
          <Text style={styles.buttonText}>Season 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.flatButton}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.buttonText}>Season 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.flatButton}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.buttonText}>Season 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.flatButton}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.buttonText}>Season 4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.flatButton}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.buttonText}>Season 5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.flatButton}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.buttonText}>Season 6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.flatButton}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.buttonText}>Season 7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.flatButton}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.buttonText}>Season 8</Text>
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
  flatButton: {
    marginTop: 20,
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#ff36a0",
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 15,
    opacity: 0.5,
    resizeMode: "contain",
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 15,
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
