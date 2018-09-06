import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { handleChange, onSubmit } from "./actions";

const App = props => {
  const { email, password } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
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
        <div>
          <label>Email: </label>
          <label>{email}</label>
          <br />
          <br />
          <label>Password: </label>
          <label>{password}</label>
        </div>
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
