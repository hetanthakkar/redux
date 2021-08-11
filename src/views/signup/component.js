import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  LogBox,
} from "react-native";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { changeTheme } from "../../actions";
import styles from "./style";
import { nameRegex, mailRegex } from "../../helpers/other";
// LogBox.ignoreAllLogs();

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "This field is required!";
  }
  if (!values.username) {
    errors.username = "This field is required!";
  }
  if (!values.password) {
    errors.password = "This field is required!";
  }
  if (!values.email) {
    errors.cpassword = "This field is required!";
  }
  if (!mailRegex.test(values.email)) {
    errors.email = "Enter valid email address";
  }
  if (!nameRegex.test(values.name)) {
    errors.name = "Please fill the proper name";
  }
  if (values.password != undefined && values.password.length < 5) {
    errors.password = "Password should atleast have 5 characters";
  }
  return errors;
};

const App = (props) => {
  const myFields = ({
    label,
    meta: { error, touched, active },
    input: { onChange, ...restInput },
  }) => {
    return (
      <View style={styles.field}>
        <TextInput
          secureTextEntry={label == "Password"}
          onChangeText={onChange}
          {...restInput}
          style={
            active
              ? {
                  ...styles.textInput,
                  backgroundColor: "white",
                  borderColor: "#1BA9F5",
                }
              : styles.textInput
          }
        />
        {error && touched && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  };
  const submit = () => {
    props.theme.theme == "light"
      ? props.setTheme({ theme: "dark" })
      : props.setTheme({ theme: "light" });
  };

  return (
    <View
      style={
        props.theme.theme == "dark"
          ? { ...styles.mainView, backgroundColor: "#141519" }
          : styles.mainView
      }
    >
      <View style={styles.logoView}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://raw.githubusercontent.com/react-ui-kit/dribbble2react/master/velocity/assets/images/icon.png",
          }}
        />
      </View>

      <Text
        style={
          props.theme.theme == "dark"
            ? { ...styles.title, color: "#DFE5EF" }
            : styles.title
        }
      >
        Sign Up To Get Started
      </Text>
      <ScrollView>
        <Text
          style={
            props.theme.theme === "dark"
              ? { ...styles.errorLabel, color: "#DFE5EF" }
              : styles.errorLabel
          }
        >
          Name
        </Text>

        <Field autoFocus={true} name="name" component={myFields} label="Name" />
        <Text
          style={
            props.theme.theme === "dark"
              ? { ...styles.errorLabel, color: "#DFE5EF" }
              : styles.errorLabel
          }
        >
          Username
        </Text>

        <Field
          name="username"
          component={myFields}
          label="Username "
          // validate={[required]}
        />
        <Text
          style={
            props.theme.theme === "dark"
              ? { ...styles.errorLabel, color: "#DFE5EF" }
              : styles.errorLabel
          }
        >
          Email
        </Text>

        <Field name="email" component={myFields} label="Email " />
        <Text
          style={
            props.theme.theme === "dark"
              ? { ...styles.errorLabel, color: "#DFE5EF" }
              : styles.errorLabel
          }
        >
          Password
        </Text>

        <Field name="password" component={myFields} label="Password" />
      </ScrollView>

      <TouchableOpacity
        style={{
          alignSelf: "center",
          borderRadius: 10,
          width: "85%",
          marginTop: 50,
          borderStyle: "solid",
          backgroundColor: "#4630EB",
        }}
        onPress={props.handleSubmit(submit)}
      >
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            fontWeight: "500",
            fontSize: 18,
            letterSpacing: 1,
            marginVertical: 9,
            marginHorizontal: 16,
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
      <View style={styles.signinView}>
        <Text style={styles.already}>Already have an account?</Text>
        <Text style={styles.signinText}> Signin</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.themeReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (value) => dispatch(changeTheme(value)),
  };
};
const ourform = reduxForm({
  form: "something",
  destroyOnUnmount: false,
  validate,
})(App);

export default connect(mapStateToProps, mapDispatchToProps)(ourform);
