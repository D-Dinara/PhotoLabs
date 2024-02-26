import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { urls, id, location, user } = props.photo;
  const setModal = props.setModal;
  const handleClick = () => {
    setModal(true);
  }

  return (
    <div className="photo-list__item">
      <PhotoFavButton photoId={id} favPhotos={props.favPhotos} setFavPhotos={props.setFavPhotos}/>
      <img onClick={handleClick} src={urls.regular} alt="Photo" className="photo-list__image" />
    
      <div className="photo-list__user-details">
        <img src={user.profile} alt="Profile" className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <p>{user.username}</p>
          <p className="photo-list__user-location ">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
