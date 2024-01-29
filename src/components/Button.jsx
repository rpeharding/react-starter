import React, { Component } from "react";

class Button extends Component {
  render() {
    const { btnClass, text } = this.props;
    return <button className={btnClass}>{text}</button>;
  }
}

export default Button;
