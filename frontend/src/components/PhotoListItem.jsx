import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile } = props.photo;
  return (
    <div key={id}>
      <img src={imageSource} alt="Photo" />
      <img src={profile} alt="Profile" />
      <p>{username}</p>
      <p>{location.city}, {location.country}</p>
    </div>
  )
};

export default PhotoListItem;
