import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from "react-native";

/**
 * COMPONENT
 */
const AuthForm = (props) => {
    const { name, displayName, handleSubmit, error } = props;
    return (
      <View>
      <section className="login">
        <form className="loginForm" onSubmit={handleSubmit} name={name}>
          <div id="outerbox">
          <div className='logindiv'>
            <h1 className="loginTitle">Login/Signup</h1>
            <label htmlFor="username">
              <small>Username </small>
            </label>
            <input name="username" type="text" />
          </div>
          <div className='passworddiv'>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
          </div>
          <div className="logindiv">
            <button class="btn-1"
              type="submit"
              onClick={() => {
                // history.push('/watches');
              }}
            >
              {" "}
              {displayName}
            </button>
            <div class="signup_link">
              Not a member? <a href="/signup">Signup Here</a>{" "}
            </div>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
          </div>
        </form>
      </section>
    </View>
  );
}
/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
