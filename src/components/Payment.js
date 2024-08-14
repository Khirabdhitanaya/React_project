import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Payment() {
  const location = useLocation();
  const { selectedMentor, duration } = location.state;

  const calculatePrice = (duration) => {
    switch (duration) {
      case 30:
        return 2000;
      case 45:
        return 3000;
      case 60:
        return 4000;
      default:
        return 0;
    }
  };

  const price = calculgiatePrice(duration);

  return (
    <div className="payment">
      <h2>Payment Page</h2>
      <p>Mentor: {selectedMentor.name}</p>
      <p>Duration: {duration} minutes</p>
      <p>Total Price: ₹{price}</p>

      <Link to="/confirmation" state={{ selectedMentor, duration, price }}>
        <button>Confirm and Pay</button>
      </Link>
    </div>
  );
}

export default Payment;
