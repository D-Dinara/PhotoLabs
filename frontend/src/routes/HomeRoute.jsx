import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ photos, updateFavPhotos, toggleModal, favPhotos}) => {

  return (
    <div className="home-route">
      <TopNavigation />
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
