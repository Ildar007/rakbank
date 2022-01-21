import React from "react";
import { View, Text } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles.js";
import { Button } from "native-base";

import { LoginFormWithInputs } from "../loginFormWithInputs";
export const LoginForm = ({ showLoginForm, setShowLoginForm }) => {
  return showLoginForm ? (
    <View>
      <LoginFormWithInputs />
    </View>
  ) : (
    <View>
      <View style={styles.buttonFlexDirection}>
        <Button
          style={styles.loginButtonBgClr}
          onPress={() => setShowLoginForm(true)}
        >
          <Text style={styles.loginButtonTextClr}>Login With User ID</Text>
        </Button>
      </View>
      <View style={styles.quickBalanceAlignItem}>
        <Entypo name="fingerprint" size={24} color="#3b383b" />
        <View>
          <Text style={styles.quickBalance}>Quick Balance</Text>
        </View>
      </View>
    </View>
  );
};
