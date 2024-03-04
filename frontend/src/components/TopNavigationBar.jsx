import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, favPhotos, getPhotosByTopic }) => {

  return (
    <div className="top-nav-bar">
      <span onClick={() => getPhotosByTopic(null)} className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
      <FavBadge isFavPhotoExist={favPhotos.length} />
    </div>
  )
}

export default TopNavigation;