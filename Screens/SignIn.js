import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from "react-native";
import { Button } from "@rneui/base";
import Icon from "react-native-ionicons";

import { handleSignIn } from "../config/firebase";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisibility] = React.useState({ name: "eye-off" });

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
      <View>
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
          <Icon
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
    justifyContent: "center",
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
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "#DCDCDC",
  },
  formText: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});

export default SignIn;
