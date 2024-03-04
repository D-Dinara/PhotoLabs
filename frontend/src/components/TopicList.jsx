import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, activeTopic, getPhotosByTopic }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => 
        <TopicListItem 
          key={topic.id} 
          topic={topic} 
          topicId={topic.id} 
          activeTopic={activeTopic} 
          getPhotosByTopic={getPhotosByTopic} 
        />
      )}
    </div>
  );
};

export default TopicList;
