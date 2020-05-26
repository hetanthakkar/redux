import { Dimensions, StyleSheet } from "react-native";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
const styles4 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1E96C8",
    padding: 8,
  },
  inputBox: {
    width: "85%",
    left: screenWidth * 6,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    textAlign: "center",
    color: "white",
  },
  button: {
    backgroundColor: "white",
    width: "25%",
    height: 45,
    marginLeft: "5%",
    borderRadius: 20,
  },

  comb: {
    flexDirection: "row",
    marginLeft: "2%",
    flexWrap: "wrap",
    display: "flex",
    color: "#69a9e9",
  },
  main1: {
    color: "blue",
  },
  tt: {
    marginLeft: "2%",
    fontSize: 22,
    color: "blue",
    flex: 1,
  },
  textt: {
    fontSize: 20,
  },
  complete: {
    fontSize: 18,
    color: "orange",
    top: "8%",
    left: "5%",
  },
  textinput: {
    alignSelf: "center",
    width: "90%",
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
  },
});
export default styles4;
