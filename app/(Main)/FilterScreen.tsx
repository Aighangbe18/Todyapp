import { router } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Dummy data for filters and labels
const initialFilters = [
  { id: "1", name: "Assigned to me", icon: "funnel-outline" },
  { id: "2", name: "Priority 1", icon: "flash-outline", count: 1 },
  { id: "3", name: "Priority 3", icon: "flame-outline", count: 1 },
  { id: "4", name: "Manage Filter", icon: "settings-outline" },
];

const initialLabels = [
  { id: "1", name: "Masana label", icon: "list-outline" },
  { id: "2", name: "Manage labels", icon: "settings-outline" },
];

const FilterScreen = () => {
  const [filters, setFilters] = useState(initialFilters);
  const [labels, setLabels] = useState(initialLabels);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("./HomeScreen")}>
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filter & Labels</Text>
        <TouchableOpacity onPress={() => console.log("Search")}>
          <Ionicons name="search-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        {/* Filter your task section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Filter your task</Text>
            <TouchableOpacity onPress={() => console.log("Add Filter")}>
              <Ionicons name="add" size={24} color="#333" />
            </TouchableOpacity>
          </View>
          {filters.map((filter) => (
            <TouchableOpacity key={filter.id} style={styles.listItem}>
              <View style={styles.listContent}>
                <Ionicons
                  name={filter.icon}
                  size={20}
                  color="#777"
                  style={styles.listIcon}
                />
                <Text style={styles.listText}>{filter.name}</Text>
              </View>
              {filter.count && (
                <Text style={styles.countText}>{filter.count}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Labels section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Labels</Text>
            <TouchableOpacity onPress={() => console.log("Add Label")}>
              <Ionicons name="add" size={24} color="#333" />
            </TouchableOpacity>
          </View>
          {labels.map((label) => (
            <TouchableOpacity key={label.id} style={styles.listItem}>
              <View style={styles.listContent}>
                <Ionicons
                  name={label.icon}
                  size={20}
                  color="#777"
                  style={styles.listIcon}
                />
                <Text style={styles.listText}>{label.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
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
    paddingTop: 40,
    padding: 20,
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
  countText: {
    fontSize: 14,
    color: "#777",
  },
});

export default FilterScreen;
