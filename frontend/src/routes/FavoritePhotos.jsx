import React from 'react';
import '../styles/FavoritePhotos.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';


const FavoritePhotos = ({ topics, activeTopic, favPhotos, updateFavPhotos, toggleModal, getPhotosByTopic, showFavPhotos }) => {

  return (
    <div className="favorite-photos">
      <TopNavigation 
        topics={topics} 
        activeTopic={activeTopic}
        favPhotos={favPhotos} 
        getPhotosByTopic={getPhotosByTopic}
        showFavPhotos={showFavPhotos}
      />
      <div className='favorite-photos__heading'>
        <h2>My favorite photos</h2>
        {favPhotos.length === 0 && <h3>No liked photos yet</h3>}
      </div>
      
      
      <PhotoList 
        photos={favPhotos} 
        favPhotos={favPhotos} 
        updateFavPhotos={updateFavPhotos} 
        toggleModal={toggleModal} 
      />
    </div>
  )
};

export default FavoritePhotos;
