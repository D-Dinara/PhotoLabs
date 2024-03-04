import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({topic, topicId, activeTopic, getPhotosByTopic}) => {

  const activeTopicBackground = activeTopic === topicId ? "topic-list__item-active" : "";
  
  return (
    <div onClick={() => getPhotosByTopic(topicId)} className={`topic-list__item ${activeTopicBackground}`}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
