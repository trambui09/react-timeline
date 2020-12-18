import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return(
    <div>
      <p>{props.person}</p>
      <p>{props.status}</p>
      <Timestamp timestamp="2018-05-18T22:12:03Z" />
    </div>
  )
}

export default TimelineEvent;