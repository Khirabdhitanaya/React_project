import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Scheduler from './components/Scheduler';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import confirmation from './components/MentorList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Scheduler />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/confirmation" element={<Confirmation/>}/>
      </Routes>
    </div>
  );
}

export default App;
