// app/_layout.tsx
import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Onboarding screens */}
      <Stack.Screen name="(onboarding)" />

      {/* Authentication screens */}
      <Stack.Screen name="screens/Auth/WelcomeScreen" />
      <Stack.Screen name="screens/Auth/EmailSignInScreen" />
      <Stack.Screen name="screens/Auth/CreateAccountScreen" />
      <Stack.Screen
        name="ThemeSelectionScreen"
        options={{ headerShown: false }}
      />

      {/* Settings screens */}
      <Stack.Screen name="screens/Settings/ThemeScreen" />
      <Stack.Screen name="screens/Settings/SettingsScreen" />

      {/* Main app flow with the bottom tabs */}
      <Stack.Screen name="screens/Main" />
    </Stack>
  );
}
