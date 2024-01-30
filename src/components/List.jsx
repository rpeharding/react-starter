import React, { Component } from "react";
import axios from "axios";
import Button from "./Button";

class List extends Component {
  constructor() {
    super();
    // console.log("constructor ran, the component is born");
  }

  state = { crypto: [], favourites: [] };
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

  watchCoin = (coin) => {
    // console.log(coin);
    const favourites = [...this.state.favourites];
    favourites.push(coin);
    this.setState({ favourites });
  };

  render() {
    // console.log(this.state, this.props);

    const coins = this.state.crypto;

    // for search
    let filtered = [...coins];
    if (this.props.userInput) {
      filtered = coins.filter((coin) => {
        return coin.id.includes(this.props.userInput);
      });
    }

    //for watch button
    let filteredFavs = [...coins];
    filteredFavs = filteredFavs.filter((coin) => {
      return this.state.favourites.includes(coin.id);
    });

    console.log(filteredFavs);

    const watched = filteredFavs.map((coin) => {
      return {
        image: coin.image,
        name: coin.id,
        price: coin.current_price,
        priceChange: coin.price_change_percentage_24h,
        circulatingSupply: coin.circulating_supply,
      };
    });

    if (coins) {
      const coinDetails = filtered.map((coin) => {
        return {
          image: coin.image,
          name: coin.id,
          price: coin.current_price,
          priceChange: coin.price_change_percentage_24h,
        };
      });
      console.log(watched);
      return (
        <>
          <div className="summary">
            {watched.map((coin) => {
              const upOrDown =
                coin.priceChange > 0 ? "list-item up" : "list-item down";
              return (
                <div className="compare-card">
                  <div className="coin-name list-item">
                    <img className="coin-icon" src={coin.image} />
                    <h3 className="coin large-heading">{coin.name}</h3>
                  </div>
                  <h3 className="compare-heading">Price</h3>
                  <p className="list-item">£{coin.price}</p>
                  <h3 className="compare-heading">24h%</h3>
                  <p className={upOrDown}> {coin.priceChange.toFixed(4)} %</p>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && <p>No results, try widening your search</p>}
          <div className="list">
            <div className="table-container">
              <div className="flex table-title">
                <p className="list-item">Coin</p>
                <p className="list-item">Price</p>
                <p className="list-item">24h %</p>
              </div>

              {coinDetails.map((e) => {
                const upOrDown =
                  e.priceChange > 0 ? "list-item up" : "list-item down";

                return (
                  // <>
                  //   <ListItem
                  //     containerClass="flex table"
                  //     coinNameClass="coin-name list-item"
                  //     coinIconClass="coin-icon"
                  //     coinClass="coin"
                  //     priceClass="list-item"
                  //     priceChangeClass={upOrDown}
                  //     e={e}
                  //   />
                  // </>
                  <div className="flex table">
                    <div className="coin-name list-item">
                      <img className="coin-icon" src={e.image} />
                      <h3 className="coin">{e.name}</h3>
                    </div>
                    <p className="list-item">£ {e.price}</p>
                    <p className={upOrDown}>{e.priceChange.toFixed(4)} %</p>
                    <Button
                      click={() => this.watchCoin(e.name)}
                      text="watch"
                      btnclass="btn"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
    }

    return (
      <p>Loading.....</p>
      // this is where spinner stuff will go
    );
  }
}

export default List;
