import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const MobileWeb3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mobileweb5}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text
          style={styles.physicscurrentElectricityoh}
        >{`PHYSICS>CURRENT ELECTRICITY>OHM’s LAW`}</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout3]}>
        <View style={[styles.groupItem, styles.groupLayout3]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.next, styles.nextTypo]}>NEXT</Text>
        <View style={[styles.rectangleView, styles.groupLayout]} />
        <Pressable
          style={[styles.connect, styles.nextPosition]}
          onPress={() => navigation.navigate("MobileWeb4")}
        >
          <Text style={[styles.connect1, styles.nextTypo]}>CONNECT</Text>
        </Pressable>
        <View style={[styles.groupChild1, styles.groupChildPosition]} />
        <Text style={[styles.prev, styles.nextTypo]}>PREV</Text>
        <View style={[styles.groupChild2, styles.groupChildPosition]} />
      </View>
      <Pressable
        style={[styles.head, styles.headPosition]}
        onPress={() => navigation.navigate("MobileWeb5")}
      >
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
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 63,
    width: 360,
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    left: 0,
  },
  groupLayout3: {
    height: 297,
    width: 360,
    position: "absolute",
  },
  groupLayout: {
    height: 20,
    top: 231,
  },
  nextTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  nextPosition: {
    top: 234,
    position: "absolute",
  },
  groupChildPosition: {
    left: 30,
    borderRadius: Border.br_3xs,
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
  groupChild: {
    height: 63,
    width: 360,
    position: "absolute",
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  physicscurrentElectricityoh: {
    top: 24,
    left: 11,
    color: Color.colorBlack,
    width: 323,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleParent: {
    top: 91,
    left: 0,
    width: 360,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorLightskyblue,
    top: 0,
    left: 0,
  },
  groupInner: {
    left: 265,
    width: 74,
    backgroundColor: Color.colorChocolate,
    height: 20,
    top: 231,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  next: {
    left: 286,
    top: 234,
    position: "absolute",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  rectangleView: {
    left: 129,
    width: 111,
    backgroundColor: Color.colorRoyalblue,
    borderRadius: Border.br_3xs,
    position: "absolute",
    height: 20,
    top: 231,
  },
  connect1: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  connect: {
    left: 158,
  },
  groupChild1: {
    height: 20,
    top: 231,
    width: 74,
    backgroundColor: Color.colorChocolate,
  },
  prev: {
    left: 52,
    fontFamily: FontFamily.interRegular,
    top: 234,
    position: "absolute",
  },
  groupChild2: {
    top: 28,
    backgroundColor: Color.colorGainsboro,
    width: 309,
    height: 174,
  },
  rectangleGroup: {
    top: 154,
    left: -3,
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
  mobileweb5: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default MobileWeb3;
