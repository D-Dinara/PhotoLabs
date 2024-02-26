import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, favPhotos, setFavPhotos }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => <PhotoListItem key={photo.id} photo={photo} favPhotos={favPhotos} setFavPhotos={setFavPhotos}/>) }
    </ul>
  );
};

export default PhotoList;
