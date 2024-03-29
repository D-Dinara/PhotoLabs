import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ topics, activeTopic, photos, favPhotos, updateFavPhotos, toggleModal, getPhotosByTopic, showFavPhotos}) => {


  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics} 
        activeTopic={activeTopic}
        favPhotos={favPhotos} 
        getPhotosByTopic={getPhotosByTopic}
        showFavPhotos={showFavPhotos}
      />
      <PhotoList 
        photos={photos} 
        favPhotos={favPhotos} 
        updateFavPhotos={updateFavPhotos}
        toggleModal={toggleModal} 
      />
    </div>
  );
};

export default HomeRoute;
