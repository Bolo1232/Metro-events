// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './EventList';
import EventDetails from './EventDeatils';
import Navbar from './Navbar';
import product1 from "./assetes/products/1.jfif";
import product2 from "./assetes/products/2.jfif";
import product3 from "./assetes/products/3.jfif";

const App = () => {
  const events = [
    { id: 1, name: 'Event 1', description: 'Basketball LIGA in Cebu!', imageUrl: product1 },
    { id: 2, name: 'Event 2', description: 'Upcoming Lenovo laptop', imageUrl: product2 },
    { id: 3, name: 'Event 3', description: 'Description for Event 3', imageUrl: product3 },
  ];

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<EventList events={events} />} />
          <Route path="/event-details/:eventId" element={<EventDetails />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
