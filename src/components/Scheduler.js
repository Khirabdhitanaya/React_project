import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Scheduler() {
  const [mentors, setMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [duration, setDuration] = useState(30);

  // Mock mentor data
  const mockMentors = [
    {
      id: 1,
      name: 'John Doe',
      area: 'FMCG Sales',
      availability: ['7:00 PM', '7:30 PM', '8:00 PM']
    },
    {
      id: 2,
      name: 'Jane Smith',
      area: 'Equity Research',
      availability: ['6:30 PM', '7:00 PM', '7:30 PM']
    },
    {
      id: 3,
      name: 'Michael Brown',
      area: 'Digital Marketing',
      availability: ['5:00 PM', '5:30 PM', '6:00 PM']
    },
    // Add more mock mentors here
  ];

  // Filter mentors based on the selected area of interest
  useEffect(() => {
    if (areaOfInterest) {
      const filteredMentors = mockMentors.filter(
        mentor => mentor.area === areaOfInterest
      );
      setMentors(filteredMentors);
    }
  }, [areaOfInterest]);

  // Handle mentor selection
  const handleMentorSelection = (mentor) => {
    setSelectedMentor(mentor);
  };

  return (
    <div className="scheduler">
      <h2>Schedule Your 1x1 Session</h2>
      
      <label>Area of Interest:</label>
      <select onChange={(e) => setAreaOfInterest(e.target.value)} value={areaOfInterest}>
        <option value="">Select an area</option>
        <option value="FMCG Sales">FMCG Sales</option>
        <option value="Equity Research">Equity Research</option>
        <option value="Digital Marketing">Digital Marketing</option>
        {/* Add more areas as needed */}
      </select>
      
      <label>Session Duration:</label>
      <select onChange={(e) => setDuration(e.target.value)} value={duration}>
        <option value={30}>30 minutes</option>
        <option value={45}>45 minutes</option>
        <option value={60}>60 minutes</option>
      </select>

      <h3>Available Mentors</h3>
      <ul>
        {mentors.map(mentor => (
          <li key={mentor.id} onClick={() => handleMentorSelection(mentor)}>
            {mentor.name} - {mentor.availability.join(', ')}
          </li>
        ))}
      </ul>

      {selectedMentor && (
        <div>
          <h4>Selected Mentor: {selectedMentor.name}</h4>
          {/* Further code here for proceeding to payment */}
        </div>
      )}
    </div>
  );
}

export default Scheduler;
