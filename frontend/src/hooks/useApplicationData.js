import React, { useState } from 'react';

const useApplicationData = () => {
  const [favPhotos, setFavPhotos] = useState([]);
  const [displayModal, setDisplayModal] = useState({
    showModal: false,
    photoDetails: {} 
  });

/**
 * Toggles the favorite status of a photo.
 * 
 * @param {*} photoId - The ID of the photo to toggle the favorite status.
 */

  const toggleFavPhoto = (photoId) => {
    setFavPhotos(prevFavPhotos => {
      if (!prevFavPhotos.includes(photoId)) {
        return [...prevFavPhotos, photoId];
      } else {
        return prevFavPhotos.filter(id => id !== photoId);
      }
    }) 
}

/**
 * Toggles the modal display.
 * 
 * @param {boolean} showModal - Indicates whether the modal should be displayed or hidden.
 * @param {object} photoDetails - Details of the photo to be displayed in the modal.
 */
  const toggleModal = (showModal, photoDetails) => {
    setDisplayModal({
      showModal: showModal, 
      photoDetails: photoDetails
    });
  }

  return ({
    state: { favPhotos, displayModal },
    toggleFavPhoto: toggleFavPhoto,
    toggleModal: toggleModal,
  })
}

export default useApplicationData;