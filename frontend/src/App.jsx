import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import FavoritePhotos from 'routes/FavoritePhotos';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, updateFavPhotos, toggleModal, getPhotosByTopic, showFavPhotos } = useApplicationData();
  const { photoData, topicData, activeTopic, favPhotos, displayModal, displayFavPhotos } = state;

  return (
    <div className="App">
      {displayFavPhotos ?
      <FavoritePhotos
        topics={topicData} 
        activeTopic={activeTopic}
        favPhotos={favPhotos} 
        updateFavPhotos={updateFavPhotos}
        toggleModal={toggleModal} 
        getPhotosByTopic={getPhotosByTopic}
        showFavPhotos={showFavPhotos}
      /> :
      <HomeRoute 
        topics={topicData} 
        activeTopic={activeTopic}
        photos={photoData} 
        favPhotos={favPhotos} 
        updateFavPhotos={updateFavPhotos}
        toggleModal={toggleModal} 
        getPhotosByTopic={getPhotosByTopic}
        showFavPhotos={showFavPhotos}
      /> }
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
