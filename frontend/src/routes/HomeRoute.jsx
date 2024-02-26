import React from 'react';
import { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ topics, photos }) => {
 const [favPhotos, setFavPhotos] = useState([]);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotos={favPhotos} />
      <PhotoList photos={photos} favPhotos={favPhotos} setFavPhotos={setFavPhotos} />
    </div>
  );
};

export default HomeRoute;
