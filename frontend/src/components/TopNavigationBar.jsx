import React, { useContext } from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import Context from 'Context';

const TopNavigation = () => {
  const { getPhotosByTopic } = useContext(Context);

   return (
    <div className="top-nav-bar">
      <span onClick={() => getPhotosByTopic(null)} className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge />
    </div>
  )
}

export default TopNavigation;