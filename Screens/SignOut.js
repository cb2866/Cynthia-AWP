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

function SignOut({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 300, height: 200 }}
        source={{
          uri: "https://img.buzzfeed.com/buzzfeed-static/static/2019-06/19/5/asset/buzzfeed-prod-web-05/anigif_sub-buzz-6269-1560938383-8.gif",
        }}
      />
      <Text>Until next time!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignOut;
