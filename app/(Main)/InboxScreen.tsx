import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import useTaskStore from "../../src/stores/taskStore";

interface Task {
  id: string;
  title: string;
  date: string;
  time?: string;
  status: "new" | "old" | "upcoming";
}

const InboxScreen = () => {
  const router = useRouter();
  const tasks = useTaskStore((state) => state.tasks);

  const oldTasks = tasks.filter((task) => task.status === "old");
  const newTasks = tasks.filter((task) => task.status === "new");
  const upcomingTasks = tasks.filter((task) => task.status === "upcoming");

  const renderTask = (task: Task) => (
    <TouchableOpacity
      key={task.id}
      style={styles.taskCard}
      onPress={() =>
        router.push({
          pathname: "/other/TaskDetailScreen",
          params: { taskId: task.id },
        })
      }
    >
      <Ionicons name="radio-button-off" size={20} color="#4CAF50" />
      <View style={styles.taskTextContainer}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={styles.taskDate}>
          {task.time
            ? `Due: ${task.date} at ${task.time}`
            : `Created: ${task.date}`}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push("./HomeScreen")}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Ionicons name="chevron-back" size={24} color="#333" />
        <Text style={styles.headerTitle}>Inbox</Text>
      </TouchableOpacity>
      <Text style={styles.headertitle}>Your Tasks</Text>
      {newTasks.length > 0 && (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>New</Text>
          {newTasks.map(renderTask)}
        </View>
      )}

      {upcomingTasks.length > 0 && (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Upcoming</Text>
          {upcomingTasks.map(renderTask)}
        </View>
      )}

      {oldTasks.length > 0 && (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Old</Text>
          {oldTasks.map(renderTask)}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
  },
  headertitle: {
    fontSize: 28,
    fontWeight: "semibold",
    marginTop: 0,
    marginBottom: 20,
    marginLeft: 10,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  taskTextContainer: {
    marginLeft: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  taskDate: {
    fontSize: 12,
    color: "#aaa",
  },
});

export default InboxScreen;
