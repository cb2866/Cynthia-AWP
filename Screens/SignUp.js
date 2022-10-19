import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  Text,
  View,
  Platform,
} from "react-native";
import { Button } from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome";
import { auth, createUserWithEmailAndPassword } from "firebase/auth";
import { handleSignUp } from "../config/firebase";

// const auth = getAuth();

// function SignUp({ navigation }) {
// const [value, setValue] = React.useState({
//   email: "",
//   password: "",
//   error: "",
// });

// async function signUp() {
//   if (value.email === "" || value.password === "") {
//     setValue({
//       ...value,
//       error: "Email and password are mandatory.",
//     });
//     return;
//   }

//   try {
//     await createUserWithEmailAndPassword(auth, value.email, value.password);
//     navigation.navigate("Sign In");
//   } catch (error) {
//     setValue({
//       ...value,
//       error: error.message,
//     });
//   }
// }
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisibility] = React.useState({ name: "eye-off" });

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
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}>Join the Love Island Community!</Text>
      {/* {!!value.error && (
        <View style={styles.error}>
          <Text>{value.error}</Text>
        </View>
      )} */}

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
        {/* <TextInput
          placeholder="Email"
          style={styles.inputStyle}
          leftIcon={<Icon name="envelope" size={16} />}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
        /> */}
        {/* <TextInput
          secureTextEntry={true}
          placeholder="Password"
          value={value.password}
          style={styles.inputStyle}
          onChangeText={(text) => setValue({ ...value, password: text })}
          leftIcon={<Icon name="key" size={16} />}
        /> */}
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
    justifyContent: "center",
    height: 50,
  },

  formLabel: {
    fontSize: 20,
    color: "#fff",
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
  control: {
    marginTop: 10,
  },
  controls: {
    flex: 1,
  },
});

export default SignUp;
