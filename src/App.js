import React from 'react';
import SearchBar from './components/SearchBar';
import SearchImages from './api'

const App = () => {

  const handleInput = async (input) => {
    const result = await SearchImages(input)
    console.log(result)
  }

  return(
    <div className="app">
      <SearchBar onSubmit={handleInput}/>
    </div>
  )
}

export default App;
