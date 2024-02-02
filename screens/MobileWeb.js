import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const MobileWeb = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mobileweb2}>
      <Text style={styles.heading1}>LEARN WITH INTERACTION</Text>
      <View style={styles.image1} />
      <Pressable
        style={styles.middle}
        onPress={() => navigation.navigate("MobileWeb1")}
      />
      <Text style={styles.selectYourClass}>Select Your Class</Text>
      <View style={[styles.mobileweb2Child, styles.mobileweb2ChildLayout1]} />
      <Text style={styles.class1}>Class 1</Text>
      <View style={[styles.mobileweb2Item, styles.mobileweb2ChildLayout1]} />
      <Text style={[styles.class3, styles.classTypo2]}>Class 3</Text>
      <Text style={[styles.class11, styles.classTypo2]}>Class 1</Text>
      <View style={[styles.mobileweb2Inner, styles.mobileweb2ChildLayout1]} />
      <View style={[styles.rectangleView, styles.mobileweb2ChildLayout1]} />
      <View style={[styles.mobileweb2Child1, styles.mobileweb2ChildLayout1]} />
      <Text style={[styles.class9, styles.classTypo1]}>Class 9</Text>
      <View style={[styles.mobileweb2Child2, styles.mobileweb2ChildLayout1]} />
      <View style={[styles.mobileweb2Child3, styles.mobileweb2ChildLayout]} />
      <View style={[styles.mobileweb2Child4, styles.mobileweb2ChildLayout]} />
      <Text style={[styles.class2, styles.classTypo2]}>Class 2</Text>
      <View style={[styles.mobileweb2Child5, styles.mobileweb2ChildLayout]} />
      <View style={[styles.mobileweb2Child6, styles.mobileweb2ChildLayout]} />
      <View style={[styles.mobileweb2Child7, styles.mobileweb2ChildLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.mobileweb2ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-163.png")}
      />
      <View style={[styles.mobileweb2Child8, styles.mobileweb2ChildLayout]} />
      <Text style={[styles.class4, styles.classTypo2]}>Class 4</Text>
      <Text style={[styles.class5, styles.classTypo]}>Class 5</Text>
      <Text style={[styles.class7, styles.classTypo1]}>Class 7</Text>
      <Text style={[styles.class111, styles.classTypo2]}>Class 11</Text>
      <Text style={[styles.class6, styles.classTypo]}>Class 6</Text>
      <Text style={[styles.class8, styles.classTypo2]}>Class 8</Text>
      <Text style={[styles.class10, styles.classTypo2]}>Class 10</Text>
      <Text style={[styles.class12, styles.classTypo2]}>Class 12</Text>
      <Pressable
        style={styles.headPosition}
        onPress={() => navigation.navigate("MobileWeb5")}
      >
        <View style={[styles.headChild, styles.headPosition]} />
        <View style={[styles.menu, styles.menuLayout1]}>
          <View style={[styles.menuChild, styles.menuLayout]} />
          <View style={[styles.menuItem, styles.menuLayout]} />
          <View style={[styles.menuInner, styles.menuLayout]} />
        </View>
        <Image
          style={[styles.profileIcon, styles.menuLayout1]}
          contentFit="cover"
          source={require("../assets/profile.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mobileweb2ChildLayout1: {
    width: 130,
    borderRadius: Border.br_xs,
    left: 15,
    height: 30,
    position: "absolute",
  },
  classTypo2: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  classTypo1: {
    left: 54,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  mobileweb2ChildLayout: {
    left: 193,
    height: 30,
    width: 130,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  classTypo: {
    top: 471,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  headPosition: {
    height: 91,
    top: 0,
    width: 360,
    left: 0,
    position: "absolute",
  },
  menuLayout1: {
    width: 30,
    position: "absolute",
  },
  menuLayout: {
    height: 1,
    width: 31,
    borderTopWidth: 1,
    borderColor: Color.colorFloralwhite,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  heading1: {
    top: 125,
    color: Color.colorTomato,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    left: 49,
    position: "absolute",
  },
  image1: {
    top: 183,
    width: 266,
    height: 96,
    left: 49,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  middle: {
    top: 293,
    backgroundColor: Color.colorLightskyblue,
    height: 414,
    width: 360,
    left: 0,
    position: "absolute",
  },
  selectYourClass: {
    top: 314,
    left: 95,
    width: 250,
    height: 38,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  mobileweb2Child: {
    height: 30,
    backgroundColor: Color.colorDarkslateblue,
    top: 352,
  },
  class1: {
    fontSize: FontSize.size_base,
    left: 53,
    top: 358,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  mobileweb2Item: {
    backgroundColor: Color.colorTomato,
    top: 406,
    height: 30,
  },
  class3: {
    top: 412,
    fontFamily: FontFamily.interRegular,
    left: 53,
  },
  class11: {
    top: 469,
    left: 236,
  },
  mobileweb2Inner: {
    top: 466,
    height: 30,
    backgroundColor: Color.colorDarkslateblue,
  },
  rectangleView: {
    top: 524,
    backgroundColor: Color.colorTomato,
    height: 30,
  },
  mobileweb2Child1: {
    top: 586,
    height: 30,
    backgroundColor: Color.colorDarkslateblue,
  },
  class9: {
    top: 591,
  },
  mobileweb2Child2: {
    top: 646,
    backgroundColor: Color.colorTomato,
    height: 30,
  },
  mobileweb2Child3: {
    backgroundColor: "#c8b47a",
    top: 352,
  },
  mobileweb2Child4: {
    backgroundColor: Color.colorTomato,
    top: 352,
  },
  class2: {
    left: 235,
    top: 358,
    fontFamily: FontFamily.interRegular,
  },
  mobileweb2Child5: {
    top: 406,
    backgroundColor: Color.colorDarkslateblue,
  },
  mobileweb2Child6: {
    top: 466,
    backgroundColor: Color.colorTomato,
  },
  mobileweb2Child7: {
    top: 526,
    backgroundColor: Color.colorDarkslateblue,
  },
  rectangleIcon: {
    top: 589,
  },
  mobileweb2Child8: {
    top: 648,
    backgroundColor: Color.colorDarkslateblue,
  },
  class4: {
    left: 232,
    top: 412,
    fontFamily: FontFamily.interRegular,
  },
  class5: {
    left: 53,
  },
  class7: {
    top: 529,
  },
  class111: {
    top: 652,
    left: 55,
  },
  class6: {
    left: 232,
  },
  class8: {
    top: 533,
    left: 233,
  },
  class10: {
    top: 595,
    left: 229,
  },
  class12: {
    top: 655,
    left: 225,
  },
  headChild: {
    backgroundColor: Color.colorRoyalblue,
  },
  menuChild: {
    top: 0,
    width: 31,
    borderTopWidth: 1,
    borderColor: Color.colorFloralwhite,
    borderStyle: "solid",
  },
  menuItem: {
    top: 5,
  },
  menuInner: {
    top: 10,
  },
  menu: {
    top: 45,
    left: 19,
    height: 10,
  },
  profileIcon: {
    top: 33,
    left: 315,
    height: 30,
  },
  mobileweb2: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default MobileWeb;
