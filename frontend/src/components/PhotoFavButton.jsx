import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, favPhotos, toggleFavPhoto }) {
  const selected = favPhotos.includes(photoId) ? true : false;

  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFavPhoto(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;