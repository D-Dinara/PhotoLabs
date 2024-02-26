import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, setFavPhotos }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => <PhotoListItem key={photo.id} photo={photo} photos={photos} setFavPhotos={setFavPhotos}/>) }
    </ul>
  );
};

export default PhotoList;
