import React from "react";
import { Button, Image, StyleSheet, Text, View, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

function DiscussionBoard({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>All Things Love Island Discussion Board!</Text>
      {/* <Button
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      /> */}
    </View>
  );
}

export default DiscussionBoard;


{
  /* <Button
          // style={styles.buttonText}
          color="#f194ff"
          title="Go to Discussion Board"
          onPress={() => {
            navigation.navigate("Discussion Board");
          }}
        /> */
}
