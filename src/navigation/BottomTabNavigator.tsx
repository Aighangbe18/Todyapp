// src/navigation/BottomTabNavigator.tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FilterScreen from "../../app/(Main)/FilterScreen";
import HomeScreen from "../../app/(Main)/HomeScreen";
import InboxScreen from "../../app/(Main)/InboxScreen";
import ProjectsScreen from "../../app/(Main)/ProjectsScreen";
import UpcomingScreen from "../../app/(Main)/UpcomingScreen"; // Adjust the import path as necessary
import useThemeStore from "../stores/themeStore";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { themeColor } = useThemeStore();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string = "alert-circle-outline"; // Default icon
          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Inbox") {
            iconName = "add-circle-outline";
          } else if (route.name === "Upcoming") {
            iconName = "calendar-outline";
          } else if (route.name === "Filter") {
            iconName = "options-outline";
          } else if (route.name === "Projects") {
            iconName = "folder-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#24A19C",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Inbox" component={InboxScreen} />
      <Tab.Screen name="Upcoming" component={UpcomingScreen} />
      <Tab.Screen name="Filter" component={FilterScreen} />
      <Tab.Screen name="Projects" component={ProjectsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
