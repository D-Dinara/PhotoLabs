import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, showFavPhotos }) => {
  
  return (
    <div onClick={() => showFavPhotos()} className='fav-badge'>
      <FavIcon selected={!!isFavPhotoExist} displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;