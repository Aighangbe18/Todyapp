// src/screens/Settings/SettingsScreen.tsx

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import useThemeStore from "../../src/stores/themeStore";
// Import your custom navigation types
import { router } from "expo-router";
import { AppStackParamList } from "../../src/navigation/types";

// Define the navigation prop's type for this screen
type SettingsScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  "SettingsScreen"
>;

interface SettingItemProps {
  icon: string;
  text: string;
  onPress: () => void;
  hasArrow?: boolean;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  text,
  onPress,
  hasArrow = true,
}) => {
  return (
    <TouchableOpacity style={itemStyles.container} onPress={onPress}>
      <View style={itemStyles.leftContent}>
        <Ionicons name={icon} size={24} color="#333" />
        <Text style={itemStyles.text}>{text}</Text>
      </View>
      {hasArrow && (
        <Ionicons name="chevron-forward-outline" size={24} color="#aaa" />
      )}
    </TouchableOpacity>
  );
};

const itemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginLeft: 15,
  },
});

const SettingsScreen = () => {
  // Apply the specific navigation type to the hook
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const { themeColor } = useThemeStore();
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        {/* User profile picture goes here */}
        <Text style={styles.name}>User's Name</Text>
        <Text style={styles.username}>@username</Text>
      </View>

      <SettingItem
        icon="person-outline"
        text="Account"
        onPress={() => router.push("./AccountScreen")}
      />
      <SettingItem
        icon="color-palette-outline"
        text="Theme"
        onPress={() => router.push("../../ThemeSelectionScreen")}
      />
      <SettingItem
        icon="app-outline"
        text="App"
        onPress={() => console.log("Go to app page")}
      />
      <SettingItem
        icon="bar-chart-outline"
        text="Productivity"
        onPress={() => router.push("./ProductivityScreen")}
      />
      <View style={itemStyles.container}>
        <View style={itemStyles.leftContent}>
          <Ionicons name="moon-outline" size={24} color="#333" />
          <Text style={itemStyles.text}>Change Mode</Text>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: themeColor }}
          thumbColor={isDarkMode ? "#fff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsDarkMode}
          value={isDarkMode}
        />
      </View>
      <SettingItem
        icon="lock-closed-outline"
        text="Privacy Policy"
        onPress={() => router.push("./PrivacyPolicyScreen")}
      />
      <SettingItem
        icon="help-circle-outline"
        text="Help Center"
        onPress={() => router.push("./HelpCenterScreen")}
      />
      <SettingItem
        icon="log-out-outline"
        text="Logout"
        onPress={() => router.push("../../EmailSignInScreen")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  username: {
    fontSize: 14,
    color: "#aaa",
  },
});

export default SettingsScreen;
