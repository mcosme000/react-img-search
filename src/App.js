import React from 'react';
import SearchBar from './components/SearchBar';


const App = () => {

  const handleInput = (input) => {
    console.log(`Listening to... ${input}`)
  }

  return(
    <div className="app">
      <SearchBar onClick={handleInput}/>
    </div>
  )
}

export default App;
