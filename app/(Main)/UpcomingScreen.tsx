import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

const UpcomingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Tasks</Text>
      <Calendar
        style={styles.calendar}
        theme={{
          todayTextColor: "#4CAF50",
          selectedDayBackgroundColor: "#4CAF50",
          arrowColor: "#4CAF50",
        }}
      />
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },
  calendar: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
});

export default UpcomingScreen;
