import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import useTaskStore from "../../src/stores/taskStore";

const TaskDetailScreen = () => {
  const router = useRouter();
  const { taskId } = useLocalSearchParams();
  const tasks = useTaskStore((state) => state.tasks);

  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFoundText}>Task not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Task Details</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.content}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        {task.notes && <Text style={styles.taskNotes}>{task.notes}</Text>}
        <Text style={styles.taskDate}>
          {task.time
            ? `Due: ${task.date} at ${task.time}`
            : `Created: ${task.date}`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "ios" ? 60 : 20,
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    padding: 20,
  },
  taskTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  taskNotes: {
    fontSize: 16,
    color: "#444",
    marginBottom: 15,
  },
  taskDate: {
    fontSize: 16,
    color: "#888",
  },
  notFoundText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
    color: "#666",
  },
});

export default TaskDetailScreen;
