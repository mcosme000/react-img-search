import React from 'react';
import ImageShow from './ImageShow';
import '../stylesheets/gallery.css';
import '../stylesheets/mediaqueries.css';

const ImageList = ({images}) => {
  const imageElement = images.map(img => {
    return(
      <ImageShow
        url={img.url}
        img_url={img.src.large}
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
