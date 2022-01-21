import React from "react";
import { View, Text } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles.js";
export const Footer = () => {
  return (
    <View style={styles.footerFlexDirection}>
      <View style={styles.alignItems}>
        <SimpleLineIcons name="wallet" size={24} color="#605f63" />
        <Text style={styles.footerText}>Products</Text>
      </View>
      <View style={styles.alignItems}>
        <Ionicons
          name="chatbubble-ellipses-outline"
          size={24}
          color="#605f63"
        />
        <Text style={styles.footerText}>Live Chat</Text>
      </View>
      <View style={styles.alignItems}>
        <Ionicons name="key-outline" size={24} color="#605f63" />
        <Text style={styles.footerText}>RAK Token</Text>
      </View>
      <View style={styles.alignItems}>
        <SimpleLineIcons name="location-pin" size={24} color="#605f63" />
        <Text style={styles.footerText}>Locate us</Text>
      </View>
    </View>
  );
};
