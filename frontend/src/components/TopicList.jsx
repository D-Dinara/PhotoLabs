import React, { useContext } from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import Context from "Context";

const TopicList = () => {
  const { topicData } = useContext(Context);

  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topic) => 
        <TopicListItem 
          key={topic.id} 
          topic={topic} 
          topicId={topic.id} 
        />
      )}
    </div>
  );
};

export default TopicList;
