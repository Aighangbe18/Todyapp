// app/(onboarding)/onboarding2.tsx

import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Onboarding2Screen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => router.push("/WelcomeScreen")} // Navigate to the welcome screen
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Top overlapping image */}
      <Image
        source={require("../../src/assets/images/Frame 217 (3).png")} // Use your image path here
        style={styles.topImage}
      />

      <View style={styles.imageContainer}>
        <Image
          source={require("../../src/assets/images/phone1.png")}
          style={styles.image}
        />
      </View>

      {/* Bottom right overlapping image */}
      <Image
        source={require("../../src/assets/images/Frame 217.png")} // Use your image path here
        style={styles.bottomRightImage}
      />

      {/* The blending overlay */}
      <View style={styles.overlay} />

      <View style={styles.textContainer}>
        <Text style={styles.logoText}>
          Find the practicality in making your todo list
        </Text>
        <Text style={styles.tagline}>
          Easy-to-understand user interface that makes you more comfortable when
          you want to create a task or to do list, Todyapp can also improve
          productivity
        </Text>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.pageIndicator}>2/2</Text>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => router.push("/WelcomeScreen")}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  skipButton: {
    position: "absolute",
    top: 50,
    right: 20,
    padding: 10,
    zIndex: 3,
  },
  skipText: {
    fontSize: 16,
    color: "#4CAF50",
  },
  topImage: {
    position: "absolute",
    top: "10%",
    right: "1%",
    width: 200,
    height: 200,
    resizeMode: "contain",
    zIndex: 2,
  },
  imageContainer: {
    width: "80%",
    height: "50%",
    marginTop: "30%",
    alignSelf: "center",
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  bottomRightImage: {
    position: "absolute",
    bottom: "25%",
    left: "-10%",
    width: 280,
    marginBottom: 200,
    height: 200,
    resizeMode: "contain",
    zIndex: 2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    zIndex: 0,
  },
  textContainer: {
    width: "90%",
    paddingTop: 50,
    padding: 20,
    alignItems: "center",
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: -70,
    zIndex: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  logoText: {
    fontSize: 34,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    lineHeight: 24,
  },
  footerContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  pageIndicator: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 15,
  },
  continueButton: {
    backgroundColor: "#24A19C",
    paddingVertical: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  continueText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Onboarding2Screen;
