import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, activeTopic, favPhotos, getPhotosByTopic, showFavPhotos }) => {

   return (
    <div className="top-nav-bar">
      <span onClick={() => getPhotosByTopic(null)} className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} activeTopic={activeTopic} getPhotosByTopic={getPhotosByTopic} />
      <FavBadge showFavPhotos={showFavPhotos} isFavPhotoExist={favPhotos.length} />
    </div>
  )
}

export default TopNavigation;