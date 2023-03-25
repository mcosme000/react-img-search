import React, { useState } from 'react';
import './index.css';
import SearchBar from './components/SearchBar';
import SearchImages from './api'
import ImageList from './components/ImageList';


const App = () => {
  const [images, setImages] = useState([])
  const [grid, setGrid] = useState("small");

  const handleInput = async (input) => {
    const result = await SearchImages(input)
    console.log(result.photos)
    setImages(result.photos)
  }

  const handleGridStyle = (style) => {
    setGrid(style)
    console.log(style)
  }

  return(
    <div className="app">
      <header>
        <SearchBar onSubmit={handleInput} onClick={handleGridStyle}/>
      </header>
      <ImageList images={images} gridStyle={grid}/>
    </div>
  )
}

export default App;

// since I want to display the images, I need to use State
