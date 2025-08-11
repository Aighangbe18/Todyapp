// app/(onboarding)/splash.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    // Start a simple animation for the indicator
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ])
    ).start();

    return () => {};
  }, []);

  const fadeAnim = new Animated.Value(0);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.linesContainer}>
          <View style={styles.lineItem}>
            <Ionicons name="checkmark" size={18} color="#4CAF50" />
            <View style={styles.line} />
          </View>
          <View style={styles.lineItem}>
            <Ionicons name="checkmark" size={18} color="#4CAF50" />
            <View style={styles.line} />
          </View>
          <View style={styles.lineItem}>
            <Ionicons name="checkmark" size={18} color="#4CAF50" />
            <View style={styles.line} />
          </View>
        </View>
      </View>
      <Text style={styles.logoText}>Todyapp</Text>
      <Text style={styles.tagline}>
        The best to-do list application for you
      </Text>

      {/* TouchableOpacity is added here to make the arrow clickable */}
      <View style={styles.arrowContainer}>
        <TouchableOpacity
          onPress={() => router.push("/(onboarding)/Onboarding1Screen")}
        >
          <Animated.View style={{ opacity: fadeAnim }}>
            <Ionicons name="arrow-forward" size={40} color="#fff" />
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24A19C",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  logoContainer: {
    marginBottom: 10,
    backgroundColor: "white",
    width: 80,
    height: 80,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  logoText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
  },
  tagline: {
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
  },
  linesContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  lineItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 0,
  },
  line: {
    width: 30,
    height: 5,
    backgroundColor: "#4CAF50",
    marginLeft: 5,
  },
  arrowContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    fontWeight: "bold",
  },
});

export default SplashScreen;
