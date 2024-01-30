import React, { Component } from "react";
import List from "./List";
import Search from "./Search";
import Compare from "./Compare";

class Main extends Component {
  state = {};

  onInput = (e) => {
    this.setState({ userInput: e.target.value });
    console.log(this.state.userInput);
  };

  render() {
    return (
      <>
        <div className="main">
          <Search
            click={this.onInput}
            formClass="form"
            inputClass="input"
            type="input"
            id="search"
            name="search"
          />
          <List />
        </div>
      </>
    );
  }
}

export default Main;
