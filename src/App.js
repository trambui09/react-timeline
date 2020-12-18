import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';


function App() {
  console.log(timelineData);

  const events = [
    {
      person: 'Grace Hopper',
      status: 'Ada is a strongly typed language. C++ is a strongly hyped language.',
      timeStamp: '2018-05-18T22:12:03Z'
    },
    {
      person: 'Richard O\'Keefe',
      status: 'Fifty years of programming language research, and we end up with C++ ???',
      timeStamp: '2018-05-18T22:19:40Z'
    }
  ];

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ada Lovelace's social media feed</h1>
      </header>
      <main className="App-main">
        <TimelineEvent person="Ada Lovelace" status="The Original programmer... old-school style, on PAPER." timeStamp="2018-05-18T22:12:03Z" />
        <Timeline events={events}/>
      </main>
    </div>
  );
}

export default App;
