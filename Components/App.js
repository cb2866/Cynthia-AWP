import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import * as ImageManipulator from "expo-image-manipulator";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InitialScreen from "./InitialScreen";
import DiscussionBoard from "./DiscussionBoard";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();
// export default function App() {
//   const [selectedImage, setSelectedImage] = React.useState(null);
//   let openImagePickerAsync = async () => {
//     let pickerResult = await ImagePicker.launchImageLibraryAsync();
//     if (pickerResult.cancelled === true) {
//       return;
//     }
//     setSelectedImage({ localUri: pickerResult.uri });
//   };
//   let openShareDialogAsync = async () => {
//     if (Platform.OS === "web") {
//       alert(`Uh oh, sharing isn't available on your platform`);
//       return;
//     }
//     const imageTmp = await ImageManipulator.manipulateAsync(
//       selectedImage.localUri
//     );
//     await Sharing.shareAsync(imageTmp.uri);
//   };
//   if (selectedImage !== null) {
//     return (
//       <View style={styles.container}>
//         <Image
//           source={{ uri: selectedImage.localUri }}
//           style={styles.thumbnail}
//         />
//         <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
//           <Text style={styles.buttonText}>Share this photo</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
//         style={styles.logo}
//       />
//       <Text style={styles.instructions}>
//         To share a photo from your phone with a friend, just press the button
//         below!
//       </Text>
//       <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
//         <Text style={styles.buttonText}>Pick a photo</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome!"
          component={InitialScreen}
          options={{
            headerStyle: {
              backgroundColor: "#56D8E5",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Discussion Board"
          component={DiscussionBoard}
          options={{
            title: "Discussion",
            headerStyle: {
              backgroundColor: "#56D8E5",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerStyle: {
              backgroundColor: "#56D8E5",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{
            headerStyle: {
              backgroundColor: "#56D8E5",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: "#56D8E5",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
