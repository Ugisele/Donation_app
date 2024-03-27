import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#ffffff",
  },
  img: {
    marginTop: -50,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderRadius: 20,
    width: "65%",
    color: "white",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#ebecee",
    marginBottom: 12,
  },
  get: {
    width: "65%",
    marginTop: 10,
  },
  icon: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,
    gap: 80,
  },
  google: {
    width: 32,
    height: 32,
    marginTop: 12
  },
  bg: {
    backgroundColor: "#fcfcfc",
  },
  link: {
    flexDirection: "row",
    gap: 10,
  },
  iconStyle: {
    width: 30,
    height: 30,
    marginTop: 12,
    borderRadius: 50,
    backgroundColor: "#fff",
  }
});

export default styles;
