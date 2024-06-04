import React, { useContext } from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import { contextProvider } from 'App';


const PhotoDetailsModal = () => {
  const { displayModal, toggleModal } = useContext(contextProvider);
  const { urls, location, user, similar_photos } = displayModal.photoDetails || {};

  // Create an array of similar photos
  const photos = Object.values(similar_photos);

  //Function closes the modal
  const closeModal = () => {
    //sets the displayModal to false and photoDetails to {}
    toggleModal(false, {});
  }

  return (
    <div className="photo-details-modal">
      <button onClick={closeModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__top-bar">
        <div>
          <PhotoFavButton photo={displayModal.photoDetails} />
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
            <PhotoList photos={photos} />
          </div>
        </div> 
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
