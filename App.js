import React from "react";
import Signup from "./screens/Signup/index";
import Login from "./screens/Login/index";
import ForgetPassword from "./screens/ForgetPassword/index";
import Main from "./screens/mainpage/index";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { YellowBox, TouchableWithoutFeedback, Keyboard } from "react-native";
import firebase from "firebase";
import firebaseConfig from "./helper/firbaseconfig/firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
import _ from "lodash";
YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: Login,
      Signup: Signup,
      ForgetPassword: ForgetPassword,
      Main: Main,
    },
    {
      initialRouteName: "Login",
    }
  )
);
