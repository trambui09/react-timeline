import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return(
    <div>
      <p><bold>{props.person}</bold></p>
      <p>{props.status}</p>
      <Timestamp time={props.timeStamp} />
      <hr/>
    </div>
  )
}

export default TimelineEvent;

