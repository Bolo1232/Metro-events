// EventList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './EventList.css';
import { handleViewDetails } from './EventListAction';

const EventList = ({ events }) => {
  return (
    <div className="event-list-container">
      <h2>Event List</h2>
      <div className="events">
        {events.map(event => (
          <div key={event.id} className="event">
            <img src={event.imageUrl} alt={`Event ${event.id}`} />
            <div className="details">
              <strong>{event.name}</strong>
              <p className="description">{event.description}</p>
              <Link
                to={`/event-details/${event.id}`}
                className="viewDetailsBtn"
                onClick={() => handleViewDetails(event.id)}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
