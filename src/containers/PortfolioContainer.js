import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
         { this.props.myStocks.length < 0 ? null : console.log("ignore this")
         }
          {
            this.props.myStocks.map(stock => <div onClick={() => this.props.removeStock(stock)} key={stock.id} className="portfolio"> <h4>{stock.name}</h4> <br></br> {stock.price} </div>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
