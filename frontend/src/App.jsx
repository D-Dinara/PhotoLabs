import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, updateFavPhotos, toggleModal } = useApplicationData();
  const { photoData, topicData, favPhotos, displayModal } = state;

  return (
    <div className="App">
      <HomeRoute 
        topics={topicData} 
        photos={photoData} 
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
