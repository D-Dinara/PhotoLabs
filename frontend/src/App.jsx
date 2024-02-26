import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState({
    showModal: false,
    photoDetails: {} 
  });

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} setDisplayModal={setDisplayModal} />
      {displayModal.showModal && <PhotoDetailsModal displayModal={displayModal} setDisplayModal={setDisplayModal} />}
    </div>
  );
};

export default App;
