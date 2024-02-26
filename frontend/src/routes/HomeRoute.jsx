import React from 'react';
import { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = ({ topics, photos, setDisplayModal }) => {
 const [favPhotos, setFavPhotos] = useState([]);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotos={favPhotos} />
      <PhotoList photos={photos} favPhotos={favPhotos} setFavPhotos={setFavPhotos} setDisplayModal={setDisplayModal} />
    </div>
  );
};

export default HomeRoute;
