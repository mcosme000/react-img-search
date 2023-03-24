import React from 'react';
import ImageShow from './ImageShow';

const ImageList = ({images}) => {
  const imageElement = images.map(img => {
    return(
      <ImageShow
        url={img.src.medium}
        alt={img.alt}
        photographer={img.photographer}
        key={img.id}/>
    )
  })
  return(
    <div className="gallery">
      {imageElement}
    </div>
  )
}

export default ImageList;
