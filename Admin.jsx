import { Link, Outlet } from 'react-router-dom';
import './style.css';

const Admin = () => {
  

  return (
    <>
      <div className="admin-container">
        <header>
          <div>
            <h2>Event Management</h2>
          </div>
          <nav>
            <h6>Welcome, Admin!</h6>
            <Link to="/login"><h6>Log out</h6></Link>
          </nav>
        </header>

        <div className="sidebar-container">
            <p>MAIN NAVIGATION</p>
            <ul>
              <li><Link to="events-calendar">Events Calendar</Link></li>
              <li><Link to="events-booking">Event Booking</Link></li>
              <li><Link to="user-details">User Details</Link></li>
            </ul>
          </div>
      </div>
      <Outlet/>
    </> 
    
  );
};

export default Admin;
