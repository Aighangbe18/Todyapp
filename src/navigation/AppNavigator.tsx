// src/navigation/AppNavigator.tsx
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AppStackParamList } from "./types";

// Import all your screen components
import CreateAccountScreen from "../../app/(Auth)/CreateAccountScreen";
import EmailSignInScreen from "../../app/(Auth)/EmailSignInScreen";
import WelcomeScreen from "../../app/(Auth)/WelcomeScreen";
import Onboarding1Screen from "../../app/(onboarding)/Onboarding1Screen";
import Onboarding2Screen from "../../app/(onboarding)/Onboarding2Screen";
import SplashScreen from "../../app/(onboarding)/SplashScreen";
import SettingsScreen from "../../app/Settings/SettingsScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SplashScreen"
    >
      {/* Onboarding and Authentication Flow */}
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Onboarding1Screen" component={Onboarding1Screen} />
      <Stack.Screen name="Onboarding2Screen" component={Onboarding2Screen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="EmailSignInScreen" component={EmailSignInScreen} />
      <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
      />

      {/* Settings and Main App Flow */}

      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="Main" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
