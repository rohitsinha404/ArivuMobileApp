import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const MobileWeb2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mobileweb4}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupInnerBg]} />
        <Text style={styles.text}>25%</Text>
        <Text style={styles.currentElectricity}>CURRENT ELECTRICITY</Text>
      </View>
      <View style={[styles.mobileweb4Child, styles.groupInnerBg]} />
      <View style={[styles.mobileweb4Item, styles.rectangleLayout]} />
      <Text style={[styles.lawOfConservation, styles.lawTypo]}>
        Law of Conservation of Charges
      </Text>
      <View style={[styles.mobileweb4Inner, styles.rectangleLayout]} />
      <Text style={[styles.electricCharges, styles.lawTypo]}>
        Electric Charges
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleLayout]}
        onPress={() => navigation.navigate("MobileWeb3")}
      />
      <Pressable
        style={[styles.ohmsLaw, styles.lawPosition]}
        onPress={() => navigation.navigate("MobileWeb3")}
      >
        <Text style={styles.lawTypo}>Ohm’s Law</Text>
      </Pressable>
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Text style={[styles.electricChargeIn, styles.lawTypo]}>
        Electric Charge in a Field
      </Text>
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
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-40.png")}
      />
      <Image
        style={[styles.mobileweb4Child1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-40.png")}
      />
      <Image
        style={[styles.mobileweb4Child2, styles.mobileweb4ChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-40.png")}
      />
      <Image
        style={[styles.mobileweb4Child3, styles.mobileweb4ChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-40.png")}
      />
      <View style={[styles.mobileweb4Child4, styles.mobileweb4ChildLayout]} />
      <View style={styles.mobileweb4Child5} />
      <Text style={[styles.downloadNotes, styles.lawTypo]}>Download Notes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 63,
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 6,
    borderRadius: Border.br_xs,
    left: 130,
    top: 28,
  },
  groupInnerBg: {
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  rectangleLayout: {
    height: 25,
    width: 300,
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorDarkslateblue,
    position: "absolute",
  },
  lawTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  lawPosition: {
    left: 61,
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
  ellipseIconLayout: {
    height: 15,
    width: 15,
    left: 39,
    position: "absolute",
  },
  mobileweb4ChildPosition: {
    left: 41,
    height: 15,
    width: 15,
    position: "absolute",
  },
  mobileweb4ChildLayout: {
    width: 360,
    left: 0,
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  groupItem: {
    width: 161,
    backgroundColor: Color.colorDarkslateblue,
    height: 6,
    borderRadius: Border.br_xs,
    left: 130,
    top: 28,
    position: "absolute",
  },
  groupInner: {
    width: 79,
    height: 6,
    borderRadius: Border.br_xs,
    left: 130,
    top: 28,
    backgroundColor: Color.colorLightskyblue,
  },
  text: {
    top: 22,
    left: 302,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  currentElectricity: {
    top: 16,
    left: 12,
    fontSize: FontSize.size_base,
    width: 113,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleParent: {
    top: 91,
  },
  mobileweb4Child: {
    top: 154,
    height: 332,
    width: 360,
    left: 0,
  },
  mobileweb4Item: {
    top: 193,
    left: 31,
    width: 300,
    borderRadius: Border.br_sm,
  },
  lawOfConservation: {
    top: 196,
    left: 61,
    position: "absolute",
  },
  mobileweb4Inner: {
    top: 257,
    left: 30,
  },
  electricCharges: {
    top: 261,
    left: 61,
    position: "absolute",
  },
  rectanglePressable: {
    top: 324,
    left: 31,
    width: 300,
    borderRadius: Border.br_sm,
  },
  ohmsLaw: {
    top: 328,
  },
  rectangleView: {
    top: 363,
    left: 27,
  },
  electricChargeIn: {
    top: 388,
    left: 61,
    position: "absolute",
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
  ellipseIcon: {
    top: 198,
  },
  mobileweb4Child1: {
    top: 262,
  },
  mobileweb4Child2: {
    top: 329,
  },
  mobileweb4Child3: {
    top: 389,
  },
  mobileweb4Child4: {
    top: 486,
    backgroundColor: Color.colorGainsboro,
    height: 75,
    position: "absolute",
  },
  mobileweb4Child5: {
    top: 511,
    left: 74,
    borderRadius: 20,
    backgroundColor: Color.colorChocolate,
    width: 205,
    height: 31,
    position: "absolute",
  },
  downloadNotes: {
    top: 518,
    left: 124,
    position: "absolute",
  },
  mobileweb4: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default MobileWeb2;
