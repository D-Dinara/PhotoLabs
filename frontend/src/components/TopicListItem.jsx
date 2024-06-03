import React, { useContext } from "react";
import "../styles/TopicListItem.scss";
import { contextProvider } from "App";

const TopicListItem = ({topic, topicId }) => {
  const { activeTopic, getPhotosByTopic } = useContext(contextProvider);

  const activeTopicBackground = activeTopic === topicId ? "topic-list__item-active" : "";
  
  return (
    <div onClick={() => getPhotosByTopic(topicId)} className={`topic-list__item ${activeTopicBackground}`}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
