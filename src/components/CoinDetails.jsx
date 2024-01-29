import React, { Component } from "react";
class CoinDetails extends Component {
  state = {};
  render() {

    const {flex, table, coinName, listItem, coinIcon, coin}
    return (
      <div className="flex table">
        <div className="coin-name list-item">
          <img className="coin-icon" src={e[0]} />
          <h3 className="coin">{e[1]}</h3>
        </div>
        <p className="list-item">£ {e[2]}</p>
        <p className="list-item">{e[3].toFixed(4)} %</p>
        <Button text="compare" btnClass="btn" />
      </div>
    );
  }
}

export default CoinDetails;
