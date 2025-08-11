import { router } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Dummy data - replace with your actual data fetching logic
const profileImage = require("../../src/assets/images/Mask group.png"); // Replace with your asset path
const monthlyProgressData = [
  { month: "Mar", value: 220 },
  { month: "Apr", value: 180 },
  { month: "May", value: 200 },
  { month: "Jun", value: 280 },
  { month: "Jul", value: 240 },
  { month: "Aug", value: 200 },
];

const ProjectsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push("./SettingsScreen")}>
            <Ionicons name="chevron-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Productivity</Text>
          <View /> {/* Spacer */}
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image source={profileImage} style={styles.profileImage} />
          <Text style={styles.name}>Kurama Musamba</Text>
          <Text style={styles.username}>@kuram1290</Text>
        </View>

        {/* Date and Report Buttons */}
        <View style={styles.reportButtons}>
          <TouchableOpacity style={styles.reportButton}>
            <Ionicons name="calendar-outline" size={16} color="#777" />
            <Text style={styles.reportButtonText}>20 Jul 2022</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reportButton}>
            <Ionicons name="bar-chart-outline" size={16} color="#777" />
            <Text style={styles.reportButtonText}>My Report</Text>
          </TouchableOpacity>
        </View>

        {/* Report Progress */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Report Progress</Text>
            <TouchableOpacity onPress={() => console.log("View More")}>
              <Ionicons name="chevron-forward-outline" size={20} color="#777" />
            </TouchableOpacity>
          </View>
          <View style={styles.progressContent}>
            <View style={styles.goalText}>
              <Text style={styles.goalLabel}>Set a goal</Text>
              <Text style={styles.goalValue}>
                <Text style={styles.achieved}>28</Text>/<Text>20</Text> Task
              </Text>
              <Text style={styles.goalStatus}>Finish your task now !</Text>
            </View>
            <View style={styles.progressCircleContainer}>
              {/* This is a visual representation, for a functional progress bar use a library */}
              <View style={styles.progressCircle}>
                <Ionicons name="star-outline" size={30} color="#24A19C" />
              </View>
            </View>
          </View>
        </View>

        {/* Statistic Goals */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Statistic Goals</Text>
            <TouchableOpacity onPress={() => console.log("View More")}>
              <Ionicons name="chevron-forward-outline" size={20} color="#777" />
            </TouchableOpacity>
          </View>
          <View style={styles.statisticContent}>
            <View style={styles.statisticHeader}>
              <Text style={styles.statisticSubtitle}>Monthly Progress</Text>
              <TouchableOpacity onPress={() => console.log("Options")}>
                <Ionicons name="ellipsis-vertical" size={20} color="#777" />
              </TouchableOpacity>
            </View>
            {/* Bar Chart */}
            <View style={styles.barChart}>
              {monthlyProgressData.map((data) => (
                <View key={data.month} style={styles.barContainer}>
                  <View
                    style={[
                      styles.bar,
                      {
                        height: `${(data.value / 300) * 100}%`, // Corrected line
                        backgroundColor:
                          data.month === "Jun" ? "#24A19C" : "#B8E3DF",
                      },
                    ]}
                  />
                  <Text style={styles.barLabel}>{data.month}</Text>
                </View>
              ))}
            </View>
            <View style={styles.legend}>
              <View style={styles.legendItem}>
                <View
                  style={[styles.legendColor, { backgroundColor: "#B8E3DF" }]}
                />
                <Text style={styles.legendText}>On Going</Text>
              </View>
              <View style={styles.legendItem}>
                <View
                  style={[styles.legendColor, { backgroundColor: "#24A19C" }]}
                />
                <Text style={styles.legendText}>Completed</Text>
              </View>
            </View>
          </View>
        </View>
        {/* More Statistic Button */}
        <TouchableOpacity
          style={styles.moreStatisticButton}
          onPress={() => console.log("More Statistic")}
        >
          <Text style={styles.moreStatisticButtonText}>More Statistic</Text>
        </TouchableOpacity>
      </ScrollView>
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
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    paddingTop: 30,
    fontWeight: "bold",
    color: "#333",
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  username: {
    fontSize: 14,
    color: "#777",
  },
  reportButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  reportButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: "#EFEFEF",
  },
  reportButtonText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#777",
  },
  section: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
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
  progressContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalText: {
    flex: 1,
  },
  goalLabel: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  goalValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  achieved: {
    color: "#24A19C",
  },
  goalStatus: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },
  progressCircleContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "#B8E3DF",
    justifyContent: "center",
    alignItems: "center",
  },
  progressCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E6FAF7",
    justifyContent: "center",
    alignItems: "center",
  },
  statisticContent: {
    paddingTop: 15,
  },
  statisticHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  statisticSubtitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  barChart: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    height: 150,
    marginBottom: 10,
  },
  barContainer: {
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  bar: {
    width: 15,
    borderRadius: 5,
  },
  barLabel: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },
  legend: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
  },
  legendColor: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  legendText: {
    fontSize: 12,
    color: "#777",
  },
  moreStatisticButton: {
    backgroundColor: "#24A19C",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  moreStatisticButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ProjectsScreen;
