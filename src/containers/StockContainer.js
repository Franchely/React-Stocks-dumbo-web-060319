import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  
  
  render() {
    const renderStocks = this.props.allStocks.map(stock => { 
       return <Stock handleClick={this.props.handleClick} key={stock.id} stock={stock}/> } )
    
    return (
      <div>
        <h2>Stocks</h2>
        {
          renderStocks
        }
      </div>
    );
  }

}

export default StockContainer;
