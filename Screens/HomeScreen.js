import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  VirtualizedList,
} from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { useFonts } from "expo-font";

function HomeScreen({ navigation }) {
  const auth = getAuth();
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
          url: "https://i.pinimg.com/originals/f2/32/84/f232848dd82aa1811a32ce487bced701.jpg",
        }}
      >
        <View style={styles.signContainer}>
          <Text style={styles.text}>Welcome to Love Island!</Text>
        </View>

        <View style={styles.innerContainer}>
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
              navigation.navigate("Season 2");
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
              navigation.navigate("Season 8");
            }}
          >
            <Text style={styles.buttonText}>Season 8</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signContainer}>
          <TouchableOpacity
            style={styles.flatRedButton}
            onPress={() =>
              signOut(auth)
                .then(() => {
                  navigation.navigate("InitialScreen");
                })
                .catch((error) => {})
            }
          >
            <Text style={styles.signOutButton}>Sign Out</Text>
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
  innerContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  signContainer: {
    paddingTop: 40,
    flexDirection: "column",
    alignItems: "center",
  },
  flatButton: {
    marginTop: 15,
    width: 100,
    height: 50,
    justifyContent: "center",
    fontFamily: "JosefinSans",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ff36a0",
  },
  flatRedButton: {
    marginTop: 20,
    width: 350,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "JosefinSans",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "yellow",
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 15,
    opacity: 0.5,
    resizeMode: "contain",
  },
  control: {
    marginTop: 10,
    backgroundColor: "#56d8e5",
  },
  text: {
    color: "yellow",
    fontSize: 60,
    lineHeight: 60,
    fontFamily: "Pecita",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    fontFamily: "JosefinSans",
  },
  signOutButton: {
    fontSize: 15,
    fontWeight: "300",
    color: "#ff36a0",
    fontFamily: "JosefinSans",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});

export default HomeScreen;
