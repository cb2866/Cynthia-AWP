import React from "react";
import { Button, Image, StyleSheet, Text, View, Platform } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";

function SignUp({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Join the Love Island Fan Community</Text>
      <Button
        title="Complete Sign-Up"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}

export default SignUp;
