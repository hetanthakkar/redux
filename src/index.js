import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Signup from "./views/signup";
import Login from "./views/login";
export default createAppContainer(
  createSwitchNavigator(
    {
      Signup,
      Login,
    },
    {
      initialRouteName: "Login",
    }
  )
);
