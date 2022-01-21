import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  footerFlexDirection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 10,
    paddingBottom: 30,
    borderTopColor: "lightgrey",
    borderTopWidth: 1,
    backgroundColor: "white",
  },
  footerText: {
    marginTop: 5,
    color: "#605f63",
  },
  alignItems: {
    alignItems: "center",
  },
});
