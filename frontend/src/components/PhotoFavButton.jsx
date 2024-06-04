import React, { useContext } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { contextProvider } from 'App';

function PhotoFavButton({ photo }) {
  const { favPhotos, updateFavPhotos } = useContext(contextProvider);

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