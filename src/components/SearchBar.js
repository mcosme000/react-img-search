import React, { useState } from 'react';
import '../stylesheets/searchbar.css';


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
    let gridClass = e.target.innerHTML.split(" ")[0].toLowerCase();
    console.log(gridClass);
    onClick(gridClass);
  }

  return(
    <div className="header-content">
      <form onSubmit={handleSubmit}>
        <input type="text" id="input" onChange={handleChange}/>
        <input type="submit" value="Search"/>
      </form>
      <div>
        <ul className="options">
          <li onClick={handleClick}>Small grid</li>
          <li onClick={handleClick}>Wide grid</li>
        </ul>
      </div>
    </div>
  )
}

export default SearchBar;

// I am getting the input value from this component
// and sending it back to the parent component
// through the callback function that I received as a prop
