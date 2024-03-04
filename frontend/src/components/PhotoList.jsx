import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, favPhotos, updateFavPhotos, toggleModal }) => {
  
  return (
    <ul className="photo-list">
      {photos.map((photo) => 
        <PhotoListItem 
          key={photo.id} 
          photo={photo} 
          favPhotos={favPhotos} 
          updateFavPhotos={updateFavPhotos} 
          toggleModal={toggleModal} 
        />
      )}
    </ul>
  );
};

export default PhotoList;
