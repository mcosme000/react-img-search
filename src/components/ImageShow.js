import React from 'react';

const ImageShow = ({url, alt, photographer}) => {
  return(
    <div>
      <p>{photographer}</p>
      <img src={url} alt={alt}/>
    </div>
  )
}

export default ImageShow;
