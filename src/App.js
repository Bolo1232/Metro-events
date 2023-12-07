// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './EventList';
import EventDetails from './EventDetails';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import product1 from "./assetes/products/1.png";
import product2 from "./assetes/products/2.png";
import product3 from "./assetes/products/3.png";
import product4 from "./assetes/products/4.png";
import product5 from "./assetes/products/5.png";
import product6 from "./assetes/products/6.png";
import product7 from "./assetes/products/7.png";
import product8 from "./assetes/products/8.png";
import product9 from "./assetes/products/9.png";
import product10 from "./assetes/products/10.png";
import product11 from "./assetes/products/11.png";
import product12 from "./assetes/products/12.png";


const App = () => {
  const initialEvents = [
    { id: 1, description: 'Basketball LIGA in Cebu!', imageUrl: product1 },
    { id: 2, description: 'Christmas Party', imageUrl: product2 },
    { id: 3, description: 'Happy Halloween', imageUrl: product3 },
    { id: 4, description: 'Brangay election', imageUrl: product4 },
    { id: 5, description: 'Champions League', imageUrl: product5 },
    { id: 6, description: 'Sinulog', imageUrl: product6 },
    { id: 7, description: 'Wedding', imageUrl: product7 },
    { id: 8, description: 'Happy New Year', imageUrl: product8 },
    { id: 9, description: 'Let us play', imageUrl: product9 },
    { id: 10, description: 'Let us play', imageUrl: product10 },
    { id: 11, description: 'Happy Wedding', imageUrl: product11 },
    { id: 12, description: 'Happy Birthday', imageUrl: product12 },
  ];

  const [events, setEvents] = useState(initialEvents);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setEvents(initialEvents);
    } else {
      const filteredEvents = initialEvents.filter((event) => {
        const includesSports = event.description.toLowerCase().includes('sports');
        const includesSearchTerm = event.description.toLowerCase().includes(searchTerm.toLowerCase());
        console.log(event, includesSports, includesSearchTerm); // Log details for debugging
        return includesSports && includesSearchTerm;
      });
      console.log("Filtered Events:", filteredEvents); // Log filtered events
      setEvents(filteredEvents);
    }
  };

  return (
    <Router>
      <div>
        <Navbar />
        <SearchBar onSearch={handleSearch} />
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