import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const AndroidLarge = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge1}>
      <View style={[styles.head, styles.headPosition]}>
        <View style={[styles.headChild, styles.headPosition]} />
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
      </View>
      <View style={[styles.androidLarge1Child, styles.androidPosition]} />
      <Image
        style={styles.androidLarge1Item}
        contentFit="cover"
        source={require("../assets/ellipse-32.png")}
      />
      <Text style={[styles.nvSir, styles.nvSirTypo]}>N.V SIR</Text>
      <View style={[styles.androidLarge1Inner, styles.androidPosition]} />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.rectangleLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-243.png")}
      />
      <View style={[styles.androidLarge1Child1, styles.androidChildPosition]} />
      <Image
        style={[styles.androidLarge1Child2, styles.androidChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-245.png")}
      />
      <View style={styles.androidLarge1Child3} />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-36.png")}
      />
      <Text style={[styles.postYourDoubts, styles.nvSirTypo]}>
        POST YOUR DOUBTS HERE
      </Text>
      <Pressable
        style={[styles.head1, styles.headPosition]}
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
      <View style={[styles.androidLarge1Child4, styles.androidChildLayout]} />
      <View style={[styles.androidLarge1Child5, styles.androidChildLayout]} />
      <Text style={styles.like}>LIKE</Text>
      <View style={[styles.androidLarge1Child6, styles.androidChildLayout]} />
      <Text style={[styles.review, styles.reviewTypo]}>REVIEW</Text>
      <Text style={[styles.report, styles.reviewTypo]}>REPORT</Text>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headPosition: {
    height: 91,
    width: 360,
    left: "50%",
    top: "50%",
    marginLeft: -180,
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
  androidPosition: {
    left: 0,
    width: 360,
    position: "absolute",
  },
  nvSirTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleLayout: {
    height: 170,
    width: 270,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  androidChildPosition: {
    width: 184,
    left: 97,
    top: 391,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  androidChildLayout: {
    height: 29,
    width: 120,
    backgroundColor: Color.colorChocolate,
    position: "absolute",
  },
  reviewTypo: {
    left: 152,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    marginTop: -400,
  },
  androidLarge1Child: {
    top: 85,
    height: 63,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  androidLarge1Item: {
    top: 104,
    left: 22,
    width: 24,
    height: 24,
    position: "absolute",
  },
  nvSir: {
    top: 107,
    left: 60,
    fontSize: FontSize.size_base,
  },
  androidLarge1Inner: {
    top: 141,
    backgroundColor: Color.colorLightskyblue,
    height: 834,
  },
  rectangleView: {
    top: 173,
    left: 46,
    backgroundColor: Color.colorRoyalblue,
  },
  rectangleIcon: {
    top: 603,
    left: 50,
  },
  androidLarge1Child1: {
    backgroundColor: Color.colorGainsboro,
    height: 177,
  },
  androidLarge1Child2: {
    height: 20,
  },
  androidLarge1Child3: {
    top: 549,
    left: 102,
    borderRadius: Border.br_3xs,
    width: 155,
    height: 14,
    backgroundColor: Color.colorRoyalblue,
    position: "absolute",
  },
  ellipseIcon: {
    top: 548,
    left: 262,
    width: 16,
    height: 16,
    position: "absolute",
  },
  postYourDoubts: {
    top: 395,
    left: 126,
    fontSize: FontSize.size_3xs,
  },
  head1: {
    marginTop: -554,
  },
  androidLarge1Child4: {
    top: 813,
    left: 120,
    height: 29,
    width: 120,
    backgroundColor: Color.colorChocolate,
  },
  androidLarge1Child5: {
    top: 868,
    left: 120,
    height: 29,
    width: 120,
    backgroundColor: Color.colorChocolate,
  },
  like: {
    top: 874,
    left: 165,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  androidLarge1Child6: {
    top: 923,
    left: 122,
  },
  review: {
    top: 929,
  },
  report: {
    top: 819,
  },
  groupIcon: {
    height: "12.45%",
    width: "38.33%",
    top: "16.79%",
    right: "30.56%",
    bottom: "70.76%",
    left: "31.11%",
  },
  groupIcon1: {
    height: "12.36%",
    width: "38.06%",
    top: "55.87%",
    right: "31.11%",
    bottom: "31.77%",
    left: "30.83%",
  },
  androidLarge1: {
    flex: 1,
    width: "100%",
    height: 1108,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default AndroidLarge;
