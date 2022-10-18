import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from "react-native";
// import { NavigationContainer } from "@react-navigation/native";

function LogIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}>Login</Text>
      <View>
        <TextInput placeholder="Email" style={styles.inputStyle} />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.inputStyle}
        />
      </View>
      <Button
        title="Submit"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      />
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
});

export default LogIn;
