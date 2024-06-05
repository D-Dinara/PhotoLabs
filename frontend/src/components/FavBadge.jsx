import React, { useContext } from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';
import Context from 'Context';

const FavBadge = () => {
  const { showFavPhotos, favPhotos } = useContext(Context);

  return (
    <div onClick={() => showFavPhotos()} className='fav-badge'>
      <FavIcon selected={!!favPhotos.length} displayAlert={!!favPhotos.length}/>
    </div>
  ) 
};

export default FavBadge;