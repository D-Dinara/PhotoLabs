import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, updateFavPhotos, toggleModal, getPhotosByTopic } = useApplicationData();
  const { photoData, topicData, activeTopic, favPhotos, displayModal } = state;

  return (
    <div className="App">
      <HomeRoute 
        topics={topicData} 
        activeTopic={activeTopic}
        photos={photoData} 
        favPhotos={favPhotos} 
        updateFavPhotos={updateFavPhotos}
        toggleModal={toggleModal} 
        getPhotosByTopic={getPhotosByTopic}
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
