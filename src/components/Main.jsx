import React, { Component } from "react";
import List from "./List";
import Search from "./Search";
import Compare from "./Compare";
class Main extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="main">
          <Search
            formClass="form"
            inputClass="input"
            type="search"
            id="search"
            name="search"
          />
          <Compare />
          <List />
        </div>
      </>
    );
  }
}

export default Main;
