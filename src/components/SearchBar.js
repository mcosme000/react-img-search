import React from 'react';

const SearchBar = ({ onClick }) => {

  const getInput = (e) => {
    e.preventDefault();
    
    onClick();
  }

  return(
    <div>
      <form>
        <input type="text" id="input"/>
        <button onClick={getInput}>Search images</button>
      </form>
    </div>
  )
}

export default SearchBar;
