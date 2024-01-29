import React, { Component } from "react";
import axios from "axios";

class Child extends Component {
  constructor() {
    super();
    console.log("constructor ran, the component is born");
  }

  state = {};

  async componentDidMount() {
    console.log("HTML is now inside the DOM");
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/list?x_cg_demo_api_key=CG-7kXqTFkJKhp4ZPBs5XfJEYBn`
      );
      this.setState({ cyrpto: data });
    } catch (err) {
      console.log("error with api");
    }
  }

  render() {
    console.log("render ran, HTML getting created", this.state);

    if (this.state.crypto) {
      return <p>We have data</p>;
    }

    return <p>Loading.....</p>;
  }
}

export default Child;
