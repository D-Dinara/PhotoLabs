import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({topic, topicId, getPhotosByTopic}) => {
  
  return (
    <div onClick={() => getPhotosByTopic(topicId)} className="topic-list__item">
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
