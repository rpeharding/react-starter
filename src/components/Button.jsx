import React, { Component } from "react";

class Button extends Component {
  render() {
    const { btnclass, text, click } = this.props;
    return (
      <button onClick={click} className={btnclass}>
        {text}
      </button>
    );
  }
}

export default Button;
