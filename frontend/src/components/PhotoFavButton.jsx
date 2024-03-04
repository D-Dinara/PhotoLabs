import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, favPhotos, updateFavPhotos }) {
  
  return (
    <div className="photo-list__fav-icon" onClick={() => updateFavPhotos(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favPhotos.includes(photoId)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;