// src/navigation/types.ts
import { NavigatorScreenParams } from '@react-navigation/native';

// Define the types for your main app's bottom tabs
export type MainTabParamList = {
  Home: undefined;
  Inbox: undefined;
  Upcoming: undefined;
  Filter: undefined;
  Projects: undefined;
};

// Define the types for your authentication and onboarding flow
export type AppStackParamList = {
  SplashScreen: undefined; // <-- ADDED THIS LINE
  Onboarding1Screen: undefined;
  Onboarding2Screen: undefined;
  WelcomeScreen: undefined;
  EmailSignInScreen: undefined;
  CreateAccountScreen: { email: string };
  ThemeScreen: undefined;
  SettingsScreen: undefined;
  Main: NavigatorScreenParams<MainTabParamList>;
};