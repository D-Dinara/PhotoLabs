import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, photos, setFavPhotos }) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(prevSelected => !prevSelected);
    const photo = photos.find(photo => photoId === photo.id)
      setFavPhotos(prevFavPhotos => {
        if (!prevFavPhotos.includes(photo.id)) {
          return [...prevFavPhotos, photo.id];
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