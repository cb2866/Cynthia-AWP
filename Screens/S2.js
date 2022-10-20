import React from "react";
import {
  // Stack,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Button, Icon } from "@rneui/base";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import data from "../data";

<Button
  buttonStyle={{
    backgroundColor: "rgba(111, 202, 186, 1)",
    borderRadius: 5,
  }}
  size="sm"
  title="Solid"
  type="solid"
  onPress={() => {
    navigation.navigate("Home");
  }}
>
  {/* <Icon name="home" color="white" /> */}
  <Text style={{ color: "white", fontWeight: "bold" }}> Back</Text>
</Button>;

function S2({ navigation }) {
  const isCarousel = React.useRef(null);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{
          url: "https://i.pinimg.com/originals/f2/32/84/f232848dd82aa1811a32ce487bced701.jpg",
        }}
      >
        <View style={{ alignItems: "flex-start", paddingTop: 20 }}>
          <Button
            containerStyle={{
              width: 100,
              marginHorizontal: -20,
              marginVertical: 0,
              // alignItems: "flex-start",
            }}
            buttonStyle={{ backgroundColor: "#FF36A0" }}
            title="Home"
            type="solid"
            titleStyle={{
              fontFamily: "JosefinSans",
              color: "white",
              fontWeight: "bold",
            }}
            onPress={() => {
              navigation.navigate("Home");
            }}
          ></Button>
        </View>
        <View style={styles.signContainer}>
          <Text style={styles.text}>Season 2!</Text>
          {/* <Text style={styles.text2}>Meet the Cast</Text> */}
        </View>
        <Carousel
          layout="stack"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
        <Text style={styles.text2}>Discussion Board</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  signContainer: {
    paddingTop: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  roundButton2: {
    marginTop: 20,
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#56D8E5",
  },
  text: {
    color: "yellow",
    fontSize: 60,
    lineHeight: 60,
    fontWeight: "bold",
    alignItems: "center",
    fontFamily: "Pecita",
    textAlign: "center",
  },
  text2: {
    color: "#ff36a0",
    fontSize: 30,
    lineHeight: 30,
    padding: 10,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    fontFamily: "JosefinSans",
    textDecorationLine: true,
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 15,
    opacity: 0.5,
    resizeMode: "contain",
  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default S2;
