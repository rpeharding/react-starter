import React, { Component } from "react";
import Button from "./Button";

class Search extends Component {
  state = {};

  onSearch = (e) => {
    e.preventDefault();
    if (!this.state.userInput) {
      return;
    }
    console.log(this.state.userInput);

    // want to filter list of coins by search input.
  };

  render() {
    const { type, id, name, formClass, inputClass, click } = this.props;
    return (
      <form className={formClass}>
        <input
          onClick={click}
          className={inputClass}
          type={type}
          id={id}
          name={name}
        />
        <Button click={this.onSearch} text={"Search"} btnclass="search-btn" />
      </form>
    );
  }
}

export default Search;
