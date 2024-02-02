import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const MobileWeb4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mobileweb6}>
      <View style={[styles.mobileweb6Child, styles.mobileweb6Position]} />
      <Text style={styles.chooseYourMentor}>CHOOSE YOUR MENTOR</Text>
      <View style={[styles.mobileweb6Item, styles.mobileweb6Position]} />
      <Pressable
        style={[styles.mobileweb6Inner, styles.mobileweb6ChildLayout1]}
        onPress={() => navigation.navigate("AndroidLarge")}
      />
      <View style={[styles.rectangleView, styles.mobileweb6ChildLayout1]} />
      <View style={[styles.mobileweb6Child1, styles.mobileweb6ChildLayout1]} />
      <View style={[styles.mobileweb6Child2, styles.mobileweb6ChildLayout1]} />
      <Image
        style={[styles.ellipseIcon, styles.mobileweb6ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-32.png")}
      />
      <Image
        style={[styles.mobileweb6Child3, styles.mobileweb6ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-32.png")}
      />
      <Image
        style={[styles.mobileweb6Child4, styles.mobileweb6ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-32.png")}
      />
      <Image
        style={[styles.mobileweb6Child5, styles.mobileweb6ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-32.png")}
      />
      <Text style={[styles.hcVerma, styles.nvSirTypo]}>H.C VERMA</Text>
      <Text style={[styles.nvSir, styles.nvSirTypo]}>N.V SIR</Text>
      <Text style={[styles.alakhPandey, styles.nvSirTypo]}>ALAKH PANDEY</Text>
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
  mobileweb6Position: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  mobileweb6ChildLayout1: {
    height: 32,
    width: 290,
    borderRadius: Border.br_sm,
    left: 28,
    backgroundColor: Color.colorRoyalblue,
    position: "absolute",
  },
  mobileweb6ChildLayout: {
    height: 24,
    width: 24,
    left: 34,
    position: "absolute",
  },
  nvSirTypo: {
    color: Color.colorWhite,
    left: 63,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  headPosition: {
    height: 91,
    left: "50%",
    top: "50%",
    marginLeft: -180,
    width: 360,
    position: "absolute",
  },
  menuPosition1: {
    width: 30,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  menuPosition: {
    height: 1,
    width: 31,
    borderTopWidth: 1,
    borderColor: Color.colorFloralwhite,
    borderStyle: "solid",
    marginLeft: -15.5,
    left: "50%",
    top: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  mobileweb6Child: {
    top: 91,
    height: 63,
    backgroundColor: Color.colorWhite,
  },
  chooseYourMentor: {
    top: 115,
    left: 102,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  mobileweb6Item: {
    top: 154,
    backgroundColor: Color.colorLightskyblue,
    height: 287,
  },
  mobileweb6Inner: {
    top: 184,
  },
  rectangleView: {
    top: 296,
  },
  mobileweb6Child1: {
    top: 240,
  },
  mobileweb6Child2: {
    top: 352,
  },
  ellipseIcon: {
    top: 188,
  },
  mobileweb6Child3: {
    top: 244,
  },
  mobileweb6Child4: {
    top: 300,
  },
  mobileweb6Child5: {
    top: 356,
  },
  hcVerma: {
    top: 193,
  },
  nvSir: {
    top: 249,
  },
  alakhPandey: {
    top: 305,
  },
  headChild: {
    marginTop: -45.5,
    backgroundColor: Color.colorRoyalblue,
    height: 91,
    left: "50%",
    top: "50%",
    marginLeft: -180,
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
    marginTop: -400,
  },
  mobileweb6: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default MobileWeb4;
