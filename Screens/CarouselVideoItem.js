import React from "react";
import { View, Dimensions, StyleSheet, Image, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import { YoutubePlayer } from "reactjs-media";
import videos from "../videos";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
export default function CarouselVideoItem({ item, index }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.videoUrl }} style={styles.image} />
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: 200,
    paddingBottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: 200,
    height: 200,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
    fontFamily: "JosefinSans",
  },
});
