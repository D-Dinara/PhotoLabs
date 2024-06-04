import React, { createContext } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import FavoritePhotos from 'routes/FavoritePhotos';
export const contextProvider = createContext();


// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, updateFavPhotos, toggleModal, getPhotosByTopic, showFavPhotos } = useApplicationData();
  const { photoData, topicData, activeTopic, favPhotos, displayModal, displayFavPhotos } = state;

  return (
    <div className="App">
      <contextProvider.Provider value={{ 
        state, 
        updateFavPhotos, 
        toggleModal, 
        getPhotosByTopic, 
        showFavPhotos, 
        photoData, 
        topicData, 
        activeTopic, 
        favPhotos, 
        displayModal, 
        displayFavPhotos 
      }}>
        {displayFavPhotos ?
        <FavoritePhotos /> :
        <HomeRoute /> }
        {displayModal.showModal && 
        <PhotoDetailsModal />}
      </contextProvider.Provider>
    </div>
  );
};

export default App;
