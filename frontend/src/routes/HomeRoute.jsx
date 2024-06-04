import React, { useContext } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import { contextProvider } from 'App';

const HomeRoute = () => {
  const { photoData } = useContext(contextProvider);

  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList photos={photoData} />
    </div>
  );
};

export default HomeRoute;
