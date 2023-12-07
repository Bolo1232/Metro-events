// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOrganizer, setIsOrganizer] = useState(false);

  const handleOrganizerRegistration = () => {
    // Add logic to submit the organizer registration request
    // You can use an API call or any other mechanism for this
    // Once the request is submitted, you can set a state to indicate the request status
    setIsOrganizer(true);
  };

  return (
    <nav className="navbar">
      {/* Add your navbar content here */}
      <div>
        {/* Add more navbar items as needed */}
        {isOrganizer ? (
          <span>Request submitted. Admin will review your request.</span>
        ) : (
          <button onClick={handleOrganizerRegistration} className="organizer-button">
            Register as Organizer
          </button>
        )}
      </div>
      <a href="/" className="home-link">
        Home
      </a>
    </nav>
  );
};

export default Navbar;
