import { Login } from "./screens/login";
import { NativeBaseProvider } from "native-base";
import { NativeRouter, Route, Routes } from "react-router-native";
import Home from "./screens/home";

export default function App() {
  return (
    <NativeBaseProvider>
      <NativeRouter>
        <Routes>
          <Route element={Login} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </NativeRouter>
    </NativeBaseProvider>
  );
}
