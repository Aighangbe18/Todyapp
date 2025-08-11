import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const UpgradeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("../(Main)/HomeScreen")}
        >
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Create more than 1000 project tasks</Text>
        <Text style={styles.subtitle}>
          Upgrade to premium users to get things about premium features that you
          can enjoy only with pay for one year or one month subscription.
        </Text>

        {/* Pricing Options */}
        <View style={styles.pricingContainer}>
          {/* Annual Package */}
          <View style={[styles.package, styles.annualPackage]}>
            <View style={styles.popularBadge}>
              <Text style={styles.popularText}>SAVE 20%</Text>
            </View>
            <Text style={styles.packageTitle}>Annual package</Text>
            <Text style={styles.price}>$35.00</Text>
            <Text style={styles.priceDetails}>
              Find and feel a year access premium on Todyapp
            </Text>
          </View>

          {/* Monthly Plan */}
          <View style={[styles.package, styles.monthlyPackage]}>
            <Text style={styles.packageTitle}>Monthly plan</Text>
            <Text style={styles.price}>$5.00</Text>
            <Text style={styles.priceDetails}>
              The most affordable premium now month
            </Text>
          </View>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => router.push("./CreateTaskScreen")}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  backButton: {
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    marginBottom: 30,
    lineHeight: 24,
  },
  pricingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  package: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  annualPackage: {
    backgroundColor: "#fff",
    borderColor: "#24A19C",
    marginRight: 10,
    position: "relative",
    height: 150,
  },
  monthlyPackage: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    marginLeft: 10,
    height: 150,
  },
  packageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    textAlign: "center",
  },
  price: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#24A19C",
    marginBottom: 5,
  },
  priceDetails: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
  },
  continueButton: {
    backgroundColor: "#24A19C",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: "auto",
  },
  continueText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  popularBadge: {
    backgroundColor: "#24A19C",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: "absolute",
    top: -10,
  },
  popularText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default UpgradeScreen;
