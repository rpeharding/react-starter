import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";

class App extends Component {
  state = { show: true };

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Toggle
        </button>
        {this.state.show && (
          <>
            <Header />
            <Main />
          </>
        )}
      </>
    );
  }
}

export default App;
