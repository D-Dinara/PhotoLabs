import React, { useContext } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import Context from 'Context';

function PhotoFavButton({ photo }) {
  const { favPhotos, updateFavPhotos } = useContext(Context);

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