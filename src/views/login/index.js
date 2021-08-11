import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import store from "../../store";
import Signup from "./component";
export default class App extends React.Component {
  componentDidMount = () => {
    console.log(store);
  };
  render() {
    return (
      <Provider store={store}>
        <Signup navigation={this.props.navigation} />
      </Provider>
    );
  }
}
