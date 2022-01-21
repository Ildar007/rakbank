import React, { useRef, useEffect, useState } from "react";
import {
  Input,
  Center,
  NativeBaseProvider,
  View,
  Button,
  Text,
} from "native-base";
import { styles } from "./styles";
import { ActivityIndicator, Animated } from "react-native";
import axios from "axios";
import { useNavigate } from "react-router-native";
export const LoginFormWithInputs = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const disabled = username.length < 7 || password.length < 7;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
    }).start();
  }, [fadeAnim]);

  const login = () => {
    setLoading(true);
    axios
      .get("https://61e7ec0de32cd90017acbea1.mockapi.io/api/v1/login")
      .then((res) => {
        setLoading(false);
        navigate("/home", { state: res.data[0] });
      });
  };

  return (
    <Animated.View
      style={{
        alignItems: "center",
        opacity: fadeAnim,
      }}
    >
      <Input
        mx="3"
        placeholder="User ID"
        style={styles.textColor}
        padding="9"
        w={{
          base: "80%",
          md: "25%",
        }}
        autoFocus
        onChange={(e) => {
          setUsername(e.nativeEvent.text);
        }}
      />
      <View style={styles.underline1} />
      <Input
        mx="3"
        placeholder="Passwaord"
        style={styles.inputPassword}
        padding="9"
        type="password"
        w={{
          base: "80%",
          md: "25%",
        }}
        onChange={(e) => setPassword(e.nativeEvent.text)}
      />
      <View style={styles.underline2} />
      <View style={styles.flexDirection}>
        <Button
          style={{
            ...styles.submitButton,
            backgroundColor: disabled || loading ? "#8f8c90" : "black",
          }}
          onPress={login}
          disabled={disabled || loading}
        >
          <View>
            <Text style={styles.submitButtonText}>Submit</Text>
          </View>
        </Button>
      </View>

      {loading && (
        <View>
          <ActivityIndicator style={styles.loading} />
        </View>
      )}
      <View>
        <View style={styles.textAlign}>
          <Text style={styles.forgotId}>Forgot User ID | Forgot Password</Text>
          <Text style={styles.userId}>Enable User ID</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center>
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
