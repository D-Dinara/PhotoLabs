import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, favPhotos, toggleFavPhoto, setDisplayModal }) => {
  
  return (
    <ul className="photo-list">
      {photos.map((photo) => <PhotoListItem key={photo.id} photo={photo} favPhotos={favPhotos} toggleFavPhoto={toggleFavPhoto} setDisplayModal={setDisplayModal} />) }
    </ul>
  );
};

export default PhotoList;
