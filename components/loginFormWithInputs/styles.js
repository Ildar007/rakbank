import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  textColor: {
    color: "black",
    backgroundColor: "white",
    fontSize: 16,
    borderColor: "white",
    borderRadius: 10,
  },
  submitButton: {
    marginTop: 30,
    borderRadius: 40,
    width: "90%",
    display: "flex",
    flexDirection: "row",
  },
  submitButtonText: {
    color: "white",
    fontSize: 20,
    padding: 15,
  },
  flexDirection: {
    flexDirection: "row",
    justifyContent: "center",
  },
  forgotId: {
    fontSize: 16,
    color: "black",
    marginTop: 20,
  },
  userId: {
    fontSize: 16,
    color: "black",
    marginTop: 10,
  },
  textAlign: {
    alignItems: "center",
  },
  inputPassword: {
    marginTop: 30,
    color: "black",
    backgroundColor: "white",
    fontSize: 16,
    borderColor: "white",
    borderRadius: 10,
  },
  underline1: {
    width: "65%",
    position: "absolute",
    height: 1,
    backgroundColor: "grey",
    top: 70,
  },
  underline2: {
    width: "65%",
    position: "absolute",
    height: 1,
    backgroundColor: "grey",
    top: 190,
  },
  loading: { marginTop: 20 },
});
