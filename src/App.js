import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { onChangeName, displayOnSubmit } from "./actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <br />
        <label>Name : </label>
        <input
          type="text"
          value={this.props.name}
          onChange={e => this.props.onChangeName(e.target.value, "name")}
        />
        <br />
        <br />
        <input type="submit" onClick={e => this.props.onSubmit(true)} />
        <br />
        <br />
        <br />
        <br />
        {this.props.display && this.props.name !== "" ? (
          <p>
            <b style={{ color: "red" }}>{this.props.name}</b>
          </p>
        ) : (
          "text will come here ..."
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    display: state.display
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onChangeName: (value, valueType) =>
      dispatch(onChangeName(value, valueType)),
    onSubmit: flag => dispatch(displayOnSubmit(flag))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
