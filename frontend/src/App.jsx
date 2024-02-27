import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, updateFavPhotos, toggleModal } = useApplicationData();
  const { favPhotos, displayModal } = state;

  return (
    <div className="App">
      <HomeRoute 
        topics={topics} 
        photos={photos} 
        favPhotos={favPhotos} 
        updateFavPhotos={updateFavPhotos}
        toggleModal={toggleModal} 
      />
      {displayModal.showModal && 
      <PhotoDetailsModal 
        favPhotos={favPhotos}
        updateFavPhotos={updateFavPhotos}
        displayModal={displayModal} 
        toggleModal={toggleModal} 
      />}
    </div>
  );
};

export default App;
