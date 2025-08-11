// app/(auth)/email-sign-in.tsx

import { useRouter } from "expo-router"; // Use Expo Router's hook
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const EmailSignInScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome back!</Text>
      <Text style={styles.tagline}>
        Your work faster and structured with Todyapp
      </Text>
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity
        style={styles.nextButton}
        // Use router.push() and pass the email as a query parameter
        onPress={() =>
          router.push({
            pathname: "/(Auth)/CreateAccountScreen",
            params: { email },
          })
        }
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    alignSelf: "center",
  },
  tagline: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 40,
    alignSelf: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 20,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: "#F6F7F9",
  },
  nextButton: {
    backgroundColor: "#24A19C",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: 30,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default EmailSignInScreen;
