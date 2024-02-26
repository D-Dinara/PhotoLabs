import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, favPhotos, setFavPhotos, setDisplayModal }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => <PhotoListItem key={photo.id} photo={photo} favPhotos={favPhotos} setFavPhotos={setFavPhotos} setDisplayModal={setDisplayModal} />) }
    </ul>
  );
};

export default PhotoList;
