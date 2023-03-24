import React from 'react';

const ImageShow = ({url, img_url, alt, photographer}) => {
  return(
    <a href={url} target="_blank" rel="noreferrer">
      <div className="image">
        <div className="img-container">
          <img src={img_url} alt={alt}/>
        </div>
        <div className="overlay">
          <p className="photographer">{photographer}</p>
        </div>
      </div>
    </a>
  )
}

export default ImageShow;
