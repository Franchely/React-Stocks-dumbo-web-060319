import React from 'react';


const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onClick={props.handleAlphaClick}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onClick={props.handlePriceClick}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
          <option value="None">None</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
