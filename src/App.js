import React, { useState } from 'react';
import './index.css';
import SearchBar from './components/SearchBar';
import SearchImages from './api'
import ImageList from './components/ImageList';


const App = () => {
  const [images, setImages] = useState([])

  const handleInput = async (input) => {
    const result = await SearchImages(input)
    console.log(result.photos)
    setImages(result.photos)
  }

  return(
    <div className="app">
      <SearchBar onSubmit={handleInput}/>
      <ImageList images={images}/>
    </div>
  )
}

export default App;

// since I want to display the images, I need to use State
