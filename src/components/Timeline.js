import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineEventComponents = props.events.map ((item,i) => {
    return (
      <TimelineEvent
        person={item.person}
        status={item.status}
        timeStamp={item.timeStamp}
        key={i}
      />
    )
  })

  return(
    <div className="timeline">
      {timelineEventComponents}
    </div>
    
  )
}

export default Timeline;