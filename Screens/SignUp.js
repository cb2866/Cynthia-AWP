import React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  Text,
  View,
  Platform,
} from "react-native";
import { Input, Button } from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome";
import { auth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();

function SignUp({ navigation }) {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  async function signUp() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate("Sign In");
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}>Join the Love Island Community!</Text>
      {!!value.error && (
        <View style={styles.error}>
          <Text>{value.error}</Text>
        </View>
      )}

      <View>
        <TextInput
          placeholder="Email"
          style={styles.inputStyle}
          leftIcon={<Icon name="envelope" size={16} />}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          value={value.password}
          style={styles.inputStyle}
          onChangeText={(text) => setValue({ ...value, password: text })}
          leftIcon={<Icon name="key" size={16} />}
        />
        <Button title="Submit" buttonStyle={styles.control} onPress={signUp} />
      </View>
    </View>
  );
}

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
