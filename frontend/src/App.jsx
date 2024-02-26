import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favPhotos, setFavPhotos] = useState([]);
  const [displayModal, setDisplayModal] = useState({
    showModal: false,
    photoDetails: {} 
  });

  const toggleFavPhoto = (photoId) => {
    console.log(photoId)
    setFavPhotos(prevFavPhotos => {
      if (!prevFavPhotos.includes(photoId)) {
        return [...prevFavPhotos, photoId];
      } else {
        return prevFavPhotos.filter(id => id !== photoId);
      }
    }) 
}

  return (
    <div className="App">
      <HomeRoute 
        topics={topics} 
        photos={photos} 
        favPhotos={favPhotos} 
        setFavPhotos={setFavPhotos} 
        toggleFavPhoto={toggleFavPhoto}
        setDisplayModal={setDisplayModal} 
      />
      {displayModal.showModal && 
      <PhotoDetailsModal 
        favPhotos={favPhotos}
        toggleFavPhoto={toggleFavPhoto}
        displayModal={displayModal} 
        setDisplayModal={setDisplayModal} 
      />}
    </div>
  );
};

export default App;
