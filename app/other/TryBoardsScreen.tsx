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

// Reusable component for a single task item
const TaskItem = ({
  text,
  completed,
}: {
  text: string;
  completed?: boolean;
}) => {
  return (
    <View style={taskItemStyles.container}>
      <Ionicons
        name={completed ? "checkmark-circle-outline" : "ellipse-outline"}
        size={20}
        color="#777"
      />
      <Text style={taskItemStyles.text}>{text}</Text>
    </View>
  );
};

const taskItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
});

// Main component for the Try Boards screen
const TryBoardsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.push("../(Main)/ProjectsScreen")}
        >
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Try Boards</Text>
        <TouchableOpacity
          onPress={() => router.push("../other/CreateTaskScreen")}
        >
          <Ionicons name="add-circle" size={24} color="#24A19C" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Board Card 1 */}
        <View style={styles.boardCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Design Task</Text>
            <TouchableOpacity onPress={() => console.log("More")}>
              <Ionicons name="ellipsis-horizontal" size={24} color="#B8B8B8" />
            </TouchableOpacity>
          </View>
          <View style={styles.tasksContainer}>
            <TaskItem text="Create a new logo" />
            <TaskItem text="Start a new UI UX design" />
          </View>
        </View>

        {/* Board Card 2 */}
        <View style={styles.boardCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Project for client</Text>
            <TouchableOpacity onPress={() => console.log("More")}>
              <Ionicons name="ellipsis-horizontal" size={24} color="#B8B8B8" />
            </TouchableOpacity>
          </View>
          <View style={styles.tasksContainer}>
            <TaskItem text="Task 1" />
            <TaskItem text="Task 2" />
          </View>
        </View>

        {/* Add Task Card */}
        <TouchableOpacity
          style={styles.addTaskCard}
          onPress={() => router.push("../other/CreateTaskScreen")}
        >
          <Ionicons name="add" size={24} color="#888" />
          <Text style={styles.addTaskText}>Add task</Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    paddingTop: 30,
  },
  container: {
    padding: 20,
  },
  boardCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  tasksContainer: {
    paddingLeft: 5,
  },
  addTaskCard: {
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderStyle: "dashed",
    borderRadius: 8,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addTaskText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#888",
  },
});

export default TryBoardsScreen;
