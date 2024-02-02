const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import MobileWeb5 from "./screens/MobileWeb5";
import MobileWeb from "./screens/MobileWeb";
import Frame from "./screens/Frame";
import MobileWeb1 from "./screens/MobileWeb1";
import MobileWeb2 from "./screens/MobileWeb2";
import MobileWeb3 from "./screens/MobileWeb3";
import MobileWeb4 from "./screens/MobileWeb4";
import AndroidLarge from "./screens/AndroidLarge";
import AndroidLarge1 from "./screens/AndroidLarge1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Kanit-Medium": require("./assets/fonts/Kanit-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="MobileWeb5"
              component={MobileWeb5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileWeb"
              component={MobileWeb}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileWeb1"
              component={MobileWeb1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileWeb2"
              component={MobileWeb2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileWeb3"
              component={MobileWeb3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileWeb4"
              component={MobileWeb4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge"
              component={AndroidLarge}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge1"
              component={AndroidLarge1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
