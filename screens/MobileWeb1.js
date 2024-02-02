import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const MobileWeb1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mobileweb3}>
      <View style={styles.mobileweb3Child} />
      <View style={[styles.mathematics, styles.mathematicsLayout]}>
        <View style={[styles.mathematicsChild, styles.childPosition]} />
        <Text style={[styles.mathematics1, styles.class121Typo]}>
          MATHEMATICS
        </Text>
        <Image
          style={[styles.mathematicsItem, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/polygon-11.png")}
        />
      </View>
      <View style={[styles.chemistry, styles.mathematicsLayout]}>
        <View style={[styles.mathematicsChild, styles.childPosition]} />
        <Text style={[styles.chemistry1, styles.class121Typo]}>CHEMISTRY</Text>
        <Image
          style={[styles.chemistryItem, styles.polygonIconPosition]}
          contentFit="cover"
          source={require("../assets/polygon-11.png")}
        />
      </View>
      <Pressable
        style={[styles.physics, styles.physicsLayout1]}
        onPress={() => navigation.navigate("MobileWeb2")}
      >
        <View style={[styles.physicsChild, styles.physicsLayout1]} />
        <Image
          style={[styles.physicsItem, styles.physicsLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-38.png")}
        />
        <Image
          style={[styles.physicsInner, styles.physicsLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-38.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.physicsLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-38.png")}
        />
        <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
        <View style={[styles.physicsChild1, styles.rectangleViewPosition]} />
        <Text style={[styles.motionInPlane, styles.motionTypo]}>
          Motion in Plane
        </Text>
        <Text style={[styles.unitAndMeasuremnt, styles.motionTypo]}>
          Unit and Measuremnt
        </Text>
        <Text style={[styles.motionInStraight, styles.motionTypo]}>
          Motion in Straight Line
        </Text>
        <Image
          style={[styles.polygonIcon, styles.polygonIconPosition]}
          contentFit="cover"
          source={require("../assets/polygon-10.png")}
        />
        <Text style={styles.physics1}>PHYSICS</Text>
      </Pressable>
      <View style={[styles.class12, styles.class12Layout]}>
        <View style={[styles.class12Child, styles.class12Layout]} />
        <Text style={[styles.class121, styles.class121Typo]}>CLASS 12</Text>
      </View>
      <Pressable
        style={[styles.head, styles.headPosition]}
        onPress={() => navigation.navigate("MobileWeb5")}
      >
        <View style={[styles.headChild, styles.headPosition]} />
        <View style={[styles.menu, styles.menuPosition1]}>
          <View style={[styles.menuChild, styles.menuPosition]} />
          <View style={[styles.menuItem, styles.menuPosition]} />
          <View style={[styles.menuInner, styles.menuPosition]} />
        </View>
        <Image
          style={[styles.profileIcon, styles.menuPosition1]}
          contentFit="cover"
          source={require("../assets/profile.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mathematicsLayout: {
    width: 289,
    height: 48,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_sm,
    left: 0,
    top: 0,
  },
  class121Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  itemLayout: {
    height: 23,
    width: 25,
    top: 13,
  },
  polygonIconPosition: {
    left: 255,
    position: "absolute",
  },
  physicsLayout1: {
    height: 289,
    width: 289,
    position: "absolute",
  },
  physicsLayout: {
    height: 17,
    width: 18,
    left: 19,
    position: "absolute",
  },
  rectangleViewPosition: {
    width: 16,
    left: 259,
    position: "absolute",
  },
  motionTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 43,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  class12Layout: {
    height: 107,
    left: 0,
    width: 360,
    position: "absolute",
  },
  headPosition: {
    height: 91,
    top: "50%",
    marginLeft: -180,
    left: "50%",
    width: 360,
    position: "absolute",
  },
  menuPosition1: {
    width: 30,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  menuPosition: {
    height: 1,
    width: 31,
    borderTopWidth: 1,
    borderColor: Color.colorFloralwhite,
    borderStyle: "solid",
    marginLeft: -15.5,
    top: "50%",
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  mobileweb3Child: {
    top: 198,
    left: 1,
    height: 550,
    width: 360,
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  mathematicsChild: {
    height: 48,
    width: 289,
    position: "absolute",
  },
  mathematics1: {
    left: 61,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    top: 12,
  },
  mathematicsItem: {
    left: 254,
    position: "absolute",
    width: 25,
    top: 13,
  },
  mathematics: {
    top: 654,
    height: 48,
    left: 36,
  },
  chemistry1: {
    left: 81,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    top: 12,
  },
  chemistryItem: {
    height: 23,
    width: 25,
    top: 13,
  },
  chemistry: {
    top: 579,
    left: 35,
    height: 48,
  },
  physicsChild: {
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_sm,
    left: 0,
    top: 0,
  },
  physicsItem: {
    top: 121,
  },
  physicsInner: {
    top: 62,
  },
  ellipseIcon: {
    top: 180,
  },
  rectangleView: {
    top: 55,
    height: 215,
    backgroundColor: Color.colorWhite,
  },
  physicsChild1: {
    top: 114,
    height: 48,
    backgroundColor: Color.colorLightskyblue,
    width: 16,
    left: 259,
  },
  motionInPlane: {
    top: 174,
  },
  unitAndMeasuremnt: {
    top: 60,
    width: 190,
  },
  motionInStraight: {
    top: 117,
    width: 203,
  },
  polygonIcon: {
    width: 23,
    height: 25,
    top: 12,
    left: 255,
  },
  physics1: {
    marginLeft: -45.5,
    left: "50%",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    top: 12,
    position: "absolute",
  },
  physics: {
    top: 257,
    left: 36,
  },
  class12Child: {
    top: 0,
    height: 107,
    backgroundColor: Color.colorWhite,
  },
  class121: {
    top: 44,
    left: 126,
    color: Color.colorTomato,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
  },
  class12: {
    top: 91,
  },
  headChild: {
    marginTop: -45.5,
    backgroundColor: Color.colorRoyalblue,
  },
  menuChild: {
    marginTop: -5.5,
  },
  menuItem: {
    marginTop: -0.5,
  },
  menuInner: {
    marginTop: 4.5,
  },
  menu: {
    marginLeft: -161,
    height: 10,
    marginTop: -0.5,
  },
  profileIcon: {
    marginTop: -12.5,
    marginLeft: 135,
    height: 30,
  },
  head: {
    marginTop: -1012,
  },
  mobileweb3: {
    flex: 1,
    width: "100%",
    height: 2024,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default MobileWeb1;
