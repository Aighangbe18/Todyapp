// app/(main)/tasks/CreateTaskScreen.tsx

import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { launchCamera } from "react-native-image-picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import useTaskStore from "../../src/stores/taskStore";

const CreateTaskScreen = () => {
  const router = useRouter();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskNotes, setTaskNotes] = useState("");
  const [taskDate, setTaskDate] = useState(new Date());
  const [taskTime, setTaskTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [media, setMedia] = useState([]); // State to store media files

  const addTask = useTaskStore((state) => state.addTask);

  const handleSaveTask = () => {
    if (taskTitle.trim()) {
      const formattedDate = taskDate.toISOString().split("T")[0];
      const formattedTime = taskTime.toTimeString().split(" ")[0];

      addTask({
        title: taskTitle,
        notes: taskNotes,
        date: formattedDate,
        time: formattedTime,
        media: media,
      });
      router.back();
    }
  };

  const onDateChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || taskDate;
    setShowDatePicker(Platform.OS === "ios");
    setTaskDate(currentDate);
  };

  const onTimeChange = (event: any, selectedTime: Date | undefined) => {
    const currentTime = selectedTime || taskTime;
    setShowTimePicker(Platform.OS === "ios");
    setTaskTime(currentTime);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const showTimepicker = () => {
    setShowTimePicker(true);
  };

  // CORRECTED FUNCTION: Includes a check for undefined assets
  const handleAddPhoto = () => {
    launchCamera(
      {
        mediaType: "photo",
        cameraType: "front",
      },
      (response) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.errorMessage) {
          console.log("ImagePicker Error: ", response.errorMessage);
        } else {
          // This check prevents the error
          if (response.assets && response.assets.length > 0) {
            const source = response.assets[0];
            console.log("Photo taken successfully:", source.uri);
            // You can now uncomment and use this line to save the photo data to your state:
            // setMedia([...media, source]);
          }
        }
      }
    );
  };

  const handleVoiceNote = () => {
    // This part still needs to be implemented with a separate voice recording library.
    console.log("Voice note functionality goes here");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Task</Text>
        <TouchableOpacity onPress={handleSaveTask}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.contentContainer}>
        <TextInput
          style={styles.titleInput}
          placeholder="Task title"
          placeholderTextColor="#999"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />

        <View style={styles.dateTimePickerContainer}>
          <Pressable style={styles.pickerButton} onPress={showDatepicker}>
            <Ionicons name="calendar-outline" size={24} color="#4CAF50" />
            <Text style={styles.pickerText}>
              {taskDate.toLocaleDateString()}
            </Text>
          </Pressable>
          <Pressable style={styles.pickerButton} onPress={showTimepicker}>
            <Ionicons name="time-outline" size={24} color="#4CAF50" />
            <Text style={styles.pickerText}>
              {taskTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </Pressable>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={taskDate}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
        {showTimePicker && (
          <DateTimePicker
            value={taskTime}
            mode="time"
            display="default"
            onChange={onTimeChange}
          />
        )}

        <TextInput
          style={styles.notesInput}
          placeholder="Add notes..."
          placeholderTextColor="#999"
          multiline
          value={taskNotes}
          onChangeText={setTaskNotes}
        />

        {/* You would add a component here to display the added media files */}
        {/* {media.length > 0 && <View>...display media here...</View>} */}

        <View style={styles.mediaButtonsContainer}>
          <TouchableOpacity style={styles.mediaButton} onPress={handleAddPhoto}>
            <Ionicons name="image-outline" size={24} color="#4CAF50" />
            <Text style={styles.mediaButtonText}>Add Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={handleVoiceNote}
          >
            <Ionicons name="mic-outline" size={24} color="#4CAF50" />
            <Text style={styles.mediaButtonText}>Voice Note</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    paddingTop: 30,
  },
  saveButtonText: {
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: "bold",
  },
  contentContainer: {
    padding: 20,
  },
  titleInput: {
    fontSize: 24,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 15,
    marginBottom: 20,
  },
  dateTimePickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  pickerButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
  },
  pickerText: {
    marginLeft: 10,
    color: "#333",
  },
  notesInput: {
    fontSize: 16,
    minHeight: 150,
    paddingVertical: 10,
    textAlignVertical: "top",
  },
  mediaButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  mediaButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  mediaButtonText: {
    marginLeft: 10,
    color: "#4CAF50",
    fontWeight: "bold",
  },
});

export default CreateTaskScreen;
