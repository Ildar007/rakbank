import React from "react";
import { View, Text } from "react-native";
import { Button } from "native-base";
import { styles } from "./styles.js";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
export const Header = ({ showLoginForm, setShowLoginForm }) => {
  return (
    <View>
      <LinearGradient colors={["#e40b4b", "#ed2f1b", "#c4034a"]}>
        <View style={styles.screenBgColor}>
          <View style={styles.flexDirection}>
            {showLoginForm && (
              <Ionicons
                name="chevron-back"
                size={24}
                color="white"
                onPress={() => setShowLoginForm(false)}
              />
            )}
            <Button style={styles.buttonRadius}>
              <Text style={styles.buttonText}>Register</Text>
            </Button>
          </View>
          {!showLoginForm && (
            <>
              <Text style={styles.bankName}>RAKBANK</Text>
              <Text style={styles.bankSlogan}>
                Everything you love about Digital Banking in a smarter, simpler
                design
              </Text>
            </>
          )}
        </View>
      </LinearGradient>

      <View style={styles.curveView}></View>
    </View>
  );
};
