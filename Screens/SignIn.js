import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "@rneui/base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { handleSignIn } from "../config/firebase";
import { useFonts } from "expo-font";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisibility] = React.useState({ name: "eye-off" });
  const [loaded] = useFonts({
    Pecita: require("../assets/fonts/Pecita.otf"),
  });
  if (!loaded) {
    return null;
  }
  const ToggleVisibilty = () => {
    if (visible.name === "eye") {
      setVisibility({ name: "eye-off" });
    } else {
      setVisibility({ name: "eye" });
    }
  };

  const secureTextEntry = () => {
    if (visible.name === "eye") {
      return false;
    } else if (visible.name === "eye-off") {
      return true;
    }
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSignInClick = async () => {
    if (email === "" || password === "") {
      console.error("Invalid Credentials");
    } else {
      try {
        await handleSignIn(email, password);
        navigation.navigate("Home");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "flex-start", paddingTop: 20 }}>
        <Button
          containerStyle={{
            width: 100,
            marginHorizontal: -200,
            marginVertical: 0,
          }}
          buttonStyle={{ backgroundColor: "white" }}
          title="Back"
          type="solid"
          titleStyle={{
            fontFamily: "JosefinSans",
            color: "#FF36A0",
            fontWeight: "bold",
          }}
          onPress={() => {
            navigation.navigate("InitialScreen");
          }}
        ></Button>
      </View>
      <View style={styles.signContainer}>
        <Text style={styles.formLabel}>Welcome back, bombshell!</Text>
      </View>
      <View>
        <TextInput
          placeholder="Email"
          style={styles.inputStyle}
          value={email}
          onChangeText={handleEmailChange}
          textContentType="emailAddress"
          returnKeyType="next"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            secureTextEntry={secureTextEntry()}
            containerStyle={styles.control}
            value={password}
            placeholder="Password"
            style={styles.inputStyle}
            onChangeText={handlePasswordChange}
            returnKeyType="go"
            textContentType="password"
            keyboardType="default"
            autoCorrect={false}
          />
          <Ionicons
            name={visible.name}
            size={24}
            color="#ff36A0"
            style={styles.eyeContainer}
            onPress={ToggleVisibilty}
          />
        </View>

        <Button
          title="Sign In"
          buttonStyle={styles.control}
          onPress={handleSignInClick}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff36a0",
    opacity: 0.5,
    alignItems: "center",
    paddingTop: 40,
    height: 50,
  },
  passwordContainer: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: "#0ff1",
    borderRadius: 5,
    marginBottom: 35,
  },
  eyeContainer: {
    position: "absolute",
    right: 10,
    top: 25,
  },
  controls: {
    flex: 1,
  },
  form: {
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: -40,
  },
  control: {
    marginTop: 10,
    backgroundColor: "#56d8e5",
  },
  formLabel: {
    fontSize: 50,
    color: "#fcfb3a",
    fontWeight: "bold",
    fontFamily: "Pecita",
    textAlign: "center",
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "#DCDCDC",
  },
  signContainer: {
    paddingTop: 40,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  formText: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 20,
    fontFamily: "JosefinSans",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "JosefinSans",
    fontWeight: "bold",
  },
});

export default SignIn;
