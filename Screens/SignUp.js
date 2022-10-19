import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  TextInput,
  Text,
  View,
  Platform,
} from "react-native";
import { auth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();

const SignUp = ({ navigation }) => {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  function signUp() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    setValue({
      ...value,
      error: "",
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}>Join the Love Island Community!</Text>
      <View>
        {/* <TextInput placeholder="First Name" style={styles.inputStyle} />
        <TextInput placeholder="Last Name" style={styles.inputStyle} /> */}
        <TextInput
          placeholder="Email"
          style={styles.inputStyle}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          value={value.password}
          style={styles.inputStyle}
          onChangeText={(text) => setValue({ ...value, password: text })}
        />
      </View>
      <Button title="Submit" onPress={signUp} />
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
});

export default SignUp;
