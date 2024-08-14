import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>CareerCarve 1x1 Scheduler</h1>
      <Link to="/schedule">
        <button>Schedule a Session</button>
      </Link>
    </div>
  );
}

export default Home;
