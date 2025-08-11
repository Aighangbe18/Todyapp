import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProjectScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("./HomeScreen")}>
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Project</Text>
        <TouchableOpacity onPress={() => console.log("Search")}>
          <Ionicons name="search-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        {/* Filter your task section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Filter your task</Text>
            <TouchableOpacity onPress={() => console.log("Add")}>
              <Ionicons name="add" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.listItem}
            onPress={() => router.push("../other/InstructionScreen")}
          >
            <View style={styles.listContent}>
              <Ionicons
                name="help-circle-outline"
                size={20}
                color="#777"
                style={styles.listIcon}
              />
              <Text
                style={styles.listText}
                onPress={() => router.push("../other/InstructionScreen")}
              >
                Instructions For Use
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listItem}
            onPress={() => router.push("../other/TryBoardsScreen")}
          >
            <View style={styles.listContent}>
              <Ionicons
                name="document-text-outline"
                size={20}
                color="#777"
                style={styles.listIcon}
              />
              <Text
                style={styles.listText}
                onPress={() => router.push("../other/TryBoardsScreen")}
              >
                Try Boards
              </Text>
            </View>
            <Ionicons name="heart-outline" size={20} color="#B8B8B8" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <View style={styles.listContent}>
              <Ionicons
                name="settings-outline"
                size={20}
                color="#777"
                style={styles.listIcon}
              />
              <Text style={styles.listText}>Manage Projects</Text>
            </View>
            <Ionicons name="heart-outline" size={20} color="#B8B8B8" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  listContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  listIcon: {
    marginRight: 15,
  },
  listText: {
    fontSize: 16,
    color: "#333",
  },
});

export default ProjectScreen;
