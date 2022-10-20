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
import data2 from "../data2";
import videos from "../videos";
import CarouselVideoItem from "./CarouselVideoItem";

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
  <Text style={{ color: "white", fontWeight: "bold" }}> Back</Text>
</Button>;

function S8({ navigation }) {
  const isCarousel = React.useRef(null);
  const TEXT_LENGTH = 40;
  const TEXT_HEIGHT = 14;
  const OFFSET = TEXT_LENGTH / 2 - TEXT_HEIGHT / 2;

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
          <Text style={styles.text}>Season 8!</Text>
        </View>
        <View>
          <View style={styles.sidewaysContainer}>
            <Text style={styles.text2}>Cast</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              left: 20,
              bottom: 70,
            }}
          >
            <Carousel
              layout="stack"
              ref={isCarousel}
              data={data2}
              renderItem={CarouselCardItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              inactiveSlideShift={0}
              useScrollView={true}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            position: "relative",
            top: 130,
            left: -20,
          }}
        >
          <Text style={styles.text2}>Clips</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            left: 20,
            bottom: 20,
          }}
        >
          <Carousel
            layout="stack"
            ref={isCarousel}
            data={videos}
            renderItem={CarouselVideoItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            useScrollView={true}
          />
        </View>
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
  sidewaysContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative",
    top: 70,
    left: -20,
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
    color: "#ff36A0",
    fontSize: 60,
    lineHeight: 80,
    fontWeight: "bold",
    fontFamily: "JosefinSans",
    transform: [{ rotate: "270deg" }],
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

export default S8;
