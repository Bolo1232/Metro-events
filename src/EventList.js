// EventList.js

import React from 'react';
import { Link } from 'react-router-dom';
import './EventList.css';

const EventList = ({ events }) => {
  return (
    <div className="event-list-container">
      <h2>Event List</h2>
      <div className="events">
        {events.map(({ id, description, imageUrl }) => (
          <div key={id} className="event">
            <Link to={`/event-details/${id}`}>
              <img src={imageUrl} alt={description} />
            </Link>
            <div className="details">
              <strong>{description}</strong>
              {/* You can add more details here if needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
