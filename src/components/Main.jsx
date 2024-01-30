import React, { Component } from "react";
import List from "./List";
import Search from "./Search";

class Main extends Component {
  state = {};

  onInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div className="main">
          <Search
            onInput={this.onInput}
            formClass="form"
            inputClass="input"
            type="input"
            id="search"
            name="search"
          />
          <List userInput={this.state.userInput} />
        </div>
      </>
    );
  }
}

export default Main;
