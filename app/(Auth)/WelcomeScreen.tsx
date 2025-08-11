// app/(auth)/welcome.tsx

import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Welcome to <Text style={styles.todyappText}>Todyapp</Text>
      </Text>

      {/* Top overlapping image */}
      <Image
        source={require("../../src/assets/images/Frame 217 (1).png")} // Use your image path here
        style={styles.topImage}
      />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../src/assets/images/phone2.png")}
          style={styles.image}
        />
      </View>

      {/* Bottom right overlapping image */}
      <Image
        source={require("../../src/assets/images/Frame 217 (2).png")} // Use your image path here
        style={styles.bottomRightImage}
      />

      {/* The blending overlay */}
      <View style={styles.overlay} />

      <View style={styles.textContainer}>
        <Text style={styles.logoText}></Text>
        <Text style={styles.tagline}></Text>
      </View>
      <TouchableOpacity
        style={styles.emailButton}
        onPress={() => router.push("/(Auth)/EmailSignInScreen")} // Corrected navigation path
      >
        <Text style={styles.emailButtonText}>Continue with Email</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or continue with</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require("../../src/assets/images/True1.png")} />
          <Text style={styles.headerText1}> Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require("../../src/assets/images/True.png")} />
          <Text style={styles.headerText1}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 32,
    letterSpacing: 0.5,
    color: "#1B1C1F",
  },
  headerText1: {
    fontSize: 20,
    fontWeight: "semibold",
    marginLeft: 10,
  },
  imageContainer: {
    width: "80%",
    height: "50%",
    marginTop: "15%",
    alignSelf: "center",
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  phoneImage: {
    width: "80%",
    height: "40%",
    resizeMode: "contain",
    marginBottom: 20,
  },
  emailButton: {
    backgroundColor: "#24A19C",
    padding: 16,
    borderRadius: 16,
    width: 327,
    height: 56,
    alignItems: "center",
    marginBottom: 10,
  },
  emailButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 14,
    color: "#aaa",
    marginVertical: 10,
  },
  socialButtonsContainer: {
    flexDirection: "row",

    width: "90%",
  },
  socialButton: {
    backgroundColor: "#F3F5F9",
    padding: 15,
    borderRadius: 16,
    width: 155.5,
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    margin: 15,
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
  },
  topImage: {
    position: "absolute",
    top: "25%",
    left: "-1%",
    width: 200,
    height: 200,
    resizeMode: "contain",
    zIndex: 2,
  },
  bottomRightImage: {
    position: "absolute",
    bottom: "25%",
    right: "-12%",
    width: 280,
    marginBottom: 111,
    height: 200,
    resizeMode: "contain",
    zIndex: 2,
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
  todyappText: {
    color: "green",
  },
});

export default WelcomeScreen;
