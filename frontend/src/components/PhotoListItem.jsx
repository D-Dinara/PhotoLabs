import React, { useContext } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import Context from "Context";

const PhotoListItem = (props) => {
  const { toggleModal } = useContext(Context);
  const { urls, id, location, user, similar_photos } = props.photo;
  const photoDetails = {
    id: id,
    location: location,
    urls: urls,
    user: user,
    similar_photos: similar_photos
  }

  // Function to display modal. Sets state of displayModal: sets showModal to true and provides photo details.
  const showModal = () => {
    toggleModal(true, photoDetails);
  }

  
  return (
    <div className="photo-list__item">
      <PhotoFavButton photo={props.photo} />
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
