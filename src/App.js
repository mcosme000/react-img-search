import React, { useState } from 'react';

const App = () => {

  const [word, setWord] = useState("")

  const getWord = (e) => {
    setWord(e.target.innerHTML)
    console.log(e.target.innerHTML)
    getImages()
  }

  const getImages = () => {
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${word}`, {
    headers: {
			"Authorization": "Client-ID Lj08PBsPio_7BT8J_8rAuGEt_3Dem1rgeiNB_73i_CY"
		},
  })
    .then(response => {
      return response.json();
    })
    .then(data => console.log(data))
  }

  return(
    <div className="app">
      <p>App</p>
      <p onClick={getWord}>deer</p>
      <p onClick={getWord}>cat</p>
      <p onClick={getWord}>bird</p>
      <p onClick={getWord}>dog</p>
    </div>
  )
}

export default App;
