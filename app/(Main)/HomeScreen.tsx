// app/(main)/HomeScreen.tsx

import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import useThemeStore from "../../src/stores/themeStore";

const HomeScreen = () => {
  const router = useRouter();
  const { themeColor } = useThemeStore();
  const date = new Date();
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Today</Text>
          <Text style={styles.headerSubtitle}>
            best platform for creating to-do lists
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/Settings/SettingsScreen")}
        >
          <Ionicons name="settings-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.taskCard, { backgroundColor: themeColor }]}
        onPress={() => router.push("/other/UpgradeScreen")}
      >
        <View style={styles.cardHeader}>
          <Ionicons name="add-circle-outline" size={24} color="green" />
          <Text style={styles.addText}>Tap plus to create a new task</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.cardFooter}>
          <Text style={styles.addText}>Add your task</Text>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/other/UpgradeScreen")}
        style={styles.button}
      >
        <Ionicons name="add-circle" size={60} color="#24A19C" />
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#aaa",
  },
  taskCard: {
    borderRadius: 12,
    padding: 20,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  addText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    fontSize: 12,
    color: "#aaa",
  },
  button: {
    position: "absolute",
    bottom: 600,
    left: "90%",
  },
});

export default HomeScreen;
