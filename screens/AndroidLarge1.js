import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AndroidLarge1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge2}>
      <View style={[styles.androidLarge2Child, styles.androidPosition]} />
      <Text style={styles.applyForJob}>APPLY FOR JOB</Text>
      <View style={[styles.androidLarge2Item, styles.androidPosition]} />
      <Image
        style={styles.profilingPana2Icon}
        contentFit="cover"
        source={require("../assets/profilingpana-2.png")}
      />
      <View style={[styles.androidLarge2Inner, styles.androidPosition]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.androidLarge2Child1, styles.androidChildLayout1]} />
      <Text style={[styles.title, styles.titleTypo]}>TITLE</Text>
      <Text style={[styles.loremIpsumDolor, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
        ipsum in eros gravida lobortis. Sed at ipsum convallis, pulvinar lectus
        quis, lobortis tellus. Fusce varius id lectus vel luctus. Fusce nec
        feugiat magna. Fusce lacinia non enim vitae imperdiet. Cras posuere non
        mi quis mattis. Quisque nec volutpat nisi
      </Text>
      <View style={[styles.androidLarge2Child2, styles.androidChildLayout]} />
      <Text style={[styles.apply, styles.applyTypo]}>APPLY</Text>
      <View style={[styles.androidLarge2Child3, styles.rectangleViewLayout]} />
      <View style={[styles.androidLarge2Child4, styles.androidChildLayout]} />
      <Text style={[styles.apply1, styles.applyTypo]}>APPLY</Text>
      <Text style={[styles.loremIpsumDolor1, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
        ipsum in eros gravida lobortis. Sed at ipsum convallis, pulvinar lectus
        quis, lobortis tellus. Fusce varius id lectus vel luctus. Fusce nec
        feugiat magna. Fusce lacinia non enim vitae imperdiet. Cras posuere non
        mi quis mattis. Quisque nec volutpat nisi
      </Text>
      <View style={[styles.androidLarge2Child5, styles.androidChildLayout1]} />
      <Text style={[styles.title1, styles.titleTypo]}>TITLE</Text>
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
  androidPosition: {
    width: 360,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rectangleViewLayout: {
    height: 375,
    width: 297,
    backgroundColor: Color.colorLightskyblue,
    borderRadius: Border.br_xs,
    left: 37,
    position: "absolute",
  },
  androidChildLayout1: {
    height: 115,
    width: 151,
    backgroundColor: Color.colorTomato,
    left: 115,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  titleTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    left: 166,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  loremTypo: {
    height: 159,
    width: 225,
    fontSize: FontSize.size_smi,
    left: 85,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  androidChildLayout: {
    height: 25,
    width: 84,
    left: 148,
    backgroundColor: Color.colorTomato,
    position: "absolute",
  },
  applyTypo: {
    fontSize: FontSize.size_3xs,
    left: 174,
    textAlign: "left",
    position: "absolute",
  },
  headPosition: {
    height: 91,
    left: "50%",
    top: "50%",
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
  androidLarge2Child: {
    top: 91,
    height: 63,
  },
  applyForJob: {
    top: 111,
    left: 103,
    fontSize: FontSize.size_xl,
    color: Color.colorChocolate,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  androidLarge2Item: {
    top: 154,
    height: 212,
  },
  profilingPana2Icon: {
    top: 164,
    left: 69,
    width: 208,
    height: 179,
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge2Inner: {
    top: 366,
    height: 1015,
  },
  rectangleView: {
    top: 414,
  },
  androidLarge2Child1: {
    top: 426,
  },
  title: {
    top: 556,
  },
  loremIpsumDolor: {
    top: 577,
  },
  androidLarge2Child2: {
    top: 751,
  },
  apply: {
    top: 758,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    left: 174,
    color: Color.colorBlack,
  },
  androidLarge2Child3: {
    top: 847,
  },
  androidLarge2Child4: {
    top: 1186,
  },
  apply1: {
    top: 1193,
    color: "#263238",
    fontSize: FontSize.size_3xs,
    left: 174,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  loremIpsumDolor1: {
    top: 1012,
  },
  androidLarge2Child5: {
    top: 860,
  },
  title1: {
    top: 990,
  },
  headChild: {
    marginTop: -45.5,
    marginLeft: -180,
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
    marginTop: -722.5,
    marginLeft: -178,
  },
  androidLarge2: {
    flex: 1,
    width: "100%",
    height: 1447,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default AndroidLarge1;
