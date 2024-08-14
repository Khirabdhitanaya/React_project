import React from 'react';
import { useLocation } from 'react-router-dom';

function Confirmation() {
  const location = useLocation();
  const { selectedMentor, duration, price } = location.state;

  return (
    <div className="confirmation">
      <h2>Booking Confirmed!</h2>
      <p>Mentor: {selectedMentor.name}</p>
      <p>Duration: {duration} minutes</p>
      <p>Total Price: ₹{price}</p>
      <p>Thank you for booking with CareerCarve!</p>
    </div>
  );
}

export default Confirmation;
