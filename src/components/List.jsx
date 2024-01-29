import React, { Component } from "react";
import axios from "axios";
import Button from "./Button";

class List extends Component {
  constructor() {
    super();
    // console.log("constructor ran, the component is born");
  }

  state = { crypto: [] };
  //empty version of container ahead of load.

  async componentDidMount() {
    // console.log("HTML is now inside the DOM");
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&x_cg_demo_api_key=CG-7kXqTFkJKhp4ZPBs5XfJEYBn`
      );
      this.setState({ crypto: data });
    } catch (err) {
      console.log("error with api");
    }
  }

  render() {
    // console.log("render ran, HTML getting created", this.state);
    const coins = this.state.crypto;
    console.log(coins);

    // checking that we rendr page if we have got the data from the API
    if (coins) {
      const coinDetails = coins.map((e) => {
        return [
          e.image,
          e.id,
          e.current_price,
          e.price_change_percentage_24h,
          e.circulating_supply,
        ];
      });
      console.log(coinDetails);

      return (
        <div className="list">
          <div className="flex table-title">
            <p className="list-item">Coin</p>
            <p className="list-item">Price</p>
            <p className="list-item">24h %</p>
            <p className="list-item">Circulating Supply</p>
          </div>
          {coinDetails.map((e) => {
            return (
              <div className="flex table">
                <div className="coin-name list-item">
                  <img className="coin-icon" src={e[0]} />
                  <h3 className="coin">{e[1]}</h3>
                </div>
                <p className="list-item">£ {e[2]}</p>
                <p className="list-item">{e[3]} %</p>
                <p className="list-item">{e[4]}</p>
              </div>
            );
          })}
        </div>

        // this is where our data goes
      );
    }

    return (
      <p>Loading.....</p>
      // this is where spinner stuff will go
    );
  }
}

export default List;