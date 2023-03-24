import React, { useState } from 'react';
import '../stylesheets/searchbar.css';


const SearchBar = ({ onSubmit }) => {
  const [ input, setInput ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="input" onChange={handleChange}/>
        <input type="submit" value="Search Images"/>
      </form>
    </div>
  )
}

export default SearchBar;

// I am getting the input value from this component
// and sending it back to the parent component
// through the callback function that I received as a prop
