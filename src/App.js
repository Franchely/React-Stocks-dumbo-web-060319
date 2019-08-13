import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    allStocks: [],
    myStocks: [],
    copyOfData: [],
    noFilter: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(response => response.json())
    .then(data => this.setState({allStocks: data, copyOfData: data, noFilter: data}))
  }

  handleClick = (stock) => {
    console.log(stock)
    if (this.state.myStocks.includes(stock)) {
      return null 
    } else {
    this.setState({
      myStocks: [...this.state.myStocks, stock]
    }) }
  }

  removeStock = (stock) => {

    this.setState({
      myStocks: this.state.myStocks.filter(item => item !== stock)
    })
  }

  handleAlphaClick = () => {
    
    if (this.state.allStocks[0].name === "Google")
    this.setState({
      allStocks: [...this.state.allStocks].sort((a, b) => (a.name > b.name) ? 1 : -1)
    })
    else {
     
      this.setState({
        allStocks: this.state.copyOfData
      })
    }
    
  }

  handlePriceClick = () => {
    if (this.state.allStocks[0].name === "Google") {
      this.setState({
        allStocks: [...this.state.allStocks].sort((a, b) => (a.price - b.price)).reverse()
      })
    } else {
      this.setState({
        allStocks: this.state.copyOfData
      })
    }
  }

  handleFilter = (event) => {
    event.persist()
    let term = event.target.value

    if (term === "None") {
      this.setState({
        allStocks: this.state.noFilter
      })
    } else {
   
      this.setState({
        allStocks: this.state.copyOfData.filter(stock => stock.type === term)
      })
    }
    
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer handleFilter={this.handleFilter} handlePriceClick={this.handlePriceClick} handleAlphaClick={this.handleAlphaClick} removeStock={this.removeStock} myStocks={this.state.myStocks} allStocks={this.state.allStocks} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
