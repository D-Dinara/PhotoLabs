import React, { useContext } from "react";
import "../styles/TopicListItem.scss";
import Context from "Context";

const TopicListItem = ({topic, topicId }) => {
  const { activeTopic, getPhotosByTopic } = useContext(Context);

  const activeTopicBackground = activeTopic === topicId ? "topic-list__item-active" : "";
  
  return (
    <div onClick={() => getPhotosByTopic(topicId)} className={`topic-list__item ${activeTopicBackground}`}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
