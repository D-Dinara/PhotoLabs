import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photo, favPhotos, updateFavPhotos }) {
  const photoId = photo.id;
  const selected = favPhotos.find(photo => photo.id === photoId)
 
  return (
    <div className="photo-list__fav-icon" onClick={() => {updateFavPhotos(photo)} }>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;