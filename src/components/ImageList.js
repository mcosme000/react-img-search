import React from 'react';
import ImageShow from './ImageShow';
import '../stylesheets/gallery.css';
import '../stylesheets/mediaqueries.css';

const ImageList = ({images, gridStyle}) => {
  const imageElement = images.map(img => {
    return(
      <ImageShow
        key={img.id}
        url={img.url}
        img_url={img.src.large}
        alt={img.alt}
        photographer={img.photographer}
        />
    )
  })
  return(
    <div className={`${gridStyle}-gallery`}>
      {imageElement}
    </div>
  )
}

export default ImageList;
