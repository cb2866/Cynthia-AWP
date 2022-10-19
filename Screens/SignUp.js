import React, { useState } from "react";
// import TextBox from "react-native-password-eye";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { Button } from "@rneui/base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { handleSignUp } from "../config/firebase";
import { useFonts } from "expo-font";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisibility] = React.useState({ name: "eye-off" });
  const [loaded] = useFonts({
    Pecita: require("../assets/fonts/Pecita.otf"),
  });
  if (!loaded) {
    return null;
  }
  //Toggles the eye icon to show the password
  const ToggleVisibilty = () => {
    if (visible.name === "eye") {
      setVisibility({ name: "eye-off" });
    } else {
      setVisibility({ name: "eye" });
    }
  };

  //Handles password visibility when the eye icon is pressed
  const secureTextEntry = () => {
    if (visible.name === "eye") {
      return false;
    } else if (visible.name === "eye-off") {
      return true;
    }
  };

  //Handles email input
  const handleEmailChange = (text) => {
    setEmail(text);
  };

  //Handles password input
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  //Handles confirm password input
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  //Handles sign up

  const handleSubmit = async () => {
    if (
      email === "" &&
      password !== confirmPassword &&
      password === "" &&
      confirmPassword === ""
    ) {
      console.error("Invalid Credentials");
    } else {
      try {
        await handleSignUp(email, password);
        navigation.navigate("SignIn");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        <Text style={styles.formLabel}>
          Ready to enter the Love Island Villa?
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="Email"
          style={styles.inputStyle}
          value={email}
          onChangeText={handleEmailChange}
          textContentType="emailAddress"
          keyboardType="email-address"
          returnKeyType="next"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            value={password}
            style={styles.inputStyle}
            onChangeText={handlePasswordChange}
            returnKeyType="next"
            secureTextEntry={secureTextEntry()}
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
          title="Submit"
          buttonStyle={styles.control}
          onPress={handleSubmit}
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
    flexDirection: "column",
  },
  formLabel: {
    fontSize: 50,
    color: "#fcfb3a",
    fontWeight: "bold",
    fontFamily: "Pecita",
    textAlign: "center",
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
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "#DCDCDC",
    alignContent: "center",
  },
  formText: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 20,
    fontFamily: "JosefinSans",
  },
  // text: {
  //   color: "#fff",
  //   fontSize: 20,
  //   fontFamily: "Pecita",
  //   fontWeight: "bold",
  // },
  control: {
    marginTop: 10,
    backgroundColor: "#56d8e5",
  },
  controls: {
    flex: 1,
  },
});

export default SignUp;
