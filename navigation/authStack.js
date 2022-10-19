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

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InitialScreen from "../Screens/InitialScreen";
import DiscussionBoard from "../Screens/DiscussionBoard";
import SignUp from "../Screens/SignUp";
import SignIn from "../Screens/SignIn";
import HomeScreen from "../Screens/HomeScreen";
import SignOut from "../Screens/SignOut";
import S2 from "../Screens/S2";
const Stack = createNativeStackNavigator();

export default function AuthStack() {
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
          name="Sign Out"
          component={SignOut}
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
          name="Season 2"
          component={S2}
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
          name="Home"
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
          name="SignIn"
          component={SignIn}
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
