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
    const { type, id, name, formClass, inputClass, onInput } = this.props;
    return (
      <form className={formClass}>
        <input
          onInput={onInput}
          className={inputClass}
          type={type}
          id={id}
          name={name}
          placeholder="type to search coins.."
        />
      </form>
    );
  }
}

export default Search;
