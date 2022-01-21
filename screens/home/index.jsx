import { View, Text, Platform } from "react-native";
import { Image } from "react-native";
import { useLocation } from "react-router-native";
import * as Device from "expo-device";
import * as Network from "expo-network";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { styles } from "./style";

const Home = (props) => {
  const deviceName = Device.modelName;
  const IMEI = Device.osBuildFingerprint || "Not available for current OS";
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [publicIP, setPublicIP] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let id = await Network.getIpAddressAsync();
      setPublicIP(id);

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const {
    state: { avatar, lastLogintime, name },
  } = useLocation();
  return (
    <View style={styles.container}>
      <Text style={styles.mY}>{"Logged in successfully"}</Text>
      <View>
        <Image
          source={{ uri: "https://mui.com/static/images/avatar/2.jpg" }}
          style={styles.avatar}
        />
        <Text style={styles.mY}>{name}</Text>
        <Text>
          Your last logged in on {lastLogintime.split("T")[0]} at{" "}
          {lastLogintime.split("T")[1].split(".")[0]}
        </Text>
        <Text style={styles.mY}>Platform: {Platform.OS}</Text>
        <Text>Device name: {deviceName}</Text>
        <Text style={styles.mY}>IMEI: {IMEI}</Text>
        <Text>GPS: {text}</Text>
        <Text style={styles.mY}>Public IP: {JSON.stringify(publicIP)}</Text>
      </View>
    </View>
  );
};

export default Home;
