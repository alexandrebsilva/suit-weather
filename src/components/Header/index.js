import React from "react";
import { Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import {
  getBackgroundByPeriod,
  getConditionSlug,
} from "../../utils/conditions";

export default function Header({ data }) {
  const backgroundColorGradient = getBackgroundByPeriod(data.currently);
  return (
    <LinearGradient
      style={styles.header}
      colors={backgroundColorGradient.gradientColors}
    >
      <Text style={styles.date}>{data.date}</Text>
      <Text style={styles.city}>{data.city}</Text>

      <Ionicons name="cloud" color="white" size={150} />
      <Text style={styles.date}>{getConditionSlug(data.condition_slug)}</Text>
      <Text style={styles.temp}>{data.temp}º</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "95%",
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  date: {
    color: "white",
    fontSize: 17,
  },
  city: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  temp: {
    color: "white",
    fontSize: 80,
    fontWeight: "bold",
  },
});
