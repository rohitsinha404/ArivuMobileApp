import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Frame = () => {
  return (
    <View style={styles.view}>
      <Image
        style={[styles.backgroundCompleteIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/background-complete.png")}
      />
      <Image
        style={[styles.backgroundSimpleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/background-simple.png")}
      />
      <Image
        style={[styles.floorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/floor.png")}
      />
      <Image
        style={[styles.speechBubble2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/speech-bubble-2.png")}
      />
      <Image
        style={[styles.speechBubble1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/speech-bubble-1.png")}
      />
      <Image
        style={[styles.character4Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/character-4.png")}
      />
      <Image
        style={[styles.characters2And3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/characters-2-and-3.png")}
      />
      <Image
        style={[styles.character1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/character-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  backgroundCompleteIcon: {
    height: "116.3%",
    width: "88.57%",
    top: "4.7%",
    right: "2.54%",
    bottom: "-21%",
    left: "8.89%",
  },
  backgroundSimpleIcon: {
    height: "57.2%",
    width: "44.19%",
    top: "21.4%",
    right: "27.9%",
    bottom: "21.4%",
    left: "27.9%",
    display: "none",
  },
  floorIcon: {
    height: "0.1%",
    width: "85.17%",
    top: "92%",
    right: "7.68%",
    bottom: "7.9%",
    left: "7.14%",
  },
  speechBubble2Icon: {
    height: "9.6%",
    width: "6.6%",
    top: "11.7%",
    right: "6.35%",
    bottom: "78.7%",
    left: "87.05%",
  },
  speechBubble1Icon: {
    height: "17.4%",
    width: "11.43%",
    top: "6.6%",
    right: "63.43%",
    bottom: "76%",
    left: "25.14%",
  },
  character4Icon: {
    height: "83.4%",
    width: "20.51%",
    top: "19%",
    right: "9.33%",
    bottom: "-2.4%",
    left: "70.16%",
  },
  characters2And3Icon: {
    height: "86.1%",
    width: "33.75%",
    top: "22%",
    right: "33.24%",
    bottom: "-8.1%",
    left: "33.02%",
  },
  character1Icon: {
    height: "79.1%",
    width: "20.35%",
    top: "24%",
    right: "70.44%",
    bottom: "-3.1%",
    left: "9.21%",
  },
  view: {
    flex: 1,
    width: "100%",
    height: 100,
    overflow: "hidden",
  },
});

export default Frame;
