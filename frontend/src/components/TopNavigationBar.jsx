import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, favPhotos, getPhotosByTopic, getAllPhotos }) => {

  return (
    <div className="top-nav-bar">
      <span onClick={() => getAllPhotos()} className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
      <FavBadge isFavPhotoExist={favPhotos.length} />
    </div>
  )
}

export default TopNavigation;