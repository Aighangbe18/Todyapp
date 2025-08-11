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

const InstructionsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.push("../(Main)/ProjectsScreen")}
        >
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Instructions</Text>
        <View style={{ width: 24 }} /> {/* Spacer to center the title */}
      </View>

      <ScrollView style={styles.container}>
        {/* Tips and tricks section */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Tips and tricks</Text>
            <Text style={styles.sectionCount}>4</Text>
          </View>
          <TouchableOpacity onPress={() => console.log("More options")}>
            <Ionicons name="ellipsis-vertical" size={24} color="#999" />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>
              Use click Add to create tasks!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Start own project!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Organize these tasks!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Schedule this task</Text>
          </TouchableOpacity>
        </View>

        {/* To Go Further section */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>To Go Further</Text>
            <Text style={styles.sectionCount}>5</Text>
          </View>
          <TouchableOpacity onPress={() => console.log("More options")}>
            <Ionicons name="ellipsis-vertical" size={24} color="#999" />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>
              What do you thing about Todyapp
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Visit the help center</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>how to use Todyapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Get organize anywhere</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Kickstart your project</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginRight: 5,
  },
  sectionCount: {
    fontSize: 16,
    color: "#777",
  },
  listContainer: {
    marginBottom: 20,
  },
  listItem: {
    paddingVertical: 15,
  },
  listItemText: {
    fontSize: 16,
    color: "#666",
  },
});

export default InstructionsScreen;
