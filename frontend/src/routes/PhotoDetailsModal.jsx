import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ setModal }) => {
const handleClick = () => {
  setModal(false);
}

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img onClick={handleClick} src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
