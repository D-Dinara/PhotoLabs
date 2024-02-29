import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = ({ favPhotos, updateFavPhotos, displayModal, toggleModal }) => {
  const closeModal = () => {
    toggleModal(false, {});
  }
  const { id, urls, location, user, similar_photos } = displayModal.photoDetails || {};
  const photos = Object.values(similar_photos);

  return (
    <div className="photo-details-modal">
      <button onClick={closeModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__top-bar">
        <div>
        <PhotoFavButton photoId={id} updateFavPhotos={updateFavPhotos} favPhotos={favPhotos} />
          <img src={urls.full} alt="Photo" className="photo-details-modal__image" />
          <div className="photo-details-modal__photographer-details">
            <img src={user.profile} alt="Profile" className="photo-details-modal__photographer-profile"/>
            <div className='photo-details-modal__photographer-info'>
              <p>{user.name}</p>
              <p className="photo-details-modal__photographer-location">{location.city}, {location.country}</p>
            </div>
          </div>
          <h2 className='photo-details-modal__header'>Similar Photos</h2>
          <div className='photo-details-modal__top-bar'>
            <PhotoList photos={photos} favPhotos={favPhotos} updateFavPhotos={updateFavPhotos} />
          </div>
        </div> 
      </div>
    </div>

  )
};

export default PhotoDetailsModal;
