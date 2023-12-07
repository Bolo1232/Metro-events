// EventDetails.js
import React from 'react';
import './EventDetails.css'; // Import the CSS file
import './SearchBar.js';
import { useParams } from 'react-router-dom';
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


const EventDetails = () => {
  const { eventId } = useParams();

  const events = [
    { id: 1, description: 'On April 15-17, at Nichols School in Buffalo, 45 men, women and youth teams from across the North Eastern U.S. and Canada will meet in the Queen City to compete for the national championship and a $5,000 prize. This year, BFAC is also welcoming 12 international travel teams representing various countries and territories worldwide to participate in the first-ever World Games Division.', imageUrl: product1 },
    { id: 2, description: 'Bubble has been designing and catering spectacular luxury events for over 20 years. With accreditations at London’s historic palaces, unique venues & contemporary spaces, our team of planners create exceptional events just about anywhere. Gala dinners, one-of-a-kind weddings, cocktail receptions, or immersive experiences: we bring the same passion and creative flair to every brief. Behind the style lies our commitment to beautiful flavours, professional service and operational excellence. Bubble’s Michelin-trained chefs create contemporary culinary wonders, sourcing only the highest quality, sustainable ingredients.', imageUrl: product2 },
    { id: 3, description: 'Halloween is on the 31st of October so this year it falls on a Tuesday, which means many of the Halloween events take place on the weekend before it. Get ahead by planning your Jack-o-lantern designs and picking out Halloween costumes (are you in the scary or cute costume camp?). Then, get excited for trick-or-treating, Halloween parties galore and loads of creepy fun at all these Halloween events in Singapore! We’ll be updating this list of the best Halloween events in Singapore for kids, so check back for new fun!', imageUrl: product3 },
    { id: 4, description: 'The Commission then warned against campaigning outside of the designated campaign period from October 19-28 and said that a liquor ban will also be imposed from October 29 until the election day on October 30. Comelec Antique is also in close coordination with government peacekeeping forces such as the Philippine National Police, Philippine Coast Guard, and Armed Forces of the Philippines to guarantee peace, order, and public safety in the conduct of the local polls.', imageUrl: product4 },
    { id: 5, description: 'The draw for the Round of 16 is set for 18 December, with the ties played over the course of four weeks. The 16 qualified teams are divided into two halves of eight, and clubs from the same national federation and those that have already faced each other in the group stages will not be able to meet again in the Round of 16. Two-legged ties will determine the winner in the Round of 16, quarter-finals and semi-finals.', imageUrl: product5 },
    { id: 6, description: 'City Councilor Jocelyn “Joy” Pesquera told SunStar Cebu that hotels and pension houses have been receiving numerous reservations from tourists eager to witness the festival that will be dubbed Sinulog sa Sugbo Philippines on Jan. 21, 2024.', imageUrl: product6 },
    { id: 7, description: 'Join us from March 22 to March 24, 2024. Dont miss this extraordinary event, designed to inspire and elevate your wedding planning journey! Everlasting Journeys Begin: Bridging Hearts at the Quezon City Wedding and Travel Expo at Ayala Malls Cloverleaf', imageUrl: product7 },
    { id: 8, description: 'You might know it as the song that people sing or at least try to sing  every year on New Years Eve. Once the clock strikes midnight and the calendar flips to 2022, people around the world will join in a chorus of "Auld Lang Syne." But if you are  struggling to remember or even comprehend the lyrics of the tune, you are probably not alone. The song was written centuries ago and contains some words we normally never use in the U.S. today The lyrics were recorded in a poem by Scottish poet Robert Burns in 1788, though he noted that the song had already been in circulation for years before he put it in writing. ', imageUrl: product8 },
    { id: 9, description: 'CEBU CITY, Philippines All roads lead to Cebu City for the Palarong Pambansa 2024. This was officially announced by no less than Department of Education (DepE) Secretary and Vice President Sara Duterte during the closing ceremony at the Marikina City Sports Center on Saturday, August 5, 2023. No less than Cebu City Mayor Mike Rama accepted the hosting rights after the announcement. ', imageUrl: product9 },
    { id: 10, description: 'The Anchor for the event who will make the environment lively with his playful aura. A game host can be a great addition to a birthday party, helping to keep the energy high and the guests engaged in fun activities. Hiring a game host for a birthday party can add an extra element of fun and entertainment for guests of all ages.', imageUrl: product10 },
    { id: 11, description: 'Our company TIJARA is high end wedding planner in north region. We are specialized in organizing wedding ceremonies and familiar celebrations to your desired result. We keep all weddings regardless in kind of size which are made to your specification and budget. We not just only prescribe the wedding package but we go extra miles to satisfy you and turn wedding dreams into a reality. Our Services include but are not limited to : Marriage Planning & Customized consultation, Invitations Planning & printing, Theme wedding, thematic decor & flower decoration, Venue selection, Menu planning, Food & Beverages, Choreography, Host & Hostess, Designer Garments, Fire Works along with allied items, Artists, melodies & entertainment, Travel services & To - and - fro transportation ,Video Coverage / Photography ,Furniture and electrical appliances, Honeymoon packages for India and abroad with destinations.', imageUrl: product11 },
    { id: 12, description: 'Birthdays are popular the world over. Whether it is a small child or an aged grandpa, this is a special occasion and needs a special celebration. For most of us, a birthday is something mundane. An event that comes every year and goes away only to come again. This is especially true for adults and those that have not been brought up in that environment. However, for some people, having a birthday party is a big deal. This is especially the case for teenagers and parents trying to ingrain the idea into their young ones. Most people might not give a second glance at the services of a birthday planner. But often in trying to do it all ourselves, we are unable to do justice to it. A birthday party planner can easily help make it a grand success.', imageUrl: product12 },
  ];

  const event = events.find(event => event.id === parseInt(eventId, 10));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-details-container">
      <div className="event-details">
        <h2>{event.name}</h2>
        <div className="image-container">
          <img src={event.imageUrl} alt={`Event ${event.id}`} />
        </div>
        <p>{event.description}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default EventDetails;
