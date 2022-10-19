import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from "react-native";
import { Input, Button } from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome";
import { firebaseApp } from "@firebase/app";
import { auth, signInWithEmailAndPassword } from "firebase/auth";
import { handleSignIn } from "../config/firebase";

// import { NavigationContainer } from "@react-navigation/native";

// function SignIn({ navigation }) {
//   const [value, setValue] = React.useState({
//     email: "",
//     password: "",
//     error: "",
//   });

//   async function signIn() {
//     if (value.email === "" || value.password === "") {
//       setValue({
//         ...value,
//         error: "Email and password are mandatory.",
//       });
//       return;
//     }

//     try {
//       await signInWithEmailAndPassword(value.email, value.password);
//       // navigation.navigate("Sign In");
//     } catch (error) {
//       setValue({
//         ...value,
//         error: error.message,
//       });
//     }
//   }

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
      <Text style={styles.formLabel}>Sign In</Text>
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
          returnKeyType="next"
        />
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
        {/* <TextInput
          placeholder="Email"
          style={styles.inputStyle}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
          leftIcon={<Icon name="envelope" size={16}></Icon>}
        />
        <TextInput
          secureTextEntry={true}
          containerStyle={styles.control}
          value={value.password}
          placeholder="Password"
          onChangeText={(text) => setValue({ ...value, password: text })}
          style={styles.inputStyle}
          leftIcon={<Icon name="key" size={16} />}
        /> */}
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
  controls: {
    flex: 1,
  },
  control: {
    marginTop: 10,
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
});

export default SignIn;
