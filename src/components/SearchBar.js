import React, { useState } from 'react';
import '../stylesheets/searchbar.css';
import '../stylesheets/grid_options.css';

const SearchBar = ({ onSubmit, onClick }) => {
  const [ input, setInput ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleClick = (e) => {
    console.log(e.target.id)
    let gridClass = e.target.id
    onClick(gridClass)
  }

  return(
    <div className="header-content">
      <form onSubmit={handleSubmit}>
        <input type="text" id="input" onChange={handleChange}/>
        <input type="submit" value="Search"/>
      </form>
      <div>
        <ul className="options">
          <img onClick={handleClick} id="small"
            src={require('../media/small-grid.png')} alt="small logo icon"/>
          <img onClick={handleClick} id="wide"
            src={require('../media/wide-grid.png')} alt="wide logo icon"/>
        </ul>
      </div>
    </div>
  )
}

export default SearchBar;

// I am getting the input value from this component
// and sending it back to the parent component
// through the callback function that I received as a prop
