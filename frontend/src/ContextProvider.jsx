import React from 'react';
import useApplicationData from 'hooks/useApplicationData';
import Context from './Context';  

const ContextProvider = ({ children }) => {
  const { state, updateFavPhotos, toggleModal, getPhotosByTopic, showFavPhotos } = useApplicationData();
  const { photoData, topicData, activeTopic, favPhotos, displayModal, displayFavPhotos } = state;

  return (
    <Context.Provider value={{ 
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
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
