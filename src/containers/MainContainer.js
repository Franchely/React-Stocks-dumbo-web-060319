import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    
   
    return (
      <div>
        <SearchBar handleFilter={this.props.handleFilter} handlePriceClick={this.props.handlePriceClick} handleAlphaClick={this.props.handleAlphaClick}/>

          <div className="row">
            <div className="col-8">

              <StockContainer allStocks={this.props.allStocks} handleClick={this.props.handleClick}/>

            </div>
            <div className="col-4">

              <PortfolioContainer removeStock={this.props.removeStock} myStocks={this.props.myStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
