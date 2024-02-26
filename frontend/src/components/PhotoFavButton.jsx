import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, favPhotos, setFavPhotos }) {
  const selected = favPhotos.includes(photoId) ? true : false;

  const handleClick = () => {
      setFavPhotos(prevFavPhotos => {
        if (!prevFavPhotos.includes(photoId)) {
          return [...prevFavPhotos, photoId];
        } else {
          return prevFavPhotos.filter(id => id !== photoId);
        }
      }) 
  }

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon handleClick={handleClick}  selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;