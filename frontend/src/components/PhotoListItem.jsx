import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { urls, id, location, user, similar_photos } = props.photo;
  const photoDetails = {
    id: id,
    location: location,
    urls: urls,
    user: user,
    similar_photos: similar_photos
  }

  const showModal = () => {
    props.toggleModal(true, photoDetails);
  }
 
  return (
    <div className="photo-list__item">
      <PhotoFavButton photoId={id} favPhotos={props.favPhotos} updateFavPhotos={props.updateFavPhotos} />
      <img onClick={showModal} src={urls.regular} alt="Photo" className="photo-list__image" />
    
      <div className="photo-list__user-details">
        <img src={user.profile} alt="Profile" className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <p>{user.name}</p>
          <p className="photo-list__user-location ">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
