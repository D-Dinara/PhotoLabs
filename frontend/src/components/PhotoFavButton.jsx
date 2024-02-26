import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, photos, setFavPhotos }) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(prevSelected => !prevSelected);
    const photo = photos.find(photo => photoId === photo.id)
    if (!selected) {
      setFavPhotos(prevFavPhotos => prevFavPhotos = [...prevFavPhotos, photo])
    } else {
      setFavPhotos(prevFavPhotos => prevFavPhotos = prevFavPhotos.filter(photo => photo.id !== photoId))
    }
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