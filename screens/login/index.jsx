import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles.js";
import { Header } from "../../components/header/index.jsx";
import { LoginForm } from "../../components/login-form/index.jsx";
import { Footer } from "../../components/footer/index.jsx";

export const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <Header
          showLoginForm={showLoginForm}
          setShowLoginForm={setShowLoginForm}
        />
      </View>
      <View>
        <LoginForm
          showLoginForm={showLoginForm}
          setShowLoginForm={setShowLoginForm}
        />
      </View>
      <Footer />
    </View>
  );
};
