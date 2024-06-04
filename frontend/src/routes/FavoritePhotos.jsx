import React, { useContext } from 'react';
import '../styles/FavoritePhotos.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import { contextProvider } from 'App';

const FavoritePhotos = () => {
  const { favPhotos } = useContext(contextProvider);

  return (
    <div className="favorite-photos">
      <TopNavigation />
      <div className='favorite-photos__heading'>
        <h2>My favorite photos</h2>
        {favPhotos.length === 0 && <h3>No liked photos yet</h3>}
      </div>
      
      <PhotoList photos={favPhotos} />
    </div>
  )
};

export default FavoritePhotos;
