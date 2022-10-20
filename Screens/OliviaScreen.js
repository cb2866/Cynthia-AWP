import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";

function OliviaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Text style={styles.formLabel}>Until next time!</Text>

        <Image
          style={styles.image}
          source={{
            uri: "https://img.buzzfeed.com/buzzfeed-static/static/2019-06/19/5/asset/buzzfeed-prod-web-05/anigif_sub-buzz-6269-1560938383-8.gif",
          }}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "rgba(255,54,160,0.5)",
    // opacity: 0.5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: 390,
    height: 300,
    // opacity: 0.9,
  },
  formLabel: {
    fontSize: 50,
    color: "#fcfb3a",
    fontWeight: "bold",
    fontFamily: "Pecita",
    textAlign: "center",
  },
});

export default OliviaScreen;
