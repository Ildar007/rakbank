import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screenBgColor: {
    // backgroundColor: "#ed2b20",
    padding: 20,
  },
  flexDirection: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    padding: 7,
  },
  buttonRadius: {
    backgroundColor: "#ec3556",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 24,
    width: "35%",
    marginLeft: "auto",
  },
  bankName: {
    color: "white",
    fontSize: 33,
    fontWeight: "700",
    marginTop: 30,
  },
  bankSlogan: {
    color: "white",
    fontSize: 26,
    fontWeight: "200",
    marginTop: 20,
    marginBottom: 100,
    width: "80%",
  },
  curveView: {
    width: "20%",
    height: 70,
    position: "absolute",
    bottom: -32,
    left: "40%",
    borderRadius: 35,
    backgroundColor: "#ed2f1b",
    transform: [{ scaleX: 5 }, { scaleY: 1 }],
    zIndex: -1,
  },
});
