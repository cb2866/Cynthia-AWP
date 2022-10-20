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
  ScrollView,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import data from "../data";

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
        <Text style={styles.text}>Season 2!</Text>
        <Text style={styles.text2}>Meet the Cast</Text>

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
