// app/ThemeSelectionScreen.tsx

import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import useThemeStore from "../../src/stores/themeStore";

interface ColorTheme {
  id: string;
  color: string;
}

// Define your color themes
const colorThemes: ColorTheme[] = [
  { id: "1", color: "#24A19C" },
  { id: "2", color: "#B2EBF2" }, // Cyan
  { id: "3", color: "#FFCDD2" }, // Red
  { id: "4", color: "#FFF9C4" }, // Yellow
];

const ThemeSelectionScreen = () => {
  const router = useRouter();
  const [selectedThemeId, setSelectedThemeId] = useState<string>(
    colorThemes[0].id
  );
  const setThemeColor = useThemeStore((state) => state.setThemeColor);

  const handleOpenApp = () => {
    const selectedTheme = colorThemes.find(
      (theme) => theme.id === selectedThemeId
    );
    if (selectedTheme) {
      setThemeColor(selectedTheme.color);
      // Assuming "/(Main)/HomeScreen" is the correct Expo Router path
      router.replace("/(Main)/HomeScreen");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Create to do list</Text>
          <Text style={styles.subtitle}>
            Choose your to do list color theme:
          </Text>
        </View>

        <View style={styles.colorSelectionContainer}>
          {colorThemes.map((theme) => {
            const isSelected = theme.id === selectedThemeId;
            return (
              <TouchableOpacity
                key={theme.id}
                style={[
                  styles.colorCard,
                  { backgroundColor: theme.color },
                  isSelected && styles.selectedColorCard,
                ]}
                onPress={() => setSelectedThemeId(theme.id)}
              >
                <View style={styles.themeContent}>
                  <View
                    style={[
                      styles.selectionCircle,
                      isSelected && styles.selectedCircle,
                    ]}
                  >
                    {isSelected && (
                      <Ionicons name="checkmark" size={16} color="#fff" />
                    )}
                  </View>
                  <View style={styles.placeholderTextContainer}>
                    <View style={[styles.placeholderLine, { width: 100 }]} />
                    <View style={[styles.placeholderLine, { width: 80 }]} />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity style={styles.openButton} onPress={handleOpenApp}>
          <Text style={styles.openButtonText}>open todayapp</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 50,
    marginBottom: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    marginTop: 5,
  },
  colorSelectionContainer: {
    flex: 1,
    width: "100%",
  },
  colorCard: {
    width: "100%",
    height: 70,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  selectedColorCard: {
    borderWidth: 2,
    borderColor: "#24A19C",
  },
  themeContent: {
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.8,
  },
  selectionCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  selectedCircle: {
    backgroundColor: "#24A19C",
    borderColor: "#24A19C",
  },
  placeholderTextContainer: {
    marginLeft: 15,
  },
  placeholderLine: {
    height: 8,
    backgroundColor: "#ccc",
    borderRadius: 4,
    marginBottom: 5,
  },
  openButton: {
    backgroundColor: "#24A19C",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 30,
  },
  openButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ThemeSelectionScreen;
