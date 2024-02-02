import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const MobileWeb5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mobileweb1}>
      <View style={[styles.banner, styles.bannerPosition]} />
      <View style={[styles.banner1, styles.bannerLayout]}>
        <Image
          style={[styles.bannerImgIcon, styles.bannerLayout]}
          contentFit="cover"
          source={require("../assets/banner-img.png")}
        />
        <View style={[styles.bannerChild, styles.bannerPosition]} />
        <Text
          style={[styles.sitAmetConsectetur, styles.sitAmetConsecteturLayout]}
        >
          {" "}
          sit amet, consectetur adipiscing elit. Pellentesque iaculis mi lorem.
          Praesent congue quis libero a egestas. Aenean ornare metus ultrices
          elit blandit titor arcu ac volutpat. Nunc nulla erat, euismod ac
          mauris accumsan, convallis viverra ipsum.
        </Text>
      </View>
      <View style={styles.headPosition}>
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
      </View>
      <View style={[styles.link2, styles.linkLayout]} />
      <View style={[styles.link3, styles.linkLayout]} />
      <View style={[styles.link4, styles.linkLayout]} />
      <Image
        style={[styles.link5Icon, styles.linkLayout]}
        contentFit="cover"
        source={require("../assets/link5.png")}
      />
      <View style={[styles.mobileweb1Child, styles.rectangleViewLayout]} />
      <Text style={[styles.mentorshipCanProvide, styles.theClr]}>
        Mentorship can provide numerous benefits for mentors and their mentees.
      </Text>
      <Text style={[styles.getMentorAccess, styles.learnTypo1]}>
        Get Mentor Access
      </Text>
      <View style={[styles.mobileweb1Item, styles.mobileweb1Layout]} />
      <Text style={[styles.downloadAndLearn, styles.learnTypo1]}>
        Download and Learn Offline
      </Text>
      <View style={[styles.mobileweb1Inner, styles.mobileweb1Layout]} />
      <Text style={[styles.improve, styles.improveClr]}>Improve</Text>
      <Text
        style={[styles.communicationSkillsIn, styles.theClr]}
      >{`Communication skills in the workplace include a mix of verbal and non-verbal abilities. `}</Text>
      <Text style={[styles.exploreTheArt, styles.theClr]}>
        Explore the art of concept with our structured material with intelligent
        question tackling and problem solving skills.
      </Text>
      <View style={styles.mascot3} />
      <View style={[styles.mascot4, styles.mascotPosition]} />
      <View style={[styles.mascot5, styles.mascotPosition]} />
      <View style={[styles.mascot51, styles.mascotPosition]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.modules, styles.improveClr]}> Modules</Text>
      <Text style={[styles.improveCommunicationSkills, styles.learnTypo1]}>
        Improve Communication Skills
      </Text>
      <Text style={[styles.theAbsenceOfContainer, styles.theClr]}>
        <Text style={styles.theAbsenceOf}>
          The absence of network connectivity in remote areas made it difficult
          for learners to gain access to course content.
        </Text>
        <Text style={styles.text}>{` `}</Text>
      </Text>
      <Text style={[styles.downloads, styles.improveClr]}>Downloads</Text>
      <Text style={[styles.quicklinesAndOfficial, styles.improveTypo]}>
        QUICKLINES AND OFFICIAL CONTACT DETAILS AND MAILS.
      </Text>
      <Text
        style={[styles.governmentOfKerala, styles.improveClr]}
      >{`Government of Kerala



`}</Text>
      <View style={[styles.illustration, styles.illustrationLayout]}>
        <Image
          style={[styles.backgroundCompleteIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/background-complete1.png")}
        />
        <Image
          style={[styles.deviceIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/device.png")}
        />
        <Image
          style={[styles.certificationIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/certification.png")}
        />
        <View style={styles.plant1}>
          <Image
            style={[styles.groupIcon, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group2.png")}
          />
          <Image
            style={[styles.groupIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group3.png")}
          />
        </View>
        <Image
          style={[styles.characterIcon, styles.groupIconPosition]}
          contentFit="cover"
          source={require("../assets/character.png")}
        />
      </View>
      <Image
        style={[styles.illustrationIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/illustration.png")}
      />
      <Text style={[styles.connect, styles.improveClr]}>Connect</Text>
      <Pressable
        style={[styles.designThinkingPana2Parent, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("MobileWeb")}
      >
        <Image
          style={[styles.designThinkingPana2, styles.sitAmetConsecteturLayout]}
          contentFit="cover"
          source={require("../assets/design-thinkingpana-2.png")}
        />
        <Text style={[styles.learnByFun, styles.learnTypo1]}>Learn By Fun</Text>
        <View style={styles.frameChild} />
        <Text style={[styles.learn, styles.learnTypo]}>Learn</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("MobileWeb")}
      >
        <View style={styles.frameChild} />
        <Text style={[styles.learn, styles.learnTypo]}>Learn</Text>
        <Text style={[styles.classWiseModules, styles.learnTypo1]}>
          Class-Wise Modules
        </Text>
        <Image
          style={[styles.illustrationIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/illustration1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.jobUpdatesParent, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("AndroidLarge1")}
      >
        <Text style={[styles.learnByFun, styles.learnTypo1]}>Job Updates</Text>
        <View style={styles.frameChild} />
        <Text style={[styles.learn, styles.learnTypo]}>Apply</Text>
        <Image
          style={styles.seoPana2Icon}
          contentFit="cover"
          source={require("../assets/seopana-2.png")}
        />
      </Pressable>
      <Pressable
        style={styles.learnParent}
        onPress={() => navigation.navigate("AndroidLarge")}
      >
        <Text style={[styles.learn, styles.learnTypo]}>Learn</Text>
        <View style={[styles.rectangleGroup, styles.rectangleParentLayout]}>
          <View style={styles.frameChild} />
          <Text style={[styles.connect1, styles.learnTypo]}>Connect</Text>
          <View style={styles.frameView} />
          <Text style={[styles.getMentorAccess1, styles.learnTypo1]}>
            Get Mentor Access
          </Text>
          <View style={styles.illustration1}>
            <Image
              style={[styles.backgroundCompleteIcon1, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/background-complete2.png")}
            />
            <Image
              style={[styles.tableIcon, styles.groupIconPosition]}
              contentFit="cover"
              source={require("../assets/table.png")}
            />
            <View style={styles.plants}>
              <Image
                style={[styles.groupIcon2, styles.groupIconPosition]}
                contentFit="cover"
                source={require("../assets/group4.png")}
              />
              <Image
                style={[styles.groupIcon3, styles.groupIconPosition]}
                contentFit="cover"
                source={require("../assets/group5.png")}
              />
            </View>
            <Image
              style={[styles.deviceIcon1, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/device1.png")}
            />
            <Image
              style={[styles.speechBubbleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/speech-bubble.png")}
            />
            <Image
              style={[styles.characterIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/character1.png")}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  bannerLayout: {
    height: 199,
    width: 360,
    left: 0,
    position: "absolute",
  },
  sitAmetConsecteturLayout: {
    height: 107,
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
  linkLayout: {
    height: 168,
    width: 360,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 26,
    width: 102,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorTomato,
    position: "absolute",
  },
  theClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  learnTypo1: {
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  mobileweb1Layout: {
    left: 127,
    height: 26,
    width: 102,
    backgroundColor: Color.colorTomato,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  improveClr: {
    color: Color.colorWhite,
    position: "absolute",
  },
  mascotPosition: {
    left: 101,
    height: 138,
    width: 154,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  improveTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  illustrationLayout: {
    width: "42.78%",
    height: "4.84%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition: {
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParentLayout: {
    height: 176,
    width: 166,
    backgroundColor: Color.colorMistyrose,
    borderRadius: 9,
    position: "absolute",
    overflow: "hidden",
  },
  learnTypo: {
    fontSize: FontSize.size_base_7,
    top: 149,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconPosition: {
    bottom: "0.09%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  banner: {
    backgroundColor: Color.colorFloralwhite,
    height: 158,
    top: 91,
  },
  bannerImgIcon: {
    top: 0,
  },
  bannerChild: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    height: 198,
    top: 0,
  },
  sitAmetConsectetur: {
    top: 73,
    color: Color.colorGainsboro,
    width: 252,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    left: 25,
  },
  banner1: {
    top: 91,
  },
  headChild: {
    backgroundColor: Color.colorRoyalblue,
  },
  menuChild: {
    top: 0,
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
  link2: {
    top: 821,
    backgroundColor: Color.colorLightskyblue,
    height: 168,
    left: -10,
  },
  link3: {
    top: 1137,
    backgroundColor: Color.colorLightskyblue,
    height: 168,
    left: -10,
  },
  link4: {
    top: 1492,
    left: -14,
    backgroundColor: Color.colorLightskyblue,
    height: 168,
  },
  link5Icon: {
    top: 1847,
    left: -10,
  },
  mobileweb1Child: {
    top: 1972,
    left: 123,
  },
  mentorshipCanProvide: {
    top: 1903,
    left: 7,
    width: 326,
    height: 108,
    textAlign: "center",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  getMentorAccess: {
    top: 1868,
    left: 85,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  mobileweb1Item: {
    top: 1617,
  },
  downloadAndLearn: {
    top: 1507,
    left: 50,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  mobileweb1Inner: {
    top: 1265,
  },
  improve: {
    top: 1270,
    left: 157,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  communicationSkillsIn: {
    top: 1203,
    left: 36,
    width: 275,
    height: 62,
    textAlign: "center",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  exploreTheArt: {
    top: 843,
    left: 34,
    width: 277,
    height: 72,
    textAlign: "center",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  mascot3: {
    top: 975,
    left: 100,
    height: 138,
    width: 154,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  mascot4: {
    top: 1328,
  },
  mascot5: {
    top: 1680,
  },
  mascot51: {
    top: 2038,
  },
  rectangleView: {
    top: 923,
    left: 119,
  },
  modules: {
    top: 928,
    left: 107,
    width: 126,
    height: 24,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  improveCommunicationSkills: {
    left: 65,
    width: 238,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    top: 1137,
    height: 30,
  },
  theAbsenceOf: {
    fontSize: FontSize.size_sm,
  },
  text: {
    fontSize: FontSize.size_3xs,
  },
  theAbsenceOfContainer: {
    top: 1545,
    left: 66,
    width: 245,
    height: 60,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  downloads: {
    top: 1622,
    left: 152,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  quicklinesAndOfficial: {
    top: 2117,
    left: 59,
    width: 235,
    height: 19,
    color: Color.colorBlack,
    position: "absolute",
  },
  governmentOfKerala: {
    top: 113,
    fontWeight: "500",
    fontFamily: FontFamily.kanitMedium,
    width: 243,
    height: 284,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: 25,
  },
  backgroundCompleteIcon: {
    height: "92.02%",
    bottom: "7.98%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  deviceIcon: {
    height: "79.68%",
    width: "83.05%",
    top: "12.63%",
    right: "7.92%",
    bottom: "7.69%",
    left: "9.03%",
  },
  certificationIcon: {
    height: "80.06%",
    width: "52.14%",
    top: "2.47%",
    right: "21.04%",
    bottom: "17.47%",
    left: "26.82%",
  },
  groupIcon: {
    height: "97.77%",
    top: "2.23%",
    left: "72.09%",
    width: "27.91%",
    right: "0%",
  },
  groupIcon1: {
    height: "92.45%",
    right: "72.09%",
    bottom: "7.55%",
    width: "27.91%",
    left: "0%",
    top: "0%",
  },
  plant1: {
    height: "55.37%",
    width: "87.73%",
    top: "15%",
    right: "4.48%",
    bottom: "29.63%",
    left: "7.79%",
    position: "absolute",
  },
  characterIcon: {
    height: "71.51%",
    width: "30.97%",
    top: "28.49%",
    right: "51.49%",
    left: "17.53%",
  },
  illustration: {
    top: "34.19%",
    right: "29.17%",
    bottom: "60.97%",
    left: "28.06%",
    position: "absolute",
  },
  illustrationIcon: {
    top: "46.56%",
    right: "28.61%",
    bottom: "48.6%",
    left: "28.61%",
    width: "42.78%",
    height: "4.84%",
  },
  connect: {
    top: 1976,
    left: 148,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  designThinkingPana2: {
    left: 24,
    width: 118,
    top: 0,
    overflow: "hidden",
  },
  learnByFun: {
    top: 115,
    left: -1,
    fontSize: FontSize.size_xl_8,
    width: 167,
    textAlign: "center",
    height: 30,
  },
  frameChild: {
    top: 145,
    left: 32,
    borderRadius: 10,
    width: 106,
    height: 27,
    backgroundColor: Color.colorTomato,
    position: "absolute",
  },
  learn: {
    left: 57,
  },
  designThinkingPana2Parent: {
    top: 301,
    left: 12,
    width: 166,
  },
  classWiseModules: {
    top: 117,
    left: 23,
    fontSize: 12,
    textAlign: "center",
  },
  illustrationIcon1: {
    height: "51.14%",
    width: "62.2%",
    top: "11.36%",
    right: "20.89%",
    bottom: "37.5%",
    left: "16.91%",
  },
  rectangleParent: {
    top: 516,
    left: 12,
    width: 166,
  },
  seoPana2Icon: {
    left: 21,
    borderRadius: 8,
    width: 128,
    height: 109,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  jobUpdatesParent: {
    top: 517,
    left: 184,
  },
  connect1: {
    left: 46,
  },
  frameView: {
    top: 143,
    left: 82,
    width: 36,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  getMentorAccess1: {
    top: 94,
    left: 8,
    width: 157,
    height: 38,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  backgroundCompleteIcon1: {
    height: "99.91%",
    width: "99.08%",
    left: "0.92%",
    right: "0%",
    top: "0%",
  },
  tableIcon: {
    height: "0.09%",
    width: "99.33%",
    top: "99.91%",
    right: "0.67%",
    left: "0%",
  },
  groupIcon2: {
    height: "100%",
    width: "15.74%",
    right: "-0.09%",
    left: "84.34%",
    top: "0%",
  },
  groupIcon3: {
    height: "48.67%",
    width: "8.09%",
    top: "51.33%",
    right: "91.91%",
    left: "0%",
  },
  plants: {
    height: "42.06%",
    width: "95.23%",
    top: "57.76%",
    right: "1.17%",
    bottom: "0.19%",
    left: "3.6%",
    position: "absolute",
  },
  deviceIcon1: {
    height: "78.41%",
    width: "71.44%",
    top: "21.5%",
    right: "14.49%",
    left: "14.07%",
  },
  speechBubbleIcon: {
    height: "20.75%",
    width: "12.14%",
    top: "15.23%",
    right: "29.82%",
    bottom: "64.02%",
    left: "58.04%",
  },
  characterIcon1: {
    height: "67.1%",
    width: "34.76%",
    top: "18.79%",
    right: "33.58%",
    bottom: "14.11%",
    left: "31.66%",
  },
  illustration1: {
    height: "60.8%",
    width: "72.1%",
    top: "-8.52%",
    right: "12.8%",
    bottom: "47.73%",
    left: "15.1%",
    position: "absolute",
  },
  rectangleGroup: {
    top: 7,
    left: -3,
  },
  learnParent: {
    top: 298,
    left: 185,
    width: 168,
    height: 183,
    backgroundColor: Color.colorMistyrose,
    borderRadius: 9,
    position: "absolute",
    overflow: "hidden",
  },
  mobileweb1: {
    flex: 1,
    height: 2176,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default MobileWeb5;
