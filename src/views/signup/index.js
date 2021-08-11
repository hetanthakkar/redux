import React from "react";
import { Provider } from "react-redux";
import Signup from "./component";
import store from "../../store";
export default function App() {
  return (
    <Provider store={store}>
      <Signup />
    </Provider>
  );
}
