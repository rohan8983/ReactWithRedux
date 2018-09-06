import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { handleChange, onSubmit } from "./actions";
import { bounceIn, rubberBand, slideInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  bounce: {
    animation: "x 2s",
    animationName: Radium.keyframes(slideInLeft, "bounce")
  }
};

const App = props => {
  const { email, password } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <br />
      <br />
      <br />
      <input
        type="text"
        name="email"
        value={email}
        onChange={e => {
          e.preventDefault();
          props.handleChange(e.target.value, "email");
        }}
      />
      <br />
      <br />
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => {
          e.preventDefault();
          props.handleChange(e.target.value, "password");
        }}
      />
      <br />
      <br />
      <input
        type="submit"
        name="submit"
        onClick={e => props.onSubmit({ email, password })}
      />
      <br />
      <br />
      <br />
      {props.flag ? (
        <StyleRoot>
          <div class="alert alert-success" role="alert" style={styles.bounce}>
            <h3>Your entered values are:</h3>
            <label>Email:&nbsp; </label>
            <label className="alert-link">{email}</label>
            <br />
            <br />
            <label>Password: &nbsp;</label>
            <label className="alert-link">{password}</label>
          </div>
        </StyleRoot>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    email: state.email,
    password: state.password,
    flag: state.flag
  };
};

export default connect(
  mapStateToProps,
  { handleChange, onSubmit }
)(App);
