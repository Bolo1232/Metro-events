// EventDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { eventId } = useParams();

  // Fetch the event details based on the eventId
  // You can use the eventId to retrieve the corresponding event details from your data source
  // For now, let's assume you have the event details available in an array
  const events = [
    { id: 1, name: 'Event 1', description: 'Basketball LIGA in Cebu!' },
    { id: 2, name: 'Event 2', description: 'Upcoming Lenovo laptop' },
    { id: 3, name: 'Event 3', description: 'Description for Event 3' },
  ];

  const event = events.find(event => event.id === parseInt(eventId, 10));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default EventDetails;
