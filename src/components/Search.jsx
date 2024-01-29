import React, { Component } from "react";
import Button from "./Button";
import { format } from "date-fns";
class Search extends Component {
  state = {};
  render() {
    const { type, id, name, formClass, inputClass } = this.props;
    return (
      <form className={formClass}>
        <input className={inputClass} type={type} id={id} name={name} />
        <Button text={"Search"} btnClass="search-btn" />
      </form>
    );
  }
}

export default Search;
